import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { ArrowRight, ExternalLink } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";

export const metadata = {
  title: "About — BRIK64",
  description:
    "BRIK64 is the first programming language designed for AI. 128 verified operations. One composition algebra. A compiler that proves correctness. Built on information theory, validated by Texas A&M. Free. Ready today.",
};

const sections = [
  {
    tag: "01",
    title: "The Problem We Are Solving",
    content:
      "For sixty years, we have written programs as human-readable text and hoped they would work. That approach built an industry. It also built a permanent gap between what code says and what code does. Testing happens after the fact — if it happens at all. Reviews are manual, subjective, and incomplete. And now AI generates more code than every human developer combined. Not a single line carries a mathematical proof of correctness. The AI guesses. The human rubber-stamps. Nobody is sure. That does not scale. That was never going to scale.",
  },
  {
    tag: "02",
    title: "The Idea",
    content:
      "Software should work like hardware. A circuit either closes or it does not. There is no 'mostly correct.' A 747 does not have unit tests for its wiring — its circuits are designed so that dangerous states are physically impossible. We applied that same principle to software. We call it Digital Circuitality. 128 verified atomic operations — monomers — composed through three algebraic laws. A formal description language that reads like a schematic. And a compiler that does not check your code. It proves it correct. Φ_c = 1. The circuit is closed. Or it does not compile.",
  },
  {
    tag: "03",
    title: "The Science",
    content:
      "BRIK64 is grounded in Shannon information theory — the mathematics of deterministic systems — validated by Prof. Laszlo B. Kish at Texas A&M University. When a system's informational entropy reaches zero, every state is known, every path is determined, every output is certain. That is what Φ_c = 1 means in our framework. Not a score. Not a confidence level. A binary mathematical fact: the circuit is closed or it is not. 207 Coq proofs. All 10 historical admits resolved. The foundation is not theoretical. It is machine-checked.",
  },
  {
    tag: "04",
    title: "What We Built",
    content:
      "PCD: a formal programming language where incorrect programs cannot compile. 128 monomers — 64 mathematically certified core operations, 64 extended operations for the real world. EVA algebra: three composition laws (sequential, parallel, conditional) that govern how circuits combine. A Lifter that reads 10 existing languages and converts them to certified PCD. 14 compilation targets: Rust, JavaScript, Python, C, C++, Go, Swift, TypeScript, WASM, native x86-64, and more. A self-compiling fixpoint — the compiler compiles its own source and produces a byte-identical binary. Same SHA-256 hash. Every single time. No other compiler on earth does this.",
  },
  {
    tag: "05",
    title: "AI Native by Design",
    content:
      "PCD has 128 operations. That is it. An LLM memorizes the entire language in a single context window. The AI writes PCD. The compiler verifies it. If Φ_c ≠ 1, the error message becomes the next prompt. The AI fixes it. Loop until certified. This works with any LLM — Claude, GPT-4, Gemini, Llama — because the verification is external to the model. The model does not need to be trustworthy. The compiler is. We built the language of AI-generated software before anyone realized that was what the world needed.",
  },
  {
    tag: "06",
    title: "Free. Ready Today.",
    content:
      "The CLI is free. The compiler is free. The monomer catalog is free. Install brikc, certify your first function, and ship code you never have to debug again. We believe verified software should not be a luxury reserved for aerospace programs and medical devices with $100M certification budgets. It should be the default. For every developer. For every AI agent. Starting today.",
  },
];

const facts = [
  { value: "128", label: "Certified Operations" },
  { value: "14", label: "Compilation Targets" },
  { value: "10", label: "Input Languages" },
  { value: "207", label: "Coq Proofs" },
  { value: "110K+", label: "Generated Tests" },
  { value: "0", label: "Coq Admits" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">

          {/* ── Hero ── */}
          <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white relative overflow-hidden">
            <HeroWireframeClient />
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
              <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
                Company
              </span>
              <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                We built the language{" "}
                <span className="text-[#00b8d4]">where incorrect programs cannot compile.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                BRIK64 is the first programming language designed for AI. Not designed to work with AI.
                Designed for it. 128 certified operations. One composition algebra. A compiler that proves
                every program is correct. <PhiC /> = 1 — the circuit is closed. Free. Ready today.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <a
                  href="/foundations"
                  className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
                >
                  Read the science <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://docs.brik64.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
                >
                  Documentation <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          {/* ── Facts ── */}
          <section className="bg-background border-b border-border px-6 py-12 lg:px-16">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {facts.map((f) => (
                <div key={f.label} className="border border-border bg-muted/20 p-4 text-center">
                  <div className="text-2xl font-bold text-[#00b8d4]">{f.value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{f.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Story Sections ── */}
          {sections.map((s) => (
            <section
              key={s.tag}
              className="bg-background border-b border-border px-6 py-16 lg:px-16"
            >
              <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-[#00b8d4]">
                [{s.tag}] {s.title.toUpperCase()}
              </p>
              <h2 className="mx-auto text-center max-w-3xl text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {s.title}
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
                {s.content}
              </p>
            </section>
          ))}

          {/* ── CTA ── */}
          <section className="bg-background px-6 py-24 text-center lg:px-16">
            <h2 className="mx-auto text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Start building &mdash; free
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Install the CLI. Certify your first function. Read the science behind it.
              The future of verified software is already here.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/foundations"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
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
