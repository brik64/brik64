import type { Metadata } from "next";
import { Geist, Geist_Mono, Jura } from "next/font/google";
import { StaticCircuitGrid } from "@/components/StaticCircuitGrid";
import { CookieBanner } from "@/components/CookieBanner";
import { StructuredData } from "@/components/StructuredData";
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
  title: {
    default: "BRIK64 — Digital Circuitality",
    template: "%s | BRIK64",
  },
  description:
    "The AI-native synthetic language. 128 verified operations composed through EVA algebra. Write once, verify everywhere.",
  metadataBase: new URL("https://brik64.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "BRIK64",
    title: "BRIK64 — Digital Circuitality",
    description:
      "The AI-native synthetic language. 128 verified operations. Write once, verify everywhere.",
    url: "https://brik64.com",
    locale: "en_US",
    images: [
      {
        url: "/seo/brik64-opengraph-stacked.png",
        width: 1200,
        height: 630,
        alt: "BRIK64 stacked social sharing logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRIK64 — Digital Circuitality",
    description:
      "The AI-native synthetic language. 128 verified operations. Write once, verify everywhere.",
    creator: "@brik64dev",
    images: ["/seo/brik64-opengraph-stacked.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "msapplication-TileColor": "#00e5ff",
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
      <head>
        <StructuredData />
      </head>
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
