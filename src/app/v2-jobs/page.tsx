"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CircuitGrid } from "@/components/CircuitGrid";
import { PhiC } from "@/components/PhiC";
import {
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Puzzle,
  ScanSearch,
  TrendingUp,
  FileCode,
  Shield,
  Zap,
  Maximize2,
  Cpu,
  Terminal,
  Layers,
  ArrowUpDown,
  GitBranch,
  Box,
  Plane,
  Heart,
  Link2,
  Building2,
  Landmark,
  CircuitBoard,
  KeyRound,
  ClipboardList,
  Headset,
  BadgeCheck,
  FileCheck,
  Bot,
  RefreshCw,
  Brain,
  Code2,
} from "lucide-react";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

const MonomerGrid = dynamic(
  () => import("@/components/MonomerGrid").then((m) => m.MonomerGrid),
  { ssr: false }
);

/* ────────────────────────────────────────────────────────────
   V2-JOBS — Same 15 sections, Steve Jobs energy
   Every text rewritten: concrete, usable TODAY, no fluff
   64 certified monomers + 64 extended = 128 total
   ──────────────────────────────────────────────────────────── */

/* ── PCD code examples ── */
const pcdCode = `PC hello {
    let msg = "Hello, verified world!";
    let n = LEN(msg);
    WRITE(1, msg, n);
    OUTPUT 0;
}`;

const outputs: Record<string, { lang: string; code: string }> = {
  PCD: { lang: "pcd", code: pcdCode },
  Rust: {
    lang: "rust",
    code: `fn hello() -> i32 {
    let msg = "Hello, verified world!";
    let n = msg.len();
    io::stdout().write_all(msg.as_bytes()).unwrap();
    0 // Φ_c = 1 — circuit closed
}`,
  },
  JavaScript: {
    lang: "javascript",
    code: `function hello() {
    const msg = "Hello, verified world!";
    const n = msg.length;
    process.stdout.write(msg);
    return 0; // Φ_c = 1 — circuit closed
}`,
  },
  Python: {
    lang: "python",
    code: `def hello() -> int:
    msg = "Hello, verified world!"
    n = len(msg)
    sys.stdout.write(msg)
    return 0  # Φ_c = 1 — circuit closed`,
  },
};

/* ── Compilation targets ── */
const compilationTargets = [
  "Rust", "JavaScript", "TypeScript", "Python", "C", "C++", "Go",
  "COBOL", "PHP", "Java", "Swift", "WASM", "native x86-64", "BIR bytecode",
];

