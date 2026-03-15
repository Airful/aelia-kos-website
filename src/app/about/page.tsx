"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const principles = [
  {
    title: "Business as Structure",
    description:
      "Business is not a vehicle for personal growth. It is a structural force — one that shapes identity, culture, and collective direction.",
  },
  {
    title: "Environment Over Method",
    description:
      "What I work with is how environments are designed. Once the environment is coherent, people, decisions, capital, and timing reorganize.",
  },
  {
    title: "Placement Over Process",
    description:
      "There is no step-by-step path here. There is recognition of where one stands, and clarity about what follows from that position.",
  },
];

const background = [
  "Lived and worked across multiple continents",
  "Built and exited companies in diverse industries",
  "Navigated significant personal and financial transitions",
  "Studied with teachers across spiritual traditions",
  "Held advisory roles in conscious enterprise development",
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
              Working at the intersection of
              <br />
              <strong className="text-[#1a1510]">
                business, structure, and long-cycle change
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
              <p
                className="text-2xl text-[#1a1510] leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                I work with individuals and organizations at thresholds of
                significant transition.
              </p>

              <p className="text-[15px] leading-[1.85] font-light text-[#7a7068] mb-6">
                My work concerns how environments are designed — and how people,
                decisions, capital, and timing reorganize once the environment
                is coherent.
              </p>

              <p className="text-[15px] leading-[1.85] font-light text-[#7a7068] mb-6">
                I am not interested in growth for its own sake, nor in business
                as optimization. What I hold is a capacity to see structure
                where others see circumstance — and to work with what is
                actually present, rather than what is desired.
              </p>

              <p className="text-[15px] leading-[1.85] font-light text-[#7a7068]">
                What I offer today is not a method. It is a{" "}
                <strong className="text-[#1a1510]">field</strong> — informed by
                lived decisions across cultures, industries, and ways of life.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Working Principles */}
      <section className="py-24 px-6 bg-[#e8e4df]">
        <div className="max-w-[1000px] mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[9px] tracking-[5px] uppercase text-[#A9540F] mb-6">
              How I Work
            </p>
            <p
              className="text-2xl text-[#1a1510]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Three principles inform everything I do.
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
                The path that led here is not linear.
              </p>

              <p className="text-[15px] leading-[1.85] font-light text-[#7a7068] mb-8">
                I do not share biography as qualification. I share it because
                the work I do is inseparable from what I have lived. Every
                structure I recognize in others, I have moved through myself.
              </p>

              <div className="space-y-4">
                {background.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-1 h-1 rounded-full bg-[#A9540F] mt-2.5 shrink-0" />
                    <p className="text-[#f2ede8] text-[15px] font-light">{item}</p>
                  </div>
                ))}
              </div>
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
            <p
              className="text-[clamp(22px,3vw,32px)] text-[#1a1510] leading-relaxed mb-12"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              I believe that wealth and spiritual depth are not opposites.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div
              className="text-lg text-[#7a7068] space-y-4 mb-12"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              <p>
                I believe that business, when understood structurally, is one of
                the most powerful vehicles for transformation available to us.
              </p>
              <p>
                I believe that clarity is not something we arrive at through
                process, but something that reveals itself when the right
                conditions are met.
              </p>
              <p>
                I believe that most people are far closer to their own truth than
                they recognize — and that what is needed is not more guidance, but
                the right container for what already knows.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p
              className="text-xl text-[#1a1510]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              This is the field I hold.
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
              I do not work with everyone.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p
              className="text-lg text-[#7a7068] mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Not because I am selective for exclusivity, but because the work I
              do requires a certain readiness.
            </p>
            <p
              className="text-lg text-[#7a7068] mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              If what is written here resonates, it is likely because you
              already sense the field I describe.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p
              className="text-xl text-[#f2ede8]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              If so, what remains is entry — not persuasion.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#dedad4]">
        <div className="max-w-[680px] mx-auto text-center">
          <AnimatedSection>
            <p className="text-[9px] tracking-[5px] uppercase text-[#A9540F] mb-8">
              Ways to Begin
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p
              className="text-xl text-[#1a1510] mb-12"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Several structures exist depending on where you stand.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a href="/portal" className="btn-choose">
                Universe Portal
              </a>
              <a href="mailto:aelia@aeliakos.com" className="btn-ghost">
                Begin a Conversation
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-12 bg-[#e8e4df] border-t border-[rgba(26,21,16,0.08)]">
        <div className="max-w-[680px] mx-auto text-center px-6">
          <p className="text-sm text-[#7a7068] font-light">
            Mindful Experience GmbH
            <br />
            Zugerstrasse 32, 6340 Baar, Switzerland
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
