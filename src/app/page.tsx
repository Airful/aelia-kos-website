"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const elements = [
  { symbol: "✦", name: "Air" },
  { symbol: "◈", name: "Earth" },
  { symbol: "◎", name: "Water" },
  { symbol: "△", name: "Fire" },
  { symbol: "∞", name: "Ether" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8e4df]">
      <Navigation />

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col items-center justify-center px-10 py-36 text-center">
        <h1
          className="text-[clamp(52px,9vw,112px)] font-normal tracking-[8px] uppercase text-[#1a1510] leading-none opacity-0 animate-[riseIn_1.4s_0.1s_ease_forwards]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Aelia Kos
        </h1>

        <p className="text-[11px] tracking-[5px] uppercase text-[#7a7068] mt-7 leading-[2.2] opacity-0 animate-[riseIn_1.4s_0.35s_ease_forwards]">
          Where Mystical High-Achievers
          <br />
          Build Businesses with Soul
        </p>

        <div className="w-px h-[52px] bg-gradient-to-b from-[#d0cbc4] to-transparent my-11 opacity-0 animate-[riseIn_1.4s_0.6s_ease_forwards]" />

        <div className="opacity-0 animate-[riseIn_1.4s_0.8s_ease_forwards]">
          <p className="text-[11px] tracking-[7px] uppercase text-[#1a1510] mb-2">
            One World
          </p>
          <p className="text-[11px] tracking-[7px] uppercase text-[#1a1510] mb-6">
            Three Doorways
          </p>
          <a href="#portals" className="btn-choose">
            Choose Yours
          </a>
        </div>
      </section>

      {/* ── PORTALS ── */}
      <section id="portals" className="px-10 pb-28 max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.18fr_1fr] gap-5 md:items-end max-w-[260px] md:max-w-none mx-auto">
          {/* Experiences */}
          <AnimatedSection>
            <a
              href="#experiences"
              className="flex flex-col items-center no-underline text-inherit cursor-pointer group"
            >
              <div className="w-full border border-[rgba(26,21,16,0.3)] rounded-t-[500px] bg-transparent aspect-[0.6] transition-all duration-400 group-hover:border-[rgba(26,21,16,0.55)] group-hover:bg-[rgba(26,21,16,0.03)]" />
              <div
                className="text-[clamp(16px,2.2vw,22px)] font-normal tracking-[5px] uppercase text-[#1a1510] mt-5 text-center transition-colors"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Experiences
              </div>
            </a>
          </AnimatedSection>

          {/* Membership — Featured */}
          <AnimatedSection delay={0.1}>
            <Link
              href="/portal"
              className="flex flex-col items-center no-underline text-inherit cursor-pointer group"
            >
              <div className="w-full border border-[rgba(26,21,16,0.3)] border-t-[#A9540F] rounded-t-[500px] bg-[rgba(26,21,16,0.03)] aspect-[0.6] transition-all duration-400 group-hover:border-[rgba(26,21,16,0.5)] group-hover:border-t-[#A9540F] group-hover:bg-[rgba(26,21,16,0.06)]" />
              <div
                className="text-[clamp(16px,2.2vw,22px)] font-normal tracking-[5px] uppercase text-[#A9540F] mt-5 text-center transition-colors"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Membership
              </div>
            </Link>
          </AnimatedSection>

          {/* Mentorship */}
          <AnimatedSection delay={0.2}>
            <a
              href="#mentorship"
              className="flex flex-col items-center no-underline text-inherit cursor-pointer group"
            >
              <div className="w-full border border-[rgba(26,21,16,0.3)] rounded-t-[500px] bg-transparent aspect-[0.6] transition-all duration-400 group-hover:border-[rgba(26,21,16,0.55)] group-hover:bg-[rgba(26,21,16,0.03)]" />
              <div
                className="text-[clamp(16px,2.2vw,22px)] font-normal tracking-[5px] uppercase text-[#1a1510] mt-5 text-center transition-colors"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Mentorship
              </div>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-24 px-10 text-center max-w-[680px] mx-auto">
        <AnimatedSection>
          <p className="text-[9px] tracking-[5px] uppercase text-[#A9540F] mb-8">
            Business with Soul
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <blockquote
            className="text-[clamp(22px,3.2vw,36px)] font-light italic leading-[1.75] text-[#1a1510]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            &ldquo;Your business is a living organism &mdash;
            <br />
            it breathes, it has seasons,
            <br />
            it calls for constant calibration.&rdquo;
          </blockquote>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="w-px h-12 bg-gradient-to-b from-[#d0cbc4] to-transparent mx-auto my-12" />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex justify-center gap-13 flex-wrap">
            {elements.map((el) => (
              <div
                key={el.name}
                className="flex flex-col items-center gap-2.5"
              >
                <span
                  className="text-xl text-[#A9540F] leading-none"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {el.symbol}
                </span>
                <span className="text-[8px] tracking-[4px] uppercase text-[#7a7068]">
                  {el.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── EXPERIENCES ── */}
      <section
        id="experiences"
        className="py-24 px-10 max-w-[800px] mx-auto text-center"
      >
        <AnimatedSection>
          <p className="text-[9px] tracking-[5px] uppercase text-[#A9540F] mb-6">
            Experiences
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2
            className="text-[clamp(32px,4vw,48px)] font-normal leading-[1.15] text-[#1a1510] mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Physical environments designed to
            <br />
            <em className="italic text-[#A9540F]">activate collective intelligence</em>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-[15px] leading-[1.85] font-light text-[#7a7068] max-w-[540px] mx-auto mb-10">
            Through place, trust, and shared presence. These are not retreats.
            They are field activations — immersive gatherings across extraordinary
            locations where the right people, energy, and timing converge.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <a
            href="https://intaaya.com/retreats/universe-experience/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-choose"
          >
            Inquire
          </a>
        </AnimatedSection>
      </section>

      {/* ── MENTORSHIP ── */}
      <section
        id="mentorship"
        className="py-24 px-10 bg-[#1a1510] text-center"
      >
        <div className="max-w-[800px] mx-auto">
          <AnimatedSection>
            <p className="text-[9px] tracking-[5px] uppercase text-[#A9540F] mb-6">
              Mentorship
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2
              className="text-[clamp(32px,4vw,48px)] font-normal leading-[1.15] text-[#f2ede8] mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Private advisory for leaders navigating
              <br />
              <em className="italic text-[rgba(242,237,232,0.45)]">structural repositioning</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-[15px] leading-[1.85] font-light text-[#7a7068] max-w-[540px] mx-auto mb-4">
              A time-bound advisory structure for those navigating moments where
              identity, leadership, and structure reorganize simultaneously.
              This work concerns clarity, coherence, and placement.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <div className="flex justify-center gap-12 my-10">
              <div className="text-center">
                <span
                  className="text-[28px] font-light text-[#f2ede8]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  9–12
                </span>
                <p className="text-[8px] tracking-[4px] uppercase text-[#7a7068] mt-1">
                  Months
                </p>
              </div>
              <div className="w-px h-12 bg-[rgba(242,237,232,0.1)]" />
              <div className="text-center">
                <span
                  className="text-[28px] font-light text-[#A9540F]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  22,000 €
                </span>
                <p className="text-[8px] tracking-[4px] uppercase text-[#7a7068] mt-1">
                  Investment
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <a
              href="mailto:aelia@aeliakos.com"
              className="btn-ghost !border-[rgba(242,237,232,0.15)] !text-[#f2ede8]"
            >
              Begin a conversation
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] bg-[#2e2820]"
      >
        {/* Photo */}
        <div className="relative overflow-hidden h-[360px] lg:h-auto">
          <Image
            src="/aelia-photo.jpg"
            alt="Aelia Kos"
            fill
            className="object-cover object-top opacity-65 mix-blend-luminosity"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-transparent to-[#2e2820]" />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-7 py-13 lg:px-12 lg:py-20 lg:pl-12 lg:pr-16">
          <p className="text-[9px] tracking-[5px] uppercase text-[#A9540F] mb-6">
            About Aelia
          </p>
          <h2
            className="text-[clamp(32px,3.5vw,48px)] font-light leading-[1.2] text-[#f2ede8] mb-7"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Guide. Founder.
            <br />
            <em className="text-[rgba(242,237,232,0.45)]">Alchemist.</em>
          </h2>
          <div
            className="text-lg leading-[1.9] text-[rgba(242,237,232,0.5)] mb-10 space-y-3.5"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <p>
              Hi, I am Aelia, a conscious business architect working with deeply
              visionary leaders at the edge of what&apos;s possible.
            </p>
            <p>
              With a background spanning architecture, Olympic-scale operations,
              and regenerative design across seven countries, I bring rare
              precision to the work of building from Soul — not just strategy.
            </p>
            <p>
              I&apos;ve founded UniVerse Club (Dubai), a global movement
              blending wealth, spirituality, AI and conscious business.
            </p>
            <p>
              My clients are investors, founders, and super-connectors who sense
              that the next level isn&apos;t about more — it&apos;s about
              alignment.
            </p>
            <p>
              Through my work and connections I help catalyze a new paradigm of
              prosperity rooted in purpose. Through immersive experiences,
              private community, and deep advisory, I orchestrate the conditions
              where the right people, capital, and timing meet.
            </p>
          </div>
          <a
            href="mailto:aelia@aeliakos.com"
            className="text-[9px] tracking-[4px] uppercase text-[#A9540F] no-underline border-b border-[rgba(169,84,15,0.35)] pb-[3px] self-start hover:border-[#A9540F] transition-colors"
          >
            Begin a conversation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
