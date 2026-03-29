"use client";

import { useState } from "react";
import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import {
  FileCode,
  ArrowRight,
  Shield,
  Layers,
  Terminal,
  BookOpen,
  Zap,
  Code,
} from "lucide-react";

/* ── Monomer families ── */

const coreFamilies = [
  { family: "Arithmetic", ops: "8 operations for integer math", proof: "Coq" },
  { family: "Logic", ops: "8 operations for bitwise logic", proof: "Coq" },
  { family: "Memory", ops: "8 operations for memory management", proof: "Coq" },
  { family: "Control", ops: "8 operations for control flow", proof: "Coq" },
  { family: "I/O", ops: "8 operations for input/output", proof: "Coq" },
  { family: "String", ops: "8 operations for string processing", proof: "Coq" },
  { family: "Crypto", ops: "8 operations for cryptography", proof: "Coq" },
  { family: "System", ops: "8 operations for system calls", proof: "Coq" },
];

const extendedFamilies = [
  { family: "Float64", ops: "8 operations for floating-point math" },
  { family: "Math", ops: "8 operations for transcendental functions" },
  { family: "Network", ops: "8 operations for networking" },
  { family: "Graphics", ops: "8 operations for graphics buffers" },
  { family: "Audio", ops: "8 operations for audio processing" },
  { family: "Filesystem", ops: "8 operations for filesystem access" },
  { family: "Concurrency", ops: "8 operations for parallel execution" },
  { family: "Interop", ops: "8 operations for foreign function interface" },
];

/* ── Code examples ── */

const codeExamples = [
  {
    label: "Hello World",
    code: `PC hello {
    let msg = "Hello, verified world!";
    let n = LEN(msg);
    WRITE(1, msg, n);
    OUTPUT 0;
}`,
  },
  {
    label: "Fibonacci",
    code: `PC fibonacci {
    fn fib(n) {
        if (n <= 1) {
            return n;
        }
        return fib(n - 1) + fib(n - 2);
    }

    let result = fib(10);
    OUTPUT result;
}`,
  },
  {
    label: "Data Pipeline",
    code: `PC data_pipeline {
    let raw = READ(0);
    let trimmed = TRIM(raw);
    let upper = UPPER(trimmed);
    let hash = HASH(upper);
    WRITE(1, hash, LEN(hash));
    OUTPUT 0;
}`,
  },
  {
    label: "Interest Calc",
    code: `PC calculate_interest {
    let principal = 0;
    let rate = 0;
    let years = 0;
    let interest = principal * rate / 100;
    let total = principal + (interest * years);
    OUTPUT total;
}`,
  },
];

/* ── EVA operators ── */

const evaOps = [
  { symbol: "SEQ", name: "Sequential", desc: "Do A then B: output of A feeds into B. Pipeline composition." },
  { symbol: "PAR", name: "Parallel", desc: "Do A and B independently on the same input. Results as tuple." },
  { symbol: "COND", name: "Conditional", desc: "If predicate P holds, do A; otherwise do B. Both branches verified." },
];

/* ── Key properties ── */

const keyProps = [
  { icon: <FileCode className="h-5 w-5 text-teal" />, title: "A structural logic language", desc: "PCD describes what your program computes, not how. Like a circuit schematic — structural, verifiable, language-agnostic." },
  { icon: <Shield className="h-5 w-5 text-teal" />, title: "Verified operations", desc: "Every PCD program is built from formally verified operations. Core proven in Coq, plus contract-based extended set." },
  { icon: <Zap className="h-5 w-5 text-teal" />, title: "Verified by design", desc: "If the blueprint doesn\u2019t close as a circuit (\u03a6_c \u2260 1), it simply won\u2019t compile. The math is the guarantee." },
  { icon: <Layers className="h-5 w-5 text-teal" />, title: "Multi-target", desc: "Compile to Rust, JavaScript, Python, C, C++, Go, COBOL, and more." },
  { icon: <Code className="h-5 w-5 text-teal" />, title: "Self-compiling", desc: "The brikc compiler compiles itself producing an identical hash. The fixpoint is the proof." },
  { icon: <Terminal className="h-5 w-5 text-teal" />, title: "Designed for AI", desc: "128 total operations. An LLM can learn the entire language. Generate certified PCD in seconds." },
];

