"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { trackEnterPortal } from "@/lib/analytics";

const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/bJe9AV2qAf6qfaC6R493y05";

const traits = [
  {
    lead: "The decision you've been circling for months, resolved",
    text: "in one conversation where the mystical and the strategic sit in the same sentence, and nobody blinks",
  },
  {
    lead: "The rare kind of person who's created real impact while maintaining true depth",
    text: "underneath it, gathered in one room",
  },
  {
    lead: "An AI that knows you",
    text: "and makes your first introduction within minutes of joining and surfaces patterns you don't even know about yourself",
  },
];

const offerings = [
  {
    num: "I",
    title: "The Ecosystem",
    desc: "Founders, investors, creators, and practitioners already building something real, who take both their inner work and their outer impact seriously. Peer-level. Global. Equal voice.",
  },
  {
    num: "II",
    title: "The Live Sessions",
    desc: "Once a month, each co-creator holds her own session: a space to be present together and find clarity through the intelligence of the collective.",
  },
  {
    num: "III",
    title: "The AI",
    desc: "A digital partner that serves your evolution, available 24/7. It knows your work, your destiny path and your timing, and surfaces who to meet, at the right time, for the right reasons.",
    link: "https://universeclub.ai/",
  },
  {
    num: "IV",
    title: "The Transmissions",
    desc: "Recorded sessions designed to shift the energetics helping you release old patterns and activate what's been dormant. Short enough to return to often. Available for as long as you're a member.",
  },
];

const commitments = [
  { value: "~2h", label: "Minimum / month" },
  { value: "∞", label: "If you go deep" },
  { value: "1×", label: "Live session / month" },
];

const doorTerms = [
  "Come in whenever you're ready.",
  "Invited by a co-creator? Your first month is free. Use their unique code.",
  "Join in 2026, and 111 CHF / month is locked in for as long as you stay. From January 1, 2027, membership changes to 222 CHF / month.",
  "Cancel anytime. No hidden fees, no annual lock-in.",
];

const membershipIncludes = [
  "An ecosystem of founders, investors, creatives, and practitioners serious about their inner work and their outer impact.",
  "Monthly Collective Intelligence Calls, every 17th. Hosted by Aelia Kos.",
  "Live sessions from our co-creators each month.",
  "Recorded Transmissions to embody powerful energy in your own life.",
  "Universe Club AI, your synchronicity engine, surfacing the right people, places and opportunities at exactly the right moment.",
];

function AnimatedSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}

function Stars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    for (let i = 0; i < 140; i++) {
      const s = document.createElement("div");
      const size = Math.random() < 0.7 ? 1 : Math.random() < 0.85 ? 1.5 : 2;
      const bright =
        Math.random() < 0.3
          ? 0.45 + Math.random() * 0.25
          : 0.12 + Math.random() * 0.2;

      s.className = "star";
      s.style.cssText = `
        position:absolute;border-radius:50%;background:#A9540F;
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        width:${size}px;height:${size}px;
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

function PortalCta({
  children = "Enter the Portal",
  source,
  variant = "ghost",
}: {
  children?: React.ReactNode;
  source: "hero" | "pricing" | "cta";
  variant?: "ghost" | "enter";
}) {
  return (
    <a
      href={STRIPE_CHECKOUT_URL}
      onClick={() => trackEnterPortal(source)}
      className={
        variant === "enter"
          ? "btn-enter relative z-[1]"
          : "btn-ghost !opacity-100"
      }
    >
      <span className="btn-label">{children}</span>
    </a>
  );
}

function Divider() {
  return <div className="section-divider" />;
}

function CopySection({
  eyebrow,
  title,
  accent,
  children,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <section
      className={`relative z-[1] py-[92px] px-6 md:px-12 max-w-[800px] mx-auto ${
        centered ? "text-center" : ""
      }`}
    >
      <AnimatedSection>
        <span className="eyebrow">{eyebrow}</span>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <h2
          className="portal-section-title text-[clamp(36px,5vw,52px)] font-normal leading-[1.08] text-[#1a1510] mb-7 tracking-[-0.01em]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {title}
          <br />
          <em className="inline-block mt-[9px] italic text-[#A9540F]">
            {accent}
          </em>
        </h2>
      </AnimatedSection>
      {children}
    </section>
  );
}

function PullQuote({
  quote,
  cite,
  className = "",
}: {
  quote: string;
  cite: string;
  className?: string;
}) {
  return (
    <AnimatedSection delay={0.3}>
      <div
        className={`mt-13 p-7 md:p-10 border-l-2 border-[#000000] bg-white ${className}`}
      >
        <p
          className="text-[clamp(17px,2.3vw,22px)] font-light italic leading-[1.55] text-[#1a1510]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          &ldquo;{quote}&rdquo;
        </p>
        <cite className="block mt-4 not-italic text-[10px] tracking-[0.2em] uppercase text-[#A9540F] opacity-70">
          · {cite}
        </cite>
      </div>
    </AnimatedSection>
  );
}

