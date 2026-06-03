"use client";

import { useEffect, useRef, useState } from "react";
// Note: /api/checkout route kept for potential future use
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { trackEnterPortal } from "@/lib/analytics";

const traits = [
  <>
    <em>An acceleration across several dimensions</em> of your life and business
  </>,
  <>
    <em>Conversations that span business and mysticism</em>, where nothing is too taboo to address with people who truly understand
  </>,
  <>
    <em>Wisdom shared at the exact moment of transmission</em>, dissolving blocks inside your psyche in days rather than years
  </>,
  <>
    <em>An AI that knows you</em> — not generically, but with genuine depth — and surfaces people and opportunities who are timely for where you actually are
  </>,
];

const offerings = [
  {
    num: "I",
    title: "The Ecosystem",
    desc: "My best people around the world. Peer-level. Global. Equal voice. No hierarchy of expertise — only the quality of what each person carries and is willing to bring. Belonging is based on genuine resonance.",
  },
  {
    num: "II",
    title: "The Community Calls",
    desc: "Online gatherings held monthly. People being present together, sharing the edges of their work to find clarity through the intelligence of our collective.",
  },
  {
    num: "III",
    title: "The AI",
    desc: "A digital partner that serves your evolution. It knows your work, your destiny path and your timing and suggests who to meet at the right time and for the right reasons.",
  },
  {
    num: "IV",
    title: "The Transmissions",
    desc: "Live transmissions of truth, meant to help you approach the energetic layer of your reality and unlock codes that have been dormant inside of you. Recorded so you can access them anytime.",
  },
];

const commitments = [
  { value: "~2h", label: "Minimum / month" },
  { value: "∞", label: "If you go deep" },
  { value: "1×", label: "Live session / month" },
];

