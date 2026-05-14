import { ReactNode } from "react";

export type PainPoint = {
  title: string;
  description: string;
  impact: string;
};

export type Brik64Intervention = {
  feature: string;
  howItWorks: string;
  businessOutcome: string;
};

export type KeyBenefit = {
  metric: string;
  value: string;
  description: string;
};

export type FeaturedQuote = {
  title: string;
  text: string;
};

export type CaseStudy = {
  title: string;
  subtitle: string;
  description: string;
};

export type IndustrySolutionData = {
  id: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  targetAudience: string;
  painPoints: PainPoint[];
  solutionOverview: string;
  interventions: Brik64Intervention[];
  keyBenefits: KeyBenefit[];
  complianceContext: string[];
  trustMarkers: string[];
  featuredQuote: FeaturedQuote;
  caseStudy: CaseStudy;
  heroImage?: string;
  realWorldImage?: string;
  ctaImage?: string;
};

export const financeIndustryData: IndustrySolutionData = {
  id: "finance",
  title: "Financial Institutions",
  subtitle: "Deterministic Trust for Settlement and Ledger Integrity",
  heroDescription: "Achieve absolute settlement finality. BRIK-64 provides the cryptographic infrastructure required to eliminate reconciliation gaps, automate regulatory guardrails, and secure core banking logic at the speed of the market.",
  targetAudience: "CTOs, Chief Risk Officers, Head of Payments Infrastructure",
  heroImage: "/generated/finance-hero-bg.png",
  realWorldImage: "/generated/finance-day-banner.png",
  ctaImage: "/generated/finance-enterprise-cta-bg.png",
  featuredQuote: {
    title: "Institutional Settlement",
    text: "Absolute Finality under Peak Volatility"
  },
  caseStudy: {
    title: "Institutional Settlement",
    subtitle: "Absolute Finality under Peak Volatility",
    description: "Financial infrastructure leads can eliminate reconciliation gaps by enforcing cryptographic determinism at the ledger level. BRIK-64 ensures that every payment authorization, risk check, and settlement instruction is mathematically verifiable before execution. This provides absolute settlement finality and prevents liquidity lock-ups during peak volatility while maintaining a continuous audit posture for regulators."
  },
  painPoints: [
    {
      title: "Settlement Risk & Reconciliation",
      description: "Asynchronous processing and eventual consistency in legacy ledgers create reconciliation gaps that increase operational risk and lock up capital.",
      impact: "T+2 settlement delays and millions in trapped liquidity due to manual verification cycles."
    },
    {
      title: "Regulatory Handoff Latency",
      description: "Manual preparation for PCI-DSS, SOX, and Basel III audits creates a constant “compliance debt” that slows down deployment of new financial products.",
      impact: "Regulatory friction adding 3–6 months to product launch cycles and increasing audit-failure risk."
    },
    {
      title: "Transaction Integrity Failure",
      description: "Fragmented trust boundaries across microservices allow for edge-case fraud and double-spending vulnerabilities in high-frequency environments.",
      impact: "Irreversible financial loss and systemic reputational damage within institutional banking."
    }
  ],
  solutionOverview: "BRIK-64 establishes a formal control plane for financial logic. By enforcing cryptographic determinism at the instruction level, we ensure that every ledger entry, payment authorization, and risk check is mathematically verifiable before execution.",
  interventions: [
    {
      feature: "Atomic Ledger Transitions",
      howItWorks: "Ensures that every state change in the core ledger is cryptographically linked and mutually exclusive, preventing race conditions.",
      businessOutcome: "Instantaneous settlement finality with zero reconciliation overhead between internal systems."
    },
    {
      feature: "Automated Compliance Circuits",
      howItWorks: "Bakes regulatory constraints (AML/KYC thresholds, exposure limits) directly into the verifiable software blueprint.",
      businessOutcome: "Continuous auditability that reduces compliance reporting time by 95% and eliminates human error."
    },
    {
      feature: "Sub-millisecond Policy Enforcement",
      howItWorks: "Evaluates complex risk and authorization policies at the edge using dedicated cryptographic hardware paths.",
      businessOutcome: "Stops lateral fraud movement in real-time without impacting transaction throughput or user experience."
    }
  ],
  keyBenefits: [
    {
      metric: "Settlement Time",
      value: "Real-Time",
      description: "Eliminate the need for T+N settlement cycles through deterministic verification."
    },
    {
      metric: "Audit Overhead",
      value: "Near Zero",
      description: "Cryptographically proven compliance dossiers generated automatically for regulators."
    },
    {
      metric: "Systemic Trust",
      value: "100%",
      description: "Mathematical certainty in ledger integrity and transaction history."
    },
    {
      metric: "Capital Efficiency",
      value: "+40%",
      description: "Release trapped liquidity by automating collateral management and margin calls."
    }
  ],
  complianceContext: ["PCI-DSS Level 1", "SOC 2 Type II", "Basel III Guardrails", "SOX 404", "GDPR/CCPA"],
  trustMarkers: [
    "Deterministic Settlement", 
    "Cryptographic Ledger Integrity", 
    "Immutable Audit Trails",
    "Provable Rule Enforcement"
  ]
};

