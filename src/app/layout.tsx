import type { Metadata } from "next";
import { Inter, Jura, Manrope, Geist_Mono } from "next/font/google";
import { CookieBanner } from "@/components/CookieBanner";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const manropeDisplay = Manrope({
  variable: "--font-manrope-display",
  subsets: ["latin"],
});

const juraBrand = Jura({
  variable: "--font-jura-brand",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BRIK64 — Verified software platform",
    template: "%s | BRIK64",
  },
  description:
    "Compile, certify, and publish bounded blueprints across supported targets with visible package state.",
  metadataBase: new URL("https://brik64.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "BRIK64",
    title: "BRIK64 — Verified software platform",
    description:
      "Compile, certify, and publish bounded blueprints across supported targets with visible package state.",
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
    title: "BRIK64 — Verified software platform",
    description:
      "Compile, certify, and publish bounded blueprints across supported targets with visible package state.",
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
    "msapplication-TileColor": "#0a0d12",
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
      className={`${interSans.variable} ${manropeDisplay.variable} ${juraBrand.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground">
        <div className="relative flex min-h-screen flex-col">{children}</div>
        <CookieBanner />
      </body>
    </html>
  );
}
