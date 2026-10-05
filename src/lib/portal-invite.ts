/**
 * Ask the Universe Club platform for a Portal invite bound to a paying
 * subscriber's email (Universe Club ENG-740).
 *
 * The platform route is `POST /api/integrations/portal-invite`, authenticated
 * with a dedicated shared secret. On any failure we return null and the caller
 * falls back to The Portal's shared join link, so a platform hiccup never
 * blocks the welcome email.
 */

export const DEFAULT_PLATFORM_URL = "https://platform.universeclub.ai";
const TIMEOUT_MS = 8000;

export type PortalInviteOutcome =
  | { status: "created" | "renewed"; inviteUrl: string }
  | { status: "already_member"; loginUrl: string };

export function platformUrl(): string {
  return (process.env.UNIVERSE_PLATFORM_URL ?? DEFAULT_PLATFORM_URL).replace(/\/+$/, "");
}

export async function requestPortalInvite(input: {
  email: string;
  name?: string | null;
  customerId?: string | null;
}): Promise<PortalInviteOutcome | null> {
  const secret = process.env.UNIVERSE_PORTAL_INVITE_SECRET;
  if (!secret) {
    console.warn("Portal invite: UNIVERSE_PORTAL_INVITE_SECRET not set, using the shared join link");
    return null;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`${platformUrl()}/api/integrations/portal-invite`, {
      method: "POST",
      headers: { "content-type": "application/json", "x-portal-integration-secret": secret },
      body: JSON.stringify({
        email: input.email,
        fullName: input.name ?? null,
        stripeCustomerId: input.customerId ?? null,
      }),
      signal: controller.signal,
      cache: "no-store",
    });
    const data = (await res.json().catch(() => null)) as Record<string, unknown> | null;
    if (!res.ok) {
      console.error("Portal invite: platform refused", { status: res.status, error: data?.error });
      return null;
    }
    if (data?.status === "already_member" && typeof data.loginUrl === "string") {
      return { status: "already_member", loginUrl: data.loginUrl };
    }
    if ((data?.status === "created" || data?.status === "renewed") && typeof data.inviteUrl === "string") {
      return { status: data.status, inviteUrl: data.inviteUrl };
    }
    console.error("Portal invite: unexpected platform response", data);
    return null;
  } catch (err) {
    console.error("Portal invite: request failed", err);
    return null;
  } finally {
    clearTimeout(timer);
  }
}
