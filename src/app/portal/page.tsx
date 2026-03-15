"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import AnimatedSection from "@/components/AnimatedSection";

const stripePromise = loadStripe(
  "pk_live_51SgpncPgHFpLtxXi1NSzopEJQpgQbrChrfWRUiR2AttYUbRLCtGHCq2GtwZDZ3bqF0urFikRf6650Sch4tpsJDJN00kd9vh729"
);

const traits = [
  <>You check the astrology <em>and</em> the analytics</>,
  "You feel the collective shifting before the news does",
  "You navigate more intense waves than most — and you're learning to call that a gift",
  "You are building a business with soul, not just a business with revenue",
  "You have been looking for a room of people who understand this path",
];

const offerings = [
  {
    num: "I",
    title: "The Monthly Transmission",
    desc: "Each month, when the energy has gathered, Aelia shares a live orientation of what is moving in the collective field. Not a coaching call. Not a masterclass. A transmission.",
  },
  {
    num: "II",
    title: "Universe Club Access",
    desc: "Full access to the Universe Club AI synchronicity engine — the platform that connects you to your essence-aligned community. Not people in your industry. People in your frequency.",
  },
  {
    num: "III",
    title: "A Living Community",
    desc: "A small, curated gathering of founders, creators, and investors walking this same unusual path. Where spirituality and business are not opposites.",
  },
  {
    num: "IV",
    title: "The Field Itself",
    desc: "Being in right relationship with what is moving in the world. What you enter into now, you build for the next cycle.",
  },
];

// Stars component for background particles
function Stars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    for (let i = 0; i < 140; i++) {
      const s = document.createElement("div");
      s.className = "star";
      const sz = Math.random() < 0.7 ? 1 : Math.random() < 0.85 ? 1.5 : 2;
      const bright =
        Math.random() < 0.3
          ? 0.45 + Math.random() * 0.25
          : 0.12 + Math.random() * 0.2;
      s.style.cssText = `
        position:absolute;border-radius:50%;background:#A9540F;
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        width:${sz}px;height:${sz}px;
        animation:twinkle ${4 + Math.random() * 8}s ease-in-out infinite ${-Math.random() * 12}s;
        --bright:${bright};opacity:0;
      `;
      el.appendChild(s);
    }
    return () => {
      el.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    />
  );
}

