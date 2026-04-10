import type { RiskPageSpec } from "@/components/PageArchetypes";

function primary(label: string, href: string) {
  return { label, href, tone: "primary" as const };
}

function secondary(label: string, href: string, external = false) {
  return { label, href, tone: "secondary" as const, external };
}

function industry(config: {
  title: string;
  highlight: string;
  description: string;
  heroMetrics: RiskPageSpec["hero"]["metrics"];
  evidenceTracks: RiskPageSpec["evidence"]["tracks"];
  constraints: RiskPageSpec["constraint"]["constraints"];
  codeTitle: string;
  code: string;
  scenarioSteps: RiskPageSpec["scenario"]["steps"];
  ctaTitle: string;
  ctaDescription: string;
}): RiskPageSpec {
  return {
    hero: {
      eyebrow: "Industry",
      title: config.title,
      highlight: config.highlight,
      description: config.description,
      actions: [primary("Talk to enterprise", "mailto:enterprise@brik64.com"), secondary("Read platform", "/platform")],
      metrics: config.heroMetrics,
    },
    sectionHeader: {
      eyebrow: "Risk Surface",
      title: "This page now behaves like a safety case, not a landing page.",
      description:
        "Industry pages should expose regulated constraints, proof posture, and operator flow in one coherent grammar.",
    },
    evidence: {
      eyebrow: "Risk Evidence",
      title: "The main object is the constrained operating case",
      description:
        "Instead of generic feature cards, the page now presents the three or four constraints that define the domain boundary.",
      metrics: config.heroMetrics,
      tracks: config.evidenceTracks,
    },
    constraint: {
      eyebrow: "Constraint Envelope",
      title: "Bounded behavior lives in one inspectable proof surface",
      description:
        "The code sample is kept as evidence inside the constraint surface instead of becoming the page's dominant object.",
      constraints: config.constraints,
      codeTitle: config.codeTitle,
      code: config.code,
      footer:
        "Industry pages can describe high-risk domains, but they must keep claims scoped to bounded logic and evidence posture.",
    },
    scenario: {
      eyebrow: "Flow of Proof",
      title: "The operator path remains visible",
      description:
        "These pages should end in an operational flow: encode the boundary, check it, publish evidence, and reuse the result.",
      steps: config.scenarioSteps,
      footer:
        "The scenario flow keeps the page legible for engineers, auditors, and platform buyers without pretending the whole domain is solved by one compiler step.",
    },
    cta: {
      title: config.ctaTitle,
      description: config.ctaDescription,
      actions: [primary("Enterprise contact", "mailto:enterprise@brik64.com"), secondary("Documentation", "https://docs.brik64.dev", true)],
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
      eyebrow: "Use-Case Surface",
      title: "Use-case pages now show a bounded workflow instead of a code-heavy demo.",
      description:
        "A use case should read like an operational scenario with proof stages, not like a hero plus a detached snippet.",
    },
    evidence: {
      eyebrow: "Scenario Evidence",
      title: "The protagonist object is the bounded workflow",
      description:
        "The page surfaces the operator decision points and proof obligations before it shows any code.",
      metrics: config.heroMetrics,
      tracks: config.evidenceTracks,
    },
    constraint: {
      eyebrow: "Constraint Example",
      title: "The scenario remains attached to a real policy or circuit sketch",
      description:
        "Code is still useful here, but only as evidence embedded in a stronger surface.",
      constraints: config.constraints,
      codeTitle: config.codeTitle,
      code: config.code,
      footer:
        "Use-case pages should remain concrete, operator-readable, and careful not to oversell domain guarantees beyond the visible constraints.",
    },
    scenario: {
      eyebrow: "Workflow Rail",
      title: "The flow of proof stays explicit",
      description:
        "Every use case should make clear how an engineer goes from source material to bounded output and published evidence.",
      steps: [
        { label: "01", title: "Lift or express", body: "Start from source code or from an explicit PCD or policy sketch.", state: "active" },
        { label: "02", title: "Check boundaries", body: "Run domain checks and closure analysis before the result is trusted.", state: "warning" },
        { label: "03", title: "Emit evidence", body: "Surface diagnostics, certification state, and a reusable artifact.", state: "success" },
        { label: "04", title: "Reuse the result", body: "Feed the bounded result back into the platform, registry, or delivery flow.", state: "idle" },
      ],
      footer:
        "The site should keep the workflow legible without pretending every downstream organizational control is solved inside the page.",
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
      eyebrow: "Applied Thesis Surface",
      title: "These pages should argue from constraints, not from spectacle.",
      description:
        "They remain persuasive, but the grammar must still be evidence-first and bounded.",
    },
    evidence: {
      eyebrow: "Applied Evidence",
      title: "The main object is the formal claim boundary",
      description:
        "The page should show what kind of system boundary BRIK-64 can make visible in this domain and what remains outside the page's truth set.",
      metrics: config.heroMetrics,
      tracks: config.evidenceTracks,
    },
    constraint: {
      eyebrow: "Constraint Map",
      title: "One inspectable proof object anchors the thesis",
      description:
        "The point is not to prove the entire field. The point is to show how bounded software behavior becomes legible.",
      constraints: config.constraints,
      codeTitle: config.codeTitle,
      code: config.code,
      footer:
        "Applied thesis pages should keep the line between domain aspiration and code-level evidence visible at all times.",
    },
    scenario: {
      eyebrow: "Operator Loop",
      title: "How the thesis becomes an engineering loop",
      description:
        "The applied pages should connect the abstract story back to a concrete path through the product.",
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

export const industryPages = {
  finance: industry({
    title: "Finance needs bounded software, not retrospective",
    highlight: "incident analysis.",
    description:
      "Use this page to talk about transaction constraints, risk calculations, and audit evidence without implying blanket regulatory certification.",
    heroMetrics: [
      { label: "Domain posture", value: "High-risk transactions", detail: "Errors here create material operational and regulatory exposure." },
      { label: "Constraint type", value: "Amounts + approvals", detail: "The page focuses on bounded calculations and explicit decision gates." },
      { label: "Evidence style", value: "Audit trail", detail: "The output should be legible to engineers and compliance teams." },
    ],
    evidenceTracks: [
      { label: "Trading and payments", title: "Bound the paths that actually move money", body: "Pre-trade checks, transaction validation, and refund logic are all examples of bounded decision paths rather than open-ended scripts.", emphasis: "risk" },
      { label: "Risk calculations", title: "Make model inputs and ranges explicit", body: "The page should talk about bounded volatility, exposure, or threshold calculations rather than generic claims about 'AI for finance'.", emphasis: "proof" },
      { label: "Audit review", title: "Keep the evidence trail inspectable", body: "Certification state, traceability, and change-sensitive outputs matter more than decorative compliance badges." },
    ],
    constraints: [
      { title: "Amount and balance bounds", body: "Input domains should encode positive amount ranges, bounded fee logic, and sufficient-balance checks before any execution path is accepted.", outcome: "transaction scope" },
      { title: "Escalation thresholds", body: "Higher-risk transfers should move through explicit approval or KYC gates instead of relying on hidden business logic.", outcome: "review path" },
      { title: "Audit visibility", body: "Outputs should carry enough metadata for a reviewer to trace what was checked and why a transaction was accepted or rejected.", outcome: "evidence" },
    ],
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
    scenarioSteps: [
      { label: "01", title: "Encode the transaction boundary", body: "Capture amount, fee, and balance rules inside a bounded circuit.", state: "active" },
      { label: "02", title: "Run checks before execution", body: "Closure and domain checks happen before the transaction path is trusted.", state: "warning" },
      { label: "03", title: "Emit reviewable evidence", body: "The result carries explicit decision state and traceable reasoning.", state: "success" },
      { label: "04", title: "Publish to the wider workflow", body: "Move the bounded logic into platform, registry, or enterprise review flows.", state: "idle" },
    ],
    ctaTitle: "Use the finance page to show bounded transaction logic, not generic fintech optimism.",
    ctaDescription:
      "The value of the page is the explicit safety case around software behavior and reviewability.",
  }),
  ai: industry({
    title: "AI systems need external constraints, not",
    highlight: "hope-based guardrails.",
    description:
      "The AI industry page should emphasize policy circuits, verification outside the model, and bounded execution paths without claiming a solved general AI safety stack.",
    heroMetrics: [
      { label: "Primary risk", value: "Unbounded outputs", detail: "The issue is not only model quality but the absence of enforceable external constraints." },
      { label: "Control object", value: "Policy circuits", detail: "Guardrails remain outside the model and readable to operators." },
      { label: "Evidence style", value: "Pre-execution checks", detail: "The page should privilege verification before action." },
    ],
    evidenceTracks: [
      { label: "Policy boundary", title: "Keep the guardrail outside the model", body: "This page should frame BRIK-64 as an external verification layer instead of a replacement for all alignment work.", emphasis: "proof" },
      { label: "Generated code", title: "Bound the code that reaches production", body: "AI-written code becomes safer only when it passes through explicit circuit or policy checks.", emphasis: "risk" },
      { label: "Operational fit", title: "Connect the page back to MCP and platform flows", body: "The AI story should end in real operator steps, not abstract promises." },
    ],
    constraints: [
      { title: "Action risk threshold", body: "High-risk actions should require stronger confidence or explicit approval circuits before they pass.", outcome: "policy gate" },
      { title: "Token and scope bounds", body: "Large or unconstrained outputs should be rejected or routed to narrower execution surfaces.", outcome: "bounded output" },
      { title: "Operator review", body: "A page about AI still needs to show how a human or platform lead inspects the evidence trail.", outcome: "traceability" },
    ],
    codeTitle: "ai_agent_policy.pcd",
    code: `PC ai_agent_policy {
  input confidence : Float64[0.0 .. 1.0]
  input actionRisk : Int[0 .. 10]

  assert actionRisk <= 7 || confidence >= 0.90
    | reject("high-risk action requires stronger confidence")

  output allowed : Bool = true
}`,
    scenarioSteps: [
      { label: "01", title: "Define policy", body: "Encode bounded action rules as circuits or policy sketches.", state: "active" },
      { label: "02", title: "Check before execution", body: "Run policy checks against the generated action or code path.", state: "warning" },
      { label: "03", title: "Return explicit diagnostics", body: "Rejected outputs feed back into the agent loop with structured reasons.", state: "success" },
      { label: "04", title: "Publish the approved path", body: "Approved artifacts move into platform or registry workflows.", state: "idle" },
    ],
    ctaTitle: "Keep the AI page anchored to bounded execution, not to model hype.",
    ctaDescription:
      "What matters here is the explicit guardrail map and how it ties back to the product surfaces.",
  }),
  aerospace: industry({
    title: "Aerospace software needs a readable",
    highlight: "safety case.",
    description:
      "This page should focus on envelope constraints, bounded control logic, and reviewable evidence rather than broad aviation-compliance claims.",
    heroMetrics: [
      { label: "Primary risk", value: "Envelope violation", detail: "The key issue is preventing software paths that escape known operational bounds." },
      { label: "Constraint object", value: "Flight envelope", detail: "Inputs, modes, and fallback logic should be made explicit." },
      { label: "Evidence style", value: "Safety case", detail: "The page should behave like a bounded engineering dossier." },
    ],
    evidenceTracks: [
      { label: "Flight controls", title: "Make mode and range transitions explicit", body: "The page should emphasize bounded calculations and explicit fallback logic instead of broad autonomy promises.", emphasis: "risk" },
      { label: "Review posture", title: "Keep the artifact inspectable", body: "The safety case becomes stronger when the reader can see the constraint envelope and the resulting evidence.", emphasis: "proof" },
      { label: "Integration path", title: "Connect to the platform workflow", body: "The page should still terminate in traceability, publication, and review surfaces." },
    ],
    constraints: [
      { title: "Envelope limits", body: "Speed, altitude, and other operating ranges should be encoded as explicit domains before the control path runs.", outcome: "bounded flight" },
      { title: "Fallback behavior", body: "Out-of-range states should route into predictable fallback or rejection behavior rather than undefined transitions.", outcome: "safe degrade" },
      { title: "Review output", body: "The artifact should make it easy for an engineer to audit what was checked and what state was emitted.", outcome: "reviewable evidence" },
    ],
    codeTitle: "flight_envelope_guard.pcd",
    code: `PC flight_envelope_guard {
  input speed    : Float64[0.0 .. 340.0]
  input altitude : Float64[0.0 .. 51000.0]

  assert speed <= 340.0
  assert altitude <= 51000.0

  output envelope_ok : Bool = true
}`,
    scenarioSteps: [
      { label: "01", title: "Capture the envelope", body: "Turn key flight constraints into explicit domains.", state: "active" },
      { label: "02", title: "Check mode transitions", body: "Reject or reroute paths that escape approved operating ranges.", state: "warning" },
      { label: "03", title: "Emit evidence", body: "Produce a readable result the review process can inspect.", state: "success" },
      { label: "04", title: "Reuse the bounded artifact", body: "Move the artifact into broader platform and certification flows.", state: "idle" },
    ],
    ctaTitle: "Use the aerospace page to show the software safety case, not to overclaim certification.",
    ctaDescription:
      "The page earns trust by keeping scope explicit and reviewable.",
  }),
  automotive: industry({
    title: "Automotive control software needs bounded braking, fallback, and",
    highlight: "review state.",
    description:
      "This page should talk about constrained decision paths and operator evidence rather than broad autonomy claims.",
    heroMetrics: [
      { label: "Primary risk", value: "Unsafe control path", detail: "The relevant risk is an action path that exceeds known vehicle constraints." },
      { label: "Constraint object", value: "Control thresholds", detail: "Speed, distance, and trigger conditions should be visible." },
      { label: "Evidence style", value: "Safety review", detail: "Outputs must remain readable to technical reviewers." },
    ],
    evidenceTracks: [
      { label: "Decision path", title: "Constrain the moment of actuation", body: "The page should focus on explicit trigger logic and fallback behavior.", emphasis: "risk" },
      { label: "Proof object", title: "Show the bounded rule set", body: "The core value is a readable constraint object attached to the code path.", emphasis: "proof" },
      { label: "Operator handoff", title: "Connect the result to traceability surfaces", body: "Keep the evidence linked to the wider platform and review story." },
    ],
    constraints: [
      { title: "Speed and distance ranges", body: "Control logic should expose braking thresholds in explicit domains rather than hidden thresholds.", outcome: "actuation bound" },
      { title: "Fallback route", body: "When the system cannot certify a path, the output should move into a safe fallback rather than undefined action.", outcome: "safe fallback" },
      { title: "Review metadata", body: "A reviewer should be able to inspect the input state, decision path, and emitted result.", outcome: "traceability" },
    ],
    codeTitle: "emergency_brake_guard.pcd",
    code: `PC emergency_brake_guard {
  input speedKph     : Float64[0.0 .. 260.0]
  input distanceM    : Float64[0.0 .. 300.0]

  assert distanceM > 0.0
  assert speedKph <= 260.0

  output brake_allowed : Bool = distanceM < 40.0
}`,
    scenarioSteps: [
      { label: "01", title: "Define threshold domains", body: "Encode speed and distance limits as explicit ranges.", state: "active" },
      { label: "02", title: "Check actuation gates", body: "Reject or reroute control paths that violate the declared envelope.", state: "warning" },
      { label: "03", title: "Emit review state", body: "Return a result that captures both the action and the evidence posture.", state: "success" },
      { label: "04", title: "Publish for reuse", body: "Move the bounded control object into the broader product workflow.", state: "idle" },
    ],
    ctaTitle: "Keep the automotive page focused on bounded control logic and reviewability.",
    ctaDescription:
      "The page should help an engineer understand the safety case faster, not add a new layer of marketing abstraction.",
  }),
  engineering: industry({
    title: "Engineering software needs explicit material and range",
    highlight: "boundaries.",
    description:
      "Use this page to talk about bounded calculations and reviewable engineering flows without implying that BRIK-64 alone solves domain certification.",
    heroMetrics: [
      { label: "Primary risk", value: "Range misuse", detail: "The main problem is a calculation that silently escapes the intended material or geometry range." },
      { label: "Constraint object", value: "Material envelope", detail: "Inputs should encode assumptions that are often left implicit." },
      { label: "Evidence style", value: "Calculation dossier", detail: "Outputs should preserve the engineering assumptions they depend on." },
    ],
    evidenceTracks: [
      { label: "Calculation scope", title: "Make assumptions explicit", body: "Loads, material bounds, or geometry inputs should appear as declared domains instead of hidden code comments.", emphasis: "risk" },
      { label: "Proof posture", title: "Preserve the calculation trail", body: "The page should show how bounded logic keeps the resulting engineering object inspectable.", emphasis: "proof" },
      { label: "Workflow fit", title: "Route back to product surfaces", body: "Even an engineering page should connect back to the platform and registry story." },
    ],
    constraints: [
      { title: "Material domains", body: "The page should highlight explicit limits on material constants and input ranges before computation runs.", outcome: "assumption bound" },
      { title: "Geometry and load checks", body: "Inputs should be rejected when they exceed the declared design envelope instead of creating hidden undefined paths.", outcome: "bounded calculation" },
      { title: "Traceable output", body: "The output should remain readable enough for another engineer to verify what assumptions were in force.", outcome: "engineering review" },
    ],
    codeTitle: "stress_boundary.pcd",
    code: `PC stress_boundary {
  input loadN      : Float64[0.0 .. 5e7]
  input areaMm2    : Float64[1.0 .. 1e6]
  input yieldMpa   : Float64[1.0 .. 2000.0]

  let stress = loadN / areaMm2
  assert stress <= yieldMpa

  output stress_mpa : Float64 = stress
}`,
    scenarioSteps: [
      { label: "01", title: "Declare assumptions", body: "Capture the material and load envelope in explicit domains.", state: "active" },
      { label: "02", title: "Run bounded calculations", body: "Reject paths that violate the declared engineering envelope.", state: "warning" },
      { label: "03", title: "Emit a readable result", body: "Keep the result tied to the assumptions that produced it.", state: "success" },
      { label: "04", title: "Share the artifact", body: "Move the bounded calculation into platform or registry workflows.", state: "idle" },
    ],
    ctaTitle: "Use the engineering page to expose the calculation boundary clearly.",
    ctaDescription:
      "The value is the inspectable assumption set and the preserved calculation trail.",
  }),
  government: industry({
    title: "Government workflows need explicit decision paths and",
    highlight: "auditability.",
    description:
      "This page should focus on public-sector review, traceable logic, and bounded processing rather than abstract promises about trust.",
    heroMetrics: [
      { label: "Primary risk", value: "Opaque processing", detail: "The problem is a critical public decision path that cannot be inspected quickly." },
      { label: "Constraint object", value: "Deterministic rules", detail: "The page should emphasize readable logic rather than black-box scoring." },
      { label: "Evidence style", value: "Public review", detail: "Outputs need to support audit and explanation." },
    ],
    evidenceTracks: [
      { label: "Decision logic", title: "Make public-sector rules inspectable", body: "The page should show bounded decision paths and explicit policy conditions.", emphasis: "risk" },
      { label: "Traceability", title: "Keep the review record attached", body: "A result should remain legible to technical reviewers and oversight teams.", emphasis: "proof" },
      { label: "Operator path", title: "Connect rule logic to the platform", body: "The page should still terminate in a clear operator flow through the product." },
    ],
    constraints: [
      { title: "Explicit policy rules", body: "Important public-sector rules should be encoded as visible conditions rather than hidden branching logic.", outcome: "deterministic review" },
      { title: "Bounded inputs", body: "Declared domains help prevent accidental or undefined processing beyond the approved envelope.", outcome: "bounded processing" },
      { title: "Audit output", body: "The page should show how a result can remain tied to the rule set that produced it.", outcome: "public evidence" },
    ],
    codeTitle: "ballot_validation.pcd",
    code: `PC ballot_validation {
  input precinctId : Int[1 .. 50000]
  input ballotType : Enum["in-person", "mail", "provisional"]

  assert precinctId >= 1

  output accepted : Bool = true
}`,
    scenarioSteps: [
      { label: "01", title: "Encode the rule set", body: "Make the policy conditions explicit and inspectable.", state: "active" },
      { label: "02", title: "Check the input boundary", body: "Reject states outside the approved processing envelope.", state: "warning" },
      { label: "03", title: "Return a reviewable result", body: "Emit evidence that ties the outcome to the declared rule set.", state: "success" },
      { label: "04", title: "Publish or archive", body: "Move the result into wider review or documentation workflows.", state: "idle" },
    ],
    ctaTitle: "The government page should foreground deterministic logic and public review posture.",
    ctaDescription:
      "The strongest signal here is inspectability, not rhetorical certainty.",
  }),
  healthcare: industry({
    title: "Healthcare software needs dosage, workflow, and review",
    highlight: "boundaries.",
    description:
      "The healthcare page should emphasize bounded clinical logic and inspectable review surfaces, not sweeping safety claims.",
    heroMetrics: [
      { label: "Primary risk", value: "Unsafe recommendation", detail: "The risk is an action path that escapes known medical bounds." },
      { label: "Constraint object", value: "Clinical domain", detail: "Inputs should capture age, weight, or dosage bounds explicitly." },
      { label: "Evidence style", value: "Clinical review", detail: "Outputs must remain readable to the domain reviewer." },
    ],
    evidenceTracks: [
      { label: "Dose logic", title: "Make clinical assumptions explicit", body: "The page should highlight dosage ranges, escalation conditions, and bounded outputs.", emphasis: "risk" },
      { label: "Review trail", title: "Support clinical verification", body: "The public value comes from explicit evidence and traceability, not from unqualified medical claims.", emphasis: "proof" },
      { label: "Workflow handoff", title: "Connect to broader delivery paths", body: "The healthcare page still needs to terminate in product surfaces and operator actions." },
    ],
    constraints: [
      { title: "Dose and weight bounds", body: "Clinical logic should declare safe operating ranges before computing recommendations.", outcome: "clinical boundary" },
      { title: "Escalation paths", body: "High-risk or out-of-range inputs should trigger explicit escalation instead of silent fallback.", outcome: "review gate" },
      { title: "Readable output", body: "The result should preserve enough structure for a clinician or engineer to inspect the decision path.", outcome: "traceable recommendation" },
    ],
    codeTitle: "dose_guard.pcd",
    code: `PC dose_guard {
  input weightKg : Float64[1.0 .. 300.0]
  input doseMgKg : Float64[0.0 .. 50.0]

  let dose = weightKg * doseMgKg
  assert dose <= 2000.0

  output recommended_dose : Float64 = dose
}`,
    scenarioSteps: [
      { label: "01", title: "Declare the clinical boundary", body: "Make dosage assumptions explicit in the circuit.", state: "active" },
      { label: "02", title: "Check for out-of-range states", body: "Reject or escalate unsafe calculation paths before a recommendation is emitted.", state: "warning" },
      { label: "03", title: "Emit reviewable evidence", body: "Return an output that preserves the calculation path and its bounds.", state: "success" },
      { label: "04", title: "Route into review workflows", body: "The bounded artifact moves into the wider product and documentation surfaces.", state: "idle" },
    ],
    ctaTitle: "Use the healthcare page to show bounded clinical logic and review posture.",
    ctaDescription:
      "The page should remain explicit about what is evidenced and what still belongs to human and organizational controls.",
  }),
  science: industry({
    title: "Scientific software benefits from explicit assumptions and reproducible",
    highlight: "calculation paths.",
    description:
      "The science page should talk about bounded inputs, repeatable outputs, and traceable computation rather than broad claims about scientific truth.",
    heroMetrics: [
      { label: "Primary risk", value: "Hidden assumption drift", detail: "Scientific results become fragile when ranges and methods stay implicit." },
      { label: "Constraint object", value: "Reproducible domain", detail: "The page should foreground declared ranges and repeatable transformations." },
      { label: "Evidence style", value: "Calculation trace", detail: "Results should preserve how they were obtained." },
    ],
    evidenceTracks: [
      { label: "Experimental bounds", title: "Make the computational envelope visible", body: "The page should emphasize explicit input and transform assumptions.", emphasis: "risk" },
      { label: "Repeatability", title: "Keep results tied to declared logic", body: "A bounded circuit makes the calculation path easier to inspect and repeat.", emphasis: "proof" },
      { label: "Workflow fit", title: "Route the result into reusable surfaces", body: "Scientific examples should still connect back to platform and registry narratives." },
    ],
    constraints: [
      { title: "Input ranges", body: "Measurements, tolerances, and calibration factors should appear as explicit domains.", outcome: "assumption envelope" },
      { title: "Repeatable transform", body: "The page should show that the same bounded input path produces the same bounded output path.", outcome: "repeatability" },
      { title: "Traceable result", body: "The artifact should make it possible to inspect the calculation chain that produced a published value.", outcome: "reproducibility" },
    ],
    codeTitle: "spectroscopy_analysis.pcd",
    code: `PC spectroscopy_analysis {
  input absorbance : Float64[0.0 .. 4.0]
  input pathCm     : Float64[0.1 .. 10.0]
  input epsilon    : Float64[0.1 .. 1e7]

  let concentration = absorbance / (pathCm * epsilon)
  output concentration_mol_l : Float64 = concentration
}`,
    scenarioSteps: [
      { label: "01", title: "Declare assumptions", body: "Capture measurement bounds and calibration factors explicitly.", state: "active" },
      { label: "02", title: "Run reproducible transforms", body: "Execute only the bounded calculation path described by the artifact.", state: "warning" },
      { label: "03", title: "Emit an inspectable result", body: "Return a result that preserves how the value was obtained.", state: "success" },
      { label: "04", title: "Publish the artifact", body: "Move the result into wider review or registry surfaces.", state: "idle" },
    ],
    ctaTitle: "Use the science page to show repeatable bounded computation.",
    ctaDescription:
      "The page is strongest when it makes assumptions and calculation flow legible to another technical reader.",
  }),
} as const;

export const useCasePages = {
  aiSafety: buildUseCase({
    title: "AI safety needs policy circuits and",
    highlight: "pre-execution checks.",
    description:
      "This page should talk about external verification, bounded action rules, and traceable agent workflows rather than sweeping claims about solved alignment.",
    heroMetrics: [
      { label: "Primary object", value: "Policy circuit", detail: "The key surface is the explicit rule set that sits outside the model." },
      { label: "Verification point", value: "Before execution", detail: "The workflow checks the action before it reaches production." },
      { label: "Proof style", value: "Structured diagnostics", detail: "Rejected outputs should produce a readable reason, not just a failure." },
    ],
    evidenceTracks: [
      { label: "Guardrail boundary", title: "Keep the policy external to the model", body: "The page should show how explicit policy circuits bound action space without pretending to replace all AI safety work.", emphasis: "proof" },
      { label: "Generated output", title: "Verify before the agent acts", body: "AI-generated code or actions become safer when a bounded review step sits in front of execution.", emphasis: "risk" },
      { label: "Workflow fit", title: "Tie the story back to product surfaces", body: "The use case should still resolve into CLI, PCD, platform, and registry flows." },
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
    ctaTitle: "Turn the AI safety page into a bounded workflow surface.",
    ctaDescription:
      "The strongest public message here is explicit pre-execution verification, not model mystique.",
  }),
  ciCdIntegration: buildUseCase({
    title: "CI/CD integration needs a proof step, not just another",
    highlight: "pipeline badge.",
    description:
      "The CI/CD page should show how bounded verification enters a delivery pipeline without pretending it replaces the rest of release engineering.",
    heroMetrics: [
      { label: "Primary object", value: "Pipeline gate", detail: "The critical surface is the bounded check inserted before release." },
      { label: "Verification point", value: "Build stage", detail: "The result is a gate and an evidence artifact." },
      { label: "Proof style", value: "Change-sensitive", detail: "The pipeline output changes when the code path changes." },
    ],
    evidenceTracks: [
      { label: "Pipeline role", title: "Insert one explicit verification step", body: "The page should show the proof gate as a real operator step, not a vague CI benefit statement.", emphasis: "proof" },
      { label: "Artifact sensitivity", title: "Keep the output tied to the build input", body: "The useful part of the use case is that changed code produces changed evidence.", emphasis: "risk" },
      { label: "Workflow handoff", title: "Connect the check to the registry or review flow", body: "The page should make it clear what happens after the gate passes." },
    ],
    constraints: [
      { title: "Build-time verification", body: "The page should show a check that runs before merge or deploy, not only after release.", outcome: "release gate" },
      { title: "Evidence emission", body: "A successful run should produce a traceable result that can flow into docs, badges, or registry surfaces.", outcome: "artifact trail" },
      { title: "Scoped promise", body: "The use case should not imply that one check replaces all testing, security, or operations work.", outcome: "bounded claim" },
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
    ctaTitle: "Use the CI/CD page to make the proof gate explicit.",
    ctaDescription:
      "The site should show where the verification step sits in the delivery flow and what evidence it emits.",
  }),
  cobolMigration: buildUseCase({
    title: "COBOL migration needs a bounded bridge, not a blind",
    highlight: "rewrite.",
    description:
      "This page should focus on lifting legacy logic into explicit PCD or constrained artifacts before transpilation or modernization.",
    heroMetrics: [
      { label: "Primary object", value: "Lifted blueprint", detail: "The key step is making legacy logic inspectable before replacing it." },
      { label: "Verification point", value: "Post-lift", detail: "The useful check happens on the extracted circuit boundary." },
      { label: "Proof style", value: "Migration dossier", detail: "The result should preserve enough structure for engineers to inspect the transformation." },
    ],
    evidenceTracks: [
      { label: "Legacy extraction", title: "Lift the existing logic first", body: "The page should present PCD as a bridge that exposes what the legacy code actually computes.", emphasis: "proof" },
      { label: "Migration risk", title: "Reduce translation ambiguity", body: "The value comes from bounding the logic before it is moved, not from a generic modernization promise.", emphasis: "risk" },
      { label: "Reuse path", title: "Connect the lifted result to the wider product", body: "The page should end in certification, review, and reuse rather than a one-off rewrite narrative." },
    ],
    constraints: [
      { title: "Liftable domain", body: "The page should show how legacy arithmetic or decision logic is extracted into explicit bounded objects.", outcome: "lift boundary" },
      { title: "Migration review", body: "Engineers should be able to compare source behavior and lifted behavior before any target code is emitted.", outcome: "side-by-side review" },
      { title: "Scoped claim", body: "The use case should not imply that every legacy system becomes instantly certified end to end.", outcome: "bounded modernization" },
    ],
    codeTitle: "payroll.pcd",
    code: `PC compute_net_pay {
  input gross : Float64[0.0 .. 1e7]
  input tax   : Float64[0.0 .. 1e7]

  assert gross >= tax
  output net : Float64 = gross - tax
}`,
    ctaTitle: "Use the COBOL page to show the bounded migration bridge.",
    ctaDescription:
      "The strongest signal is a lift-review-certify path that makes legacy logic inspectable before it is moved.",
  }),
  formalVerification: buildUseCase({
    title: "Formal verification becomes more usable when the proof path is",
    highlight: "operational.",
    description:
      "This page should connect theorem-backed thinking to a delivery path the reader can actually follow through the site.",
    heroMetrics: [
      { label: "Primary object", value: "Proof workflow", detail: "The focus is the bridge from formal reasoning to operator-readable surfaces." },
      { label: "Verification point", value: "Structure + closure", detail: "The page should stay grounded in bounded circuit checks and explicit proof posture." },
      { label: "Proof style", value: "Delivery-aware", detail: "The public story should connect theory to how software is actually moved." },
    ],
    evidenceTracks: [
      { label: "Formal bridge", title: "Make the proof path legible", body: "This page should show how formal reasoning maps to circuits, checks, and published evidence.", emphasis: "proof" },
      { label: "Operational fit", title: "Keep the workflow usable", body: "The value comes from a usable engineering loop, not from abstract theorem language alone.", emphasis: "risk" },
      { label: "Public product link", title: "Connect the proof path to CLI and platform", body: "The page should not become isolated from the rest of the product narrative." },
    ],
    constraints: [
      { title: "Explicit domain", body: "The page should show that verification begins with bounded domains and explicit composition rather than mystical black-box reasoning.", outcome: "formal boundary" },
      { title: "Readable evidence", body: "Results should remain visible and inspectable to an engineer who is not reading proof assistants directly.", outcome: "public evidence" },
      { title: "Scoped promise", body: "The site should not imply that every aspect of program correctness is formally settled by one public page.", outcome: "bounded claim" },
    ],
    codeTitle: "calculator.pcd",
    code: `PC calculator {
  input left  : Float64[-1e6 .. 1e6]
  input right : Float64[-1e6 .. 1e6]

  output sum : Float64 = left + right
}`,
    ctaTitle: "Keep the formal-verification page tied to an operator workflow.",
    ctaDescription:
      "The page should help a reader see how bounded formal structure enters a product path they can actually use.",
  }),
  universalTranspilation: buildUseCase({
    title: "Universal transpilation only matters when the intermediate form is",
    highlight: "bounded and inspectable.",
    description:
      "This page should frame transpilation as a lift-check-build workflow rather than a magic source-to-source promise.",
    heroMetrics: [
      { label: "Primary object", value: "Intermediate blueprint", detail: "The page should keep the PCD or circuit layer visible between source and target." },
      { label: "Verification point", value: "Between lift and emit", detail: "The useful check happens on the bounded representation, not only on the final target." },
      { label: "Proof style", value: "Translation dossier", detail: "The result should preserve a readable transformation trail." },
    ],
    evidenceTracks: [
      { label: "Translation chain", title: "Keep the intermediate layer visible", body: "This page should show that source and target are connected through an inspectable bounded form.", emphasis: "proof" },
      { label: "Migration risk", title: "Avoid opaque source-to-source stories", body: "The value is in the constrained transformation path, not in the word 'universal'.", emphasis: "risk" },
      { label: "Reuse path", title: "Connect the result to registry or platform surfaces", body: "The page should end in reuse and review, not just conversion." },
    ],
    constraints: [
      { title: "Source extraction", body: "The use case should show where the source behavior is lifted into a bounded intermediate representation.", outcome: "lift path" },
      { title: "Intermediate verification", body: "The page should make clear that the central check happens before target code is emitted.", outcome: "certification gate" },
      { title: "Target clarity", body: "The final emitted artifact should still point back to the bounded blueprint it came from.", outcome: "traceable output" },
    ],
    codeTitle: "normalize.pcd",
    code: `PC normalize {
  input value : Float64[0.0 .. 1000.0]
  input min   : Float64[0.0 .. 1000.0]
  input max   : Float64[0.0 .. 1000.0]

  assert max > min
  output normalized : Float64 = (value - min) / (max - min)
}`,
    ctaTitle: "Use the transpilation page to show the bounded intermediate form.",
    ctaDescription:
      "The page is strongest when the lift-check-emit chain stays explicit and inspectable.",
  }),
} as const;

export const thesisPages = {
  ai: thesis({
    title: "The AI thesis should be constrained by external proof, not by",
    highlight: "promissory copy.",
    description:
      "Use this page to frame how AI-generated software interacts with bounded verification surfaces without claiming that models become trustworthy by default.",
    heroMetrics: [
      { label: "Primary risk", value: "Unverified generation", detail: "The issue is generated output that lacks a bounded review surface." },
      { label: "Control point", value: "External verification", detail: "The useful public message is the boundary around the model, not the model itself." },
      { label: "Proof style", value: "Operator loop", detail: "The page should end in a repeatable engineering workflow." },
    ],
    evidenceTracks: [
      { label: "Model boundary", title: "Keep trust outside the weights", body: "The page should show that verification sits around the model instead of inside a probabilistic training story.", emphasis: "proof" },
      { label: "Generated code", title: "Bound what gets shipped", body: "The site should emphasize the path from generated code into explicit checks and readable diagnostics.", emphasis: "risk" },
      { label: "Product fit", title: "Connect AI messaging back to CLI, PCD, platform, and registry", body: "The applied AI thesis should still terminate in actual product surfaces." },
    ],
    constraints: [
      { title: "Externalized checks", body: "The page should show that the verification object exists outside the model and can be inspected independently.", outcome: "trust boundary" },
      { title: "Feedback loop", body: "Diagnostics should feed back into the generation loop as structured signals, not only as generic failure.", outcome: "repairable workflow" },
      { title: "Scoped promise", body: "Do not imply that the public site solves every AI safety problem. Keep the claim tied to bounded software verification.", outcome: "bounded claim" },
    ],
    codeTitle: "agent_review_loop.pcd",
    code: `PC agent_review_loop {
  input confidence : Float64[0.0 .. 1.0]
  assert confidence >= 0.80
  output approved : Bool = true
}`,
    ctaTitle: "Keep the AI thesis page tied to external verification and operator loops.",
    ctaDescription:
      "The page should persuade by making the boundary visible, not by making the promise larger.",
  }),
  blockchain: thesis({
    title: "Blockchain software still needs bounded logic and",
    highlight: "reviewable state.",
    description:
      "This page should talk about constrained contract logic, explicit transaction state, and inspectable rules rather than generic Web3 spectacle.",
    heroMetrics: [
      { label: "Primary risk", value: "Irreversible bad logic", detail: "The issue is a state transition that cannot be taken back once executed." },
      { label: "Control point", value: "Contract boundary", detail: "The useful public message is explicit, inspectable transaction logic." },
      { label: "Proof style", value: "State transition trail", detail: "The page should frame evidence around bounded transitions." },
    ],
    evidenceTracks: [
      { label: "State boundary", title: "Focus on irreversible transitions", body: "The page should frame BRIK-64 as a way to bound and inspect critical contract logic.", emphasis: "risk" },
      { label: "Review posture", title: "Keep transaction rules inspectable", body: "The strongest signal is a readable policy or circuit artifact, not chain theater.", emphasis: "proof" },
      { label: "Product fit", title: "Connect the page to the wider platform story", body: "Even this thesis page should route back to platform and registry surfaces." },
    ],
    constraints: [
      { title: "Explicit state transitions", body: "Make preconditions and postconditions visible before a transaction path is accepted.", outcome: "state gate" },
      { title: "Bounded value movement", body: "The page should show how transaction amounts and roles remain within declared domains.", outcome: "asset boundary" },
      { title: "Review output", body: "A reviewer should be able to inspect the rule set and emitted state without chain-specific theatrics.", outcome: "traceable contract" },
    ],
    codeTitle: "token_transfer_guard.pcd",
    code: `PC token_transfer_guard {
  input amount : Float64[0.0 .. 1e9]
  input supply : Float64[0.0 .. 1e12]

  assert amount <= supply
  output transfer_allowed : Bool = true
}`,
    ctaTitle: "Use the blockchain page to show bounded contract logic, not Web3 ornament.",
    ctaDescription:
      "The page should keep the argument focused on explicit state transitions and readable review paths.",
  }),
  safetyCritical: thesis({
    title: "Safety-critical software needs bounded computation and a readable",
    highlight: "assurance path.",
    description:
      "This page should foreground explicit boundaries, failure posture, and reviewable evidence without claiming complete domain certification.",
    heroMetrics: [
      { label: "Primary risk", value: "Unsafe path", detail: "The relevant problem is a software path that should never be reachable." },
      { label: "Control point", value: "Declared envelope", detail: "The page should focus on bounded inputs, outputs, and fallback behavior." },
      { label: "Proof style", value: "Assurance path", detail: "The useful public surface is a readable assurance object." },
    ],
    evidenceTracks: [
      { label: "Safety case", title: "Make the assurance path explicit", body: "The page should behave like a bounded argument for software behavior, not like a generic safety slogan.", emphasis: "proof" },
      { label: "Failure posture", title: "Show what happens when the boundary is violated", body: "A page about safety-critical systems should make safe fallback and rejection logic visible.", emphasis: "risk" },
      { label: "Product fit", title: "Keep the page tied to actual product surfaces", body: "The argument should resolve into CLI, PCD, platform, and enterprise review routes." },
    ],
    constraints: [
      { title: "Bounded operating envelope", body: "Important states should be represented as explicit domains and not as comments or hope.", outcome: "safety boundary" },
      { title: "Predictable fallback", body: "Out-of-bound states should be rejected or moved into a known safe path.", outcome: "safe failure" },
      { title: "Readable assurance", body: "The output should preserve enough structure for a reviewer to inspect what was checked.", outcome: "assurance trail" },
    ],
    codeTitle: "safety_guard.pcd",
    code: `PC safety_guard {
  input state : Int[0 .. 4]
  input load  : Float64[0.0 .. 100.0]

  assert load <= 100.0
  output safe_to_continue : Bool = state != 4
}`,
    ctaTitle: "Keep the safety-critical page anchored to a readable assurance path.",
    ctaDescription:
      "The page builds trust when it shows the boundary and the fallback posture clearly.",
  }),
} as const;
