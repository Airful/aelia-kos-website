"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const trimesters = [
  {
    num: "I",
    body: "The Physical Body of the Business",
    title: "Laying the Ground",
    theme: "Before anything can be built, it must be seeded.",
    range: "Trimester One · Months 1–3",
    overview: { label: "The Physical Body", points: ["🜁 Conception", "🜂 Structure", "🜃 Identity"] },
    months: [
      {
        symbol: "🜁",
        num: 1,
        name: "Conception",
        tagline: "Seed the Business",
        points: [
          "Deep visioning — we ask the question that actually matters: what business wants to be born through you specifically?",
          "Releasing past business identities and the versions of yourself that built them",
          "Activating a Business Blueprint aligned with your Human Design",
        ],
        ritualLabel: "Ritual",
        ritual: "Release & Invite",
        leaveWith: "Soul Business Blueprint",
      },
      {
        symbol: "🜂",
        num: 2,
        name: "Structure",
        tagline: "Building the Vessel",
        points: [
          "Laying the foundations: core containers, energetic boundaries, what you're actually building",
          "Defining formats and the logic that connects them",
          "Understanding your client: who are you serving and why they want to be served by you?",
        ],
        ritualLabel: "Tool",
        ritual: "Temple Business Map",
        leaveWith: "Spiritual Architecture of your Brand",
      },
      {
        symbol: "🜃",
        num: 3,
        name: "Identity",
        tagline: "Energetic & Visual Encoding",
        points: [
          "Voice, tone, visuals, and aesthetic — all calibrated to your HD archetype and soul client",
          "Brand values, sensory language, and the frequency your work carries",
          "Aura-setting for magnetism: encoding who you are before anyone reads a single word",
        ],
        ritualLabel: "Ritual",
        ritual: "Business Aura Activation",
        leaveWith: "Sensory-aligned Brand Identity",
      },
    ],
  },
  {
    num: "II",
    body: "The Etheric Body of the Business",
    title: "Infusing Life Force",
    theme: "The structure exists. Now we breathe it alive.",
    range: "Trimester Two · Months 4–6",
    overview: { label: "The Etheric Body", points: ["🌬 Offerings", "🌱 Messaging", "🌿 Magnetism"] },
    months: [
      {
        symbol: "🌬",
        num: 4,
        name: "Offerings",
        tagline: "Channels of Value",
        points: [
          "Crafting your key offerings in depth",
          "Infusing energetic intention, pricing, and transformation into every offer you create",
          "Reading the body's cues: how your authority speaks when an offer is right",
        ],
        ritualLabel: "Tool",
        ritual: "Value Flowchart",
        leaveWith: "Full Offer Suite Finalized",
      },
      {
        symbol: "🌱",
        num: 5,
        name: "Messaging",
        tagline: "Breath of the Business",
        points: [
          "Developing a messaging strategy built on your natural communication style",
          "Aligning content creation with your rhythms: cycles, emotional clarity and natural timing",
          "Crafting the messaging ladder that speaks directly to your soul clients",
        ],
        ritualLabel: "Practice",
        ritual: "Reflective Journaling",
        leaveWith: "Launch Messaging + Core Transmissions",
      },
      {
        symbol: "🌿",
        num: 6,
        name: "Magnetism",
        tagline: "Building the Field",
        points: [
          "Calibrating your aura to attract soul clients through resonance",
          "Designing client onboarding as a ritual",
          "Building the entry point experience into your world",
        ],
        ritualLabel: "Tool",
        ritual: "Magnetism Activation",
        leaveWith: "Sacred Leads Pathway",
      },
    ],
  },
  {
    num: "III",
    body: "The Astral Body of the Business",
    title: "Embodiment & Emergence",
    theme: "You don't launch a soul business. You become it.",
    range: "Trimester Three · Months 7–9",
    overview: { label: "The Astral Body", points: ["🔮 Embodiment", "✨ Legacy", "👶 Birth"] },
    months: [
      {
        symbol: "🔮",
        num: 7,
        name: "Embodiment",
        tagline: "Becoming the Brand",
        points: [
          "Living the business: your lifestyle, expression, and service are no longer separate",
          "Practising sacred selling — how to invite, respond, and engage without force",
          "Embodying the Business essence in your daily rituals so it runs through you, not from you",
        ],
        ritualLabel: "Ritual",
        ritual: "Business Embodiment Day",
        leaveWith: "Energetic Sales Blueprint",
      },
      {
        symbol: "✨",
        num: 8,
        name: "Legacy",
        tagline: "Beyond Profit",
        points: [
          "Defining what impact, wealth, and sacred expansion actually mean for you",
          "Developing your intellectual property — the body of work that carries your name forward",
          "Building the story arc for your public work",
        ],
        ritualLabel: "Tool",
        ritual: "StoryBrand Arc",
        leaveWith: "Intellectual Property Vault",
      },
      {
        symbol: "👶",
        num: 9,
        name: "Birth",
        tagline: "Reveal the New World",
        points: [
          "Pre-launch sacred ceremony: marking the threshold before you step through",
          "A launch plan that follows natural rhythms, not artificial urgency",
          "Your first real client invitation, or your opening offering — released into the world",
        ],
        ritualLabel: "Ritual",
        ritual: "Birth of the Business Ritual",
        leaveWith: "First Offering Launched",
      },
    ],
  },
];