export default function PortalPage() {
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("success") === "true") {
        setShowSuccess(true);
      }
    }
  }, []);

  async function handleCheckout() {
    setCheckoutLoading(true);
    setPaymentMessage("");
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe failed to load");
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          { price: "price_1T9AyzPgHFpLtxXiXwxsLT10", quantity: 1 },
        ],
        mode: "subscription",
        successUrl:
          window.location.origin +
          window.location.pathname +
          "?success=true",
        cancelUrl: window.location.href,
      });
      if (error) {
        setPaymentMessage(error.message || "Something went wrong.");
        setCheckoutLoading(false);
      }
    } catch {
      setPaymentMessage("Something went wrong. Please try again.");
      setCheckoutLoading(false);
    }
  }

  return (
    <>
      <main
        className="min-h-screen text-[#1a1510]"
        style={{
          background: `
            radial-gradient(ellipse 70% 45% at 18% 5%, rgba(169,84,15,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 55% 40% at 85% 12%, rgba(169,84,15,0.06) 0%, transparent 55%),
            radial-gradient(ellipse 80% 55% at 50% 98%, rgba(26,21,16,0.14) 0%, transparent 65%),
            #e8e4df
          `,
        }}
      >
        <Stars />

        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-[18px] md:px-12 flex items-center justify-between bg-[rgba(232,228,223,0.82)] backdrop-blur-[16px] border-b border-[rgba(26,21,16,0.1)]">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Aelia Kos"
              width={38}
              height={38}
              className="h-[38px] w-auto opacity-85 hover:opacity-100 transition-opacity"
            />
          </Link>
          <a
            href="#join"
            className="text-[11px] tracking-[0.2em] uppercase text-[#1a1510] opacity-45 no-underline hover:opacity-100 hover:text-[#A9540F] transition-all"
          >
            Enter the Portal
          </a>
        </nav>

        {/* ── HERO ── */}
        <section className="relative z-[1] min-h-screen flex flex-col items-center justify-end px-8 pt-[100px] pb-[120px] text-center overflow-hidden">
          {/* Warm glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 55% 55% at 50% 62%, rgba(169,84,15,0.06) 0%, transparent 70%)",
            }}
          />

          {/* Arch */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[520px] pointer-events-none">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-t-[200px] border border-[rgba(169,84,15,0.22)] opacity-0 animate-[archIn_2.8s_ease_0.4s_forwards]" />
            {/* Inner ring */}
            <div className="absolute inset-[18px] rounded-t-[182px] border border-[rgba(26,21,16,0.1)] opacity-0 animate-[archIn_2.8s_ease_0.7s_forwards]" />
            {/* Fill glow */}
            <div className="absolute inset-0 rounded-t-[200px] bg-gradient-to-b from-[rgba(169,84,15,0.05)] to-transparent opacity-0 animate-[archIn_3s_ease_0.5s_forwards]" />
          </div>

          {/* Eyebrow */}
          <div className="absolute bottom-[532px] left-0 right-0 text-center whitespace-nowrap z-[2] text-[10px] tracking-[0.28em] uppercase text-[#A9540F] opacity-80 animate-[fadeUp_1s_ease_both_0.2s]">
            Aelia Kos presents
          </div>

          {/* Title */}
          <h1
            className="relative z-[2] text-[clamp(52px,8.5vw,90px)] font-light leading-[0.9] tracking-[-0.025em] text-[#1a1510] mt-5 animate-[fadeUp_1s_ease_both_0.45s]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Universe
            <br />
            <em className="italic text-[#A9540F]">Portal</em>
          </h1>

          {/* Details */}
          <div className="relative z-[2] flex flex-col items-center mt-[22px] animate-[fadeUp_1s_ease_both_0.7s]">
            <span className="text-[11px] tracking-[0.18em] font-light text-[#7a7068]">
              A living membership
            </span>
            <span
              className="text-[17px] font-light tracking-[0.08em] text-[#1a1510] mt-[5px]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              CHF 111 / month
            </span>
          </div>

          {/* CTA */}
          <div className="relative z-[2] mt-[26px] animate-[fadeUp_1s_ease_both_0.9s]">
            <a href="#join" className="btn-ghost">
              Enter the Portal
            </a>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-7 left-0 right-0 flex flex-col items-center gap-[7px] z-[2] animate-[fadeUp_1s_ease_both_1.2s]">
            <span className="text-[9px] tracking-[0.26em] uppercase text-[#1a1510] opacity-30">
              Discover
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-[#A9540F] to-transparent animate-[linePulse_2.4s_ease-in-out_infinite]" />
          </div>
        </section>

        <div className="section-divider" />

        {/* ── FOR YOU ── */}
        <section className="relative z-[1] py-[92px] px-6 md:px-12 max-w-[800px] mx-auto">
          <AnimatedSection>
            <span className="eyebrow">This is for you if</span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2
              className="text-[clamp(36px,5vw,52px)] font-normal leading-[1.08] text-[#1a1510] mb-7 tracking-[-0.01em]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              You build from a
              <br />
              <em className="italic text-[#A9540F]">different place</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-[15px] leading-[1.85] font-light text-[#7a7068] max-w-[540px]">
              You sense things before they happen. You check the astrology{" "}
              <em
                className="italic text-[#1a1510]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                and
              </em>{" "}
              the analytics. You are building something that carries real meaning
              — and you need a room where that is not strange.
            </p>
          </AnimatedSection>

          <div className="flex flex-col mt-9 max-w-[600px]">
            {traits.map((trait, i) => (
              <AnimatedSection key={i} delay={0.3 + i * 0.08}>
                <div className="flex items-start gap-[18px] py-4 border-b border-[rgba(232,228,223,0.18)]">
                  <div className="w-1 h-1 rounded-full bg-[#A9540F] shrink-0 mt-[10px] opacity-70" />
                  <div className="text-sm leading-[1.8] font-light text-[#7a7068] [&>em]:italic [&>em]:text-[#1a1510] [&>em]:text-base" style={{ fontFamily: "var(--font-sans)" }}>
                    {trait}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ── WHAT YOU RECEIVE ── */}
        <section className="relative z-[1] py-[92px] px-6 md:px-12 max-w-[800px] mx-auto text-center">
          <AnimatedSection>
            <span className="eyebrow">What you receive</span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2
              className="text-[clamp(36px,5vw,52px)] font-normal leading-[1.08] text-[#1a1510] mb-7 tracking-[-0.01em]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Everything you need.
              <br />
              <em className="italic text-[#A9540F]">Nothing you don&apos;t.</em>
            </h2>
          </AnimatedSection>

          {/* Offerings grid */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(26,21,16,0.1)] border border-[rgba(26,21,16,0.1)] mt-11">
              {offerings.map((o) => (
                <div
                  key={o.num}
                  className="bg-[#e8e4df] p-8 md:p-9 text-left hover:bg-[rgba(169,84,15,0.06)] transition-colors"
                >
                  <span
                    className="text-xs tracking-[0.14em] text-[#A9540F] opacity-70 mb-3.5 block"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {o.num}
                  </span>
                  <div
                    className="text-[21px] font-normal text-[#1a1510] mb-2.5 leading-[1.2]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {o.title}
                  </div>
                  <p className="text-[13.5px] leading-[1.85] text-[#7a7068] font-light">
                    {o.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Pull quote */}
          <AnimatedSection delay={0.3}>
            <div className="mt-15 p-8 md:p-10 md:px-11 border-l-2 border-[#A9540F] bg-[rgba(169,84,15,0.06)] text-left">
              <p
                className="text-[clamp(19px,2.6vw,26px)] font-light italic leading-[1.55] text-[#1a1510]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                &ldquo;This is not a course.
                <br />
                Not a coaching program.
                <br />
                It is a <em>portal</em> — a place you belong to, while you
                build.&rdquo;
              </p>
              <cite className="block mt-4 not-italic text-[10px] tracking-[0.2em] uppercase text-[#A9540F] opacity-70">
                — Aelia
              </cite>
            </div>
          </AnimatedSection>
        </section>

        <div className="section-divider" />

        {/* ── ABOUT ── */}
        <section className="relative z-[1] py-[92px] px-6 md:px-12 max-w-[800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.7fr] gap-15 items-start">
            {/* Photo */}
            <AnimatedSection>
              <div className="relative max-w-[240px] md:max-w-none">
                <Image
                  src="/aelia-photo.jpg"
                  alt="Aelia"
                  width={300}
                  height={400}
                  className="w-full aspect-[3/4] object-cover object-top relative z-[1] contrast-[1.05] saturate-[0.88]"
                />
                {/* Orange frame offset */}
                <div className="absolute top-3.5 left-3.5 -right-3.5 -bottom-3.5 border border-[rgba(169,84,15,0.22)] pointer-events-none" />
              </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection delay={0.15}>
              <span className="eyebrow">Your guide</span>
              <div
                className="text-[42px] font-light text-[#1a1510] mb-[18px] leading-[1.1] tracking-[0.03em]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Aelia <em className="italic text-[#A9540F]">Kos</em>
              </div>
              <div className="text-[15px] leading-[1.85] font-light text-[#7a7068] max-w-[540px] space-y-3.5">
                <p>
                  Hi, I&apos;m Aelia — architect, experience designer, business
                  mentor and founder of Universe Club.
                </p>
                <p>
                  I work with deeply mystical high achievers building businesses
                  with Soul — people who sense that the next level isn&apos;t
                  about more, but about alignment. Together, we catalyze a new
                  paradigm of prosperity rooted in purpose.
                </p>
                <p>
                  My background spans regenerative architecture across
                  continents, large-scale operations including three Olympic
                  Games, and a decade of designing spaces — physical, digital,
                  and energetic — where transformation actually lands.
                </p>
                <p>
                  At the core of my work is field creation: the invisible
                  conditions under which people, capital, timing, and decisions
                  reorganize naturally.
                </p>
                <p>
                  Universe Club is that field made real — an AI synchronicity
                  engine for essence-aligned connections through people, places,
                  and opportunities. Built for high-caliber ecosystems that scale
                  without losing intimacy.
                </p>
                <p>
                  Universe Portal is the gateway into it. The living membership I
                  wish had existed when I began this path — and the most direct
                  way to enter the field.
                </p>
              </div>
              <div className="mt-8">
                <a href="#join" className="btn-ghost">
                  Enter the Portal →
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section
          id="join"
          className="relative z-[1] overflow-hidden py-[100px] px-6 md:px-12 text-center border-t border-[rgba(26,21,16,0.1)]"
        >
          {/* Background arch glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[580px] rounded-t-[210px] bg-gradient-to-b from-[rgba(169,84,15,0.06)] to-transparent pointer-events-none" />

          <AnimatedSection>
            <span className="eyebrow">Enter the portal</span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2
              className="relative z-[1] text-[clamp(28px,3.8vw,40px)] max-w-[340px] mx-auto"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Begin your
              <br />
              <em className="italic text-[#A9540F]">membership</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative z-[1] mt-[72px] flex flex-col items-center">
              <span
                className="text-xl font-light text-[#A9540F] tracking-[0.12em] -mb-4"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                CHF
              </span>
              <div
                className="text-[clamp(78px,13vw,126px)] font-light text-[#1a1510] leading-none tracking-[-0.035em]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                111
              </div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#7a7068] mt-2.5">
                per month &middot; cancel anytime
              </div>
              <div
                className="text-[15px] italic text-[#A9540F] opacity-70 mt-1.5"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                First Transmission: March 2026
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-sm leading-[1.85] text-[#7a7068] max-w-[400px] mx-auto mt-8 mb-11 relative z-[1]">
              No contracts. No complicated tiers.
              <br />
              <span className="opacity-55">
                Just an open door for those who recognise it.
              </span>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <button
              className="btn-enter relative z-[1]"
              onClick={handleCheckout}
              disabled={checkoutLoading}
            >
              {checkoutLoading ? "Opening..." : "Enter Universe Portal"}
            </button>
            {paymentMessage && (
              <p className="text-xs text-[#7a7068] mt-3.5 min-h-[18px] relative z-[1]">
                {paymentMessage}
              </p>
            )}
          </AnimatedSection>
        </section>

        {/* ── FOOTER ── */}
        <footer className="relative z-[1] px-6 py-8 md:px-12 border-t border-[rgba(26,21,16,0.1)] flex flex-col md:flex-row items-center justify-between gap-[18px]">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Aelia Kos"
              width={26}
              height={26}
              className="h-[26px] w-auto opacity-40"
            />
          </Link>
          <div className="flex flex-wrap justify-center gap-7">
            <Link
              href="/"
              className="text-[10px] tracking-[0.18em] uppercase text-[#1a1510] opacity-30 no-underline hover:opacity-80 transition-opacity"
            >
              Home
            </Link>
            <a
              href="mailto:aelia@aeliakos.com"
              className="text-[10px] tracking-[0.18em] uppercase text-[#1a1510] opacity-30 no-underline hover:opacity-80 transition-opacity"
            >
              Contact
            </a>
            <Link
              href="#"
              className="text-[10px] tracking-[0.18em] uppercase text-[#1a1510] opacity-30 no-underline hover:opacity-80 transition-opacity"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-[10px] tracking-[0.18em] uppercase text-[#1a1510] opacity-30 no-underline hover:opacity-80 transition-opacity"
            >
              Terms
            </Link>
          </div>
          <div className="text-[10px] text-[#1a1510] opacity-20 tracking-[0.1em]">
            Payments by Stripe
          </div>
        </footer>
      </main>

      {/* ── SUCCESS OVERLAY ── */}
      {showSuccess && (
        <div className="fixed inset-0 z-[200] bg-[#e8e4df] flex flex-col items-center justify-center text-center p-12">
          <div
            className="text-[44px] text-[#A9540F] mb-7"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            ✦
          </div>
          <h1
            className="text-[clamp(34px,6vw,60px)] font-light text-[#1a1510] mb-[22px] leading-[1.1]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            You have entered
            <br />
            the <em className="italic text-[#A9540F]">Portal</em>
          </h1>
          <p className="text-sm leading-[1.85] text-[#7a7068] max-w-[460px]">
            Welcome. You will receive a confirmation by email shortly.
            <br />
            <br />
            The first Transmission is coming — watch for the invitation in your
            inbox.
            <br />
            <br />
            With love and full presence,
            <br />
            Aelia
          </p>
        </div>
      )}
    </>
  );
}
