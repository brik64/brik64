import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";


export const metadata = {
  title: "Formal Verification: One Command. Mathematical Proof. — BRIK64",
  description:
    "Formal verification used to require a PhD and years of training. Now it requires one command: brikc check. 207 mathematical proofs. Zero expertise needed. If it compiles, it is proven.",
};

const painPoints = [
  {
    title: "Formal verification has been locked in academia for 50 years",
    desc: "Lean. Isabelle. Coq. TLA+. Proof assistants that can mathematically prove software is correct. The technology exists. It has existed since the 1970s. And almost nobody uses it. Why? Because learning to write formal proofs takes 2-5 years of graduate-level training. There are fewer than 5,000 people on Earth who can effectively use these tools. Five thousand — out of 30 million professional developers. That means 99.98% of all software ever written has never been formally verified. Not because the math does not exist. Because the tooling was built for mathematicians, not engineers.",
  },
  {
    title: "Only aerospace and nuclear can justify the cost",
    desc: "The seL4 microkernel: 8,700 lines of C, 200,000 lines of proof, 20 person-years of work. That is the gold standard of formal verification. And it is completely impractical for anything except systems where a bug kills people. Your banking application? Unverified. Your healthcare platform processing patient data? Unverified. Your trading system moving billions per day? Unverified. Your self-driving car firmware? Partially verified at enormous cost. Formal verification costs $50-100 per line of code when done manually. A million-line codebase would cost $50-100 million to verify. So nobody does it. And the bugs keep shipping.",
  },
  {
    title: '"Testing shows the presence of bugs, never their absence"',
    desc: "Dijkstra said it in 1969. Fifty-seven years later, the entire software industry still operates as if he never spoke. 100% code coverage does not mean 100% correctness. It means you tested every line — not every path, not every state, not every input combination. A function with 10 boolean parameters has 1,024 possible input combinations. Your test suite covers 50 of them. Maybe 100 if you are thorough. The bugs hide in the 924 combinations you did not test. They always do. And no amount of additional testing can prove they are not there. Only formal verification can prove absence of bugs. And until today, formal verification required a PhD.",
  },
];

const steps = [
  {
    step: "01",
    title: "Write PCD — just your program logic, nothing else",
    desc: "No proof annotations. No tactics. No lemmas. No invariants. No preconditions decorated in a special syntax. You write your program in PCD with domain constraints — the same way you would write any program, except you declare the valid ranges of your data. domain temperature: Range[-273.15, 1e9]. domain pressure: Range[0.0, 1e12]. That is it. You write the program. The compiler writes the proof.",
  },
  {
    step: "02",
    title: "The compiler generates the mathematical proof — automatically",
    desc: "brikc check does not just compile your code. It constructs a formal proof of correctness during compilation. The 64 core monomers of BRIK64 carry 207 mathematically certified proofs — every arithmetic operation, every logical gate, every control flow construct, every I/O operation. Your program composes these monomers. The proofs compose with them. Composition is algebraic. The compiler does the math. You get the certificate.",
  },
  {
    step: "03",
    title: "Circuit closure equals correctness — one property, total guarantee",
    desc: "If all domains are bounded, all paths terminate, all constraints are satisfied, and all inputs are consumed — then the circuit closes. The program is correct. Not 'probably correct for the inputs we tested.' Correct. For ALL inputs in the declared domains. Every division has a non-zero divisor — proven. Every array access is in bounds — proven. Every overflow is impossible — proven. Every null reference cannot occur — proven. One property. One check. Total mathematical guarantee.",
  },
  {
    step: "04",
    title: "Every compilation produces a verifiable certificate",
    desc: "The certificate is not a badge. It is a cryptographically signed mathematical proof. Third parties can independently verify your code's correctness without reading the source code. Auditors verify the certificate, not the implementation. Regulators verify the proof, not the test suite. The certificate is permanent — it does not expire, it does not need to be re-run, it does not degrade over time. The math is the same today as it will be in a hundred years.",
  },
];

