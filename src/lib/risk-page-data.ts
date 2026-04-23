import type { RiskPageSpec } from "@/components/PageArchetypes";

function primary(label: string, href: string) {
  return { label, href, tone: "primary" as const };
}

function secondary(label: string, href: string, external = false) {
  return { label, href, tone: "secondary" as const, external };
}

export type IndustryEditorialBlueprint = {
  buyer: string;
  primaryWorkflow: string;
  workflowExample: string;
  primarySurface: string;
  secondarySurface: string;
  standardsContext: string;
  claimBoundary: string;
  ctaPair: readonly [string, string];
};

function industry(config: {
  heroEyebrow: string;
  title: string;
  highlight: string;
  description: string;
  heroBackgroundImageSrc?: string;
  heroMetrics: RiskPageSpec["hero"]["metrics"];
  heroStatusLabel: string;
  heroStatusTone?: RiskPageSpec["hero"]["statusTone"];
  heroProofStripEyebrow: string;
  heroProofStripTitle: string;
  heroProofStripDescription: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionDescription: string;
  evidenceEyebrow: string;
  evidenceTitle: string;
  evidenceDescription: string;
  evidenceTracks: RiskPageSpec["evidence"]["tracks"];
  evidenceStatusLabel: string;
  evidenceStatusTone?: RiskPageSpec["evidence"]["statusTone"];
  constraintEyebrow: string;
  constraintTitle: string;
  constraintDescription: string;
  constraints: RiskPageSpec["constraint"]["constraints"];
  codeEyebrow: string;
  codeTitle: string;
  code: string;
  constraintFooter: string;
  scenarioEyebrow: string;
  scenarioTitle: string;
  scenarioDescription: string;
  scenarioSteps: RiskPageSpec["scenario"]["steps"];
  scenarioStatusLabel: string;
  scenarioStatusTone?: RiskPageSpec["scenario"]["statusTone"];
  scenarioFooter: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaActions: RiskPageSpec["cta"]["actions"];
}): RiskPageSpec {
  return {
    hero: {
      eyebrow: config.heroEyebrow,
      title: config.title,
      highlight: config.highlight,
      description: config.description,
      backgroundImageSrc: config.heroBackgroundImageSrc,
      actions: config.ctaActions,
      metrics: config.heroMetrics,
      statusLabel: config.heroStatusLabel,
      statusTone: config.heroStatusTone,
      proofStripEyebrow: config.heroProofStripEyebrow,
      proofStripTitle: config.heroProofStripTitle,
      proofStripDescription: config.heroProofStripDescription,
    },
    sectionHeader: {
      eyebrow: config.sectionEyebrow,
      title: config.sectionTitle,
      description: config.sectionDescription,
    },
    evidence: {
      eyebrow: config.evidenceEyebrow,
      title: config.evidenceTitle,
      description: config.evidenceDescription,
      metrics: config.heroMetrics,
      tracks: config.evidenceTracks,
      statusLabel: config.evidenceStatusLabel,
      statusTone: config.evidenceStatusTone,
    },
    constraint: {
      eyebrow: config.constraintEyebrow,
      title: config.constraintTitle,
      description: config.constraintDescription,
      constraints: config.constraints,
      codeEyebrow: config.codeEyebrow,
      codeTitle: config.codeTitle,
      code: config.code,
      footer: config.constraintFooter,
    },
    scenario: {
      eyebrow: config.scenarioEyebrow,
      title: config.scenarioTitle,
      description: config.scenarioDescription,
      steps: config.scenarioSteps,
      statusLabel: config.scenarioStatusLabel,
      statusTone: config.scenarioStatusTone,
      footer: config.scenarioFooter,
    },
    cta: {
      title: config.ctaTitle,
      description: config.ctaDescription,
      actions: config.ctaActions,
    },
  };
}

function buildUseCase(config: {
  title: string;
  highlight: string;
  description: string;
  heroMetrics: RiskPageSpec["hero"]["metrics"];
  evidenceTracks: RiskPageSpec["evidence"]["tracks"];
  constraints: RiskPageSpec["constraint"]["constraints"];
  codeTitle: string;
  code: string;
  ctaTitle: string;
  ctaDescription: string;
}): RiskPageSpec {
  return {
    hero: {
      eyebrow: "Use Case",
      title: config.title,
      highlight: config.highlight,
      description: config.description,
      actions: [primary("Start with CLI", "/cli"), secondary("Read docs", "https://docs.brik64.dev", true)],
      metrics: config.heroMetrics,
    },
    sectionHeader: {
      eyebrow: "Use Case",
      title: "Use cases stay operational: bounded workflow before implementation detail.",
      description:
        "Each use case explains a real operator flow with explicit verification stages and bounded claims.",
    },
    evidence: {
      eyebrow: "Scenario Evidence",
      title: "The bounded workflow remains the main reference",
      description:
        "The route highlights operator decision points and verification obligations before code details.",
      metrics: config.heroMetrics,
      tracks: config.evidenceTracks,
    },
    constraint: {
      eyebrow: "Constraint Example",
      title: "Anchor the scenario to a real policy or circuit sketch",
      description:
        "Code is supporting evidence for the domain workflow and its boundaries.",
      constraints: config.constraints,
      codeTitle: config.codeTitle,
      code: config.code,
      footer:
        "Use cases stay concrete and operator-readable, and they avoid overclaiming beyond visible constraints.",
    },
    scenario: {
      eyebrow: "Workflow",
      title: "The flow of proof stays explicit",
      description:
        "Every use case makes clear how an engineer goes from source material to bounded output and published evidence.",
      steps: [
        { label: "01", title: "Lift or express", body: "Start from source code or from an explicit PCD or policy sketch.", state: "active" },
        { label: "02", title: "Check boundaries", body: "Run domain checks and closure analysis before the result is trusted.", state: "warning" },
        { label: "03", title: "Emit evidence", body: "Emit diagnostics, certification state, and a reusable bounded output.", state: "success" },
        { label: "04", title: "Reuse the result", body: "Feed the bounded result back into the platform, registry, or delivery flow.", state: "idle" },
      ],
      footer:
        "Keep the workflow legible without implying every downstream organizational control is solved by this workflow.",
    },
    cta: {
      title: config.ctaTitle,
      description: config.ctaDescription,
      actions: [primary("Open CLI", "/cli"), secondary("PCD", "/pcd")],
    },
  };
}

function thesis(config: {
  title: string;
  highlight: string;
  description: string;
  heroMetrics: RiskPageSpec["hero"]["metrics"];
  evidenceTracks: RiskPageSpec["evidence"]["tracks"];
  constraints: RiskPageSpec["constraint"]["constraints"];
  codeTitle: string;
  code: string;
  ctaTitle: string;
  ctaDescription: string;
}): RiskPageSpec {
  return {
    hero: {
      eyebrow: "Applied Thesis",
      title: config.title,
      highlight: config.highlight,
      description: config.description,
      actions: [primary("Read foundations", "/foundations"), secondary("Open platform", "/platform")],
      metrics: config.heroMetrics,
    },
    sectionHeader: {
      eyebrow: "Domain boundary",
      title: "Problem, software boundary, and operator path",
      description:
        "Each thesis route identifies domain risk, where BRIK-64 enters the workflow, and what remains outside the claim boundary.",
    },
    evidence: {
      eyebrow: "Domain evidence",
      title: "What the domain risk looks like once the software boundary is explicit",
      description:
        "The point is to show the domain problem, the bounded software object, and the limit of the public claim.",
      metrics: config.heroMetrics,
      tracks: config.evidenceTracks,
    },
    constraint: {
      eyebrow: "Constraint Map",
      title: "One inspectable bounded definition anchors the claim",
      description:
        "The route does not prove an entire field. It shows how bounded software rules become legible before execution or handoff.",
      constraints: config.constraints,
      codeTitle: config.codeTitle,
      code: config.code,
      footer:
        "Keep the line between domain aspiration and code-level evidence explicit.",
    },
    scenario: {
      eyebrow: "Operator Loop",
      title: "How the thesis becomes a repeatable engineering loop",
      description:
        "Start from the domain risk, encode the bounded rule, check it, then hand the result into the product workflow.",
      steps: [
        { label: "01", title: "Define the boundary", body: "Choose the constraint the page is really about.", state: "active" },
        { label: "02", title: "Represent it formally", body: "Use PCD or policy circuits to encode the bounded behavior.", state: "warning" },
        { label: "03", title: "Check and certify", body: "Run the compiler or verification flow that produces explicit state.", state: "success" },
        { label: "04", title: "Publish or integrate", body: "Move the result into the wider platform, registry, or delivery story.", state: "idle" },
      ],
    },
    cta: {
      title: config.ctaTitle,
      description: config.ctaDescription,
      actions: [primary("Open foundations", "/foundations"), secondary("Documentation", "https://docs.brik64.dev", true)],
    },
  };
}

