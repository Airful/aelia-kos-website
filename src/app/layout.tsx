import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aelia Kos — Where Mystical High-Achievers Build Businesses with Soul",
  description:
    "Business as the Path for Self-Actualisation. A field for visionary leaders ready to meet themselves through business.",
  keywords: [
    "spiritual wealth",
    "conscious business",
    "executive coaching",
    "leadership",
    "retreats",
    "private advisory",
  ],
  authors: [{ name: "Aelia Kos" }],
  openGraph: {
    title: "Aelia Kos — Where Mystical High-Achievers Build Businesses with Soul",
    description: "Business as the Path for Self-Actualisation",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
