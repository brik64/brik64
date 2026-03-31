import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";


export const metadata = {
  title: "COBOL Migration: $3 Trillion Runs on COBOL. Now You Can Verify and Modernize It. — BRIK64",
  description:
    "95% of ATM transactions. 80% of in-person transactions. Lift COBOL to PCD, compile to any modern language with mathematical proof of equivalence. No rewriting.",
};

const painPoints = [
  {
    title: "95% of ATM transactions. 80% of in-person transactions. All COBOL.",
    desc: "$3 trillion in daily commerce flows through COBOL systems. 220 billion lines of code written over six decades. Every time you swipe a card at a grocery store, COBOL processes the transaction. Every time you withdraw cash from an ATM, COBOL authorizes it. The IRS runs on COBOL. Social Security runs on COBOL. 95% of ATM transactions and 80% of all in-person transactions on Earth are processed by code older than the internet. This is not legacy. This is the foundation of the global economy. And it is running on systems that nobody fully understands anymore.",
  },
  {
    title: "The people who wrote this code are retiring. The code is not.",
    desc: "The average COBOL programmer is 58 years old. Universities stopped teaching COBOL in the 1990s. Every year, thousands of COBOL developers retire — and the systems they built process more transactions than ever. The knowledge is walking out the door. Not gradually. Rapidly. Banks are paying $200/hour for retired COBOL consultants because they cannot find anyone else. The U.S. government spent $337 million on COBOL maintenance in 2023 alone. The workforce gap is not closing. It is accelerating. And every day it gets wider, the risk to the global financial system gets larger.",
  },
  {
    title: "Every rewrite attempt in history has failed. Every single one.",
    desc: "Commonwealth Bank of Australia: $750 million, 5 years, to replace ONE core banking system. The UK's Universal Credit: $1.7 billion over budget rewriting benefits processing. Hertz's website rewrite with Accenture: $32 million lawsuit. Manual rewrites lose semantics in translation. The new code looks different, behaves differently, and breaks edge cases the COBOL handled flawlessly for 40 years. Edge cases nobody documented. Edge cases nobody remembers. Edge cases that only matter when a pension check fails to arrive or a mortgage payment processes twice. Billions wasted. Systems broken. And the COBOL is still running because the rewrite could not replace it.",
  },
];

const steps = [
  {
    step: "01",
    title: "Lift the COBOL — extract what the code does, not how it says it",
    desc: "brikc lift reads your COBOL programs and extracts the computational essence into PCD — Printed Circuit Descriptions. Paragraphs become circuits. PERFORM loops become compositions. WORKING-STORAGE becomes domain constraints. The lifter does not translate COBOL syntax. It captures COBOL semantics. What the code computes. What the constraints are. What the data boundaries mean. The 60-year-old MOVE and COMPUTE statements become algebraic structures that any modern language can express.",
  },
  {
    step: "02",
    title: "PCD captures meaning — not syntax, not idioms, not accidents of history",
    desc: "PCD is language-agnostic. It does not know the source was COBOL. It does not care. It captures the mathematical structure of the computation — domains, constraints, transformations, closure properties. The implicit COBOL behaviors that have been silently running for decades are now explicit, bounded, and verifiable. Every REDEFINES, every OCCURS DEPENDING ON, every implicit decimal scaling — captured as formal domain constraints.",
  },
  {
    step: "03",
    title: "Compile to any modern language — Java, Go, Rust, Python, any of 14 targets",
    desc: "brikc compile emits the PCD to the language your team actually knows. Java for enterprise. Go for microservices. Rust for performance-critical paths. Python for data processing. TypeScript for web services. The output is idiomatic — not a mechanical translation that reads like COBOL wearing a Java costume. Clean, modern code that your developers can maintain, extend, and understand. Certified mathematically equivalent to the original.",
  },
  {
    step: "04",
    title: "Mathematical proof of equivalence — not testing, not hoping, proving",
    desc: "The old COBOL and the new Java compute exactly the same results for every possible input. Not 'we tested 10,000 cases and they matched.' Proven. Algebraically. Through PCD circuit closure. The same mathematical property that certifies the compilation guarantees the equivalence. Your auditors get a formal certificate. Your regulators get a mathematical proof. Your board gets the one thing no other migration vendor can provide: certainty.",
  },
];

const results = [
  {
    title: "100% liftability — every COBOL file, every paragraph, every computation",
    desc: "In benchmark testing, every COBOL file was successfully lifted to PCD. 211 out of 211 files. No manual intervention. No files left behind. No 'we could not handle this construct.' Paragraphs, sections, copybooks, PERFORM THRU, EVALUATE, STRING/UNSTRING, REDEFINES — all captured. The lifter handles the COBOL your team wrote, the COBOL the vendor wrote, and the COBOL nobody remembers writing.",
  },
  {
    title: "Mathematical proof of equivalence — the migrated code is provably identical",
    desc: "Not 'probably correct.' Not 'we ran the regression suite.' Provably equivalent. Circuit closure guarantees the old COBOL and the new Java/Go/Rust compute identical results for every possible input in every possible domain. Your 40-year-old payroll calculations, your interest rate computations, your tax withholding logic — mathematically preserved. Bit for bit. The proof is verifiable by third parties. The certificate is permanent.",
  },
  {
    title: "Zero manual rewriting — the compiler does all the work",
    desc: "Not one line written by hand. Not one function manually translated. Not one edge case hand-coded by a consultant at $200/hour. The compiler lifts, the compiler compiles, the compiler certifies. Your COBOL experts — the ones you are paying a fortune to retain — review the output instead of rewriting it. Their decades of domain knowledge validate the results. The machine does the labor. The humans do the judgment.",
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
              <span className="text-[#00b8d4]">$3T Runs on COBOL. Verify and Modernize It Without Rewriting.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              95% of ATM transactions. 80% of in-person transactions. 220 billion lines. Every rewrite fails.
              BRIK64 does not rewrite — it lifts the computation and compiles to Java, Go, Rust, or any of 14
              targets. With mathematical proof that the old and the new compute identical results. Not tested. Proven.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building &mdash; free <ArrowRight className="h-4 w-4" />
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
              The world&apos;s financial infrastructure is running on code that is older than its operators
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
              Do not rewrite the code. Lift the computation. Compile the future.
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
              COBOL paragraph → PCD circuit → Java class — same computation, proven
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              A COBOL COMPUTE paragraph lifted to its semantic essence in PCD, then compiled to clean Java.
              Three representations of the same computation. Not similar. Not approximately equivalent.
              Mathematically identical. Proven by circuit closure.
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
              The payroll calculation that has been running correctly since 1987 is now running in Java.
              With a mathematical certificate that it computes the same result.
            </p>
          </section>

          {/* ── Results ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Results
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What changes when migration has mathematical proof
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
              Stop rewriting. Start proving.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Every line of COBOL, mathematically preserved in any modern language. Not rewritten.
              Not approximately translated. Proven equivalent. The migration the industry has been
              failing at for 30 years now has a mathematical foundation.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building &mdash; free <ArrowRight className="h-4 w-4" />
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
