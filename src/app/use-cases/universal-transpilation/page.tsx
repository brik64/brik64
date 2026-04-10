import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";


export const metadata = {
  title: "Universal Transpilation: 10 Languages In. 14 Targets Out. 140 Proven Paths. — BRIK64",
  description:
    "140 certified transpilation paths through PCD. Semantic-level, not syntactic. Mathematical proof of equivalence on every path. Same proof regardless of source or target.",
};

const painPoints = [
  {
    title: "Every transpiler is a one-way bridge built from scratch",
    desc: "CoffeeScript to JavaScript. TypeScript to JavaScript. Sass to CSS. Kotlin to JVM bytecode. Every transpiler in existence is a purpose-built tool for ONE specific pair of languages. Want to go from Python to Rust? Build a new transpiler. Python to Go? Another new transpiler. Python to Swift? Another. Each one takes a team 1-3 years to build, produces its own category of bugs, requires its own test suite, and still does not guarantee the output computes the same thing as the input. The entire transpilation industry is a collection of artisanal bridges. Each one hand-crafted. Each one fragile. Each one alone.",
  },
  {
    title: "Syntax-level translation loses meaning — always",
    desc: "Traditional transpilers translate tokens. They map syntax constructs from one language to another. A Python list comprehension becomes a Java for loop. A Rust match becomes a C switch. The translation looks correct. But implicit behaviors get lost. Floating-point semantics differ between languages. Integer overflow behaves differently in C versus Python versus Rust. Exception handling models are fundamentally incompatible. The transpiler translates the words, not the meaning. And the meaning is where the bugs hide — in the gap between what the syntax says and what the computation does.",
  },
  {
    title: "The N-squared problem makes comprehensive coverage impossible",
    desc: "Supporting 10 languages with pair-specific transpilers requires 90 separate tools. 10 x 9 = 90. Each needs its own parser, its own code generator, its own test suite, its own maintenance team. Add one new language and you need 19 new transpilers to maintain full coverage. The complexity is quadratic. It does not scale. It has never scaled. That is why after 40 years of transpiler development, most language pairs still have no transpiler at all. The architecture is fundamentally wrong. You do not solve a quadratic problem by building more pairs. You solve it by introducing a hub.",
  },
];

const steps = [
  {
    step: "01",
    title: "Lift source to PCD — extract what the code computes",
    desc: "Any of 10 supported source languages — JavaScript, TypeScript, Python, Rust, C, C++, Go, COBOL, PHP, Java — gets lifted to PCD. The lifter does not translate syntax. It extracts the computational structure: what the code does, what the constraints are, what the domains mean. A Python list comprehension, a Rust iterator chain, and a Go for loop that compute the same thing produce the same PCD. Because PCD captures meaning, not notation.",
  },
  {
    step: "02",
    title: "PCD is the universal hub — like LLVM IR, but with mathematical proof",
    desc: "PCD sits at the center of every transpilation path. Like LLVM IR democratized compiler backends, PCD democratizes language translation. But PCD goes further: every transformation through PCD is algebraically verified. The lift produces a proof. The compilation produces a proof. The chain is: Source A has proof of equivalence to PCD, PCD has proof of equivalence to Target B, therefore Source A is provably equivalent to Target B. Transitive. Automatic. Mathematical.",
  },
  {
    step: "03",
    title: "Compile to any of 14 targets — idiomatic, clean, certified",
    desc: "From PCD, compile to Rust, JavaScript, TypeScript, Python, C, C++, Go, COBOL, PHP, Java, Swift, WASM, BIR bytecode, or native x86-64. The output is not a mechanical translation that reads like Python wearing a Rust costume. It is idiomatic. It uses the target language's patterns, conventions, and best practices. And it carries a mathematical certificate of equivalence to the source. 10 sources x 14 targets = 140 certified migration paths. Through one hub. With one tool.",
  },
  {
    step: "04",
    title: "Mathematical proof of equivalence — on every path, for every file",
    desc: "Every transpilation produces a formal certificate. The source and target compute identical results for every possible input in every declared domain. Not 'we ran the test suite and it passed.' Not 'we compared 10,000 sample outputs.' Proven. Algebraically. The proof is verifiable by third parties. The certificate is permanent. The equivalence is mathematical. You can migrate a million-line codebase and prove that every function in the target computes exactly what the corresponding function in the source computed.",
  },
];

