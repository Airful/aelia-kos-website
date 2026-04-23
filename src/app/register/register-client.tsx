"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { trackRegisterSubmit, trackRegisterSuccess } from "@/lib/analytics";

function Stars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    for (let i = 0; i < 100; i++) {
      const s = document.createElement("div");
      const sz = Math.random() < 0.7 ? 1 : Math.random() < 0.85 ? 1.5 : 2;
      const bright =
        Math.random() < 0.3
          ? 0.45 + Math.random() * 0.25
          : 0.12 + Math.random() * 0.2;
      s.style.cssText = `
        position:absolute;border-radius:50%;background:#A9540F;
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        width:${sz}px;height:${sz}px;
        animation:twinkle ${4 + Math.random() * 8}s ease-in-out infinite ${-Math.random() * 12}s;
        --bright:${bright};opacity:0;
      `;
      el.appendChild(s);
    }
    return () => {
      el.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    />
  );
}

export function RegisterClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    trackRegisterSubmit();

    const res = await fetch("/api/register-interest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      trackRegisterSuccess();
      setSubmitted(true);
    } else {
      setError(data.error ?? "Something went wrong. Please try again.");
    }
  }

  return (
    <main
      className="min-h-screen text-[#1a1510]"
      style={{
        background: `
          radial-gradient(ellipse 70% 45% at 18% 5%, rgba(169,84,15,0.08) 0%, transparent 60%),
          radial-gradient(ellipse 55% 40% at 85% 12%, rgba(169,84,15,0.06) 0%, transparent 55%),
          radial-gradient(ellipse 80% 55% at 50% 98%, rgba(26,21,16,0.14) 0%, transparent 65%),
          #e8e4df
        `,
      }}
    >
      <Stars />

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
          Universe Portal
        </Link>
      </nav>

      {submitted ? (
        /* ── SUCCESS STATE ── */
        <section className="relative z-[1] min-h-screen flex flex-col items-center justify-center px-8 text-center">
          <AnimatedSection>
            <div
              className="text-[44px] text-[#A9540F] mb-7"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              ✦
            </div>
            <h1
              className="text-[clamp(34px,6vw,56px)] font-light text-[#1a1510] mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              You&apos;re on the <em className="italic text-[#A9540F]">list</em>
            </h1>
            <p className="text-[15px] leading-[1.85] text-[#1a1510] opacity-65 max-w-[440px] mx-auto">
              Thank you for your interest. We&apos;ll be in touch when the Portal
              is ready to welcome you.
            </p>
            <div className="mt-10">
              <Link href="/" className="btn-ghost">
                Back to Home
              </Link>
            </div>
          </AnimatedSection>
        </section>
      ) : (
        /* ── FORM ── */
        <section className="relative z-[1] min-h-screen flex flex-col items-center justify-center px-6 pt-[120px] pb-[80px]">
          <div className="w-full max-w-[480px]">
            <AnimatedSection>
              <span className="eyebrow text-center block mb-6">
                Universe Portal
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1
                className="text-[clamp(32px,5vw,48px)] font-light leading-[1.15] text-[#1a1510] text-center mb-8"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Register your <em className="italic text-[#A9540F]">interest</em>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-[15px] leading-[1.85] text-[#1a1510] opacity-65 text-center mb-12 max-w-[420px] mx-auto">
                The Universe Portal opened its doors in April 2026. Entry unfolds
                in intentional windows, timed to honour both the journey
                you&apos;re on and the community you&apos;re arriving into.
                Register your interest below and we&apos;ll be in touch when the
                Portal is ready to welcome you.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-[10px] tracking-[0.2em] uppercase text-[#7a7068]"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/40 border border-[rgba(26,21,16,0.12)] rounded-none px-4 py-3 text-[15px] font-light text-[#1a1510] outline-none focus:border-[#A9540F] transition-colors placeholder:text-[#7a7068]/50"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-[10px] tracking-[0.2em] uppercase text-[#7a7068]"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/40 border border-[rgba(26,21,16,0.12)] rounded-none px-4 py-3 text-[15px] font-light text-[#1a1510] outline-none focus:border-[#A9540F] transition-colors placeholder:text-[#7a7068]/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="text-[10px] tracking-[0.2em] uppercase text-[#7a7068]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/40 border border-[rgba(26,21,16,0.12)] rounded-none px-4 py-3 text-[15px] font-light text-[#1a1510] outline-none focus:border-[#A9540F] transition-colors placeholder:text-[#7a7068]/50"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600 text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full relative overflow-hidden text-[11px] tracking-[0.24em] uppercase text-[#E0E0E0] no-underline px-8 py-4 transition-all hover:brightness-110 disabled:opacity-50 mt-4"
                >
                  <span className="absolute inset-0 z-0">
                    <Image
                      src="/sky.jpg"
                      alt=""
                      fill
                      className="object-cover object-center"
                    />
                  </span>
                  <span className="relative z-[1]">
                    {loading ? "Submitting..." : "Register Interest"}
                  </span>
                </button>

                <p className="text-[11px] text-[#7a7068] text-center mt-3">
                  No payment required &middot; We&apos;ll only reach out about the
                  Portal
                </p>
              </form>
            </AnimatedSection>
          </div>
        </section>
      )}

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
          <Link href="/" className="text-[10px] tracking-[0.18em] uppercase text-[#1a1510] opacity-30 no-underline hover:opacity-80 transition-opacity">
            Home
          </Link>
          <a href="mailto:aelia@aeliakos.com" className="text-[10px] tracking-[0.18em] uppercase text-[#1a1510] opacity-30 no-underline hover:opacity-80 transition-opacity">
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