export const industryEditorialBlueprints = {
  aerospace: {
    buyer: "Avionics and control-systems leads preparing software review before certification work.",
    primaryWorkflow: "PCD -> bounded control logic -> emitted review artifact -> compliance review",
    workflowExample: "Review envelope transitions and degraded-mode behavior for avionics control software.",
    primarySurface: "PCD",
    secondarySurface: "Compliance",
    standardsContext: "DO-178C is cited as review and certification-support context, never as a completed certification claim.",
    claimBoundary:
      "BRIK-64 supports bounded control review artifacts and certification preparation; it does not certify the aerospace system by itself.",
    ctaPair: ["Request architecture review", "Read compliance"] as const,
  },
  ai: {
    buyer: "Platform and AI operations teams governing generated code and agent actions in production.",
    primaryWorkflow: "AI Agents -> policy circuit -> diagnostics -> platform or registry handoff",
    workflowExample: "Gate an agent action, reject the unsafe branch, and return structured diagnostics into the loop.",
    primarySurface: "AI Agents",
    secondarySurface: "AI safety use case",
    standardsContext: "The page stays in operational governance language instead of regulatory claims.",
    claimBoundary:
      "BRIK-64 supports explicit action gating and generated-code review; it does not solve general model alignment.",
    ctaPair: ["Open AI agents", "Read AI safety use case"] as const,
  },
  automotive: {
    buyer: "Vehicle platform and safety engineers reviewing threshold-sensitive control logic across software revisions.",
    primaryWorkflow: "Platform -> control-threshold verification -> review artifact -> enterprise review",
    workflowExample: "Validate actuation and fallback logic for a control component under sensor and threshold constraints.",
    primarySurface: "Platform",
    secondarySurface: "Enterprise",
    standardsContext: "ISO 26262 and ASIL are framed as review context, not as a claim of compliance.",
    claimBoundary:
      "BRIK-64 supports readable control review artifacts and change-sensitive evidence; it does not certify the vehicle program by itself.",
    ctaPair: ["Talk to enterprise", "Read platform"] as const,
  },
  engineering: {
    buyer: "Simulation, controls, and industrial software leads who need declared assumptions and preserved calculation trails.",
    primaryWorkflow: "PCD -> bounded computation -> computational dossier -> foundations reuse",
    workflowExample: "Publish a structural or controls calculation with explicit ranges, materials, and emitted review state.",
    primarySurface: "PCD",
    secondarySurface: "Foundations",
    standardsContext: "The page stays on technical review posture rather than broad sector certification claims.",
    claimBoundary:
      "BRIK-64 supports inspectable computational dossiers and reusable bounded algorithms; it does not replace expert sign-off.",
    ctaPair: ["Open PCD", "Read foundations"] as const,
  },
  finance: {
    buyer: "Risk, platform, and compliance engineering teams reviewing transaction logic under audit pressure.",
    primaryWorkflow: "Lifter -> bounded transaction and business-rule review -> audit artifact -> enterprise review",
    workflowExample: "Lift legacy payment, ledger, or risk-calculation logic before refactoring or replacement hides it again.",
    primarySurface: "Lifter",
    secondarySurface: "Enterprise",
    standardsContext: "PCI-DSS, SOX, and MiFID II remain evidence contexts, not compliance claims.",
    claimBoundary:
      "BRIK-64 supports reviewable transaction artifacts and migration evidence; it does not satisfy a full regulatory program on its own.",
    ctaPair: ["Open lifter", "Request enterprise review"] as const,
  },
  government: {
    buyer: "Public-sector engineering and compliance teams reviewing deterministic rules, eligibility, and oversight trails.",
    primaryWorkflow: "Compliance -> explicit rule encoding -> oversight artifact -> enterprise review",
    workflowExample: "Encode an eligibility or case-routing rule set and emit an artifact an oversight reviewer can inspect.",
    primarySurface: "Compliance",
    secondarySurface: "Enterprise",
    standardsContext: "FedRAMP and classified environments remain deployment posture context, never readiness claims.",
    claimBoundary:
      "BRIK-64 supports auditable rule artifacts and bounded public-sector processing; it does not replace broader governance or authorization work.",
    ctaPair: ["Read compliance", "Talk to enterprise"] as const,
  },
  healthcare: {
    buyer: "Clinical software and device-workflow teams reviewing dose logic, escalation paths, and emitted engineering evidence.",
    primaryWorkflow: "Safety-Critical -> bounded dose or workflow logic -> review artifact -> evaluation handoff",
    workflowExample: "Validate dose or escalation logic so software review evidence exists before broader clinical processes take over.",
    primarySurface: "Safety-Critical",
    secondarySurface: "Evaluation",
    standardsContext: "IEC 62304 is presented as software-review context, not as a compliance or efficacy claim.",
    claimBoundary:
      "BRIK-64 supports bounded clinical software review artifacts; it does not claim medical efficacy or replace clinical judgment.",
    ctaPair: ["Read safety-critical", "Request evaluation"] as const,
  },
  science: {
    buyer: "Research software engineers and technical investigators who need reproducibility and shareable computational blueprints.",
    primaryWorkflow: "PCD -> bounded computational blueprint -> reproducibility artifact -> registry publication",
    workflowExample: "Publish a scientific transform with declared units, ranges, and calibration factors so another team can inspect and reuse it.",
    primarySurface: "PCD",
    secondarySurface: "Registry",
    standardsContext: "The page focuses on reproducibility and publication posture instead of regulatory framing.",
    claimBoundary:
      "BRIK-64 supports reproducible computational artifacts and result lineage; it does not settle the surrounding scientific claim by itself.",
    ctaPair: ["Read PCD", "Open registry"] as const,
  },
} as const satisfies Record<string, IndustryEditorialBlueprint>;

