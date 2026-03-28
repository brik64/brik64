import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Formal Verification: Coq-Level Proofs Without a PhD — BRIK-64",
  description:
    "207 Coq proofs for all 64 core monomers. No Coq/Lean expertise needed. If it compiles, it's proven.",
};

const painPoints = [
  {
    title: "Formal verification requires years of expertise",
    desc: "Coq, Lean, Isabelle — tools that produce mathematical proofs of software correctness. Learning curve: 2-5 years. Number of developers who can use them: a few thousand worldwide.",
  },
  {
    title: "Only used in aerospace and nuclear",
    desc: "The cost of formal verification is so high that only life-critical industries can justify it. Your banking app, your healthcare system, your trading platform? Unverified. 'Tests pass' is the best you get.",
  },
  {
    title: '"Testing shows presence of bugs, never absence"',
    desc: "Dijkstra said it in 1969. It's still true. No amount of testing can prove your code is correct. Tests only prove it works for the cases you thought of. The bugs hide in the cases you didn't.",
  },
];

const steps = [
  {
    step: "01",
    title: "Write PCD — that's it",
    desc: "You write your program in PCD. No proof annotations, no tactics, no lemmas. Just the program logic with domain constraints.",
  },
  {
    step: "02",
    title: "The compiler generates the proof",
    desc: "brikc automatically generates Coq-level proofs during compilation. The 64 core monomers already have 207 verified Coq proofs. Your program composes them.",
  },
  {
    step: "03",
    title: "Circuit closure = correctness",
    desc: "If all domains are bounded, all paths terminate, and all constraints hold, then \u03A6_c = 1. The circuit is closed. The program is correct. Mathematically.",
  },
  {
    step: "04",
    title: "Certificate included",
    desc: "Every compilation produces a verifiable certificate. Third parties can independently verify your code's correctness without reading the source.",
  },
];

const results = [
  {
    title: "207 Coq proofs — you get them for free",
    desc: "The 64 core monomers of BRIK-64 have been formally verified with 207 Coq proofs. When you compose circuits from monomers, the proofs compose too.",
  },
  {
    title: "No Coq/Lean expertise needed",
    desc: "You never see a proof assistant. You never write a tactic. The compiler does all the formal verification work. You write code, you get proofs.",
  },
  {
    title: "If it compiles, it's proven",
    desc: "The compilation process IS the verification process. There's no separate verification step. If brikc compiles your PCD without error, your code is formally verified.",
  },
];

export default function FormalVerificationUseCasePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="border-b border-border bg-gradient-to-b from-[#f0fdff] to-white">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              Use Case
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Formal Verification:{" "}
              <span className="text-[#00b8d4]">Coq-Level Proofs Without a PhD</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Formal verification used to require years of expertise and millions in budget.
              BRIK-64 packages it inside the compiler. Write code, get proofs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/foundations"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Foundations page <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl border-x border-border">
          {/* ── The Problem ── */}
          <section className="border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              The Problem
            </span>
            <h2 className="text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Formal verification is inaccessible
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item.title} className="border border-border bg-white p-6">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── The Solution ── */}
          <section className="border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              The Solution
            </span>
            <h2 className="text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Verification inside the compiler
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {steps.map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#00b8d4]/10">
                    <span className="text-sm font-bold text-[#00b8d4]">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal example */}
            <div className="mt-10 overflow-hidden border border-border bg-[#0a0e14]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-white/50">terminal</span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-[#e0e0e0]">
                <code>{`$ brikc check calculator.pcd
╔══════════════════════════════════════════════════╗
║  BRIK-64 Certification Report                    ║
╠══════════════════════════════════════════════════╣
║  File:        calculator.pcd                     ║
║  Circuits:    8                                  ║
║  Monomers:    23 (of 64 core)                    ║
║  Domains:     all bounded ✓                      ║
║  Termination: all paths terminate ✓              ║
║  Constraints: all satisfied ✓                    ║
║  Coq proofs:  47 (composed from 207 base)        ║
║                                                  ║
║  Φ_c = 1  ✓  CERTIFIED                          ║
║                                                  ║
║  Certificate: calc_cert_0xd4a1...e8b7.json       ║
╚══════════════════════════════════════════════════╝`}</code>
              </pre>
            </div>
          </section>

          {/* ── Real Example ── */}
          <section className="border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Real Example
            </span>
            <h2 className="text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A certified calculator — every operation proven
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              This PCD program defines a calculator with bounded domains. Every division checks for zero.
              Every overflow is impossible. The compiler proves it.
            </p>
            <div className="mt-8 overflow-hidden border border-border bg-[#0a0e14]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-white/50">calculator.pcd</span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-[#e0e0e0]">
                <code>{`// Certified Calculator — Φ_c = 1
// Every operation proven correct by circuit closure

PC safe_calculator {
    domain operand: Range [-1e15, 1e15];
    domain divisor: Range [-1e15, -1e-10] | Range [1e-10, 1e15];

    fn add(a: operand, b: operand) -> operand {
        return a + b;  // overflow impossible: domain-bounded
    }

    fn divide(a: operand, b: divisor) -> operand {
        return a / b;  // division by zero impossible: domain excludes zero
    }

    fn sqrt(a: Range[0.0, 1e15]) -> Range[0.0, 1e15] {
        return a ^ 0.5;  // negative input impossible: domain-bounded
    }
}`}</code>
              </pre>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
              No runtime checks needed. No error handling for impossible cases. The domain constraints
              make undefined behavior mathematically impossible. <PhiC /> = 1.
            </p>
          </section>

          {/* ── Results ── */}
          <section className="border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Results
            </span>
            <h2 className="text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What you get
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {results.map((item) => (
                <div key={item.title} className="border border-border bg-white p-6">
                  <CheckCircle2 className="mb-3 h-6 w-6 text-[#00b8d4]" />
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="px-6 py-24 text-center lg:px-16">
            <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Write code. Get proofs.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              207 Coq proofs. Zero proof expertise required. If it compiles, it&apos;s proven.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://docs.brik64.dev/verification"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Verification docs <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
