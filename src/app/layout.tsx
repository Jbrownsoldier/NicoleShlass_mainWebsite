import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nicole Shlass — Luxury Real Estate Los Angeles",
    template: "%s | Nicole Shlass Luxury Real Estate",
  },
  description:
    "Bespoke real estate representation for discerning buyers, sellers, and lessees across Greater Los Angeles. Specializing in Bel Air, Beverly Hills, Malibu, and Westwood.",
  keywords: [
    "luxury real estate Los Angeles",
    "Beverly Hills realtor",
    "Bel Air homes for sale",
    "Malibu luxury homes",
    "Nicole Shlass realtor",
    "Los Angeles luxury agent",
  ],
  authors: [{ name: "Nicole Shlass" }],
  creator: "Nicole Shlass",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nicole Shlass Luxury Real Estate",
    title: "Nicole Shlass — Luxury Real Estate Los Angeles",
    description:
      "Bespoke real estate representation for discerning buyers, sellers, and lessees across Greater Los Angeles.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicole Shlass — Luxury Real Estate Los Angeles",
    description: "Bespoke real estate representation across Greater Los Angeles.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${manrope.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