export const industryPages = {
  aerospace: industry({
    heroEyebrow: "Aerospace & Defense",
    title: "Aerospace software needs explicit control envelopes before",
    highlight: "certification work begins.",
    description:
      "Avionics and control teams need a software artifact that makes envelope limits, mode transitions, and degraded behavior readable before the wider certification process absorbs the code. BRIK-64 helps express that logic as bounded control circuits and emitted review artifacts.",
    heroBackgroundImageSrc: "/generated/aerospace-hero-bg.png",
    heroMetrics: [
      { label: "Workflow focus", value: "PCD control review", detail: "Capture flight-envelope limits and transition rules in a bounded representation before downstream review packages expand." },
      { label: "Artifact emitted", value: "Control review dossier", detail: "Keep envelope checks, fallback posture, and emitted state together so another engineer can inspect the exact software boundary." },
      { label: "Review context", value: "DO-178C support posture", detail: "The emitted artifact supports engineering review and certification preparation without claiming completed certification." },
    ],
    heroStatusLabel: "avionics workflow",
    heroStatusTone: "warning",
    heroProofStripEyebrow: "Where BRIK-64 enters",
    heroProofStripTitle: "BRIK-64 enters before the certification package closes, at the point where control logic still needs a readable software boundary.",
    heroProofStripDescription:
      "Represent operating envelopes and degraded behavior in PCD, check the bounded control path, and emit a review artifact that can move into compliance and certification-support work.",
    sectionEyebrow: "Control software review",
    sectionTitle: "Flight-control software is easier to review when envelope limits, mode transitions, and degraded behavior live in one explicit artifact.",
    sectionDescription:
      "The strongest integration story is not generic aerospace language. It is a concrete engineering path: encode the control boundary in PCD, verify the constrained behavior, and hand the emitted artifact into a compliance-facing review flow.",
    evidenceEyebrow: "Where BRIK-64 helps",
    evidenceTitle: "Flight software review starts with one bounded artifact another avionics engineer can inspect quickly.",
    evidenceDescription:
      "These tracks describe where the stack adds value in aerospace: control logic that stays explicit, subcircuits that remain reusable, and emitted review state that survives handoff into certification-support workflows.",
    evidenceTracks: [
      { label: "Envelope and modes", title: "Represent the approved operating envelope as code instead of narrative", body: "Speed, altitude, configuration, and transition rules can be declared in bounded domains so the control path is reviewable before it becomes a document chase.", emphasis: "risk" },
      { label: "Reusable subcircuits", title: "Keep verified fallback and transition logic reusable across related control components", body: "Teams can isolate control subcircuits that preserve the same envelope assumptions and degraded-mode behavior across multiple avionics modules.", emphasis: "proof" },
      { label: "Certification handoff", title: "Emit a software review artifact before the wider certification process consumes it", body: "The resulting dossier gives engineering and compliance teams a concrete object to inspect. It supports DO-178C-oriented review posture without implying that BRIK-64 replaces the certification program." },
    ],
    evidenceStatusLabel: "flight software review",
    evidenceStatusTone: "warning",
    constraintEyebrow: "Primary workflow example",
    constraintTitle: "Review an envelope transition artifact before it is buried inside a larger avionics package.",
    constraintDescription:
      "Aerospace teams usually need to inspect how the software enters and exits an approved operating mode, what fallback path is taken, and what review state is emitted. That workflow is where BRIK-64 fits.",
    constraints: [
      { title: "Declare the operating envelope", body: "Express airspeed, altitude, mode, and related control limits as explicit domains so the approved operating region is visible in the software artifact itself.", outcome: "bounded control envelope" },
      { title: "Encode transition and fallback logic", body: "Make degraded-mode and rejection behavior part of the same artifact so an engineer can inspect how the system behaves when it leaves the envelope.", outcome: "mode transition artifact" },
      { title: "Emit reviewable state", body: "Return enough structured output for another control or compliance engineer to see what was checked and what state the circuit produced.", outcome: "software review dossier" },
    ],
    codeEyebrow: "Envelope guard",
    codeTitle: "flight_envelope_guard.pcd",
    code: `PC flight_envelope_guard {
  input speed    : Float64[0.0 .. 340.0]
  input altitude : Float64[0.0 .. 51000.0]

  assert speed <= 340.0
  assert altitude <= 51000.0

  output envelope_ok : Bool = true
}`,
    constraintFooter:
      "BRIK-64 supports bounded avionics review artifacts and certification preparation. It does not certify the aerospace system by itself.",
    scenarioEyebrow: "Workflow example",
    scenarioTitle: "Run the avionics review loop the way an engineering team actually works.",
    scenarioDescription:
      "The workflow stays concrete: define the envelope, encode the logic in PCD, emit the review artifact, and pass it into a compliance-facing handoff instead of leaving the reasoning implicit.",
    scenarioSteps: [
      { label: "01", title: "Define the boundary", body: "Select the operating envelope and degraded states the control component is allowed to enter.", state: "active" },
      { label: "02", title: "Encode the control logic", body: "Represent mode changes, fallback paths, and envelope checks as bounded control logic rather than opaque branches.", state: "warning" },
      { label: "03", title: "Check and emit evidence", body: "Generate an artifact that preserves both the accepted bounds and the emitted engineering state.", state: "success" },
      { label: "04", title: "Hand off to review", body: "Move the artifact into compliance and certification-support workflows without losing the software boundary it came from.", state: "idle" },
    ],
    scenarioStatusLabel: "certification handoff",
    scenarioStatusTone: "warning",
    scenarioFooter:
      "This workflow supports avionics software review and certification preparation. It does not claim blanket aerospace certification or mission assurance.",
    ctaTitle: "Bring avionics control logic into a review workflow before certification packaging hides the software boundary.",
    ctaDescription:
      "Start with PCD to express the control envelope, then move the emitted artifact into compliance review with the same bounded logic still visible.",
    ctaActions: [primary("Request architecture review", "mailto:enterprise@brik64.com"), secondary("Read compliance", "/compliance")],
  }),
  ai: industry({
    heroEyebrow: "AI Systems",
    title: "AI systems need external verification around generated code and",
    highlight: "agent actions.",
    description:
      "Production AI systems fail when model outputs move into execution without a readable policy boundary. BRIK-64 helps teams keep action gating, generated-code review, and operator diagnostics outside the model so they remain inspectable and changeable.",
    heroBackgroundImageSrc: "/generated/ai-hero-bg.png",
    heroMetrics: [
      { label: "Workflow focus", value: "AI Agents gate", detail: "Insert a bounded policy circuit between the model output and the tool or execution path it would otherwise trigger." },
      { label: "Artifact emitted", value: "Operator diagnostics", detail: "Return structured reasons when an action or generated code path is rejected so the loop can repair itself." },
      { label: "Review context", value: "Operational governance", detail: "Frame the page around production controls and review posture, not around unsupportable claims of general AI safety." },
    ],
    heroStatusLabel: "agent governance",
    heroStatusTone: "warning",
    heroProofStripEyebrow: "Where BRIK-64 enters",
    heroProofStripTitle: "BRIK-64 enters between model output and execution, where policy circuits can still stop an unsafe action.",
    heroProofStripDescription:
      "Use AI Agents as the operating surface, define the action gate outside the model, and feed diagnostics back into the workflow before the result reaches tools, builds, or production.",
    sectionEyebrow: "Generated output review",
    sectionTitle: "AI workflows become easier to govern when generated actions and generated code are treated as bounded software objects.",
    sectionDescription:
      "Teams operating AI systems in production need to see exactly where BRIK-64 adds control: policy circuits, generated-code review, and diagnostics that remain readable to platform and operations teams.",
    evidenceEyebrow: "Where BRIK-64 helps",
    evidenceTitle: "Generated output, action gating, and emitted diagnostics should all stay outside the model.",
    evidenceDescription:
      "The integration story is practical: protect code generation and agent actions with a readable gate, keep the diagnostic surface explicit, and route approved results into platform or registry workflows.",
    evidenceTracks: [
      { label: "Generated code review", title: "Check code before it reaches a build or delivery surface", body: "AI-written code is most useful when scope, confidence, and allowed domains are checked before the artifact moves into build, registry, or deployment workflows.", emphasis: "risk" },
      { label: "Action gating", title: "Keep action rules inspectable instead of burying them in prompts", body: "Policy circuits make it clear what an agent may do, when it must stop, and what approval path exists for higher-risk actions.", emphasis: "proof" },
      { label: "Diagnostics and handoff", title: "Return structured reasons and route approved outputs into the product", body: "Rejected branches should feed operator-readable diagnostics back into the loop, while accepted artifacts move into AI Agents, platform, or registry surfaces with the policy boundary preserved." },
    ],
    evidenceStatusLabel: "action gate",
    evidenceStatusTone: "warning",
    constraintEyebrow: "Primary workflow example",
    constraintTitle: "Gate an agent action and return a diagnostic artifact instead of letting the model fail silently.",
    constraintDescription:
      "The strongest technical example is a real action gate: define the allowed action boundary, encode the rejection rule, and emit structured diagnostics an operator or agent loop can use.",
    constraints: [
      { title: "Define the allowed action boundary", body: "Specify what the agent may touch, how much risk is tolerated, and what conditions trigger a narrower execution path or an explicit stop.", outcome: "policy circuit" },
      { title: "Check before execution", body: "Run the policy check before the model output reaches tools, deployment flows, or any other side-effecting surface.", outcome: "pre-execution diagnostics" },
      { title: "Emit operator-readable feedback", body: "Return reasons that help an operator, reviewer, or automated loop understand why the action was blocked and what would need to change.", outcome: "repairable review trail" },
    ],
    codeEyebrow: "Policy circuit",
    codeTitle: "ai_agent_policy.pcd",
    code: `PC ai_agent_policy {
  input confidence : Float64[0.0 .. 1.0]
  input actionRisk : Int[0 .. 10]

  assert actionRisk <= 7 || confidence >= 0.90
    | reject("high-risk action requires stronger confidence")

  output allowed : Bool = true
}`,
    constraintFooter:
      "BRIK-64 supports explicit action gating and generated-code review. It does not solve general model alignment or replace organizational controls.",
    scenarioEyebrow: "Workflow example",
    scenarioTitle: "Run the production AI loop with a hard gate between generation and execution.",
    scenarioDescription:
      "The flow stays simple and technical: define the boundary, encode the gate, emit diagnostics, and route the accepted artifact into the next product surface.",
    scenarioSteps: [
      { label: "01", title: "Define the boundary", body: "Select the tool actions, risk thresholds, and generated-code scopes the model may attempt.", state: "active" },
      { label: "02", title: "Encode the gate", body: "Express the action rule as a policy circuit or bounded policy artifact outside the model.", state: "warning" },
      { label: "03", title: "Check and emit evidence", body: "Return either an approved artifact or a structured rejection that preserves the reason for the decision.", state: "success" },
      { label: "04", title: "Publish or retry", body: "Approved outputs move into platform or registry flows, while rejected outputs feed back into the agent loop.", state: "idle" },
    ],
    scenarioStatusLabel: "operator loop",
    scenarioStatusTone: "warning",
    scenarioFooter:
      "This workflow supports production AI governance and generated-output review. It does not claim that BRIK-64 makes an AI system universally safe.",
    ctaTitle: "Use AI Agents as the operating surface for explicit action gating and generated-code review.",
    ctaDescription:
      "Open the AI Agents workflow to see where the gate lives, then follow the AI safety use case for a scenario-level view of the same discipline.",
    ctaActions: [primary("Open AI agents", "/ai-agents"), secondary("Read AI safety use case", "/use-cases/ai-safety")],
  }),
  automotive: industry({
    heroEyebrow: "Automotive",
    title: "Automotive software needs explicit thresholds, safe fallback, and",
    highlight: "change-sensitive review.",
    description:
      "Vehicle platform teams need a software artifact that exposes actuation thresholds, sensor assumptions, and fallback behavior across revisions. BRIK-64 helps turn that control logic into a bounded artifact that survives safety and enterprise handoff.",
    heroBackgroundImageSrc: "/generated/automotive-hero-bg.png",
    heroMetrics: [
      { label: "Workflow focus", value: "Platform control review", detail: "Use the platform workflow to inspect actuation logic, bounded thresholds, and fallback posture before the control component moves deeper into the release path." },
      { label: "Artifact emitted", value: "Safety review dossier", detail: "Emit an artifact that keeps threshold logic, sensor assumptions, and decision state coupled instead of scattering them across comments and hidden branches." },
      { label: "Review context", value: "ISO 26262 and ASIL posture", detail: "Reference safety review context without claiming that BRIK-64 alone satisfies the vehicle program." },
    ],
    heroStatusLabel: "control software review",
    heroStatusTone: "warning",
    heroProofStripEyebrow: "Where BRIK-64 enters",
    heroProofStripTitle: "BRIK-64 enters at the threshold-sensitive control component, where actuation rules and fallback behavior still need a readable software boundary.",
    heroProofStripDescription:
      "Inspect the bounded control artifact in Platform, then hand the result into enterprise review with the same threshold and fallback logic still visible.",
    sectionEyebrow: "Control component review",
    sectionTitle: "Vehicle control software is easier to review when threshold logic, sensor assumptions, and fallback behavior stay inside one artifact.",
    sectionDescription:
      "The integration story here is not a generic autonomy demo. It is a practical engineering path for teams reviewing brake, steering, torque, or similar control logic under update pressure.",
    evidenceEyebrow: "Where BRIK-64 helps",
    evidenceTitle: "Make the actuation boundary readable before the control path disappears into a wider vehicle stack.",
    evidenceDescription:
      "These tracks focus on the review problem that matters in automotive software: which conditions authorize an action, which states force a fallback, and what evidence survives the next revision.",
    evidenceTracks: [
      { label: "Threshold logic", title: "Expose the conditions that actually authorize an actuation", body: "Bounded speed, distance, torque, or sensor thresholds make it possible to inspect why the software would command an action instead of discovering the rule after a failure.", emphasis: "risk" },
      { label: "Sensor and fallback assumptions", title: "Keep rejection and degraded behavior tied to the same control artifact", body: "The control artifact should show where a signal is trusted, where it is rejected, and what the software does when it cannot justify the actuation path.", emphasis: "proof" },
      { label: "Revision-sensitive evidence", title: "Carry the same control artifact across software updates", body: "When the control component changes, the emitted evidence should also change, making the next safety review faster and more precise." },
    ],
    evidenceStatusLabel: "actuation review",
    evidenceStatusTone: "warning",
    constraintEyebrow: "Primary workflow example",
    constraintTitle: "Validate an actuation and fallback component before the next safety review starts from scratch.",
    constraintDescription:
      "A concrete automotive workflow is to review one control component at a time: declare the threshold envelope, encode fallback behavior, and emit evidence that stays valid across revisions until the logic itself changes.",
    constraints: [
      { title: "Declare thresholds and assumptions", body: "Capture speed, distance, torque, or similar actuation gates alongside the sensor assumptions that justify the path.", outcome: "bounded actuation logic" },
      { title: "Encode safe fallback", body: "Show how the component behaves when the required signal, threshold, or correlation is missing so the degraded route is reviewable.", outcome: "fallback artifact" },
      { title: "Emit change-sensitive evidence", body: "Return review state that lets a safety or platform engineer compare the current behavior with the last approved revision.", outcome: "revision-aware dossier" },
    ],
    codeEyebrow: "Actuation guard",
    codeTitle: "emergency_brake_guard.pcd",
    code: `PC emergency_brake_guard {
  input speedKph  : Float64[0.0 .. 260.0]
  input distanceM : Float64[0.0 .. 300.0]

  assert distanceM > 0.0
  assert speedKph <= 260.0

  output brake_allowed : Bool = distanceM < 40.0
}`,
    constraintFooter:
      "BRIK-64 supports readable control review artifacts and safety-case preparation. It does not claim ISO 26262 compliance or end-to-end vehicle assurance by itself.",
    scenarioEyebrow: "Workflow example",
    scenarioTitle: "Run the control-review loop the way a vehicle software team actually ships it.",
    scenarioDescription:
      "Define the control boundary, encode the actuation logic, emit the review artifact, and carry it into platform and enterprise review instead of leaving the safety argument implicit.",
    scenarioSteps: [
      { label: "01", title: "Define the boundary", body: "Select the threshold, sensor, and fallback conditions that govern the control component.", state: "active" },
      { label: "02", title: "Encode the control logic", body: "Represent the actuation rule and rejection path as bounded logic that another engineer can inspect.", state: "warning" },
      { label: "03", title: "Check and emit evidence", body: "Generate a review artifact that records the threshold logic and the emitted control state.", state: "success" },
      { label: "04", title: "Hand off for review", body: "Move the artifact into platform and enterprise workflows for the next stage of safety and release review.", state: "idle" },
    ],
    scenarioStatusLabel: "enterprise handoff",
    scenarioStatusTone: "warning",
    scenarioFooter:
      "This workflow supports automotive control review and safety-case preparation. It does not claim that BRIK-64 certifies the vehicle stack on its own.",
    ctaTitle: "Review threshold-sensitive control logic before it becomes another opaque branch in the vehicle stack.",
    ctaDescription:
      "Inspect the bounded control artifact in Platform, then continue into enterprise review with the same actuation and fallback logic still visible.",
    ctaActions: [primary("Talk to enterprise", "mailto:enterprise@brik64.com"), secondary("Read platform", "/platform")],
  }),
  engineering: industry({
    heroEyebrow: "Engineering Software",
    title: "Engineering software needs explicit assumptions and preserved",
    highlight: "calculation trails.",
    description:
      "Simulation, controls, and industrial calculation pipelines break when materials, units, ranges, and accepted transforms remain implicit. BRIK-64 helps teams express those assumptions in PCD and emit a computational dossier another engineer can inspect and reuse.",
    heroBackgroundImageSrc: "/generated/engineering-hero-bg.png",
    heroMetrics: [
      { label: "Workflow focus", value: "PCD computation blueprint", detail: "Start by declaring units, materials, and bounds in a formal representation before the calculation path disappears into a larger toolchain." },
      { label: "Artifact emitted", value: "Computational dossier", detail: "Preserve the assumptions, the bounded transform, and the emitted engineering state in one inspectable object." },
      { label: "Review context", value: "Technical review posture", detail: "Keep the page about engineering review and software correctness, not about broad certification claims." },
    ],
    heroStatusLabel: "computation review",
    heroStatusTone: "teal",
    heroProofStripEyebrow: "Where BRIK-64 enters",
    heroProofStripTitle: "BRIK-64 enters at the point where assumptions should still be visible instead of scattered across scripts, notebooks, and tool settings.",
    heroProofStripDescription:
      "Use PCD to declare the calculation boundary, emit a dossier that preserves the transform path, and reuse the same bounded component through foundations-oriented engineering workflows.",
    sectionEyebrow: "Computation review",
    sectionTitle: "Engineering calculations become easier to trust when assumptions, transforms, and emitted state stay in one bounded artifact.",
    sectionDescription:
      "A technical buyer should be able to see exactly where the methodology fits: not as generic consulting, but as a disciplined way to preserve units, ranges, materials, and reusable algorithms in software form.",
    evidenceEyebrow: "Where BRIK-64 helps",
    evidenceTitle: "Treat the engineering transform as a shareable blueprint instead of a brittle script.",
    evidenceDescription:
      "The integration path is concrete: express the boundary in PCD, preserve the transform as an inspectable artifact, and route it into foundations and reuse workflows.",
    evidenceTracks: [
      { label: "Declared assumptions", title: "Capture materials, units, and ranges before the transform runs", body: "A structural, controls, or industrial computation becomes easier to review when load cases, material properties, tolerances, and units are explicit in the software artifact itself.", emphasis: "risk" },
      { label: "Reusable bounded algorithms", title: "Keep the transform readable enough to reuse across related engineering workflows", body: "A bounded algorithm can be reviewed once, reused across projects, and carried into other engineering surfaces without restating the same assumptions from scratch.", emphasis: "proof" },
      { label: "Foundation handoff", title: "Route the resulting dossier into product routes built for composition and reuse", body: "The engineering route connects directly to PCD and Foundations so the artifact stays part of the real product workflow." },
    ],
    evidenceStatusLabel: "engineering dossier",
    evidenceStatusTone: "teal",
    constraintEyebrow: "Primary workflow example",
    constraintTitle: "Publish a bounded calculation artifact before the result is detached from the assumptions that produced it.",
    constraintDescription:
      "A useful engineering workflow keeps the assumptions and the emitted value coupled: define the ranges, encode the transform, and preserve enough structure for another engineer to review the result.",
    constraints: [
      { title: "Declare material and range bounds", body: "Capture units, geometry, materials, loads, or similar engineering limits as explicit domains instead of leaving them to comments or tool defaults.", outcome: "assumption boundary" },
      { title: "Encode the bounded transform", body: "Represent the calculation as a bounded computational object so the accepted path is clear before the result is used elsewhere.", outcome: "reusable transform artifact" },
      { title: "Emit a reviewable dossier", body: "Preserve enough context around the output for another engineer to see what was assumed, what was checked, and what the transform returned.", outcome: "inspectable calculation trail" },
    ],
    codeEyebrow: "Computation blueprint",
    codeTitle: "stress_boundary.pcd",
    code: `PC stress_boundary {
  input loadN    : Float64[0.0 .. 5e7]
  input areaMm2  : Float64[1.0 .. 1e6]
  input yieldMpa : Float64[1.0 .. 2000.0]

  let stress = loadN / areaMm2
  assert stress <= yieldMpa

  output stress_mpa : Float64 = stress
}`,
    constraintFooter:
      "BRIK-64 supports inspectable computational dossiers and reusable bounded algorithms. It does not replace expert sign-off or broader sector certification.",
    scenarioEyebrow: "Workflow example",
    scenarioTitle: "Run the engineering calculation loop with the assumptions still attached to the result.",
    scenarioDescription:
      "The workflow is simple: define the boundary, encode the transform in PCD, emit the dossier, and reuse the resulting artifact through foundations-oriented product surfaces.",
    scenarioSteps: [
      { label: "01", title: "Define the boundary", body: "Select the units, ranges, and engineering assumptions the computation is allowed to accept.", state: "active" },
      { label: "02", title: "Encode the transform", body: "Represent the bounded computation so the accepted path is visible instead of hidden inside a tool chain.", state: "warning" },
      { label: "03", title: "Check and emit evidence", body: "Generate an artifact that preserves both the output and the assumptions that produced it.", state: "success" },
      { label: "04", title: "Reuse the blueprint", body: "Move the bounded computation into foundations and related engineering workflows without losing the review trail.", state: "idle" },
    ],
    scenarioStatusLabel: "foundations handoff",
    scenarioStatusTone: "teal",
    scenarioFooter:
      "This workflow supports bounded engineering review and reusable software artifacts. It does not claim domain certification or expert approval on its own.",
    ctaTitle: "Keep engineering assumptions attached to the software artifact instead of losing them in the tool chain.",
    ctaDescription:
      "Open PCD to see the blueprint layer, then follow the foundations surface for how these bounded computational objects compose across the system.",
    ctaActions: [primary("Open PCD", "/pcd"), secondary("Read foundations", "/foundations")],
  }),
  finance: industry({
    heroEyebrow: "Banking & Finance",
    title: "Financial software needs bounded transaction logic before money moves or",
    highlight: "legacy behavior is rewritten.",
    description:
      "Payment flows, ledger transitions, approval gates, and risk calculations all live under audit pressure. BRIK-64 helps teams lift that logic into a reviewable artifact before refactoring, transpilation, or modernization hides the behavior they still need to preserve.",
    heroBackgroundImageSrc: "/generated/finance-hero-bg.png",
    heroMetrics: [
      { label: "Workflow focus", value: "Lifter review path", detail: "Lift legacy payment, ledger, and business-rule logic into a bounded artifact before it is migrated or replaced." },
      { label: "Artifact emitted", value: "Audit-ready rule dossier", detail: "Keep transaction bounds, approval gates, and emitted decision state together so risk and compliance engineers can inspect the same object." },
      { label: "Review context", value: "PCI-DSS, SOX, MiFID II posture", detail: "Use the artifact as review evidence in regulated finance workflows without claiming that BRIK-64 satisfies the whole program." },
    ],
    heroStatusLabel: "financial logic review",
    heroStatusTone: "warning",
    heroProofStripEyebrow: "Where BRIK-64 enters",
    heroProofStripTitle: "BRIK-64 enters before modernization or execution, where payment rules and approval logic still need a readable software boundary.",
    heroProofStripDescription:
      "Lift review-critical financial logic into a bounded artifact, emit an audit-ready dossier, and hand it into enterprise review before the next migration step hides the behavior again.",
    sectionEyebrow: "Transaction and ledger review",
    sectionTitle: "Transaction software is easier to audit when payment rules, approval gates, and state transitions stay in one artifact.",
    sectionDescription:
      "The integration path for finance teams is direct: use Lifter to expose review-critical logic, preserve the business-rule boundary, and move the emitted artifact into enterprise and compliance review instead of relying on retrospective incident analysis.",
    evidenceEyebrow: "Where BRIK-64 helps",
    evidenceTitle: "Put money-moving logic under review before execution or modernization splits it across systems.",
    evidenceDescription:
      "The finance story is strongest when it stays close to operational software: payment rails, settlement rules, ledger transitions, and model thresholds that have to remain inspectable under audit pressure.",
    evidenceTracks: [
      { label: "Payments and settlement", title: "Bound the paths that actually authorize value movement", body: "Payment approval, refund, settlement, and transfer logic become easier to review when the accepted amount domains, approval branches, and rejection rules are all visible in one bounded artifact.", emphasis: "risk" },
      { label: "Risk and pricing logic", title: "Expose the threshold assumptions behind a financial decision", body: "Fee bands, exposure limits, volatility windows, and approval thresholds can be kept in explicit domains so reviewers see where the software accepts, escalates, or rejects a path.", emphasis: "proof" },
      { label: "Legacy migration review", title: "Preserve the behavior you intend to keep before a rewrite or transpilation rewires it", body: "Lifting legacy ledger or business-rule code gives the team a stable artifact to inspect before refactoring, platform migration, or multi-target translation changes the operational shape of the software." },
    ],
    evidenceStatusLabel: "audit workflow",
    evidenceStatusTone: "warning",
    constraintEyebrow: "Primary workflow example",
    constraintTitle: "Lift a financial rule set into an artifact auditors and engineers can inspect before the next migration step.",
    constraintDescription:
      "A useful finance workflow is to isolate the money-moving logic, make approval and escalation rules explicit, and preserve the emitted state in a dossier that survives modernization work.",
    constraints: [
      { title: "Declare transaction and approval bounds", body: "Capture amount ranges, sufficient-balance checks, fee logic, approval thresholds, and similar constraints inside explicit domains before the execution path is trusted.", outcome: "transaction rule boundary" },
      { title: "Encode the review-critical logic", body: "Lift the payment, ledger, or risk rule into a bounded artifact so the team can compare the preserved behavior before rewriting or transpiling it.", outcome: "lifted audit dossier" },
      { title: "Emit an inspectable trail", body: "Return enough structured output for an engineer, risk reviewer, or compliance lead to see what was checked and why the decision path was accepted, escalated, or rejected.", outcome: "reviewable audit artifact" },
    ],
    codeEyebrow: "Lifted rule artifact",
    codeTitle: "transaction_validator.pcd",
    code: `PC transaction_validator {
  input amount  : Float64[0.01 .. 1e9]
  input balance : Float64[0.0 .. 1e12]
  input fee     : Float64[0.0 .. 0.05]

  let total = amount + (amount * fee)

  assert balance >= total
    | reject("insufficient funds")

  output approved_total : Float64 = total
}`,
    constraintFooter:
      "BRIK-64 supports reviewable transaction artifacts and migration evidence. It does not satisfy PCI-DSS, SOX, MiFID II, or any full regulatory program on its own.",
    scenarioEyebrow: "Workflow example",
    scenarioTitle: "Run the financial review loop before execution or modernization makes the rule path harder to inspect.",
    scenarioDescription:
      "The loop is operational and concrete: define the rule boundary, lift the business logic, emit the audit artifact, and move that artifact into enterprise review before the code changes again.",
    scenarioSteps: [
      { label: "01", title: "Define the boundary", body: "Select the payment, ledger, or risk rule set that must remain inspectable under audit pressure.", state: "active" },
      { label: "02", title: "Lift or encode the logic", body: "Bring the review-critical behavior into a bounded artifact so the accepted and rejected branches are visible.", state: "warning" },
      { label: "03", title: "Check and emit evidence", body: "Generate a dossier that preserves the decision path and the metadata a reviewer needs to trace the result.", state: "success" },
      { label: "04", title: "Hand off to enterprise review", body: "Carry the emitted artifact forward as the stable handoff object for audit, migration, or wider platform review.", state: "idle" },
    ],
    scenarioStatusLabel: "enterprise handoff",
    scenarioStatusTone: "warning",
    scenarioFooter:
      "This workflow supports audit-ready financial software review and legacy migration preparation. It does not claim blanket compliance or complete financial-system certification.",
    ctaTitle: "Lift the financial rule set before the next migration step makes the original logic harder to audit.",
    ctaDescription:
      "Open Lifter to inspect the bounded transaction artifact, then move into enterprise review with the same approval and ledger logic still visible.",
    ctaActions: [primary("Open lifter", "/lifter"), secondary("Request enterprise review", "mailto:enterprise@brik64.com")],
  }),
  government: industry({
    heroEyebrow: "Government",
    title: "Public-sector systems need deterministic rule logic and",
    highlight: "auditable processing.",
    description:
      "Eligibility engines, routing rules, and case-processing logic all sit under oversight pressure. BRIK-64 helps public-sector teams turn those decision paths into readable software artifacts that preserve accepted inputs, emitted state, and audit context.",
    heroBackgroundImageSrc: "/generated/government-hero-bg.png",
    heroMetrics: [
      { label: "Workflow focus", value: "Compliance rule review", detail: "Start where deterministic policy logic still needs inspection before it is buried inside a broader operational workflow." },
      { label: "Artifact emitted", value: "Oversight-ready rule artifact", detail: "Preserve the rule set, bounded inputs, and emitted decision state in a form an engineering or oversight reviewer can inspect." },
      { label: "Review context", value: "FedRAMP and deployment posture", detail: "Keep the language on auditable software and review posture without implying automatic authorization or classified readiness." },
    ],
    heroStatusLabel: "public-sector rule review",
    heroStatusTone: "neutral",
    heroProofStripEyebrow: "Where BRIK-64 enters",
    heroProofStripTitle: "BRIK-64 enters where rules and eligibility logic still need a readable software boundary before oversight review begins.",
    heroProofStripDescription:
      "Use Compliance to encode the decision rule, emit an oversight-ready artifact, and carry that artifact into enterprise review without losing the link between policy conditions and software behavior.",
    sectionEyebrow: "Eligibility and rules review",
    sectionTitle: "Rule-heavy public software is easier to audit when policy logic, bounded inputs, and emitted state stay in one artifact.",
    sectionDescription:
      "The useful government story is about explicit software behavior: eligibility decisions, routing conditions, and accepted input ranges that stay readable to engineering, compliance, and oversight teams.",
    evidenceEyebrow: "Where BRIK-64 helps",
    evidenceTitle: "Keep deterministic policy logic visible instead of reconstructing it after an audit request arrives.",
    evidenceDescription:
      "The integration path is straightforward: use Compliance to express the rule set, preserve the processing boundary, and emit an artifact that survives handoff into enterprise and oversight workflows.",
    evidenceTracks: [
      { label: "Eligibility and routing rules", title: "Make decision logic inspectable instead of burying it behind opaque application flow", body: "Benefit eligibility, document routing, and related rule-heavy workflows become easier to inspect when the actual conditions and accepted inputs stay visible in one bounded artifact.", emphasis: "risk" },
      { label: "Bounded input handling", title: "Show which public inputs are accepted, rejected, or escalated", body: "The software artifact should make it obvious where the system stays within its approved decision boundary and where it routes a case into a different path.", emphasis: "proof" },
      { label: "Oversight handoff", title: "Emit an artifact another team can inspect without reverse-engineering the application", body: "A readable rule artifact gives engineering, compliance, and oversight teams a stable object to review without making vague claims about trust or readiness." },
    ],
    evidenceStatusLabel: "oversight review",
    evidenceStatusTone: "neutral",
    constraintEyebrow: "Primary workflow example",
    constraintTitle: "Encode an eligibility or routing rule set before the processing path disappears into operational complexity.",
    constraintDescription:
      "A practical public-sector workflow is to isolate the rules that govern a case decision, define the accepted inputs, and preserve the emitted review state in an oversight-ready artifact.",
    constraints: [
      { title: "Declare the rule boundary", body: "Capture eligibility conditions, routing gates, or similar policy logic as explicit rule branches instead of scattering them across hidden application flow.", outcome: "deterministic rule artifact" },
      { title: "Bound the accepted input set", body: "Specify what input ranges, document states, or case attributes are valid so unexpected processing does not remain implicit.", outcome: "auditable input boundary" },
      { title: "Emit an oversight-ready result", body: "Return enough context for a reviewer to see what rule path ran and why the system accepted, rejected, or escalated the case.", outcome: "reviewable oversight trail" },
    ],
    codeEyebrow: "Rule artifact",
    codeTitle: "eligibility_gate.pcd",
    code: `PC eligibility_gate {
  input applicantAge : Int[0 .. 130]
  input residency    : Enum["verified", "pending", "rejected"]

  assert applicantAge >= 18
  assert residency == "verified"

  output eligible : Bool = true
}`,
    constraintFooter:
      "BRIK-64 supports auditable rule artifacts and bounded public-sector processing. It does not claim automatic authorization, policy correctness in every context, or broader governance closure.",
    scenarioEyebrow: "Workflow example",
    scenarioTitle: "Run the rule-review loop before oversight work has to reconstruct the logic from application behavior.",
    scenarioDescription:
      "The engineering flow is simple: define the policy boundary, encode the rule set, emit the review artifact, and hand it into compliance and enterprise review with the software logic still intact.",
    scenarioSteps: [
      { label: "01", title: "Define the boundary", body: "Select the eligibility or routing rule set that needs deterministic review.", state: "active" },
      { label: "02", title: "Encode the rule logic", body: "Represent the accepted inputs and decision branches as bounded software logic instead of opaque application behavior.", state: "warning" },
      { label: "03", title: "Check and emit evidence", body: "Generate an artifact that preserves the rule path and the emitted decision state for oversight review.", state: "success" },
      { label: "04", title: "Hand off to review", body: "Move the artifact into compliance and enterprise workflows without losing the original software boundary.", state: "idle" },
    ],
    scenarioStatusLabel: "oversight handoff",
    scenarioStatusTone: "neutral",
    scenarioFooter:
      "This workflow supports deterministic rule review and auditable processing. It does not claim that one artifact settles broader governance or authorization obligations.",
    ctaTitle: "Keep rule-heavy public software inspectable before the audit or oversight request arrives.",
    ctaDescription:
      "Read the compliance surface for the rule-review posture, then continue into enterprise review if the workflow needs team and organizational controls around the same artifact.",
    ctaActions: [primary("Read compliance", "/compliance"), secondary("Talk to enterprise", "mailto:enterprise@brik64.com")],
  }),
  healthcare: industry({
    heroEyebrow: "Healthcare",
    title: "Clinical software needs explicit dose boundaries, escalation paths, and",
    highlight: "reviewable artifacts.",
    description:
      "Dose calculators, device-adjacent workflows, and clinical state transitions all need a readable software boundary long before broader clinical processes take over. BRIK-64 helps teams express that logic as bounded review artifacts without making efficacy or compliance claims.",
    heroBackgroundImageSrc: "/generated/healthcare-hero-bg.png",
    heroMetrics: [
      { label: "Workflow focus", value: "Safety-Critical review", detail: "Start where dose or workflow logic still needs explicit engineering review before it enters broader clinical or device processes." },
      { label: "Artifact emitted", value: "Clinical logic dossier", detail: "Preserve dose boundaries, escalation paths, and emitted review state in a software artifact another engineer can inspect." },
      { label: "Review context", value: "IEC 62304 posture", detail: "Use the artifact as software-review context without claiming automatic compliance or therapeutic outcomes." },
    ],
    heroStatusLabel: "clinical logic review",
    heroStatusTone: "warning",
    heroProofStripEyebrow: "Where BRIK-64 enters",
    heroProofStripTitle: "BRIK-64 enters where dose and workflow logic still need an explicit software boundary before broader clinical processes take over.",
    heroProofStripDescription:
      "Use Safety-Critical to review bounded dose or workflow logic, emit an engineering artifact, and hand that artifact into evaluation or enterprise review with the escalation path still visible.",
    sectionEyebrow: "Dose and workflow review",
    sectionTitle: "Clinical software is easier to review when dose logic, escalation, and emitted state stay in one bounded artifact.",
    sectionDescription:
      "The healthcare story stays on software evidence: explicit dose boundaries, workflow state transitions, and readable engineering review output for device-adjacent or clinical workflow systems.",
    evidenceEyebrow: "Where BRIK-64 helps",
    evidenceTitle: "Keep the software boundary visible before a recommendation or workflow transition reaches a broader clinical process.",
    evidenceDescription:
      "The value is not a vague safety claim. It is a practical engineering path for teams that need dose logic, escalation behavior, and review evidence to remain readable.",
    evidenceTracks: [
      { label: "Dose and state boundaries", title: "Declare what the software may recommend or transition between", body: "Dose bands, patient-state thresholds, and workflow transitions become easier to inspect when the allowed ranges and rejection paths are part of the same bounded artifact.", emphasis: "risk" },
      { label: "Escalation logic", title: "Make the review and escalation path explicit instead of relying on hidden fallback", body: "A bounded artifact should show where the software stops, escalates, or routes to human review when the input falls outside the approved boundary.", emphasis: "proof" },
      { label: "Engineering handoff", title: "Emit a software review artifact that survives safety-critical and enterprise workflows", body: "The resulting dossier helps device and workflow teams review what was checked and what result was emitted without claiming therapeutic outcomes or complete compliance." },
    ],
    evidenceStatusLabel: "clinical workflow",
    evidenceStatusTone: "warning",
    constraintEyebrow: "Primary workflow example",
    constraintTitle: "Validate a dose or workflow rule set before the recommendation path leaves engineering review.",
    constraintDescription:
      "A concrete healthcare workflow is to declare the dose or escalation boundary, encode the clinical logic, and preserve the emitted software state in a dossier another engineer can inspect.",
    constraints: [
      { title: "Declare dose and workflow boundaries", body: "Capture safe dose ranges, accepted workflow states, and similar software limits before a recommendation or transition is emitted.", outcome: "bounded clinical logic" },
      { title: "Encode escalation behavior", body: "Make the review gate explicit so out-of-range states route into escalation rather than silent fallback or opaque branching.", outcome: "escalation artifact" },
      { title: "Emit engineering review state", body: "Return enough structured output for an engineer to trace what was checked and what recommendation or workflow state the software produced.", outcome: "reviewable software dossier" },
    ],
    codeEyebrow: "Dose guard",
    codeTitle: "dose_guard.pcd",
    code: `PC dose_guard {
  input weightKg : Float64[1.0 .. 300.0]
  input doseMgKg : Float64[0.0 .. 50.0]

  let dose = weightKg * doseMgKg
  assert dose <= 2000.0

  output recommended_dose : Float64 = dose
}`,
    constraintFooter:
      "BRIK-64 supports bounded clinical software review artifacts. It does not claim medical efficacy, replace clinical judgment, or satisfy IEC 62304 by itself.",
    scenarioEyebrow: "Workflow example",
    scenarioTitle: "Run the clinical software review loop before the workflow or recommendation leaves engineering control.",
    scenarioDescription:
      "The loop stays narrow and technical: define the software boundary, encode the dose or workflow logic, emit the review artifact, and hand it into evaluation with the same evidence still attached.",
    scenarioSteps: [
      { label: "01", title: "Define the boundary", body: "Select the dose or workflow states that must remain inside the approved software envelope.", state: "active" },
      { label: "02", title: "Encode the logic", body: "Represent the dose rule, workflow transition, and escalation path as bounded software logic.", state: "warning" },
      { label: "03", title: "Check and emit evidence", body: "Generate a dossier that preserves the accepted range and the emitted review state.", state: "success" },
      { label: "04", title: "Hand off to evaluation", body: "Move the artifact into safety-critical and evaluation workflows without losing the original software boundary.", state: "idle" },
    ],
    scenarioStatusLabel: "evaluation handoff",
    scenarioStatusTone: "warning",
    scenarioFooter:
      "This workflow supports bounded clinical software review and readable escalation. It does not claim clinical correctness in every context or automatic compliance.",
    ctaTitle: "Keep dose and workflow logic inside a readable engineering artifact before broader clinical processes take over.",
    ctaDescription:
      "Read the Safety-Critical surface for the bounded review posture, then request evaluation when the same artifact needs an enterprise or regulated-program handoff.",
    ctaActions: [primary("Read safety-critical", "/safety-critical"), secondary("Request evaluation", "mailto:enterprise@brik64.com")],
  }),
  science: industry({
    heroEyebrow: "Science & Research",
    title: "Scientific software needs explicit assumptions, reproducibility, and",
    highlight: "shareable computational blueprints.",
    description:
      "Research software becomes brittle when units, calibration factors, and transform steps remain implicit in notebooks or scripts. BRIK-64 helps teams express those assumptions as bounded computational artifacts that preserve how a result was produced and how another team can reproduce it.",
    heroBackgroundImageSrc: "/generated/science-hero-bg.png",
    heroMetrics: [
      { label: "Workflow focus", value: "PCD reproducibility blueprint", detail: "Start by declaring ranges, units, and calibration factors in a formal representation before the computational path fragments across tools." },
      { label: "Artifact emitted", value: "Publication-ready trace", detail: "Preserve the transform chain and result lineage so another technical reader can inspect what the software actually computed." },
      { label: "Review context", value: "Reproducibility posture", detail: "Keep the page on repeatability and shareable artifacts rather than on broad scientific or regulatory claims." },
    ],
    heroStatusLabel: "scientific computation review",
    heroStatusTone: "teal",
    heroProofStripEyebrow: "Where BRIK-64 enters",
    heroProofStripTitle: "BRIK-64 enters where scientific assumptions should still be explicit instead of disappearing into notebooks, scripts, and local conventions.",
    heroProofStripDescription:
      "Use PCD to declare the computational boundary, emit a reproducibility artifact, and publish the bounded blueprint through registry workflows with the transform path still intact.",
    sectionEyebrow: "Reproducible computation",
    sectionTitle: "Scientific software is easier to reproduce when assumptions, transforms, and result lineage stay inside one bounded artifact.",
    sectionDescription:
      "The science workflow follows a real integration path: declare ranges and calibration factors in PCD, preserve the transform chain, and publish the resulting artifact for review and reuse.",
    evidenceEyebrow: "Where BRIK-64 helps",
    evidenceTitle: "Treat the computational method as a shareable blueprint instead of a fragile local script.",
    evidenceDescription:
      "The value is a bounded computational artifact that another research or engineering team can inspect, rerun, and connect to the same product surfaces used elsewhere in the stack.",
    evidenceTracks: [
      { label: "Declared assumptions", title: "Make units, ranges, and calibration factors explicit before the transform runs", body: "A scientific result is easier to review when the computational envelope is represented directly in the artifact instead of being implied by notebook context or local practice.", emphasis: "risk" },
      { label: "Repeatable transforms", title: "Keep the transform path readable enough for another team to reproduce", body: "A bounded computational blueprint preserves the exact transforms and accepted inputs that produced the result, making reuse and review more reliable.", emphasis: "proof" },
      { label: "Publication and reuse", title: "Publish the artifact without losing the result lineage", body: "The resulting blueprint can move into registry workflows as a shareable computational object while keeping the connection to the original assumptions and emitted value." },
    ],
    evidenceStatusLabel: "reproducibility workflow",
    evidenceStatusTone: "teal",
    constraintEyebrow: "Primary workflow example",
    constraintTitle: "Publish a reproducible transform before its assumptions disappear into local tooling.",
    constraintDescription:
      "A concrete science workflow is to declare the experimental bounds, encode the transform in PCD, and preserve enough result lineage for another technical reader to inspect and reuse the method.",
    constraints: [
      { title: "Declare ranges and calibration factors", body: "Capture measurement bounds, units, tolerances, and calibration inputs as explicit domains before the transform is trusted.", outcome: "assumption blueprint" },
      { title: "Encode the repeatable transform", body: "Represent the computational method so the accepted path and emitted value are tied to the same bounded artifact.", outcome: "reproducible transform" },
      { title: "Emit result lineage", body: "Return enough structure for a reviewer to see what assumptions were applied and how the result was obtained.", outcome: "publication-ready trace" },
    ],
    codeEyebrow: "Reproducibility artifact",
    codeTitle: "spectroscopy_analysis.pcd",
    code: `PC spectroscopy_analysis {
  input absorbance : Float64[0.0 .. 4.0]
  input pathCm     : Float64[0.1 .. 10.0]
  input epsilon    : Float64[0.1 .. 1e7]

  let concentration = absorbance / (pathCm * epsilon)
  output concentration_mol_l : Float64 = concentration
}`,
    constraintFooter:
      "BRIK-64 supports reproducible computational artifacts and result lineage. It does not prove the surrounding scientific claim or replace peer review.",
    scenarioEyebrow: "Workflow example",
    scenarioTitle: "Run the reproducibility loop with the assumptions still attached to the published method.",
    scenarioDescription:
      "The workflow remains technical and narrow: define the computational boundary, encode the transform, emit reproducibility evidence, and publish the blueprint through registry workflows.",
    scenarioSteps: [
      { label: "01", title: "Define the boundary", body: "Select the units, ranges, and calibration factors the computational method is allowed to accept.", state: "active" },
      { label: "02", title: "Encode the transform", body: "Represent the method as a bounded computation so another team can inspect the exact accepted path.", state: "warning" },
      { label: "03", title: "Check and emit evidence", body: "Generate evidence that preserves the transform chain and emitted result lineage.", state: "success" },
      { label: "04", title: "Publish and reuse", body: "Move results into PCD and Registry workflows without losing assumptions that gave the result meaning.", state: "idle" },
    ],
    scenarioStatusLabel: "registry handoff",
    scenarioStatusTone: "teal",
    scenarioFooter:
      "This workflow supports reproducibility and shareable computational blueprints. It does not settle the scientific claim outside the bounded model.",
    ctaTitle: "Keep the computational method shareable, reproducible, and still tied to the assumptions that produced the result.",
    ctaDescription:
      "Read the PCD reference for the blueprint layer, then publish the resulting method through Registry when it is ready to be shared and reused.",
    ctaActions: [primary("Read PCD", "/pcd"), secondary("Open registry", "/registry")],
  }),
} as const;