export const aerospaceIndustryData: IndustrySolutionData = {
  id: "aerospace",
  title: "Aerospace & Defense",
  subtitle: "Deterministic Control Envelopes for Flight Software",
  heroDescription: "Express envelope limits, mode transitions, and degraded behavior as bounded control artifacts before certification packaging absorbs the software boundary.",
  targetAudience: "Avionics and control-systems leads",
  heroImage: "/generated/aerospace-hero-bg.png",
  realWorldImage: "/generated/aerospace-day-banner.png",
  ctaImage: "/generated/aerospace-commercial-banner.png",
  featuredQuote: {
    title: "Avionics Integrity",
    text: "Deterministic Control for Critical Envelopes"
  },
  caseStudy: {
    title: "Avionics Integrity",
    subtitle: "Deterministic Control for Critical Envelopes",
    description: "Avionics engineers can formally verify flight control envelopes and state transitions using bounded control artifacts. BRIK-64 externalizes safety-critical logic from implementation branches, allowing agencies to simplify complex certification workflows and ensure fallback paths are mathematically guaranteed. This methodology provides a reviewable evidence trail that secures the software boundary before deployment into mission-critical hardware."
  },
  painPoints: [
    {
      title: "Hidden Envelope Transitions",
      description: "Envelope transitions hide inside implementation branches, making the exact operating region difficult to inspect.",
      impact: "Increased risk of edge-case failures and slower engineering reviews."
    },
    {
      title: "Degraded Mode Obfuscation",
      description: "Degraded modes become hard to reconstruct during safety reviews because fallback logic is scattered.",
      impact: "Inability to easily verify fallback paths during critical failures."
    },
    {
      title: "Absorbed Software Boundaries",
      description: "Certification packages absorb software boundaries, turning explicit code into a document chase.",
      impact: "High engineering overhead during compliance checks and handoff."
    }
  ],
  solutionOverview: "Review flight-control software through one explicit control artifact. Encode the control boundary in PCD, check constrained behavior, and hand off a verifiable artifact.",
  interventions: [
    {
      feature: "Bounded Operating Envelopes",
      howItWorks: "Express airspeed, altitude, mode, and related control limits as explicit domains before compilation.",
      businessOutcome: "The approved operating region remains visible in the software artifact itself."
    },
    {
      feature: "Mode Transition Encoding",
      howItWorks: "Make degraded-mode and rejection behavior part of the same bounded control artifact.",
      businessOutcome: "Engineers can inspect how the system behaves when it leaves the envelope safely."
    },
    {
      feature: "Reviewable State Emission",
      howItWorks: "Return structured output showing what was checked and the produced state.",
      businessOutcome: "Speeds up compliance workflows and safety reviews by producing an inspectable dossier."
    }
  ],
  keyBenefits: [
    {
      metric: "Workflow Focus",
      value: "PCD Control",
      description: "Capture flight-envelope limits and transition rules before downstream review packages expand."
    },
    {
      metric: "Artifact",
      value: "Review Dossier",
      description: "Keep envelope checks, fallback posture, and emitted state together."
    },
    {
      metric: "Review Context",
      value: "DO-178C",
      description: "Supports engineering review and certification preparation without claiming completed certification."
    },
    {
      metric: "Logic Reuse",
      value: "Subcircuits",
      description: "Keep verified fallback logic reusable across related control components."
    }
  ],
  complianceContext: ["DO-178C Support Posture", "FAA Engineering Evidence", "ISO/AS9100 Context"],
  trustMarkers: [
    "Deterministic Envelopes",
    "Bounded Control Paths",
    "Explicit Fallback Logic",
    "Inspectable Dossiers"
  ]
};

