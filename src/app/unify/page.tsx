"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const stages = [
  {
    letter: "U",
    word: "UNIQUE",
    title: "Recognizing Your Singular Position",
    description:
      "Before strategy, before action — there is placement. This stage reveals where you already stand, distinct from every other position in the field.",
  },
  {
    letter: "NI",
    word: "IN LOVE",
    title: "Returning to Original Orientation",
    description:
      "The relationship between you and your work is the first structure to address. Here, we examine what drew you in — and what remains when distortion clears.",
  },
  {
    letter: "F",
    word: "FREE",
    title: "Releasing What Is Not Yours",
    description:
      "Much of what we carry was never ours. This stage creates clarity about what to set down — obligations, identities, expectations that serve no one.",
  },
  {
    letter: "Y",
    word: "YOURSELF",
    title: "Acting From the Whole",
    description:
      "Integration is not completion — it is the capacity to act without fragmentation. Here, decision becomes simple because the decider is coherent.",
  },
];

const includes = [
  "4 self-paced modules",
  "Written frameworks and contemplations",
  "Audio transmissions",
  "Journaling prompts for integration",
  "Lifetime access to all materials",
];

export default function UniFYCourse() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center pt-32 pb-20 bg-[#FAF8F5]">
        <div className="container-narrow text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              Self-Paced Structure
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-[#2C2825] mb-8"
          >
            Uni
            <span className="italic text-[#C9A962]">FY</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <p className="font-display text-xl text-[#8B6F5C] leading-relaxed mb-4">
              This is not a course.
            </p>
            <p className="font-display text-2xl text-[#2C2825] leading-relaxed">
              It is a <strong>named field</strong> — a structural intervention
              <br />
              that moves in four stages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Four Stages */}
      <section className="section-padding bg-[#2C2825] text-[#FAF8F5]">
        <div className="container-wide px-6 lg:px-12">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-6">
              The Sequence
            </h2>
            <p className="font-display text-3xl text-[#FAF8F5]">
              Four movements. One coherence.
            </p>
          </AnimatedSection>

          <div className="space-y-16 lg:space-y-24">
            {stages.map((stage, index) => (
              <AnimatedSection key={stage.word} delay={index * 0.1}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Letter/Word Display */}
                  <div
                    className={`lg:col-span-4 text-center lg:text-left ${
                      index % 2 === 1 ? "lg:order-2 lg:text-right" : ""
                    }`}
                  >
                    <span className="font-display text-8xl lg:text-9xl text-[#C9A962]/20">
                      {stage.letter}
                    </span>
                    <p className="font-display text-2xl text-[#C9A962] -mt-4 tracking-[0.2em]">
                      {stage.word}
                    </p>
                  </div>

                  {/* Content */}
                  <div
                    className={`lg:col-span-8 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="border-l border-[#C9A962]/30 pl-8">
                      <p className="text-xs tracking-[0.2em] uppercase text-[#8B6F5C] mb-4">
                        Stage {index + 1}
                      </p>
                      <h3 className="font-display text-2xl text-[#FAF8F5] mb-4">
                        {stage.title}
                      </h3>
                      <p className="text-[#8B6F5C] leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What This Is Not */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              What This Is Not
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-4 mb-12">
              <p className="font-display text-lg text-[#8B6F5C]">
                This is not a business framework.
              </p>
              <p className="font-display text-lg text-[#8B6F5C]">
                This is not mindset work.
              </p>
              <p className="font-display text-lg text-[#8B6F5C]">
                This is not content to consume.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-display text-2xl text-[#2C2825] leading-relaxed">
              UniFY is a <strong>field you enter</strong> —<br />
              not material you complete.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What Is Included */}
      <section className="section-padding bg-[#E8E4DE]">
        <div className="container-wide px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Placeholder */}
            <AnimatedSection direction="left">
              <div className="aspect-square bg-[#D4CFC7] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-display text-7xl text-[#8B6F5C]/20">
                      UniFY
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="right">
              <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
                What Is Included
              </h2>

              <div className="space-y-5 mb-12">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A962] mt-2.5 flex-shrink-0" />
                    <p className="font-display text-lg text-[#2C2825]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="font-display text-lg text-[#8B6F5C] italic">
                You move through at your own pace.
                <br />
                The structure holds regardless of speed.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              Investment
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-display text-7xl md:text-8xl text-[#2C2825] mb-6">
              444 €
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-display text-lg text-[#8B6F5C] mb-4">
              One payment. Lifetime access.
            </p>
            <p className="font-display text-lg text-[#8B6F5C] mb-12">
              No upsells. No continuations. The structure is complete.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <a
              href="https://buy.stripe.com/example-unify"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Enter UniFY
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding bg-[#1A1715] text-[#FAF8F5]">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              Who This Is For
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-display text-2xl text-[#FAF8F5] leading-relaxed mb-12">
              UniFY is designed for those already in motion.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-4 mb-12">
              <p className="font-display text-lg text-[#8B6F5C]">
                You have a business — or are building one.
              </p>
              <p className="font-display text-lg text-[#8B6F5C]">
                You sense misalignment you cannot name.
              </p>
              <p className="font-display text-lg text-[#8B6F5C]">
                You are ready for structural clarity, not more inspiration.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="font-display text-xl text-[#FAF8F5]">
              If you are still seeking permission to begin,
              <br />
              this structure will not serve you yet.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Connection to Other Offerings */}
      <section className="section-padding bg-[#E8E4DE]">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              After UniFY
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-display text-xl text-[#2C2825] leading-relaxed mb-8">
              UniFY is complete in itself.
              <br />
              It does not require continuation.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-display text-lg text-[#8B6F5C] mb-12">
              For those who wish to deepen the field, pathways exist:
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/private-advisory" className="btn btn-outline">
                Private Advisory
              </a>
              <a href="/universe-experiences" className="btn btn-outline">
                UniVerse Experiences
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