export const useCasePages = {
  aiSafety: buildUseCase({
    title: "AI safety needs policy circuits and",
    highlight: "pre-execution checks.",
    description:
      "This use case covers external verification, bounded action rules, and traceable agent workflows rather than sweeping claims about solved alignment.",
    heroMetrics: [
      { label: "Primary object", value: "Policy circuit", detail: "The key control point is the explicit rule set that sits outside the model." },
      { label: "Verification point", value: "Before execution", detail: "The workflow checks the action before it reaches production." },
      { label: "Proof style", value: "Structured diagnostics", detail: "Rejected outputs should produce a readable reason, not just a failure." },
    ],
    evidenceTracks: [
      { label: "Guardrail boundary", title: "Keep the policy external to the model", body: "Show how explicit policy circuits bound action space without pretending to replace all AI safety work.", emphasis: "proof" },
      { label: "Generated output", title: "Verify before the agent acts", body: "AI-generated code or actions become safer when a bounded review step sits in front of execution.", emphasis: "risk" },
      { label: "Workflow fit", title: "Tie the story back to product routes", body: "The use case resolves into CLI, PCD, platform, and registry workflows." },
    ],
    constraints: [
      { title: "Confidence vs risk", body: "High-risk actions should require stronger confidence or a distinct approval path.", outcome: "policy gate" },
      { title: "Token and action bounds", body: "Oversized or out-of-scope outputs should fail before they become production actions.", outcome: "bounded action" },
      { title: "Readable diagnostics", body: "Rejected paths should produce a reason the operator and the agent loop can both use.", outcome: "feedback loop" },
    ],
    codeTitle: "ai_action_validator.pcd",
    code: `PC ai_action_validator {
  input confidence : Float64[0.0 .. 1.0]
  input risk       : Int[0 .. 10]
  input tokens     : Int[0 .. 4096]

  assert risk <= 7 || confidence >= 0.90
  assert tokens <= 4096

  output approved : Bool = true
}`,
    ctaTitle: "Turn AI safety into a bounded workflow.",
    ctaDescription:
      "The strongest public message here is explicit pre-execution verification, not model mystique.",
  }),
  ciCdIntegration: buildUseCase({
    title: "CI/CD integration needs a proof step, not just another",
    highlight: "pipeline badge.",
    description:
      "This use case shows how bounded verification enters a delivery pipeline without pretending it replaces the rest of release engineering.",
    heroMetrics: [
      { label: "Primary object", value: "Pipeline gate", detail: "The critical control point is the bounded check inserted before release." },
      { label: "Verification point", value: "Build stage", detail: "The result is a gate and traceable evidence." },
      { label: "Proof style", value: "Change-sensitive", detail: "The pipeline output changes when the code path changes." },
    ],
    evidenceTracks: [
      { label: "Pipeline role", title: "Insert one explicit verification step", body: "Show the proof gate as a real operator step, not a vague CI benefit statement.", emphasis: "proof" },
      { label: "Evidence sensitivity", title: "Keep output tied to build input", body: "The useful part of the use case is that changed code produces changed evidence.", emphasis: "risk" },
      { label: "Workflow handoff", title: "Connect the check to the registry or review flow", body: "Make clear what happens after the gate passes." },
    ],
    constraints: [
      { title: "Build-time verification", body: "Show a check that runs before merge or deploy, not only after release.", outcome: "release gate" },
      { title: "Evidence emission", body: "A successful run should produce a traceable result that can flow into docs, badges, or registry workflows.", outcome: "evidence trail" },
      { title: "Scoped promise", body: "The use case does not imply that one check replaces all testing, security, or operations work.", outcome: "bounded claim" },
    ],
    codeTitle: ".github/workflows/certify.yml",
    code: `name: certify
on: [push, pull_request]
jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - run: brikc lift src/ --to pcd
      - run: brikc check dist/project.pcd
      - run: brikc certify dist/project.pcd`,
    ctaTitle: "Make the CI/CD proof gate explicit.",
    ctaDescription:
      "Show where the verification step sits in the delivery flow and what evidence it emits.",
  }),
  cobolMigration: buildUseCase({
    title: "COBOL migration needs a bounded bridge, not a blind",
    highlight: "rewrite.",
    description:
      "This use case focuses on lifting legacy logic into explicit PCD or constrained bounded outputs before transpilation or modernization.",
    heroMetrics: [
      { label: "Primary object", value: "Lifted blueprint", detail: "The key step is making legacy logic inspectable before replacing it." },
      { label: "Verification point", value: "Post-lift", detail: "The useful check happens on the extracted circuit boundary." },
      { label: "Proof style", value: "Migration dossier", detail: "The result should preserve enough structure for engineers to inspect the transformation." },
    ],
    evidenceTracks: [
      { label: "Legacy extraction", title: "Lift the existing logic first", body: "Present PCD as a bridge that exposes what the legacy code actually computes.", emphasis: "proof" },
      { label: "Migration risk", title: "Reduce translation ambiguity", body: "The value comes from bounding the logic before it is moved, not from a generic modernization promise.", emphasis: "risk" },
      { label: "Reuse path", title: "Connect the lifted result to the wider product", body: "End in certification, review, and reuse rather than a one-off rewrite narrative." },
    ],
    constraints: [
      { title: "Liftable domain", body: "Show how legacy arithmetic or decision logic is extracted into explicit bounded objects.", outcome: "lift boundary" },
      { title: "Migration review", body: "Engineers should be able to compare source behavior and lifted behavior before any target code is emitted.", outcome: "side-by-side review" },
      { title: "Scoped claim", body: "The use case does not imply that every legacy system becomes instantly certified end to end.", outcome: "bounded modernization" },
    ],
    codeTitle: "payroll.pcd",
    code: `PC compute_net_pay {
  input gross : Float64[0.0 .. 1e7]
  input tax   : Float64[0.0 .. 1e7]

  assert gross >= tax
  output net : Float64 = gross - tax
}`,
    ctaTitle: "Show the bounded migration bridge.",
    ctaDescription:
      "The strongest signal is a lift-review-certify path that makes legacy logic inspectable before it is moved.",
  }),
  formalVerification: buildUseCase({
    title: "Formal verification becomes more usable when the proof path is",
    highlight: "operational.",
    description:
      "This use case connects theorem-backed thinking to a delivery path the reader can actually follow through the site.",
    heroMetrics: [
      { label: "Primary object", value: "Proof workflow", detail: "The focus is the bridge from formal reasoning to operator-readable steps." },
      { label: "Verification point", value: "Structure + closure", detail: "Stay grounded in bounded circuit checks and explicit proof posture." },
      { label: "Proof style", value: "Delivery-aware", detail: "The public story connects theory to how software is actually moved." },
    ],
    evidenceTracks: [
      { label: "Formal bridge", title: "Make the proof path legible", body: "Show how formal reasoning maps to circuits, checks, and published evidence.", emphasis: "proof" },
      { label: "Operational fit", title: "Keep the workflow usable", body: "The value comes from a usable engineering loop, not from abstract theorem language alone.", emphasis: "risk" },
      { label: "Public product link", title: "Connect the proof path to CLI and platform", body: "Do not isolate the route from the rest of the product narrative." },
    ],
    constraints: [
      { title: "Explicit domain", body: "Show that verification begins with bounded domains and explicit composition rather than mystical black-box reasoning.", outcome: "formal boundary" },
      { title: "Readable evidence", body: "Results should remain visible and inspectable to an engineer who is not reading proof assistants directly.", outcome: "public evidence" },
      { title: "Scoped promise", body: "The site should not imply that every aspect of program correctness is formally settled by a single page.", outcome: "bounded claim" },
    ],
    codeTitle: "calculator.pcd",
    code: `PC calculator {
  input left  : Float64[-1e6 .. 1e6]
  input right : Float64[-1e6 .. 1e6]

  output sum : Float64 = left + right
}`,
    ctaTitle: "Keep the formal-verification page tied to an operator workflow.",
    ctaDescription:
      "Help the reader see how bounded formal structure enters a product path they can actually use.",
  }),
  universalTranspilation: buildUseCase({
    title: "Universal transpilation only matters when the intermediate form is",
    highlight: "bounded and inspectable.",
    description:
      "This use case frames transpilation as a lift-check-build workflow rather than an unlimited source-to-source promise.",
    heroMetrics: [
      { label: "Primary object", value: "Intermediate blueprint", detail: "Keep the PCD or circuit layer visible between source and target." },
      { label: "Verification point", value: "Between lift and emit", detail: "The useful check happens on the bounded representation, not only on the final target." },
      { label: "Proof style", value: "Translation dossier", detail: "The result should preserve a readable transformation trail." },
    ],
    evidenceTracks: [
      { label: "Translation chain", title: "Keep the intermediate layer visible", body: "Show that source and target are connected through an inspectable bounded form.", emphasis: "proof" },
      { label: "Migration risk", title: "Avoid opaque source-to-source stories", body: "The value is in the constrained transformation path, not in the word 'universal'.", emphasis: "risk" },
      { label: "Reuse path", title: "Connect the result to registry or platform workflows", body: "End in reuse and review, not just conversion." },
    ],
    constraints: [
      { title: "Source extraction", body: "The use case shows where source behavior is lifted into a bounded intermediate representation.", outcome: "lift path" },
      { title: "Intermediate verification", body: "Make clear that the central check happens before target code is emitted.", outcome: "certification gate" },
      { title: "Target clarity", body: "The final emitted output should still point back to the bounded blueprint it came from.", outcome: "traceable output" },
    ],
    codeTitle: "normalize.pcd",
    code: `PC normalize {
  input value : Float64[0.0 .. 1000.0]
  input min   : Float64[0.0 .. 1000.0]
  input max   : Float64[0.0 .. 1000.0]

  assert max > min
  output normalized : Float64 = (value - min) / (max - min)
}`,
    ctaTitle: "Show the bounded intermediate form.",
    ctaDescription:
      "The page is strongest when the lift-check-emit chain stays explicit and inspectable.",
  }),
} as const;

