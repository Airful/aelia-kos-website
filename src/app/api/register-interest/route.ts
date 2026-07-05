import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

function getSupabase() {
  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase registration environment is not configured");
  }

  return createClient(supabaseUrl, serviceRoleKey);
}

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  return new Resend(process.env.RESEND_API_KEY);
}

function mergeTags(currentTags: string[] | null | undefined, incomingTags: string[]) {
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

type SubmissionType = "portal" | "universe_club" | "private_mentorship" | "general";

const SUBMISSION_CONFIG: Record<
  SubmissionType,
  { fromLabel: string; tags: string[]; subjectPrefix: string; descriptor: string }
> = {
  portal: {
    fromLabel: "Universe Portal",
    tags: ["Portal Membership", "Interested"],
    subjectPrefix: "New Portal Interest",
    descriptor: "registered their interest in Universe Portal",
  },
  universe_club: {
    fromLabel: "Universe Club",
    tags: ["Universe Club Inquiry"],
    subjectPrefix: "Universe Club Inquiry",
    descriptor: "submitted an inquiry through the Universe Club page",
  },
  private_mentorship: {
    fromLabel: "Private Mentorship",
    tags: ["Private Mentorship Inquiry"],
    subjectPrefix: "Private Mentorship Inquiry",
    descriptor: "inquired about the 9-month Private Mentorship container",
  },
  general: {
    fromLabel: "aeliakos.com",
    tags: ["Website Inquiry"],
    subjectPrefix: "Website Inquiry",
    descriptor: "submitted a contact form on aeliakos.com",
  },
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message, social } = body;
    const type: SubmissionType =
      body.type && body.type in SUBMISSION_CONFIG ? body.type : "portal";
    const config = SUBMISSION_CONFIG[type];

    const supabase = getSupabase();
    const resend = getResend();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Split name into first/last
    const parts = name.trim().split(/\s+/);
    const first_name = parts[0];
    const last_name = parts.slice(1).join(" ") || null;

    // Route social link: LinkedIn URLs → linkedin_url column; anything else
    // gets appended to notes so Aelia can see it on the contact record.
    const socialTrimmed = social?.trim() || null;
    const isLinkedIn = socialTrimmed
      ? /linkedin\.com/i.test(socialTrimmed)
      : false;
    const linkedinUrl = isLinkedIn ? socialTrimmed : null;
    const socialNote =
      socialTrimmed && !isLinkedIn
        ? `Social/link: ${socialTrimmed}`
        : null;

    // Check if contact already exists
    const normalizedEmail = email.trim().toLowerCase();
    const { data: existingRows, error: lookupError } = await supabase
      .from("contacts")
      .select("id, tags, notes, linkedin_url")
      .eq("email", normalizedEmail)
      .order("created_at", { ascending: false })
      .order("id", { ascending: true })
      .limit(1);
    const existing = existingRows?.[0];

    if (lookupError) {
      console.error("Supabase contact lookup error:", lookupError);
    }

    // Build new note entry (prepended to existing notes with date + type)
    const today = new Date().toISOString().split("T")[0];
    const noteParts: string[] = [];
    if (message?.trim()) noteParts.push(message.trim());
    if (socialNote) noteParts.push(socialNote);
    const noteEntry =
      noteParts.length > 0
        ? `[${today} · ${config.subjectPrefix}] ${noteParts.join(" · ")}`
        : null;

    if (existing) {
      const newTags = mergeTags(existing.tags as string[] | null, config.tags);
      const existingNotes = (existing.notes as string | null) ?? "";
      const updatedNotes = noteEntry
        ? existingNotes
          ? `${noteEntry}\n\n${existingNotes}`
          : noteEntry
        : existingNotes || null;

      await supabase
        .from("contacts")
        .update({
          first_name,
          last_name,
          phone: phone?.trim() || null,
          tags: newTags,
          // Only overwrite linkedin_url if we have a new one AND the field is empty
          ...(linkedinUrl && !existing.linkedin_url
            ? { linkedin_url: linkedinUrl }
            : {}),
          ...(noteEntry ? { notes: updatedNotes } : {}),
        })
        .eq("id", existing.id);
    } else {
      const { error: dbError } = await supabase.from("contacts").insert({
        first_name,
        last_name,
        email: normalizedEmail,
        phone: phone?.trim() || null,
        linkedin_url: linkedinUrl,
        type: "lead",
        status: "active",
        source: "website",
        tags: config.tags,
        notes: noteEntry,
      });

      if (dbError) {
        console.error("Supabase insert error:", dbError);
      }
    }

    // Send notification to Aelia
    await resend.emails.send({
      from: `${config.fromLabel} <noreply@aeliakos.com>`,
      to: "aelia@aeliakos.com",
      replyTo: email,
      subject: `${config.subjectPrefix}: ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 480px; margin: 0 auto; padding: 32px;">
          <h2 style="font-weight: 300; color: #1a1510; margin-bottom: 24px;">
            ${escapeHtml(config.subjectPrefix)}
          </h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #2e2820;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df; color: #7a7068; width: 90px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df; font-weight: 400;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df; color: #7a7068;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df;">
                <a href="mailto:${escapeHtml(email)}" style="color: #A9540F;">${escapeHtml(email)}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df; color: #7a7068;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df;">${escapeHtml(phone)}</td>
            </tr>
            ` : ""}
            ${socialTrimmed ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df; color: #7a7068;">Social / Link</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df;">
                ${/^https?:\/\//i.test(socialTrimmed)
                  ? `<a href="${escapeHtml(socialTrimmed)}" style="color: #A9540F;">${escapeHtml(socialTrimmed)}</a>`
                  : escapeHtml(socialTrimmed)}
              </td>
            </tr>
            ` : ""}
            ${message ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df; color: #7a7068; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</td>
            </tr>
            ` : ""}
          </table>
          <p style="margin-top: 24px; font-size: 13px; color: #7a7068;">
            This person ${escapeHtml(config.descriptor)}. Reply to this email to respond directly.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Register interest error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
