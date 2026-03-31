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
    title: "Every Language Lets You Ship Bugs. BRIK64 Doesn't.",
    excerpt:
      "128 verified operations. 207 mathematical proofs. One rule: if it compiles, it's correct. Introducing Digital Circuitality.",
    date: "JAN 15, 2026",
    tag: "VISION",
    category: "Foundations",
  },
  {
    slug: "first-pcd-circuit",
    title: "Install. Write. Certify. Five Minutes.",
    excerpt:
      "Your first mathematically certified circuit in PCD. From zero to verified in three commands. No PhD required.",
    date: "MAR 5, 2026",
    tag: "TUTORIAL",
    category: "Getting Started",
  },
  {
    slug: "eva-algebra-deep-dive",
    title: "Correct Parts. Correct Whole. That's the Algebra.",
    excerpt:
      "EVA gives software what hardware has had since Kirchhoff: if two components are correct, their composition is correct. Mathematically certified.",
    date: "MAR 1, 2026",
    tag: "DEEP DIVE",
    category: "Theory",
  },
  {
    slug: "universal-transpiler",
    title: "10 Languages In. 14 Out. Every Path Certified.",
    excerpt:
      "Every transpiler converts one language to one other. BRIK64 converts any of 10 to any of 14 — with mathematical certification that both sides are equivalent.",
    date: "MAR 23, 2026",
    tag: "PRODUCT",
    category: "Product",
  },
  {
    slug: "error-elimination",
    title: "Your Tests Pass. Your Code Is Still Wrong.",
    excerpt:
      "15 functions. 100% test coverage. All 15 contain real bugs. BRIK64 catches every one — because certification is not testing.",
    date: "MAR 24, 2026",
    tag: "VERIFICATION",
    category: "Engineering",
  },
  {
    slug: "cobol-migration-revolution",
    title: "220 Billion Lines of COBOL. We Lift Them One at a Time.",
    excerpt:
      "Banks spend $3B/year maintaining code nobody understands. BRIK64 lifts it to certified blueprints, emits to any modern language. Incremental. Verified. Done.",
    date: "MAR 21, 2026",
    tag: "MIGRATION",
    category: "Product",
  },
  {
    slug: "bpu-hardware-that-says-no",
    title: "A $10 Chip That Prevents a $440M Bug.",
    excerpt:
      "ABS stops your wheels from locking. The BPU stops your AI from acting wrong. Hardware that says no. Non-maskable. Non-negotiable.",
    date: "JAN 29, 2026",
    tag: "HARDWARE",
    category: "Hardware",
  },
  {
    slug: "why-your-ai-needs-blueprints",
    title: "Your AI Writes the Code and the Tests. Same Blind Spots.",
    excerpt:
      "AI generates the function and the tests. Same model. Same bugs. Same blind spots. BRIK64 breaks the circle with independent mathematical verification.",
    date: "MAR 20, 2026",
    tag: "PRODUCT",
    category: "AI Safety",
  },
  {
    slug: "pcd-for-ai-agents",
    title: "Tell Your AI What to Build. The Compiler Proves It's Correct.",
    excerpt:
      "128 operations. 14 targets. Automatic certification. PCD is the first language designed for AI to write and a compiler to verify. Free. Ready today.",
    date: "FEB 10, 2026",
    tag: "AI AGENTS",
    category: "AI",
  },
  {
    slug: "kish-ferry-distinction",
    title: "Two Entropies. One Name. Seventy Years of Confusion. Resolved.",
    excerpt:
      "Kish & Ferry (2018) proved that information entropy and thermal entropy are fundamentally different. BRIK64 builds on the correction — pure information theory, no contested physics.",
    date: "MAR 12, 2026",
    tag: "RESEARCH",
    category: "Research",
  },
  {
    slug: "prof-kish-noise-logic",
    title: "The Physicist Who Found Signal Inside the Static.",
    excerpt:
      "Prof. Laszlo B. Kish challenged Landauer's principle, proposed classical secure key exchange, and shaped the theoretical foundation of Digital Circuitality.",
    date: "MAR 15, 2026",
    tag: "RESEARCH",
    category: "Research",
  },
  {
    slug: "ai-safety-policy-circuits",
    title: "Your AI Guardrails Are Software. That's the Problem.",
    excerpt:
      "RLHF is software. System prompts are text. Policy circuits are mathematically certified, deterministic, hardware-enforceable. The guardrail that can't be jailbroken.",
    date: "JAN 22, 2026",
    tag: "AI SAFETY",
    category: "AI Safety",
  },
  {
    slug: "ai-guardrails-for-robots",
    title: "RLHF Teaches AI to Want Safety. The BPU Enforces It.",
    excerpt:
      "Robot arms, autonomous vehicles, surgical devices — BRIK64 policy circuits sit between the AI and the actuator. ALLOW or BLOCK. Hardware-enforced. Non-maskable.",
    date: "MAR 8, 2026",
    tag: "AI SAFETY",
    category: "AI Safety",
  },
  {
    slug: "reverse-compile-anything",
    title: "Point It at Your Code. Get a Certified Blueprint.",
    excerpt:
      "The Lifter reverse-compiles 12 languages into PCD blueprints. No rewriting. No annotations. Just verification of what you already have.",
    date: "MAR 21, 2026",
    tag: "TOOLING",
    category: "Product",
  },
  {
    slug: "javascript-to-rust-3-commands",
    title: "JavaScript to Rust. Three Commands. Verified.",
    excerpt:
      "Lift. Check. Build. Your JavaScript becomes certified Rust with auto-generated tests. Not translation — generation from a proven specification.",
    date: "MAR 21, 2026",
    tag: "TUTORIAL",
    category: "Getting Started",
  },
  {
    slug: "verification-gap",
    title: "Hardware Solved This 50 Years Ago. Software Never Did.",
    excerpt:
      "100 billion transistors, all correct. Software can't verify a 1,000-line program. Digital Circuitality brings compositional verification to code. Finally.",
    date: "FEB 20, 2026",
    tag: "RESEARCH",
    category: "Research",
  },
  {
    slug: "clean-code-from-blueprints",
    title: "Messy Code Goes In. Certified Blueprint Comes Out.",
    excerpt:
      "The PCD Roundtrip: lift your spaghetti code, verify it mathematically, recompile to clean code in any language — with auto-generated tests. One blueprint. Any target.",
    date: "MAR 21, 2026",
    tag: "REVOLUTION",
    category: "Product",
  },
  {
    slug: "translation-validation",
    title: "30 Functions. Two Languages. Zero Divergences.",
    excerpt:
      "Same PCD blueprint, compiled to JavaScript and Python. 50,000+ test runs. Bit-for-bit identical outputs. That's what 'equivalent' means.",
    date: "MAR 24, 2026",
    tag: "RESEARCH",
    category: "Research",
  },
  {
    slug: "building-with-sdks",
    title: "Drop Verified Operations Into Your Existing Code.",
    excerpt:
      "The BRIK64 SDKs bring 128 mathematically certified operations to Rust, JavaScript, and Python. No PCD required. Same proofs. Same guarantees.",
    date: "FEB 25, 2026",
    tag: "SDKS",
    category: "Getting Started",
  },
  {
    slug: "what-artificial-intuition-cant-verify",
    title: "AI Has Intuition. It Doesn't Have Proof.",
    excerpt:
      "Carlos E. Perez says AI is intuition, not intelligence. He's right. But intuition without certification is a liability. BRIK64 provides the bones.",
    date: "MAR 22, 2026",
    tag: "AI SAFETY",
    category: "AI Safety",
  },
  {
    slug: "your-code-exists-now-verify",
    title: "You Have 10,000 Functions. Which Ones Are Correct?",
    excerpt:
      "Point the Lifter at your codebase. It tells you exactly which functions are mathematically certifiable — and which aren't. No rewriting. No annotations.",
    date: "MAR 18, 2026",
    tag: "PRODUCT",
    category: "Product",
  },
  {
    slug: "full-spectrum-pcd",
    title: "64 Certified Operations + 64 Extended. Build Anything.",
    excerpt:
      "Pure logic gets mathematical proof. I/O gets contracts. Games, AI pipelines, trading bots — the compiler tells you exactly how much is proven. Traditional software never does.",
    date: "FEB 15, 2026",
    tag: "ENGINEERING",
    category: "Engineering",
  },
  {
    slug: "precision-as-domain",
    title: "0.1 + 0.2 = 0.30000000000000004. BRIK64 Tells the Truth.",
    excerpt:
      "IEEE 754 lies to you in every language. BRIK64 uses declared precision with exact integer arithmetic. The engineer declares the precision. The compiler certifies it.",
    date: "FEB 5, 2026",
    tag: "ENGINEERING",
    category: "Engineering",
  },
  {
    slug: "adversarial-corpus",
    title: "110,227 Tests. 0 Failures. That's Not Marketing — It's Math.",
    excerpt:
      "Every monomer. Every backend. Every language. Every edge case. 110,227 adversarial tests across 7 levels. Zero failures. Because the operation space is finite.",
    date: "MAR 24, 2026",
    tag: "ENGINEERING",
    category: "Engineering",
  },
  {
    slug: "api-and-mcp",
    title: "Your AI Agent Compiles, Certifies, and Publishes. Programmatically.",
    excerpt:
      "REST API + MCP server. Two tools: discover and execute. Your AI agent writes certified code, not just code. Free tier included.",
    date: "MAR 21, 2026",
    tag: "PLATFORM",
    category: "Product",
  },
  {
    slug: "why-new-language",
    title: "700 Languages. Zero Guarantees. Until Now.",
    excerpt:
      "Rust prevents memory errors. TypeScript prevents type errors. BRIK64 prevents logic errors. 128 verified operations, 14 targets, mathematical proof at compile time.",
    date: "MAR 30, 2026",
    tag: "VISION",
    category: "Foundations",
  },
  {
    slug: "formal-verification-without-phd",
    title: "207 Proofs Behind the Scenes. You Just Write Code.",
    excerpt:
      "Formal verification used to require Lean, Isabelle, and a PhD. BRIK64 bakes it into the compiler. Write code with domain constraints. The compiler does the rest.",
    date: "MAR 30, 2026",
    tag: "VISION",
    category: "Foundations",
  },
  {
    slug: "blockchain-meets-circuitality",
    title: "$3.8 Billion Lost to Smart Contract Bugs. The Fix: Bugs Don't Compile.",
    excerpt:
      "Smart contracts can't be patched. BRIK64 prevents the bugs at compile time. Domain constraints, exhaustive coverage, circuit closure. Deploy with a certificate, not a prayer.",
    date: "MAR 30, 2026",
    tag: "PRODUCT",
    category: "Product",
  },
  {
    slug: "safety-critical-software",
    title: "DO-178C Costs $1M. BRIK64 Generates the Same Evidence at Compile Time.",
    excerpt:
      "Aerospace, medical devices, automotive — certification costs are crushing. BRIK64 produces formal verification evidence automatically. Same quality. Fraction of the cost.",
    date: "MAR 30, 2026",
    tag: "PRODUCT",
    category: "Product",
  },
  {
    slug: "benchmarks-110k-tests",
    title: "110K Tests. 14 Targets. 207 Proofs. 0 Failures. The Numbers.",
    excerpt:
      "No marketing. Pure data. Every monomer exhaustively tested, every backend verified, every proof machine-checked. Reproducible. Auditable. Permanent.",
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
