import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Universe Portal — Aelia Kos",
  description:
    "A living membership for mystical high-achievers building businesses with soul. CHF 111/month. Monthly transmissions, community, and Universe Club access.",
  openGraph: {
    title: "Universe Portal — Aelia Kos",
    description:
      "A living membership for mystical high-achievers building businesses with soul.",
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
