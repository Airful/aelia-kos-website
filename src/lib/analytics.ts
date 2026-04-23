const GA_ID = "G-5J40LBS1CZ";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    clarity: (method: string, ...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  gtag("event", name, { send_to: GA_ID, ...params });
  window.clarity?.("event", name);
}

export function trackEnterPortal(source: "hero" | "pricing" | "cta") {
  trackEvent("enter_portal", { source });
}

export function trackRegisterInterestCta() {
  trackEvent("register_interest_cta");
}

export function trackRegisterSubmit() {
  trackEvent("register_interest_submit");
}

export function trackRegisterSuccess() {
  trackEvent("register_interest_success");
}

export function trackStripeClick(product: "private_mentorship" | "unify") {
  trackEvent("stripe_click", { product });
}

export function trackBookSessionView() {
  trackEvent("book_session_view");
}

export function trackExperienceInquiry() {
  trackEvent("experience_inquiry_click");
}
