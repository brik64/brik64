export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-digital-circuitality",
    title: "What if Software Worked Like DNA?",
    excerpt:
      "DNA doesn't mutate randomly. What if software could work the same way? Introducing Digital Circuitality — 64 verified codons for computation.",
    date: "JAN 15, 2026",
    tag: "VISION",
    category: "Foundations",
  },
  {
    slug: "first-pcd-circuit",
    title: "Your First PCD Circuit in 5 Minutes",
    excerpt:
      "Step-by-step tutorial for writing, compiling, and certifying your first PCD circuit using brikc. From install to Φ_c = 1 in minutes.",
    date: "MAR 5, 2026",
    tag: "TUTORIAL",
    category: "Getting Started",
  },
  {
    slug: "eva-algebra-deep-dive",
    title: "EVA Algebra Deep Dive",
    excerpt:
      "A deep dive into EVA — the formal algebraic system behind BRIK-64's pipeline composition and closure proofs. Sequential, parallel, conditional.",
    date: "MAR 1, 2026",
    tag: "DEEP DIVE",
    category: "Theory",
  },
  {
    slug: "universal-transpiler",
    title: "A Universal Transpiler: 10 Languages In, 14 Out",
    excerpt:
      "Every transpiler converts one language to one other. BRIK-64 converts any of 10 to any of 14 — with formal certification that both input and output close as verified circuits.",
    date: "MAR 23, 2026",
    tag: "PRODUCT",
    category: "Product",
  },
  {
    slug: "error-elimination",
    title: "Your Tests Pass. Your Code Is Broken.",
    excerpt:
      "15 functions that pass every unit test. All 15 contain real bugs. BRIK-64's TCE catches them all — because certification is not testing.",
    date: "MAR 24, 2026",
    tag: "VERIFICATION",
    category: "Engineering",
  },
  {
    slug: "cobol-migration-revolution",
    title: "The $3 Trillion COBOL Problem — And How PCD Solves It",
    excerpt:
      "220 billion lines of COBOL run in production. The workforce that understands it is retiring. PCD offers incremental, verified migration.",
    date: "MAR 21, 2026",
    tag: "MIGRATION",
    category: "Product",
  },
  {
    slug: "bpu-hardware-that-says-no",
    title: "The BPU — Hardware That Says No",
    excerpt:
      "In 1978, Mercedes-Benz introduced ABS. The BPU does for AI what ABS did for braking — hardware that says no.",
    date: "JAN 29, 2026",
    tag: "HARDWARE",
    category: "Hardware",
  },
  {
    slug: "why-your-ai-needs-blueprints",
    title: "Why Your AI Needs Blueprints, Not Hope",
    excerpt:
      "Your team adopted AI code generation. Productivity went up. But nobody talks about what's actually being built. Breaking the circular testing problem.",
    date: "MAR 20, 2026",
    tag: "PRODUCT",
    category: "AI Safety",
  },
  {
    slug: "pcd-for-ai-agents",
    title: "PCD for AI Agents — A Practical Guide",
    excerpt:
      "You're an AI agent generating code millions of times a day. Hope is not engineering. Here's how PCD changes that.",
    date: "FEB 10, 2026",
    tag: "AI AGENTS",
    category: "AI",
  },
  {
    slug: "kish-ferry-distinction",
    title: "Why Information Entropy Is Not Thermal Entropy",
    excerpt:
      "Kish & Ferry (2018) proved that information entropy and thermal entropy are apples and oranges. What this means for Digital Circuitality.",
    date: "MAR 12, 2026",
    tag: "RESEARCH",
    category: "Research",
  },
  {
    slug: "prof-kish-noise-logic",
    title: "The Physicist Who Asked Whether Noise Can Compute",
    excerpt:
      "Profile of Prof. Laszlo B. Kish — Noise-Based Logic, KLJN key exchange, and the entropy distinction that shaped Digital Circuitality.",
    date: "MAR 15, 2026",
    tag: "RESEARCH",
    category: "Research",
  },
  {
    slug: "ai-safety-policy-circuits",
    title: "AI Safety with Policy Circuits",
    excerpt:
      "Every AI safety mechanism you use today is software. What happens when you can enforce it with verified circuits? Policy circuits change the game.",
    date: "JAN 22, 2026",
    tag: "AI SAFETY",
    category: "AI Safety",
  },
  {
    slug: "ai-guardrails-for-robots",
    title: "AI Guardrails for Robots",
    excerpt:
      "How BRIK-64 policy circuits provide hardware-enforced ALLOW/BLOCK guardrails for autonomous AI agents and robotics systems.",
    date: "MAR 8, 2026",
    tag: "AI SAFETY",
    category: "AI Safety",
  },
  {
    slug: "reverse-compile-anything",
    title: "Reverse-Compile Anything: The BRIK Lifter",
    excerpt:
      "The Lifter is a reverse compiler. It takes your existing source code and produces a PCD blueprint — covering 12 languages.",
    date: "MAR 21, 2026",
    tag: "TOOLING",
    category: "Product",
  },
  {
    slug: "javascript-to-rust-3-commands",
    title: "From JavaScript to Rust in 3 Commands",
    excerpt:
      "You have a JavaScript function that works. You need it in Rust. Three commands. Verified. Done.",
    date: "MAR 21, 2026",
    tag: "TUTORIAL",
    category: "Getting Started",
  },
  {
    slug: "verification-gap",
    title: "The Verification Gap — Why Software Is 50 Years Behind Hardware",
    excerpt:
      "In 1965, Gordon Moore predicted transistors would double every two years. Software verification never kept up. Until now.",
    date: "FEB 20, 2026",
    tag: "RESEARCH",
    category: "Research",
  },
  {
    slug: "clean-code-from-blueprints",
    title: "Your Messy Code Goes In. Clean, Verified Code Comes Out.",
    excerpt:
      "The PCD Roundtrip — extract the computational essence of messy code, verify it mathematically, and recompile into clean code with auto-generated tests.",
    date: "MAR 21, 2026",
    tag: "REVOLUTION",
    category: "Product",
  },
  {
    slug: "translation-validation",
    title: "Validating Output Equivalence Across Languages",
    excerpt:
      "30 functions compiled to JavaScript and Python. Outputs compared bit-for-bit. Zero divergences across 50,000+ test runs.",
    date: "MAR 24, 2026",
    tag: "RESEARCH",
    category: "Research",
  },
  {
    slug: "building-with-sdks",
    title: "Building with SDKs",
    excerpt:
      "How to use the BRIK-64 SDKs to integrate Digital Circuitality into existing projects without adopting PCD. Rust, JavaScript, Python.",
    date: "FEB 25, 2026",
    tag: "SDKS",
    category: "Getting Started",
  },
  {
    slug: "what-artificial-intuition-cant-verify",
    title: "What Artificial Intuition Gets Right — And What It Can't Verify",
    excerpt:
      "Carlos E. Perez argues AI is intuition, not intelligence. He's right. But intuition without certification is a liability.",
    date: "MAR 22, 2026",
    tag: "AI SAFETY",
    category: "AI Safety",
  },
  {
    slug: "your-code-exists-now-verify",
    title: "Your Code Already Exists. Now Verify It.",
    excerpt:
      "You have a codebase. Thousands of functions. They all work — probably. The Lifter changes that equation.",
    date: "MAR 18, 2026",
    tag: "PRODUCT",
    category: "Product",
  },
  {
    slug: "full-spectrum-pcd",
    title: "Beyond Certification — Building Real Software with 128 Monomers",
    excerpt:
      "The previous article showed PCD as a fortress. But real software isn't pure. Games, simulations, AI pipelines — and the power of open circuits.",
    date: "FEB 15, 2026",
    tag: "ENGINEERING",
    category: "Engineering",
  },
  {
    slug: "precision-as-domain",
    title: "Why Your Calculator Is Lying to You",
    excerpt:
      "Open any language. Type 0.1 + 0.2. The answer is 0.30000000000000004. This is not a bug. This is IEEE 754.",
    date: "FEB 5, 2026",
    tag: "ENGINEERING",
    category: "Engineering",
  },
  {
    slug: "adversarial-corpus",
    title: "110,227 Tests to Break Our Own Compiler — 0 Failures",
    excerpt:
      "The adversarial corpus: 110,227 tests across 7 levels — from individual monomers to real execution. Full monomer catalog, all backends, all languages. Zero failures.",
    date: "MAR 24, 2026",
    tag: "ENGINEERING",
    category: "Engineering",
  },
  {
    slug: "api-and-mcp",
    title: "Your AI Agent Speaks PCD: The BRIK-64 API and MCP",
    excerpt:
      "The platform API and MCP server let your AI agent compile, certify, and publish PCD circuits programmatically.",
    date: "MAR 21, 2026",
    tag: "PLATFORM",
    category: "Product",
  },
  {
    slug: "why-new-language",
    title: "Why the World Needs a New Programming Language",
    excerpt:
      "We have 700+ programming languages. None of them guarantee that your program is correct. BRIK-64 does. Here's why that matters.",
    date: "MAR 30, 2026",
    tag: "VISION",
    category: "Foundations",
  },
  {
    slug: "formal-verification-without-phd",
    title: "Formal Verification Without the PhD",
    excerpt:
      "Formal verification has always been reserved for aerospace and nuclear. BRIK-64 makes it as simple as running a compiler. No Coq. No TLA+. Just brikc build.",
    date: "MAR 30, 2026",
    tag: "VISION",
    category: "Foundations",
  },
  {
    slug: "blockchain-meets-circuitality",
    title: "Verified Smart Contracts: Blockchain Meets Digital Circuitality",
    excerpt:
      "Smart contracts can't be patched after deployment. A single bug has caused billions in losses. What if the bugs couldn't compile?",
    date: "MAR 30, 2026",
    tag: "PRODUCT",
    category: "Product",
  },
  {
    slug: "safety-critical-software",
    title: "When a Bug Can Kill: Safety-Critical Software and BRIK-64",
    excerpt:
      "DO-178C certification costs $1M+. IEC 62304 takes months. BRIK-64 generates the same verification evidence automatically, at compile time.",
    date: "MAR 30, 2026",
    tag: "PRODUCT",
    category: "Product",
  },
  {
    slug: "benchmarks-110k-tests",
    title: "110K Tests, 14 Targets, 207 Coq Proofs: The Numbers Behind BRIK-64",
    excerpt:
      "Hard numbers. No marketing fluff. Every monomer exhaustively tested, every backend verified, every proof machine-checked.",
    date: "MAR 30, 2026",
    tag: "ENGINEERING",
    category: "Engineering",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((p) => p.tag === tag);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function getAllTags(): string[] {
  return [...new Set(blogPosts.map((p) => p.tag))];
}

export function getAllCategories(): string[] {
  return [...new Set(blogPosts.map((p) => p.category))];
}
