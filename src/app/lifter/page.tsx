"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { MonomerFamilyBoard } from "@/components/MonomerArtifacts";
import { EvidenceSurface } from "@/components/PageArtifacts";
import {
  ArrowRight,
  Terminal,
  FileCode,
  Shield,
  Search,
  Layers,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

/* ── Source languages ── */

const sourceLanguages = [
  { name: "JavaScript", ext: ".js", logo: "/brands/javascript.svg", status: "Stable" },
  { name: "TypeScript", ext: ".ts/.tsx", logo: "/brands/typescript.svg", status: "Stable" },
  { name: "Python", ext: ".py", logo: "/brands/python.svg", status: "Stable" },
  { name: "Rust", ext: ".rs", logo: "/brands/rust.svg", status: "Stable" },
  { name: "C / C++", ext: ".c/.cpp", logo: "/brands/c.svg", status: "Stable" },
  { name: "Go", ext: ".go", logo: "/brands/go.svg", status: "Stable" },
  { name: "COBOL", ext: ".cob", logo: "/brands/cobol.svg", status: "Stable" },
  { name: "PHP", ext: ".php", logo: "/brands/php.svg", status: "Stable" },
  { name: "Java", ext: ".java", logo: "/brands/java.svg", status: "Stable" },
  { name: "Kotlin", ext: ".kt", logo: "/brands/kotlin.svg", status: "Planned" },
];

/* ── How it works steps ── */

const steps = [
  { label: "Parse", desc: "Parse source file into AST using a lightweight, language-specific frontend.", icon: <Search className="h-5 w-5" /> },
  { label: "Extract", desc: "Pattern recognition identifies operations that correspond to BRIK64 monomers.", icon: <Layers className="h-5 w-5" /> },
  { label: "Infer Domains", desc: "The lifter analyzes value flows to infer numeric bounds from existing validation logic, type constraints, and runtime guards. Inferred domains become explicit PCD declarations. Example: if (age > 0 && age < 150) → input age : Float64[0.0 .. 150.0]", icon: <Shield className="h-5 w-5" /> },
  { label: "Map", desc: "Recognized patterns mapped to verified monomer equivalents with proper composition.", icon: <FileCode className="h-5 w-5" /> },
  { label: "Verify", desc: "Output as valid PCD program. Run brikc check to verify certification.", icon: <Shield className="h-5 w-5" /> },
];

/* ── Terminal demos ── */

const demos = [
  {
    label: "JavaScript",
    lines: [
      { text: "$ brikc lift app.js", style: "command" },
      { text: "", style: "blank" },
      { text: "  # Input: app.js", style: "muted" },
      { text: "  function add(a, b) {", style: "muted" },
      { text: "      return a + b;", style: "muted" },
      { text: "  }", style: "muted" },
      { text: "", style: "blank" },
      { text: "  # Output:", style: "muted" },
      { text: "  PC app {", style: "box-green" },
      { text: "      let result = ADD8(10, 20);", style: "box-green" },
      { text: "      let _ = WRITE(result);", style: "box-green" },
      { text: "      OUTPUT result;", style: "box-green" },
      { text: "  }", style: "box-green" },
    ],
  },
  {
    label: "COBOL",
    lines: [
      { text: "$ brikc lift PAYROLL.cob --domains", style: "command" },
      { text: "", style: "blank" },
      { text: "  Lifting COBOL (1 file)...", style: "muted" },
      { text: "  Extracting COMPUTE statements...", style: "muted" },
      { text: "  Mapping PIC clauses to domains...", style: "muted" },
      { text: "", style: "blank" },
      { text: "  PC payroll {", style: "box-green" },
      { text: "      domain salary: Range [0, 999999];", style: "box-green" },
      { text: "      domain hours: Range [0, 168];", style: "box-green" },
      { text: "      ...", style: "box-green" },
      { text: "  }", style: "box-green" },
      { text: "", style: "blank" },
      { text: "  \u2713 Lifted \u2192 payroll.pcd", style: "success" },
    ],
  },
  {
    label: "Roundtrip",
    lines: [
      { text: "$ brikc lift calcPrice.js -o calcPrice.pcd", style: "command" },
      { text: "  \u2713 Lifted \u2192 calcPrice.pcd", style: "success" },
      { text: "", style: "blank" },
      { text: "$ brikc check calcPrice.pcd", style: "command" },
      { text: "  \u2713 Circuit closed: certified", style: "success" },
      { text: "", style: "blank" },
      { text: "$ brikc build calcPrice.pcd -t python -o dist/", style: "command" },
      { text: "  \u2713 Compiled \u2192 dist/calcPrice.py", style: "success" },
      { text: "", style: "blank" },
      { text: "$ python3 dist/calcPrice.py", style: "command" },
      { text: "  Total: 1089.50", style: "success" },
    ],
  },
];

function TerminalLine({ line }: { line: { text: string; style: string } }) {
  if (line.style === "blank") return <div className="h-3" />;
  if (line.style === "command")
    return (
      <div className="font-mono text-sm text-white/70">
        <span className="text-teal">$</span> {line.text.slice(2)}
      </div>
    );
  if (line.style === "success")
    return <div className="font-mono text-sm text-emerald-400">{line.text}</div>;
  if (line.style === "box-green")
    return <div className="font-mono text-sm text-emerald-400">{line.text}</div>;
  return <div className="font-mono text-sm text-zinc-400">{line.text}</div>;
}

export default function LifterPage() {
  const [activeDemo, setActiveDemo] = useState(0);

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
              Lifter
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Already have code?{" "}<span className="text-teal">Verify it.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              No rewrite needed. Point the Lifter at your existing code. It extracts, maps, and certifies.
              10 languages in. Verified PCD out. Works with your existing code today.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3 text-sm">
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400">
                211/211 benchmark liftability
              </span>
              <span className="text-muted-foreground">on documented benchmark evidence (211/211 files). Liftability rates vary by codebase; side-effect-heavy code produces Contract-tier blueprints.</span>
            </div>
          </div>
        </section>

        {/* Source languages */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] SOURCE LANGUAGES
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            10 languages. One blueprint.
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {sourceLanguages.map((lang) => (
              <div
                key={lang.name}
                className={`group flex items-center gap-3 border p-4 transition-colors ${
                  lang.status === "Planned"
                    ? "border-border/50 bg-muted/10 opacity-60"
                    : "border-border bg-muted/20 hover:border-teal/30"
                }`}
              >
                <Image src={lang.logo} alt={lang.name} width={24} height={24} className="h-6 w-6" />
                <div>
                  <p className="text-sm font-medium">{lang.name}</p>
                  <p className="text-[10px] text-muted-foreground">{lang.ext}</p>
                </div>
                {lang.status === "Planned" && (
                  <span className="ml-auto text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                    PLANNED
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] HOW IT WORKS
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            Source Code &rarr; AST &rarr; Pattern Recognition &rarr; PCD
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div key={s.label} className="relative border border-border bg-muted/20 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05] text-teal">
                  {s.icon}
                </div>
                <p className="text-sm font-bold text-teal">{s.label}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-muted-foreground lg:block" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Two-Tier Certification */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [03] TWO-TIER CERTIFICATION
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="border border-emerald-500/20 bg-emerald-500/[0.03] p-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                <h3 className="text-sm font-bold text-emerald-400">Core Certified (<PhiC /> = 1)</h3>
              </div>
              <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                <li>Pure functions with full mathematical verification</li>
                <li>Arithmetic &amp; logic operations</li>
                <li>Data validators &amp; parsers</li>
                <li>String transformations</li>
                <li>Business logic &amp; algorithms</li>
              </ul>
            </div>
            <div className="border border-orange-500/20 bg-orange-500/[0.03] p-6">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-orange-400" />
                <h3 className="text-sm font-bold text-orange-400">Contract Certified (extended)</h3>
              </div>
              <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                <li>API calls (fetch, HTTP)</li>
                <li>Filesystem operations</li>
                <li>React components (JSX)</li>
                <li>Async/await functions</li>
                <li>Database queries</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-xs italic text-muted-foreground">
            Core Certified + Contract Certified covers mapped functions in current Lifter scope. The Lifter selects the appropriate monomers and reports the tier.
          </p>

          <div className="mt-8">
            <MonomerFamilyBoard />
          </div>

          <div className="mt-8">
            <EvidenceSurface
              eyebrow="Lift Evidence"
              title="What the lifter preserves and what it scopes"
              description="This surface separates certifiable logic from contract-bounded integration without blurring the proof boundary."
              items={[
                { label: "Pure logic", body: "Certified blueprints carry Φc = 1 through extraction and mapping." },
                { label: "Side effects", body: "I/O, network and filesystem behavior remain explicit contract-tier bridges." },
                { label: "Liftability", body: "Benchmark liftability is presented as documented evidence, not as a universal guarantee." },
              ]}
            />
          </div>
        </section>

        {/* Terminal demos */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [04] DEMO
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            See it in action
          </h2>
          <div className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex border-b border-white/10">
              {demos.map((d, i) => (
                <button
                  key={d.label}
                  onClick={() => setActiveDemo(i)}
                  className={`cursor-pointer px-4 py-2.5 text-xs font-medium transition-colors ${
                    activeDemo === i
                      ? "border-b-2 border-teal text-teal"
                      : "text-white/40 hover:text-white/60"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
            <div className="space-y-0.5 p-5">
              {demos[activeDemo].lines.map((line, i) => (
                <TerminalLine key={i} line={line} />
              ))}
            </div>
          </div>
        </section>

        {/* COBOL Migration */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [05] COBOL MIGRATION
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            220 billion lines of COBOL. One migration path.
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-relaxed">
            $3 trillion per day in banking transactions still runs on COBOL. Lift legacy mainframe logic into verified
            PCD blueprints, then export to modern Go microservices with reviewable equivalence on the extracted computational core.
          </p>

          <div className="mt-8 border border-border bg-muted/20 p-6">
            <div className="flex items-center gap-3 text-sm font-mono text-muted-foreground">
              <span className="rounded bg-teal/10 px-2 py-0.5 text-teal">COBOL</span>
              <ArrowRight className="h-4 w-4" />
              <span className="rounded bg-teal/10 px-2 py-0.5 text-teal">brikc lift</span>
              <ArrowRight className="h-4 w-4" />
              <span className="rounded bg-teal/10 px-2 py-0.5 text-teal">PCD</span>
              <ArrowRight className="h-4 w-4" />
              <span className="rounded bg-teal/10 px-2 py-0.5 text-teal">brikc build</span>
              <ArrowRight className="h-4 w-4" />
              <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-emerald-400">Go / Rust / Any</span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
              {[
                { metric: "Timeline", trad: "3\u20135 years", pcd: "Weeks for code lifting*" },
                { metric: "Failure rate", trad: "60%", pcd: "Verified" },
                { metric: "Testing", trad: "Manual", pcd: "Auto-generated" },
                { metric: "Risk", trad: "Existential", pcd: "Incremental" },
                { metric: "Proof", trad: "None", pcd: "\u03a6_c = 1" },
              ].map((r) => (
                <div key={r.metric} className="text-center">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{r.metric}</p>
                  <p className="mt-1 text-xs text-red-400 line-through">{r.trad}</p>
                  <p className="text-xs font-medium text-emerald-400">{r.pcd}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[10px] text-muted-foreground italic">
              * Weeks for code lifting. Integration, testing, and data migration follow standard timelines but start from a verified baseline.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            Start locally with the Lifter workflow
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            Point the Lifter at any file, directory, or repository. Pure functions become verified PCD blueprints.
            Impure functions get extended monomers with explicit contract boundaries.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/cli"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              <Terminal className="h-4 w-4" /> Install brikc
            </Link>
            <Link
              href="/transpiler"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              See the Transpiler <ArrowRight className="h-3.5 w-3.5" />
            </Link>
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