export const aiIndustryData: IndustrySolutionData = {
  id: "ai",
  title: "AI Systems",
  subtitle: "External Verification and Agent Action Gating",
  heroDescription: "Keep action gates, generated-code review, and diagnostics outside the model. Govern generated actions as bounded software objects before execution.",
  targetAudience: "Platform and AI operations teams governing generated code and agent actions",
  heroImage: "/generated/ai-hero-bg.png",
  realWorldImage: "/generated/ai-day-banner.png",
  ctaImage: "/generated/ai-cta-banner.png",
  featuredQuote: {
    title: "Autonomous Governance",
    text: "Externalizing the Guardrails of Agency"
  },
  caseStudy: {
    title: "Autonomous Governance",
    subtitle: "Externalizing the Guardrails of Agency",
    description: "Organizations governing autonomous agents can replace probabilistic prompt-based filters with deterministic action gates. BRIK-64 allows platform teams to define allowed execution perimeters outside the model, ensuring every generated action is verified against firm policy boundaries. This establishes a repairable review trail for operators and prevents agents from executing unauthorized or destructive actions in production environments."
  },
  painPoints: [
    {
      title: "Unbounded Tool Execution",
      description: "Generated output reaches tools and operational surfaces too quickly, without reliable pre-execution verification.",
      impact: "High risk of agents executing unauthorized or destructive actions in production."
    },
    {
      title: "Hidden Policy Boundaries",
      description: "Action rules and policy constraints are buried in prompts, making them probabilistic rather than deterministic.",
      impact: "Inconsistent rule enforcement and inability to guarantee compliance."
    },
    {
      title: "Opaque Rejection Loops",
      description: "Rejected output loses repair context, making it difficult for the agent loop to learn or for operators to trace.",
      impact: "Endless retry loops and lack of operational observability."
    }
  ],
  solutionOverview: "Put a bounded gate before execution. Define allowed actions outside the model, check generated paths before tools run, and return deterministic diagnostics into the repair loop.",
  interventions: [
    {
      feature: "Action Boundary Definition",
      howItWorks: "Specify what the agent may touch and what conditions trigger explicit stops using policy circuits.",
      businessOutcome: "Establishes a firm, deterministic perimeter around AI actions."
    },
    {
      feature: "Pre-execution Diagnostics",
      howItWorks: "Run the policy check before the model output reaches tools, deployment flows, or side-effecting surfaces.",
      businessOutcome: "Stops risky actions instantly without relying on the model's self-evaluation."
    },
    {
      feature: "Operator-readable Feedback",
      howItWorks: "Return structured reasons that help an operator or automated loop understand why an action was blocked.",
      businessOutcome: "Creates a repairable review trail for continuous agent improvement."
    }
  ],
  keyBenefits: [
    {
      metric: "Workflow Focus",
      value: "Action Gating",
      description: "Insert a bounded policy circuit between model output and the execution path."
    },
    {
      metric: "Artifact",
      value: "Diagnostics",
      description: "Return structured reasons when an action is rejected so the loop can repair itself."
    },
    {
      metric: "Review Context",
      value: "Operational Governance",
      description: "Frame the process around production controls and review posture."
    },
    {
      metric: "Output Path",
      value: "Bounded Code",
      description: "Check generated code before it reaches a build or delivery surface."
    }
  ],
  complianceContext: ["Operational Governance", "AI Safety Posture", "Automated Policy Checks"],
  trustMarkers: [
    "Pre-execution Gates",
    "External Policy Circuits",
    "Deterministic Boundaries",
    "Repairable Diagnostics"
  ]
};

