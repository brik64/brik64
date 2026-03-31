"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CircuitGrid } from "@/components/CircuitGrid";
import { ArrowRight, BookOpen } from "lucide-react";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

/* ────────────────────────────────────────────────────────────
   V2 HOMEPAGE — CMO-aligned, 5-section narrative
   Based on Brand Book v1, Official Language Manual v2,
   Synthetic Language Manual v1
   ──────────────────────────────────────────────────────────── */

/* ── Section data ── */

const proofBar = [
  "Atomic monomers",
  "EVA composition",
  "PCD",
  "Structural certification",
  "Multi-target compilation",
];

const shiftPairs = [
  { before: "Code", after: "Circuitry" },
  { before: "Syntax", after: "Function" },
  { before: "Interpretation", after: "Structure" },
  { before: "Post-hoc confidence", after: "Certifiable behavior" },
  { before: "Human-only programming", after: "Intelligence-operable systems" },
];

const architectureSteps = [
  {
    label: "01",
    title: "Atomic monomers",
    desc: "128 formally verified operations organized in 16 families. Each monomer has a defined signature, bounded domains, and a Coq proof. The functional alphabet of a new kind of programming.",
  },
  {
    label: "02",
    title: "EVA composition",
    desc: "Sequential, parallel, and conditional operators that preserve correctness through composition. If Part A is verified and Part B is verified, A composed with B is verified.",
  },
  {
    label: "03",
    title: "PCD description",
    desc: "A formal language for describing programmable circuits. 128 operations an AI agent learns in one prompt. Humans write in their preferred language — the Lifter converts it to PCD.",
  },
  {
    label: "04",
    title: "Structural certification",
    desc: "The compiler verifies every connection. Domain constraints enforced automatically. If the circuit doesn't close, the program doesn't compile. The math is the proof.",
  },
  {
    label: "05",
    title: "Portable output",
    desc: "One definition, 14 compilation targets. Rust, JavaScript, Python, C, Go, WASM, native x86-64, and more. Certifiable behavior that travels with the code.",
  },
];

const verticals = [
  {
    name: "Algorithmic Trading",
    standard: "MiFID II Art. 17",
    line: "Compliance evidence generated at compile time.",
  },
  {
    name: "Medical Devices",
    standard: "IEC 62304 Class C",
    line: "Overdose is structurally impossible.",
  },
  {
    name: "Aerospace",
    standard: "DO-178C Level A",
    line: "Every flight path has a defined response.",
  },
  {
    name: "Smart Contracts",
    standard: "WASM < 100KB",
    line: "Bugs can't compile. Contracts can't be patched.",
  },
];

const stats = [
  { value: "128", label: "verified operations" },
  { value: "14", label: "compilation targets" },
  { value: "110K+", label: "tests passing" },
  { value: "207", label: "Coq proofs" },
];

/* ── Page ── */

