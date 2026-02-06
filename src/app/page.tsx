"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

// Offerings data
const offerings = [
  {
    title: "Soul & Strategy Orientation",
    description:
      "A live orientation into business as a path of self-actualization where essence informs strategy and alignment replaces effort.",
    duration: "60 minutes",
    href: "/soul-strategy",
  },
  {
    title: "Private Advisory",
    description:
      "A time-bound advisory structure for leaders navigating structural repositioning. This work concerns clarity, coherence, and placement.",
    duration: "9-12 months",
    investment: "22,000 €",
    href: "/private-advisory",
  },
  {
    title: "UniVerse Experiences",
    description:
      "Physical environments designed to activate collective intelligence through place, trust, and shared presence. These are not retreats. They are field activations.",
    duration: "4 days",
    href: "/universe-experiences",
  },
  {
    title: "UniFY Course",
    description:
      "A four-stage sequence that intersects identity, decision, alignment, and clarity. Not a course — a named field.",
    investment: "444 €",
    href: "/unify",
  },
];

// Testimonials
const testimonials = [
  {
    quote:
      "There was immense, beyond words beauty in everything. I felt the best version of myself.",
    author: "M.M.",
    role: "CEO & Professor",
  },
  {
    quote:
      "Her typology is that of one wielding a sharp sword getting to the heart of the challenge. Having this kind of support created subconscious resilience.",
    author: "Dakotah",
    role: "Architect & CEO",
  },
  {
    quote:
      "So many signs & synchronicities. Everything seems so much brighter and clear since I returned. So magical. So unexpected.",
    author: "Jim K.",
    role: "Global Supply Chain Executive",
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background with Parallax */}
        <motion.div
          style={{ scale: heroScale, y: heroY }}
          className="absolute inset-0 bg-gradient-to-b from-[#E8E4DE] to-[#FAF8F5]"
        >
          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A962]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8B6F5C]/5 rounded-full blur-3xl" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          {/* Logo Mark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <span className="font-display text-6xl md:text-7xl lg:text-8xl tracking-[0.4em] text-[#2C2825]">
              A K
            </span>
          </motion.div>

          {/* Brand Name */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xs tracking-[0.35em] text-[#8B6F5C] mb-16"
          >
            A E L I A K O S
          </motion.p>

          {/* Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-[#2C2825] mb-8 leading-tight"
          >
            Business as the Path
            <br />
            <span className="italic text-[#8B6F5C]">for Self-Actualisation</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="font-display text-xl md:text-2xl text-[#8B6F5C] italic max-w-2xl mx-auto mb-12"
          >
            A path for those ready to meet themselves through business
          </motion.p>

          {/* Decorative Dot */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex justify-center"
          >
            <div className="w-2 h-2 rounded-full bg-[#C9A962]" />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#8B6F5C]">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-[#8B6F5C] to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* The Field Section */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              The Field
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-[#2C2825] leading-relaxed mb-8">
              This is not a coaching practice.
              <br />
              It is not a methodology.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-display text-xl md:text-2xl text-[#8B6F5C] leading-relaxed mb-12">
              The work here concerns <strong className="text-[#2C2825]">field creation</strong> —
              the conditions under which{" "}
              <em>people</em>, <em>capital</em>, <em>timing</em>, and <em>decisions</em>{" "}
              reorganize naturally.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="font-display text-xl md:text-2xl text-[#2C2825] mb-4">
              <strong>When the field is coherent, business becomes effortless.</strong>
            </p>
            <p className="font-display text-lg md:text-xl text-[#8B6F5C] italic">
              Success and prosperity are not sought for, they happen through alignment.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="divider mt-16" />
          </AnimatedSection>
        </div>
      </section>

      {/* Live Structures / Offerings Section */}
      <section className="section-padding bg-[#E8E4DE]">
        <div className="container-wide px-6 lg:px-12">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-6">
              Live Structures
            </h2>
            <p className="font-display text-3xl md:text-4xl text-[#2C2825]">
              Entry Points
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {offerings.map((offering, index) => (
              <AnimatedSection
                key={offering.title}
                delay={index * 0.1}
                className="group"
              >
                <a
                  href={offering.href}
                  className="block bg-[#FAF8F5] p-8 lg:p-12 h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-display text-2xl lg:text-3xl text-[#2C2825] mb-4 group-hover:text-[#8B6F5C] transition-colors">
                      {offering.title}
                    </h3>
                    <p className="text-[#8B6F5C] text-sm leading-relaxed mb-6 flex-grow">
                      {offering.description}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-[#E8E4DE]">
                      <div className="flex gap-6">
                        {offering.duration && (
                          <span className="text-xs tracking-wider text-[#8B6F5C]">
                            {offering.duration}
                          </span>
                        )}
                        {offering.investment && (
                          <span className="text-xs tracking-wider text-[#C9A962] font-medium">
                            {offering.investment}
                          </span>
                        )}
                      </div>
                      <span className="text-[#C9A962] text-lg group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How Entry Works Section */}
      <section className="section-padding bg-[#2C2825] text-[#FAF8F5]">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              How Entry Works
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-display text-xl md:text-2xl text-[#D4CFC7] leading-relaxed mb-8">
              Entry into this work does not happen through exploration calls, persuasion, or
              incremental engagement.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-display text-2xl md:text-3xl text-[#FAF8F5] mb-8">
              Structures are named.{" "}
              <strong className="text-[#C9A962]">
                Entry occurs through recognition and deliberate self-placement.
              </strong>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="font-display text-lg text-[#8B6F5C] italic">
              If a structure here is relevant, the next step is evident without explanation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-wide px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-6">
              Transmissions
            </h2>
            <p className="font-display text-3xl md:text-4xl text-[#2C2825]">
              Words from the Field
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center p-8">
                  <div className="text-[#C9A962] text-4xl mb-6">❝</div>
                  <p className="font-display text-lg text-[#2C2825] italic leading-relaxed mb-6">
                    {testimonial.quote}
                  </p>
                  <div className="w-12 h-px bg-[#C9A962] mx-auto mb-4" />
                  <p className="text-sm text-[#8B6F5C]">
                    <strong className="text-[#2C2825]">{testimonial.author}</strong>
                    <br />
                    {testimonial.role}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Aelia Section */}
      <section className="section-padding bg-[#E8E4DE]">
        <div className="container-wide px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Placeholder */}
            <AnimatedSection direction="left">
              <div className="aspect-[4/5] bg-[#D4CFC7] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl text-[#FAF8F5]/50">AK</span>
                </div>
                {/* Add actual image here */}
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="right" className="lg:pl-8">
              <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-6">
                Aelia Kos
              </h2>
              <p className="font-display text-lg text-[#8B6F5C] mb-4">Founder & CEO</p>

              <p className="font-display text-2xl md:text-3xl text-[#2C2825] leading-relaxed mb-8">
                I work with long-cycle transitions — moments where{" "}
                <em className="text-[#8B6F5C]">identity</em>,{" "}
                <em className="text-[#8B6F5C]">leadership</em>, and{" "}
                <em className="text-[#8B6F5C]">structure</em> reorganize simultaneously.
              </p>

              <p className="text-[#8B6F5C] leading-relaxed mb-6">
                The focus is in <strong className="text-[#2C2825]">coherence</strong>. Not
                speed, but tone.
              </p>

              <p className="text-[#8B6F5C] leading-relaxed mb-8">
                This work is shaped by <em>lived experience</em> across contexts, cultures, and
                systems and held through defined field structures rather than personal guidance.
              </p>

              <a href="/about" className="btn btn-outline">
                Read More
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Manifesto Teaser */}
      <section className="section-padding bg-[#1A1715] text-[#FAF8F5] relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="font-display text-[30vw] text-[#FAF8F5]">AK</span>
          </div>
        </div>

        <div className="container-narrow text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              Our Manifesto
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-[#FAF8F5] leading-relaxed mb-8">
              We remember. We rebuild. We rise.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-display text-xl text-[#D4CFC7] italic leading-relaxed mb-12">
              We are citizens of the <strong className="text-[#FAF8F5]">field</strong> — of
              the invisible soil between stars and roots, codes and breath, past and future.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-[#8B6F5C] mb-12">
              We are <strong className="text-[#C9A962]">Aelians</strong> of the UniVerse —
              nomads, visionaries, priestesses, poets, architects of the unseen.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <a href="/manifesto" className="btn btn-gold">
              Read Full Manifesto
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <div className="w-2 h-2 rounded-full bg-[#C9A962] mx-auto mb-12" />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#2C2825] mb-8">
              Ready to Begin?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-display text-xl text-[#8B6F5C] italic max-w-lg mx-auto mb-12">
              If this work resonates, the next step will be evident without explanation.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/private-advisory" className="btn btn-primary">
                Explore Private Advisory
              </a>
              <a href="/universe-experiences" className="btn btn-outline">
                View Experiences
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
