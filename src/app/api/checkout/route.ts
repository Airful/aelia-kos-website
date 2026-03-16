import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { priceId } = await req.json();

    if (!priceId || typeof priceId !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid priceId" },
        { status: 400 }
      );
    }

    const origin = req.headers.get("origin") || "";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/portal?success=true`,
      cancel_url: `${origin}/portal`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Something went wrong";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