export const thesisPages = {
  ai: thesis({
    title: "AI-generated code becomes safer when review stays",
    highlight: "outside the model.",
    description:
      "Generated output becomes dangerous when it reaches execution without a bounded review loop. BRIK-64 enters as an external verification path around the model, not as a claim that the model itself becomes trustworthy.",
    heroMetrics: [
      { label: "Primary risk", value: "Unreviewed generation", detail: "The problem is generated output that reaches execution without an external check." },
      { label: "Where BRIK-64 enters", value: "External verification", detail: "The useful boundary sits around the model, not inside the weights." },
      { label: "Workflow", value: "Discover → gate → diagnose", detail: "The route ends in a repeatable engineering loop." },
    ],
    evidenceTracks: [
      { label: "Model boundary", title: "Keep trust outside the weights", body: "Verification surrounds the model and checks candidate code or actions before they move forward.", emphasis: "proof" },
      { label: "Generated code", title: "Bound what gets shipped", body: "The workflow matters because generated code or actions stay attached to explicit checks and readable diagnostics.", emphasis: "risk" },
      { label: "Product fit", title: "Connect AI workflows back to the stack", body: "The AI thesis still terminates in CLI, PCD, platform, and registry workflows rather than floating above them." },
    ],
    constraints: [
      { title: "Externalized checks", body: "The verification object exists outside the model and can be inspected independently.", outcome: "trust boundary" },
      { title: "Feedback loop", body: "Diagnostics should feed back into the generation loop as structured signals, not only as generic failure.", outcome: "repairable workflow" },
      { title: "Claim boundary", body: "This thesis covers bounded software verification for generated code and agent actions. It does not solve general model alignment.", outcome: "bounded claim" },
    ],
    codeTitle: "agent_review_loop.pcd",
    code: `PC agent_review_loop {
  input confidence : Float64[0.0 .. 1.0]
  assert confidence >= 0.80
  output approved : Bool = true
}`,
    ctaTitle: "Inspect the AI workflow where the review loop stays explicit.",
    ctaDescription:
      "The route earns trust by making the boundary visible, not by making the promise larger.",
  }),
  blockchain: thesis({
    title: "Blockchain software still needs bounded logic and",
    highlight: "reviewable state.",
    description:
      "Irreversible transaction logic creates a review problem long before chain branding matters. BRIK-64 enters by making contract rules, state transitions, and value boundaries inspectable before deployment or reuse.",
    heroMetrics: [
      { label: "Primary risk", value: "Irreversible bad logic", detail: "The issue is a state transition that cannot be taken back once executed." },
      { label: "Where BRIK-64 enters", value: "Contract boundary", detail: "The useful public message is explicit, inspectable transaction logic." },
      { label: "Workflow", value: "Rule → check → handoff", detail: "Evidence stays attached to bounded state transitions." },
    ],
    evidenceTracks: [
      { label: "State boundary", title: "Focus on irreversible transitions", body: "The route matters when critical contract logic and state updates stay bounded and inspectable.", emphasis: "risk" },
      { label: "Review posture", title: "Keep transaction rules inspectable", body: "The strongest signal is a readable rule or circuit description, not chain theater.", emphasis: "proof" },
      { label: "Product fit", title: "Connect the thesis back to the product", body: "The domain argument should still hand the reader back to platform and registry workflows." },
    ],
    constraints: [
      { title: "Explicit state transitions", body: "Make preconditions and postconditions visible before a transaction path is accepted.", outcome: "state gate" },
      { title: "Bounded value movement", body: "Transaction amounts, roles, and related invariants should remain within declared domains.", outcome: "asset boundary" },
      { title: "Claim boundary", body: "This thesis supports reviewable contract logic and bounded state transitions. It does not claim the surrounding protocol or ecosystem is secure by default.", outcome: "traceable contract" },
    ],
    codeTitle: "token_transfer_guard.pcd",
    code: `PC token_transfer_guard {
  input amount : Float64[0.0 .. 1e9]
  input supply : Float64[0.0 .. 1e12]

  assert amount <= supply
  output transfer_allowed : Bool = true
}`,
    ctaTitle: "Inspect bounded contract logic before it turns into an irreversible state change.",
    ctaDescription:
      "Keep the argument focused on explicit state transitions and readable review paths.",
  }),
  safetyCritical: thesis({
    title: "Safety-critical software needs bounded computation and a readable",
    highlight: "assurance path.",
    description:
      "High-consequence software needs an explicit operating envelope, predictable fallback behavior, and a reviewable assurance path. BRIK-64 enters as a bounded software layer, not as a blanket certification claim for the surrounding system.",
    heroMetrics: [
      { label: "Primary risk", value: "Unsafe path", detail: "The relevant problem is a software path that should never be reachable." },
      { label: "Where BRIK-64 enters", value: "Declared envelope", detail: "The route focuses on bounded inputs, outputs, and fallback behavior." },
      { label: "Workflow", value: "Envelope → check → handoff", detail: "The useful output is a readable assurance path." },
    ],
    evidenceTracks: [
      { label: "Safety case", title: "Make the assurance path explicit", body: "The route is strongest when the operating envelope and the software boundary remain visible to the reviewer.", emphasis: "proof" },
      { label: "Failure posture", title: "Show what happens when the boundary is violated", body: "Safe fallback and rejection logic stays visible instead of being buried inside application flow.", emphasis: "risk" },
      { label: "Product fit", title: "Connect the route back to the stack", body: "The argument resolves into CLI, PCD, platform, and enterprise review routes rather than remaining an abstract safety slogan." },
    ],
    constraints: [
      { title: "Bounded operating envelope", body: "Important states should be represented as explicit domains and not as comments or hope.", outcome: "safety boundary" },
      { title: "Predictable fallback", body: "Out-of-bound states should be rejected or moved into a known safe path.", outcome: "safe failure" },
      { title: "Claim boundary", body: "This thesis supports bounded software review and assurance preparation. It does not certify the wider safety program on its own.", outcome: "assurance trail" },
    ],
    codeTitle: "safety_guard.pcd",
    code: `PC safety_guard {
  input state : Int[0 .. 4]
  input load  : Float64[0.0 .. 100.0]

  assert load <= 100.0
  output safe_to_continue : Bool = state != 4
}`,
    ctaTitle: "Inspect the assurance path while the operating envelope is still explicit.",
    ctaDescription:
      "Trust comes from showing the boundary and the fallback posture clearly.",
  }),
} as const;
