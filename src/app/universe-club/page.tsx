"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const memberTypes = [
  {
    title: "Impact Investors",
    description: "Those deploying capital with consciousness",
  },
  {
    title: "Conscious Founders",
    description: "Building enterprises aligned with deeper purpose",
  },
  {
    title: "Property Stewards",
    description: "Holding spaces that serve transformation",
  },
  {
    title: "Advisors & Facilitators",
    description: "Serving the evolution of wealth and spirit",
  },
];

const benefits = [
  {
    title: "Curated Introductions",
    description:
      "Meaningful connections arranged with intention — not networking, but field recognition.",
  },
  {
    title: "Experience Access",
    description:
      "Priority entry to UniVerse Experiences before public opening, with preferred pricing.",
  },
  {
    title: "Property Circle",
    description:
      "Access to member properties for personal retreats and exclusive gatherings.",
  },
  {
    title: "Investment Opportunities",
    description:
      "Early visibility into aligned ventures and conscious investment opportunities.",
  },
  {
    title: "Private Gatherings",
    description:
      "Intimate member-only events in exceptional locations throughout the year.",
  },
  {
    title: "Direct Channel",
    description:
      "Private communication line to Aelia and the UniVerse circle for guidance and connection.",
  },
];

export default function UniVerseClub() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#1A1715]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 30% 50%, #C9A962 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="container-narrow text-center px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              UniVerse Club
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-[#FAF8F5] mb-8"
          >
            A Private Field
            <br />
            <span className="italic text-[#C9A962]">Connecting Wealth & Spirit</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <p className="font-display text-xl text-[#8B6F5C] leading-relaxed">
              The first private club for those who recognize that
              <br />
              wealth and spiritual depth are not opposites.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <div className="w-px h-24 bg-[#C9A962]/30 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* What This Is */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              The Field
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-display text-2xl md:text-3xl text-[#2C2825] leading-relaxed mb-8">
              UniVerse Club is not a network.
              <br />
              It is a <em className="text-[#8B6F5C]">contained field</em> of mutual recognition.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-display text-lg text-[#8B6F5C] mb-4">
              We do not gather for opportunity.
            </p>
            <p className="font-display text-lg text-[#8B6F5C] mb-4">
              We do not connect for advantage.
            </p>
            <p className="font-display text-lg text-[#8B6F5C] mb-8">
              We convene because the field is ready.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="font-display text-xl text-[#2C2825]">
              The club exists to hold a{" "}
              <strong>coherent container for wealth that serves life</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Who Is Inside */}
      <section className="section-padding bg-[#E8E4DE]">
        <div className="container-wide px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-6">
              Who Is Inside
            </h2>
            <p className="font-display text-2xl text-[#2C2825]">
              Members of UniVerse Club are drawn from four domains.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {memberTypes.map((type, index) => (
              <AnimatedSection key={type.title} delay={index * 0.1}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-[#C9A962] flex items-center justify-center">
                    <span className="font-display text-2xl text-[#C9A962]">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-[#2C2825] mb-3">
                    {type.title}
                  </h3>
                  <p className="text-[#8B6F5C] text-sm">{type.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What Is Offered */}
      <section className="section-padding bg-[#2C2825] text-[#FAF8F5]">
        <div className="container-wide px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-6">
              What Is Offered
            </h2>
            <p className="font-display text-2xl text-[#FAF8F5]">
              The structure of the club provides access, not content.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <div className="p-8 border border-[#3d3835]">
                  <h3 className="font-display text-xl text-[#FAF8F5] mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-[#8B6F5C] text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              Membership
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-display text-2xl md:text-3xl text-[#2C2825] leading-relaxed mb-8">
              Membership is by invitation or application.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-display text-lg text-[#8B6F5C] mb-4">
              There is no interview process.
            </p>
            <p className="font-display text-lg text-[#8B6F5C] mb-8">
              There is a brief conversation to confirm mutual fit.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-[#E8E4DE] p-12 mb-12">
              <p className="text-xs tracking-[0.2em] uppercase text-[#8B6F5C] mb-4">
                Annual Membership
              </p>
              <p className="font-display text-5xl md:text-6xl text-[#2C2825] mb-4">
                5,000 €
              </p>
              <p className="text-sm text-[#8B6F5C]">
                Renewable annually with confirmed presence
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <a href="#apply" className="btn btn-primary">
              Apply for Membership
            </a>
            <p className="font-display text-sm text-[#8B6F5C] italic mt-6">
              Existing members may nominate new candidates.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Standard */}
      <section className="section-padding bg-[#1A1715] text-[#FAF8F5]">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              The Standard
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-display text-2xl text-[#FAF8F5] leading-relaxed mb-12">
              UniVerse Club is not for everyone.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-4 mb-12">
              <p className="font-display text-lg text-[#8B6F5C]">
                It is for those who have moved beyond accumulation.
              </p>
              <p className="font-display text-lg text-[#8B6F5C]">
                It is for those who recognize wealth as responsibility.
              </p>
              <p className="font-display text-lg text-[#8B6F5C]">
                It is for those ready to meet others in the same field.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="font-display text-xl text-[#FAF8F5]">
              If you are still seeking validation for your path,
              <br />
              this is not the space.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Application Form Placeholder */}
      <section id="apply" className="section-padding bg-[#E8E4DE]">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              Express Interest
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-display text-xl text-[#2C2825] mb-12">
              Share a brief introduction. If alignment is clear, a conversation
              will follow.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form className="max-w-xl mx-auto text-left space-y-6">
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[#8B6F5C] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D4CFC7] font-display text-[#2C2825] focus:outline-none focus:border-[#C9A962]"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[#8B6F5C] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D4CFC7] font-display text-[#2C2825] focus:outline-none focus:border-[#C9A962]"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[#8B6F5C] mb-2">
                  What brings you to UniVerse Club?
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D4CFC7] font-display text-[#2C2825] focus:outline-none focus:border-[#C9A962] resize-none"
                />
              </div>

              <div className="text-center pt-4">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
