"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const principles = [
  {
    title: "Read the Field First",
    description:
      "Before anything else, I orient to what is actually present — not what should be there, or what worked elsewhere. Every person, every business, every moment of transition has its own living intelligence. That is where we begin.",
  },
  {
    title: "Design the Container",
    description:
      "Once the right conditions are in place — the right people, the right structure, the right energetics — decisions, capital, and timing reorganize on their own. I don\u2019t push the river. I design the riverbed.",
  },
  {
    title: "Allow Emergence Through Presence",
    description:
      "There is no prescribed path. What comes through enhanced presence and honest truth is always more precise than any method. My role is to hold the field steady enough for that to happen — and to recognize what is emerging before it has fully taken form.",
  },
];

const pathways = [
  {
    title: "Immersive Experiences",
    description:
      "Group retreats and private activations designed for deep recalibration through real life immersion.",
    href: "mailto:aelia@aeliakos.com",
    cta: "Inquire",
  },
  {
    title: "Universe Portal",
    description:
      "The living online membership. The most direct way to enter the field and access the Universe Club AI synchronicity engine for essence-aligned connections across the globe.",
    href: "/portal",
    cta: "Enter the Portal",
  },
  {
    title: "Private 1:1 Mentorship",
    description:
      "For those ready to work with me directly, over time, on the full arc of what they are building.",
    href: "mailto:aelia@aeliakos.com",
    cta: "Begin a Conversation",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#e8e4df]">
      <Navigation />

      {/* Hero */}
      <section className="min-h-[80vh] flex items-center justify-center pt-32 pb-20">
        <div className="max-w-[800px] mx-auto text-center px-6">
          <div className="opacity-0 animate-[riseIn_1.4s_0.1s_ease_forwards]">
            <p className="text-[9px] tracking-[5px] uppercase text-[#A9540F] mb-8">
              About
            </p>
          </div>

          <h1
            className="text-[clamp(48px,8vw,80px)] font-normal text-[#1a1510] mb-8 leading-[1] opacity-0 animate-[riseIn_1.4s_0.3s_ease_forwards]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Aelia
            <br />
            <em className="italic text-[#A9540F]">Kos</em>
          </h1>

          <div className="opacity-0 animate-[riseIn_1.4s_0.5s_ease_forwards] max-w-2xl mx-auto">
            <p
              className="text-xl text-[#7a7068] leading-relaxed"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              I&apos;m Aelia Kos — and if you&apos;re reading this,
              <br />
              <strong className="text-[#1a1510]">
                something already drew you in
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Portrait & Introduction */}
      <section className="py-24 px-6 bg-[#dedad4]">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <div className="relative max-w-md mx-auto lg:mx-0">
                <Image
                  src="/aelia-photo.jpg"
                  alt="Aelia Kos"
                  width={400}
                  height={533}
                  className="w-full aspect-[3/4] object-cover object-top relative z-[1] contrast-[1.05] saturate-[0.88]"
                />
                <div className="absolute top-3.5 left-3.5 -right-3.5 -bottom-3.5 border border-[rgba(169,84,15,0.22)] pointer-events-none" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <p className="text-[15px] leading-[1.85] font-light text-[#7a7068] mb-6">
                I&apos;ve lived and built across continents, navigated my own
                significant thresholds, and spent over a decade designing the
                conditions under which people, businesses, and visions become
                what they were always meant to be.
              </p>

              <p className="text-[15px] leading-[1.85] font-light text-[#7a7068] mb-6">
                I know this terrain — not from theory, but from having crossed
                it myself, more than once, in more than one life.
              </p>

              <p className="text-[15px] leading-[1.85] font-light text-[#7a7068] mb-6">
                What I do now is not separate from what I&apos;ve lived. The
                architecture training, the Olympic operations, the retreats in
                the mountains, the research into water and consciousness, the
                companies built in different countries and different states of
                self — all of it is present in the room when we work together.
              </p>

              <p className="text-[15px] leading-[1.85] font-light text-[#7a7068]">
                I work at the intersection of{" "}
                <strong className="text-[#1a1510]">
                  business, spirituality, and the effortless embodiment of pure
                  potentiality
                </strong>
                . And when the right people enter this field, something in them
                recognizes it immediately — not as a new idea, but as a reality
                they were already moving toward.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-24 px-6 bg-[#e8e4df]">
        <div className="max-w-[1000px] mx-auto">
          <AnimatedSection className="mb-16">
            <p className="text-[9px] tracking-[5px] uppercase text-[#A9540F] mb-6">
              How I Work
            </p>
            <p
              className="text-2xl text-[#1a1510] leading-relaxed max-w-[680px] mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Every engagement begins the same way: I read the field.
            </p>
            <p className="text-[15px] leading-[1.85] font-light text-[#7a7068] max-w-[680px] mb-6">
              Not the business plan, not the strategy deck — the actual field of
              potential that exists around you and what you&apos;re building.
              What&apos;s alive in it, what&apos;s blocked, what&apos;s ready to
              move.
            </p>
            <p className="text-[15px] leading-[1.85] font-light text-[#7a7068] max-w-[680px] mb-6">
              From there, I design the container — the right conditions, the
              right connections, the right environment — for what is genuinely
              possible to emerge without forcing it.
            </p>
            <p className="text-[15px] leading-[1.85] font-light text-[#7a7068] max-w-[680px]">
              This is where my background in architecture becomes something more
              than a credential. I was trained to see structures before they
              exist — to sense what a space wants to become and design toward
              that, rather than imposing a predetermined form. I bring exactly
              that to the work of conscious business.
            </p>
          </AnimatedSection>

          <AnimatedSection className="text-center mb-12">
            <p
              className="text-xl text-[#1a1510]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Three things shape everything I do.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {principles.map((principle, index) => (
              <AnimatedSection key={principle.title} delay={index * 0.1}>
                <div className="p-8 border border-[rgba(26,21,16,0.1)] h-full">
                  <div className="w-12 h-12 rounded-full border border-[#A9540F] flex items-center justify-center mb-6">
                    <span
                      className="text-xl text-[#A9540F]"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <h3
                    className="text-xl text-[#1a1510] mb-4"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {principle.title}
                  </h3>
                  <p className="text-[#7a7068] text-sm leading-relaxed font-light">
                    {principle.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-24 px-6 bg-[#1a1510] text-[#f2ede8]">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <p className="text-[9px] tracking-[5px] uppercase text-[#A9540F] mb-8">
                Background
              </p>

              <p
                className="text-2xl text-[#f2ede8] leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                The path that led me here is not linear.
              </p>

              <p className="text-[15px] leading-[1.85] font-light text-[#7a7068] mb-6">
                I don&apos;t share it as a list of credentials. I share it
                because the work I do is inseparable from what I&apos;ve lived.
                Every transition I facilitate in others, I have moved through
                myself.
              </p>

              <p className="text-[15px] leading-[1.85] font-light text-[#7a7068] mb-6">
                I trained as an architect and spent years designing spaces —
                physical, digital, and energetic — where transformation could
                actually land.
              </p>

              <p className="text-[15px] leading-[1.85] font-light text-[#7a7068] mb-6">
                I managed large-scale operations across three Olympic Games,
                working with complex systems, intercultural teams, and decisions
                made under real pressure.
              </p>

              <p className="text-[15px] leading-[1.85] font-light text-[#7a7068] mb-6">
                I&apos;ve built companies across the Americas, Europe and MENA,
                lived and worked across countries, and spent a decade designing
                business frameworks, immersive experiences, and mentorship
                containers for collective intelligence.
              </p>

              <p className="text-[15px] leading-[1.85] font-light text-[#7a7068] mb-8">
                Alongside that: studies across spiritual traditions, research
                into consciousness and water, and years of navigating
                significant personal and financial transitions of my own.
              </p>

              <p
                className="text-[15px] leading-[1.85] text-[#f2ede8] italic"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                This is not a background assembled for impressiveness. It is the
                actual ground from which this work grows.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="aspect-square bg-[#2e2820] relative overflow-hidden flex items-center justify-center">
                <span
                  className="text-4xl text-[rgba(242,237,232,0.06)]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Path
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-[#e8e4df]">
        <div className="max-w-[680px] mx-auto text-center">
          <AnimatedSection>
            <p className="text-[9px] tracking-[5px] uppercase text-[#A9540F] mb-8">
              Philosophy
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-[15px] leading-[1.85] font-light text-[#7a7068] mb-10 text-left">
              I&apos;ve watched too many gifted people quietly believe that
              choosing depth means giving up scale — that pursuing soul means
              accepting less. I don&apos;t believe that. I&apos;ve never
              believed that.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p
              className="text-[clamp(22px,3vw,32px)] text-[#1a1510] leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Wealth and spiritual depth are not opposites.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="text-[15px] leading-[1.85] font-light text-[#7a7068] space-y-5 mb-10 text-left">
              <p>
                They become so only when one is pursued at the expense of the
                other, or when neither has been fully understood. When
                integrated, they amplify each other in ways that neither can
                achieve alone.
              </p>
              <p>
                I also believe — and this has been proven to me across years and
                contexts — that the right environment matters more than the
                right method. Most people don&apos;t need a better strategy.
                They need conditions in which their own truth can surface. They
                need a field liberated enough to exist differently in. They need
                the friction removed between who they are and who they are
                becoming.
              </p>
              <p>That is what I create.</p>
              <p>
                And I believe that most people are far closer to their own next
                level than they realize. What stands between them and it is
                rarely lack of knowledge or capability. It is the absence of an
                environment that makes the truth a lived reality.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p
              className="text-xl text-[#1a1510]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              This is the work and the field I hold.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* A Note */}
      <section className="py-24 px-6 bg-[#1a1510] text-[#f2ede8]">
        <div className="max-w-[680px] mx-auto text-center">
          <AnimatedSection>
            <p className="text-[9px] tracking-[5px] uppercase text-[#A9540F] mb-8">
              A Note
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p
              className="text-2xl text-[#f2ede8] leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              I don&apos;t work with everyone.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p
              className="text-lg text-[#7a7068] mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Not because of exclusivity for its own sake — but because this
              work requires a certain readiness. Not perfection, not having it
              all figured out. Just the honest recognition that something in
              your current reality is ready to shift, and that you are willing
              to move with it.
            </p>
            <p
              className="text-lg text-[#7a7068] mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              If what is written here resonates with you, it&apos;s likely
              because you are already approaching the field I&apos;m describing.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p
              className="text-xl text-[#f2ede8]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              If so, what remains is entry through recognition.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Ways to Begin */}
      <section className="py-24 px-6 bg-[#dedad4]">
        <div className="max-w-[1000px] mx-auto">
          <AnimatedSection className="text-center mb-6">
            <p className="text-[9px] tracking-[5px] uppercase text-[#A9540F] mb-8">
              Ways to Begin
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="text-center mb-14">
            <p
              className="text-xl text-[#1a1510]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Depending on where you stand, three pathways are available.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pathways.map((pathway, index) => (
              <AnimatedSection key={pathway.title} delay={0.2 + index * 0.1}>
                <div className="p-8 border border-[rgba(26,21,16,0.1)] h-full flex flex-col">
                  <h3
                    className="text-xl text-[#1a1510] mb-4"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {pathway.title}
                  </h3>
                  <p className="text-[#7a7068] text-sm leading-relaxed font-light mb-8 flex-1">
                    {pathway.description}
                  </p>
                  <a href={pathway.href} className="btn-ghost self-start">
                    {pathway.cta}
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
