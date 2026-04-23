"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Image from "next/image";
import Link from "next/link";
import { trackBookSessionView } from "@/lib/analytics";

export default function BookingClient() {
  useEffect(() => {
    trackBookSessionView();
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#A9540F" },
          dark: { "cal-brand": "#A9540F" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <main
      className="min-h-screen text-[#1a1510]"
      style={{
        background: `
          radial-gradient(ellipse 70% 45% at 18% 5%, rgba(169,84,15,0.08) 0%, transparent 60%),
          radial-gradient(ellipse 55% 40% at 85% 12%, rgba(169,84,15,0.06) 0%, transparent 55%),
          #e8e4df
        `,
      }}
    >
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-[18px] md:px-12 flex items-center justify-between bg-[rgba(232,228,223,0.82)] backdrop-blur-[16px] border-b border-[rgba(26,21,16,0.1)]">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Aelia Kos"
            width={38}
            height={38}
            className="h-[38px] w-auto opacity-85 hover:opacity-100 transition-opacity"
          />
        </Link>
        <Link
          href="/portal"
          className="text-[11px] tracking-[0.2em] uppercase text-[#1a1510] opacity-45 no-underline hover:opacity-100 hover:text-[#A9540F] transition-all"
        >
          Enter the Portal
        </Link>
      </nav>

      {/* HERO */}
      <section className="pt-[140px] pb-12 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="eyebrow">Connection</span>
          <h1
            className="text-[clamp(36px,6vw,56px)] font-light leading-[1.08] text-[#1a1510] mb-5 tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Book a Universe
            <br />
            <em className="italic text-[#A9540F]">Connection Session</em>
          </h1>
          <p className="text-[15px] leading-[1.85] font-light text-[#7a7068] max-w-[520px] mx-auto">
            A space to explore what is moving, what is ready, and what wants to
            emerge next. No pitch. No pressure. Just presence and clarity.
          </p>
        </div>
      </section>

      {/* CAL.COM EMBED */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto">
          <div className="rounded-sm border border-[rgba(26,21,16,0.1)] overflow-hidden bg-[#f2ede8]">
            <Cal
              calLink="aelia-kos/universe-connection"
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              config={{ layout: "month_view", theme: "light" }}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-[1] px-6 py-8 md:px-12 border-t border-[rgba(26,21,16,0.1)] flex flex-col md:flex-row items-center justify-between gap-[18px]">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Aelia Kos"
            width={26}
            height={26}
            className="h-[26px] w-auto opacity-40"
          />
        </Link>
        <div className="flex flex-wrap justify-center gap-7">
          <Link
            href="/"
            className="text-[10px] tracking-[0.18em] uppercase text-[#1a1510] opacity-30 no-underline hover:opacity-80 transition-opacity"
          >
            Home
          </Link>
          <a
            href="mailto:aelia@aeliakos.com"
            className="text-[10px] tracking-[0.18em] uppercase text-[#1a1510] opacity-30 no-underline hover:opacity-80 transition-opacity"
          >
            Contact
          </a>
        </div>
        <div className="text-[10px] text-[#1a1510] opacity-20 tracking-[0.1em]">
          &copy; 2026 Aelia Kos
        </div>
      </footer>
    </main>
  );
}
