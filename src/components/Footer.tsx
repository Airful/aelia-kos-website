"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(26,21,16,0.12)] px-6 py-11 md:px-14 flex justify-between items-center flex-wrap gap-5">
      <div
        className="text-sm font-normal tracking-[5px] uppercase text-[#1a1510]"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Aelia Kos
      </div>

      <ul className="flex gap-7 list-none flex-wrap">
        <li>
          <Link
            href="/portal"
            className="text-[9px] tracking-[2px] uppercase text-[#7a7068] no-underline hover:text-[#1a1510] transition-colors"
          >
            Universe Portal
          </Link>
        </li>
        <li>
          <Link
            href="#experiences"
            className="text-[9px] tracking-[2px] uppercase text-[#7a7068] no-underline hover:text-[#1a1510] transition-colors"
          >
            Experiences
          </Link>
        </li>
        <li>
          <Link
            href="#mentorship"
            className="text-[9px] tracking-[2px] uppercase text-[#7a7068] no-underline hover:text-[#1a1510] transition-colors"
          >
            Mentorship
          </Link>
        </li>
        <li>
          <a
            href="mailto:aelia@aeliakos.com"
            className="text-[9px] tracking-[2px] uppercase text-[#7a7068] no-underline hover:text-[#1a1510] transition-colors"
          >
            aelia@aeliakos.com
          </a>
        </li>
      </ul>

      <p className="text-[10px] text-[#7a7068] opacity-50 tracking-[1px]">
        &copy; {new Date().getFullYear()} Aelia Kos &middot; aeliakos.com
      </p>
    </footer>
  );
}