export const automotiveIndustryData: IndustrySolutionData = {
  id: "automotive",
  title: "Automotive",
  subtitle: "Deterministic Actuation Thresholds and Safe Fallback",
  heroDescription: "Expose actuation thresholds, sensor assumptions, and fallback behavior across revisions. Review vehicle control logic through one explicit artifact.",
  targetAudience: "Vehicle platform and safety engineers",
  heroImage: "/generated/automotive-hero-bg.png",
  realWorldImage: "/generated/automotive-day-banner.png",
  ctaImage: "/generated/automotive-cta-banner.png",
  featuredQuote: {
    title: "Safe Actuation",
    text: "Verifiable Fallback for Autonomous Fleets"
  },
  caseStudy: {
    title: "Safe Actuation",
    subtitle: "Verifiable Fallback for Autonomous Fleets",
    description: "Vehicle platform teams can maintain safety integrity across distributed architectures by encoding actuation thresholds as verifiable circuits. BRIK-64 ensures that safety-critical fallback logic and sensor assumptions remain explicit and consistent across firmware revisions. This provides a revision-sensitive evidence trail that accelerates ISO 26262 compliance and enables fleet-wide safety reviews without relying on opaque code diffs."
  },
  painPoints: [
    {
      title: "Scattered Fallback Logic",
      description: "Fallback behavior spreads across modules, making it difficult to trace exactly how a vehicle responds to failure.",
      impact: "Increased time spent reconstructing safety logic during incidents or reviews."
    },
    {
      title: "Implicit Sensor Assumptions",
      description: "Actuation thresholds drift between revisions and sensor assumptions become implicit rather than explicit.",
      impact: "Unintended changes to actuation thresholds that can compromise vehicle safety."
    },
    {
      title: "Opaque Revision Evidence",
      description: "Safety reviews depend on code diffs rather than bounded, revision-sensitive evidence of control behavior.",
      impact: "Slow and costly enterprise review cycles for new software releases."
    }
  ],
  solutionOverview: "Keep control decisions traceable. Model thresholds as bounded circuits, attach fallback behavior to the artifact, and carry review state across revisions.",
  interventions: [
    {
      feature: "Threshold Declarations",
      howItWorks: "Capture speed, distance, torque, or similar actuation gates alongside sensor assumptions explicitly.",
      businessOutcome: "Creates bounded actuation logic that is inspectable before release."
    },
    {
      feature: "Safe Fallback Encoding",
      howItWorks: "Show exactly how the component behaves when a required signal or correlation is missing.",
      businessOutcome: "Makes the degraded route fully reviewable and deterministic."
    },
    {
      feature: "Change-sensitive Evidence",
      howItWorks: "Return review state that lets a platform engineer compare the current behavior with the last approved revision.",
      businessOutcome: "Accelerates safety review cycles with revision-aware dossiers."
    }
  ],
  keyBenefits: [
    {
      metric: "Workflow Focus",
      value: "Platform Review",
      description: "Inspect actuation logic and bounded thresholds before deeper release paths."
    },
    {
      metric: "Artifact",
      value: "Safety Dossier",
      description: "Emit an artifact keeping threshold logic and decision state tightly coupled."
    },
    {
      metric: "Review Context",
      value: "ISO 26262",
      description: "Reference safety review context for automotive assurance."
    },
    {
      metric: "Input Handling",
      value: "Sensor Bounds",
      description: "Ensure bounded input handling for all critical actuation decisions."
    }
  ],
  complianceContext: ["ISO 26262 Posture", "ASIL-oriented Trace", "Vehicle Safety Reviews"],
  trustMarkers: [
    "Threshold Traceability",
    "Bounded Actuation",
    "Revision-sensitive Evidence",
    "Explicit Fallback Logic"
  ]
};

