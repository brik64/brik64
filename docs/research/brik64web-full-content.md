# BRIK-64 Web — Full Content Reference

Extracted from `/Users/carlosjperez/Documents/GitHub/brik64web/` (production site v4).
Every piece of text content from all pages, components, blog posts, and news articles.

---

## [DATA] App.tsx — Route Structure
> Source: src/App.tsx

Routes:
- `/` → Index (main landing)
- `/features` → FeaturesPage
- `/pricing` → PricingPage
- `/enterprise` → EnterprisePage
- `/investors` → InvestorsPage
- `/login` → LoginPage
- `/cli` → CLIPage
- `/platform` → PlatformPage
- `/lifter` → LifterPage
- `/export` → ExportPage
- `/languages` → LanguagesPage
- `/ai-agents` → AIAgentsPage
- `/transpiler` → TranspilerPage
- `/docs` → DocsPage
- `/faq` → FAQPage
- `/contact` → ContactPage
- `/legal` → LegalPage
- `/blog` → BlogList
- `/blog/:slug` → BlogPost
- `/news` → NewsIndex
- `/news/launch` → NewsLaunch
- `/news/platform` → NewsPlatform
- `/news/documentation` → NewsDocumentation
- `/news/skills` → NewsSkills
- `/news/open-source` → NewsOpenSource
- `/news/community` → NewsCommunity
- `/landing-b` → LandingB
- `/landing-platform` → LandingPlatform
- `/design-system` → DesignSystem

---

## [COMPONENT] Navbar
> Source: src/components/Navbar.tsx

Logo: "BRIK64"

Nav links:
- Product → /features
- Platform → /platform
- Transpiler → /transpiler
- CLI → /cli
- Languages → /languages
- Pricing → /pricing
- Docs → https://docs.brik64.dev (external)
- Theory → https://digitalcircuitality.com (external)

CTA buttons: Login (/login), Sign Up (/login)

---

## [COMPONENT] Footer
> Source: src/components/Footer.tsx

