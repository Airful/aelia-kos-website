"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const experiences = [
  {
    element: "Earth",
    location: "Greece",
    season: "Spring",
    description: "Grounded presence amidst ancient landscapes",
    color: "#8B6F5C",
  },
  {
    element: "Fire",
    location: "California",
    season: "Summer",
    description: "Transformation through intensity and light",
    color: "#C9A962",
  },
  {
    element: "Water",
    location: "Indonesia",
    season: "Autumn",
    description: "Flow and surrender in tropical sanctuary",
    color: "#6B8E8E",
  },
  {
    element: "Air",
    location: "Brazil",
    season: "Winter",
    description: "Expansion and movement in wild terrain",
    color: "#9B8B7B",
  },
];

const inclusions = [
  "4 days and nights of full immersion",
  "Curated architectural properties",
  "Private chef and nourishment",
  "Daily facilitated sessions",
  "Individual orientation conversation",
  "Post-experience integration call",
];

const pricing = [
  {
    tier: "Pre-Booking",
    price: "2,500",
    description: "Early commitment before public opening",
  },
  {
    tier: "Standard",
    price: "5,000",
    description: "Full access to the experience",
  },
  {
    tier: "VIP",
    price: "7,500",
    description: "Enhanced access with private sessions",
  },
];

export default function UniVerseExperiences() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-[#1A1715]">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 0%, #1A1715 70%)",
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
              UniVerse Experiences
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-[#FAF8F5] mb-8"
          >
            Immersive Field
            <br />
            <span className="italic text-[#C9A962]">Activations</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <p className="font-display text-xl text-[#8B6F5C] leading-relaxed">
              Four days of total immersion in curated properties.
              <br />
              Each experience is a field — not a retreat.
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
              The Format
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-display text-2xl md:text-3xl text-[#2C2825] leading-relaxed mb-8">
              UniVerse Experiences are not wellness retreats.
              <br />
              They are <em className="text-[#8B6F5C]">structured fields</em> for
              decisive engagement.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-display text-lg text-[#8B6F5C] mb-4">
              Each experience is held for a maximum of 20 participants.
            </p>
            <p className="font-display text-lg text-[#8B6F5C]">
              The container is designed for presence — not escape.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Elements & Locations */}
      <section className="section-padding bg-[#2C2825]">
        <div className="container-wide px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-6">
              The Cycle
            </h2>
            <p className="font-display text-2xl text-[#FAF8F5]">
              Four elements. Four locations. Four seasons.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {experiences.map((exp, index) => (
              <AnimatedSection key={exp.element} delay={index * 0.1}>
                <div className="relative group">
                  {/* Image Placeholder */}
                  <div className="aspect-[3/4] bg-[#1A1715] relative overflow-hidden mb-6">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{ background: exp.color }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="font-display text-6xl opacity-20"
                        style={{ color: exp.color }}
                      >
                        {exp.element[0]}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p
                        className="text-xs tracking-[0.2em] uppercase mb-2"
                        style={{ color: exp.color }}
                      >
                        {exp.season}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl text-[#FAF8F5] mb-2">
                    {exp.element}
                  </h3>
                  <p className="text-[#C9A962] text-sm tracking-wider uppercase mb-3">
                    {exp.location}
                  </p>
                  <p className="text-[#8B6F5C] text-sm">{exp.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What Is Included */}
      <section className="section-padding bg-[#E8E4DE]">
        <div className="container-wide px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Placeholder */}
            <AnimatedSection direction="left">
              <div className="aspect-[4/5] bg-[#D4CFC7] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-4xl text-[#8B6F5C]/30">
                    Experience
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="right">
              <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
                What Is Included
              </h2>

              <div className="space-y-6 mb-12">
                {inclusions.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A962] mt-2 flex-shrink-0" />
                    <p className="font-display text-lg text-[#2C2825]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="font-display text-lg text-[#8B6F5C] italic">
                Accommodation and travel are arranged independently.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-wide px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              Investment
            </h2>
            <p className="font-display text-2xl text-[#2C2825]">
              Three tiers of entry based on timing and access.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {pricing.map((tier, index) => (
              <AnimatedSection key={tier.tier} delay={index * 0.1}>
                <div
                  className={`p-10 text-center ${
                    index === 2
                      ? "bg-[#2C2825] text-[#FAF8F5]"
                      : "border border-[#D4CFC7]"
                  }`}
                >
                  <p
                    className={`text-xs tracking-[0.2em] uppercase mb-6 ${
                      index === 2 ? "text-[#C9A962]" : "text-[#8B6F5C]"
                    }`}
                  >
                    {tier.tier}
                  </p>
                  <p
                    className={`font-display text-5xl mb-4 ${
                      index === 2 ? "text-[#FAF8F5]" : "text-[#2C2825]"
                    }`}
                  >
                    {tier.price} €
                  </p>
                  <p
                    className={`text-sm ${
                      index === 2 ? "text-[#8B6F5C]" : "text-[#8B6F5C]"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Experiences */}
      <section className="section-padding bg-[#1A1715] text-[#FAF8F5]">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              Next Experience
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-display text-4xl md:text-5xl text-[#FAF8F5] mb-4">
              Indonesia
            </p>
            <p className="font-display text-2xl text-[#C9A962] italic mb-8">
              Water · Autumn 2026
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-display text-lg text-[#8B6F5C] mb-12">
              Dates and property to be announced.
              <br />
              Pre-booking opens to the UniVerse Club first.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <a href="/universe-club" className="btn btn-gold">
              Join UniVerse Club for Early Access
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* How Entry Works */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-8">
              How Entry Works
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-display text-xl text-[#8B6F5C] mb-8">
              Experiences are announced to UniVerse Club members first.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-4 mb-12">
              <p className="font-display text-lg text-[#2C2825]">
                1. Pre-booking opens 90 days before
              </p>
              <p className="font-display text-lg text-[#2C2825]">
                2. Standard booking opens 60 days before
              </p>
              <p className="font-display text-lg text-[#2C2825]">
                3. Final spaces (if available) 30 days before
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="font-display text-lg text-[#8B6F5C] italic">
              There is no waitlist. When full, the field is closed.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
