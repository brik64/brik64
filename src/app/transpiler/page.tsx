"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import {
  ArrowRight,
  Terminal,
  FileCode,
  Shield,
  Zap,
  GitBranch,
  Layers,
  Check,
  X,
  BookOpen,
} from "lucide-react";

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
  { feature: "Input languages", llvm: "3 major (C, C++, Rust)", brik: "10 (JS, TS, Python, Rust, C, C++, Go, COBOL, PHP, Java)" },
  { feature: "Output targets", llvm: "Machine code only", brik: "14 high-level languages + native + WASM" },
  { feature: "Approach", llvm: "N \u00d7 M (frontend \u00d7 backend)", brik: "N + M (frontend + backend via PCD)" },
  { feature: "Proof of correctness", llvm: "No", brik: "Yes \u2014 cryptographic certificate" },
];

export default function TranspilerPage() {
  const [hoveredInput, setHoveredInput] = useState<number | null>(null);
  const [hoveredOutput, setHoveredOutput] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="border-border mx-auto max-w-7xl border-x px-6 pt-20 pb-16 md:px-12 lg:px-18">
          <span className="text-muted-foreground mb-5 inline-block rounded-full border border-border bg-background/80 px-3.5 py-1 text-xs font-medium tracking-wide">
            Universal Transpiler
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            140 certified paths <span className="text-teal">between languages.</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
            The first N-to-N transpiler. Any of 10 input languages &rarr; PCD &rarr; any of 14 output targets,
            with mathematical certification (<PhiC /> = 1) that the output is equivalent to the input.
          </p>
          <p className="text-muted-foreground mt-3 text-sm">
            10 frontends + 14 backends = <span className="font-bold text-teal">140 transpilation paths</span> with N+M effort instead of N&times;M.
          </p>
        </section>

        {/* Visual Matrix */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] LANGUAGE MATRIX
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Every input &rarr; any output
          </h2>

          <div className="mt-8 overflow-x-auto">
            <div className="min-w-[700px]">
              {/* Header row */}
              <div className="flex gap-1">
                <div className="w-24 shrink-0" />
                {outputLangs.map((lang, i) => (
                  <div
                    key={lang}
                    onMouseEnter={() => setHoveredOutput(i)}
                    onMouseLeave={() => setHoveredOutput(null)}
                    className={`flex-1 text-center text-[9px] font-medium tracking-wider transition-colors ${
                      hoveredOutput === i ? "text-teal" : "text-muted-foreground"
                    }`}
                  >
                    {lang.slice(0, 4)}
                  </div>
                ))}
              </div>
              {/* Grid rows */}
              {inputLangs.map((lang, ri) => (
                <div
                  key={lang}
                  className="flex gap-1 mt-1"
                  onMouseEnter={() => setHoveredInput(ri)}
                  onMouseLeave={() => setHoveredInput(null)}
                >
                  <div className={`w-24 shrink-0 text-right pr-2 text-[10px] font-medium transition-colors ${
                    hoveredInput === ri ? "text-teal" : "text-muted-foreground"
                  }`}>
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
          <p className="mt-4 text-center text-xs text-muted-foreground">
            10 &times; 14 = 140 verified transpilation paths. Hover to highlight.
          </p>
        </section>

        {/* How it works */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] HOW IT WORKS
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Source &rarr; PCD &rarr; Target
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-relaxed">
            PCD captures the mathematical essence of computation &mdash; not syntax, not idioms, not runtime quirks.
            The equivalence proof travels with the output.
          </p>

          {/* Pipeline visualization */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2">
            {pipelineSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2 sm:flex-1">
                <div className="rounded-lg border border-border bg-muted/20 p-4 sm:w-full">
                  <p className="text-xs font-bold tracking-wider text-teal">{step.label}</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
                {i < pipelineSteps.length - 1 && (
                  <ArrowRight className="hidden h-4 w-4 shrink-0 text-muted-foreground sm:block" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Translation Validation */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [03] TRANSLATION VALIDATION
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Not just conversion. Certification.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-muted/20 p-6">
              <h3 className="text-sm font-medium">Traditional transpilers</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                One-to-one: TypeScript &rarr; JavaScript. CoffeeScript &rarr; JS. Sass &rarr; CSS.
                Each is purpose-built for a single language pair. No proof that the output is correct.
              </p>
            </div>
            <div className="rounded-lg border border-teal/30 bg-teal/[0.03] p-6">
              <h3 className="text-sm font-medium text-teal">BRIK-64 transpiler</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                N-to-N through one verified intermediate representation. Every output carries a
                cryptographic certificate proving equivalence to the source.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-muted/20 p-6">
              <h3 className="text-sm font-medium">The guarantee</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                <PhiC /> = 1 on both sides. The source and target are mathematically equivalent &mdash;
                the computation is identical, only the syntax changes.
              </p>
            </div>
          </div>
        </section>

        {/* Demo */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [04] DEMO
          </p>
          <div className="max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
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
              <div className="font-mono text-sm text-zinc-400">&nbsp; &#9889; BRIK-64 TRANSPILE: ./cobol-banking/ &rarr; go</div>
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
              <div className="font-mono text-sm text-emerald-400">&nbsp; &nbsp; &#10003; 5 files transpiled (100%)</div>
              <div className="h-2" />
              <div className="font-mono text-sm font-bold text-emerald-400">
                &nbsp; Files: 5 scanned, 5 transpiled | Functions: 5 certified (100%)
              </div>
            </div>
          </div>
        </section>

        {/* vs LLVM */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [05] COMPARISON
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            BRIK-64 vs LLVM
          </h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            <div className="grid grid-cols-3 gap-0 border-b border-border bg-muted/30 px-4 py-2.5 text-xs font-medium text-muted-foreground">
              <div>Feature</div>
              <div>LLVM</div>
              <div>BRIK-64</div>
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
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Convert any codebase. Certified.
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            Not a 1-to-1 transpiler. An N-to-N certified migration engine.
            COBOL banking systems &rarr; Go microservices. With mathematical proof of equivalence.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/cli"
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
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
      </main>
      <Footer />
    </>
  );
}
