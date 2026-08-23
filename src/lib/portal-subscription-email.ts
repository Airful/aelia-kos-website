type SubscriberDetails = {
  email: string;
  name?: string | null;
  checkoutSessionId?: string | null;
  customerId?: string | null;
  subscriptionId?: string | null;
};

export const PORTAL_INVITE_URL =
  "https://platform.universeclub.ai/signup?ref=KDIPC8MR&workspace=445cedb2-5ce8-4989-86ca-8f09c6a16a8f";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function getSubscriberFirstName(name?: string | null): string {
  const firstName = name?.trim().split(/\s+/)[0];
  return firstName || "there";
}

export function buildPortalWelcomeEmailHtml(name?: string | null): string {
  const greetingName = escapeHtml(getSubscriberFirstName(name));

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Universe Portal</title>
    </head>
    <body style="margin:0; padding:0; background-color:#ffffff; font-family:Arial, Helvetica, sans-serif;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
        <tr>
          <td align="center" style="padding:0;">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ffffff;">
              <tr>
                <td style="padding:40px 40px 8px 40px;">
                  <p style="margin:0 0 18px 0; font-size:15px; line-height:1.6; color:#1a1510;">Dear ${greetingName},<br>Thank you for entering the Portal.</p>
                  <p style="margin:0 0 18px 0; font-size:15px; line-height:1.6; color:#1a1510;">This is a rather different space: simple, potent, noise-free and high-precision. Exactly the way I wish existed.</p>
                  <p style="margin:0 0 18px 0; font-size:15px; line-height:1.6; color:#1a1510;">If you made it this far you are somebody who moves at the forefront, sensing what others haven't named yet and have already crossed thresholds in life and business most people don't know exist. This is the field where your full range, the mystical and the strategic, the ancient knowing and the radically new, is not only welcome but expected.</p>
                  <p style="margin:0 0 28px 0; font-size:15px; line-height:1.6; color:#1a1510;">Welcome to the Portal.</p>
                </td>
              </tr>
              <tr>
                <td style="padding:0 40px;">
                  <hr style="border:none; border-top:1px solid #e0dcd5; margin:0;">
                </td>
              </tr>
              <tr>
                <td style="padding:28px 40px 4px 40px;">
                  <p style="margin:0 0 22px 0; font-size:15px; line-height:1.6; color:#1a1510;">Here is everything you need to begin.</p>
                </td>
              </tr>
              <tr>
                <td style="padding:0 40px 24px 40px;">
                  <p style="margin:0 0 4px 0; font-size:15px; line-height:1.6; font-weight:bold; color:#1a1510;">Book your onboarding call</p>
                  <p style="margin:0 0 6px 0; font-size:15px; line-height:1.6; color:#5c554e;">A short call to clarify your intentions and set up the Synchronicity Engine from day one.</p>
                  <a href="https://aeliakos.com/book-a-universe-connection-session" style="font-size:15px; line-height:1.6; color:#1a1510; text-decoration:underline;">Book here</a>
                </td>
              </tr>
              <tr>
                <td style="padding:0 40px 24px 40px;">
                  <p style="margin:0 0 4px 0; font-size:15px; line-height:1.6; font-weight:bold; color:#1a1510;">Activate your Universe AI</p>
                  <p style="margin:0 0 6px 0; font-size:15px; line-height:1.6; color:#5c554e;">Your synchronicity engine, available 24/7, surfacing who to meet at the right time.</p>
                  <a href="${PORTAL_INVITE_URL}" style="font-size:15px; line-height:1.6; color:#1a1510; text-decoration:underline;">Access it here</a>
                </td>
              </tr>
              <tr>
                <td style="padding:0 40px 24px 40px;">
                  <p style="margin:0 0 4px 0; font-size:15px; line-height:1.6; font-weight:bold; color:#1a1510;">Watch the recorded transmissions</p>
                  <p style="margin:0 0 6px 0; font-size:15px; line-height:1.6; color:#5c554e;">Short sessions to release old patterns and activate what's been dormant.</p>
                  <a href="https://youtube.com/playlist?list=PLwSCVx_RsgsDYbKY1gVRZNWmrYSCGJWZg&si=qQYm08imonKDIzRc" style="font-size:15px; line-height:1.6; color:#1a1510; text-decoration:underline;">Watch here</a>
                </td>
              </tr>
              <tr>
                <td style="padding:0 40px 32px 40px;">
                  <p style="margin:0 0 4px 0; font-size:15px; line-height:1.6; font-weight:bold; color:#1a1510;">Save the date</p>
                  <p style="margin:0; font-size:15px; line-height:1.6; color:#5c554e;">Monthly Collective Intelligence Call, hosted by me every 17th of each month on Zoom. (Calendar invite sent separately.)</p>
                </td>
              </tr>
              <tr>
                <td style="padding:0 40px;">
                  <hr style="border:none; border-top:1px solid #e0dcd5; margin:0;">
                </td>
              </tr>
              <tr>
                <td style="padding:28px 40px 48px 40px;">
                  <p style="margin:0 0 20px 0; font-size:15px; line-height:1.6; color:#1a1510;">I am glad you are here. You chose well. Now settle in.</p>
                  <p style="margin:0; font-size:15px; line-height:1.6; color:#1a1510;">Aelia Kos</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

export function buildPortalWelcomeEmailText(name?: string | null): string {
  const greetingName = getSubscriberFirstName(name);

  return `Dear ${greetingName},
Thank you for entering the Portal.

This is a rather different space: simple, potent, noise-free and high-precision. Exactly the way I wish existed.

If you made it this far you are somebody who moves at the forefront, sensing what others haven't named yet and have already crossed thresholds in life and business most people don't know exist. This is the field where your full range, the mystical and the strategic, the ancient knowing and the radically new, is not only welcome but expected.

Welcome to the Portal.

Here is everything you need to begin.

BOOK YOUR ONBOARDING CALL
A short call to clarify your intentions and set up the Synchronicity Engine from day one.
https://aeliakos.com/book-a-universe-connection-session

ACTIVATE YOUR UNIVERSE AI
Your synchronicity engine, available 24/7, surfacing who to meet at the right time.
${PORTAL_INVITE_URL}

WATCH THE RECORDED TRANSMISSIONS
Short sessions to release old patterns and activate what's been dormant.
https://youtube.com/playlist?list=PLwSCVx_RsgsDYbKY1gVRZNWmrYSCGJWZg&si=qQYm08imonKDIzRc

SAVE THE DATE
Monthly Collective Intelligence Call, hosted by me every 17th of each month on Zoom. (Calendar invite sent separately.)

I am glad you are here. You chose well. Now settle in.

Aelia Kos`;
}

export function buildPortalSubscriptionNotificationHtml(
  details: SubscriberDetails
): string {
  const rows = [
    ["Name", details.name ?? "Not provided"],
    ["Email", details.email],
    ["Stripe customer", details.customerId ?? "Not provided"],
    ["Subscription", details.subscriptionId ?? "Not provided"],
    ["Checkout session", details.checkoutSessionId ?? "Not provided"],
  ];

  return `
    <div style="font-family: Georgia, serif; max-width: 520px; margin: 0 auto; padding: 32px;">
      <h2 style="font-weight: 300; color: #1a1510; margin-bottom: 24px;">New Portal Subscription</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #2e2820;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df; color: #7a7068; width: 140px;">${escapeHtml(label)}</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df;">${escapeHtml(value)}</td>
              </tr>
            `
          )
          .join("")}
      </table>
      <p style="margin-top: 24px; font-size: 13px; color: #7a7068;">
        The Portal welcome email was sent automatically to ${escapeHtml(details.email)}.
      </p>
    </div>
  `;
}
