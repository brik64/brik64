"use client";

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

import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

/* ── Feature sections ── */

const sections = [
  {
    id: "compilation",
    label: "[01] COMPILATION",
    icon: Cpu,
    title: "One blueprint. 14 targets. Zero runtime dependencies.",
    description:
      "Your PCD source enters a hand-written parser with zero external dependencies. The parser produces an AST. The SSA planner transforms it into Static Single Assignment form with full type checking. The result is Canonical Pipeline Form \u2014 a normalized IR that feeds 14 independent backends: Rust, JavaScript, TypeScript, Python, C, C++, Go, COBOL, PHP, Java, Swift, WebAssembly, BIR bytecode, and native x86-64 ELF binaries. And here\u2019s the kicker: the compiler compiles itself. Feed the compiler\u2019s own source code into itself, and it produces a byte-identical binary. Same hash. Every time. That\u2019s not a test \u2014 that\u2019s a mathematical fixpoint. The ultimate proof that the compiler is correct.",
    features: [
      "Hand-written recursive descent parser \u2014 zero crate dependencies, zero npm packages, zero pip installs. The parser IS the dependency.",
      "SSA planner with canonical pipeline form \u2014 every variable assigned exactly once, every data flow explicit, every optimization provably safe",
      "Self-compilation fixpoint \u2014 the compiler compiles its own 14-crate source code and produces a byte-identical binary. Same SHA-256 hash. The compiler IS its own proof of correctness.",
      "110,000+ auto-generated tests derived from the mathematical specification \u2014 not written by hand, generated from the algebra itself",
      "Cross-backend equivalence \u2014 run the same PCD on Rust, JavaScript, and Python. Feed identical inputs. Get identical outputs. Mathematically guaranteed, not just tested.",
      "Zero runtime dependencies in generated code \u2014 the output is self-contained. No SDK, no runtime library, no phone-home. Just your logic, compiled.",
    ],
  },
  {
    id: "verification",
    label: "[02] VERIFICATION",
    icon: Shield,
    title: "The compiler doesn\u2019t just check syntax. It proves correctness.",
    description:
      "Every program is a circuit. And every circuit must close. \u03A6_c = 1 means: every input is consumed. Every output is produced. Every conditional branch terminates. No dangling references. No undefined states. No paths that lead to nowhere. The circuit is closed \u2014 like an electrical circuit where every wire connects. If even one path is open, one input is unused, one output is missing \u2014 the compiler rejects the program. Not at runtime. Not in production. At compilation. Before a single line of generated code exists.",
    features: [
      "\u03A6_c = 1 \u2014 circuit closure. Every input consumed, every output produced, every conditional branch terminated. One open path = compilation rejected.",
      "207 Coq proofs for all 64 core monomers \u2014 not test assertions, machine-checked mathematical theorems verified by an independent proof assistant",
      "Domain completeness analysis \u2014 the compiler proves that your declared ranges cover every possible execution path, leaving zero room for undefined behavior",
      "Immutable certification hash per function \u2014 a SHA-256 fingerprint of the verified circuit. Changes one character? Different hash. Tamper-proof by construction.",
      "Embeddable certification badges (green/amber/red) \u2014 green means \u03A6_c = 1, amber means CONTRACT-tier extended monomers, red means open circuit. Visible proof for every stakeholder.",
    ],
  },
  {
    id: "domain-constraints",
    label: "[02.5] DOMAIN CONSTRAINTS",
    icon: Shield,
    title: "The most important feature in programming that nobody has.",
    description:
      "In Python, a function takes int \u2014 any integer. Could be 0. Could be negative. Could be 2^63. You don\u2019t know until runtime. In PCD, it takes Range[0, 900]. The compiler KNOWS the valid range at compilation time. This changes everything. Division by zero? The divisor\u2019s domain is Range[-1e15, -1e-10] | Range[1e-10, 1e15] \u2014 zero is structurally excluded. The compiler doesn\u2019t check for it. It\u2019s impossible. Overflow? If your inputs are bounded to Range[-1000, 1000], then addition produces at most 2000. Proven at compile time. NaN? Your Float64 domains exclude degenerate values by construction. No runtime check needed. Domains are the reason circuits can close. Without them, you\u2019re just guessing.",
    features: [
      "Division by zero \u2014 impossible. Declare domain divisor: Range[1, 100] and the compiler proves zero can never reach the division operation. Not a runtime check. A compile-time guarantee.",
      "Integer overflow \u2014 impossible. Range[-1000, 1000] inputs to addition produce Range[-2000, 2000] outputs. The compiler propagates bounds through every operation algebraically.",
      "NaN and Infinity \u2014 impossible. Float64 domains like Range[0.01, 1e6] exclude 0.0, negative values, and degenerate IEEE 754 states. Clean math, guaranteed.",
      "Real-world constraint encoding \u2014 domain speed: Range[0, 900] for km/h. domain temperature: Range[-273.15, 1e8] for Kelvin. domain probability: Range[0.0, 1.0]. Your physics, your business rules, enforced by the compiler.",
    ],
  },
  {
    id: "lifting",
    label: "[03] LIFTING",
    icon: ArrowUpFromLine,
    title: "Already have code? Don\u2019t rewrite it. Verify it.",
    description:
      "The Lifter takes your existing JavaScript, Python, Rust, C, C++, Go, TypeScript, TSX, JSX, PHP, Java \u2014 even COBOL \u2014 and extracts the computational essence into PCD. No manual rewriting. Point it at a function, and the Lifter identifies the pure computation, maps variables to domain constraints, and generates a verified blueprint. It separates CORE logic (\u03A6_c = 1, pure functions) from CONTRACT logic (I/O, side effects, network calls). 515 test cases across 10 languages. Every lifted circuit is immediately certifiable.",
    features: [
      "10 source languages \u2014 JavaScript, TypeScript, TSX/JSX, Python, Rust, C, C++, Go, COBOL, PHP, Java. If your company wrote it, the Lifter reads it.",
      "Purity analysis \u2014 automatically separates CORE (pure computation, \u03A6_c = 1) from CONTRACT (database calls, file I/O, HTTP requests). Pure logic gets full certification. Side effects get contract-level tracking.",
      "GitHub integration \u2014 install the GitHub App, and every push triggers auto-lifting. Changed files become PCD blueprints. No manual step. No developer workflow change.",
      "Bundle decompilation \u2014 point the Lifter at a compiled webpack/esbuild bundle and it reverse-engineers the module boundaries, extracts individual functions, and lifts each one independently.",
      "Incremental lifting \u2014 on subsequent pushes, only changed files are re-lifted. The Lifter tracks diffs, not entire repositories. Minutes for a PR, not hours for a monorepo.",
      "100% liftability guarantee \u2014 every file produces a blueprint. Functions that can\u2019t be fully certified still generate CONTRACT-tier PCD with explicit annotations on what remains unverified.",
    ],
  },
  {
    id: "transpilation",
    label: "[04] TRANSPILATION",
    icon: Repeat,
    title: "The Universal Translator for code.",
    description:
      "10 languages in. 14 targets out. That\u2019s up to 140 migration paths \u2014 and every single one goes through PCD, a formally verified intermediate representation. This is not text manipulation. This is not regex find-and-replace. This is semantic transpilation: the Lifter extracts WHAT your code computes, PCD captures it as a mathematical circuit, and the backend emits it in the idioms of the target language. The equivalence isn\u2019t tested \u2014 it\u2019s algebraic. COBOL to Rust with mathematical proof that they compute the same thing. Python to Go with certification that every edge case is preserved. The N\u00B2 transpiler problem, solved by a single hub.",
    features: [
      "Semantic transpilation \u2014 extracts what the code computes, not how the source language expresses it. A Python list comprehension and a Rust iterator produce identical PCD circuits.",
      "PCD as universal hub \u2014 like LLVM IR, but with formal equivalence certification. Every transformation through PCD preserves the mathematical structure of the computation, not just the behavior on test cases.",
      "Algebraic equivalence proof \u2014 source and target are provably equivalent through EVA algebra composition laws. Not \u2018tests pass on the same inputs\u2019 \u2014 algebraically identical for ALL possible inputs.",
      "COBOL to Rust/Go/Java \u2014 with mathematical proof of equivalence. WORKING-STORAGE becomes domain constraints. PERFORM loops become circuit compositions. 40 years of battle-tested logic, preserved exactly.",
      "Architecture inspired by LLVM \u2014 same hub-and-spoke design, but LLVM optimizes machine code. BRIK64 certifies semantic equivalence. Different goal, same elegance.",
      "Cross-platform deployment from a single source \u2014 write once in any language, lift to PCD, emit to every platform your organization needs. One truth, many deployments.",
    ],
  },
  {
    id: "platform",
    label: "[05] PLATFORM",
    icon: Globe,
    title: "CAD for software. Not another IDE.",
    description:
      "Think of it like designing a circuit board \u2014 but for software logic. Publish your certified circuits to the registry. Discover pre-certified components built by others. Compose them visually: drag a tax calculator onto a payroll pipeline, connect the outputs, and the EVA algebra verifies the composition in real time. Every connection is type-checked, domain-checked, and closure-verified before you save. This isn\u2019t npm where you hope your dependencies work. Every package in the registry carries a certification hash. Every composition is algebraically verified.",
    features: [
      "Public & private PCD registries with semantic versioning \u2014 publish certified circuits like npm packages, but every version carries an immutable certification hash. No uncertified code in the registry. Ever.",
      "GitHub App \u2014 one-click install, auto-lift on every push, certification report posted as a PR comment. Your existing workflow unchanged. Mathematical proof added automatically.",
      "IDE support for VSCode, Cursor, Windsurf, Zed, IntelliJ, and Trae \u2014 all via a single LSP server. Inline certification status, domain hover tooltips, real-time \u03A6_c feedback as you type.",
      "Certification dashboard \u2014 a single pane of glass showing every circuit in your organization, its certification status, its hash history, and its dependency graph. SOC2 auditors love this.",
      "REST API at registry.brik64.dev \u2014 programmatic access to search, publish, verify, and compose circuits. Build your own tooling on top of the verification engine.",
      "MCP Server with 2 tools (brik64.discover + brik64.execute) \u2014 any AI agent that speaks Model Context Protocol can search the registry, compile PCD, and get certification results. The platform speaks AI natively.",
    ],
  },
  {
    id: "ai-native",
    label: "[06] AI NATIVE",
    icon: Bot,
    title: "Tell your AI what to build. The compiler proves it\u2019s correct.",
    description:
      "PCD has 128 operations. That\u2019s it. Not thousands of standard library functions. Not infinite combinations of syntax. 128 formally verified atomic operations that compose through 3 algebraic operators. An LLM memorizes the entire language specification in a single context window. The AI writes PCD. The compiler verifies it. If \u03A6_c \u2260 1, the error message becomes the next prompt. The AI fixes it. Repeat until certified. This loop works with ANY LLM \u2014 Claude, GPT, Gemini, Grok, Llama, Mistral. The verification is external to the model. The model doesn\u2019t need to be trustworthy. The compiler is.",
    features: [
      "Ready-made skills for Claude Code, Codex, Gemini CLI, Grok, and OpenCode \u2014 drop-in skill files that teach any agent the full PCD specification, monomer catalog, and compilation workflow in one prompt.",
      "MCP server with 2 tools (discover + execute) \u2014 any MCP-compatible agent can search the registry for existing circuits and compile new PCD in a single function call. Zero integration code.",
      "Machine-readable output in JSON, Markdown, YAML, and PCD \u2014 every API response is structured for programmatic consumption. AI agents parse results, not HTML.",
      "Policy circuits \u2014 PCD programs that define mathematical boundaries for what AI agents can do. The AI generates, the policy circuit constrains. Guardrails that can\u2019t be prompt-injected away.",
      "Data endpoints for monomers, blog posts, and platform statistics \u2014 AI agents can query the full knowledge base of BRIK64 programmatically. Self-documenting infrastructure.",
      "The AI writes verified circuits, not just code \u2014 the output isn\u2019t \u2018code that might work.\u2019 It\u2019s a certified computation with a mathematical proof. The AI becomes a circuit designer, not a code monkey.",
    ],
  },
  {
    id: "enterprise",
    label: "[07] ENTERPRISE",
    icon: Building2,
    title: "When \u2018tests pass\u2019 isn\u2019t enough.",
    description:
      "Fintech where a rounding error moves millions. Healthcare where a logic bug delays a diagnosis. Automotive where an edge case kills. Government where an audit failure shuts down a program. These industries don\u2019t need better testing frameworks. They need mathematical proof that the code is correct. BRIK64 gives them that proof \u2014 plus the compliance infrastructure to satisfy every auditor, every regulator, every board member who asks \u2018how do you know this works?\u2019",
    features: [
      "SSO / SAML / OIDC with SCIM provisioning \u2014 your identity provider, your directory, your access policies. One-click integration with Okta, Azure AD, Google Workspace. Zero new credentials for your team.",
      "Compliance evidence mapped to 6 standards \u2014 SOC2 (PI1.x, CC8.1), PCI-DSS (Req 6, 10), HIPAA processing rules, ISO 27001 change control, FDA 21 CFR Part 11, and NIST 800-53. Each certification generates audit-ready artifacts automatically.",
      "Tamper-proof audit trail \u2014 every compilation, every certification, every deployment timestamped with immutable hashes. Exportable as JSON, CSV, or PDF. Your auditors get machine-readable proof, not screenshots.",
      "CI/CD gate plugins for GitHub Actions, GitLab CI, and Jenkins \u2014 add BRIK64 as a required status check. Uncertified code physically cannot merge. The merge button stays gray until the math says yes.",
      "On-premise / self-hosted deployment \u2014 the compiler runs entirely on your infrastructure. No data leaves your network. Air-gapped environments supported. Your code never touches our servers.",
      "Custom SLA (99.9% uptime) with a dedicated support engineer \u2014 not a chatbot. A human who knows your deployment, your domain constraints, your compliance requirements. 4-hour response time on critical issues.",
    ],
  },
];

/* ── Stats ── */

const stats = [
  { value: "128", label: "Total Operations" },
  { value: "14", label: "Export Targets" },
  { value: "10", label: "Source Languages" },
  { value: "207", label: "Mathematical Proofs" },
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
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        {/* Hero */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white relative overflow-hidden">
          <HeroWireframe />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              Features
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              This is what shipping <span className="text-[#00b8d4]">looks like.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              A compiler that proves correctness. A lifter that reads 10 languages. 128 verified operations
              composed through 3 algebraic operators. 14 export targets. One self-compiling fixpoint.
              And a platform that turns all of it into a workflow. Free CLI. Install it now. Certify your first function in 30 seconds.
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
            Stop debugging. Start proving.
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            The CLI is free forever. One install. One command. Your first mathematically certified function in 30 seconds. Ship code that never needs debugging because the bugs were impossible from the start.
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
      </div>

      </main>
      <div className="relative z-10">

        <Footer />

      </div>
    </>
  );
}
