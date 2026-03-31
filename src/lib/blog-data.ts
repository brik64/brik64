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
    title: "64 Operations. Infinite Programs. Zero Bugs.",
    excerpt:
      "Every programming language lets bugs compile. BRIK64 doesn't. 64 mathematically certified operations, algebraic composition, and a compiler that proves your code correct. If it compiles, it works.",
    date: "JAN 15, 2026",
    tag: "VISION",
    category: "Foundations",
  },
  {
    slug: "first-pcd-circuit",
    title: "Your First Certified Program in 5 Minutes",
    excerpt:
      "Install. Write. Compile. Certified. From zero to a mathematically proven program in under five minutes. No PhD required — just three commands.",
    date: "MAR 5, 2026",
    tag: "TUTORIAL",
    category: "Getting Started",
  },
  {
    slug: "eva-algebra-deep-dive",
    title: "The Three Operators That Make Bugs Impossible",
    excerpt:
      "Sequential. Parallel. Conditional. Three algebraic operators that guarantee correctness composes — if the parts work, the whole works. Other languages hope. EVA algebra proves.",
    date: "MAR 1, 2026",
    tag: "DEEP DIVE",
    category: "Theory",
  },
  {
    slug: "universal-transpiler",
    title: "10 Languages In, 14 Out — Every Path Certified",
    excerpt:
      "Every transpiler converts one language to one other. BRIK64 converts any of 10 to any of 14 — with a mathematical certificate that the output is equivalent to the input. 140 paths. One command.",
    date: "MAR 23, 2026",
    tag: "PRODUCT",
    category: "Product",
  },
  {
    slug: "error-elimination",
    title: "Your Tests Pass. Your Code Is Still Wrong.",
    excerpt:
      "15 functions. All tests green. All 15 contain real bugs. BRIK64 catches every single one — because certification isn't testing. It's proof.",
    date: "MAR 24, 2026",
    tag: "VERIFICATION",
    category: "Engineering",
  },
  {
    slug: "cobol-migration-revolution",
    title: "$3 Billion a Year Maintaining Dead Code. We Fixed That.",
    excerpt:
      "220 billion lines of COBOL. A retiring workforce. A 60% migration failure rate. BRIK64 lifts COBOL one function at a time — verified, incremental, zero risk.",
    date: "MAR 21, 2026",
    tag: "MIGRATION",
    category: "Product",
  },
  {
    slug: "bpu-hardware-that-says-no",
    title: "The Chip That Says No — Hardware-Enforced AI Safety",
    excerpt:
      "ABS prevents wheels from locking. The BPU prevents AI from doing harm. A $10 chip that verifies every action in hardware. No override. No bypass. No negotiation.",
    date: "JAN 29, 2026",
    tag: "HARDWARE",
    category: "Hardware",
  },
  {
    slug: "why-your-ai-needs-blueprints",
    title: "Your AI Writes Code. Nobody Verifies It. That's the Problem.",
    excerpt:
      "AI writes the function. AI writes the test. The test misses the bug for the same reason the code has the bug. BRIK64 breaks the circle with independent mathematical verification.",
    date: "MAR 20, 2026",
    tag: "PRODUCT",
    category: "AI Safety",
  },
  {
    slug: "pcd-for-ai-agents",
    title: "Tell Your AI What to Build. The Compiler Proves It's Correct.",
    excerpt:
      "128 operations. 14 targets. Automatic certification. PCD is the language where AI agents can't ship broken code — because broken code doesn't compile.",
    date: "FEB 10, 2026",
    tag: "AI AGENTS",
    category: "AI",
  },
  {
    slug: "kish-ferry-distinction",
    title: "The Physics Error That Fooled Computer Science for 60 Years",
    excerpt:
      "Kish & Ferry (2018) proved information entropy and thermal entropy are completely different quantities. What this means for BRIK64 and why our framework is stronger for it.",
    date: "MAR 12, 2026",
    tag: "RESEARCH",
    category: "Research",
  },
  {
    slug: "prof-kish-noise-logic",
    title: "The Physicist Who Proved Noise Can Compute",
    excerpt:
      "Prof. Laszlo B. Kish challenged Landauer's principle, invented noise-based logic, and shaped the theoretical foundation of Digital Circuitality. This is his story.",
    date: "MAR 15, 2026",
    tag: "RESEARCH",
    category: "Research",
  },
  {
    slug: "ai-safety-policy-circuits",
    title: "Your AI Guardrails Are Made of Paper. Ours Are Made of Math.",
    excerpt:
      "RLHF, system prompts, software guardrails — all run on the same CPU as the AI they protect. Policy circuits are mathematically certified, deterministic, and unhackable. Deploy them today.",
    date: "JAN 22, 2026",
    tag: "AI SAFETY",
    category: "AI Safety",
  },
  {
    slug: "ai-guardrails-for-robots",
    title: "Stop Teaching Robots to Want Safety. Make Unsafe Actions Impossible.",
    excerpt:
      "RLHF teaches AI to prefer safety. Policy circuits enforce it. Hardware-level ALLOW/BLOCK for robot arms, autonomous vehicles, and AI agents. No negotiation. No override.",
    date: "MAR 8, 2026",
    tag: "AI SAFETY",
    category: "AI Safety",
  },
  {
    slug: "reverse-compile-anything",
    title: "Point It at Your Code. Get a Certified Blueprint.",
    excerpt:
      "The Lifter reverse-compiles 12 languages into PCD blueprints. No rewriting. No learning a new language. Just point, lift, and certify what you already have.",
    date: "MAR 21, 2026",
    tag: "TOOLING",
    category: "Product",
  },
  {
    slug: "javascript-to-rust-3-commands",
    title: "JavaScript to Rust. Three Commands. Verified.",
    excerpt:
      "Lift. Check. Build. Your JavaScript becomes certified Rust with auto-generated tests. Not AI translation — generation from a proven specification.",
    date: "MAR 21, 2026",
    tag: "TUTORIAL",
    category: "Getting Started",
  },
  {
    slug: "verification-gap",
    title: "Software Is 50 Years Behind Hardware. We Just Closed the Gap.",
    excerpt:
      "Hardware engineers verify 100 billion transistors through compositional proof. Software engineers test 70% of paths and pray. BRIK64 brings hardware-grade verification to software. Today.",
    date: "FEB 20, 2026",
    tag: "RESEARCH",
    category: "Research",
  },
  {
    slug: "clean-code-from-blueprints",
    title: "Messy Code In. Clean, Certified Code Out. Any Language.",
    excerpt:
      "The PCD Roundtrip: extract the math from your spaghetti code, verify it, and recompile into clean code with auto-generated tests — in any of 14 languages. The blueprint is the product.",
    date: "MAR 21, 2026",
    tag: "REVOLUTION",
    category: "Product",
  },
  {
    slug: "translation-validation",
    title: "30 Functions. Two Languages. Zero Divergences.",
    excerpt:
      "30 PCD programs compiled to JavaScript and Python. Outputs compared bit-for-bit across 50,000+ test runs. Not one difference. That's what 'equivalent' means.",
    date: "MAR 24, 2026",
    tag: "RESEARCH",
    category: "Research",
  },
  {
    slug: "building-with-sdks",
    title: "Drop Verified Operations Into Your Existing Code — Today",
    excerpt:
      "The BRIK64 SDKs bring 64 mathematically proven operations to Rust, JavaScript, and Python. No rewrite required. Verify the parts that matter. Ship the rest as-is.",
    date: "FEB 25, 2026",
    tag: "SDKS",
    category: "Getting Started",
  },
  {
    slug: "what-artificial-intuition-cant-verify",
    title: "AI Has Intuition. It Doesn't Have Proof. That's Where We Come In.",
    excerpt:
      "Carlos E. Perez is right: AI is intuition, not intelligence. But intuition without certification is a liability. BRIK64 provides the bones that AI's brain needs.",
    date: "MAR 22, 2026",
    tag: "AI SAFETY",
    category: "AI Safety",
  },
  {
    slug: "your-code-exists-now-verify",
    title: "Which of Your Functions Are Mathematically Correct? Now You Can Know.",
    excerpt:
      "Point the Lifter at your codebase. In seconds, you know exactly which functions are provably correct and which aren't. No annotations. No rewriting. Just truth.",
    date: "MAR 18, 2026",
    tag: "PRODUCT",
    category: "Product",
  },
  {
    slug: "full-spectrum-pcd",
    title: "Games, AI Pipelines, Trading Bots — Real Software, Measurable Certainty",
    excerpt:
      "128 operations: 64 certified, 64 extended. Build anything from banking to game engines. The compiler tells you exactly how much is proven. Other languages give you 0%.",
    date: "FEB 15, 2026",
    tag: "ENGINEERING",
    category: "Engineering",
  },
  {
    slug: "precision-as-domain",
    title: "0.1 + 0.2 = 0.30000000000000004. We Fixed That.",
    excerpt:
      "Every language lies about decimal math. BRIK64 doesn't. Declare your precision. The compiler enforces it. Exact arithmetic, certified, on every machine.",
    date: "FEB 5, 2026",
    tag: "ENGINEERING",
    category: "Engineering",
  },
  {
    slug: "adversarial-corpus",
    title: "110,227 Tests. 0 Failures. We Tried to Break Our Own Compiler.",
    excerpt:
      "Seven levels of adversarial testing. Every monomer, every backend, every language, every edge case. 110,227 attempts to find a single failure. We found zero.",
    date: "MAR 24, 2026",
    tag: "ENGINEERING",
    category: "Engineering",
  },
  {
    slug: "api-and-mcp",
    title: "Your AI Agent Now Speaks PCD — API, MCP, and the BRIK64 Platform",
    excerpt:
      "REST API. MCP server. Two tools: discover and execute. Your AI agent doesn't just write code — it writes certified code and publishes it to a global registry.",
    date: "MAR 21, 2026",
    tag: "PLATFORM",
    category: "Product",
  },
  {
    slug: "why-new-language",
    title: "700 Languages. Zero Guarantees. That's Why We Built BRIK64.",
    excerpt:
      "Python doesn't prove correctness. Rust doesn't prove logic. None of the 700+ languages guarantee your program works. BRIK64 does. If it compiles, it works.",
    date: "MAR 30, 2026",
    tag: "VISION",
    category: "Foundations",
  },
  {
    slug: "formal-verification-without-phd",
    title: "Formal Verification Without the PhD — Just Run the Compiler",
    excerpt:
      "207 mathematical proofs. Zero admits. You don't write any of them. You write code with domain constraints, and the compiler does the rest. Verification as simple as compilation.",
    date: "MAR 30, 2026",
    tag: "VISION",
    category: "Foundations",
  },
  {
    slug: "blockchain-meets-circuitality",
    title: "Smart Contracts Can't Be Patched. So the Bugs Can't Ship.",
    excerpt:
      "$3.8 billion lost to DeFi hacks in 2022. Every one caused by code that passed audits. BRIK64 makes those bugs impossible to compile. Deploy with a mathematical certificate.",
    date: "MAR 30, 2026",
    tag: "PRODUCT",
    category: "Product",
  },
  {
    slug: "safety-critical-software",
    title: "DO-178C Costs $1M. BRIK64 Generates the Same Evidence at Compile Time.",
    excerpt:
      "Aerospace, medical devices, autonomous vehicles — when a bug can kill, you need proof. BRIK64 generates formal verification evidence automatically. Same rigor. Fraction of the cost.",
    date: "MAR 30, 2026",
    tag: "PRODUCT",
    category: "Product",
  },
  {
    slug: "benchmarks-110k-tests",
    title: "110K Tests. 14 Targets. 207 Mathematical Proofs. The Hard Numbers.",
    excerpt:
      "No marketing. Just data. Every monomer exhaustively tested, every backend verified, every proof machine-checked. Reproduce it yourself — everything is in the repo.",
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