export default function PortalPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowSuccess(true);
    }
  }, []);

  return (
    <>
      <main
        className="portal-page min-h-screen text-[#1a1510]"
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
          <a
            href={STRIPE_CHECKOUT_URL}
            onClick={() => trackEnterPortal("hero")}
            className="absolute right-6 sm:static whitespace-nowrap text-[9px] tracking-[0.16em] sm:text-[11px] sm:tracking-[0.2em] uppercase text-[#1a1510] opacity-70 no-underline hover:opacity-100 hover:text-[#A9540F] transition-all"
          >
            <span className="sm:hidden">Enter</span>
            <span className="hidden sm:inline">Enter the Portal</span>
          </a>
        </nav>

        <section className="relative z-[1] min-h-screen flex flex-col items-center justify-end px-8 pt-[100px] pb-[132px] md:pb-[168px] text-center overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 55% 55% at 50% 62%, rgba(169,84,15,0.06) 0%, transparent 70%)",
            }}
          />

          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[520px] pointer-events-none"
            style={{ zIndex: 1 }}
          >
            <div className="absolute inset-0 rounded-t-[200px] border border-[rgba(169,84,15,0.22)] opacity-0 animate-[archIn_2.8s_ease_0.4s_forwards]" />
            <div className="absolute inset-[18px] rounded-t-[182px] border border-[rgba(26,21,16,0.1)] opacity-0 animate-[archIn_2.8s_ease_0.7s_forwards]" />
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
            <div className="absolute inset-0 rounded-t-[200px] bg-gradient-to-b from-[rgba(169,84,15,0.05)] to-transparent opacity-0 animate-[archIn_3s_ease_0.5s_forwards]" />
          </div>

          <div className="absolute bottom-[532px] left-0 right-0 text-center whitespace-nowrap z-[2] text-[10px] tracking-[0.28em] uppercase text-[#A9540F] opacity-80">
            Aelia Kos presents
          </div>

          <h1
            className="absolute left-0 right-0 bottom-[300px] z-[2] text-[clamp(52px,8.5vw,90px)] font-light leading-[0.9] tracking-[-0.025em] text-[#E0E0E0]"
            style={{ fontFamily: "var(--font-serif)", bottom: 300, zIndex: 3 }}
          >
            Universe
            <br />
            <em className="italic text-[#A9540F]">Portal</em>
          </h1>

          <div
            className="absolute left-0 right-0 z-[2] flex flex-col items-center"
            style={{ bottom: 226, zIndex: 3 }}
          >
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

          <div
            className="hero-enter absolute left-0 right-0 z-[2]"
            style={{ bottom: 140, zIndex: 3 }}
          >
            <PortalCta source="hero">Enter the Portal</PortalCta>
          </div>

          <div className="absolute bottom-7 left-0 right-0 flex flex-col items-center gap-[7px] z-[2]">
            <span className="text-[9px] tracking-[0.26em] uppercase text-[#E0E0E0] opacity-50">
              Discover
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-[#A9540F] to-transparent animate-[linePulse_2.4s_ease-in-out_infinite]" />
          </div>
        </section>

        <Divider />

        <CopySection
          eyebrow="This is for you"
          title="You move at"
          accent="the forefront"
        >
          <AnimatedSection delay={0.2}>
            <div className="text-[15px] leading-[1.85] text-[#1a1510] max-w-[620px] space-y-4 [&_.ni]:text-[#1a1510] [&_.ni]:font-medium">
              <p>
                You sense what others have not yet named. You cross thresholds
                that most people do not know exist.
              </p>
              <p>
                And somewhere along the way, in the rooms, the masterminds, the
                conferences, the communities, you noticed something. The
                conversation kept stopping short of where you actually are.
              </p>
              <p>
                Not because the people were not intelligent. Because{" "}
                <span className="ni">
                  the field was not alive enough to hold what you bring.
                </span>{" "}
                The surface was impressive. The depth was absent.
              </p>
              <p>
                Rooms that required you to shrink or to perform. Rooms that
                celebrated your credentials while missing entirely who you are.
              </p>
              <p>You learned to leave early.</p>
              <p>
                Somewhere in there, you also learned to go quiet at home. The
                vision is too large to hand to the people who love you without
                watching them flinch, or worse, humour you. So you carry the
                biggest thing in your life mostly alone, and call it
                independence.
              </p>
              <p>
                You were never too much. You were simply in rooms, professional
                and personal, too small to hold the whole of what you&apos;re
                building.
              </p>
              <p>
                What you have been looking for, without always having the words
                for it, is a field where the conversation begins where those
                rooms end.
              </p>
              <p>
                <span className="ni">
                  A space where you don&apos;t need to translate yourself. Where
                  your full range, the mystical and the strategic, the precise
                  and the expansive, the ancient knowing and the radically new,
                  is not only welcome but expected.
                </span>
              </p>
              <p>That field exists. Welcome to the Portal.</p>
            </div>
          </AnimatedSection>
          <PullQuote
            quote="I felt a precise call to be in that space with you."
            cite="A.F., Business Owner & Spiritual Mentor"
          />
        </CopySection>

        <Divider />

        <CopySection
          eyebrow="What this is"
          title="Not a platform. Not a product."
          accent="A field of Synchronicity."
        >
          <AnimatedSection delay={0.2}>
            <div className="text-[15px] leading-[1.85] text-[#1a1510] max-w-[620px] space-y-4 [&_.ni]:font-medium">
              <p>
                Universe Portal lives on an AI platform, but it is{" "}
                <em>not</em> a platform.
              </p>
              <p>
                It gathers a community of like-minded people, but it is{" "}
                <em>not</em> a community product.
              </p>
              <p>It is not a course, a mastermind, or a method.</p>
              <p>
                <span className="ni">
                  It is a place where you see yourself, your life, your purpose,
                  your patterns, your business, more clearly, through the wisdom
                  of others and the mirror of AI.
                </span>
              </p>
              <p>And then you act differently, because you see differently.</p>
              <p>So your life and impact transform, because your actions have.</p>
            </div>
          </AnimatedSection>
          <PullQuote
            quote="Everything moved to make it possible to be there with you."
            cite="A.F., Business Owner & Spiritual Mentor"
            className="text-left max-w-[620px]"
          />
          <div className="mt-8">
            <PortalCta source="cta">Enter the Portal</PortalCta>
          </div>
        </CopySection>

        <Divider />

        <CopySection eyebrow="The Essence" title="One field," accent="many rooms">
          <AnimatedSection delay={0.2}>
            <div className="text-[15px] leading-[1.85] text-[#1a1510] max-w-[620px] space-y-4 [&_.ni]:font-medium">
              <p>
                Each co-creator is carefully selected, and brings her own world
                into this one. Some carry spiritual wisdom. Some bring coaching
                and mindset work. Others bring financial education, or beauty
                through music and poetry. Each hosts a monthly session that
                unlocks a different part of your reality.
              </p>
              <p>
                <span className="ni">
                  Inside the Portal, the worlds of all co-creators collide,
                  creating a broader field than any single room could hold alone.
                </span>
              </p>
              <p>Same calibre of human, gathered from more than one world.</p>
            </div>
          </AnimatedSection>
        </CopySection>

        <Divider />

        <CopySection
          eyebrow="What to expect"
          title="What becomes"
          accent="possible"
        >
          <div className="flex flex-col mt-9 max-w-[620px]">
            {traits.map((trait, index) => (
              <AnimatedSection key={trait.lead} delay={0.2 + index * 0.08}>
                <div className="flex items-start gap-[18px] py-4 border-b border-[rgba(26,21,16,0.08)]">
                  <div className="w-1 h-1 rounded-full bg-[#A9540F] shrink-0 mt-[10px] opacity-70" />
                  <div className="text-[15px] leading-[1.8] text-[#1a1510]">
                    <span className="font-medium">{trait.lead}</span>{" "}
                    {trait.text}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <PullQuote
            quote="This has become my life mission now."
            cite="N.G., Family Office Director & Founder"
          />
          <div className="mt-8">
            <PortalCta source="cta">Enter the Portal</PortalCta>
          </div>
        </CopySection>

        <Divider />

        <CopySection
          eyebrow="What precisely you are getting into"
          title="The four"
          accent="elements"
          centered
        >
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(26,21,16,0.1)] border border-[rgba(26,21,16,0.1)] mt-11 text-left">
              {offerings.map((offering) => (
                <div
                  key={offering.num}
                  className="bg-[#e8e4df] p-8 md:p-9 hover:bg-[rgba(169,84,15,0.06)] transition-colors"
                >
                  <span
                    className="text-xs tracking-[0.14em] text-[#A9540F] opacity-70 mb-3.5 block"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {offering.num}
                  </span>
                  <div
                    className="text-[21px] font-normal text-[#1a1510] mb-2.5 leading-[1.2]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {offering.title}
                  </div>
                  <p className="text-[13.5px] leading-[1.85] text-[#1a1510]">
                    {offering.desc}
                  </p>
                  {offering.link ? (
                    <p className="text-[13.5px] leading-[1.85] mt-2.5">
                      <a
                        href={offering.link}
                        className="text-[#A9540F] underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Powered by Universe Club AI
                      </a>
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </AnimatedSection>
          <PullQuote
            quote="I need to thank you for connecting me with K.S. Through her, I've met the most incredible women. It's an orbit created because of you. I'm collecting all these wonderful women inside my universe, and it just gets paid forward."
            cite="I.K., Financial Advisor & Female Wealth Advocate"
            className="text-left"
          />
        </CopySection>

        <Divider />

        <section className="relative z-[1] overflow-hidden">
          <div className="relative py-[80px] px-6 md:px-12 text-center">
            <div className="absolute inset-0 z-0">
              <Image
                src="/sky.jpg"
                alt=""
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(169,84,15,0.18)_0%,transparent_65%),radial-gradient(ellipse_80%_60%_at_20%_80%,rgba(169,84,15,0.10)_0%,transparent_55%)]" />
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
                {commitments.map((commitment) => (
                  <div
                    key={commitment.label}
                    className="flex flex-col items-center gap-3"
                  >
                    <span
                      className="text-[clamp(46px,8vw,72px)] font-light text-[#A9540F] leading-none"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {commitment.value}
                    </span>
                    <span className="text-[10px] tracking-[0.22em] uppercase text-[rgba(232,228,223,0.75)]">
                      {commitment.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Divider />

        <CopySection
          eyebrow="How to Enter"
          title="The door is"
          accent="always open"
          centered
        >
          <AnimatedSection delay={0.2}>
            <div className="mt-9 max-w-[600px] mx-auto border border-[rgba(26,21,16,0.1)] bg-[rgba(232,228,223,0.5)] p-8 md:p-9 text-left space-y-5">
              {doorTerms.map((term) => (
                <div key={term} className="flex items-start gap-4">
                  <span className="text-[#A9540F] mt-0.5 shrink-0">✓</span>
                  <span className="text-[15px] leading-[1.7] text-[#1a1510]">
                    {term}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <div className="mt-8">
            <PortalCta source="cta">Enter the Portal</PortalCta>
          </div>
        </CopySection>

        <Divider />

        <section className="relative z-[1] py-[92px] px-6 md:px-12 max-w-[800px] mx-auto">
          <AnimatedSection>
            <span className="eyebrow">Your Guides</span>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.7fr] gap-15 items-start mt-2">
            <AnimatedSection>
              <div className="relative max-w-[240px] md:max-w-none">
                <Image
                  src="/aelia-photo.jpg"
                  alt="Aelia Kos"
                  width={300}
                  height={400}
                  priority
                  className="w-full aspect-[3/4] object-cover object-top relative z-[1] contrast-[1.05] saturate-[0.88]"
                />
                <div className="absolute top-3.5 left-3.5 -right-3.5 -bottom-3.5 border border-[rgba(169,84,15,0.22)] pointer-events-none" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div
                className="inline-block bg-white px-3.5 py-1.5 shadow-[0_0_0_4px_#ffffff] text-[42px] font-light text-[#1a1510] mb-[18px] leading-[1.1] tracking-[0.03em]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Aelia <em className="italic text-[#1a1510]">Kos</em>
              </div>
              <div className="text-[15px] leading-[1.85] text-[#1a1510] max-w-[540px] space-y-3.5">
                <p>
                  Aelia Kos keeps being the one rebuilding the human layer back
                  inside worlds that scaled long before they understood their
                  soul: Olympic Games, World Economic Forum, international
                  fashion, now artificial intelligence.
                </p>
                <p>
                  Trained as an architect and later running operations across
                  three Olympic Games, she has spent the last decade designing
                  immersive experiences with nature and tech, mentoring
                  businesses at the intersection of wealth and consciousness,
                  before founding Universe Club AI, the relational
                  infrastructure behind this Portal.
                </p>
                <p>
                  The instinct has stayed the same wherever she&apos;s gone: find
                  where a structure has outgrown its heart, and build the
                  conditions for it to remember. Once a month, she opens a live
                  Transmission, carrying that same instinct into the room.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Divider />

        <CopySection
          eyebrow="Why this exists"
          title="Experience of"
          accent="a different way"
        >
          <AnimatedSection delay={0.2}>
            <div className="text-[15px] leading-[1.85] text-[#1a1510] max-w-[620px] space-y-4 [&_.ni]:font-medium">
              <p>
                Universe Portal was built because the old ways of gathering
                people have reached their limit.
              </p>
              <p>
                <span className="ni">The extractive model</span> — where
                communities harvest attention and return noise — is visible now
                to anyone with eyes to see it.
              </p>
              <p>
                <span className="ni">The performance model</span> — where
                belonging requires agreement and credentials circulate in place
                of depth — is exhausting the very people who are here to build
                something new.
              </p>
              <p>This is a demonstration of a different way.</p>
              <p>
                <span className="ni">
                  The people inside are building businesses that are more like
                  missions. They know that new ways are necessary. They can
                  sense the old and move past it.
                </span>
              </p>
            </div>
          </AnimatedSection>
          <PullQuote
            quote="Inspiring. Truly inspiring."
            cite="G.B., Serial Entrepreneur & Visionary"
          />
        </CopySection>

        <Divider />

        <section
          id="join"
          className="relative z-[1] overflow-hidden py-[96px] px-6 md:px-12 text-center"
        >
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[520px] max-w-full h-[620px] rounded-t-[260px] bg-gradient-to-b from-[rgba(255,255,255,0.92)] via-[rgba(255,255,255,0.85)] to-transparent pointer-events-none z-0" />
          <AnimatedSection>
            <span className="eyebrow relative z-[1]">Enter the Portal</span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2
              className="portal-section-title relative z-[1] text-[clamp(32px,5vw,48px)] font-light text-[#1a1510] mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Begin your
              <br />
              <em className="italic text-[#A9540F]">membership</em>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative z-[1] mt-[56px] flex flex-col items-center">
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
                per month · cancel anytime
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="mt-8 relative z-[1]">
              <PortalCta source="pricing" variant="enter">
                Enter Universe Portal
              </PortalCta>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.35}>
            <div className="mt-10 max-w-[520px] mx-auto border border-[rgba(26,21,16,0.1)] bg-[rgba(232,228,223,0.5)] p-8 md:p-9 text-left space-y-5 relative z-[1]">
              {membershipIncludes.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="text-[#A9540F] mt-0.5 shrink-0">✓</span>
                  <span className="text-[15px] leading-[1.7] text-[#1a1510]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="max-w-[520px] text-left mx-auto mt-8 space-y-4 text-[15px] leading-[1.85] text-[#1a1510] relative z-[1]">
              <p className="text-center">
                You might be thinking:
                <br />
                <span className="font-medium">
                  &ldquo;This is too cheap to be valuable.&rdquo;
                </span>
                <br />
                Or
                <br />
                <span className="font-medium">
                  &ldquo;Why this price for an online membership?&rdquo;
                </span>
              </p>
              <p>
                <strong>The reason:</strong> the door is inexpensive. The room
                is not. The people in it are carefully selected, and rare to
                meet randomly in the world we live in.
              </p>
              <p>
                <strong>The code:</strong> numbers are signs we send to the
                Universe with every payment. 111 is the energy of Year 1: 2026
                reduces to 2 + 2 + 6 = 10, and 1 + 0 = 1, the energy of fresh
                starts and new perspectives.
              </p>
              <p>
                <strong>The value:</strong> one aligned introduction that
                becomes a business partnership, one insight that lands at the
                right moment, one conversation that resolves what&apos;s been
                circling in your mind for months, is already worth more than a
                year here.
              </p>
              <p>
                From January 1, 2027, the membership moves to 222 CHF. If you
                joined during 2026, your rate continues unchanged for as long as
                you stay.
              </p>
            </div>
          </AnimatedSection>
        </section>

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

      {showSuccess && (
        <div className="fixed inset-0 z-[200] bg-[#e8e4df] flex flex-col items-center justify-center text-center p-12">
          <div
            className="text-[44px] text-[#A9540F] mb-7"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            ✦
          </div>
          <h1
            className="portal-success-title text-[clamp(34px,6vw,60px)] font-light text-[#1a1510] mb-[22px] leading-[1.1]"
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