export const engineeringIndustryData: IndustrySolutionData = {
  id: "engineering",
  title: "Engineering Software",
  subtitle: "Explicit Assumptions and Preserved Calculation Trails",
  heroDescription: "Express simulation materials, units, ranges, and transforms as inspectable computational dossiers before they disappear into a larger toolchain.",
  targetAudience: "Simulation, controls, and industrial software leads",
  heroImage: "/generated/engineering-hero-bg.png",
  realWorldImage: "/generated/engineering-day-banner.png",
  ctaImage: "/generated/engineering-cta-banner.png",
  featuredQuote: {
    title: "Computational Integrity",
    text: "Preserving the Lineage of Simulation"
  },
  caseStudy: {
    title: "Computational Integrity",
    subtitle: "Preserving the Lineage of Simulation",
    description: "Engineering software leads can preserve the lineage of complex simulations by capturing material assumptions and units as inspectable computational dossiers. BRIK-64 establishes a firm boundary for every transform, ensuring that critical engineering logic remains reproducible across the toolchain. This creates a verifiable source of truth for high-stakes industrial calculations and ensures that algorithm updates do not silently compromise calculation safety."
  },
  painPoints: [
    {
      title: "Disappearing Assumptions",
      description: "Units, materials, and constraints live outside the code, disappearing across different tools in the chain.",
      impact: "Loss of critical context required to validate or safely reuse engineering calculations."
    },
    {
      title: "Unbounded Transforms",
      description: "Transforms lose their input boundary, making it unclear what operating conditions are safe.",
      impact: "Risk of silent failures when algorithms are fed out-of-bound inputs."
    },
    {
      title: "Undocumented Replication",
      description: "Reusable calculations become undocumented copies scattered across different projects.",
      impact: "High technical debt and lack of a single source of truth for critical engineering logic."
    }
  ],
  solutionOverview: "Keep the transform as a dossier. Declare units, materials, and ranges explicitly, verify the bounded calculation path, and emit a reusable computational dossier.",
  interventions: [
    {
      feature: "Material & Range Bounds",
      howItWorks: "Capture units, geometry, materials, loads, and limits as explicit computational domains.",
      businessOutcome: "Establishes a firm assumption boundary that travels with the calculation."
    },
    {
      feature: "Bounded Transform Encoding",
      howItWorks: "Represent the calculation as a bounded computational object so the accepted path is verified.",
      businessOutcome: "Creates a reusable transform artifact that guarantees input safety."
    },
    {
      feature: "Reviewable Dossier Emission",
      howItWorks: "Preserve enough context around the output to see what was assumed, checked, and returned.",
      businessOutcome: "Yields an inspectable calculation trail that accelerates technical reviews."
    }
  ],
  keyBenefits: [
    {
      metric: "Workflow Focus",
      value: "PCD Blueprint",
      description: "Declare ranges and bounds in a formal representation before tools take over."
    },
    {
      metric: "Artifact",
      value: "Computation Dossier",
      description: "Preserve the assumptions, transform, and emitted state in one object."
    },
    {
      metric: "Review Context",
      value: "Technical Posture",
      description: "Focus on software correctness and engineering review over broad claims."
    },
    {
      metric: "Calculation Trace",
      value: "Reusable Logic",
      description: "Ensure transforms remain readable and reusable across workflows."
    }
  ],
  complianceContext: ["IEC 61508 Posture", "Engineering Review Posture", "Certified Tolerances"],
  trustMarkers: [
    "Explicit Units & Materials",
    "Bounded Computations",
    "Inspectable Dossiers",
    "Reusable Algorithms"
  ]
};

