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
      "Every language lets bugs ship. BRIK64 makes them impossible. 64 verified operations, algebraic composition, and a compiler that proves your code correct before it runs. If it compiles, it works. Free. Ready today.",
    date: "JAN 15, 2026",
    tag: "VISION",
    category: "Foundations",
  },
  {
    slug: "first-pcd-circuit",
    title: "From Zero to Certified in Five Minutes",
    excerpt:
      "Three commands. One certified program. No PhD, no annotations, no ceremony. Install BRIK64, write your first circuit, and watch the compiler prove it correct. Start building.",
    date: "MAR 5, 2026",
    tag: "TUTORIAL",
    category: "Getting Started",
  },
  {
    slug: "eva-algebra-deep-dive",
    title: "Three Operators. That's All You Need.",
    excerpt:
      "Sequential. Parallel. Conditional. Three algebraic operators that guarantee correctness composes. If the parts work, the whole works. Other languages hope. EVA algebra proves it.",
    date: "MAR 1, 2026",
    tag: "DEEP DIVE",
    category: "Theory",
  },
  {
    slug: "universal-transpiler",
    title: "10 Languages In. 14 Out. Every Path Certified.",
    excerpt:
      "One command. 140 certified conversion paths. Your JavaScript becomes Rust. Your Python becomes Go. Every output is mathematically equivalent to the input. No other tool on Earth does this.",
    date: "MAR 23, 2026",
    tag: "PRODUCT",
    category: "Product",
  },
  {
    slug: "error-elimination",
    title: "Your Tests Pass. Your Code Is Still Wrong.",
    excerpt:
      "We took 15 functions. All tests green. All 15 had real bugs. BRIK64 caught every single one — because certification is not testing. It's proof. Start building.",
    date: "MAR 24, 2026",
    tag: "VERIFICATION",
    category: "Engineering",
  },
  {
    slug: "cobol-migration-revolution",
    title: "$3 Billion a Year on Dead Code. We Fixed That.",
    excerpt:
      "220 billion lines of COBOL. A retiring workforce. A 60% failure rate. BRIK64 lifts COBOL one function at a time — verified, incremental, zero risk. The migration starts today.",
    date: "MAR 21, 2026",
    tag: "MIGRATION",
    category: "Product",
  },
  {
    slug: "bpu-hardware-that-says-no",
    title: "A $10 Chip That Makes AI Harm Impossible.",
    excerpt:
      "ABS prevents wheels from locking. The BPU prevents AI from causing harm. Hardware-level verification of every action. No override. No bypass. No negotiation.",
    date: "JAN 29, 2026",
    tag: "HARDWARE",
    category: "Hardware",
  },
  {
    slug: "why-your-ai-needs-blueprints",
    title: "AI Writes the Code. AI Writes the Test. Nobody Catches the Bug.",
    excerpt:
      "The test misses the bug for the same reason the code has the bug — they share the same blind spot. BRIK64 breaks the circle with independent mathematical verification.",
    date: "MAR 20, 2026",
    tag: "PRODUCT",
    category: "AI Safety",
  },
  {
    slug: "pcd-for-ai-agents",
    title: "Your AI Agent Just Learned to Ship Certified Code.",
    excerpt:
      "128 operations. 14 targets. Automatic certification. PCD is the language where broken code cannot compile. Point your agent at it and let the compiler do the rest.",
    date: "FEB 10, 2026",
    tag: "AI AGENTS",
    category: "AI",
  },
  {
    slug: "kish-ferry-distinction",
    title: "The Physics Error That Fooled Computer Science for 60 Years",
    excerpt:
      "Kish & Ferry (2018) proved information entropy and thermal entropy are entirely different quantities. BRIK64 is built on the correct foundation. Here's why that matters.",
    date: "MAR 12, 2026",
    tag: "RESEARCH",
    category: "Research",
  },
  {
    slug: "prof-kish-noise-logic",
    title: "The Physicist Who Proved Noise Can Compute",
    excerpt:
      "Prof. Laszlo B. Kish challenged a 60-year assumption, invented noise-based logic, and shaped the theoretical foundation of Digital Circuitality. This is his story.",
    date: "MAR 15, 2026",
    tag: "RESEARCH",
    category: "Research",
  },
  {
    slug: "ai-safety-policy-circuits",
    title: "Your AI Guardrails Are Made of Paper. Ours Are Made of Math.",
    excerpt:
      "RLHF, system prompts, software filters — all run on the same CPU as the AI they protect. Policy circuits are mathematically certified, deterministic, and unhackable. Deploy them today.",
    date: "JAN 22, 2026",
    tag: "AI SAFETY",
    category: "AI Safety",
  },
  {
    slug: "ai-guardrails-for-robots",
    title: "Stop Teaching Robots to Want Safety. Make Unsafe Actions Impossible.",
    excerpt:
      "RLHF teaches preference. Policy circuits enforce physics. Hardware-level ALLOW/BLOCK for every robot arm, every autonomous vehicle, every AI agent. No override. No negotiation.",
    date: "MAR 8, 2026",
    tag: "AI SAFETY",
    category: "AI Safety",
  },
  {
    slug: "reverse-compile-anything",
    title: "Point It at Your Code. Get a Certified Blueprint.",
    excerpt:
      "The Lifter reverse-compiles 12 languages into PCD blueprints. No rewriting. No new syntax to learn. Just point, lift, and certify what you already have. Free. Ready today.",
    date: "MAR 21, 2026",
    tag: "TOOLING",
    category: "Product",
  },
  {
    slug: "javascript-to-rust-3-commands",
    title: "JavaScript to Rust. Three Commands. Done.",
    excerpt:
      "Lift. Check. Build. Your JavaScript becomes certified Rust with auto-generated tests. Not AI translation — generation from a proven specification. Start building.",
    date: "MAR 21, 2026",
    tag: "TUTORIAL",
    category: "Getting Started",
  },
  {
    slug: "verification-gap",
    title: "Software Is 50 Years Behind Hardware. We Just Closed the Gap.",
    excerpt:
      "Hardware engineers verify 100 billion transistors through compositional proof. Software engineers test 70% and hope. BRIK64 brings hardware-grade verification to every developer. Today.",
    date: "FEB 20, 2026",
    tag: "RESEARCH",
    category: "Research",
  },
  {
    slug: "clean-code-from-blueprints",
    title: "Spaghetti In. Clean, Certified Code Out. Any Language.",
    excerpt:
      "Extract the math from your worst codebase, verify it, and recompile into clean code with auto-generated tests — in any of 14 languages. The blueprint is the product.",
    date: "MAR 21, 2026",
    tag: "REVOLUTION",
    category: "Product",
  },
  {
    slug: "translation-validation",
    title: "30 Functions. Two Languages. Zero Divergences.",
    excerpt:
      "30 PCD programs compiled to JavaScript and Python. Outputs compared bit-for-bit across 50,000+ test runs. Not one difference. That's what 'equivalent' actually means.",
    date: "MAR 24, 2026",
    tag: "RESEARCH",
    category: "Research",
  },
  {
    slug: "building-with-sdks",
    title: "Drop 64 Verified Operations Into Your Code. Today.",
    excerpt:
      "BRIK64 SDKs bring 64 mathematically certified operations to Rust, JavaScript, and Python. No rewrite. Verify the critical parts. Ship the rest as-is. Free. Ready today.",
    date: "FEB 25, 2026",
    tag: "SDKS",
    category: "Getting Started",
  },
  {
    slug: "what-artificial-intuition-cant-verify",
    title: "AI Has Intuition. It Doesn't Have Proof.",
    excerpt:
      "Carlos E. Perez is right: AI is intuition, not intelligence. But intuition without certification is a liability. BRIK64 provides the proof that AI's brain cannot.",
    date: "MAR 22, 2026",
    tag: "AI SAFETY",
    category: "AI Safety",
  },
  {
    slug: "your-code-exists-now-verify",
    title: "Which of Your Functions Are Provably Correct? Now You Know.",
    excerpt:
      "Point the Lifter at your codebase. In seconds, you know exactly which functions are mathematically certified and which are not. No annotations. No rewriting. Just truth.",
    date: "MAR 18, 2026",
    tag: "PRODUCT",
    category: "Product",
  },
  {
    slug: "full-spectrum-pcd",
    title: "128 Operations. Banking to Game Engines. Measurable Certainty.",
    excerpt:
      "64 certified, 64 extended. Build anything from trading systems to real-time games. The compiler tells you exactly how much is proven. Other languages give you zero percent.",
    date: "FEB 15, 2026",
    tag: "ENGINEERING",
    category: "Engineering",
  },
  {
    slug: "precision-as-domain",
    title: "0.1 + 0.2 = 0.30000000000000004. We Fixed That.",
    excerpt:
      "Every language lies about decimal math. BRIK64 does not. Declare your precision. The compiler enforces it. Exact arithmetic, certified, on every machine. Start building.",
    date: "FEB 5, 2026",
    tag: "ENGINEERING",
    category: "Engineering",
  },
  {
    slug: "adversarial-corpus",
    title: "110,227 Tests. Zero Failures. We Tried to Break Our Own Compiler.",
    excerpt:
      "Seven levels of adversarial testing. Every monomer, every backend, every language, every edge case. 110,227 attempts to find a single failure. We found none.",
    date: "MAR 24, 2026",
    tag: "ENGINEERING",
    category: "Engineering",
  },
  {
    slug: "api-and-mcp",
    title: "Your AI Agent Now Speaks PCD. Ship Certified Code to a Global Registry.",
    excerpt:
      "REST API. MCP server. Two tools: discover and execute. Your AI agent writes certified code and publishes it to a global registry. One integration. Infinite reach.",
    date: "MAR 21, 2026",
    tag: "PLATFORM",
    category: "Product",
  },
  {
    slug: "why-new-language",
    title: "700 Languages. Zero Guarantees. That's Why We Built BRIK64.",
    excerpt:
      "Python does not prove correctness. Rust does not prove logic. Not one of 700+ languages guarantees your program works. BRIK64 does. If it compiles, it works. Free. Ready today.",
    date: "MAR 30, 2026",
    tag: "VISION",
    category: "Foundations",
  },
  {
    slug: "formal-verification-without-phd",
    title: "207 Proofs. Zero Admits. You Write None of Them.",
    excerpt:
      "207 mathematical proofs behind every compilation. You write code with domain constraints. The compiler does the rest. Verification as simple as hitting enter.",
    date: "MAR 30, 2026",
    tag: "VISION",
    category: "Foundations",
  },
  {
    slug: "blockchain-meets-circuitality",
    title: "Smart Contracts Cannot Be Patched. So the Bugs Cannot Ship.",
    excerpt:
      "$3.8 billion lost to DeFi hacks in 2022. Every one caused by code that passed audits. BRIK64 makes those bugs impossible to compile. Deploy with a mathematical certificate.",
    date: "MAR 30, 2026",
    tag: "PRODUCT",
    category: "Product",
  },
  {
    slug: "safety-critical-software",
    title: "DO-178C Costs $1M. BRIK64 Generates the Evidence at Compile Time.",
    excerpt:
      "Aerospace, medical devices, autonomous vehicles — when a bug kills, you need proof. BRIK64 generates formal verification evidence automatically. Same rigor. A fraction of the cost.",
    date: "MAR 30, 2026",
    tag: "PRODUCT",
    category: "Product",
  },
  {
    slug: "benchmarks-110k-tests",
    title: "110K Tests. 14 Targets. 207 Proofs. The Hard Numbers.",
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
