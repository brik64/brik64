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
      "A comprehensive verification pipeline ensures every compiled function meets formal correctness criteria. If verification fails, compilation is rejected.",
    features: [
      "\u03A6_c = 1 \u2014 circuit closure (every branch has complete input \u2192 output path)",
      "Full formal verification across all metrics",
      "Coq proof suite for core monomers",
      "Immutable certification hash per function",
      "Embeddable certification badges (green/amber/red)",
    ],
  },
  {
    id: "domain-constraints",
    label: "[02.5] DOMAIN CONSTRAINTS",
    icon: Shield,
    title: "Types tell you what. Domains tell you where.",
    description:
      "Every variable in PCD declares its valid range. The compiler enforces boundaries at compilation — not at runtime. This is what makes circuit closure achievable. Without domains, circuits cannot close.",
    features: [
      "Division by zero — impossible. Lower bounds exclude zero when needed.",
      "Overflow — impossible. Bounded inputs produce bounded outputs.",
      "NaN and Infinity — impossible. Float64 ranges exclude degenerate values.",
      "Physical violations — impossible. Domains encode real-world constraints.",
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
    title: "Up to 140 migration paths",
    description:
      "Up to 140 migration paths (10 source \u00D7 14 target). Path maturity varies \u2014 see docs for per-path status. All through one verified intermediate representation.",
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
      "PCD is a compact language designed for AI agents. A model can learn it in minutes and generate certified code with structural verification.",
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
      "Processing logic and change control evidence mapped to SOC2 (PI1.x, CC8.1), PCI-DSS (Req 6, 10), HIPAA processing rules, and ISO 27001 change control",
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
      <main className="bg-background">
        {/* Hero */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              Features
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Software that works like <span className="text-[#00b8d4]">hardware.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              A language, a compiler, a lifter, a certification engine, and a platform &mdash;
              everything you need to write code that is structurally verified.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-12 md:px-12 lg:px-18">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="border border-border bg-muted/20 p-4 text-center">
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
            <p className="mb-3 text-center text-xs font-medium tracking-[2px] text-muted-foreground">
              {section.label}
            </p>
            <div className="text-center">
              <section.icon className="mx-auto mb-3 h-6 w-6 text-teal" />
              <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">{section.title}</h2>
              <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-sm leading-relaxed">
                {section.description}
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {section.features.map((f) => (
                <div key={f} className="flex items-start gap-2 border border-border bg-muted/10 p-4">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Ready to build verified software?
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            The CLI is free forever. Install it and certify your first function in under a minute.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/cli"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
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
