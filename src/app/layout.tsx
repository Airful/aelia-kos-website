import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aelia Kos | Spiritual Wealth & Conscious Business",
  description: "Business as the Path for Self-Actualisation. A field for visionary leaders ready to meet themselves through business.",
  keywords: ["spiritual wealth", "conscious business", "executive coaching", "leadership", "retreats", "private advisory"],
  authors: [{ name: "Aelia Kos" }],
  openGraph: {
    title: "Aelia Kos | Spiritual Wealth & Conscious Business",
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
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
