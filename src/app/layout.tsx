import type { Metadata } from "next";
import { Geist, Geist_Mono, Jura } from "next/font/google";
import { StaticCircuitGrid } from "@/components/StaticCircuitGrid";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Digital Circuitality — Software That Works Like Hardware",
  description:
    "64 formally verified atomic components composed through EVA algebra. BRIK64: a new paradigm for verifiable, thermodynamically coherent software.",
  openGraph: {
    title: "Digital Circuitality — Software That Works Like Hardware",
    description:
      "64 formally verified atomic components composed through EVA algebra. BRIK64: a new paradigm for verifiable, thermodynamically coherent software.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jura.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <StaticCircuitGrid />
        <div className="relative z-10 flex min-h-full flex-col">
          {children}
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}
