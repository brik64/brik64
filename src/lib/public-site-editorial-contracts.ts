export type BuyerPersona = "cto_vp_eng";

export type ClaimClass = "direct" | "qualified" | "blocked";

export type ContentAtom = {
  id: string;
  route: string;
  topic: "thesis" | "capability" | "workflow" | "evidence" | "boundary" | "cta";
  sourceText: string;
  targetIntent: string;
  claimClass: ClaimClass;
  evidenceSource?: string;
  preserve: true;
};

export type RouteEditorialSpec = {
  route: string;
  buyer: BuyerPersona;
  objective: string;
  mustPreserveAtoms: string[];
  requiredBoundaries: string[];
  blockedPhrases: string[];
  ctaTargets: string[];
};

export const PUBLIC_EDITORIAL_BLOCKLIST = [
  "The page should",
  "This page should",
  "Use this page",
  "utility surface",
  "action rail",
  "docs rail",
  "page surface",
  "promissory copy",
  "No other compiler on earth",
  "100% liftability guarantee",
  "Proven for ALL possible inputs",
  "never needs debugging",
  "unhackable",
] as const;

export const PUBLIC_ROUTE_EDITORIAL_SPECS: RouteEditorialSpec[] = [
  {
    route: "/about",
    buyer: "cto_vp_eng",
    objective:
      "Explain company thesis through operating model, evidence posture, and integration path into product routes.",
    mustPreserveAtoms: [
      "about-thesis-digital-circuitality",
      "about-stack-pcd-compiler-platform",
      "about-science-basis",
      "about-ai-workflow",
    ],
    requiredBoundaries: [
      "Formal guarantees apply to bounded circuit model and declared domains.",
      "Positioning language must not be presented as market proof.",
    ],
    blockedPhrases: [...PUBLIC_EDITORIAL_BLOCKLIST],
    ctaTargets: ["/foundations", "/platform", "https://docs.brik64.dev"],
  },
  {
    route: "/pricing",
    buyer: "cto_vp_eng",
    objective:
      "Map open, team, and enterprise routes with explicit scope boundaries and evidence posture.",
    mustPreserveAtoms: [
      "pricing-tier-map",
      "pricing-comparison-matrix",
      "pricing-enterprise-path",
      "pricing-faq-commercial",
    ],
    requiredBoundaries: [
      "Commercial and compliance wording must reflect available scope versus evaluation path.",
    ],
    blockedPhrases: [...PUBLIC_EDITORIAL_BLOCKLIST],
    ctaTargets: ["/enterprise", "/platform", "/contact"],
  },
  {
    route: "/download",
    buyer: "cto_vp_eng",
    objective:
      "Present install and delivery paths with real availability and explicit handoffs to docs and product.",
    mustPreserveAtoms: [
      "download-cli-binaries",
      "download-sdk-packages",
      "download-platform-posture",
      "download-install-workflow",
    ],
    requiredBoundaries: [
      "Availability claims must remain tied to documented install artifacts.",
    ],
    blockedPhrases: [...PUBLIC_EDITORIAL_BLOCKLIST],
    ctaTargets: ["/cli", "/platform", "https://docs.brik64.dev"],
  },
  {
    route: "/enterprise",
    buyer: "cto_vp_eng",
    objective:
      "Describe deployment, review, and governance posture for enterprise adoption without unsupported guarantees.",
    mustPreserveAtoms: [
      "enterprise-private-scope",
      "enterprise-identity-controls",
      "enterprise-audit-posture",
      "enterprise-operator-workflow",
    ],
    requiredBoundaries: [
      "Enterprise support claims must remain scoped to review and workflow posture.",
    ],
    blockedPhrases: [...PUBLIC_EDITORIAL_BLOCKLIST],
    ctaTargets: ["/contact", "/platform"],
  },
  {
    route: "/ai-agents",
    buyer: "cto_vp_eng",
    objective:
      "Frame AI as bounded producer with external verification loop and explicit policy boundaries.",
    mustPreserveAtoms: [
      "ai-agents-discover-check-execute",
      "ai-agents-policy-gates",
      "ai-agents-diagnostics-loop",
      "ai-agents-boundary-non-trust-default",
    ],
    requiredBoundaries: [
      "Model output is not proof source; verification stays external to the model.",
    ],
    blockedPhrases: [...PUBLIC_EDITORIAL_BLOCKLIST],
    ctaTargets: ["/ai", "/platform", "/cli"],
  },
  {
    route: "/foundations",
    buyer: "cto_vp_eng",
    objective:
      "Keep scientific depth while distinguishing theorem, analogy, product implication, and claim boundary.",
    mustPreserveAtoms: [
      "foundations-formal-definition",
      "foundations-thermodynamic-analogy",
      "foundations-eva-framework",
      "foundations-claim-boundary",
    ],
    requiredBoundaries: [
      "Analogy language must not be presented as unrestricted physical truth.",
      "Formal claims are scoped to modeled circuit representation.",
    ],
    blockedPhrases: [...PUBLIC_EDITORIAL_BLOCKLIST],
    ctaTargets: ["/pcd", "/platform", "/docs"],
  },
  {
    route: "/bpu",
    buyer: "cto_vp_eng",
    objective:
      "Present BPU as software-now plus hardware roadmap with explicit phase boundaries.",
    mustPreserveAtoms: [
      "bpu-policy-enforcement-concept",
      "bpu-software-phase",
      "bpu-fpga-phase",
      "bpu-silicon-phase",
    ],
    requiredBoundaries: [
      "Roadmap capabilities must not be presented as currently available silicon behavior.",
    ],
    blockedPhrases: [...PUBLIC_EDITORIAL_BLOCKLIST],
    ctaTargets: ["/pcd", "/docs", "/platform"],
  },
  {
    route: "/pcd",
    buyer: "cto_vp_eng",
    objective:
      "Keep PCD as formal technical reference for bounded computation and compiler-facing blueprints.",
    mustPreserveAtoms: [
      "pcd-format-not-scripting-language",
      "pcd-domain-declarations",
      "pcd-monomer-core-and-bridges",
      "pcd-eva-composition",
    ],
    requiredBoundaries: [
      "PCD claim language must stay technical and avoid universal marketing guarantees.",
    ],
    blockedPhrases: [...PUBLIC_EDITORIAL_BLOCKLIST],
    ctaTargets: ["/cli", "https://docs.brik64.dev"],
  },
];

