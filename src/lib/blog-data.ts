import { getEditorialCover, type EditorialCoverMeta, type EditorialCoverTheme } from "@/lib/editorial-utils";

export interface BlogPost extends EditorialCoverMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  category: string;
}

interface BlogPostSeed {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  category: string;
  coverTheme: EditorialCoverTheme;
}

const blogPostSeeds: BlogPostSeed[] = [
  {
    slug: "what-is-digital-circuitality",
    title: "What Digital Circuitality Tries to Formalize",
    excerpt:
      "A bounded programming model built from reviewed operations, explicit composition, and closure checks. This essay explains the formal claim, its limits, and why it differs from testing.",
    date: "JAN 15, 2026",
    tag: "VISION",
    category: "Foundations",
    coverTheme: "blueprint-grid",
  },
  {
    slug: "first-pcd-circuit",
    title: "First PCD Circuit: A Minimal Walkthrough",
    excerpt:
      "Install the CLI, write a small circuit, and inspect the bounded output path. A practical introduction to the format and the compile step.",
    date: "MAR 5, 2026",
    tag: "TUTORIAL",
    category: "Getting Started",
    coverTheme: "blueprint-grid",
  },
  {
    slug: "eva-algebra-deep-dive",
    title: "EVA Algebra: Sequence, Parallel, Conditional",
    excerpt:
      "How three composition operators carry sequencing, fan-out, and branching through the circuit model, and what that means for compiler readability and closure.",
    date: "MAR 1, 2026",
    tag: "DEEP DIVE",
    category: "Theory",
    coverTheme: "circuit-lab",
  },
  {
    slug: "universal-transpiler",
    title: "One Blueprint Across Multiple Targets",
    excerpt:
      "How the transpilation chain uses PCD as a bounded intermediate form, what 10 source languages and 14 targets mean in practice, and where the equivalence claim stops.",
    date: "MAR 23, 2026",
    tag: "PRODUCT",
    category: "Product",
    coverTheme: "migration-bridge",
  },
  {
    slug: "error-elimination",
    title: "Why Tests Passing Is Not the Same as Closure",
    excerpt:
      "A look at sampled testing versus bounded verification, with examples of logic that passed tests but still required stronger structural checks.",
    date: "MAR 24, 2026",
    tag: "VERIFICATION",
    category: "Engineering",
    coverTheme: "finance-evidence",
  },
  {
    slug: "cobol-migration-revolution",
    title: "COBOL Migration Through Bounded Lift-and-Review",
    excerpt:
      "Why legacy modernization benefits from lifting review-critical logic into a bounded blueprint before transpilation or replacement.",
    date: "MAR 21, 2026",
    tag: "MIGRATION",
    category: "Product",
    coverTheme: "migration-bridge",
  },
  {
    slug: "bpu-hardware-that-says-no",
    title: "BPU: Policy Enforcement as a Hardware Roadmap",
    excerpt:
      "Why software-only guardrails share execution context with the model they constrain, and how the BPU roadmap moves policy enforcement toward FPGA and silicon.",
    date: "JAN 29, 2026",
    tag: "HARDWARE",
    category: "Hardware",
    coverTheme: "hardware-control",
  },
  {
    slug: "why-your-ai-needs-blueprints",
    title: "Why AI-Generated Code Needs Blueprints and External Checks",
    excerpt:
      "Generated code and generated tests can fail together. This note explains why BRIK64 keeps verification outside the model loop.",
    date: "MAR 20, 2026",
    tag: "PRODUCT",
    category: "AI Safety",
    coverTheme: "agent-proof",
  },
  {
    slug: "pcd-for-ai-agents",
    title: "PCD for AI Agents: A Small Format with an External Proof Loop",
    excerpt:
      "How a finite grammar helps agents author bounded logic while the compiler and policy checks stay outside the model.",
    date: "FEB 10, 2026",
    tag: "AI AGENTS",
    category: "AI",
    coverTheme: "agent-proof",
  },
  {
    slug: "kish-ferry-distinction",
    title: "Informational Entropy Is Not Thermal Entropy",
    excerpt:
      "Why the distinction matters for the foundations story and how it sharpens the claim boundary around Digital Circuitality.",
    date: "MAR 12, 2026",
    tag: "RESEARCH",
    category: "Research",
    coverTheme: "research-wave",
  },
  {
    slug: "prof-kish-noise-logic",
    title: "Laszlo B. Kish and the Information-Theory Thread",
    excerpt:
      "A research profile on the ideas that influenced the information-theoretic framing behind Digital Circuitality.",
    date: "MAR 15, 2026",
    tag: "RESEARCH",
    category: "Research",
    coverTheme: "research-wave",
  },
  {
    slug: "ai-safety-policy-circuits",
    title: "Policy Circuits for AI Safety Workflows",
    excerpt:
      "How external policy circuits can gate generated code and agent actions without claiming to solve general alignment.",
    date: "JAN 22, 2026",
    tag: "AI SAFETY",
    category: "AI Safety",
    coverTheme: "agent-proof",
  },
  {
    slug: "ai-guardrails-for-robots",
    title: "From Preferences to Enforced Action Boundaries",
    excerpt:
      "Why robotics and agent systems need explicit action gates, bounded state, and reviewable fallback paths.",
    date: "MAR 8, 2026",
    tag: "AI SAFETY",
    category: "AI Safety",
    coverTheme: "hardware-control",
  },
  {
    slug: "reverse-compile-anything",
    title: "Lifting Existing Code into a Reviewable Blueprint",
    excerpt:
      "What the Lifter preserves, where liftability evidence exists in the repo, and how bounded blueprints help before migration.",
    date: "MAR 21, 2026",
    tag: "TOOLING",
    category: "Product",
    coverTheme: "migration-bridge",
  },
  {
    slug: "javascript-to-rust-3-commands",
    title: "A Bounded JavaScript-to-Rust Workflow",
    excerpt:
      "Lift the logic, review the bounded blueprint, then emit a target language while keeping the claim attached to the intermediate circuit.",
    date: "MAR 21, 2026",
    tag: "TUTORIAL",
    category: "Getting Started",
    coverTheme: "migration-bridge",
  },
  {
    slug: "verification-gap",
    title: "Why Software Verification Still Looks Different from Hardware",
    excerpt:
      "A comparison between sampled software testing and the compositional review posture hardware teams expect.",
    date: "FEB 20, 2026",
    tag: "RESEARCH",
    category: "Research",
    coverTheme: "research-wave",
  },
  {
    slug: "clean-code-from-blueprints",
    title: "Blueprints Before Refactors",
    excerpt:
      "How extracting bounded computation from an existing codebase can make rewrites and target changes easier to review.",
    date: "MAR 21, 2026",
    tag: "REVOLUTION",
    category: "Product",
    coverTheme: "migration-bridge",
  },
  {
    slug: "translation-validation",
    title: "Translation Validation Across Two Targets",
    excerpt:
      "A look at cross-target output comparison, what it can support, and what still depends on the bounded intermediate form.",
    date: "MAR 24, 2026",
    tag: "RESEARCH",
    category: "Research",
    coverTheme: "research-wave",
  },
  {
    slug: "building-with-sdks",
    title: "Working with the SDKs Without Leaving the Bounded Model",
    excerpt:
      "How the Rust, JavaScript, and Python SDKs expose BRIK64 patterns while keeping the formal core distinct from host-language code.",
    date: "FEB 25, 2026",
    tag: "SDKS",
    category: "Getting Started",
    coverTheme: "registry-atlas",
  },
  {
    slug: "what-artificial-intuition-cant-verify",
    title: "What AI Intuition Still Cannot Verify",
    excerpt:
      "Why intuition without an external proof path remains a risk, and where BRIK64 fits in that boundary.",
    date: "MAR 22, 2026",
    tag: "AI SAFETY",
    category: "AI Safety",
    coverTheme: "agent-proof",
  },
  {
    slug: "your-code-exists-now-verify",
    title: "Which Parts of a Codebase Are Ready for Stronger Review?",
    excerpt:
      "Use lifting and bounded analysis to identify review-critical functions before migration or certification work.",
    date: "MAR 18, 2026",
    tag: "PRODUCT",
    category: "Product",
    coverTheme: "registry-atlas",
  },
  {
    slug: "full-spectrum-pcd",
    title: "128 Operations and the Boundary Between Core and Bridges",
    excerpt:
      "A tour of the reviewed core, the contract-bounded extensions, and what that split means for technical scope.",
    date: "FEB 15, 2026",
    tag: "ENGINEERING",
    category: "Engineering",
    coverTheme: "blueprint-grid",
  },
  {
    slug: "precision-as-domain",
    title: "Precision as a Declared Domain",
    excerpt:
      "Why bounded numeric domains matter for floating behavior, decimal handling, and reviewable arithmetic.",
    date: "FEB 5, 2026",
    tag: "ENGINEERING",
    category: "Engineering",
    coverTheme: "finance-evidence",
  },
  {
    slug: "adversarial-corpus",
    title: "Adversarial Testing Against the Compiler Chain",
    excerpt:
      "How the team tries to break the compiler and what those tests can and cannot prove about the formal system.",
    date: "MAR 24, 2026",
    tag: "ENGINEERING",
    category: "Engineering",
    coverTheme: "circuit-lab",
  },
  {
    slug: "api-and-mcp",
    title: "API and MCP Access Around the Registry",
    excerpt:
      "How discover-and-execute workflows expose registry and platform operations to humans and agents without enlarging the proof claim.",
    date: "MAR 21, 2026",
    tag: "PLATFORM",
    category: "Product",
    coverTheme: "registry-atlas",
  },
  {
    slug: "why-new-language",
    title: "Why a New Format Instead of Another General-Purpose Language",
    excerpt:
      "Why BRIK64 introduces PCD as a bounded computational format rather than extending a conventional language with another annotation layer.",
    date: "MAR 30, 2026",
    tag: "VISION",
    category: "Foundations",
    coverTheme: "blueprint-grid",
  },
  {
    slug: "formal-verification-without-phd",
    title: "What the Proof Material Means for Users",
    excerpt:
      "A practical note on the proof files behind the compiler and what remains invisible to a normal authoring workflow.",
    date: "MAR 30, 2026",
    tag: "VISION",
    category: "Foundations",
    coverTheme: "compliance-ledger",
  },
  {
    slug: "blockchain-meets-circuitality",
    title: "Bounded Contract Logic Before Deployment",
    excerpt:
      "Why smart contract workflows benefit from explicit state boundaries, value constraints, and reviewable rule sets before deployment.",
    date: "MAR 30, 2026",
    tag: "PRODUCT",
    category: "Product",
    coverTheme: "finance-evidence",
  },
  {
    slug: "safety-critical-software",
    title: "Safety-Critical Software Needs a Readable Assurance Path",
    excerpt:
      "How bounded software evidence can support engineering review in high-consequence domains without replacing the broader safety program.",
    date: "MAR 30, 2026",
    tag: "PRODUCT",
    category: "Product",
    coverTheme: "compliance-ledger",
  },
  {
    slug: "benchmarks-110k-tests",
    title: "Compiler Evidence: Targets, Proof Files, and Test Scope",
    excerpt:
      "A summary of the public numbers that can be stated responsibly and the limits of what those numbers prove.",
    date: "MAR 30, 2026",
    tag: "ENGINEERING",
    category: "Engineering",
    coverTheme: "circuit-lab",
  },
  {
    slug: "ai-governance-compliance-evidence",
    title: "AI Governance Workflows Need Reviewable Technical Evidence",
    excerpt:
      "How bounded software evidence can help teams carry AI governance reviews into compliance workflows without implying full legal coverage.",
    date: "APR 2, 2026",
    tag: "AI SAFETY",
    category: "AI Safety",
    coverTheme: "compliance-ledger",
  },
];

export const blogPosts: BlogPost[] = blogPostSeeds.map((post) => ({
  ...post,
  ...getEditorialCover(post.coverTheme, `Editorial cover for ${post.title}`),
}));

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.tag === tag);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getAllTags(): string[] {
  return [...new Set(blogPosts.map((post) => post.tag))];
}

export function getAllCategories(): string[] {
  return [...new Set(blogPosts.map((post) => post.category))];
}
