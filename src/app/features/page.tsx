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
      "We built the parser by hand. No dependencies. No generated code. No third-party anything. Your PCD enters a recursive descent parser we wrote from scratch, transforms into SSA form with full type checking, and compiles to Canonical Pipeline Form \u2014 a single IR that feeds 14 backends. Rust. JavaScript. Python. C. C++. Go. Swift. WebAssembly. Native x86-64 ELF. All of them. From one source file. But here\u2019s the thing that changed everything for us: we fed the compiler its own source code. And it produced a byte-identical binary. Same SHA-256 hash. Every single time. That\u2019s called a fixpoint. And it means the compiler is mathematically proving its own correctness. No other compiler on earth does this.",
    features: [
      "Hand-written recursive descent parser \u2014 zero crate dependencies, zero npm packages, zero pip installs. We don\u2019t depend on anyone. The parser IS the product.",
      "SSA planner with canonical pipeline form \u2014 every variable assigned exactly once, every data flow explicit, every optimization provably safe. This is how hardware engineers think. Now software works the same way.",
      "Self-compilation fixpoint \u2014 the compiler compiles its own 14-crate source code and produces a byte-identical binary. Same SHA-256 hash. This isn\u2019t a test. It\u2019s a mathematical proof that the compiler is correct. And it runs every single build.",
      "110,000+ tests generated from the algebra itself \u2014 not written by hand. Derived from the mathematical specification. The spec doesn\u2019t just describe the system. It generates the tests.",
      "Cross-backend equivalence \u2014 run the same PCD on Rust, JavaScript, and Python. Feed identical inputs. Get identical outputs. Not \u2018probably the same.\u2019 Mathematically identical. Guaranteed.",
      "Zero runtime dependencies in generated code \u2014 no SDK, no runtime library, no phone-home, no framework. The output is self-contained. Just your logic. Compiled. Done.",
    ],
  },
  {
    id: "verification",
    label: "[02] VERIFICATION",
    icon: Shield,
    title: "The compiler doesn\u2019t check syntax. It proves correctness.",
    description:
      "Here\u2019s the idea. Every program is a circuit. Every circuit must close. We call this \u03A6_c = 1. It means something very specific: every input is consumed. Every output is produced. Every branch terminates. No dangling references. No undefined states. No paths to nowhere. Think of it like an electrical circuit \u2014 if one wire is disconnected, nothing works. We applied that principle to software. If even one input goes unused, one output is missing, one path stays open \u2014 the program does not compile. Not a warning. Not a lint error. It does not compile. Period. You find out at your desk, not in production at 3 AM.",
    features: [
      "\u03A6_c = 1 \u2014 circuit closure. Every input consumed, every output produced, every conditional branch terminated. One open wire = program rejected. Before a single line of code is generated.",
      "207 mathematically certified proofs for all 64 core monomers \u2014 not unit tests. Not assertions. Machine-checked mathematical theorems verified by an independent proof assistant. This is certainty, not confidence.",
      "Domain completeness analysis \u2014 the compiler proves your declared ranges cover every possible execution path. Not most paths. Every path. Zero room for undefined behavior.",
      "Immutable certification hash per function \u2014 a SHA-256 fingerprint of the verified circuit. Change one character, get a different hash. Tamper-proof by construction. Trust that travels with the code.",
      "Certification badges you can embed anywhere \u2014 green means \u03A6_c = 1, amber means CONTRACT-tier with extended monomers, red means open circuit. Your stakeholders see proof, not promises.",
    ],
  },
  {
    id: "domain-constraints",
    label: "[02.5] DOMAIN CONSTRAINTS",
    icon: Shield,
    title: "The most important feature in programming that nobody has.",
    description:
      "This is the one that blows people\u2019s minds. In Python, a function takes int. Any integer. Could be zero. Could be negative. Could be astronomical. You won\u2019t know until it explodes at runtime. In PCD, you write Range[0, 900]. And the compiler KNOWS. At compile time. Not at runtime. Not in a test. At the moment you write it. Now watch what happens. Division by zero? The divisor\u2019s domain excludes zero structurally. The compiler doesn\u2019t check for it. It\u2019s impossible. Overflow? Your inputs are bounded. The compiler propagates those bounds through every operation. Algebraically. NaN? Your Float64 domains exclude degenerate values by construction. We didn\u2019t add a feature. We removed entire categories of bugs from existence.",
    features: [
      "Division by zero \u2014 impossible. Not caught. Not handled. Impossible. Declare domain divisor: Range[1, 100] and zero can never reach the division. A compile-time guarantee, not a runtime prayer.",
      "Integer overflow \u2014 impossible. Range[-1000, 1000] inputs to addition produce Range[-2000, 2000] outputs. The compiler propagates bounds algebraically through every single operation in the circuit.",
      "NaN and Infinity \u2014 impossible. Float64 domains like Range[0.01, 1e6] structurally exclude 0.0, negatives, and every degenerate IEEE 754 state. Clean math. Guaranteed. Always.",
      "Real-world physics encoded as types \u2014 domain speed: Range[0, 900] for km/h. domain temperature: Range[-273.15, 1e8] for Kelvin. domain probability: Range[0.0, 1.0]. Your business rules become compiler rules. Violations become compilation errors.",
    ],
  },
  {
    id: "lifting",
    label: "[03] LIFTING",
    icon: ArrowUpFromLine,
    title: "Already have code? Don\u2019t rewrite it. Verify it.",
    description:
      "You\u2019ve got millions of lines of JavaScript. Python. Rust. C++. Maybe even COBOL. We\u2019re not going to ask you to throw that away. The Lifter reads your existing code \u2014 10 languages, 515 test cases \u2014 and extracts the computational essence into PCD. Point it at a function. The Lifter identifies the pure computation, maps variables to domain constraints, and generates a verified blueprint. Automatically. It separates what\u2019s pure (\u03A6_c = 1, certifiable) from what has side effects (I/O, network, database). The pure part gets mathematical proof. The rest gets tracked. Every lifted circuit is immediately certifiable. Your legacy code just became verifiable code.",
    features: [
      "10 source languages \u2014 JavaScript, TypeScript, TSX/JSX, Python, Rust, C, C++, Go, COBOL, PHP, Java. Whatever your team wrote over the last 20 years, the Lifter reads it.",
      "Automatic purity analysis \u2014 separates CORE (pure computation, \u03A6_c = 1) from CONTRACT (database calls, file I/O, HTTP requests). Pure logic gets full mathematical certification. Side effects get contract-level tracking. No manual annotation required.",
      "GitHub integration \u2014 install the GitHub App, and every push triggers auto-lifting. Changed files become certified blueprints. No new workflow. No developer friction. It just works.",
      "Bundle decompilation \u2014 point the Lifter at a compiled webpack or esbuild bundle. It reverse-engineers module boundaries, extracts individual functions, and lifts each one independently. Even your build artifacts are verifiable.",
      "Incremental lifting \u2014 only changed files are re-lifted on subsequent pushes. Minutes for a PR, not hours for a monorepo. The Lifter tracks diffs, not entire repositories.",
      "100% liftability guarantee \u2014 every single file produces a blueprint. Functions that can\u2019t be fully certified still generate CONTRACT-tier PCD with explicit annotations on what remains unverified. Nothing is left behind.",
    ],
  },
  {
    id: "transpilation",
    label: "[04] TRANSPILATION",
    icon: Repeat,
    title: "The universal translator for code.",
    description:
      "10 languages in. 14 targets out. That\u2019s 140 migration paths. And every single one goes through PCD \u2014 a mathematically certified intermediate representation. This is not find-and-replace. This is not regex. This is semantic transpilation. The Lifter extracts WHAT your code computes. PCD captures it as a mathematical circuit. The backend emits it in the idioms of the target language. And the equivalence isn\u2019t tested on sample inputs \u2014 it\u2019s algebraic. Proven for ALL inputs. COBOL to Rust with mathematical proof they compute the same thing. Python to Go with certification that every edge case is preserved. The N\u00B2 transpiler problem that the entire industry has struggled with for decades \u2014 we solved it with a single hub.",
    features: [
      "Semantic transpilation \u2014 extracts what the code computes, not how the language expresses it. A Python list comprehension and a Rust iterator produce identical PCD circuits. The meaning is preserved. The syntax is irrelevant.",
      "PCD as universal hub \u2014 like LLVM IR, but with formal equivalence certification. Every transformation preserves the mathematical structure of the computation. Not just behavior on test cases. The actual mathematics.",
      "Algebraic equivalence proof \u2014 source and target are provably equivalent through EVA algebra composition laws. Not \u2018tests pass on the same inputs.\u2019 Algebraically identical. For ALL possible inputs. Forever.",
      "COBOL to Rust with proof \u2014 WORKING-STORAGE becomes domain constraints. PERFORM loops become circuit compositions. 40 years of battle-tested logic, preserved with mathematical certainty. Not a single edge case lost.",
      "Architecture inspired by LLVM \u2014 same hub-and-spoke elegance. But LLVM optimizes machine code. BRIK64 certifies semantic equivalence. Different goal. Higher standard.",
      "Write anywhere, deploy everywhere \u2014 write in any language, lift to PCD, emit to every platform your organization needs. One mathematical truth. Many deployments. Zero drift.",
    ],
  },
  {
    id: "platform",
    label: "[05] PLATFORM",
    icon: Globe,
    title: "CAD for software. Not another IDE.",
    description:
      "We looked at how hardware engineers work \u2014 they compose verified components on a schematic, and the design tool checks every connection in real time. We built that for software. Publish certified circuits to the registry. Discover pre-certified components built by others. Compose them visually: drag a tax calculator onto a payroll pipeline, connect the outputs, and EVA algebra verifies the composition before you save. Every connection is type-checked, domain-checked, and closure-verified. This isn\u2019t npm where you cross your fingers and hope. Every package carries a certification hash. Every composition is algebraically verified. This is what software engineering was always supposed to look like.",
    features: [
      "Public and private PCD registries \u2014 publish certified circuits like npm packages, but every version carries an immutable certification hash. Uncertified code does not enter the registry. Period.",
      "GitHub App \u2014 one-click install, auto-lift on every push, certification report posted as a PR comment. Your existing workflow, unchanged. Mathematical proof, added automatically.",
      "IDE support for VSCode, Cursor, Windsurf, Zed, IntelliJ, and Trae \u2014 all through a single LSP server. Inline certification status, domain hover tooltips, real-time \u03A6_c feedback as you type. The proof follows you everywhere.",
      "Certification dashboard \u2014 one screen showing every circuit in your organization, its certification status, its hash history, its dependency graph. When the SOC2 auditor walks in, you pull up one page.",
      "REST API at registry.brik64.dev \u2014 programmatic access to search, publish, verify, and compose circuits. Build your own tooling on top of the verification engine. We give you the primitives.",
      "MCP Server with 2 tools \u2014 any AI agent that speaks Model Context Protocol can search the registry, compile PCD, and get certification results in a single call. The platform speaks AI natively.",
    ],
  },
  {
    id: "ai-native",
    label: "[06] AI NATIVE",
    icon: Bot,
    title: "Tell your AI what to build. The compiler proves it\u2019s correct.",
    description:
      "Here\u2019s why this matters so much right now. PCD has 128 operations. That\u2019s it. Not thousands of library functions. Not infinite syntax combinations. 128 verified atomic operations composed through 3 algebraic operators. An LLM memorizes the entire language in a single prompt. The AI writes PCD. The compiler verifies it. If \u03A6_c \u2260 1, the error message becomes the next prompt. The AI fixes it. Loop until certified. And here\u2019s the breakthrough: this works with ANY LLM. Claude, GPT, Gemini, Grok, Llama, Mistral \u2014 it doesn\u2019t matter. Because the verification is external to the model. The model doesn\u2019t need to be trustworthy. The compiler is. We just made every AI on earth a verified software engineer.",
    features: [
      "Ready-made skills for Claude Code, Codex, Gemini CLI, Grok, and OpenCode \u2014 drop-in files that teach any agent the full PCD specification, all 128 monomers, and the compilation workflow. One prompt. Full capability.",
      "MCP server with 2 tools \u2014 any MCP-compatible agent can search the registry and compile new PCD in a single function call. Zero integration code. Zero configuration. It just works.",
      "Machine-readable output in JSON, Markdown, YAML, and PCD \u2014 every API response is structured for programmatic consumption. AI agents parse structured data, not HTML soup.",
      "Policy circuits \u2014 PCD programs that define mathematical boundaries for AI actions. The AI generates. The policy circuit constrains. These guardrails can\u2019t be prompt-injected away because they\u2019re not prompts. They\u2019re math.",
      "Full knowledge base via API \u2014 monomers, blog posts, platform statistics, all queryable programmatically. AI agents don\u2019t read docs. They call endpoints. Self-documenting by construction.",
      "The AI writes verified circuits, not just code \u2014 the output isn\u2019t \u2018code that might work.\u2019 It\u2019s a certified computation with a mathematical proof attached. The AI becomes a circuit designer. Not a code monkey.",
    ],
  },
  {
    id: "enterprise",
    label: "[07] ENTERPRISE",
    icon: Building2,
    title: "When \u2018tests pass\u2019 isn\u2019t enough.",
    description:
      "Let\u2019s talk about the industries where software failure isn\u2019t an inconvenience \u2014 it\u2019s a catastrophe. Fintech where a rounding error moves millions. Healthcare where a logic bug delays a diagnosis. Automotive where an unhandled edge case kills. Government where an audit failure shuts down an entire program. These organizations don\u2019t need better testing frameworks. They need mathematical proof. BRIK64 gives them that proof \u2014 and the compliance infrastructure to satisfy every auditor, every regulator, every board member who asks the only question that matters: \u2018How do you KNOW this works?\u2019",
    features: [
      "SSO / SAML / OIDC with SCIM provisioning \u2014 your identity provider, your directory, your policies. Okta, Azure AD, Google Workspace \u2014 one click. Zero new credentials for your team to manage.",
      "Compliance evidence for 6 standards out of the box \u2014 SOC2, PCI-DSS, HIPAA, ISO 27001, FDA 21 CFR Part 11, NIST 800-53. Each certification generates audit-ready artifacts automatically. Your compliance team will think it\u2019s magic.",
      "Tamper-proof audit trail \u2014 every compilation, certification, and deployment timestamped with immutable hashes. Exportable as JSON, CSV, or PDF. Your auditors get machine-readable mathematical proof. Not screenshots.",
      "CI/CD gates for GitHub Actions, GitLab CI, and Jenkins \u2014 BRIK64 becomes a required status check. Uncertified code cannot merge. The button stays gray until the math says yes. No exceptions. No overrides.",
      "On-premise deployment \u2014 the compiler runs entirely on your infrastructure. No data leaves your network. Air-gapped environments fully supported. Your code never touches our servers. Ever.",
      "Dedicated support with 99.9% SLA \u2014 not a chatbot. A human engineer who knows your deployment, your domains, your compliance requirements. Four-hour response on critical issues. Because when the stakes are this high, you deserve a person.",
    ],
  },
];

/* ── Stats ── */

const stats = [
  { value: "128", label: "Certified Operations" },
  { value: "14", label: "Export Targets" },
  { value: "10", label: "Source Languages" },
  { value: "207", label: "Mathematical Proofs" },
  { value: "110K+", label: "Generated Tests" },
  { value: "140", label: "Migration Paths" },
  { value: "1", label: "Fixpoint Hash" },
  { value: "\u03A6=1", label: "Circuit Closure" },
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
              Software that works like <span className="text-[#00b8d4]">hardware.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              A compiler that doesn't check your code — it proves it correct. 128 mathematically certified operations. 14 export targets. 10 source languages. A self-compiling fixpoint that produces the same hash every time. And a platform that turns mathematical proof into a developer workflow. The CLI is free. Install it now. Your first certified function ships in 30 seconds.
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
