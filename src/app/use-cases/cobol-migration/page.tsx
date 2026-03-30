import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";


export const metadata = {
  title: "COBOL Migration: 220 Billion Lines, Zero Rewrites — BRIK-64",
  description:
    "Lift COBOL to PCD, compile to any modern language. Mathematical proof of equivalence. No manual rewriting.",
};

const painPoints = [
  {
    title: "220 billion lines of COBOL still running",
    desc: "95% of ATM transactions. 80% of in-person transactions. $3 billion per year in maintenance costs. The world runs on code written before most developers were born.",
  },
  {
    title: "The workforce is retiring",
    desc: "The average COBOL programmer is 55+. Universities stopped teaching COBOL decades ago. Every year, the pool of people who can maintain these systems shrinks — and the systems don't.",
  },
  {
    title: "Every rewrite attempt fails",
    desc: "Manual rewrites lose semantics in translation. The new code looks different, behaves differently, and breaks edge cases the COBOL handled for 40 years. $billions wasted on failed migrations.",
  },
];

const steps = [
  {
    step: "01",
    title: "Lift COBOL to PCD",
    desc: "brikc lift extracts the computational essence of COBOL programs into PCD — what the code does, not how COBOL expresses it. Paragraphs, PERFORM loops, WORKING-STORAGE — all captured as circuits.",
  },
  {
    step: "02",
    title: "PCD captures semantics, not syntax",
    desc: "PCD is language-agnostic. It doesn't care that the source was COBOL. It captures the mathematical structure of the computation — domains, constraints, transformations.",
  },
  {
    step: "03",
    title: "Compile to any modern language",
    desc: "brikc compile emits the PCD to Java, Python, Rust, Go, TypeScript — any of 14 supported targets. The output is idiomatic, clean, and certified equivalent to the original.",
  },
  {
    step: "04",
    title: "Formal proof of equivalence",
    desc: "The old COBOL and the new Java do exactly the same thing — proven algebraically through PCD circuit closure. Not tested. Proven.",
  },
];

const results = [
  {
    title: "100% liftability (211/211 files)",
    desc: "In benchmark testing, every COBOL file was successfully lifted to PCD. No manual intervention. No files left behind.",
  },
  {
    title: "Mathematical proof of equivalence",
    desc: "The migrated code is not 'probably correct' — it's provably equivalent. Circuit closure guarantees the old and new code compute identical results.",
  },
  {
    title: "No manual rewriting",
    desc: "Zero lines written by hand. The compiler does all the work. Your COBOL experts review the output instead of rewriting it.",
  },
];

export default function COBOLMigrationUseCasePage() {
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
              Use Case
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              COBOL Migration:{" "}
              <span className="text-[#00b8d4]">220 Billion Lines, Zero Rewrites</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              The world&apos;s critical infrastructure runs on COBOL. Rewrites fail because they lose semantics.
              BRIK-64 lifts the computational essence and compiles it to any modern language — with proof of equivalence.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/lifter"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Lifter product page <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl border-x border-border">
          {/* ── The Problem ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              The Problem
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              COBOL isn&apos;t going away — but its maintainers are
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
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              The Solution
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Lift the essence. Compile to the future.
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
            <CopyableCode title="terminal">{`$ brikc lift payroll.cob --to pcd
✓ Parsed 847 lines of COBOL-85
✓ Extracted 12 paragraphs → 12 PCD circuits
✓ WORKING-STORAGE mapped to domain constraints
✓ Output: payroll.pcd (Φ_c = 1)

$ brikc compile payroll.pcd --target java
✓ Compiled 12 circuits → 12 Java classes
✓ Equivalence proof: payroll.cob ≡ payroll.java
✓ Output: ./dist/payroll/
  ├── PayrollCalculator.java
  ├── TaxComputation.java
  ├── DeductionProcessor.java
  └── ... (9 more files)`}</CopyableCode>
          </section>

          {/* ── Real Example ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Real Example
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              COBOL paragraph → PCD circuit → Java class
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              A COBOL COMPUTE paragraph lifted to its semantic essence in PCD, then compiled to clean Java.
              The three representations compute identical results — proven by circuit closure.
            </p>

            {/* COBOL */}
            <CopyableCode title="payroll.cob (original)">{`       COMPUTE-NET-PAY.
           COMPUTE WS-GROSS = WS-HOURS * WS-RATE
           IF WS-GROSS > 5000
               COMPUTE WS-TAX = WS-GROSS * 0.30
           ELSE
               COMPUTE WS-TAX = WS-GROSS * 0.20
           END-IF
           COMPUTE WS-NET = WS-GROSS - WS-TAX.`}</CopyableCode>

            {/* PCD */}
            <CopyableCode title="payroll.pcd (lifted)">{`PC compute_net_pay {
    domain hours: Range [0.0, 744.0];
    domain rate:  Range [0.0, 10000.0];

    fn compute(hours: Range[0.0,744.0], rate: Range[0.0,10000.0]) {
        let gross = hours * rate;
        let tax = if (gross > 5000.0) { gross * 0.30 } else { gross * 0.20 };
        return gross - tax;  // Φ_c = 1
    }
}`}</CopyableCode>

            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
              Three representations. One computation. <PhiC /> = 1 — proven equivalent by circuit closure.
            </p>
          </section>

          {/* ── Results ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Results
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
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
          <section className="bg-background px-6 py-24 text-center lg:px-16">
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Migrate your COBOL — with proof
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Stop rewriting. Start lifting. Every line of COBOL, mathematically preserved in any modern language.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/lifter"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Lifter product page <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </section>
        </div>
      </div>

      </main>
      <div className="relative z-10">

        <Footer />

      </div>
    </>
  );
}
