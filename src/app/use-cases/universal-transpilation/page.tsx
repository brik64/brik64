import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Universal Transpilation: Any Language → Any Language, Proven — BRIK-64",
  description:
    "140 certified transpilation paths through PCD. Semantic-level, not syntactic. Proof of equivalence included.",
};

const painPoints = [
  {
    title: "Transpilers are pair-specific",
    desc: "CoffeeScript to JS. TypeScript to JS. Sass to CSS. Every transpiler is a purpose-built tool for ONE pair of languages. Want Python to Rust? Build a new transpiler from scratch.",
  },
  {
    title: "No semantic guarantees",
    desc: "Traditional transpilers work at the syntax level. They translate tokens, not meaning. Edge cases, platform differences, and implicit behaviors get lost in translation.",
  },
  {
    title: "N\u00B2 problem",
    desc: "Supporting 10 languages requires 90 pair-specific transpilers. Each one needs its own test suite, its own maintenance, its own bugs. The complexity is quadratic and unsustainable.",
  },
];

const steps = [
  {
    step: "01",
    title: "Lift source to PCD",
    desc: "Any of 10 supported source languages gets lifted to PCD — the universal intermediate representation that captures what the code does, not how the language expresses it.",
  },
  {
    step: "02",
    title: "PCD: the universal hub",
    desc: "Like LLVM IR but with formal equivalence certification. PCD is language-agnostic, semantics-first, and every transformation through it is algebraically verified.",
  },
  {
    step: "03",
    title: "Compile to any target",
    desc: "From PCD, compile to any of 14 target languages. The output is idiomatic, clean, and certified equivalent to the source. 10 sources x 14 targets = 140 certified paths.",
  },
  {
    step: "04",
    title: "Proof of equivalence included",
    desc: "Every transpilation path carries a formal proof. The source and target compute identical results — not tested, proven. Circuit closure guarantees it.",
  },
];

const results = [
  {
    title: "140 certified transpilation paths",
    desc: "10 source languages, 14 target languages. Every combination goes through PCD with algebraic equivalence proof. No pair-specific tools needed.",
  },
  {
    title: "Semantic-level, not syntactic",
    desc: "PCD captures the mathematical structure of computation. Language idioms, syntactic sugar, and platform quirks are abstracted away. What remains is pure meaning.",
  },
  {
    title: "Proof of equivalence included",
    desc: "Every transpilation comes with a certificate. The source and target are provably equivalent through PCD circuit closure. Not 'probably correct' — proven correct.",
  },
];

export default function UniversalTranspilationUseCasePage() {
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
              Universal Transpilation:{" "}
              <span className="text-[#00b8d4]">Any Language → Any Language, Proven</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Stop building pair-specific transpilers. BRIK-64 routes every language through PCD —
              one intermediate representation, 140 certified paths, algebraic proof of equivalence.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building <ArrowRight className="h-4 w-4" />
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
          <section className="border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              The Problem
            </span>
            <h2 className="text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Transpilation is broken by design
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
              One hub. 140 certified paths.
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
                <code>{`$ brikc transpile ./src/ --from python --to rust --output ./dist/
✓ Lifting 34 Python files to PCD...
✓ Extracted 127 circuits (Φ_c = 1 for all)
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
✓ Certificate: transpile_cert_0xb7e2...f193.json`}</code>
              </pre>
            </div>
          </section>

          {/* ── Real Example ── */}
          <section className="border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Real Example
            </span>
            <h2 className="text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Python → PCD → Rust — semantic transpilation
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              A Python function lifted to its semantic essence in PCD, then compiled to idiomatic Rust.
              The three representations compute identical results.
            </p>

            {/* Python source */}
            <div className="mt-8 overflow-hidden border border-border bg-[#0a0e14]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-white/50">data_processor.py (source)</span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-[#e0e0e0]">
                <code>{`def normalize(values: list[float], min_val: float, max_val: float) -> list[float]:
    if max_val <= min_val:
        raise ValueError("Invalid range")
    return [(v - min_val) / (max_val - min_val) for v in values]`}</code>
              </pre>
            </div>

            {/* PCD */}
            <div className="mt-4 overflow-hidden border border-border bg-[#0a0e14]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-white/50">data_processor.pcd (lifted)</span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-[#e0e0e0]">
                <code>{`PC normalize {
    domain values: List[Float64];
    domain min_val: Float64;
    domain max_val: Float64;
    assert max_val > min_val | reject("Invalid range");

    fn normalize(values: List[Float64], min_val: Float64, max_val: Float64) {
        return values.map(|v| (v - min_val) / (max_val - min_val));  // Φ_c = 1
    }
}`}</code>
              </pre>
            </div>

            {/* Rust target */}
            <div className="mt-4 overflow-hidden border border-border bg-[#0a0e14]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-white/50">data_processor.rs (compiled)</span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-[#e0e0e0]">
                <code>{`pub fn normalize(values: &[f64], min_val: f64, max_val: f64) -> Result<Vec<f64>, &'static str> {
    if max_val <= min_val {
        return Err("Invalid range");
    }
    Ok(values.iter().map(|v| (v - min_val) / (max_val - min_val)).collect())
}`}</code>
              </pre>
            </div>

            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
              Python → PCD → Rust. Three representations, one computation. <PhiC /> = 1.
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
              Transpile anything — with proof
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              140 certified paths. One command. Algebraic proof of equivalence.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building <ArrowRight className="h-4 w-4" />
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
      </main>
      <Footer />
    </>
  );
}
