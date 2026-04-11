"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { EvidenceSurface } from "@/components/PageArtifacts";
import {
  ArrowRight,
  Terminal,
  BookOpen,
} from "lucide-react";

import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

/* ── Languages ── */

const inputLangs = ["JavaScript", "TypeScript", "Python", "Rust", "C", "C++", "Go", "COBOL", "PHP", "Java"];
const outputLangs = ["Rust", "JavaScript", "TypeScript", "Python", "C", "C++", "Go", "COBOL", "PHP", "Java", "Swift", "WebAssembly", "BIR", "Native"];

/* ── Pipeline ── */

const pipelineSteps = [
  { label: "SCAN", desc: "Find all source files in the input directory" },
  { label: "LIFT", desc: "Convert each file to PCD blueprints" },
  { label: "CHECK", desc: "Certify each PCD with the TCE (\u03a6_c verification)" },
  { label: "BUILD", desc: "Generate target language code" },
  { label: "REPORT", desc: "Print migration summary with certification stats" },
];

/* ── vs LLVM ── */

const comparison = [
  { feature: "Intermediate representation", llvm: "LLVM IR (low-level SSA)", brik: "PCD (semantic circuit description)" },
  { feature: "Verification", llvm: "None (trust the optimizer)", brik: "\u03a6_c = 1 certification per circuit" },
  { feature: "Input languages", llvm: "3 major (C, C++, Rust)", brik: "Multiple (JS, TS, Python, Rust, C, C++, Go, COBOL, and more)" },
  { feature: "Output targets", llvm: "Machine code only", brik: "Multiple high-level languages + native + WASM" },
  { feature: "Approach", llvm: "N \u00d7 M (frontend \u00d7 backend)", brik: "N + M (frontend + backend via PCD)" },
  { feature: "Proof of correctness", llvm: "No", brik: "Yes \u2014 cryptographic certificate" },
];

