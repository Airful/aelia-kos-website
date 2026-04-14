"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const offerings = [
  {
    num: "01",
    symbol: "◎",
    title: "The Synchronicity Engine",
    desc: "Your private AI, built around you. It learns your professional background, personal preferences and timing — then surfaces the right people, at the right moment, for your growth. Trained on numerology and astrology, it is designed to create genuine moments of connection and lasting impact in your life and work.",
    tag: "Available 24/7 · Continuously evolving",
  },
  {
    num: "02",
    symbol: "◐",
    title: "Live Transmissions",
    desc: "Monthly live sessions held by Aelia Kos — a well-held space to navigate the collective currents of the moment together. Bring what's alive in your reality and unlock it in the company of others moving through similar terrain. Part transmission, part live inquiry, part emergence.",
    tag: "Monthly · Replay included",
  },
  {
    num: "03",
    symbol: "✦",
    title: "The Community",
    desc: "A curated space of conscious high achievers — founders, investors, superconnectors, creatives, and practitioners who take both their inner work and their outer impact seriously.",
    tag: "Always on · Private & moderated",
  },
  {
    num: "04",
    symbol: "◑",
    title: "The Universe Times",
    desc: "A members-only newsletter weaving current cosmic intelligence — numerological patterns, astrological rhythms, geopolitical insights, emergent business trends, and intuitive guidance about what's coming — into timely counsel for your life and work.",
    tag: "Monthly · Members only",
  },
];

const commitments = [
  { value: "~2h", label: "Minimum / month" },
  { value: "∞", label: "If you go deep" },
  { value: "1×", label: "Live session / month" },
];

const terms = [
  "Your first month is completely free — full access, no limitations.",
  <>Billing begins on day 31 at <strong className="font-medium text-[#1a1510]">111 CHF / month</strong>, billed monthly.</>,
  "Cancel anytime before day 31 and you will not be charged.",
  "No hidden fees. No annual lock-in. You stay because it's valuable.",
];