const results = [
  {
    title: "140 certified transpilation paths — through one hub, with one tool",
    desc: "10 source languages. 14 target languages. Every combination goes through PCD with algebraic equivalence proof. No pair-specific tools. No custom transpilers. No team of 5 engineers maintaining a Python-to-Rust bridge. One hub. One compiler. 140 paths. Add a new source language and you instantly get 14 new target paths. Add a new target and you instantly get 10 new source paths. The architecture is linear, not quadratic. That is the difference between a hack and an infrastructure.",
  },
  {
    title: "Semantic-level translation — meaning preserved, not syntax mimicked",
    desc: "PCD captures the mathematical structure of computation. Language idioms disappear. Syntactic sugar dissolves. Platform quirks are abstracted away. What remains is pure computational meaning: domains, constraints, transformations, closure properties. A Python generator, a Rust iterator, and a Go channel that compute the same sequence produce the same PCD. The translation preserves what matters — the computation — and discards what does not — the notation. Your code does not just look right in the target language. It is right.",
  },
  {
    title: "Proof of equivalence included — not as an add-on, as the foundation",
    desc: "Every transpilation comes with a certificate. The source and target are provably equivalent through PCD circuit closure. Not 'probably correct based on our test coverage.' Proven correct for all possible inputs in all declared domains. The certificate is cryptographically signed, independently verifiable, and permanent. When your auditor asks 'how do you know the migrated code does the same thing?' you do not show them a test suite. You show them a mathematical proof. That is a different conversation entirely.",
  },
];

export default function UniversalTranspilationUseCasePage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        {/* ── Hero ── */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white relative overflow-hidden">
          <HeroWireframeClient />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
              Use Case
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Universal Transpilation:{" "}
              <span className="text-teal">10 Languages In. 14 Out. 140 Proven Paths.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              10 languages in. 14 targets out. 140 migration paths. Same mathematical proof on every single one.
              One universal hub. One compiler. One certificate of equivalence. Not a collection of transpilers —
              an infrastructure for provable code migration. Free CLI.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-hover transition-colors"
              >
                Start building &mdash; free <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/transpiler"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Transpiler product page <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl border-x border-border">
          {/* ── The Problem ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
              The Problem
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Transpilation is fundamentally broken — the architecture is wrong
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
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
              The Solution
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              One hub. 140 certified paths. Mathematical proof on every one.
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {steps.map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-teal/10">
                    <span className="text-sm font-bold text-teal">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal example */}
            <CopyableCode title="terminal">{`$ brikc transpile ./src/ --from python --to rust --output ./dist/
✓ Lifting 34 Python files to PCD...
✓ Extracted 127 circuits (Φc = 1 for all)
✓ Compiling 127 circuits to Rust...
✓ Equivalence proof: python/src ≡ rust/dist
✓ Output: ./dist/
  ├── lib.rs
  ├── data_processor.rs
  ├── api_handler.rs
  └── ... (31 more files)

$ brikc verify ./dist/ --against ./src/
✓ All 127 circuits verified
✓ Source ≡ Target (algebraic proof)
✓ Certificate: transpile_cert_0xb7e2...f193.json`}</CopyableCode>
          </section>

          {/* ── Real Example ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
              Real Example
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Python → PCD → Rust — meaning preserved, syntax transformed
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              A Python function lifted to its semantic essence in PCD, then compiled to idiomatic Rust.
              Not a syntax-level translation. A semantic-level migration. The three representations
              compute identical results for every possible input. Proven.
            </p>

            {/* Python source */}
            <CopyableCode title="data_processor.py (source)">{`def normalize(values: list[float], min_val: float, max_val: float) -> list[float]:
    if max_val <= min_val:
        raise ValueError("Invalid range")
    return [(v - min_val) / (max_val - min_val) for v in values]`}</CopyableCode>

            {/* PCD */}
            <CopyableCode title="data_processor.pcd (lifted)">{`PC normalize {
    domain values: List[Float64];
    domain min_val: Float64;
    domain max_val: Float64;
    assert max_val > min_val | reject("Invalid range");

    fn normalize(values: List[Float64], min_val: Float64, max_val: Float64) {
        return values.map(|v| (v - min_val) / (max_val - min_val));  // Φc = 1
    }
}`}</CopyableCode>

            {/* Rust target */}
            <CopyableCode title="data_processor.rs (compiled)">{`pub fn normalize(values: &[f64], min_val: f64, max_val: f64) -> Result<Vec<f64>, &'static str> {
    if max_val <= min_val {
        return Err("Invalid range");
    }
    Ok(values.iter().map(|v| (v - min_val) / (max_val - min_val)).collect())
}`}</CopyableCode>

            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
              Python → PCD → Rust. Three representations. One computation. <PhiC /> = 1.
              The Rust code is idiomatic. The proof is automatic. The equivalence is mathematical.
            </p>
          </section>

          {/* ── Results ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
              Results
            </span>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What changes when transpilation has mathematical proof
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {results.map((item) => (
                <div key={item.title} className="border border-border bg-white p-6">
                  <CheckCircle2 className="mb-3 h-6 w-6 text-teal" />
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="bg-background px-6 py-24 text-center lg:px-16">
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Transpile anything. Prove everything. Ship with certainty.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              140 certified paths. One command. Algebraic proof of equivalence on every single one.
              The era of hoping your transpiled code works is over. The era of proving it works starts now.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-hover transition-colors"
              >
                Start building &mdash; free <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/transpiler"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Transpiler product page <ArrowRight className="h-4 w-4" />
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
