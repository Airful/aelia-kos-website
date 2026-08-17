import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Universe Portal — Aelia Kos",
  description:
    "A living membership for founders, investors, creatives, and practitioners building with soul. CHF 111/month with Universe Club AI, live sessions, and recorded transmissions.",
  openGraph: {
    title: "Universe Portal — Aelia Kos",
    description:
      "A living membership with Universe Club AI, live sessions, and recorded transmissions.",
    type: "website",
  },
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