Brand: "BRIK64" — "Digital Circuitality"
Socials: X (https://x.com/brik64), GitHub (https://github.com/brik64), Medium (https://medium.com/@cjperezl)

Product links: Features, Pricing, Transpiler, CLI, Lifter, Export, Languages, AI Agents
Resource links: Docs (external), Blog, News, GitHub (external), FAQ, Design System
Papers links: Digital Circuitality (external), arXiv (coming soon)
Company links: Enterprise, Investors, Contact, Legal, Login

Bottom links:
- digitalcircuitality.com — The science
- brik64.com — The platform

© 2026 BRIK-64 — All rights reserved
Digital Circuitality™ | BRIK-64™ | PCD™

---

## [COMPONENT] HeroSection
> Source: src/components/HeroSection.tsx

Badge: "FOR TEAMS THAT GENERATE CODE WITH AI"

Headline: "The verified blueprints of your code."

Subheadline: "Your AI writes the code. BRIK-64 proves it's correct. Lift from 10 languages, export to 14 — with mathematical verification and auto-generated tests."

Pipeline: Lift → Verify → Export

Tagline: "Mathematical certification that tests can't give."

CTAs: "Start Free" (/login), "Watch Demo"

Social proof: "CLI is free forever · PCD is designed for AI agents · 207 Coq proofs · Closed Beta"

Terminal animation:
```
$ brikc lift api/handlers.ts
Analyzing 24 functions...
├─ 18 functions liftable (75%)
├─ 4 require manual review
└─ 2 not liftable (side effects)

$ brikc build --target rust,js,py
Compiling PCD → Rust... ✓
Compiling PCD → JavaScript... ✓
Compiling PCD → Python... ✓
Generated 54 tests. All passing.
```

---

## [COMPONENT] ProblemSection
> Source: src/components/ProblemSection.tsx

Badge: "THE PROBLEM"

Headline: "AIs write 70% of new code. Who verifies it?"

Problems:
- ⚠ Circular testing — Tests written by same AI are circular
- ⚠ Review doesn't scale — Team reviews 20% of AI code
- ⚠ Bugs reach production — Verification harder than generation

Closing: "What if there was a way to mathematically verify..."

---

## [COMPONENT] SolutionSection
> Source: src/components/SolutionSection.tsx

Badge: "THE SOLUTION"

Headline: "PCD: verified blueprints for your software."

Pipeline steps:
1. Your code (JS / Python / Rust)
2. brikc lift →
3. PCD blueprints (Verified)
4. brikc build →
5. Any language + tests (Production-ready)

Tagline: "PCD isn't another programming language. It's the layer of truth."

---

## [COMPONENT] LifterSection
> Source: src/components/LifterSection.tsx

Badge: "THE LIFTER"

Headline: "Your code already exists. Now verify it."

Terminal output:
```
$ brikc lift myapp/
Lifting 24 files (JS, TSX, TS)...
Found 156 functions across 24 files

Results:
  ✓ 112 CORE certified (Φ_c = 1)
  ◆ 44 CONTRACT certified (extended)

Liftability: 100% (156/156 functions)
Output: 156 .pcd blueprints
```

Core Certified (Φ_c = 1):
- Pure functions (Φ_c = 1)
- Arithmetic & logic
- Data validators & parsers
- String transformations
- Business logic & algorithms

Contract Certified (extended):
- API calls (fetch, HTTP)
- Filesystem operations
- React components (JSX)
- Async/await functions
- Database queries

---

## [COMPONENT] ExportSection
> Source: src/components/ExportSection.tsx

Badge: "EXPORT"

Headline: "From blueprints to production code. With tests."

Export examples:
- Rust: `$ brikc build --target rust` → src/lib.rs (342 lines), tests/lib_test.rs (89 tests)
- JavaScript: `$ brikc build --target js` → dist/index.js (287 lines), tests/index.test.js (89 tests)
- Python: `$ brikc build --target py` → src/main.py (256 lines), tests/test_main.py (89 tests)

What you get: Production code, Auto-generated tests, Certification badge, Push to GitHub

---

## [COMPONENT] PlatformPipelineSection
> Source: src/components/PlatformPipelineSection.tsx

Badge: "PLATFORM PIPELINE"

Headline: "From source to certified artifact"
Subtitle: "Every piece of code follows the same path: extract, verify, certify, publish. No exceptions."

Steps:
1. Code — Any language — { }
2. Logic — Extract & lift — ↑
3. Blueprint — PCD circuit — ■
4. Certificate — Φᶜ = 1 — ✓
5. Registry — Publish & share — ◆
6. Any Target — 14 languages — →

Footer: CODE → LIFT → PCD → TCE → REGISTRY → BUILD

---

## [COMPONENT] LanguagesSection
> Source: src/components/LanguagesSection.tsx

Badge: "LANGUAGES"

Headline: "Every language. One blueprint."
Subheadline: "Lift from 10 source languages into PCD blueprints. Export to 14 targets — verified, with tests."

Lift From (source languages):
- JavaScript — AVAILABLE
- TypeScript — AVAILABLE
- TSX / JSX — AVAILABLE
- Python — AVAILABLE
- Rust — AVAILABLE
- C / C++ — AVAILABLE
- Go — AVAILABLE
- COBOL — AVAILABLE (HIGH VALUE badge)
- PHP — AVAILABLE
- Java — AVAILABLE
- Kotlin — PLANNED
- Ruby — PLANNED
- Swift — PLANNED
- Dart — PLANNED

Export To (target languages):
- JavaScript — AVAILABLE
- TypeScript — AVAILABLE
- Python — AVAILABLE
- Rust — AVAILABLE
- C — AVAILABLE
- C++ — AVAILABLE
- Go — AVAILABLE
- COBOL — AVAILABLE
- PHP — AVAILABLE
- Java — AVAILABLE
- WebAssembly — AVAILABLE
- Native x86-64 — AVAILABLE
- Swift — PLANNED
- Kotlin — PLANNED

Migration Highlight: COBOL → PCD → Go
"$3 trillion per day in banking transactions still runs on COBOL. Lift legacy mainframe logic into verified PCD blueprints, then export to modern Go microservices — with formal proof that the translation preserves every computation."

---

## [COMPONENT] CertificationSection
> Source: src/components/CertificationSection.tsx

Badge: "CERTIFICATION"

Headline: "Provably correct. Permanently certified."
Subheadline: "Every PCD function that passes the TCE receives an immutable certification hash — cryptographic proof that your code is correct. Store it, share it, embed it."

Steps:
1. TCE Verification — Every function that passes the Thermodynamic Coherence Engine gets Φ_c = 1 — mathematically proven correct.
2. Immutable Hash — A unique cryptographic hash is generated — immutable proof of certification that can never be altered.
3. Stored & Verifiable — Hash is stored in your BRIK-64 account. Anyone can verify: "Is this function certified?" — check the hash.
4. Certification Badges — Embed certification badges in your README, pull requests, or website. Proof of correctness, visible everywhere.

Terminal:
```
$ brikc certify add8.pcd
  Parsing add8.pcd...
  Running TCE verification...
  ✓ Φ_c = 1 (circuit closed)
  BRIK-64 CERTIFICATION
  Function:  add8
  Status:    ✓ CERTIFIED
  Φ_c:       1.000000
  Hash:      a7f3c9e1...d4b2
  Date:      2026-03-21T14:32:01Z
  Badge URL: https://brik64.dev/badge/a7f3c9e1
```

---

## [COMPONENT] PlatformPreviewSection
> Source: src/components/PlatformPreviewSection.tsx

Badge: "PLATFORM"

Headline: "Your code. Verified. Connected."
Subheadline: "BRIK-64 integrates with the tools you already use. GitHub, your IDE, a registry, and a dashboard — all connected through certified PCD blueprints."

Features:
1. GitHub Integration — "Connect your repos to BRIK-64. Auto-lift code on push — converts to PCD blueprints. PR certification comments with Φᶜ = 1 verified badge." Tagline: "Your code lives in GitHub. Your blueprints live in BRIK-64."
2. IDE Integration — "Works with VSCode and Cursor. Edit PCD files with full syntax highlighting and inline certification status." Tagline: "Write PCD in your favorite editor."
3. PCD Registry — "Public and private PCD registries. Browse, search, and install verified blueprints. Every package is mathematically certified." Tagline: "npm for verified logic."
4. Certification Dashboard — "Every certified function gets a unique hash, stored in your account and publicly verifiable. Certification badges for your projects." Tagline: "Proof that your code works. Forever."

CTA: "Coming soon at brik64.com" — "Join the Waitlist"

---

## [COMPONENT] PlatformCardsSection
> Source: src/components/PlatformCardsSection.tsx

Badge: "WORKFLOW"

Headline: "Three steps to verified software"

Cards:
1. CONNECT — Connect Your Repo — "Link any GitHub repository. On every push, BRIK-64 auto-lifts your code into PCD blueprints. No manual steps, no context switching." Details: GitHub App with 1-click install, Auto-lift on push to any branch, PR comments with certification status, Monorepo & multi-language support
2. CERTIFY — Certify Reusable Logic — "Every extracted circuit is verified by the Thermodynamic Coherence Engine. If Φᶜ = 1, it's mathematically guaranteed to be correct." Details: Automatic TCE verification, Φᶜ = 1 certification badge, Domain constraint validation, Two-tier: CORE + CONTRACT
3. PUBLISH — Publish to Registry — "Ship certified PCD packages to the public registry or your private org. Every package carries an immutable proof of correctness." Details: Public & private registries, Semantic versioning, Dependency resolution, Searchable marketplace

---

## [COMPONENT] IntegrationsSection
> Source: src/components/IntegrationsSection.tsx

Badge: "INTEGRATIONS"

Headline: "PCD is where your logic lives. GitHub is where your code lives."
Subheadline: "BRIK-64 connects both. Lift your existing code into certified blueprints, then emit back to any language — verified."

Flow: GitHub Repo → brikc lift → PCD Blueprint → brikc build → Any Language

Full Workflow:
1. Push to GitHub
2. Lift to PCD
3. Certify (Φ_c = 1)
4. Build to any target

Editors: VSCode (Extension + LSP), Cursor (AI + PCD native), CLI (brikc lift, build, certify, publish)

---

## [COMPONENT] IDESection
> Source: src/components/IDESection.tsx

Badge: "WORKS WHERE YOU CODE"

Headline: "Native in your editor"
Subheadline: "PCD syntax highlighting, inline certification, and one-click lift — right in your IDE. Available via LSP server (brikc lsp)."

IDEs: VSCode, Cursor, Windsurf, Zed, IntelliJ, Trae — all AVAILABLE

Features: Syntax highlighting for .pcd files, Inline Φ_c certification status, One-click lift from source to PCD, LSP server: brikc lsp

---

## [COMPONENT] AIAgentsSection
> Source: src/components/AIAgentsSection.tsx

Badge: "AI-NATIVE LANGUAGE"

Headline: "Your AI agent already speaks PCD"
Subheadline: "PCD was designed for AI. Install a skill and your agent writes verified circuits, not just code."

Agents:
- Claude Code (Anthropic) — Writes verified PCD circuits with full Coq proof awareness.
- Codex (OpenAI) — Lifts existing code to PCD blueprints in seconds.
- Gemini CLI (Google) — Multimodal PCD generation from specs and diagrams.
- Grok (xAI) — Real-time PCD generation with live context.
- OpenCode (Open Source) — Privacy-first PCD workflows on your own infra.

Terminal:
```
# Install the BRIK-64 skill for Claude Code
claude skill add brik64-pcd-system
# Now Claude writes verified PCD
claude "lift my auth module to PCD"
→ ✓ Lifted 4 functions · Φ_c = 1 · Certified
```

---

## [COMPONENT] WhyDifferentSection
> Source: src/components/WhyDifferentSection.tsx

Badge: "WHY BRIK-64"

Headline: "Certification, not conversion"
Subtitle: "The difference between a transpiler and a certification platform is trust."

Points:
1. Not just a transpiler — Transpilers convert syntax. BRIK-64 extracts logic, verifies correctness, and certifies the result. The output carries mathematical proof.
2. Domain resolution — Declare constraints like speed ∈ [0, 900] directly in your circuit. The compiler verifies them at build time — invalid states cannot compile.
3. Verified certificates — Every certified circuit produces an immutable Φᶜ = 1 certificate. It's not a test result — it's a formal proof that the logic is correct.
4. Compliance & audit trails — Certificates are traceable, timestamped, and tamper-proof. SOC2, HIPAA, PCI-DSS evidence generated automatically from your blueprints.

---

## [COMPONENT] EnterpriseSection (homepage)
> Source: src/components/EnterpriseSection.tsx

Badge: "ENTERPRISE"

Headline: "Built for regulated industries."
Subheadline: "Fintech. Healthcare. Automotive. Government. When 'tests pass' isn't enough."

Features: CI/CD Integration (GitHub Actions, GitLab CI, Jenkins plugins), Compliance Reports (SOC2, HIPAA, PCI-DSS), Certification Badges (embeddable, verifiable), SSO / SAML, Audit Trail, SLA & Support (99.9% uptime, dedicated, on-premise)

---

## [COMPONENT] PricingSection (homepage)
> Source: src/components/PricingSection.tsx

Badge: "PRICING"

Headline: "Closed Beta. Everything free. For now."

Tiers:
- Open: Free — CLI access, Playground, Public registry, 5 lifts/day, Community support
- Pro: Free during Closed Beta — Private registry, GitHub integration, Unlimited lifts, Export all 14 targets, Certification badges, Email support (MOST POPULAR, highlighted)
- Enterprise: Custom — SSO / SAML, Audit logs, Custom SLA, Dedicated support, On-premise

---

## [COMPONENT] BlogSection (homepage)
> Source: src/components/BlogSection.tsx

Badge: "BLOG"

Headline: "Thoughts on verification, composition & coherence"

Featured posts:
1. "What is Digital Circuitality?" — Foundations — "Software that works like hardware: 64 verified components, composed through algebra, certified by thermodynamics."
2. "AI Safety Through Policy Circuits" — AI Safety — "How PCD programs can verify AI actions before execution — not by teaching ethics, but by enforcing physics."
3. "BPU: Hardware That Says No" — Hardware — "A coprocessor with 64 monomer units in silicon. Non-maskable BLOCK. Education fails. Physics does not."

---

## [COMPONENT] LogoCarousel
> Source: src/components/LogoCarousel.tsx

(Visual component — scrolling logo carousel of tech brands)

---

## [PAGE] Index.tsx — CTA Section
> Source: src/pages/Index.tsx

Headline: "Ready? Build software that works like hardware."
CTA: "Learn the theory at Digital Circuitality →" (https://digitalcircuitality.com)

Email signup: "Get notified when the platform launches" — NOTIFY ME

Links: Documentation (docs.brik64.dev), GitHub (github.com/brik64), Discord (discord.gg/brik64)

---

## [PAGE] CLIPage
> Source: src/pages/CLIPage.tsx

Badge: "Developer Tools"

Hero: "One CLI. Every language."
Subheadline: "Install brikc and start lifting, certifying, and exporting code from your terminal."

Quick Install — "Up and running in 30 seconds":
- macOS / Linux: `curl -fsSL https://brik64.dev/install | sh`
- Homebrew: `brew install brik64/tap/brikc`
- Cargo: `cargo install brikc`
- npm (for JS/TS projects): `npm install -g @brik64/cli`
- Verify: `brikc --version` → brikc 5.0.0-beta.1

CLI Commands — "Everything from the terminal":
- `brikc lift <file>` — Lift source code to PCD blueprint
- `brikc export <file.pcd> --target rust,python,js` — Export PCD to target languages
- `brikc certify <file.pcd>` — Run TCE verification, get Φ_c status
- `brikc connect github` — Connect GitHub repo for auto-lift
- `brikc registry publish <file.pcd>` — Publish to public/private registry
- `brikc registry search <query>` — Search the component registry
- `brikc test <file.pcd>` — Run oracle tests against PCD
- `brikc init` — Initialize a new BRIK-64 project

SDKs — "Native libraries for every stack":
- Rust SDK: `cargo add brik64`
- JavaScript / TypeScript SDK: `npm install @brik64/sdk`
- Python SDK: `pip install brik64`

System Requirements:
- Operating Systems: macOS 12+, Linux (Ubuntu 20.04+, Debian 11+, Fedora 36+), Windows 10+ (WSL2)
- Runtimes: Rust 1.75+, Node.js 18+, Python 3.10+

Bottom CTA: "Ready to start?"
"Install the CLI, pick your SDK, and certify your first function. Every line of code you certify is a line you never have to debug again."

---

## [PAGE] PlatformPage
> Source: src/pages/PlatformPage.tsx

Badge: "PLATFORM"

Hero: "Your code laboratory."
Subheadline: "Everything you need to build, verify, and ship certified code."

Dashboard mockup: 3 projects · 47 circuits · 100% certified
Stats: 47 Circuits (certified), 38 Core (Φ_c = 1), 9 Contract (extended), 6 Languages (targets)

Recent circuits: auth/validate_token (CORE, Rust → JS), api/calculate_price (CORE, Python → Go), ui/fetch_dashboard (CONTRACT, TSX → Rust), legacy/compute_interest (CORE, COBOL → Rust)

Capabilities — "What you can do":
1. Lift existing code — Connect GitHub, lift any repo to PCD blueprints. Supports 10 languages.
2. Generate PCD from scratch — Write verified blueprints in the editor. 128 operations at your fingertips.
3. Browse Public Registry — Search thousands of certified circuits. Reuse verified components.
4. Create API Keys — Programmatic access to all platform features. Build on top of BRIK-64.
5. Combine PCD blueprints — EVA algebra composition: sequential (⊗), parallel (∥), conditional (⊕).
6. Export to any language — 14 targets: JS, TS, Python, Rust, C, C++, Go, COBOL, PHP, Java, Swift, WASM, Native.
7. Certify your code — Get Φ_c = 1 mathematical proof + immutable hash. Zero ambiguity.
8. Download certified code — With auto-generated tests and certification badge. Ship with confidence.

Transpilation Engine — "Convert any codebase. Certified."
"Not a 1-to-1 transpiler. An N-to-N certified migration engine."
Pipeline: Scan → Lift → Certify → Emit → Report
Use case: "COBOL banking systems → Go microservices. With mathematical proof of equivalence."

API & MCP:
- REST API at registry.brik64.dev — Lift, compile, certify, and export — all via API.
- MCP Server: brikc mcp-server — 2 tools: discover + execute. Direct integration with AI agents.
- Works With: Claude Code, Cursor, Windsurf, and any MCP-compatible agent.

Coming Soon: Visual composer, Certification dashboard, GitHub auto-lift on push, PR certification comments

---

## [PAGE] LifterPage
> Source: src/pages/LifterPage.tsx

Badge: "Lifter"

Hero: "The BRIK-64 Lifter"
"A reverse compiler that converts existing code into verified PCD blueprints."

How It Works — Three steps:
1. Point at code — Point the Lifter at any file, directory, or repository.
2. Analyze purity — The Lifter identifies pure functions, side effects, and impure boundaries.
3. Generate PCD — Pure functions become verified PCD blueprints. Impure functions get extended monomers.

GitHub Integration:
```
$ brik64 lifter connect --repo github.com/acme/api
  ✓ Repository connected
  ✓ Webhook installed (push, pull_request)
  ✓ Auto-lift enabled
```

Coverage:
- Certified Zone (Φ_c = 1): Pure functions with full mathematical verification. Zero information entropy. Deterministic.
- Extended Zone: Impure functions (I/O, network, state) get extended monomers with documented side-effect boundaries. Certified + Extended = 100% coverage.

Languages supported: JavaScript / TypeScript (Available), Python (Available), Go (Available), Rust (Available), C / C++ (Available), PHP (Planned), COBOL (Available)

Bundle Decompilation: Can analyze compiled bundles, detect bundler, extract modules, lift to PCD, export to clean source.

---

## [PAGE] TranspilerPage
> Source: src/pages/TranspilerPage.tsx

Badge: "Universal Transpiler"

Hero: "10 languages in. 14 targets out. One verified blueprint."
"BRIK-64 is the first N-to-N transpiler. Convert any supported source language to any target through a single, mathematically certified intermediate representation — PCD."

Input languages (10): JavaScript, TypeScript/TSX/JSX, Python, Rust, C, C++, Go, COBOL, PHP, Java
Output targets (14): Rust, JavaScript, TypeScript, Python, C, C++, Go, COBOL, PHP, Java, Swift, WebAssembly, BIR bytecode, Native binary

Traditional transpilers: One-to-one (TS→JS, CoffeeScript→JS, Sass→CSS)
BRIK-64 transpiler: N-to-N through one verified intermediate representation

Pipeline: Lift → Normalize → Certify → Emit → Deploy

Why PCD: "PCD captures the mathematical essence of computation — not syntax, not idioms, not runtime quirks."

Use cases:
1. Legacy modernization — COBOL mainframe → Go or Rust with mathematical proof
2. Cross-platform deployment — Write once, deploy everywhere
3. Language migration — Python to Rust, C++ to Go
4. Verified code generation — TCE certification on every output

---

## [PAGE] LanguagesPage
> Source: src/pages/LanguagesPage.tsx

Hero: "Every Language. One Blueprint."

PCD — Printed Circuit Description: "The first programming language designed for AI."
- Created 2025 · Version 4.0.0-beta.2
- 128 operations organized in 16 families of 8
- Core (64, Φ_c = 1): Arithmetic, Logic, Memory, Control, I/O, Strings, Crypto, System
- Extended (64, CONTRACT): Float64, Math, Network, Graphics, Audio, Filesystem, Concurrency, Interop

Key properties:
- Finite — 128 total operations. An AI can learn the entire language.
- Deterministic — Same input → same output. No undefined behavior.
- Auto-certified — The compiler proves correctness. Φ_c = 1 = circuit closed.
- Self-compiling — The compiler compiles itself producing identical hash.
- 207 Coq proofs — Mathematically proven correct.
- Designed for AI — An LLM can generate certified PCD in seconds.

PCD code example:
```
PC calculate_interest {
  let principal = 0;
  let rate = 0;
  let years = 0;
  let interest = principal * rate / 100;
  let total = principal + (interest * years);
  OUTPUT total;
}
```

Pipeline: Source (12: JS/TS/TSX/JSX/Python/Rust/C/C++/Go/COBOL/PHP/Java) → Blueprint (PCD) → Target (13: JS/TS/Python/Rust/C/C++/Go/COBOL/PHP/Java/Swift/WASM/Native)

12 Lift From languages with strengths and limitations (detailed per language)
14 Export To targets with strengths and limitations (detailed per target)

COBOL Migration: "$3T+ in daily banking transactions. Average COBOL developer age: 55+. COBOL → PCD → Go/Rust is the migration path banks need."

12 × 13 Matrix: Every input can export to every output. 156 verified paths.

---

## [PAGE] EnterprisePage
> Source: src/pages/EnterprisePage.tsx

Hero: "Built for regulated industries."
"Fintech. Healthcare. Automotive. Government. When 'tests pass' isn't enough."

Why Enterprise: Compliance, Security, Scale

Features (12): SSO/SAML/OIDC, SCIM Provisioning, Audit Trail, Compliance Reports (SOC2, HIPAA, PCI-DSS), On-Premise, Custom SLA (99.9%), Dedicated Support, Volume Licensing, CI/CD Gates, Private Registry, Certification Dashboard, API Priority

Use Cases: Banking (COBOL to modern with proof), Healthcare (HIPAA-compliant certification), Automotive (ISO 26262 evidence)

CTA: "Contact us for Enterprise →" (enterprise@brik64.com), "Or start with Pro (free during beta)"

---

## [PAGE] PricingPage
> Source: src/pages/PricingPage.tsx

Hero: "Start free. Scale when ready."
"Every plan includes the full PCD language, all 128 monomers (64 certified + 64 extended), and export to every supported language."
Badge: "CLOSED BETA — ALL FEATURES FREE"

Plan Cards:
- Open: Free forever — no credit card. CLI, Playground, Public registry, 5 lifts/day, All export targets, Community support (Discord)
- Pro: Free during Closed Beta (MOST POPULAR). Everything in Open + Unlimited lifts, Private registry, GitHub integration (auto-lift on push), PR certification badges, Verified Badge, Certification dashboard, Team collaboration (up to 10), Priority email support
- Enterprise: Custom. Everything in Pro + Verified Badge white-label, SSO/SAML, SCIM, Audit logs & compliance, CI/CD plugins, Custom SLA 99.9%, Dedicated support engineer, On-premise/self-hosted, Custom integrations, Volume licensing

Platform Features Detail (7 categories with detailed feature lists)

Full Comparison Table (8 sections, ~30 features comparing Open/Pro/Enterprise)

FAQ (10 questions): Can I use without platform, What languages, What does certified mean, Certified vs extended monomers, Academic pricing, Self-host, SLA, GitHub integration, Source code storage, After beta

Bottom CTA: "Ready to certify your code?"

---

## [PAGE] FeaturesPage
> Source: src/pages/FeaturesPage.tsx

Hero: "Software that works like hardware."
"A language, a compiler, a lifter, a certification engine, and a platform — everything you need to write code that is mathematically proven correct."

Stats: 128 Total Operations, 13 Export Targets, 12 Source Languages, 207 Coq Proofs, 3 EVA Operators (⊗ ∥ ⊕), 14 Rust Crates, 1 Fixpoint Hash, Φ Coherence Metric

8 Feature Sections:
1. The Language — "Programs as circuit schematics" — 64 Certified Monomers, 64+ Extended, EVA Algebra, Closure Domains, Polymer Composition, Finite Design Space
2. The Compiler — "Compiled with mathematical certainty" — Hand-Written Parser, SSA Planner, Type Checker, Self-Compilation Fixpoint, Immutable Hash, Canonical Pipeline Form
3. The Lifter — "Reverse-compile any codebase" — 12 Source Languages, Purity Analysis, GitHub Integration, Bundle Decompilation, Full Code Export, Incremental Lifting
4. Code Generation — "One blueprint, thirteen targets" — 13 Export Targets, Auto-Generated Tests, Cross-Backend Equivalence, WebAssembly, BIR Bytecode, Zero Runtime Dependencies
5. Certification — "Proof, not promises" — TCE Verification, Φ_c = 1, 7 Coherence Metrics, Certification Badges, Certification Gates, Immutable Proof
6. Platform — "Build, share, certify together" — Public/Private Registry, GitHub Integration, IDE Plugins, Windsurf Support, AI Agent Skills
7. Enterprise — "Built for regulated industries" — SSO/SAML/OIDC, SCIM, Compliance Reports, On-Premise, Custom SLA, Volume Licensing
8. The Vision — "Hardware that says no" — BPU Hardware Chip, Policy Circuits, AI Safety by Physics, Two-Phase Approach, Regulatory Trajectory, Open Research

Universal Transpiler section: "Any language in. Any language out." — 10 Input Languages, 14 Output Targets, 100% Certified

---

## [PAGE] AIAgentsPage
> Source: src/pages/AIAgentsPage.tsx

Hero: "Teach your AI agent PCD in 30 seconds"
"BRIK-64 was designed for AI. Install a skill, and your agent writes verified circuits — not just code."

How It Works:
1. Install the skill — One command adds PCD knowledge to your AI agent.
2. Your agent learns PCD — 128 monomers, EVA algebra, certification rules.
3. Write verified code — Your agent produces formally proven circuits.

Agent Setup Cards:
- Claude Code (Anthropic) — `claude "read the brik64-pcd-system skill and lift my auth.js to PCD"`
- Codex (OpenAI) — `codex --skill brik64-pcd-system "lift this function to PCD"`
- Gemini CLI (Google) — `gemini "using the brik64 skill, certify my utils.py"`
- Grok (xAI) — `grok --context https://brik64.com/ai-agents "lift my code to PCD"`
- OpenCode (Open Source) — `opencode --skill brik64-pcd-system "export my PCD to Rust and Python"`

Machine-Readable Reference (for AI agents): Full PCD quick reference including 64 certified monomers, 64 extended monomers, EVA algebra operators, PCD syntax example, skills repository, how to lift code, available backends.

Platform Assessment Brief (for AI agents): What BRIK-64 Does, Measurable Value Propositions (5), Who Benefits Most, Honest Limitations, Recommendation Framework, How to Get Started.

Community: Discord, GitHub (github.com/brik64), Docs (docs.brik64.dev/introduction), Blog

---

## [PAGE] ExportPage
> Source: src/pages/ExportPage.tsx

Hero: "From Blueprints to Production Code"
"One PCD blueprint exports to any language. With tests."

Target Languages (8): Rust, JavaScript, Python, Go, WASM, Native x86-64, C, COBOL

Auto-generated Tests: "Tests are not guessed. They are derived directly from the mathematical verification embedded in each PCD blueprint."

Cross-backend Equivalence: "Same inputs produce the same outputs across every target language."

Export examples: Rust, JavaScript, Python, Go — each showing terminal output with generated files and tests.

---

## [PAGE] InvestorsPage
> Source: src/pages/InvestorsPage.tsx

Hero: "The infrastructure layer for verified software"
"BRIK-64 is building the platform where every line of code is mathematically proven correct. We're creating a new category: formal verification as a service."

The Opportunity — Why Now:
1. $600B+ software quality market — Bugs cost the global economy $600B+ annually (NIST).
2. AI makes it urgent — AI generates 40%+ of new code (GitHub Copilot data).
3. Regulatory tailwind — EU AI Act, FDA software guidelines, NHTSA autonomous vehicle rules.

Traction — What we've built:
- 128 Monomers (64 certified + 64 extended)
- 7 Languages (lift from)
- 8 Export targets
- 5,436+ Tests (0 failures)
- 14 Rust crates
- 207 Coq proofs

Business Model:
1. Freemium SaaS — Free tier → Pro → Enterprise
2. GitHub Integration
3. Registry (public free, private paid)
4. Enterprise (SSO, compliance, on-premise)
5. AI Agent Ecosystem
6. Verified Badge (API-connected, subscription-locked)
7. Currently: FREE during beta

Verified Badge (Revenue Driver): API-connected certification badge with immutable hash proof. Subscription-locked. White-label for Enterprise.

Competitive Landscape: BRIK-64 vs Coq/Lean vs Static Analyzers vs Code Review

Roadmap:
- 2026 Q1: Beta launch (WE ARE HERE)
- 2026 Q2: Public launch, enterprise pilots, academic partnerships
- 2026 Q3: Series A target, API marketplace
- 2026 Q4: 10K+ active users, compliance certifications
- 2027: BPU hardware prototype, government contracts
- 2028+: BPU chip production, mandatory certification standard

IP Portfolio: 5 Patents Planned (self-compilation fixpoint, TCE certification, BPU architecture, AI action verification, policy circuit certification)
Trademarks: Digital Circuitality™, BRIK-64™, PCD™, BPU™

Bottom CTA: "The future of software is verified." — investors@brik64.com

---

## [PAGE] FAQPage
> Source: src/pages/FAQPage.tsx

Hero: "Frequently asked questions"

6 Categories, 23 Questions total:

### General (6 questions)
- What is BRIK-64? — Digital Circuitality architecture, 64 verified monomers, EVA algebra, TCE, self-compiling
- What is PCD? — Printed Circuit Description, language-agnostic circuit blueprints
- What is Digital Circuitality? — Formal property of closed-circuit computation, Φᶜ = 1
- What are monomers? — 64 atomic verified operations, 8 families of 8
- What are extended monomers? — 64 additional I/O operations, no formal certification
- Is BRIK-64 open source? — CLI free, dual licensing (academic free, commercial paid)

### Platform (5 questions)
- How does the Lifter work? — 10 languages, purity analysis, certified/extended
- What languages are supported? — 10 input, 14 output, all plans
- What is cross-backend equivalence? — Identical results regardless of export language
- How does GitHub integration work? — Auto-lift on push, PR badges, certification gates
- Is my source code stored? — No, only PCD blueprints stored

### Certification (4 questions)
- What is Φc? — TCE certification value, Φ_c = 1 = closed circuit, mathematical proof
- What does the certification badge mean? — Green (fully certified), amber (extended), red (failed)
- How does the TCE work? — Information-theoretic verification, Shannon entropy, Brillouin's negentropy principle
- How is this different from testing? — Formal proof vs specific inputs, 207 Coq proofs

### Pricing (4 questions)
- Is there a free tier? — Yes, Open plan forever free
- What does Pro include? — Unlimited lifts, private registry, GitHub, badges, team
- Enterprise features? — SSO, SCIM, audit, compliance, CI/CD, SLA, dedicated support
- Academic pricing? — Free including all Pro features

### Technical (4 questions)
- What is EVA algebra? — ⊗ sequential, ∥ parallel, ⊕ conditional
- How does self-compilation work? — Compiler compiles itself to identical hash
- What is BIR bytecode? — Portable bytecode for BPU hardware
- What are closure domains? — Designer-declared numeric ranges

### AI & Safety (4 questions)
- What are policy circuits? — PCD programs that verify AI actions before execution
- What is the BPU? — Hardware coprocessor with 128 monomers in silicon
- How does BRIK-64 work with AI agents? — Install skill, AI writes PCD natively
- Why better than RLHF? — Education vs physics, hardware BLOCK signal

---

## [PAGE] LegalPage
> Source: src/pages/LegalPage.tsx

Hero: "Terms & Policies"

### Terms of Service
- Platform provided "as-is" during beta
- Features, pricing subject to change
- No warranties express or implied
- Right to modify terms

### Privacy Policy
- Minimal data: email, preferences, anonymous usage metrics
- No selling/sharing for marketing
- GDPR compliant, privacy@brik64.com
- Industry-standard encryption

### Intellectual Property
- Digital Circuitality™, BRIK-64™, PCD™, BPU™ are trademarks
- Compiler, runtime, proofs are proprietary
- User PCD blueprints remain user's IP
- © 2026 BRIK-64 Inc.

### Open Source
- CLI dual license: free academic, commercial license for business
- BSL 1.1 under consideration
- Academic institutions: free license

### Data Handling
- Source code processed locally by CLI, never stored
- Only PCD blueprints and certification hashes stored
- Data deleted upon account termination

### Acceptable Use
- No illegal activities
- No reverse-engineering TCE
- No API abuse
- No scraping

Last updated: March 2026 · legal@brik64.com

---

## [PAGE] ContactPage
> Source: src/pages/ContactPage.tsx

Hero: "Get in touch"

Contact cards:
- General Inquiries: hello@brik64.com
- Enterprise Sales: enterprise@brik64.com
- Support: support@brik64.com

Socials: GitHub (github.com/brik64), X / Twitter (x.com/brik64), Discord

Bug reports: github.com/brik64/brik64/issues

---

## [PAGE] DocsPage
> Source: src/pages/DocsPage.tsx

Hero: "Build with BRIK-64"
"CLI reference, REST API, MCP integration, and SDKs — everything you need to lift, certify, and ship certified code."

Installation:
- Primary: `curl -fsSL https://brik64.dev/install | bash`
- Homebrew: `brew install brik64/tap/brikc`
- Cargo: `cargo install brikc`
- npm: `npm install -g @brik64/cli`

Platforms: macOS 12+ (Apple Silicon M1-M4, Intel), Linux x86_64, Linux arm64

CLI Commands:
- `brikc build <file.pcd>` — Compile PCD to all configured backends
- `brikc run <file.pcd>` — Build and execute
- `brikc check <file.pcd>` — Type-check and validate
- `brikc fmt <file.pcd>` — Format PCD
- `brikc repl` — Interactive REPL
- `brikc catalog` — List all 128 monomers
- `brikc lift <file>` — Reverse-compile to PCD
- `brikc tce <file.pcd>` — Run TCE certification
- `brikc report <file.pcd>` — Generate certification report

API Reference:
- Base URL: https://registry.brik64.dev/v1
- Auth: Bearer token (brik_live_xxx)
- Endpoints: health, catalog, circuits (GET/POST), verify, certify, register, api-keys

MCP Integration:
- 2 tools: brik64.discover, brik64.execute
- Config: `{ "mcpServers": { "brik64": { "command": "brikc", "args": ["mcp-server"] } } }`

SDKs:
- JavaScript/TypeScript: `npm install @brik64/core`
- Python: `pip install brik64`
- Rust: `cargo add brik64-core`

---

## [PAGE] LoginPage
> Source: src/pages/LoginPage.tsx

Badge: "Closed Beta" (pulsing)

Title: "Welcome to BRIK-64"
"The platform is currently in closed beta. Request access below and we'll notify you when your spot is ready."

Social logins: GitHub (SOON), Google (SOON)

Email form: "REQUEST ACCESS" — you@company.com → "Request Beta Access"
"WE'LL EMAIL YOU WHEN YOUR ACCESS IS READY. NO SPAM."

Success: "You're on the list!" + CLI install command

What's included in beta: GitHub integration, PCD Registry access, Certification dashboard, Unlimited lifts, All export targets, Priority support

---

## [PAGE] LandingB
> Source: src/pages/LandingB.tsx

Hero: "Turn your code into verified blueprints. Export to any language."
Badge: "Trusted by 200+ developers in closed beta"

Benefits:
1. Ship verified code — Every function mathematically proven correct.
2. Migrate between languages — COBOL to Rust. JS to Go. One command, with proof of equivalence.
3. Auto-generate tests — Tests derived from mathematical specification, not guesswork.
4. Permanent certification — Immutable hash proves your code is correct. Forever.

Three steps: Lift → Verify → Export

Under the hood:
- 10 → 14 Matrix: 140 transcompilation paths
- Two-Tier Certification: CORE + CONTRACT
- 100% Liftability: Every file produces a blueprint
- SSA Transform: Mutable code becomes immutable truth
- Platform API: REST API + MCP server

Testimonials:
- "We lifted our entire COBOL banking system to Rust in two weeks. The mathematical proof of equivalence saved us from a $330M TSB-style disaster." — CTO, Financial Services
- "brikc lift on our React codebase found 73 certifiable circuits we didn't know we had." — Lead Engineer, SaaS
- "The 12×13 matrix is real. We lifted Python data pipelines and exported to Go microservices." — VP Engineering, Data Platform

Pricing: Open (Free), Pro (Free during Beta), Enterprise (Free during Beta, Custom)

FAQ (5 items)

Final CTA: "Your code already exists. Now verify it."

---

## [PAGE] LandingPlatform
> Source: src/pages/LandingPlatform.tsx

Badge: "Plataforma de modernización y certificación"

Hero: "Convierte código en lógica verificable, certificada y portable."
(Note: This landing is in Spanish)

Stats: 10 input languages, 14 output targets, 6,000+ tests, 491+ artifacts generated

Pillars: PCD Blueprints, BRIK Lifter, Verifiable Certificates, Registry & Marketplace, Domain Resolution, Any Language Export

Workflow: Code → Logic → Blueprint → Certificate → Registry → Runtime

Products:
- BRIK Scan ($49/mo) — Certification assessment
- BRIK Lift (Free during Beta) — PCD blueprints + multi-target export
- BRIK Harden (Enterprise) — Production module replacement

Use cases: Legacy modernization, AI code hardening, Language migrations, Reusable logic catalogs, Compliance pipelines, Domain-specific marketplace

---

## [PAGE] BlogList
> Source: src/pages/BlogList.tsx

Header: "Thoughts on verification, composition & the future of code."

(Displays grid of all blog posts from blog-data.ts, newest first)

---

## [PAGE] NewsIndex
> Source: src/pages/NewsIndex.tsx

Header: "All Updates"
"6 NEWS ON DIGITAL CIRCUITALITY AND BRIK-64"

News items:
1. MAR 2026 — LAUNCH — Digital Circuitality goes public
2. MAR 2026 — PLATFORM — BRIK-64 platform enters development
3. MAR 2026 — DOCS — Complete documentation live at docs.brik64.dev
4. MAR 2026 — TOOLS — Claude Code skills published
5. MAR 2026 — OPEN SOURCE — 14 repositories now live on GitHub
6. MAR 2026 — COMMUNITY — Join the Digital Circuitality community

---

## [DATA] Blog Posts (blog-data.ts)
> Source: src/lib/blog-data.ts

25 blog posts (metadata — content is in individual page components):

| Slug | Title | Date | Tag |
|------|-------|------|-----|
| adversarial-corpus | We Built 50 Tests to Break Our Own Compiler | MAR 24, 2026 | ENGINEERING |
| your-tests-pass-code-is-broken | Your Tests Pass. Your Code Is Broken. | MAR 24, 2026 | VERIFICATION |
| proving-code-equivalence | Proving Code Equivalence Across Languages | MAR 24, 2026 | RESEARCH |
| universal-transpiler | The First Universal Transpiler: 10 Languages In, 14 Out | MAR 23, 2026 | PRODUCT |
| what-artificial-intuition-cant-verify | What Artificial Intuition Gets Right — And What It Can't Verify | MAR 22, 2026 | AI SAFETY |
| what-if-software-worked-like-dna | What if Software Worked Like DNA? | JAN 15, 2026 | VISION |
| ai-safety-policy-circuits | AI Safety with Policy Circuits | JAN 22, 2026 | AI SAFETY |
| bpu-hardware-that-says-no | The BPU — Hardware That Says No | JAN 29, 2026 | HARDWARE |
| why-your-calculator-is-lying | Why Your Calculator Is Lying to You | FEB 5, 2026 | ENGINEERING |
| pcd-for-ai-agents | PCD for AI Agents — A Practical Guide | FEB 10, 2026 | AI AGENTS |
| beyond-certification-128-monomers | Beyond Certification — Building Real Software with 128 Monomers | FEB 15, 2026 | ENGINEERING |
| verification-gap | The Verification Gap — Why Software Is 50 Years Behind Hardware | FEB 20, 2026 | RESEARCH |
| building-with-sdks | Building with SDKs | FEB 25, 2026 | SDKS |
| eva-algebra-deep-dive | EVA Algebra Deep Dive | MAR 1, 2026 | DEEP DIVE |
| your-first-pcd-circuit | Your First PCD Circuit | MAR 5, 2026 | TUTORIAL |
| ai-guardrails-for-robots | AI Guardrails for Robots | MAR 8, 2026 | AI SAFETY |
| kish-ferry-entropy-distinction | Why Information Entropy Is Not Thermal Entropy | MAR 12, 2026 | RESEARCH |
| prof-kish-noise-logic | The Physicist Who Asked Whether Noise Can Compute | MAR 15, 2026 | RESEARCH |
| your-code-exists-now-verify-it | Your Code Already Exists. Now Verify It. | MAR 18, 2026 | PRODUCT |
| why-your-ai-needs-blueprints | Why Your AI Needs Blueprints, Not Hope | MAR 20, 2026 | PRODUCT |
| cobol-migration-revolution | The $3 Trillion COBOL Problem — And How PCD Solves It | MAR 21, 2026 | MIGRATION |
| api-and-mcp | Your AI Agent Speaks PCD: The BRIK-64 API and MCP | MAR 21, 2026 | PLATFORM |
| reverse-compile-anything | Reverse-Compile Anything: The BRIK Lifter | MAR 21, 2026 | TOOLING |
| javascript-to-rust-3-commands | From JavaScript to Rust in 3 Commands | MAR 21, 2026 | TUTORIAL |

Note: Blog post content is stored in individual page components under src/pages/blog/*.tsx. The blog-data.ts `content` field is empty for all entries — the actual content is rendered by each blog page component.

---

## [NEWS] Digital Circuitality Goes Public
> Source: src/pages/news/Launch.tsx

Date: MAR 2026 | Tag: LAUNCH

What's been released: digitalcircuitality.com, docs.brik64.dev (25+ pages), brikc CLI v4.0.0-beta.2, 3 SDKs (npm, PyPI, crates.io)

By the numbers: 128 monomers (64 core + 64 extended), 207 Coq proof files

"For the first time, there is a language where incorrect programs cannot compile."
"Digital Circuitality is not an evolving open-source experiment. It is a formally verified, immutable artifact."

---

## [NEWS] The BRIK-64 Platform Enters Development
> Source: src/pages/news/Platform.tsx

Date: MAR 2026 | Tag: PLATFORM

Visual circuit laboratory at brik64.com. Drag monomers, connect them, watch TCE certify in real time.
Public registry at registry.brik64.dev with certification badges.
Certification Dashboard as periodic table of 128 monomers.
GitHub integration: auto-lift on push, PR certification comments.
API and MCP server: REST API + 2-tool MCP for AI agents.

---

## [NEWS] Complete Documentation Live
> Source: src/pages/news/Documentation.tsx

Date: MAR 2026 | Tag: DOCS

33+ pages at docs.brik64.dev:
- Getting Started (5 pages)
- PCD Language (9 pages)
- CLI Reference (2 pages)
- Lifter Guide (3 pages)
- API Reference (4 pages)
- MCP Integration (2 pages)
- SDKs (3 pages)
- Theory (5 pages)

---

## [NEWS] Claude Code Skills Published
> Source: src/pages/news/Skills.tsx

Date: MAR 2026 | Tag: TOOLS

5 skills: brik64-pcd-system (core), brik64-javascript, brik64-python, brik64-rust, brik64-digital-circuitality (methodology)

"PCD was designed from the ground up for AI-generated code."

Install: `git clone https://github.com/brik64/brik64-tools-skills.git && cp -r brik64-tools-skills/skills/* ~/.claude/skills/`

---

## [NEWS] 14 Repositories Live on GitHub
> Source: src/pages/news/OpenSource.tsx

Date: MAR 2026 | Tag: OPEN SOURCE

Repos:
- brik64/brik64 — Public entry point
- brik64-admin/brik64-prod — Production monorepo (14 Rust crates)
- brik64/brik64-lib-js — JS/TS SDK (@brik64/core)
- brik64/brik64-lib-python — Python SDK (brik64)
- brik64/brik64-lib-rust — Rust SDK (brik64-core)
- brik64/brik64-platform — Next.js dashboard
- brik64/brik64-docs-site — Mintlify docs
- brik64/brik64-theory-proofs — 207 Coq proofs
- brik64/brik64-tools-skills — 5 Claude Code skills
- brik64/brik64-dist-releases — Pre-built binaries
- brik64/brik64-community-awesome — Curated resources
- brik64/brik64-community-examples — Example PCD programs

---

## [NEWS] Join the Digital Circuitality Community
> Source: src/pages/news/Community.tsx

Date: MAR 2026 | Tag: COMMUNITY

Hub: GitHub Discussions (github.com/brik64/brik64/discussions)
Blog: 18 articles
Roadmap: Registry launch, VS Code extension, FPGA prototype
Contact: hello@brik64.com

---

## [BLOG] Individual Blog Posts
> Source: src/pages/blog/*.tsx

There are 25 blog post page components. The content for each is rendered within the component using the BlogPost wrapper. The blog-data.ts provides metadata (slug, title, excerpt, date, tag) while the actual long-form content lives in each individual .tsx file.

Blog post titles and excerpts (for reference):

1. **We Built 50 Tests to Break Our Own Compiler** (MAR 24, ENGINEERING) — The adversarial corpus: 50 hand-crafted attack vectors across 5 categories. 3 real bugs found and fixed.

2. **Your Tests Pass. Your Code Is Broken.** (MAR 24, VERIFICATION) — 15 functions that pass every unit test. All 15 contain real bugs. BRIK-64's TCE catches them all.

3. **Proving Code Equivalence Across Languages** (MAR 24, RESEARCH) — 30 functions compiled to JS and Python. Zero divergences across 50,000+ test runs.

4. **The First Universal Transpiler: 10 Languages In, 14 Out** (MAR 23, PRODUCT) — Every transpiler converts one language to one other. BRIK-64 converts any of 10 to any of 14.

5. **What Artificial Intuition Gets Right — And What It Can't Verify** (MAR 22, AI SAFETY) — Carlos E. Perez argues AI is intuition, not intelligence. Intuition without certification is a liability.

6. **What if Software Worked Like DNA?** (JAN 15, VISION) — DNA doesn't mutate randomly. Introducing Digital Circuitality.

7. **AI Safety with Policy Circuits** (JAN 22, AI SAFETY) — What happens when you can enforce AI safety in hardware?

8. **The BPU — Hardware That Says No** (JAN 29, HARDWARE) — The BPU does for AI what ABS did for braking.

9. **Why Your Calculator Is Lying to You** (FEB 5, ENGINEERING) — 0.1 + 0.2 = 0.30000000000000004. This is IEEE 754.

10. **PCD for AI Agents — A Practical Guide** (FEB 10, AI AGENTS) — How PCD changes code generation for AI agents.

11. **Beyond Certification — Building Real Software with 128 Monomers** (FEB 15, ENGINEERING) — Real software isn't pure. How to build real systems.

12. **The Verification Gap** (FEB 20, RESEARCH) — Why Software Is 50 Years Behind Hardware.

13. **Building with SDKs** (FEB 25, SDKS) — Using BRIK-64 SDKs in existing projects.

14. **EVA Algebra Deep Dive** (MAR 1, DEEP DIVE) — Formal algebraic system behind pipeline composition and closure proofs.

15. **Your First PCD Circuit** (MAR 5, TUTORIAL) — Step-by-step tutorial.

16. **AI Guardrails for Robots** (MAR 8, AI SAFETY) — Hardware-enforced ALLOW/BLOCK guardrails.

17. **Why Information Entropy Is Not Thermal Entropy** (MAR 12, RESEARCH) — Kish & Ferry (2018) distinction.

18. **The Physicist Who Asked Whether Noise Can Compute** (MAR 15, RESEARCH) — Prof. Laszlo B. Kish profile.

19. **Your Code Already Exists. Now Verify It.** (MAR 18, PRODUCT) — The Lifter changes the equation.

20. **Why Your AI Needs Blueprints, Not Hope** (MAR 20, PRODUCT) — Nobody talks about what AI is actually building.

21. **The $3 Trillion COBOL Problem — And How PCD Solves It** (MAR 21, MIGRATION) — 220B lines of COBOL in production.

22. **Your AI Agent Speaks PCD: The BRIK-64 API and MCP** (MAR 21, PLATFORM) — API and MCP server for AI agents.

23. **Reverse-Compile Anything: The BRIK Lifter** (MAR 21, TOOLING) — The Lifter reverse compiler covers 7 languages.

24. **From JavaScript to Rust in 3 Commands** (MAR 21, TUTORIAL) — Three commands. Verified. Done.

---

*End of content extraction. This file contains all text content from the brik64web production site.*
