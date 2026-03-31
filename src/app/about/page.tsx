"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { ArrowRight, ExternalLink } from "lucide-react";

import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

const sections = [
  {
    tag: "01",
    title: "The Vision",
    content:
      "We believe software should work like hardware. A circuit either works or it doesn't. There's no 'mostly correct.' BRIK64 brings that same guarantee to code: 128 verified operations, composed with mathematical proof. If it compiles, it's correct. Period.",
  },
  {
    tag: "02",
    title: "The Science",
    content:
      "Built on Shannon's information theory and validated by Prof. Kish at Texas A&M. Digital Circuitality measures informational entropy \u2014 not heat, not vibes. When that entropy hits zero, every state is known, every path is verified. That's what our compiler proves.",
  },
  {
    tag: "03",
    title: "The Technology",
    content:
      "PCD is the blueprint. 128 verified operations are the building blocks. The EVA algebra composes them into certified circuits. The compiler checks every path, bounds every input, and produces a mathematical certificate. Today. Not someday. Today.",
  },
  {
    tag: "04",
    title: "Built in the Open",
    content:
      "The CLI is free. The compiler is free. The monomer catalog is free. Install it, verify your first function, and ship code you never have to debug again. GitHub, Discord, docs \u2014 everything is ready.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        {/* Hero */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white relative overflow-hidden">
          <HeroWireframe />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              Company
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              About <span className="text-[#00b8d4]">BRIK64</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Software that is mathematically guaranteed to be correct. Not tested. Not reviewed. Proven.
              Every certified program carries a proof that <PhiC /> = 1 &mdash; the circuit is closed. Free. Ready today.
            </p>
          </div>
        </section>

        {/* Sections */}
        {sections.map((s) => (
          <section
            key={s.tag}
            className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18"
          >
            <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
              [{s.tag}] {s.title.toUpperCase()}
            </p>
            <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
              {s.title}
            </h2>
            <p className="text-center mx-auto text-muted-foreground mt-4 max-w-3xl text-sm leading-relaxed md:text-base">
              {s.content}
            </p>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Start building &mdash; free
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            Install the CLI, certify your first function, read the science behind it.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/foundations"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              Foundations <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://docs.brik64.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Documentation <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://github.com/brik64"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub <ExternalLink className="h-3.5 w-3.5" />
            </a>
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
