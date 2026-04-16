import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone } = await req.json();

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

    // Check if contact already exists
    const normalizedEmail = email.trim().toLowerCase();
    const { data: existing } = await supabase
      .from("contacts")
      .select("id, tags")
      .eq("email", normalizedEmail)
      .limit(1)
      .single();

    if (existing) {
      // Update existing contact — merge tags
      const currentTags = (existing.tags as string[]) ?? [];
      const newTags = Array.from(
        new Set([...currentTags, "Portal Membership", "Interested"])
      );
      await supabase
        .from("contacts")
        .update({
          first_name,
          last_name,
          phone: phone?.trim() || null,
          tags: newTags,
        })
        .eq("id", existing.id);
    } else {
      // Insert new contact
      const { error: dbError } = await supabase.from("contacts").insert({
        first_name,
        last_name,
        email: normalizedEmail,
        phone: phone?.trim() || null,
        type: "lead",
        status: "active",
        source: "website",
        tags: ["Portal Membership", "Interested"],
      });

      if (dbError) {
        console.error("Supabase insert error:", dbError);
      }
    }

    // Send notification to Aelia
    await resend.emails.send({
      from: "Universe Portal <noreply@aeliakos.com>",
      to: "aelia@aeliakos.com",
      subject: `New Portal Interest: ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 480px; margin: 0 auto; padding: 32px;">
          <h2 style="font-weight: 300; color: #1a1510; margin-bottom: 24px;">
            New Portal Interest Registration
          </h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #2e2820;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df; color: #7a7068;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df; font-weight: 400;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df; color: #7a7068;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df;">
                <a href="mailto:${email}" style="color: #A9540F;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df; color: #7a7068;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df;">${phone}</td>
            </tr>
            ` : ""}
          </table>
          <p style="margin-top: 24px; font-size: 13px; color: #7a7068;">
            This person registered their interest in Universe Portal via aeliakos.com
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