const trialTerms = [
  "Your first month is completely free — full access, no limitations.",
  <>Billing begins on day 31 at <strong className="font-medium text-[#1a1510]">111 CHF / month</strong>, billed monthly.</>,
  "Cancel anytime before day 31 and you will not be charged.",
  "No hidden fees. No annual lock-in. You stay because it's valuable.",
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
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("success") === "true") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setShowSuccess(true);
      }
    }
  }, []);

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
              width={76}
              height={38}
              className="h-[38px] w-auto opacity-85 hover:opacity-100 transition-opacity"
            />
          </Link>
          <Link
            href="/portal"
            className="text-[11px] tracking-[0.2em] uppercase text-[#1a1510] opacity-70 no-underline hover:opacity-100 hover:text-[#A9540F] transition-all"
          >
            Enter the Portal
          </Link>
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
            {/* Sky image inside arch */}
            <div className="absolute inset-0 rounded-t-[200px] overflow-hidden z-0">
              <Image
                src="/sky.jpg"
                alt=""
                width={400}
                height={520}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 30%" }}
                priority
              />
            </div>
            {/* Fill glow */}
            <div className="absolute inset-0 rounded-t-[200px] bg-gradient-to-b from-[rgba(169,84,15,0.05)] to-transparent opacity-0 animate-[archIn_3s_ease_0.5s_forwards]" />
          </div>

          {/* Eyebrow */}
          <div className="absolute bottom-[532px] left-0 right-0 text-center whitespace-nowrap z-[2] text-[10px] tracking-[0.28em] uppercase text-[#A9540F] opacity-80 animate-[fadeUp_1s_ease_both_0.2s]">
            Aelia Kos presents
          </div>

          {/* Title */}
          <h1
            className="relative z-[2] text-[clamp(52px,8.5vw,90px)] font-light leading-[0.9] tracking-[-0.025em] text-[#E0E0E0] mt-5 animate-[fadeUp_1s_ease_both_0.45s]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Universe
            <br />
            <em className="italic text-[#A9540F]">Portal</em>
          </h1>

          {/* Details */}
          <div className="relative z-[2] flex flex-col items-center mt-[22px] animate-[fadeUp_1s_ease_both_0.7s]">
            <span className="text-[11px] tracking-[0.18em] font-light text-[#C0C0C0]">
              A living membership
            </span>
            <span
              className="text-[17px] font-light tracking-[0.08em] text-[#E0E0E0] mt-[5px]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              CHF 111 / month
            </span>
          </div>

          {/* CTA */}
          <div className="relative z-[2] mt-[26px] animate-[fadeUp_1s_ease_both_0.9s]">
            <Link
              href="/register"
              onClick={() => trackEnterPortal("hero")}
              className="btn-ghost border-[rgba(224,224,224,0.55)] !text-[#E0E0E0] !opacity-100 hover:!border-[#A9540F]"
            >
              Enter the Portal
            </Link>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-7 left-0 right-0 flex flex-col items-center gap-[7px] z-[2] animate-[fadeUp_1s_ease_both_1.2s]">
            <span className="text-[9px] tracking-[0.26em] uppercase text-[#E0E0E0] opacity-50">
              Discover
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-[#A9540F] to-transparent animate-[linePulse_2.4s_ease-in-out_infinite]" />
          </div>
        </section>

        <div className="section-divider" />

        {/* ── FOR YOU ── */}
        <section className="relative z-[1] py-[92px] px-6 md:px-12 max-w-[800px] mx-auto">
          <AnimatedSection>
            <span className="eyebrow">This is for you</span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2
              className="text-[clamp(36px,5vw,52px)] font-normal leading-[1.08] text-[#1a1510] mb-7 tracking-[-0.01em]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              You move at
              <br />
              <em className="italic text-[#A9540F]">the forefront</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="text-[15px] leading-[1.85] text-[#1a1510] max-w-[600px] space-y-4 [&_.ni]:text-[#1a1510] [&_.ni]:font-medium">
              <p>
                You sense what others have not yet named. You cross thresholds
                that most people do not know exist.
              </p>
              <p>
                And somewhere along the way — in the rooms, the masterminds, the
                conferences, the communities — you noticed something. The
                conversation kept stopping short of where you actually are.
              </p>
              <p>
                Not because the people were not intelligent. Because{" "}
                <span className="ni">the field was not alive enough</span> to
                hold what you carry. The surface was impressive. The depth was
                absent.
              </p>
              <p>
                Rooms that required you to shrink or to perform. Rooms that
                celebrated your credentials while missing entirely who you are.
              </p>
              <p>You learned to leave early.</p>
              <p>
                What you have been looking for — without always having the words
                for it — is a field where the conversation begins where those
                rooms end.{" "}
                <span className="ni">
                  A space where you don&apos;t need to translate yourself. Where
                  your full range — the mystical and the precise, the strategic
                  and the strange, the ancient knowing and the radically new —
                  is not only welcome but expected.
                </span>
              </p>
              <p>That field exists.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-13 p-7 md:p-9 border-l-2 border-[#A9540F] bg-[rgba(169,84,15,0.06)]">
              <p
                className="text-[clamp(17px,2.3vw,22px)] font-light italic leading-[1.55] text-[#1a1510]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                &ldquo;I felt a precise call to be in that space with you.&rdquo;
              </p>
              <cite className="block mt-3 not-italic text-[10px] tracking-[0.2em] uppercase text-[#A9540F]">
                — A.F.
              </cite>
            </div>
          </AnimatedSection>
        </section>

        <div className="section-divider" />

        {/* ── THE ESSENCE ── */}
        <section className="relative z-[1] py-[92px] px-6 md:px-12 max-w-[800px] mx-auto text-center">
          <AnimatedSection>
            <span className="eyebrow">The essence of what this is</span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2
              className="text-[clamp(36px,5vw,52px)] font-normal leading-[1.08] text-[#1a1510] mb-9 tracking-[-0.01em]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Not a platform. Not a product.
              <br />
              <em className="italic text-[#A9540F]">A field of Synchronicity.</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="text-[15px] leading-[1.85] text-[#1a1510] max-w-[560px] mx-auto text-left space-y-4">
              <p>
                Universe Portal is not a platform. It is not a community product.
                It is not a course, a mastermind, or a method.
              </p>
              <p>
                It is a place where you see yourself, your life, your purpose —
                more clearly than you could outside it. Where you act differently
                because you see differently. Where your life transforms because
                your actions have.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-13 p-7 md:p-9 border-l-2 border-[#A9540F] bg-[rgba(169,84,15,0.06)] text-left max-w-[560px] mx-auto">
              <p
                className="text-[clamp(17px,2.3vw,22px)] font-light italic leading-[1.55] text-[#1a1510]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                &ldquo;Everything moved to make it possible to be there with
                you.&rdquo;
              </p>
              <cite className="block mt-3 not-italic text-[10px] tracking-[0.2em] uppercase text-[#A9540F]">
                — A.F.
              </cite>
            </div>
          </AnimatedSection>
        </section>

        <div className="section-divider" />

        {/* ── WHAT BECOMES POSSIBLE ── */}
        <section className="relative z-[1] py-[92px] px-6 md:px-12 max-w-[800px] mx-auto">
          <AnimatedSection>
            <span className="eyebrow">What becomes possible</span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2
              className="text-[clamp(36px,5vw,52px)] font-normal leading-[1.08] text-[#1a1510] mb-7 tracking-[-0.01em]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              What you can
              <br />
              <em className="italic text-[#A9540F]">expect</em>
            </h2>
          </AnimatedSection>

          <div className="flex flex-col mt-9 max-w-[600px]">
            {traits.map((trait, i) => (
              <AnimatedSection key={i} delay={0.2 + i * 0.08}>
                <div className="flex items-start gap-[18px] py-4 border-b border-[rgba(26,21,16,0.08)]">
                  <div className="w-1 h-1 rounded-full bg-[#A9540F] shrink-0 mt-[10px] opacity-70" />
                  <div className="text-[15px] leading-[1.8] text-[#1a1510] [&>em]:italic [&>em]:text-[#1a1510] [&>em]:font-medium [&>em]:not-italic" style={{ fontFamily: "var(--font-sans)" }}>
                    {trait}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.6}>
            <div className="mt-13 p-7 md:p-9 border-l-2 border-[#A9540F] bg-[rgba(169,84,15,0.06)]">
              <p
                className="text-[clamp(17px,2.3vw,22px)] font-light italic leading-[1.55] text-[#1a1510]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                &ldquo;This has become my life mission now.&rdquo;
              </p>
              <cite className="block mt-3 not-italic text-[10px] tracking-[0.2em] uppercase text-[#A9540F]">
                — N.G.
              </cite>
            </div>
          </AnimatedSection>
        </section>

        <div className="section-divider" />

        {/* ── THE FOUR ELEMENTS ── */}
        <section className="relative z-[1] py-[92px] px-6 md:px-12 max-w-[800px] mx-auto text-center">
          <AnimatedSection>
            <span className="eyebrow">What precisely you are getting into</span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2
              className="text-[clamp(36px,5vw,52px)] font-normal leading-[1.08] text-[#1a1510] mb-7 tracking-[-0.01em]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              The four
              <br />
              <em className="italic text-[#A9540F]">elements</em>
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
                  <p className="text-[13.5px] leading-[1.85] text-[#1a1510]">
                    {o.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        <div className="section-divider" />

        {/* ── TIME COMMITMENT — sky image strip ── */}
        <section className="relative z-[1] overflow-hidden">
          <div className="relative py-[80px] px-6 md:px-12 text-center">
            <div className="absolute inset-0 z-0">
              <Image
                src="/sky.jpg"
                alt=""
                fill
                className="object-cover object-center"
              />
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
                    <span className="text-[10px] tracking-[0.22em] uppercase text-[rgba(232,228,223,0.75)]">
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── WHAT IS REQUIRED ── */}
        <section className="relative z-[1] py-[92px] px-6 md:px-12 max-w-[800px] mx-auto">
          <AnimatedSection>
            <span className="eyebrow">What is required of you</span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2
              className="text-[clamp(36px,5vw,52px)] font-normal leading-[1.08] text-[#1a1510] mb-7 tracking-[-0.01em]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Presence &amp; Intention.
              <br />
              <em className="italic text-[#A9540F]">Not time.</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="text-[15px] leading-[1.85] text-[#1a1510] max-w-[600px] space-y-4">
              <p>
                What is required is your presence and clarity of intention. Not
                performance. Not credentials. Not agreement.
              </p>
              <p>
                Only this: that you arrive as you actually are, and bring what
                you genuinely carry.
              </p>
              <p>
                If that is available to you — the Portal will meet you there.
              </p>
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
              <div className="text-[15px] leading-[1.85] text-[#1a1510] max-w-[540px] space-y-3.5">
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
              </div>
              <div className="mt-8">
                <Link
                  href="/register"
                  onClick={() => trackEnterPortal("pricing")}
                  className="btn-ghost relative overflow-hidden !opacity-100 !text-[#E0E0E0] !border-[rgba(224,224,224,0.45)] hover:!border-[#A9540F]"
                >
                  <span className="absolute inset-0 z-0 pointer-events-none">
                    <Image src="/sky.jpg" alt="" width={200} height={50} className="w-full h-full object-cover object-center" />
                  </span>
                  <span className="relative z-[1]">Enter the Portal →</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── WHY THIS EXISTS ── */}
        <section className="relative z-[1] py-[92px] px-6 md:px-12 max-w-[800px] mx-auto">
          <AnimatedSection>
            <span className="eyebrow">Why this exists</span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2
              className="text-[clamp(36px,5vw,52px)] font-normal leading-[1.08] text-[#1a1510] mb-7 tracking-[-0.01em]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Experience of
              <br />
              <em className="italic text-[#A9540F]">a different way</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="text-[15px] leading-[1.85] text-[#1a1510] max-w-[600px] space-y-4 [&_.ni]:font-medium">
              <p>
                Universe Portal was built because the old ways of gathering
                people have reached their limit.
              </p>
              <p>
                The extractive model — where communities harvest attention and
                return noise — is visible now to anyone with eyes to see it. The
                performance model — where belonging requires agreement and
                credentials circulate in place of depth — is exhausting the very
                people who are here to build something new.
              </p>
              <p>
                This is a demonstration of a different way. The people inside are
                building businesses that are more like missions. They know that
                new ways are necessary. They can sense the old and move past it.
              </p>
              <p>
                They lean into what is genuinely new — not as a trend, but a
                reality in the making.{" "}
                <span className="ni">
                  They are drawn together by synchronicity, to remember what
                  happens when we meet with genuine intention and build with
                  care.
                </span>
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-13 p-7 md:p-9 border-l-2 border-[#A9540F] bg-[rgba(169,84,15,0.06)]">
              <p
                className="text-[clamp(17px,2.3vw,22px)] font-light italic leading-[1.55] text-[#1a1510]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                &ldquo;Inspiring. Truly inspiring.&rdquo;
              </p>
              <cite className="block mt-3 not-italic text-[10px] tracking-[0.2em] uppercase text-[#A9540F]">
                — G.B.
              </cite>
            </div>
          </AnimatedSection>
        </section>

        <div className="section-divider" />

        {/* ── FREE TRIAL ── */}
        <section className="relative z-[1] py-[80px] px-6 md:px-12 max-w-[720px] mx-auto text-center">
          <AnimatedSection>
            <h2
              className="text-[clamp(32px,5vw,48px)] font-light text-[#1a1510] mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Your first month is{" "}
              <em className="italic text-[#A9540F]">free</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-[15px] leading-[1.9] text-[#1a1510] opacity-80 mb-10">
              We&apos;d rather you experience it than wonder about it. So your
              first 30 days cost nothing.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="max-w-[520px] mx-auto text-left space-y-4">
              {trialTerms.map((term, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-[#A9540F] text-lg mt-0.5 shrink-0">
                    ✓
                  </span>
                  <span className="text-[14px] leading-[1.75] text-[#1a1510]">
                    {term}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
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
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#5d544a] mt-2.5">
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
            <p className="text-sm leading-[1.85] text-[#5d544a] max-w-[400px] mx-auto mt-8 mb-11 relative z-[1]">
              No contracts. No complicated tiers.
              <br />
              <span className="opacity-55">
                Just an open door for those who recognise it.
              </span>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <Link
              href="/register"
              onClick={() => trackEnterPortal("cta")}
              className="btn-enter relative z-[1] overflow-hidden !text-[#E0E0E0] hover:!text-white"
            >
              <span className="absolute inset-0 z-0 pointer-events-none">
                <Image src="/sky.jpg" alt="" width={200} height={50} className="w-full h-full object-cover object-center" />
              </span>
              <span className="relative z-[1]">Enter Universe Portal</span>
            </Link>
          </AnimatedSection>
        </section>

        {/* ── FOOTER ── */}
        <footer className="relative z-[1] px-6 py-8 md:px-12 border-t border-[rgba(26,21,16,0.1)] flex flex-col md:flex-row items-center justify-between gap-[18px]">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Aelia Kos"
              width={52}
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
          <p className="text-sm leading-[1.85] text-[#5d544a] max-w-[460px]">
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
