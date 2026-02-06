"use client";

import { motion } from "framer-motion";
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
    <main className="min-h-screen bg-[#FAF8F5]">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center pt-32 pb-20">
        <div className="container-narrow text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              About
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-[#2C2825] mb-8"
          >
            Aelia
            <br />
            <span className="italic text-[#8B6F5C]">Kos</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <p className="font-display text-xl text-[#8B6F5C] leading-relaxed">
              Working at the intersection of
              <br />
              <strong className="text-[#2C2825]">
                business, structure, and long-cycle change
              </strong>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portrait & Introduction */}
      <section className="section-padding bg-[#E8E4DE]">
        <div className="container-wide px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Portrait Placeholder */}
            <AnimatedSection direction="left">
              <div className="aspect-[3/4] bg-[#D4CFC7] relative overflow-hidden max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl text-[#8B6F5C]/30">
                    AK
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* Introduction */}
            <AnimatedSection direction="right">
              <p className="font-display text-2xl text-[#2C2825] leading-relaxed mb-8">
                I work with individuals and organizations at thresholds of
                significant transition.
              </p>

              <p className="text-[#8B6F5C] leading-relaxed mb-6">
                My work concerns how environments are designed — and how people,
                decisions, capital, and timing reorganize once the environment
                is coherent.
              </p>

              <p className="text-[#8B6F5C] leading-relaxed mb-6">
                I am not interested in growth for its own sake, nor in business
                as optimization. What I hold is a capacity to see structure
                where others see circumstance — and to work with what is
                actually present, rather than what is desired.
              </p>

              <p className="text-[#8B6F5C] leading-relaxed">
                What I offer today is not a method. It is a{" "}
                <strong className="text-[#2C2825]">field</strong> — informed by
                lived decisions across cultures, industries, and ways of life.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Working Principles */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-wide px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-6">
              How I Work
            </h2>
            <p className="font-display text-2xl text-[#2C2825]">
              Three principles inform everything I do.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {principles.map((principle, index) => (
              <AnimatedSection key={principle.title} delay={index * 0.1}>
                <div className="p-8 border border-[#D4CFC7] h-full">
                  <div className="w-12 h-12 rounded-full border border-[#C9A962] flex items-center justify-center mb-6">
                    <span className="font-display text-xl text-[#C9A962]">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-[#2C2825] mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-[#8B6F5C] text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="section-padding bg-[#2C2825] text-[#FAF8F5]">
        <div className="container-wide px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <AnimatedSection>
              <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
                Background
              </h2>

              <p className="font-display text-2xl text-[#FAF8F5] leading-relaxed mb-8">
                The path that led here is not linear.
              </p>

              <p className="text-[#8B6F5C] leading-relaxed mb-8">
                I do not share biography as qualification. I share it because
                the work I do is inseparable from what I have lived. Every
                structure I recognize in others, I have moved through myself.
              </p>

              <div className="space-y-4">
                {background.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A962] mt-2.5 flex-shrink-0" />
                    <p className="text-[#FAF8F5]">{item}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Image Placeholder */}
            <AnimatedSection direction="right">
              <div className="aspect-square bg-[#1A1715] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-4xl text-[#FAF8F5]/10">
                    Path
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              Philosophy
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-display text-2xl md:text-3xl text-[#2C2825] leading-relaxed mb-12">
              I believe that wealth and spiritual depth are not opposites.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-display text-lg text-[#8B6F5C] mb-4">
              I believe that business, when understood structurally, is one of
              the most powerful vehicles for transformation available to us.
            </p>
            <p className="font-display text-lg text-[#8B6F5C] mb-4">
              I believe that clarity is not something we arrive at through
              process, but something that reveals itself when the right
              conditions are met.
            </p>
            <p className="font-display text-lg text-[#8B6F5C] mb-12">
              I believe that most people are far closer to their own truth than
              they recognize — and that what is needed is not more guidance, but
              the right container for what already knows.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="font-display text-xl text-[#2C2825]">
              This is the field I hold.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Not For Everyone */}
      <section className="section-padding bg-[#1A1715] text-[#FAF8F5]">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              A Note
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-display text-2xl text-[#FAF8F5] leading-relaxed mb-8">
              I do not work with everyone.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-display text-lg text-[#8B6F5C] mb-4">
              Not because I am selective for exclusivity, but because the work I
              do requires a certain readiness.
            </p>
            <p className="font-display text-lg text-[#8B6F5C] mb-8">
              If what is written here resonates, it is likely because you
              already sense the field I describe.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="font-display text-xl text-[#FAF8F5]">
              If so, what remains is entry — not persuasion.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#E8E4DE]">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              Ways to Begin
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-display text-xl text-[#2C2825] mb-12">
              Several structures exist depending on where you stand.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a href="/unify" className="btn btn-outline">
                UniFY Course
              </a>
              <a href="/private-advisory" className="btn btn-outline">
                Private Advisory
              </a>
              <a href="/universe-experiences" className="btn btn-outline">
                Experiences
              </a>
              <a href="/universe-club" className="btn btn-outline">
                UniVerse Club
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-[#FAF8F5] border-t border-[#D4CFC7]">
        <div className="container-narrow text-center px-6">
          <p className="text-sm text-[#8B6F5C]">
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
