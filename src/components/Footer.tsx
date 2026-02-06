"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  offerings: [
    { href: "/private-advisory", label: "Private Advisory" },
    { href: "/universe-experiences", label: "UniVerse Experiences" },
    { href: "/universe-club", label: "UniVerse Club" },
    { href: "/unify", label: "UniFY Course" },
  ],
  company: [
    { href: "/about", label: "About Aelia" },
    { href: "/manifesto", label: "Manifesto" },
    { href: "/contact", label: "Contact" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
  connect: [
    { href: "https://www.instagram.com/aelia_kos/", label: "Instagram", external: true },
    { href: "https://www.linkedin.com/in/aelia-kos", label: "LinkedIn", external: true },
    { href: "https://www.youtube.com/channel/UC5cDyig-LTMOYF4mOE2UrRg", label: "YouTube", external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1A1715] text-[#FAF8F5]">
      {/* Main Footer */}
      <div className="section-padding pb-12">
        <div className="container-wide px-6 lg:px-12">
          {/* Top Section - Logo and Tagline */}
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="font-display text-4xl lg:text-5xl tracking-[0.3em] text-[#FAF8F5]">
                A K
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-xl lg:text-2xl text-[#D4CFC7] italic max-w-md"
            >
              Where spirit and wealth move as one.
            </motion.p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-20">
            {/* Offerings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-xs tracking-[0.25em] uppercase text-[#C9A962] mb-6">
                Offerings
              </h4>
              <ul className="space-y-4">
                {footerLinks.offerings.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#D4CFC7] hover:text-[#FAF8F5] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-xs tracking-[0.25em] uppercase text-[#C9A962] mb-6">
                Company
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#D4CFC7] hover:text-[#FAF8F5] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-xs tracking-[0.25em] uppercase text-[#C9A962] mb-6">
                Connect
              </h4>
              <ul className="space-y-4">
                {footerLinks.connect.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D4CFC7] hover:text-[#FAF8F5] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-[#2C2825]">
                <p className="text-[#8B6F5C] text-xs mb-2">Contact</p>
                <a
                  href="mailto:aelia@aeliakos.com"
                  className="text-[#D4CFC7] hover:text-[#FAF8F5] transition-colors text-sm"
                >
                  aelia@aeliakos.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#2C2825] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#8B6F5C] text-xs">
              © {new Date().getFullYear()} Mindful Experience GmbH. All rights reserved.
            </p>
            <p className="text-[#8B6F5C] text-xs">
              Zugerstrasse 32, 6340 Baar, Switzerland
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
