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

export default function PrivateMentorship() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <Navigation />

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center pt-32 pb-20">
        <div className="container-narrow text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              An Invitation to Build
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-[#2C2825] mb-6"
          >
            Private Mentorship
            <br />
            with <span className="italic text-[#8B6F5C]">Aelia Kos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display italic text-lg md:text-xl text-[#8B6F5C]"
          >
            9-Month Container
          </motion.p>
        </div>
      </section>

      {/* Logistics row */}
      <section className="pb-20">
        <div className="container-wide px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5DDD3] border border-[#E5DDD3]">
            <div className="bg-[#FAF8F5] px-6 py-8 text-center">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#C9A962] mb-3">
                Duration
              </p>
              <p className="font-display text-2xl text-[#2C2825]">9 Months</p>
            </div>
            <div className="bg-[#FAF8F5] px-6 py-8 text-center">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#C9A962] mb-3">
                Sessions
              </p>
              <p className="font-display text-2xl text-[#2C2825]">2 × 1h Zoom</p>
              <p className="text-sm text-[#8B6F5C] mt-1">bi-weekly</p>
            </div>
            <div className="bg-[#FAF8F5] px-6 py-8 text-center">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#C9A962] mb-3">
                Investment
              </p>
              <p className="font-display text-2xl text-[#C9A962]">22,000 CHF</p>
              <p className="text-sm text-[#8B6F5C] mt-1">or 2,600 / month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-narrow text-center px-6">
          <AnimatedSection>
            <p className="font-display text-2xl md:text-3xl italic text-[#2C2825] mb-8">
              Nine months. One business born with soul.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="font-display text-lg text-[#5D4F45] leading-[1.85]">
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
      <section className="pb-24">
        <div className="container-wide px-6 lg:px-12">
          <AnimatedSection>
            <p className="text-center text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-10">
              The Architecture
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5DDD3] border border-[#E5DDD3]">
            {trimesters.map((t) => (
              <AnimatedSection key={t.num} delay={0.1 * Number(t.num.length)}>
                <div className="bg-[#FAF8F5] px-6 py-8 text-center h-full">
                  <p className="text-[10px] tracking-[0.28em] uppercase text-[#C9A962] mb-3">
                    Trimester {t.num}
                  </p>
                  <p className="font-display text-xl text-[#2C2825] mb-3">
                    {t.overview.label}
                  </p>
                  <div className="text-sm text-[#8B6F5C] leading-[1.9]">
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
      {trimesters.map((t) => (
        <section key={t.num} className="section-padding bg-[#F5EFE7]/40 even:bg-transparent">
          <div className="container-wide px-6 lg:px-12">
            <AnimatedSection>
              <div className="text-center mb-12">
                <p className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-4">
                  {t.range}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="text-center mb-16">
                <p className="font-display text-7xl md:text-8xl text-[#C9A962]/30 italic leading-none mb-4">
                  {t.num}
                </p>
                <p className="text-xs tracking-[0.28em] uppercase text-[#8B6F5C] mb-3">
                  {t.body}
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-[#2C2825] mb-4">
                  {t.title}
                </h2>
                <p className="font-display italic text-lg text-[#8B6F5C]">
                  &ldquo;{t.theme}&rdquo;
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {t.months.map((m, i) => (
                <AnimatedSection key={m.num} delay={0.1 + i * 0.1}>
                  <article className="bg-white border border-[#E5DDD3] p-8 h-full flex flex-col">
                    <div className="mb-5">
                      <div className="text-3xl mb-2">{m.symbol}</div>
                      <p className="text-[10px] tracking-[0.28em] uppercase text-[#C9A962] mb-1">
                        Month {m.num}
                      </p>
                      <h3 className="font-display text-2xl text-[#2C2825]">{m.name}</h3>
                      <p className="font-display italic text-[#8B6F5C] mt-1">{m.tagline}</p>
                    </div>

                    <ul className="space-y-3 mb-6 flex-1">
                      {m.points.map((p, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-[#5D4F45] leading-[1.7] pl-4 relative"
                        >
                          <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-[#C9A962]" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-[#E5DDD3] pt-4 space-y-3">
                      <div>
                        <p className="text-[10px] tracking-[0.22em] uppercase text-[#C9A962]">
                          {m.ritualLabel}
                        </p>
                        <p className="text-sm text-[#2C2825] mt-0.5">{m.ritual}</p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.22em] uppercase text-[#C9A962]">
                          You leave with
                        </p>
                        <p className="text-sm text-[#2C2825] mt-0.5">{m.leaveWith}</p>
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
      <section className="section-padding">
        <div className="container-narrow px-6">
          <AnimatedSection>
            <p className="text-center text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-4">
              What&apos;s Included · Beyond the Sessions
            </p>
            <h2 className="text-center font-display text-3xl md:text-4xl text-[#2C2825] mb-12">
              Extended Access to the Universe Ecosystem
            </h2>
          </AnimatedSection>

          <div className="space-y-8">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.num} delay={0.1 + i * 0.1}>
                <div className="flex gap-6 bg-white border border-[#E5DDD3] p-8">
                  <div className="font-display text-4xl text-[#C9A962]/50 italic shrink-0">
                    {b.num}
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#2C2825] mb-3">{b.title}</h3>
                    <p className="text-[#5D4F45] leading-[1.85]">{b.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Investment + CTA */}
      <section className="section-padding bg-[#F5EFE7]/40">
        <div className="container-narrow text-center px-6">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">Investment</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12">
              <div>
                <p className="font-display text-5xl md:text-6xl text-[#2C2825]">22,000 CHF</p>
                <p className="text-sm tracking-[0.2em] uppercase text-[#8B6F5C] mt-3">
                  Paid in Full
                </p>
              </div>
              <p className="font-display italic text-2xl text-[#C9A962]">or</p>
              <div>
                <p className="font-display text-5xl md:text-6xl text-[#2C2825]">2,600 CHF</p>
                <p className="text-sm tracking-[0.2em] uppercase text-[#8B6F5C] mt-3">
                  Per Month · 9 Months
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-display italic text-lg text-[#8B6F5C] mb-10 max-w-xl mx-auto">
              This container is offered to a very limited number of founders per year. If you feel
              the pull, trust it.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <a
              href="mailto:aelia@aeliakos.com?subject=Private%20Mentorship%20%E2%80%94%209-Month%20Container"
              className="btn btn-primary"
            >
              Contact Aelia
            </a>
            <p className="font-display text-sm text-[#8B6F5C] italic mt-6">
              A brief Mutual Alignment Conversation precedes entry to confirm coherence on both sides.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