export default function TranspilerPage() {
  const [hoveredInput, setHoveredInput] = useState<number | null>(null);
  const [hoveredOutput, setHoveredOutput] = useState<number | null>(null);

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
              Universal Transpiler
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Any language in. <span className="text-teal">Any language out. Certified.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              10 input languages. 14 output targets. Each route passes through a bounded intermediate
              blueprint so equivalence is reviewed at the normalized circuit level before emission.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
              N frontends + M backends = <span className="font-bold text-teal">N&times;M transpilation paths</span> with N+M effort instead of N&times;M.
            </p>
          </div>
        </section>

        {/* Visual Matrix */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] LANGUAGE MATRIX
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            Every input &rarr; any output
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Inputs and outputs do not connect directly. Every route passes through the same bounded semantic hub.
          </p>

          <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-[1.9rem] border border-teal/15 bg-gradient-to-br from-teal/[0.05] via-background to-background p-5 shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
            <div className="grid gap-3 border-b border-border/70 pb-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-border/70 bg-background/90 px-4 py-4 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Inputs</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-teal">10</p>
                <p className="mt-1 text-xs text-muted-foreground">Source frontends</p>
              </div>
              <div className="rounded-2xl border border-teal/20 bg-teal/[0.06] px-4 py-4 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-teal/80">Semantic hub</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-teal">PCD</p>
                <p className="mt-1 text-xs text-muted-foreground">Verified intermediate substrate</p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-background/90 px-4 py-4 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Outputs</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-teal">14</p>
                <p className="mt-1 text-xs text-muted-foreground">Backends from one bounded blueprint</p>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto">
              <div className="min-w-[700px]">
                <div className="flex gap-1">
                  <div className="w-24 shrink-0" />
                  {outputLangs.map((lang, i) => (
                    <div
                      key={lang}
                      onMouseEnter={() => setHoveredOutput(i)}
                      onMouseLeave={() => setHoveredOutput(null)}
                      className={`flex-1 rounded-full px-1 py-1 text-center text-[9px] font-medium tracking-wider transition-colors ${
                        hoveredOutput === i ? "text-teal" : "text-muted-foreground"
                      }`}
                    >
                      {lang.slice(0, 4)}
                    </div>
                  ))}
                </div>
                {inputLangs.map((lang, ri) => (
                  <div
                    key={lang}
                    className="mt-1 flex gap-1"
                    onMouseEnter={() => setHoveredInput(ri)}
                    onMouseLeave={() => setHoveredInput(null)}
                  >
                    <div
                      className={`w-24 shrink-0 pr-2 text-right text-[10px] font-medium transition-colors ${
                        hoveredInput === ri ? "text-teal" : "text-muted-foreground"
                      }`}
                    >
                      {lang}
                    </div>
                    {outputLangs.map((_, ci) => (
                      <div
                        key={ci}
                        className={`flex-1 h-5 rounded-sm border transition-colors ${
                          hoveredInput === ri || hoveredOutput === ci
                            ? "border-teal/40 bg-teal/20"
                            : "border-border/50 bg-teal/[0.06]"
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-5 text-center text-xs text-muted-foreground">
              Every input-output combination is a transpilation path through the same normalized hub.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] HOW IT WORKS
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            Source &rarr; PCD &rarr; Target
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            PCD captures normalized computation &mdash; not syntax, idioms, or runtime quirks.
            Equivalence evidence is attached to the blueprint stage and reviewed before output emission.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">Domain preservation:</span> input constraints carry through from source to PCD to target &mdash; bounds verified at every stage.
          </p>

          {/* Pipeline visualization */}
          <div className="mx-auto mt-10 max-w-5xl rounded-[1.9rem] border border-border/80 bg-gradient-to-br from-muted/35 via-background to-background p-5 shadow-[0_24px_70px_rgba(15,23,42,0.05)]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2">
              {pipelineSteps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-2 sm:flex-1">
                  <div className="border border-border bg-muted/20 p-4 sm:w-full">
                    <p className="text-xs font-bold tracking-wider text-teal">{step.label}</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{step.desc}</p>
                  </div>
                  {i < pipelineSteps.length - 1 && (
                    <ArrowRight className="hidden h-4 w-4 shrink-0 text-muted-foreground sm:block" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-teal/15 bg-teal/[0.05] px-4 py-4 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-teal/80">Proof boundary</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Syntax disappears inside the hub. Computation and its certificate do not.
              </p>
            </div>
          </div>
        </section>

        {/* Translation Validation */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [03] TRANSLATION VALIDATION
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            Not just conversion. Bounded equivalence review.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            These three views separate what the transpiler preserves, what changes in the target, and what remains outside the bounded scope.
          </p>
          <div className="mx-auto mt-8 max-w-5xl rounded-[1.9rem] border border-border/80 bg-gradient-to-br from-muted/30 via-background to-background p-5 shadow-[0_24px_70px_rgba(15,23,42,0.05)]">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-border/80 bg-background/90 p-6 text-center">
                <h3 className="text-sm font-medium text-foreground">Traditional transpilers</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                One-to-one: TypeScript &rarr; JavaScript. CoffeeScript &rarr; JS. Sass &rarr; CSS.
                Each is purpose-built for a single language pair. Output behavior is validated downstream by tests and review.
                </p>
              </div>
              <div className="rounded-2xl border border-teal/25 bg-teal/[0.06] p-6 text-center shadow-[0_18px_50px_rgba(13,148,136,0.08)]">
                <h3 className="text-sm font-medium text-teal">BRIK64 transpiler</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                N-to-N through one bounded intermediate representation. Every output carries
                equivalence evidence tied to the normalized source computation.
                </p>
              </div>
              <div className="rounded-2xl border border-border/80 bg-background/90 p-6 text-center">
                <h3 className="text-sm font-medium text-foreground">Claim boundary</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                <PhiC /> = 1 on the normalized bounded circuit. Equivalence language is scoped to the extracted computation,
                while unmanaged host APIs and side effects remain outside this boundary.
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-teal/15 bg-teal/[0.05] px-4 py-4 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-teal/80">Formal reading</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The certified hub preserves computation. The target changes syntax. Deployment-specific behavior remains outside this verification boundary.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <EvidenceSurface
              eyebrow="Translation Evidence"
              title="The universal translator stays honest about its proof boundary."
              description="Transpilation is about preserving computation, not pretending source syntax and target syntax are the same thing."
              items={[
                { label: "Source semantics", body: "The PCD hub preserves the computational meaning of the input." },
                { label: "Target syntax", body: "The target language changes, but the equivalence certificate remains attached." },
                { label: "Scope", body: "The page explains algebraic equivalence and does not claim that every downstream deployment detail is automatically certified." },
              ]}
            />
          </div>
        </section>

        {/* Demo */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [04] DEMO
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            A migration run with explicit evidence attached
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            A migration run should end in a reviewable build record, not just a converted output folder.
          </p>
          <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-full border border-border bg-background px-3 py-1">5 source files</span>
            <span className="rounded-full border border-border bg-background px-3 py-1">5 certified circuits</span>
            <span className="rounded-full border border-teal/20 bg-teal/[0.06] px-3 py-1 text-teal">sample run: all files migrated</span>
          </div>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-white/30 font-mono">brikc transpile</span>
            </div>
            <div className="space-y-1 p-5">
              <div className="font-mono text-sm text-white/70">
                <span className="text-teal">$</span> brikc transpile ./cobol-banking/ --to go --output ./modern-go/
              </div>
              <div className="h-2" />
              <div className="font-mono text-sm text-zinc-400">&nbsp; &#9889; BRIK64 TRANSPILE: ./cobol-banking/ &rarr; go</div>
              <div className="h-2" />
              <div className="font-mono text-sm text-zinc-400">&nbsp; &rarr; Step 1: SCAN &mdash; finding source files...</div>
              <div className="font-mono text-sm text-emerald-400">&nbsp; &nbsp; &#10003; Found 5 source files</div>
              <div className="h-1" />
              <div className="font-mono text-sm text-zinc-400">&nbsp; &rarr; Step 2: LIFT &mdash; converting to PCD...</div>
              <div className="font-mono text-sm text-emerald-400">&nbsp; &nbsp; &#10003; interest.cob &mdash; 1 circuit</div>
              <div className="font-mono text-sm text-emerald-400">&nbsp; &nbsp; &#10003; tax.cob &mdash; 1 circuit</div>
              <div className="font-mono text-sm text-emerald-400">&nbsp; &nbsp; &#10003; loan.cob &mdash; 1 circuit</div>
              <div className="h-1" />
              <div className="font-mono text-sm text-zinc-400">&nbsp; &rarr; Step 3: CHECK &mdash; certifying PCDs...</div>
              <div className="font-mono text-sm text-emerald-400">&nbsp; &nbsp; &#10003; All circuits: <PhiC /> = 1</div>
              <div className="h-1" />
              <div className="font-mono text-sm text-zinc-400">&nbsp; &rarr; Step 4: BUILD &mdash; generating go output...</div>
              <div className="font-mono text-sm text-emerald-400">&nbsp; &nbsp; &#10003; 5 files transpiled in this run</div>
              <div className="h-2" />
              <div className="font-mono text-sm font-bold text-emerald-400">
                &nbsp; Files: 5 scanned, 5 transpiled | Functions: 5 certified in this sample
              </div>
            </div>
          </div>
        </section>

        {/* vs LLVM */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [05] COMPARISON
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            BRIK64 vs LLVM
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-center text-xs leading-relaxed italic">
            PCD and LLVM IR serve different purposes. LLVM optimizes machine code generation; PCD preserves semantic structure for cross-language transpilation.
          </p>
          <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-[1.75rem] border border-border/80 bg-background shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <div className="grid grid-cols-3 gap-0 border-b border-border bg-muted/30 px-4 py-2.5 text-xs font-medium text-muted-foreground">
              <div>Feature</div>
              <div>LLVM</div>
              <div>BRIK64</div>
            </div>
            {comparison.map((row) => (
              <div key={row.feature} className="grid grid-cols-3 gap-0 border-b border-border px-4 py-3 last:border-b-0">
                <div className="text-xs font-medium">{row.feature}</div>
                <div className="text-xs text-muted-foreground">{row.llvm}</div>
                <div className="text-xs text-teal">{row.brik}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            Start with the bounded migration loop
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            Not a 1-to-1 transpiler: an N-to-N migration workflow anchored in bounded blueprints and explicit review boundaries.
            COBOL &rarr; Go. Python &rarr; Rust. Same normalized core, different emitted targets.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/cli"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              <Terminal className="h-4 w-4" /> Try brikc transpile
            </a>
            <a
              href="https://docs.brik64.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              Read the docs <BookOpen className="h-3.5 w-3.5" />
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