export const governmentIndustryData: IndustrySolutionData = {
  id: "government",
  title: "Government & Public Sector",
  subtitle: "Deterministic Rule Logic and Auditable Processing",
  heroDescription: "Turn eligibility, routing, and case-processing rules into readable review artifacts before oversight teams have to reconstruct the path.",
  targetAudience: "Public-sector engineering and compliance teams",
  heroImage: "/generated/government-hero-bg.png",
  realWorldImage: "/generated/government-day-banner.png",
  ctaImage: "/generated/government-cta-banner.png",
  featuredQuote: {
    title: "Policy Determinism",
    text: "Auditable Eligibility at Scale"
  },
  caseStudy: {
    title: "Policy Determinism",
    subtitle: "Auditable Eligibility at Scale",
    description: "Governmental institutions can encode complex policies and eligibility rules as deterministic infrastructure artifacts. By transforming case-processing logic into verifiable blueprints, agencies eliminate decision-making ambiguity and ensure automatic regulatory compliance for public audits. This reduces manual review cycles while ensuring every citizen receives a response based on explicit, mathematically provable rules that move public trust to algorithmic certainty."
  },
  painPoints: [
    {
      title: "Late Rule Reconstruction",
      description: "Oversight teams must reconstruct rules late in the process because eligibility paths hide inside application flow.",
      impact: "Painful, slow audits that rely on reverse-engineering the application."
    },
    {
      title: "Implicit Input Boundaries",
      description: "Case inputs lack explicit boundaries, meaning edge cases are handled inconsistently or fail silently.",
      impact: "Unfair or inaccurate public-service outcomes due to unexpected processing paths."
    },
    {
      title: "Opaque Decision Making",
      description: "It is extremely difficult to prove exactly why a citizen's case was accepted, rejected, or escalated.",
      impact: "Erosion of public trust and failure to meet strict oversight requirements."
    }
  ],
  solutionOverview: "Audit public-sector rules through one artifact. Encode eligibility as bounded logic, verify accepted and rejected inputs, and emit an oversight-ready trail.",
  interventions: [
    {
      feature: "Rule Boundary Declaration",
      howItWorks: "Capture eligibility conditions and routing gates as explicit rule branches instead of hidden flows.",
      businessOutcome: "Produces a deterministic rule artifact that is inherently auditable."
    },
    {
      feature: "Input Set Bounding",
      howItWorks: "Specify exact input ranges, document states, or case attributes that are valid for the rule set.",
      businessOutcome: "Creates an auditable input boundary that rejects malformed cases upfront."
    },
    {
      feature: "Oversight-ready Emission",
      howItWorks: "Return precise context showing what rule path ran and why the decision was made.",
      businessOutcome: "Delivers a reviewable oversight trail that eliminates audit ambiguity."
    }
  ],
  keyBenefits: [
    {
      metric: "Workflow Focus",
      value: "Rule Review",
      description: "Inspect deterministic policy logic before it is buried in operational flows."
    },
    {
      metric: "Artifact",
      value: "Oversight Trail",
      description: "Preserve the rule set, bounded inputs, and emitted decision state."
    },
    {
      metric: "Review Context",
      value: "FedRAMP",
      description: "Support deployment posture and compliance review with auditable artifacts."
    },
    {
      metric: "Traceability",
      value: "Decision Path",
      description: "Show exactly which public inputs were accepted, rejected, or escalated."
    }
  ],
  complianceContext: ["FedRAMP Deployment Posture", "NIST Control Mapping", "Public Oversight Trace"],
  trustMarkers: [
    "Deterministic Eligibility",
    "Auditable Processing",
    "Bounded Input Rules",
    "Oversight-Ready Artifacts"
  ]
};