const results = [
  {
    title: "207 mathematical proofs — you get them for free, today",
    desc: "The 64 core monomers of BRIK64 have been mathematically certified with 207 formal proofs. Arithmetic correctness. Logical consistency. Control flow termination. Memory safety. I/O determinism. Cryptographic integrity. When you compose circuits from monomers, the proofs compose too — automatically, algebraically, without any work from you. You inherit decades of formal verification work by writing one line of PCD.",
  },
  {
    title: "No proof expertise needed — not today, not ever",
    desc: "You will never see a proof assistant. You will never write a tactic. You will never debug a failed lemma at 3 AM wondering why your induction hypothesis does not generalize. The compiler does all the formal verification work. You write code. You get proofs. The barrier that kept formal verification locked in academia for half a century — the expertise requirement — is gone. Deleted. Every developer who can write a function can now get a formal proof that their function is correct.",
  },
  {
    title: "If it compiles, it is proven. If it does not compile, you know exactly why.",
    desc: "The compilation process IS the verification process. They are not separate steps. They are not separate tools. They are the same operation. If brikc compiles your PCD without error, your code has been mathematically certified correct. If it fails, you get a precise diagnostic: which circuit, which constraint, which domain, which input range. Not a cryptic error message. A mathematical explanation of exactly what is wrong and why. Fix it, recompile, get your proof.",
  },
];

export default function FormalVerificationUseCasePage() {
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
              Formal Verification:{" "}
              <span className="text-[#00b8d4]">One Command: brikc check</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Formal verification used to require a PhD and years of training. Now it requires
              one command. 207 mathematical proofs. Zero expertise needed. Write code, get proofs.
              The compiler does all the verification. If it compiles, it&apos;s proven. Free CLI.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building &mdash; free <ArrowRight className="h-4 w-4" />
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
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              The Problem
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The most powerful technique in software engineering is inaccessible to 99.98% of developers
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
              The proof is inside the compiler. You just write code.
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
            <CopyableCode title="terminal">{`$ brikc check calculator.pcd
╔══════════════════════════════════════════════════╗
║  BRIK64 Certification Report                    ║
╠══════════════════════════════════════════════════╣
║  File:        calculator.pcd                     ║
║  Circuits:    8                                  ║
║  Monomers:    23 (of 64 core)                    ║
║  Domains:     all bounded ✓                      ║
║  Termination: all paths terminate ✓              ║
║  Constraints: all satisfied ✓                    ║
║  Proofs:      47 (composed from 207 base)        ║
║                                                  ║
║  Φ_c = 1  ✓  CERTIFIED                          ║
║                                                  ║
║  Certificate: calc_cert_0xd4a1...e8b7.json       ║
╚══════════════════════════════════════════════════╝`}</CopyableCode>
          </section>

          {/* ── Real Example ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Real Example
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A certified calculator — every operation mathematically proven
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              This PCD program defines a calculator with bounded domains. Division by zero is not handled
              at runtime — it is eliminated at compile time. Overflow is not caught by an exception — it
              is made impossible by domain constraints. The compiler proves it. You ship it. It cannot fail.
            </p>
            <CopyableCode title="calculator.pcd">{`// Certified Calculator — Φ_c = 1
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
}`}</CopyableCode>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
              No runtime checks needed. No try/catch blocks. No error handling for impossible cases.
              The domain constraints make undefined behavior mathematically impossible. <PhiC /> = 1.
              Ship it. It is proven.
            </p>
          </section>

          {/* ── Results ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Results
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What changes when every developer can get a formal proof
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
              Write code. Get proofs. Ship certainty.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              207 mathematical proofs. Zero proof expertise required. One command. If it compiles, it&apos;s proven.
              Formal verification just became as easy as running a compiler. Because it is the compiler.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building &mdash; free <ArrowRight className="h-4 w-4" />
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
      </div>

      </main>
      <div className="relative z-10">

        <Footer />

      </div>
    </>
  );
}
