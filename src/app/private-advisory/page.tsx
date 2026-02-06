"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const inclusions = [
  {
    title: "One-on-one engagement periods",
    description: "Calibrated for presence and continuity",
  },
  {
    title: "Intentional facilitation rhythms",
    description: "Engagements organized to sustain structural consistency",
  },
  {
    title: "Adaptive sequence integration",
    description: "Coherence moves forward through participation, not instruction",
  },
];

const testimonials = [
  {
    quote:
      "Her typology is that of one wielding a sharp sword getting to the heart of the challenge or context. Having this kind of support created this subconscious resilience. It has been really potent.",
    author: "Dakotah",
    role: "Architect & CEO",
  },
  {
    quote:
      "Her reflection with intuitive questions were right on the spot to allow me to dwell deeper into my own psyche to get the leads on the topic we were getting into.",
    author: "Kaja",
    role: "Private Chef & Healer",
  },
  {
    quote:
      "You have a gift of championing others, of seeing who they are and who they are made to be, and pouring into them so they can be who they were made to be.",
    author: "Chris",
    role: "Manager",
  },
];

export default function PrivateAdvisory() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center pt-32 pb-20">
        <div className="container-narrow text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              Private Advisory
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-[#2C2825] mb-8"
          >
            A Field of
            <br />
            <span className="italic text-[#8B6F5C]">Structural Clarity</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <p className="font-display text-xl text-[#8B6F5C] leading-relaxed">
              Private Mentorship is not a coaching program.
              <br />
              It is a <strong className="text-[#2C2825]">defined engagement structure</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What This Structure Is */}
      <section className="section-padding bg-[#E8E4DE]">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              What This Structure Is
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-display text-2xl md:text-3xl text-[#2C2825] leading-relaxed mb-8">
              Private Mentorship is a time-bounded engagement in which{" "}
              <em className="text-[#8B6F5C]">clarity</em>,{" "}
              <em className="text-[#8B6F5C]">coherence</em>, and{" "}
              <em className="text-[#8B6F5C]">decision</em> converge.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-display text-lg text-[#8B6F5C] mb-4">
              It is not a path to feel supported.
            </p>
            <p className="font-display text-lg text-[#8B6F5C] mb-4">
              It is not a journey toward confidence.
            </p>
            <p className="font-display text-lg text-[#8B6F5C] mb-8">
              It is not guided facilitation.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="font-display text-xl text-[#2C2825]">
              It is a <strong>field of placement</strong> where existing orientation is exposed,
              calibrated, and anchored in action.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Operates */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              How It Operates
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-display text-xl text-[#8B6F5C] mb-8">
              This structure is accessed through:
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-4 mb-12">
              <p className="font-display text-lg text-[#2C2825]">— recognition of its relevance</p>
              <p className="font-display text-lg text-[#2C2825]">— intentional engagement</p>
              <p className="font-display text-lg text-[#2C2825]">— consistent presence</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="font-display text-lg text-[#8B6F5C] mb-4">
              There are no exploration calls for approval.
            </p>
            <p className="font-display text-lg text-[#8B6F5C] mb-8">
              There is no "fit assessment" as qualification.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="font-display text-xl text-[#2C2825]">
              A brief <strong className="text-[#C9A962]">Mutual Alignment Conversation</strong> may
              precede entry to confirm coherence on both sides.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What Is Included */}
      <section className="section-padding bg-[#2C2825] text-[#FAF8F5]">
        <div className="container-wide px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-6">
              What Is Included
            </h2>
            <p className="font-display text-2xl md:text-3xl text-[#FAF8F5]">
              Private Mentorship is held as a{" "}
              <strong className="text-[#C9A962]">9–12 month engagement</strong>, with a{" "}
              <strong className="text-[#C9A962]">bi-weekly rhythm</strong> of direct conversations.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {inclusions.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="text-center p-8 border border-[#3d3835]">
                  <h3 className="font-display text-xl text-[#FAF8F5] mb-4">{item.title}</h3>
                  <p className="text-[#8B6F5C] text-sm">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <p className="font-display text-lg text-[#8B6F5C] italic">
              There is no guarantee of outcome.
              <br />
              There is only expression of placement.
            </p>
          </AnimatedSection>
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
            <p className="font-display text-xl text-[#8B6F5C] mb-8">This structure is not:</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-3 mb-12">
              <p className="font-display text-lg text-[#2C2825]">— emotional support</p>
              <p className="font-display text-lg text-[#2C2825]">— life coaching</p>
              <p className="font-display text-lg text-[#2C2825]">— step-by-step teaching</p>
              <p className="font-display text-lg text-[#2C2825]">— reassurance</p>
              <p className="font-display text-lg text-[#2C2825]">— motivational intervention</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="font-display text-xl text-[#2C2825]">
              It is <strong>structural engagement within a field</strong>, not a support mechanism.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Investment */}
      <section className="section-padding bg-[#E8E4DE]">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">Investment</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-display text-6xl md:text-7xl text-[#2C2825] mb-6">22,000 €</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-display text-lg text-[#8B6F5C] mb-4">
              This price is stable and non-negotiable.
            </p>
            <p className="font-display text-lg text-[#8B6F5C] mb-12">
              If this structure is active for you, entry will be unforced and obvious.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <a
              href="https://buy.stripe.com/14AfZj6GQ2jE6E68Zc93y03"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Enter Private Mentorship
            </a>
            <p className="font-display text-sm text-[#8B6F5C] italic mt-6">
              A brief Mutual Alignment Conversation may precede entry to confirm coherence on both
              sides.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-wide px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-6">
              Historical Archive
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="p-8 bg-[#E8E4DE]">
                  <p className="font-display text-lg text-[#2C2825] italic leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="w-12 h-px bg-[#C9A962] mb-4" />
                  <p className="text-sm text-[#8B6F5C]">
                    — {testimonial.author}, {testimonial.role}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Aelia */}
      <section className="section-padding bg-[#1A1715] text-[#FAF8F5]">
        <div className="container-wide px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Placeholder */}
            <AnimatedSection direction="left">
              <div className="aspect-square bg-[#2C2825] relative overflow-hidden rounded-full max-w-md mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-4xl text-[#FAF8F5]/30">AK</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="right">
              <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-6">Aelia Kos</h2>

              <p className="font-display text-2xl text-[#FAF8F5] leading-relaxed mb-6">
                I work at the intersection of business, structure, and long-cycle change.
              </p>

              <p className="text-[#8B6F5C] leading-relaxed mb-6">
                My work concerns how environments are designed — and how people, decisions, capital,
                and timing reorganize once the environment is coherent.
              </p>

              <p className="text-[#8B6F5C] leading-relaxed mb-6">
                I am not interested in growth for its own sake, nor in business as optimization. I
                work with business as a <strong className="text-[#FAF8F5]">structural force</strong>{" "}
                — one that shapes identity, culture, and collective direction.
              </p>

              <p className="text-[#8B6F5C] leading-relaxed">
                What I hold today is not a method. It is a{" "}
                <strong className="text-[#FAF8F5]">field</strong> — informed by lived decisions
                across cultures, industries, and ways of life.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