export const healthcareIndustryData: IndustrySolutionData = {
  id: "healthcare",
  title: "Healthcare & Clinical",
  subtitle: "Explicit Dose Boundaries and Clinical Escalation Paths",
  heroDescription: "Keep dose logic, workflow transitions, and escalation paths readable before clinical handoff absorbs the software context.",
  targetAudience: "Clinical software and device-workflow teams",
  heroImage: "/generated/healthcare-hero-bg.png",
  realWorldImage: "/generated/healthcare-day-banner.png",
  ctaImage: "/generated/healthcare-cta-banner.png",
  featuredQuote: {
    title: "Clinical Safety",
    text: "Bounded Dose Logic for Patient Care"
  },
  caseStudy: {
    title: "Clinical Safety",
    subtitle: "Bounded Dose Logic for Patient Care",
    description: "Healthcare providers and medical device teams can ensure clinical safety by bounding dose calculation logic and workflow transitions within explicit safety perimeters. BRIK-64 transforms clinical escalation paths into auditable engineering artifacts, preventing silent threshold violations during patient care. This provides the formal evidence required for accelerated regulatory review and ensures that dangerous fallback states route predictably to human intervention."
  },
  painPoints: [
    {
      title: "Hidden Dose Assumptions",
      description: "Dose bands and clinical assumptions become implicit, buried inside complex workflow code.",
      impact: "Increased risk of dosing errors when the software operates near threshold limits."
    },
    {
      title: "Drifting Escalation Paths",
      description: "Escalation paths drift between states without explicit bounds, causing unexpected clinical routing.",
      impact: "Failure to escalate critical conditions to human review predictably."
    },
    {
      title: "Lost Engineering Evidence",
      description: "Clinical handoff loses software context, leaving evaluators without clear engineering evidence.",
      impact: "Prolonged evaluation cycles and difficulty achieving IEC 62304 review compliance."
    }
  ],
  solutionOverview: "Keep clinical logic inspectable. Bound dose and workflow states, verify escalation conditions explicitly, and emit review-ready engineering state.",
  interventions: [
    {
      feature: "Dose and State Bounding",
      howItWorks: "Declare explicitly what the software may recommend or transition between based on patient parameters.",
      businessOutcome: "Creates bounded clinical logic that cannot silently exceed safety limits."
    },
    {
      feature: "Escalation Encoding",
      howItWorks: "Make the review gate explicit so out-of-range states route directly to human escalation.",
      businessOutcome: "Ensures dangerous fallbacks are prevented and replaced by a traceable artifact."
    },
    {
      feature: "Engineering Review Emission",
      howItWorks: "Return structured output allowing an engineer to trace exactly what recommendation the software produced.",
      businessOutcome: "Provides a reviewable software dossier to accelerate clinical safety checks."
    }
  ],
  keyBenefits: [
    {
      metric: "Workflow Focus",
      value: "Safety-Critical",
      description: "Review logic before it enters broader clinical or device processes."
    },
    {
      metric: "Artifact",
      value: "Clinical Dossier",
      description: "Preserve dose boundaries, escalation paths, and emitted state in one object."
    },
    {
      metric: "Review Context",
      value: "IEC 62304",
      description: "Use the artifact as software-review context for device and workflow teams."
    },
    {
      metric: "Safety Trace",
      value: "Escalation Logic",
      description: "Make the review and escalation path explicit instead of relying on hidden fallback."
    }
  ],
  complianceContext: ["IEC 62304 Posture", "HIPAA Workflow Evidence", "Clinical Engineering Review"],
  trustMarkers: [
    "Dose Boundaries",
    "Explicit Escalation",
    "Clinical Engineering Evidence",
    "Safety-Critical Check"
  ]
};

