import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import {
  Cpu,
  Shield,
  ArrowUpFromLine,
  Repeat,
  Globe,
  Bot,
  Building2,
  Terminal,
  FileCode,
  Check,
  BadgeCheck,
  GitBranch,
  Layers,
  Zap,
  ArrowRight,
} from "lucide-react";

/* ── Feature sections ── */

const sections = [
  {
    id: "compilation",
    label: "[01] COMPILATION",
    icon: Cpu,
    title: "14 targets from one blueprint",
    description:
      "Write or lift PCD once, compile to JavaScript, TypeScript, Python, Rust, C, C++, Go, COBOL, PHP, Java, Swift, WebAssembly, BIR bytecode, or native x86-64.",
    features: [
      "Hand-written parser with zero dependencies",
      "SSA planner with canonical pipeline form",
      "Self-compilation fixpoint (compiler compiles itself to identical hash)",
      "Auto-generated tests derived from mathematical specification",
      "Cross-backend equivalence: same inputs produce same outputs",
      "Zero runtime dependencies in generated code",
    ],
  },
  {
    id: "verification",
    label: "[02] VERIFICATION",
    icon: Shield,
    title: "Proof, not promises",
    description:
      "The Thermodynamic Coherence Engine (TCE) computes three metrics that must simultaneously reach their target values. If any fails, compilation is rejected.",
    features: [
      "\u03A6_c = 1 \u2014 circuit closure (every branch has complete input \u2192 output path)",
      "\u03B4 = 0 \u2014 signature distance (observed matches expected exactly)",
      "V(C) = 1 \u2014 verification completeness (all paths verified)",
      "207 Coq proofs for the 64 core monomers",
      "Immutable certification hash per function",
      "Embeddable certification badges (green/amber/red)",
    ],
  },
  {
    id: "lifting",
    label: "[03] LIFTING",
    icon: ArrowUpFromLine,
    title: "Reverse-compile any codebase",
    description:
      "Point the Lifter at existing code. It extracts computational essence, identifies pure functions, and generates verified PCD blueprints.",
    features: [
      "10 source languages: JS, TS, TSX/JSX, Python, Rust, C, C++, Go, COBOL, PHP, Java",
      "Purity analysis: separates CORE (pure) from CONTRACT (side effects)",
      "GitHub integration: auto-lift on push",
      "Bundle decompilation: analyze compiled bundles, extract modules",
      "Incremental lifting: process changes, not entire repos",
      "100% liftability: every file produces a blueprint",
    ],
  },
  {
    id: "transpilation",
    label: "[04] TRANSPILATION",
    icon: Repeat,
    title: "140 certified migration paths",
    description:
      "Not a 1-to-1 syntax converter. An N-to-N certified migration engine. 10 input languages \u00D7 14 output targets = 140 paths, all through one verified intermediate representation.",
    features: [
      "Semantic transpilation: extracts what it computes, not how it\u2019s expressed",
      "PCD intermediate representation captures informational content",
      "Algebraic equivalence (not tested)",
      "COBOL \u2192 Go/Rust with mathematical proof of equivalence",
      "Same architectural idea as LLVM, with formal equivalence certification",
      "Cross-platform deployment from a single source",
    ],
  },
  {
    id: "platform",
    label: "[05] PLATFORM",
    icon: Globe,
    title: "Build, share, certify together",
    description:
      "Public and private registries, GitHub integration, IDE plugins, certification dashboard, and API access. npm for verified logic.",
    features: [
      "Public & private PCD registries with semantic versioning",
      "GitHub App: 1-click install, auto-lift on push, PR certification comments",
      "IDE support: VSCode, Cursor, Windsurf, Zed, IntelliJ, Trae (via LSP)",
      "Certification dashboard with immutable hash verification",
      "REST API at registry.brik64.dev",
      "MCP Server for AI agent integration (brik64.discover, brik64.execute)",
    ],
  },
  {
    id: "ai-native",
    label: "[06] AI NATIVE",
    icon: Bot,
    title: "Designed for AI agents",
    description:
      "PCD has exactly 128 operations. An AI model can learn the entire language in minutes and generate certified code with mathematical guarantees.",
    features: [
      "Skills for Claude Code, Codex, Gemini CLI, Grok, OpenCode",
      "MCP server: 2 tools (discover + execute) for direct agent integration",
      "Machine-readable formats: JSON, Markdown, YAML, PCD",
      "Policy circuits: PCD programs that verify AI actions before execution",
      "Data endpoints for all site content (monomers, blog, stats)",
      "AI writes verified circuits, not just code",
    ],
  },
  {
    id: "enterprise",
    label: "[07] ENTERPRISE",
    icon: Building2,
    title: "Built for regulated industries",
    description:
      "Fintech. Healthcare. Automotive. Government. When \u201Ctests pass\u201D isn\u2019t enough.",
    features: [
      "SSO / SAML / OIDC with SCIM provisioning",
      "Compliance reports: SOC2, HIPAA, PCI-DSS, ISO 27001",
      "Audit trail: tamper-proof timestamps, exportable",
      "CI/CD gate plugins: GitHub Actions, GitLab CI, Jenkins",
      "On-premise / self-hosted deployment option",
      "Custom SLA (99.9% uptime) with dedicated support engineer",
    ],
  },
];

/* ── Stats ── */

const stats = [
  { value: "128", label: "Total Operations" },
  { value: "14", label: "Export Targets" },
  { value: "10", label: "Source Languages" },
  { value: "207", label: "Coq Proofs" },
  { value: "3", label: "EVA Operators" },
  { value: "14", label: "Rust Crates" },
  { value: "1", label: "Fixpoint Hash" },
  { value: "\u03A6", label: "Coherence Metric" },
];

/* ── Page ── */

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="border-border mx-auto max-w-7xl border-x px-6 pt-20 pb-16 md:px-12 lg:px-18">
          <span className="text-muted-foreground mb-5 inline-block rounded-full border border-border bg-background/80 px-3.5 py-1 text-xs font-medium tracking-wide">
            Features
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Software that works like <span className="text-teal">hardware.</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
            A language, a compiler, a lifter, a certification engine, and a platform &mdash;
            everything you need to write code that is mathematically proven correct.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-border bg-muted/20 p-4 text-center">
                <div className="text-xl font-bold text-teal">{s.value}</div>
                <div className="mt-1 text-[10px] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Feature sections */}
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18"
          >
            <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
              {section.label}
            </p>
            <div className="flex items-start gap-3">
              <section.icon className="mt-1 h-6 w-6 shrink-0 text-teal" />
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{section.title}</h2>
                <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {section.features.map((f) => (
                <div key={f} className="flex items-start gap-2 rounded-lg border border-border bg-muted/10 p-4">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Ready to build verified software?
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            The CLI is free forever. Install it and certify your first function in under a minute.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/cli"
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              <Terminal className="h-4 w-4" /> Install the CLI
            </a>
            <a
              href="/pricing"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              See pricing <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