export default function HomeV2Jobs() {
  const [activeTab, setActiveTab] = useState("PCD");

  return (
    <>
      <CircuitGrid />
      <Navbar />
      <main className="relative z-10">

        {/* ━━━ HERO ━━━ */}
        <section className="border-border relative mx-auto w-full max-w-7xl overflow-hidden border-x bg-background">
          <HeroWireframe />
          <div className="absolute top-0 right-0 bottom-0 z-10 hidden w-1/2 md:block">
            <MonomerGrid />
          </div>
          <div className="pointer-events-none relative z-20 px-6 pt-20 pb-16 md:px-12 lg:px-18 lg:pt-28 lg:pb-20">
            <div className="max-w-lg">
              <p className="text-teal text-sm font-medium">
                The AI-native synthetic language
              </p>

              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                The first programming language{" "}
                <span className="text-teal">designed for AI.</span>
              </h1>

              <p className="text-foreground/70 mt-5 max-w-md text-base leading-relaxed md:text-lg">
                64 certified operations. 64 extended. An AI learns the entire language in one prompt.
                The compiler proves every program is correct. Free. Ready today.
              </p>

              <div className="pointer-events-auto mt-8 flex items-center gap-5">
                <a
                  href="https://docs.brik64.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
                >
                  Start building — free
                </a>
                <a
                  href="/pcd"
                  className="text-foreground/50 hover:text-foreground pointer-events-auto inline-flex items-center gap-1 text-sm font-medium transition-colors"
                >
                  See the language <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl border-x border-border bg-background">

          {/* ━━━ TRUSTED BY ━━━ */}
          <section className="border-border border-t px-6 py-8 md:px-12">
            <p className="text-foreground/30 text-center text-xs font-medium tracking-widest">
              DESIGNED FOR ENGINEERING TEAMS IN
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-x-8 gap-y-2">
              {["Aerospace", "Fintech", "Healthcare", "Automotive", "AI & ML", "Government"].map((s) => (
                <span key={s} className="text-foreground/40 text-xs font-medium">{s}</span>
              ))}
            </div>
          </section>

          {/* ━━━ [01] THE PROBLEM ━━━ */}
          <section className="border-border border-t px-6 py-16 md:px-12 md:py-24">
            <p className="text-muted-foreground mb-10 text-xs font-medium tracking-[2px]">
              [01] &middot; THE PROBLEM
            </p>

            <h2 className="max-w-3xl text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              Every other language lets you ship bugs.{" "}
              <span className="text-teal">This one doesn&apos;t.</span>
            </h2>

            <p className="text-foreground/60 mt-4 max-w-2xl text-sm leading-relaxed md:text-base">
              A bridge engineer knows the load on every beam. A chip designer knows the signal on every gate.
              A software engineer? Writes code, runs tests, and hopes for the best.
              That era is over.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                { icon: <ShieldCheck className="h-5 w-5 text-teal" />, title: "Every part is proven", desc: "64 core operations, each mathematically verified in Coq before you ever use them. Not tested. Proven." },
                { icon: <Puzzle className="h-5 w-5 text-teal" />, title: "Composition preserves proof", desc: "If Part A works and Part B works, A + B works. That's not a promise — it's algebra. EVA guarantees it." },
                { icon: <ScanSearch className="h-5 w-5 text-teal" />, title: "The compiler is the auditor", desc: "If any path is undefined, any input unhandled, any domain violated — it doesn't compile. Period." },
                { icon: <TrendingUp className="h-5 w-5 text-teal" />, title: "Verified components compound", desc: "A certified circuit never needs re-verifying. The more you build, the less you need to prove from scratch." },
              ].map((c) => (
                <div key={c.title} className="border border-border p-6">
                  {c.icon}
                  <h3 className="mt-3 text-sm font-semibold">{c.title}</h3>
                  <p className="text-foreground/60 mt-1.5 text-xs leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ━━━ [02] THE LANGUAGE ━━━ */}
          <section className="border-border border-t px-6 py-16 md:px-12 md:py-24">
            <p className="text-muted-foreground mb-10 text-xs font-medium tracking-[2px]">
              [02] &middot; THE LANGUAGE
            </p>

            <h2 className="max-w-3xl text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              This is PCD. Learn it in{" "}
              <span className="text-teal">one prompt.</span>
            </h2>

            <p className="text-foreground/60 mt-4 max-w-2xl text-sm leading-relaxed md:text-base">
              64 certified operations. 64 extended. Domain constraints on every input.
              The compiler proves correctness at compile time — not at runtime, not with tests.
              An AI agent can learn PCD completely from a single system prompt. You can too.
            </p>

            {/* Code viewer */}
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div>
                {/* Tabs */}
                <div className="flex border-b border-border">
                  {Object.keys(outputs).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`cursor-pointer px-4 py-2.5 text-xs font-medium transition-colors ${
                        activeTab === key ? "border-b-2 border-teal text-teal" : "text-foreground/40 hover:text-foreground/60"
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>
                {/* Terminal */}
                <div className="overflow-hidden border border-t-0 border-white/10 bg-[#0a0e14]">
                  <pre className="overflow-x-auto p-5 text-[12px] leading-relaxed text-teal/80">
                    {outputs[activeTab].code}
                  </pre>
                </div>
                <p className="text-foreground/40 mt-3 text-xs">
                  One PCD file → compiles to Rust, JavaScript, Python, and 11 more targets. Same proof. Any language.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: <FileCode className="h-5 w-5 text-teal" />, title: "AI-native by design", desc: "128 operations. Finite. Deterministic. An LLM memorizes the entire language. No Stack Overflow needed." },
                  { icon: <Shield className="h-5 w-5 text-teal" />, title: "64 operations proven in Coq", desc: "Not tested. Mathematically proven. 207 proof files, zero admits. The core is formally verified." },
                  { icon: <Zap className="h-5 w-5 text-teal" />, title: "If it compiles, it works", desc: "Φ_c = 1 means every input is handled, every path terminates, every output is bounded. The compiler proves it." },
                  { icon: <Maximize2 className="h-5 w-5 text-teal" />, title: "Works with your stack", desc: "Already have JavaScript or Python? The Lifter converts it to PCD. No rewrite. Verify what you already have." },
                ].map((c) => (
                  <div key={c.title} className="flex gap-3">
                    <div className="shrink-0 mt-0.5">{c.icon}</div>
                    <div>
                      <h3 className="text-sm font-semibold">{c.title}</h3>
                      <p className="text-foreground/60 mt-1 text-xs leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ━━━ [03] LANGUAGES ━━━ */}
          <section className="border-border border-t px-6 py-16 md:px-12 md:py-24">
            <p className="text-muted-foreground mb-10 text-xs font-medium tracking-[2px]">
              [03] &middot; LANGUAGES
            </p>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              10 languages in.{" "}
              <span className="text-teal">14 targets out.</span>
            </h2>

            <p className="text-foreground/60 mt-4 max-w-xl text-sm md:text-base">
              Lift from JavaScript, Python, Rust, C, Go, and 5 more. Compile to 14 targets.
              Same PCD. Same proof. Any direction.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {compilationTargets.map((t) => (
                <span key={t} className="rounded-full border border-teal/20 bg-teal/[0.04] px-3.5 py-1.5 text-xs font-medium text-teal">
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* ━━━ [04] THE PLATFORM ━━━ */}
          <section className="border-border border-t px-6 py-16 md:px-12 md:py-24">
            <p className="text-muted-foreground mb-10 text-xs font-medium tracking-[2px]">
              [04] &middot; THE PLATFORM
            </p>

            <h2 className="max-w-3xl text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              CAD for software.{" "}
              <span className="text-teal">Compose circuits visually.</span>
            </h2>

            <p className="text-foreground/60 mt-4 max-w-2xl text-sm leading-relaxed md:text-base">
              Publish verified circuits. Discover pre-certified components.
              Drag, connect, compose — every connection verified automatically.
              Like a circuit board designer, but for software. Free tier available.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                { icon: <Box className="h-5 w-5 text-teal" />, title: "Your circuit library", desc: "Build, test, and recompose. Real-time certification status on every component." },
                { icon: <Layers className="h-5 w-5 text-teal" />, title: "Public registry", desc: "A growing catalog of pre-certified circuits. Search, discover, import — never rewrite what's already proven." },
                { icon: <CircuitBoard className="h-5 w-5 text-teal" />, title: "Visual composition", desc: "Connect components visually. EVA algebra verifies every connection. If it connects, it works." },
                { icon: <BadgeCheck className="h-5 w-5 text-teal" />, title: "Certification badges", desc: "Live proof in your README. If the code changes one byte, the badge invalidates. Trust is verifiable." },
              ].map((c) => (
                <div key={c.title} className="border border-border p-6">
                  {c.icon}
                  <h3 className="mt-3 text-sm font-semibold">{c.title}</h3>
                  <p className="text-foreground/60 mt-1.5 text-xs leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="https://registry.brik64.dev" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-hover inline-flex items-center gap-1.5 text-sm font-medium">
                Registry is live — registry.brik64.dev <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </section>

          {/* ━━━ [05] THE FOUNDATION ━━━ */}
          <section className="border-border border-t px-6 py-16 md:px-12 md:py-24">
            <p className="text-muted-foreground mb-10 text-xs font-medium tracking-[2px]">
              [05] &middot; THE FOUNDATION
            </p>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              One compiler.{" "}
              <span className="text-teal">Every guarantee.</span>
            </h2>

            <p className="text-foreground/60 mt-4 max-w-2xl text-sm md:text-base">
              Write PCD once. Compile to any target. Ship with mathematical proof.
              No runtime surprises — every operation verified before it runs.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: <Cpu className="h-5 w-5 text-teal" />, title: "Compile", desc: "One PCD → verified output in any of 14 languages." },
                { icon: <Shield className="h-5 w-5 text-teal" />, title: "Verify", desc: "Mathematical proof in Coq. Not tests. Structural certainty." },
                { icon: <ArrowUpDown className="h-5 w-5 text-teal" />, title: "Lift", desc: "Import existing code into PCD. No manual rewrite." },
                { icon: <BadgeCheck className="h-5 w-5 text-teal" />, title: "Certify", desc: "Φ_c = 1 — every path closed, every domain bounded." },
              ].map((c) => (
                <div key={c.title} className="border border-border p-5">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-teal/30 bg-teal/10">
                    {c.icon}
                  </div>
                  <h3 className="mt-3 text-sm font-semibold">{c.title}</h3>
                  <p className="text-foreground/60 mt-1 text-xs">{c.desc}</p>
                </div>
              ))}
            </div>

            {/* Operation families */}
            <div className="mt-14">
              <p className="text-xs font-medium text-foreground/40">64 CERTIFIED + 64 EXTENDED = 128 OPERATIONS</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="border border-teal/20 bg-teal/[0.03] p-4">
                  <p className="text-xs font-semibold text-teal">64 Core &middot; Coq-proven</p>
                  <p className="text-foreground/70 mt-2 text-xs">The foundation. Pure computation. Mathematically proven correct.</p>
                  <p className="text-foreground/50 mt-1 text-xs">
                    Arithmetic &middot; Logic &middot; Memory &middot; Control &middot; I/O &middot; String &middot; Crypto &middot; System
                  </p>
                </div>
                <div className="border border-foreground/10 p-4">
                  <p className="text-xs font-semibold text-foreground/60">64 Extended &middot; Bounds-checked</p>
                  <p className="text-foreground/50 mt-2 text-xs">The bridge to the real world. Networking, graphics, audio, filesystems. Core proves correctness. Extended connects to reality.</p>
                  <p className="text-foreground/40 mt-1 text-xs">
                    Float64 &middot; Math &middot; Network &middot; Graphics &middot; Audio &middot; Filesystem &middot; Concurrency &middot; Interop
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ━━━ [06] WORKFLOW ━━━ */}
          <section className="border-border border-t px-6 py-16 md:px-12 md:py-24">
            <p className="text-muted-foreground mb-10 text-xs font-medium tracking-[2px]">
              [06] &middot; WORKFLOW
            </p>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Three commands.{" "}
              <span className="text-teal">Verified software.</span>
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  step: "01", title: "Connect", cmd: "$ brikc connect github.com/acme/api",
                  desc: "Link your repo. Auto-lift on every push. PR certification comments. One-click GitHub App.",
                },
                {
                  step: "02", title: "Certify", cmd: "$ brikc check → Φ_c = 1.000 CERTIFIED",
                  desc: "The compiler verifies every circuit. Domain constraints checked. All paths closed. Two tiers: Core + Extended.",
                },
                {
                  step: "03", title: "Publish", cmd: "$ brikc publish validate@1.0.0",
                  desc: "Ship to the registry with an immutable proof. Semantic versioning. Public or private. Badge embedded.",
                },
              ].map((s) => (
                <div key={s.step} className="border border-border p-6">
                  <span className="text-teal/30 font-mono text-2xl font-bold">{s.step}</span>
                  <h3 className="mt-2 text-base font-bold">{s.title}</h3>
                  <code className="mt-3 block text-[11px] text-teal/60">{s.cmd}</code>
                  <p className="text-foreground/60 mt-3 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ━━━ [07] INTEGRATIONS ━━━ */}
          <section className="border-border border-t px-6 py-16 md:px-12 md:py-24">
            <p className="text-muted-foreground mb-10 text-xs font-medium tracking-[2px]">
              [07] &middot; INTEGRATIONS
            </p>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Your code stays in GitHub.{" "}
              <span className="text-teal">BRIK-64 verifies it.</span>
            </h2>

            <p className="text-foreground/60 mt-4 max-w-xl text-sm md:text-base">
              Push as usual. BRIK-64 lifts, verifies, certifies, and comments on your PR — automatically.
              No workflow changes. No new tools to learn.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="rounded bg-foreground/5 px-3 py-1.5">GitHub Repo</span>
              <ArrowRight className="h-3 w-3 text-teal" />
              <span className="rounded bg-teal/10 px-3 py-1.5 text-teal">brikc lift</span>
              <ArrowRight className="h-3 w-3 text-teal" />
              <span className="rounded bg-teal/10 px-3 py-1.5 text-teal">PCD Blueprint</span>
              <ArrowRight className="h-3 w-3 text-teal" />
              <span className="rounded bg-teal/10 px-3 py-1.5 text-teal">brikc build</span>
              <ArrowRight className="h-3 w-3 text-teal" />
              <span className="rounded bg-foreground/5 px-3 py-1.5">Any Language</span>
            </div>
          </section>

          {/* ━━━ [08] EDITORS ━━━ */}
          <section className="border-border border-t px-6 py-16 md:px-12 md:py-24">
            <p className="text-muted-foreground mb-10 text-xs font-medium tracking-[2px]">
              [08] &middot; EDITORS
            </p>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Works where you code.{" "}
              <span className="text-teal">Today.</span>
            </h2>

            <p className="text-foreground/60 mt-4 text-sm md:text-base">
              PCD syntax highlighting. Inline certification status. One-click lift.
              LSP server included.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
              {[
                { name: "VS Code", status: "Available", color: "text-emerald-400 bg-emerald-500/10" },
                { name: "Cursor", status: "Alpha", color: "text-amber-400 bg-amber-500/10" },
                { name: "Windsurf", status: "Planned", color: "text-zinc-400 bg-zinc-500/10" },
                { name: "Zed", status: "Planned", color: "text-zinc-400 bg-zinc-500/10" },
                { name: "IntelliJ", status: "Planned", color: "text-zinc-400 bg-zinc-500/10" },
                { name: "Antigravity", status: "Planned", color: "text-zinc-400 bg-zinc-500/10" },
              ].map((e) => (
                <div key={e.name} className="border border-border p-4">
                  <p className="text-sm font-semibold">{e.name}</p>
                  <span className={`mt-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${e.color}`}>
                    {e.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ━━━ [09] ENTERPRISE ━━━ */}
          <section className="border-border border-t px-6 py-16 md:px-12 md:py-24">
            <p className="text-muted-foreground mb-10 text-xs font-medium tracking-[2px]">
              [09] &middot; ENTERPRISE
            </p>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              When &ldquo;tests pass&rdquo;{" "}
              <span className="text-teal">isn&apos;t enough.</span>
            </h2>

            <p className="text-foreground/60 mt-4 max-w-xl text-sm md:text-base">
              Fintech. Healthcare. Automotive. Government.
              Industries where a bug isn&apos;t a ticket — it&apos;s a catastrophe.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[
                { icon: <GitBranch className="h-4 w-4 text-teal" />, title: "CI/CD gates", desc: "GitHub Actions, GitLab CI, Jenkins. Certification in your pipeline." },
                { icon: <FileCheck className="h-4 w-4 text-teal" />, title: "Compliance evidence", desc: "MiFID II, SOC2, SOX, PCI-DSS, DORA, Basel III. Generated, not documented." },
                { icon: <BadgeCheck className="h-4 w-4 text-teal" />, title: "Certification badges", desc: "Embeddable, verifiable, real-time. Changes one byte? Badge revokes." },
                { icon: <KeyRound className="h-4 w-4 text-teal" />, title: "SSO / SAML", desc: "Enterprise auth out of the box." },
                { icon: <ClipboardList className="h-4 w-4 text-teal" />, title: "Audit trail", desc: "Every certification, every export, every change. Full history." },
                { icon: <Headset className="h-4 w-4 text-teal" />, title: "SLA & support", desc: "99.9% uptime. Dedicated engineer. On-premise option." },
              ].map((c) => (
                <div key={c.title} className="border border-border p-5">
                  {c.icon}
                  <h3 className="mt-2 text-sm font-semibold">{c.title}</h3>
                  <p className="text-foreground/60 mt-1 text-xs">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ━━━ [10] AI-NATIVE ━━━ */}
          <section className="border-border border-t px-6 py-16 md:px-12 md:py-24">
            <p className="text-muted-foreground mb-10 text-xs font-medium tracking-[2px]">
              [10] &middot; AI-NATIVE
            </p>

            <h2 className="max-w-3xl text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              Tell your AI what to build.{" "}
              <span className="bg-gradient-to-r from-teal to-emerald-400 bg-clip-text text-transparent">
                The compiler proves it&apos;s correct.
              </span>
            </h2>

            <p className="text-foreground/60 mt-4 max-w-xl text-sm leading-relaxed md:text-base">
              The AI writes PCD. The compiler verifies. If it fails,{" "}
              <strong className="text-foreground">the error becomes the next prompt.</strong>{" "}
              The AI fixes it.
            </p>

            <p className="mt-4 text-lg font-bold text-teal">
              Repeat until certified.
            </p>

            <p className="text-foreground/40 mt-3 text-sm">
              Works with any LLM — Claude, GPT, Gemini, Llama. The verification is in the compiler, not the model.
            </p>

            {/* Terminal */}
            <div className="mt-8 max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[10px] font-medium tracking-wide text-white/30">brikc ai</span>
              </div>
              <div className="flex flex-col gap-1 p-5 font-mono text-xs">
                <p className="text-white/70"><span className="text-teal">$</span> brikc ai &quot;Build an insulin dose calculator with safety limits&quot;</p>
                <p className="mt-2 text-zinc-400">&nbsp;&nbsp;Generating PCD...</p>
                <p className="mt-1 text-amber-400">&nbsp;&nbsp;&Phi;<sub>c</sub> = 0.82 &mdash; missing case: glucose &lt; 40 mg/dL</p>
                <p className="mt-1 text-zinc-400">&nbsp;&nbsp;Fixing...</p>
                <p className="mt-1 text-emerald-400">&nbsp;&nbsp;&#10003; &Phi;<sub>c</sub> = 1.000 &mdash; 8 domains verified. Overdose impossible.</p>
                <p className="mt-1 text-zinc-400">&nbsp;&nbsp;&#10003; Output: dose_calc.pcd + dose_calc.cert.json</p>
              </div>
            </div>
          </section>

          {/* ━━━ [11] COMPLIANCE ━━━ */}
          <section className="border-border border-t px-6 py-16 md:px-12 md:py-24">
            <p className="text-muted-foreground mb-10 text-xs font-medium tracking-[2px]">
              [11] &middot; COMPLIANCE
            </p>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Compliance evidence.{" "}
              <span className="text-teal">At compile time.</span>
            </h2>

            <p className="text-foreground/60 mt-4 max-w-xl text-sm md:text-base">
              Not &ldquo;SOC2 compliant.&rdquo; SOC2 Processing Integrity evidence — generated automatically
              from your verified code. Auditor-ready. Scope-limited. Honest.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "MiFID II", pct: 40, desc: "Algorithmic trading" },
                { name: "SOC2", pct: 30, desc: "Processing integrity" },
                { name: "SOX", pct: 25, desc: "Internal controls" },
                { name: "PCI-DSS", pct: 15, desc: "Secure development" },
                { name: "DORA", pct: 15, desc: "ICT risk prevention" },
                { name: "Basel III", pct: 10, desc: "Verified calculations" },
              ].map((s) => (
                <div key={s.name} className="border border-border p-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-semibold">{s.name}</span>
                    <span className="text-xs font-medium text-teal">{s.pct}%</span>
                  </div>
                  <p className="text-foreground/40 mt-1 text-xs">{s.desc}</p>
                  <div className="mt-2 h-1 w-full rounded-full bg-border">
                    <div className="h-full rounded-full bg-teal" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ━━━ [12] VERTICALS ━━━ */}
          <section className="border-border border-t px-6 py-16 md:px-12 md:py-24">
            <p className="text-muted-foreground mb-10 text-xs font-medium tracking-[2px]">
              [12] &middot; VERTICALS
            </p>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Industries where a bug{" "}
              <span className="text-teal">can kill.</span>
            </h2>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <Building2 className="h-5 w-5" />, name: "Algorithmic Trading", line: "MiFID II evidence from your algorithms. Not from a consultant.", code: "domain order_value: Range [0.01, 10_000_000.0];", badge: "MiFID II" },
                { icon: <Heart className="h-5 w-5" />, name: "Medical Devices", line: "Overdose is structurally impossible. The domain prevents it.", code: "domain dose: Range [0.0, 25.0];", badge: "IEC 62304" },
                { icon: <Link2 className="h-5 w-5" />, name: "Smart Contracts", line: "Can't be patched after deployment. So bugs can't compile.", code: "domain balance: Range [0, 1_000_000_000];", badge: "WASM" },
                { icon: <Plane className="h-5 w-5" />, name: "Aerospace", line: "Every speed, altitude, and fuel combination has a defined response.", code: "domain altitude: Range [0, 15_000];", badge: "DO-178C" },
                { icon: <Landmark className="h-5 w-5" />, name: "Fintech / Banking", line: "SOX Sec 404 evidence at compile time. The math is the audit.", code: "domain interest_rate: Range [0.0, 0.30];", badge: "SOX" },
                { icon: <Cpu className="h-5 w-5" />, name: "IoT / Embedded", line: "Firmware with zero undefined behavior. Every sensor input bounded.", code: "domain temperature: Range [-40, 80];", badge: "Embedded" },
              ].map((v) => (
                <div key={v.name} className="border border-border p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-teal">{v.icon}</span>
                      <h3 className="text-sm font-semibold">{v.name}</h3>
                    </div>
                    <span className="rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-medium text-teal">{v.badge}</span>
                  </div>
                  <p className="text-foreground/60 mt-2 text-xs">{v.line}</p>
                  <code className="mt-2 block text-[10px] text-teal/50">{v.code}</code>
                </div>
              ))}
            </div>
          </section>

          {/* ━━━ CTA ━━━ */}
          <section className="border-border border-t px-6 py-20 text-center md:px-12 md:py-28">
            <h2 className="mx-auto max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
              Software that works{" "}
              <span className="text-teal">like hardware.</span>
            </h2>

            <p className="text-foreground/60 mx-auto mt-4 max-w-md text-base">
              Free. Works with your existing code. Compiles to 14 languages.
              The compiler proves your software is correct.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://docs.brik64.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-teal px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
              >
                Get started — free
              </a>
              <a
                href="https://digitalcircuitality.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
              >
                Learn Digital Circuitality <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="mx-auto mt-12 flex flex-wrap justify-center gap-8 text-xs text-foreground/30">
              <a href="https://docs.brik64.dev" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Docs</a>
              <a href="https://github.com/brik64" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
              <a href="https://registry.brik64.dev" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Registry</a>
              <a href="https://digitalcircuitality.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Digital Circuitality</a>
              <a href="https://discord.gg/brik64" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Discord</a>
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