export default function HomeV2() {
  return (
    <>
      <CircuitGrid />
      <Navbar />
      <main className="relative z-10">

        {/* ━━━ HERO ━━━ */}
        <section className="border-border relative mx-auto w-full max-w-7xl overflow-hidden border-x bg-background">
          <HeroWireframe />
          <div className="relative z-10 mx-auto max-w-4xl px-6 py-28 text-center md:py-36 lg:py-44">
            <p className="text-muted-foreground text-sm font-medium tracking-wide">
              The AI-native synthetic language
            </p>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Software becomes{" "}
              <span className="text-teal">certifiable digital circuitry.</span>
            </h1>

            <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
              BRIK-64 is a formal architecture built on atomic monomers, EVA composition,
              PCD and certifiable compilation. From software written for humans to software
              operable by intelligences.
            </p>

            {/* Proof bar */}
            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {proofBar.map((item) => (
                <span
                  key={item}
                  className="text-muted-foreground/60 text-xs font-medium tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://docs.brik64.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
              >
                Explore BRIK-64
              </a>
              <a
                href="https://docs.brik64.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
              >
                Read the docs <BookOpen className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl border-x border-border bg-background">

          {/* ━━━ 1. THE SHIFT ━━━ */}
          <section className="border-border border-t px-6 py-20 md:py-28 lg:px-16">
            <p className="text-muted-foreground mb-12 text-xs font-medium tracking-[3px]">
              THE SHIFT
            </p>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
              Software stops behaving like open text.{" "}
              <span className="text-teal">It starts behaving like circuitry.</span>
            </h2>

            <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed md:text-lg">
              For decades, programming meant writing human-readable instructions and hoping
              they behaved as intended. BRIK-64 changes the substrate. It reorganizes
              programming around atomic function, explicit composition and certifiable behavior.
            </p>

            {/* Shift pairs */}
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {shiftPairs.map((pair) => (
                <div
                  key={pair.before}
                  className="border border-border p-5"
                >
                  <p className="text-muted-foreground/50 text-xs font-medium line-through decoration-muted-foreground/30">
                    {pair.before}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-teal">
                    {pair.after}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ━━━ 2. THE ARCHITECTURE ━━━ */}
          <section className="border-border border-t px-6 py-20 md:py-28 lg:px-16">
            <p className="text-muted-foreground mb-12 text-xs font-medium tracking-[3px]">
              THE ARCHITECTURE
            </p>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
              From monomers to{" "}
              <span className="text-teal">certifiable software.</span>
            </h2>

            <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed md:text-lg">
              Five layers compose the system. Each preserves the guarantees of the one below.
              The result is software that carries its proof with it.
            </p>

            {/* Architecture steps */}
            <div className="mt-14 space-y-0 border border-border">
              {architectureSteps.map((step, i) => (
                <div
                  key={step.label}
                  className={`flex gap-6 p-6 md:p-8 ${
                    i < architectureSteps.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-teal/30 shrink-0 font-mono text-3xl font-bold">
                    {step.label}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats bar */}
            <div className="mt-14 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-background p-6 text-center">
                  <p className="text-2xl font-bold text-teal md:text-3xl">{s.value}</p>
                  <p className="text-muted-foreground mt-1 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ━━━ 3. THE PROOF ━━━ */}
          <section className="border-border border-t px-6 py-20 md:py-28 lg:px-16">
            <p className="text-muted-foreground mb-12 text-xs font-medium tracking-[3px]">
              THE PROOF
            </p>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
              Where correctness is{" "}
              <span className="text-teal">not optional.</span>
            </h2>

            <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed md:text-lg">
              In regulated industries, &ldquo;tests pass&rdquo; is not enough. BRIK-64
              generates structural verification evidence automatically &mdash; at compile time,
              not after the fact.
            </p>

            {/* Verticals */}
            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              {verticals.map((v) => (
                <div
                  key={v.name}
                  className="border border-border p-6"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-sm font-semibold text-foreground">{v.name}</h3>
                    <span className="rounded-full border border-teal/30 bg-teal/10 px-2.5 py-0.5 text-[10px] font-medium text-teal">
                      {v.standard}
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-2 text-sm">{v.line}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ━━━ 4. THE FUTURE ━━━ */}
          <section className="border-border border-t px-6 py-20 md:py-28 lg:px-16">
            <p className="text-muted-foreground mb-12 text-xs font-medium tracking-[3px]">
              THE FUTURE
            </p>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
              From software written for humans{" "}
              <span className="text-teal">to software operable by intelligences.</span>
            </h2>

            <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed md:text-lg">
              Humans read the interface. AI operates the structure. BRIK-64 preserves
              legibility for developers while shifting the deeper substrate of computation
              toward explicit structure, validation and compositional logic.
            </p>

            <div className="mt-10 max-w-xl space-y-4 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">The old model:</strong>{" "}
                Write code. Interpret syntax. Test after the fact. Trust discipline.
              </p>
              <p>
                <strong className="text-teal">The BRIK-64 model:</strong>{" "}
                Compose atomic operations. Preserve structural coherence. Validate within
                the pipeline. Deploy with certifiable guarantees.
              </p>
            </div>

            <p className="text-foreground mt-10 max-w-xl text-sm font-medium leading-relaxed">
              BRIK-64 is not adding another layer on top of code. It is changing the substrate.
              The next programming paradigm is not about better syntax. It is about certifiable
              function, compositional rigor and a computational model that intelligence itself
              can operate.
            </p>
          </section>

          {/* ━━━ CTA ━━━ */}
          <section className="border-border border-t px-6 py-20 text-center md:py-28 lg:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
              The next programming model{" "}
              <span className="text-teal">starts here.</span>
            </h2>

            <p className="text-muted-foreground mx-auto mt-5 max-w-lg text-base leading-relaxed">
              Explore the architecture, study the primitives and see how BRIK-64 turns
              software into certifiable digital circuitry.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://docs.brik64.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
              >
                Start with BRIK-64
              </a>
              <a
                href="https://digitalcircuitality.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
              >
                Learn Digital Circuitality <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Resources */}
            <div className="mx-auto mt-14 flex flex-wrap justify-center gap-8">
              <a
                href="https://docs.brik64.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/60 hover:text-foreground text-xs transition-colors"
              >
                docs.brik64.dev
              </a>
              <a
                href="https://github.com/brik64"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/60 hover:text-foreground text-xs transition-colors"
              >
                github.com/brik64
              </a>
              <a
                href="https://discord.gg/brik64"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/60 hover:text-foreground text-xs transition-colors"
              >
                discord.gg/brik64
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