export default function PCDPage() {
  const [activeExample, setActiveExample] = useState(0);

  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* Hero */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              PCD &mdash; Printed Circuit Description
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The blueprint standard <span className="text-[#00b8d4]">for software.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              PCD is a Turing-complete language where programs are circuit schematics. Every valid PCD program has
              Thermodynamic Coherence <PhiC /> = 1: no dead branches, no unreachable code, no undefined flows.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm italic text-muted-foreground">
              &ldquo;PCD is to code what architectural blueprints are to buildings.
              You describe once. You build in any material.&rdquo;
            </p>
          </div>
        </section>

        {/* Key properties */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] NOT A LANGUAGE &mdash; A FORMAT
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {keyProps.map((kp) => (
              <div key={kp.title} className="group border border-border bg-muted/20 p-6 transition-colors hover:border-teal/30 hover:bg-teal/[0.03]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05]">
                  {kp.icon}
                </div>
                <p className="text-sm font-medium">{kp.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{kp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Syntax overview */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] SYNTAX
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Circuit schematics, not source code
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            Every PCD program is a named circuit block. The OUTPUT directive marks the final value emitted.
            Variables are immutable (SSA form). Functions, closures, loops, and conditionals are all supported.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Syntax snippets */}
            <div className="space-y-4">
              <CopyableCode title="Program Structure">{`PC circuit_name {
    // functions and logic here
    OUTPUT result;
}`}</CopyableCode>
              <CopyableCode title="Variables & Functions">{`let x = 42;           // immutable
let name = "hello";    // string
let flag = true;       // boolean

fn add(a, b) {
    return a + b;
}

fn factorial(n) {
    if (n <= 1) { return 1; }
    return n * factorial(n - 1);
}`}</CopyableCode>
              <CopyableCode title="Loops & Closures">{`// Loop with carried variable
let count = 0;
loop(10) as i {
    let count = count + 1;
}

// Closure
let double = fn(n) { n * 2 };
let result = double(5);   // 10`}</CopyableCode>
            </div>

            {/* Code examples with tabs */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex flex-wrap border-b border-white/10">
                {codeExamples.map((ex, i) => (
                  <button
                    key={ex.label}
                    onClick={() => setActiveExample(i)}
                    className={`cursor-pointer px-3 py-2.5 text-[11px] font-medium transition-colors ${
                      activeExample === i
                        ? "border-b-2 border-teal text-teal"
                        : "text-white/40 hover:text-white/60"
                    }`}
                  >
                    {ex.label}
                  </button>
                ))}
              </div>
              <div className="p-5">
                <pre className="overflow-x-auto text-xs leading-relaxed text-gray-300">
                  <code>{codeExamples[activeExample].code}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Closure Domains */}
        <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
          <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
            Closure Domains
          </span>
          <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Types tell you <em>what</em>. Domains tell you <em>where</em>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
            Every input in PCD lives inside a declared domain — a numeric range enforced by
            the compiler. Without domains, a circuit cannot close. With domains, the compiler
            can prove that every input path produces a valid output.
          </p>

          <div className="mx-auto mt-10 max-w-3xl">
            <CopyableCode title="Domain Syntax">{`input speed    : Float64[0.0 .. 340.0]   // knots — bounded to flight envelope
input altitude : Float64[0.0 .. 51000.0] // feet — bounded to service ceiling
input time     : Float64[1.0 .. 86400.0] // seconds — never zero`}</CopyableCode>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { title: "No division by zero", desc: "Lower bounds exclude zero when needed." },
              { title: "No overflow", desc: "Bounded inputs produce bounded outputs." },
              { title: "No NaN or Infinity", desc: "Float64 ranges exclude degenerate values." },
              { title: "Deterministic behavior", desc: "Same inputs, same outputs, every time." },
            ].map((card) => (
              <div key={card.title} className="border border-border bg-muted/20 p-6 transition-colors hover:border-teal/30 hover:bg-teal/[0.03]">
                <p className="text-sm font-bold text-foreground">{card.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
            Deep dive:{" "}
            <a href="/blog/precision-as-domain" className="font-medium text-teal underline underline-offset-2 hover:text-teal-hover">
              Why Your Calculator Is Lying to You
            </a>
          </p>
        </section>

        {/* 128 Monomers */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [03] 128 MONOMERS
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            The complete operation catalog
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            64 formally verified atomic operations (Core, Coq-proven) + 64 bounds-checked extended operations (CONTRACT).
            Every monomer has a declared domain, range, postconditions, and termination guarantee.
          </p>

          {/* Core monomers */}
          <h3 className="mt-8 text-sm font-bold">
            Core Monomers &mdash; 64 operations{" "}
            <span className="ml-2 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
              <PhiC /> = 1
            </span>
          </h3>
          <div className="mt-4 overflow-hidden border border-border">
            {coreFamilies.map((f) => (
              <div key={f.family} className="grid grid-cols-[100px_1fr_60px] items-center gap-0 border-b border-border px-4 py-2.5 last:border-b-0">
                <span className="text-xs font-medium">{f.family}</span>
                <span className="text-xs text-muted-foreground">{f.ops}</span>
                <span className="text-right text-[10px] font-bold text-emerald-400">{f.proof}</span>
              </div>
            ))}
          </div>

          {/* Extended monomers */}
          <h3 className="mt-8 text-sm font-bold">
            Extended Monomers &mdash; 64 operations{" "}
            <span className="ml-2 rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-400">
              CONTRACT
            </span>
          </h3>
          <div className="mt-4 overflow-hidden border border-border">
            {extendedFamilies.map((f) => (
              <div key={f.family} className="grid grid-cols-[100px_1fr] items-center gap-0 border-b border-border px-4 py-2.5 last:border-b-0">
                <span className="text-xs font-medium">{f.family}</span>
                <span className="text-xs text-muted-foreground">{f.ops}</span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs italic text-muted-foreground">
            Core monomers remain formally verified regardless of what Extended monomers surround them.
            The compiler enforces the boundary statically.
          </p>
        </section>

        {/* EVA Composition */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [04] EVA ALGEBRA
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Three operators. Correctness preserved.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {evaOps.map((op) => (
              <div key={op.name} className="border border-border bg-muted/20 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05] text-xl font-bold text-teal">
                  {op.symbol}
                </div>
                <p className="text-sm font-bold">{op.name}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{op.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Correctness preserved by composition. Proven in Coq. <PhiC /> = 1 for the entire composition if all
            constituent monomers are Core.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            One blueprint. Any material.
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            PCD describes WHAT your program computes &mdash; not HOW. Language-agnostic. Mathematically verifiable.
            Compiles to any target.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://docs.brik64.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              <BookOpen className="h-4 w-4" /> Full PCD Reference
            </a>
            <a
              href="/cli"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              Install the CLI <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
