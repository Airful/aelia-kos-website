import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import Stripe from "stripe";
import {
  buildPortalSubscriptionNotificationHtml,
  buildPortalWelcomeEmailHtml,
  buildPortalWelcomeEmailText,
} from "@/lib/portal-subscription-email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }

  return new Stripe(process.env.STRIPE_SECRET_KEY);
}

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  return new Resend(process.env.RESEND_API_KEY);
}

function getSupabase() {
  const supabaseUrl =
    process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) return null;
  return createClient(supabaseUrl, serviceRoleKey);
}

function stripeId(
  value:
    | string
    | Stripe.Customer
    | Stripe.DeletedCustomer
    | Stripe.Subscription
    | Stripe.PaymentLink
    | null
): string | null {
  if (!value) return null;
  if (typeof value === "string") return value;
  return value.id;
}

function splitName(name?: string | null) {
  const parts = name?.trim().split(/\s+/).filter(Boolean) ?? [];
  return {
    first_name: parts[0] ?? null,
    last_name: parts.slice(1).join(" ") || null,
  };
}

function mergeTags(
  currentTags: string[] | null | undefined,
  incomingTags: string[]
) {
  const tags: string[] = [];
  const seen = new Set<string>();

  for (const tag of [...(currentTags ?? []), ...incomingTags]) {
    const trimmed = tag.trim();
    const key = trimmed.toLowerCase();
    if (!trimmed || seen.has(key)) continue;
    tags.push(trimmed);
    seen.add(key);
  }

  return tags;
}

async function upsertPortalSubscriberContact({
  email,
  name,
  customerId,
  subscriptionId,
}: {
  email: string;
  name?: string | null;
  customerId?: string | null;
  subscriptionId?: string | null;
}) {
  const supabase = getSupabase();
  if (!supabase) return;

  const normalizedEmail = email.trim().toLowerCase();
  const { first_name, last_name } = splitName(name);
  const tags = ["Portal Membership", "Subscribed", "Stripe Subscriber"];
  const today = new Date().toISOString().split("T")[0];
  const noteEntry = [
    `[${today} · Portal Subscription] Confirmed subscription via Stripe.`,
    customerId ? `Stripe customer: ${customerId}` : null,
    subscriptionId ? `Subscription: ${subscriptionId}` : null,
  ]
    .filter(Boolean)
    .join(" ");

  const { data: existingRows, error: lookupError } = await supabase
    .from("contacts")
    .select("id, tags, notes")
    .eq("email", normalizedEmail)
    .order("created_at", { ascending: false })
    .order("id", { ascending: true })
    .limit(1);

  if (lookupError) {
    console.error("Stripe webhook contact lookup error:", lookupError);
    return;
  }

  const existing = existingRows?.[0];

  if (existing) {
    const existingNotes = (existing.notes as string | null) ?? "";
    const hasSubscriptionNote = subscriptionId
      ? existingNotes.includes(subscriptionId)
      : existingNotes.includes("Confirmed subscription via Stripe");

    const updatedNotes = hasSubscriptionNote
      ? existingNotes || null
      : existingNotes
        ? `${noteEntry}\n\n${existingNotes}`
        : noteEntry;

    const { error: updateError } = await supabase
      .from("contacts")
      .update({
        ...(first_name ? { first_name } : {}),
        ...(last_name ? { last_name } : {}),
        status: "active",
        source: "stripe",
        tags: mergeTags(existing.tags as string[] | null, tags),
        notes: updatedNotes,
      })
      .eq("id", existing.id);

    if (updateError) {
      console.error("Stripe webhook contact update error:", updateError);
    }

    return;
  }

  const { error: insertError } = await supabase.from("contacts").insert({
    first_name,
    last_name,
    email: normalizedEmail,
    type: "member",
    status: "active",
    source: "stripe",
    tags,
    notes: noteEntry,
  });

  if (insertError) {
    console.error("Stripe webhook contact insert error:", insertError);
  }
}

async function handleCheckoutSessionCompleted(
  session: Stripe.Checkout.Session
) {
  if (session.mode !== "subscription") return;

  const expectedPaymentLink = process.env.STRIPE_PORTAL_PAYMENT_LINK_ID;
  const paymentLinkId = stripeId(session.payment_link);
  if (expectedPaymentLink && paymentLinkId !== expectedPaymentLink) return;

  const email = session.customer_details?.email ?? session.customer_email;
  if (!email) {
    console.error("Stripe checkout session completed without customer email", {
      sessionId: session.id,
    });
    return;
  }

  const name = session.customer_details?.name ?? null;
  const customerId = stripeId(session.customer);
  const subscriptionId = stripeId(session.subscription);
  const resend = getResend();
  const notifyEmail =
    process.env.PORTAL_SUBSCRIPTION_NOTIFY_EMAIL ?? "aelia@aeliakos.com";

  await upsertPortalSubscriberContact({
    email,
    name,
    customerId,
    subscriptionId,
  });

  await Promise.all([
    resend.emails.send({
      from: "Universe Portal <noreply@aeliakos.com>",
      to: notifyEmail,
      replyTo: email,
      subject: `New Portal Subscription: ${name ?? email}`,
      html: buildPortalSubscriptionNotificationHtml({
        email,
        name,
        checkoutSessionId: session.id,
        customerId,
        subscriptionId,
      }),
    }),
    resend.emails.send({
      from: "Aelia Kos <noreply@aeliakos.com>",
      to: email,
      replyTo: notifyEmail,
      subject: "Welcome to Universe Portal",
      html: buildPortalWelcomeEmailHtml(name),
      text: buildPortalWelcomeEmailText(name),
    }),
  ]);
}

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { error: "Stripe webhook is not configured" },
      { status: 400 }
    );
  }

  const payload = await request.text();

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(
      payload,
      signature,
      webhookSecret
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid signature";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      await handleCheckoutSessionCompleted(
        event.data.object as Stripe.Checkout.Session
      );
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Stripe webhook handler error:", err);
    return NextResponse.json(
      { error: "Stripe webhook handler failed" },
      { status: 500 }
    );
  }
}