const benefits = [
  {
    num: 1,
    title: "Universe Club — Full Superconnector Access",
    desc: "Nine months of full access to the Universe Club AI platform — the synchronicity engine that works your network intelligently, surfacing opportunities, connections, and alignment you wouldn't have found alone.",
  },
  {
    num: 2,
    title: "Universe Portal — Membership Access",
    desc: "Nine months inside Universe Portal, the living membership community for mystical high-achievers building businesses with soul. Connect with others who understand what you're building — and why you're building it this way.",
  },
];

const serif = { fontFamily: "var(--font-serif)" };

export default function PrivateMentorship() {
  return (
    <main className="min-h-screen bg-[#e8e4df] text-[#1a1510]">
      <Navigation />

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center pt-40 pb-24">
        <div className="max-w-2xl text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] tracking-[0.3em] uppercase text-[#A9540F] mb-8"
          >
            An Invitation to Build
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1510] leading-[1.1] mb-6"
            style={serif}
          >
            Private Mentorship
            <br />
            with <em className="italic text-[#A9540F]">Aelia Kos</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[#5d544a] italic font-light"
            style={serif}
          >
            9-Month Container
          </motion.p>
        </div>
      </section>

      {/* Logistics row */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#d0cbc4] border border-[#d0cbc4]">
            <div className="bg-[#e8e4df] px-6 py-10 text-center">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#A9540F] mb-4">
                Duration
              </p>
              <p className="text-2xl font-light text-[#1a1510]" style={serif}>
                9 Months
              </p>
            </div>
            <div className="bg-[#e8e4df] px-6 py-10 text-center">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#A9540F] mb-4">
                Sessions
              </p>
              <p className="text-2xl font-light text-[#1a1510]" style={serif}>
                2 × 1h Zoom
              </p>
              <p className="text-sm text-[#5d544a] mt-1">bi-weekly</p>
            </div>
            <div className="bg-[#e8e4df] px-6 py-10 text-center">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#A9540F] mb-4">
                Investment
              </p>
              <p className="text-2xl font-light text-[#A9540F]" style={serif}>
                22,000 CHF
              </p>
              <p className="text-sm text-[#5d544a] mt-1">or 2,600 / month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center px-6">
          <AnimatedSection>
            <p className="text-2xl md:text-3xl italic text-[#1a1510] font-light mb-8 leading-[1.4]" style={serif}>
              Nine months. One business born with soul.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-base md:text-lg text-[#1a1510] leading-[1.85] font-light">
              This is not a coaching programme. It&apos;s a structured, ritualistic passage for
              founders who are ready to build something that holds both the mystical and the
              strategic. We work in trimesters, each one developing a different layer of your
              business: its physical form, its life force, its soul expression. By month nine, you
              don&apos;t just launch. You give birth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Architecture overview */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <p className="text-center text-[10px] tracking-[0.3em] uppercase text-[#A9540F] mb-12">
              The Architecture
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#d0cbc4] border border-[#d0cbc4]">
            {trimesters.map((t, i) => (
              <AnimatedSection key={t.num} delay={0.1 * i}>
                <div className="bg-[#e8e4df] px-6 py-10 text-center h-full">
                  <p className="text-[10px] tracking-[0.28em] uppercase text-[#A9540F] mb-4">
                    Trimester {t.num}
                  </p>
                  <p className="text-xl font-light text-[#1a1510] mb-4" style={serif}>
                    {t.overview.label}
                  </p>
                  <div className="text-sm text-[#5d544a] leading-[2]">
                    {t.overview.points.map((p) => (
                      <div key={p}>{p}</div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trimesters */}
      {trimesters.map((t, ti) => (
        <section
          key={t.num}
          className={`py-24 md:py-32 ${ti % 2 === 0 ? "bg-[#dedad4]/50" : ""}`}
        >
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            {/* Section divider */}
            <AnimatedSection>
              <div className="text-center mb-14 md:mb-16">
                <div className="inline-flex items-center gap-4">
                  <span className="block w-8 h-px bg-[#A9540F]/40" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#A9540F]">
                    {t.range}
                  </span>
                  <span className="block w-8 h-px bg-[#A9540F]/40" />
                </div>
              </div>
            </AnimatedSection>

            {/* Trimester header */}
            <AnimatedSection delay={0.1}>
              <div className="text-center mb-16 md:mb-20">
                <p className="text-7xl md:text-8xl text-[#A9540F]/25 italic leading-none mb-6" style={serif}>
                  {t.num}
                </p>
                <p className="text-[10px] tracking-[0.28em] uppercase text-[#5d544a] mb-4">
                  {t.body}
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-[#1a1510] mb-5" style={serif}>
                  {t.title}
                </h2>
                <p className="italic text-base md:text-lg text-[#5d544a] font-light max-w-xl mx-auto" style={serif}>
                  &ldquo;{t.theme}&rdquo;
                </p>
              </div>
            </AnimatedSection>

            {/* Months */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {t.months.map((m, i) => (
                <AnimatedSection key={m.num} delay={0.1 + i * 0.1}>
                  <article className="bg-[#f2ede8] border border-[#d0cbc4] p-8 h-full flex flex-col">
                    <div className="mb-5">
                      <div className="text-3xl mb-3">{m.symbol}</div>
                      <p className="text-[10px] tracking-[0.28em] uppercase text-[#A9540F] mb-1">
                        Month {m.num}
                      </p>
                      <h3 className="text-2xl font-light text-[#1a1510]" style={serif}>
                        {m.name}
                      </h3>
                      <p className="italic text-[#5d544a] mt-1 font-light" style={serif}>
                        {m.tagline}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-6 flex-1">
                      {m.points.map((p, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-[#1a1510] leading-[1.75] pl-4 relative font-light"
                        >
                          <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-[#A9540F]" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-[#d0cbc4] pt-4 space-y-3">
                      <div>
                        <p className="text-[10px] tracking-[0.22em] uppercase text-[#A9540F]">
                          {m.ritualLabel}
                        </p>
                        <p className="text-sm text-[#1a1510] mt-0.5">{m.ritual}</p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.22em] uppercase text-[#A9540F]">
                          You leave with
                        </p>
                        <p className="text-sm text-[#1a1510] mt-0.5">{m.leaveWith}</p>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Benefits */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-center text-[10px] tracking-[0.3em] uppercase text-[#A9540F] mb-5">
              What&apos;s Included · Beyond the Sessions
            </p>
            <h2 className="text-center text-3xl md:text-4xl font-light text-[#1a1510] mb-14" style={serif}>
              Extended Access to the Universe Ecosystem
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.num} delay={0.1 + i * 0.1}>
                <div className="flex gap-6 bg-[#f2ede8] border border-[#d0cbc4] p-8">
                  <div className="text-4xl text-[#A9540F]/40 italic shrink-0 leading-none" style={serif}>
                    {b.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-[#1a1510] mb-3" style={serif}>
                      {b.title}
                    </h3>
                    <p className="text-[#1a1510] leading-[1.85] font-light">{b.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Investment + CTA */}
      <section className="py-24 md:py-32 bg-[#dedad4]/50">
        <div className="max-w-3xl mx-auto text-center px-6">
          <AnimatedSection>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#A9540F] mb-10">
              Investment
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-14">
              <div>
                <p className="text-5xl md:text-6xl font-light text-[#1a1510]" style={serif}>
                  22,000 CHF
                </p>
                <p className="text-xs tracking-[0.22em] uppercase text-[#5d544a] mt-3">
                  Paid in Full
                </p>
              </div>
              <p className="italic text-2xl text-[#A9540F]" style={serif}>
                or
              </p>
              <div>
                <p className="text-5xl md:text-6xl font-light text-[#1a1510]" style={serif}>
                  2,600 CHF
                </p>
                <p className="text-xs tracking-[0.22em] uppercase text-[#5d544a] mt-3">
                  Per Month · 9 Months
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="italic text-base md:text-lg text-[#5d544a] mb-12 max-w-xl mx-auto font-light leading-relaxed" style={serif}>
              This container is offered to a very limited number of founders per year. If you feel
              the pull, trust it.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <a
              href="mailto:aelia@aeliakos.com?subject=Private%20Mentorship%20%E2%80%94%209-Month%20Container"
              className="btn-ghost border-[#1a1510]/20 text-[#1a1510] hover:border-[#A9540F]"
            >
              Contact Aelia
            </a>
            <p className="text-sm text-[#5d544a] italic mt-6 font-light" style={serif}>
              A brief Mutual Alignment Conversation precedes entry to confirm coherence on both sides.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