function Stars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    for (let i = 0; i < 100; i++) {
      const s = document.createElement("div");
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

export function WhatsInsideClient() {
  return (
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
        <span className="text-[10px] tracking-[0.22em] uppercase text-[#7a7068]">
          Step 1 of 2 &middot;{" "}
          <em className="not-italic text-[#A9540F]">Review your membership</em>
        </span>
      </nav>

      {/* HERO */}
      <section className="relative z-[1] pt-[160px] pb-[80px] px-8 text-center max-w-[720px] mx-auto">
        <AnimatedSection>
          <span className="eyebrow">Universe Portal — Membership</span>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h1
            className="text-[clamp(38px,6vw,62px)] font-light leading-[1.1] tracking-[-0.015em] text-[#1a1510] mb-7"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Here&apos;s exactly what you&apos;re
            <br />
            stepping <em className="italic text-[#A9540F]">into</em>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-[15px] leading-[1.9] font-light text-[#1a1510] opacity-65 max-w-[500px] mx-auto">
            Before you proceed to checkout, we want you to feel completely clear.
            Here is what your membership includes, what it costs, and what it asks
            of your time.
          </p>
        </AnimatedSection>
      </section>

      <div className="section-divider" />

      {/* OFFERINGS */}
      <section className="relative z-[1] py-[80px] px-6 md:px-12 max-w-[960px] mx-auto">
        <AnimatedSection>
          <span className="eyebrow text-center block mb-11">
            What&apos;s included in your membership
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(26,21,16,0.1)] border border-[rgba(26,21,16,0.1)]">
            {offerings.map((o) => (
              <div
                key={o.num}
                className="bg-[#e8e4df] p-8 md:p-10 hover:bg-[rgba(169,84,15,0.06)] transition-colors"
              >
                <span
                  className="text-xs tracking-[0.14em] text-[#A9540F] opacity-70 mb-3 block"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {o.symbol} &nbsp;{o.num}
                </span>
                <h3
                  className="text-[21px] font-normal text-[#1a1510] mb-3 leading-[1.2]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {o.title}
                </h3>
                <p className="text-[13.5px] leading-[1.85] text-[#7a7068] font-light mb-4">
                  {o.desc}
                </p>
                <span className="text-[10px] tracking-[0.16em] uppercase text-[#A9540F] opacity-60">
                  {o.tag}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <div className="section-divider" />

      {/* TIME COMMITMENT — sky image strip */}
      <section className="relative z-[1] overflow-hidden">
        <div className="relative py-[80px] px-6 md:px-12 text-center">
          {/* Sky background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/sky.jpg"
              alt=""
              fill
              className="object-cover object-center"
            />
            {/* Warm overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 60% 50% at 50% 30%, rgba(169,84,15,0.18) 0%, transparent 65%),
                  radial-gradient(ellipse 80% 60% at 20% 80%, rgba(169,84,15,0.10) 0%, transparent 55%)
                `,
              }}
            />
          </div>

          <AnimatedSection>
            <h2
              className="relative z-[1] text-[clamp(26px,3.5vw,36px)] font-light text-[#e8e4df] mb-14 italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Your honest time commitment
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="relative z-[1] flex flex-col md:flex-row items-center justify-center gap-14 md:gap-24">
              {commitments.map((c) => (
                <div key={c.label} className="flex flex-col items-center gap-3">
                  <span
                    className="text-[clamp(46px,8vw,72px)] font-light text-[#A9540F] leading-none"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {c.value}
                  </span>
                  <span className="text-[10px] tracking-[0.22em] uppercase text-[rgba(232,228,223,0.6)]">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FREE TRIAL */}
      <section className="relative z-[1] py-[80px] px-6 md:px-12 max-w-[720px] mx-auto text-center">
        <AnimatedSection>
          <h2
            className="text-[clamp(32px,5vw,48px)] font-light text-[#1a1510] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Your first month is <em className="italic text-[#A9540F]">free</em>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-[15px] leading-[1.9] font-light text-[#1a1510] opacity-70 mb-10">
            We&apos;d rather you experience it than wonder about it. So your first
            30 days cost nothing.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-[520px] mx-auto text-left space-y-4">
            {terms.map((term, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-[#A9540F] text-lg mt-0.5 shrink-0">✓</span>
                <span className="text-[14px] leading-[1.75] text-[#1a1510] font-light">
                  {term}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <div className="section-divider" />

      {/* TESTIMONIAL */}
      <section className="relative z-[1] pt-[60px] pb-[20px] px-6 md:px-12 max-w-[800px] mx-auto">
        <AnimatedSection>
          <div className="p-8 md:p-10 md:px-11 border-l-2 border-[#A9540F] bg-[rgba(169,84,15,0.06)]">
            <p
              className="text-[clamp(17px,2.4vw,23px)] font-light italic leading-[1.55] text-[#1a1510]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              &ldquo;I had a great call with Aelia and her community. The depth of
              conversation in that session was unlike anything I&apos;d found
              elsewhere. Business, mysticism and genuine human connection.&rdquo;
            </p>
            <cite className="block mt-4 not-italic text-[10px] tracking-[0.2em] uppercase text-[#A9540F] opacity-70">
              — Universe Portal Member
            </cite>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="relative z-[1] pt-[40px] pb-[80px] px-6 md:px-12 text-center">
        <AnimatedSection>
          <a
            href="https://buy.stripe.com/bJe9AV2qAf6qfaC6R493y05"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block overflow-hidden text-[11px] tracking-[0.24em] uppercase text-[#E0E0E0] no-underline px-12 py-5 transition-all hover:brightness-110"
          >
            <span className="absolute inset-0 z-0">
              <Image src="/sky.jpg" alt="" fill className="object-cover object-center" />
            </span>
            <span className="relative z-[1]">Claim my free month</span>
          </a>
          <p className="text-[12px] text-[#7a7068] mt-5 tracking-wide">
            You will not be charged today &nbsp;&middot;&nbsp; Cancel before day 31
            to pay nothing
          </p>
        </AnimatedSection>
      </section>

      {/* FOOTER */}
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
  );
}
