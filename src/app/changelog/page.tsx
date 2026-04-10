"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

const versions = [
  {
    version: "v5.0.0-beta.2",
    date: "March 2026",
    changes: [
      "Extended monomers (full monomer catalog)",
      "0 panic guarantee across all certified paths",
      "Bounds-checked I/O for all monomer families",
    ],
  },
  {
    version: "v5.0.0-beta.1",
    date: "February 2026",
    changes: [
      "Platform preview with circuit laboratory UI",
      "Registry API for publishing and discovering certified circuits",
      "GitHub integration \u2014 auto-lift on push, PR certification badges",
    ],
  },
  {
    version: "v4.1.0-beta.1",
    date: "January 2026",
    changes: [
      "Security audit passed \u2014 zero critical findings",
      "15,424 tests across all monomer families",
      "Certification dashboard with real-time \u03a6_c metrics",
    ],
  },
  {
    version: "v4.0.0-beta.1",
    date: "December 2025",
    changes: [
      "SDKs for Rust, JavaScript, and Python",
      "EVA algebra operators for circuit composition",
      "MCP server for AI agent integration",
    ],
  },
  {
    version: "v3.0.0",
    date: "November 2025",
    changes: [
      "Universal transpiler \u2014 any source to any target via PCD",
      "140 certified transpilation paths",
      "COBOL migration support",
    ],
  },
  {
    version: "v2.0.0",
    date: "October 2025",
    changes: [
      "Lifter reverse-compiler for extracting PCD from existing code",
      "10 source languages supported for lifting",
      "Liftability scoring and domain analysis",
    ],
  },
  {
    version: "v1.0.0",
    date: "September 2025",
    changes: [
      "Initial release of BRIK64",
      "64 core monomers with mathematical proofs",
      "brikc CLI compiler and certifier",
      "PCD language specification v1",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        {/* Hero */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white relative overflow-hidden">
          <HeroWireframe />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
              Version History
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Changelog
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Every release. Every improvement. We ship fast.
            </p>
          </div>
        </section>

        {/* Versions */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <div className="mx-auto max-w-3xl space-y-6">
            {versions.map((v) => (
              <div
                key={v.version}
                className="border border-border bg-muted/10 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-md bg-teal/10 px-3 py-1 text-sm font-bold text-teal font-mono">
                    {v.version}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {v.date}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {v.changes.map((change, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      </main>
      <div className="relative z-10">

        <Footer />

      </div>
    </>
  );
}