export const scienceIndustryData: IndustrySolutionData = {
  id: "science",
  title: "Science & Research",
  subtitle: "Explicit Assumptions and Shareable Computational Blueprints",
  heroDescription: "Make units, calibration factors, and transforms explicit for reproducible review before the computational path fragments across tools.",
  targetAudience: "Research software engineers and technical investigators",
  heroImage: "/generated/science-hero-bg.png",
  realWorldImage: "/generated/science-day-banner.png",
  ctaImage: "/generated/science-cta-banner.png",
  featuredQuote: {
    title: "Reproducible Research",
    text: "Cryptographic Methods for Open Science"
  },
  caseStudy: {
    title: "Reproducible Research",
    subtitle: "Cryptographic Methods for Open Science",
    description: "Research scientists can bolster computational integrity by publishing methods as inherently reproducible cryptographic blueprints. BRIK-64 preserves the link between raw data and algorithmic transforms, ensuring that calibration factors and measurement bounds remain visible to technical readers. This provides a verifiable lineage that moves scientific research from shared trust to provable reproducibility, allowing methods to be reused across different research environments."
  },
  painPoints: [
    {
      title: "Hidden Method Assumptions",
      description: "Local tooling hides method assumptions, leaving calibration factors buried in disconnected notebooks.",
      impact: "Inability to accurately trace how a specific scientific result was derived."
    },
    {
      title: "Non-repeatable Transforms",
      description: "Transforms are hard to rerun elsewhere because the exact bounds and paths are not formalized.",
      impact: "High friction when attempting to reproduce experiments across different teams."
    },
    {
      title: "Lost Computation Lineage",
      description: "Published results lose computation lineage, breaking the link between the data and the algorithm.",
      impact: "Reduced scientific trust and diminished reusability of the research."
    }
  ],
  solutionOverview: "Publish the method as a blueprint. Declare units, ranges, and calibration factors explicitly, verify the bounded transform, and emit a reusable computation trace.",
  interventions: [
    {
      feature: "Range & Calibration Declarations",
      howItWorks: "Capture measurement bounds, units, tolerances, and calibration inputs as explicit domains.",
      businessOutcome: "Ensures the assumption blueprint is always attached to the scientific artifact."
    },
    {
      feature: "Repeatable Transform Encoding",
      howItWorks: "Represent the computational method so the accepted path and emitted value are tied to the same artifact.",
      businessOutcome: "Creates a reproducible transform that another team can easily run and inspect."
    },
    {
      feature: "Result Lineage Emission",
      howItWorks: "Return structured data showing exactly what assumptions were applied to obtain the result.",
      businessOutcome: "Yields a publication-ready trace that bolsters scientific integrity."
    }
  ],
  keyBenefits: [
    {
      metric: "Workflow Focus",
      value: "Reproducibility",
      description: "Declare ranges, units, and calibration factors before tools fragment the path."
    },
    {
      metric: "Artifact",
      value: "Publication Trace",
      description: "Preserve the transform chain and result lineage for technical readers."
    },
    {
      metric: "Review Context",
      value: "Shareable Posture",
      description: "Focus on repeatability and shareable artifacts over broad claims."
    },
    {
      metric: "Reuse Trace",
      value: "Calibration Bound",
      description: "Ensure assumptions remain visible alongside the shared computational blueprint."
    }
  ],
  complianceContext: ["Reproducibility Posture", "Publication Evidence", "Computation Trace"],
  trustMarkers: [
    "Explicit Calibration",
    "Reproducible Transforms",
    "Result Lineage",
    "Shareable Blueprints"
  ]
};

// Consolidated export to be consumed by the UI routes
export const allIndustriesData: Record<string, IndustrySolutionData> = {
  finance: financeIndustryData,
  aerospace: aerospaceIndustryData,
  ai: aiIndustryData,
  automotive: automotiveIndustryData,
  engineering: engineeringIndustryData,
  government: governmentIndustryData,
  healthcare: healthcareIndustryData,
  science: scienceIndustryData,
};
