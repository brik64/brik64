export type FeaturePageAction = {
  label: string;
  href: string;
  tone?: "primary" | "secondary" | "link";
  external?: boolean;
};

export type FeatureMetric = {
  label: string;
  value: string;
  detail: string;
};

export type FeatureClaimMatrix = {
  approvedClaims: Array<{
    id: string;
    wording: string;
    source: string;
    qualification?: string;
  }>;
  droppedClaims: Array<{
    id: string;
    reason: string;
  }>;
};

export type FeatureSectionId =
  | "compilation"
  | "verification"
  | "domain-constraints"
  | "lifting"
  | "transpilation"
  | "platform"
  | "ai-native"
  | "enterprise";

export type FeatureSurfaceKind =
  | "FeatureMatrixSurface"
  | "ComparisonSurface"
  | "ConstraintEnvelopeSurface"
  | "ScenarioFlowSurface"
  | "EvidenceSurface";

type ComparisonSurfaceSpec = {
  kind: "ComparisonSurface";
  eyebrow: string;
  title: string;
  description: string;
  statusLabel: string;
  statusTone?: "teal" | "success" | "warning" | "neutral";
  leftEyebrow?: string;
  leftTitle: string;
  leftBody: string;
  rightEyebrow?: string;
  rightTitle: string;
  rightBody: string;
};

type FeatureMatrixSurfaceSpec = {
  kind: "FeatureMatrixSurface";
  eyebrow: string;
  title: string;
  description: string;
  metrics: FeatureMetric[];
  rows: Array<{
    title: string;
    body: string;
    state?: "default" | "accent";
  }>;
};

type EvidenceSurfaceSpec = {
  kind: "EvidenceSurface";
  eyebrow: string;
  title: string;
  description: string;
  statusLabel: string;
  statusTone?: "teal" | "success" | "warning" | "neutral";
  itemStatusLabel?: string;
  items: Array<{
    label: string;
    body: string;
  }>;
  footer?: string;
};

type ConstraintEnvelopeSurfaceSpec = {
  kind: "ConstraintEnvelopeSurface";
  eyebrow: string;
  title: string;
  description: string;
  constraints: Array<{
    title: string;
    body: string;
    outcome: string;
  }>;
  codeEyebrow?: string;
  codeTitle?: string;
  code?: string;
  footer?: string;
};

type ScenarioFlowSurfaceSpec = {
  kind: "ScenarioFlowSurface";
  eyebrow: string;
  title: string;
  description: string;
  statusLabel: string;
  statusTone?: "teal" | "success" | "warning" | "neutral";
  steps: Array<{
    label: string;
    title: string;
    body: string;
    state?: "idle" | "active" | "warning" | "success";
  }>;
  footer?: string;
};

export type FeatureSurfaceSpec =
  | ComparisonSurfaceSpec
  | FeatureMatrixSurfaceSpec
  | EvidenceSurfaceSpec
  | ConstraintEnvelopeSurfaceSpec
  | ScenarioFlowSurfaceSpec;

export type FeatureSectionSpec = {
  id: FeatureSectionId;
  label: string;
  title: string;
  lead: string;
  workflowFocus: string;
  integrationPoint: string;
  evidenceOutputs: string[];
  claimBoundary: string;
  primarySurfaceKind: FeatureSurfaceKind;
  supportingSurfaceKind: FeatureSurfaceKind;
  primarySurface: FeatureSurfaceSpec;
  supportingSurface: FeatureSurfaceSpec;
  primaryCta?: FeaturePageAction;
  secondaryCta?: FeaturePageAction;
};

export type FeatureSectionBlueprint = {
  buyer: string;
  primaryProblem: string;
  integrationNarrative: string;
  artifactResult: string;
  claimBoundary: string;
  truthSource: string;
};

export const featureHero = {
  eyebrow: "Features",
  title: "Software que funciona como",
  highlight: "hardware.",
  description:
    "Software que funciona como hardware. Formalización del núcleo computacional mediante la transformación de lógica fuente en PCD revisable, cumplimiento de restricciones de dominio y emisión de objetivos certificados con una postura de prueba inmutable. BRIK-64 elimina la incertidumbre operativa estableciendo planos de control deterministas que garantizan la integridad sistémica desde la primera instrucción hasta la ejecución final.",
} as const;

export const featureOverview = {
  header: {
    eyebrow: "Modelo Operativo",
    title: "Del blueprint acotado al software certificado reutilizable",
    description:
      "BRIK-64 establece un ciclo de vida de software soberano: desde la autoría o extracción hacia PCD, hasta la verificación de límites, la emisión multiobjetivo y la distribución de objetos de revisión certificados. Nuestro modelo sustituye la confianza ciega por una cadena de evidencia técnica inmutable que garantiza la integridad operativa en sistemas críticos de escala global.",
  },
  comparison: {
    kind: "ComparisonSurface",
    eyebrow: "Workflow Readout",
    title: "Keep the engineering chain inspectable from the first blueprint to the final review step",
    description:
      "The product is one bounded operating chain, not unrelated features.",
    statusLabel: "Workflow comparison",
    leftEyebrow: "Typical workflow",
    leftTitle: "Fragmented software workflow",
    leftBody:
      "Code, tests, migration scripts, and audit artifacts often split across tools.",
    rightEyebrow: "BRIK-64 workflow",
    rightTitle: "Bounded blueprint and review chain",
    rightBody:
      "BRIK64 keeps blueprint, checks, emission, and evidence on one path.",
  } as const satisfies ComparisonSurfaceSpec,
  matrix: {
    kind: "FeatureMatrixSurface",
    eyebrow: "System Handles",
    title: "Three fixed handles explain the product without turning the page into a catalog",
    description:
      "Stable counts stay tied to the workflow that follows.",
    metrics: [
      {
        label: "Formal operations",
        value: "128",
        detail:
          "Public PCD story centers on 128 operations.",
      },
      {
        label: "Compilation targets",
        value: "10",
        detail:
          "One blueprint can emit across documented targets.",
      },
      {
        label: "Proof files",
        value: "207",
        detail:
          "Proof claims stay tied to documented evidence.",
      },
    ],
    rows: [
      {
        title: "Compiler chain",
        body:
          "CLI and PCD feed a bounded compiler pipeline.",
        state: "accent",
      },
      {
        title: "Migration workflow",
        body:
          "Lifting and transpilation share one review path.",
      },
      {
        title: "Registry and enterprise handoff",
        body:
          "Platform and registry consume review-ready outputs.",
      },
    ],
  } as const satisfies FeatureMatrixSurfaceSpec,
  evidence: {
    kind: "EvidenceSurface",
    eyebrow: "Coverage",
    title: "What the overview covers",
    description:
      "The overview covers compiler chain, migration path, and review posture.",
    statusLabel: "Scope readout",
    itemStatusLabel: "Coverage",
    items: [
      {
        label: "Compilation and closure",
        body:
          "Bounded blueprints move through normalization, checks, and emission.",
      },
      {
        label: "Migration and transpilation",
        body:
          "Existing logic is lifted, reviewed, and moved across targets.",
      },
      {
        label: "Platform and audit posture",
        body:
          "Review outputs feed platform and registry without blanket verification claims.",
      },
    ],
  } as const satisfies EvidenceSurfaceSpec,
} as const;

export const featureClaimMatrix: FeatureClaimMatrix = {
  approvedClaims: [
    {
      id: "operations-128",
      wording: "PCD is presented publicly as a 128-operation language.",
      source: "docs/research/brik64-content.md",
      qualification:
        "Use as a product handle, not as a standalone claim of complete software coverage.",
    },
    {
      id: "targets-10",
      wording: "The current product narrative may state 10 supported compilation targets.",
      source: "docs/perspectives/02-CTO.md",
    },
    {
      id: "source-languages-10",
      wording: "The lifting workflow may state 10 documented source languages.",
      source: "docs/perspectives/02-CTO.md",
      qualification:
        "Tie the claim to the lifting workflow and not to every possible source environment.",
    },
    {
      id: "proof-files-207",
      wording: "The public product story may reference 207 proof files.",
      source: "docs/perspectives/03-CMO.md",
    },
    {
      id: "fixpoint-consistency",
      wording: "The self-hosting fixpoint may be described as byte-identical generations with the same SHA-256 hash.",
      source: "docs/perspectives/02-CTO.md",
      qualification:
        "State it as consistency evidence for the documented compiler build chain, not as a blanket proof of all correctness.",
    },
    {
      id: "liftability-projects",
      wording: "Liftability can be described using the documented 211/211 file result on repo-backed projects.",
      source: "docs/perspectives/02-CTO.md",
      qualification:
        "Do not generalize the documented result into a universal guarantee for every codebase.",
    },
    {
      id: "audit-posture",
      wording: "Enterprise copy may describe audit and review workflows mapped to standards contexts.",
      source: "docs/content-marketing-scope.md",
      qualification:
        "The wording must stay in support-posture language and must not imply that BRIK-64 satisfies those programs by itself.",
    },
  ],
  droppedClaims: [
    {
      id: "market-uniqueness",
      reason:
        "Comparative claims such as 'No other compiler on earth' are blocked without market proof in the repo.",
    },
    {
      id: "total-correctness",
      reason:
        "Blanket wording such as 'proves correctness' scales beyond the bounded circuit model and the documented claim discipline.",
    },
    {
      id: "absolute-impossibility",
      reason:
        "Unqualified 'Impossible' claims overstate what the public site can support outside the declared model and domains.",
    },
    {
      id: "universal-liftability",
      reason:
        "The repo documents a benchmark result, not a guarantee for every file in every codebase.",
    },
    {
      id: "tests-count",
      reason:
        "The repo currently contains conflicting public counts for tests, so `/features` should omit test-count metrics in this iteration.",
    },
    {
      id: "ai-hype",
      reason:
        "Phrases about making every AI a verified engineer overstate the role of external verification and drift into unsupported hype.",
    },
    {
      id: "enterprise-certification",
      reason:
        "Enterprise copy must not imply that standards compliance is generated or satisfied automatically.",
    },
    {
      id: "speed-promise",
      reason:
        "Fast-start claims such as '30 seconds' are unnecessary here and are not the right public guarantee for a product overview.",
    },
  ],
};

export const featureSectionBlueprints: Record<FeatureSectionId, FeatureSectionBlueprint> = {
  compilation: {
    buyer: "Compiler engineer, platform lead, principal engineer",
    primaryProblem:
      "Teams need one bounded compiler chain that normalizes computation before emission rather than many disconnected backends with unclear review state.",
    integrationNarrative:
      "PCD enters the compiler chain, canonical normalization stabilizes the computation, and the resulting blueprint can be emitted across targets without inventing a separate story for each backend.",
    artifactResult:
      "A normalized blueprint plus a documented self-hosting consistency readout.",
    claimBoundary:
      "The fixpoint supports consistency of the documented compiler build chain. It does not prove every property of every surrounding toolchain or deployment environment.",
    truthSource: "docs/perspectives/02-CTO.md",
  },
  verification: {
    buyer: "Principal engineer, verification lead, safety-minded reviewer",
    primaryProblem:
      "Reviewers need to know what the circuit model closes over and where the guarantees stop.",
    integrationNarrative:
      "Closure and bounded domains are checked against the formal circuit representation before emission, and review metadata travels with the resulting blueprint.",
    artifactResult:
      "A closure state, domain review readout, and certification hash for the bounded circuit.",
    claimBoundary:
      "The guarantees apply to the formal circuit representation and its declared domains. They do not extend to every uncontrolled runtime or environment outside that model.",
    truthSource: "docs/content-marketing-scope.md",
  },
  "domain-constraints": {
    buyer: "Principal engineer, staff engineer, domain owner",
    primaryProblem:
      "Teams need numeric and semantic boundaries declared before runtime instead of relying on hidden assumptions and defensive patches.",
    integrationNarrative:
      "PCD lets teams encode allowed ranges in the blueprint so the compiler can propagate them through the circuit before any target code is emitted.",
    artifactResult:
      "A bounded-domain circuit with explicit rejected states and readable range consequences.",
    claimBoundary:
      "These guarantees exist when the circuit declares and preserves the relevant domains. They do not imply that unmanaged external code loses all numeric failure modes.",
    truthSource: "docs/research/brik64-content.md",
  },
  lifting: {
    buyer: "Migration lead, platform lead, principal engineer",
    primaryProblem:
      "Existing systems need reviewable extraction of computational logic before rewrite or modernization work hides the original behavior again.",
    integrationNarrative:
      "The Lifter isolates computational cores, marks contract edges explicitly, and emits a PCD blueprint that can be reviewed before downstream changes.",
    artifactResult:
      "A reviewable blueprint plus explicit contract annotations for behavior that remains outside full certification.",
    claimBoundary:
      "Documented projects have reached 211/211 file liftability in the repo evidence. The section does not generalize that result into a universal guarantee, and emitted blueprints stay explicitly contract-bounded when full certification is not possible.",
    truthSource: "docs/perspectives/02-CTO.md",
  },
  transpilation: {
    buyer: "Migration lead, architecture owner, platform lead",
    primaryProblem:
      "Target migration needs a stable normalized representation so teams can review preserved behavior before trusting emitted code.",
    integrationNarrative:
      "Source logic is lifted or authored into PCD, normalized once, and then emitted across supported targets with the blueprint remaining the review anchor.",
    artifactResult:
      "A normalized blueprint, a target-emission chain, and a review posture for preserved computation.",
    claimBoundary:
      "Equivalence language in this block stays tied to the extracted and normalized circuit. It does not extend to unmanaged I/O, host APIs, or external side effects.",
    truthSource: "docs/research/brik64-content.md",
  },
  platform: {
    buyer: "Platform lead, tooling owner, engineering manager",
    primaryProblem:
      "Reusable verified logic needs registry metadata, access surfaces, and review workflow instead of isolated compiler output.",
    integrationNarrative:
      "Platform and registry workflows publish, discover, and inspect blueprints with proof state carried through tooling rather than recreated in prose.",
    artifactResult:
      "A registry-backed circuit workflow with review state visible in tooling and programmatic access points.",
    claimBoundary:
      "This block describes workflow surfaces and integration points. It does not imply that every registry package is already public or that roadmap items are live unless separately verified.",
    truthSource: "docs/content-marketing-scope.md",
  },
  "ai-native": {
    buyer: "AI platform lead, principal engineer, agent workflow owner",
    primaryProblem:
      "AI-generated logic needs an external verification loop so teams can inspect candidate circuits before they trust or reuse them.",
    integrationNarrative:
      "Agents can generate candidate blueprints, policy circuits constrain actions, and compiler diagnostics feed the next repair loop before the result reaches platform workflows.",
    artifactResult:
      "A constrained candidate circuit plus diagnostics and policy readouts that stay outside the model itself.",
    claimBoundary:
      "BRIK-64 constrains and reviews agent-produced logic. It does not make the underlying model trustworthy by default.",
    truthSource: "docs/content-marketing-scope.md",
  },
  enterprise: {
    buyer: "Platform lead, compliance engineering, enterprise architect",
    primaryProblem:
      "Organizations need review and audit posture around emitted blueprints without collapsing that into unsupported certification claims.",
    integrationNarrative:
      "Identity, audit trails, CI gates, deployment boundaries, and support flows sit around the verified blueprint so teams can review what was checked and how it moved.",
    artifactResult:
      "An audit-ready review chain with identity integration, tamper-evident records, and explicit deployment posture.",
    claimBoundary:
      "BRIK-64 supports review and audit workflows. It does not by itself certify an organization against SOC2, PCI-DSS, HIPAA, ISO 27001, FDA 21 CFR Part 11, or NIST 800-53.",
    truthSource: "docs/content-marketing-scope.md",
  },
};

export const featureSections: FeatureSectionSpec[] = [
  {
    id: "compilation",
    label: "[01] COMPILACIÓN",
    title: "Emisión multiobjetivo desde un único blueprint acotado",
    lead:
      "BRIK-64 estandariza la emisión multiobjetivo mediante una representación intermedia canónica que garantiza el determinismo absoluto del software. Nuestra cadena de compilación normaliza la lógica computacional en planos de control verificables, eliminando las discrepancias entre diferentes backends de ejecución. Esto permite desplegar un único blueprint validado en entornos heterogéneos, asegurando que el comportamiento binario sea consistente y matemáticamente reproducible en cada plataforma destino.",
    workflowFocus:
      "Normalize a bounded PCD blueprint once, then emit it across supported targets through a single-pass compiler chain.",
    integrationPoint:
      "PCD source or lifted logic enters here; the platform consumes emitted targets with attached verification hashes.",
    evidenceOutputs: [
      "Canonical normalization",
      "By-design determinism",
      "SHA-256 fixpoint consistency",
      "Multi-target parity",
    ],
    claimBoundary:
      featureSectionBlueprints.compilation.claimBoundary,
    primarySurfaceKind: "FeatureMatrixSurface",
    supportingSurfaceKind: "EvidenceSurface",
    primarySurface: {
      kind: "FeatureMatrixSurface",
      eyebrow: "Compiler Chain",
      title: "Normalize once, emit many times",
      description:
        "The Brik64 compiler chain replaces fragmented backend transformations with a single, inspectable normalization pipeline.",
      metrics: [
        {
          label: "Core model",
          value: "PCD",
          detail:
            "The Printed Circuit Description is the only entry point into the verified chain.",
        },
        {
          label: "Normalization",
          value: "Φ-form",
          detail:
            "Computation is stabilized into a canonical intermediate representation before emission.",
        },
        {
          label: "Emission",
          value: "10 targets",
          detail:
            "The same validated blueprint can be emitted to high-level and legacy target sets.",
        },
      ],
      rows: [
        {
          title: "Parser independence",
          body:
            "A hand-built, dependency-light parser ensures the initial lift into PCD remains fully inspectable and deterministic.",
        },
        {
          title: "Canonical normalization",
          body:
            "Moving computation into a single stable representation ensures that emitted targets are downstream of a verified model.",
          state: "accent",
        },
        {
          title: "Build-chain fixpoint",
          body:
            "Self-hosting consistency is used as evidence that the compiler generates byte-identical outputs across documented iterations.",
        },
      ],
    },
    supportingSurface: {
      kind: "EvidenceSurface",
      eyebrow: "Compilation Readout",
      title: "What the compiler chain exposes for review",
      description:
        "The useful public story is the reviewable chain around the blueprint, not a contest of extreme wording.",
      statusLabel: "Compiler scope",
      itemStatusLabel: "Readout",
      items: [
        {
          label: "Parser and normalization",
          body:
            "The overview can state that PCD enters a bounded parser and canonical pipeline without implying that every surrounding tool becomes formally proven.",
        },
        {
          label: "Fixpoint evidence",
          body:
            "The repo-backed fixpoint supports consistency of the documented build chain through byte-identical generations and a stable hash.",
        },
        {
          label: "Target emission",
          body:
            "The same normalized computation is the source of the emitted outputs, which keeps the target story anchored to one blueprint.",
        },
      ],
    },
  },
  {
    id: "verification",
    label: "[02] VERIFICACIÓN",
    title: "Clausura y límites de verificación",
    lead:
      "Implementamos un modelo de clausura formal que define con precisión los límites de seguridad y las fronteras de ejecución de cada componente. A través de hashes criptográficos y certificados de prueba inmutables, BRIK-64 valida las rutas de control antes de que el código llegue a producción. Este enfoque desplaza la detección de vulnerabilidades al tiempo de diseño, proporcionando una base de confianza determinista que sustituye la incertidumbre del muestreo estadístico tradicional.",
    workflowFocus:
      "Check bounded inputs, closed paths, and review metadata before the blueprint is emitted or trusted downstream.",
    integrationPoint:
      "Compilation emits the readout, badges and hashes carry it forward, and enterprise review consumes it later in the chain.",
    evidenceOutputs: [
      "closure state",
      "domain completeness review",
      "certification hash",
      "review badge posture",
    ],
    claimBoundary:
      featureSectionBlueprints.verification.claimBoundary,
    primarySurfaceKind: "ComparisonSurface",
    supportingSurfaceKind: "EvidenceSurface",
    primarySurface: {
      kind: "ComparisonSurface",
      eyebrow: "Verification Boundary",
      title: "Keep sampled testing and bounded verification in their proper lanes",
      description:
        "Compare review models directly and make the public claim boundary legible in the same block.",
      statusLabel: "Verification comparison",
      leftEyebrow: "Sampled review",
      leftTitle: "Tests explore cases after code exists",
      leftBody:
        "Conventional testing lowers uncertainty for the cases exercised, but it does not by itself make the modeled boundary explicit or complete.",
      rightEyebrow: "Bounded review",
      rightTitle: "Closure is checked against the declared circuit",
      rightBody:
        "BRIK-64 makes the declared circuit, its bounded domains, and its review consequences visible before emitted code is carried into later workflows.",
    },
    supportingSurface: {
      kind: "EvidenceSurface",
      eyebrow: "Verification Outputs",
      title: "The review output should stay concrete",
      description:
        "Verification is useful here when the reader can see what is checked, what metadata remains, and where the guarantee stops.",
      statusLabel: "Review scope",
      itemStatusLabel: "Output",
      items: [
        {
          label: "Closure state",
          body:
            "The circuit model is checked for complete paths and bounded behavior before emission, and that state becomes part of the readout.",
        },
        {
          label: "Domain review",
          body:
            "Declared ranges and conditions are part of the public story because they define what the circuit is actually allowed to do.",
        },
        {
          label: "Certification hash",
          body:
            "Hashes and badges are useful here as review metadata carried with the blueprint, not as a replacement for the claim boundary itself.",
        },
      ],
    },
  },
  {
    id: "domain-constraints",
    label: "[03] RESTRICCIONES DE DOMINIO",
    title: "Dominios acotados antes del runtime",
    lead:
      "Establecemos límites numéricos y semánticos inmutables mediante la declaración explícita de dominios en el blueprint, blindando el núcleo lógico contra estados inválidos antes del runtime. El compilador de BRIK-64 propaga estas restricciones por todo el circuito computacional, rechazando cualquier instrucción que viole los parámetros físicos o de negocio predefinidos. Esta arquitectura de seguridad por diseño elimina las comprobaciones defensivas fragmentadas y garantiza la integridad sistémica de los datos directamente en el plano de control.",
    workflowFocus:
      "Declare numeric and semantic ranges in the blueprint, propagate them through the circuit, and reject invalid states before emission.",
    integrationPoint:
      "PCD carries the declared ranges, the compiler propagates them, and emitted targets inherit the same bounded model.",
    evidenceOutputs: [
      "bounded division",
      "bounded arithmetic",
      "bounded floating behavior",
      "domain-encoded business or physical rules",
    ],
    claimBoundary:
      featureSectionBlueprints["domain-constraints"].claimBoundary,
    primarySurfaceKind: "ConstraintEnvelopeSurface",
    supportingSurfaceKind: "EvidenceSurface",
    primarySurface: {
      kind: "ConstraintEnvelopeSurface",
      eyebrow: "Declared Domains",
      title: "Move critical ranges into the blueprint before code is emitted",
      description:
        "The useful story is not that every failure vanishes everywhere; it is that declared domains become part of the compile-time model.",
      constraints: [
        {
          title: "Divisor range",
          body:
            "A divisor domain can exclude zero structurally so the blueprint states what inputs are valid before emission.",
          outcome: "division boundary",
        },
        {
          title: "Amounts and probabilities",
          body:
            "Amount, rate, and probability ranges stay readable in the blueprint instead of hiding in defensive runtime checks.",
          outcome: "business rule",
        },
        {
          title: "Physical or engineering ranges",
          body:
            "Temperature, speed, and other domain values can be encoded directly in the model so violations fail before deployment.",
          outcome: "declared model",
        },
      ],
      codeEyebrow: "Bounded domain example",
      codeTitle: "PCD range declaration",
      code: `domain divisor : Range[1, 100]
domain amount  : Range[0.01, 1000000.0]
domain ratio   : Range[0.0, 1.0]

input total : Float64[0.01 .. 1000000.0]
input fee   : Float64[0.0 .. 100000.0]
input parts : Int32[1 .. 100]

output net_per_part : Float64 =
  (total - fee) / parts`,
      footer:
        "The important product claim is that the allowed domain is visible in the blueprint before target code exists.",
    },
    supportingSurface: {
      kind: "EvidenceSurface",
      eyebrow: "Declared Outcomes",
      title: "What declared domains make easier to inspect",
      description:
        "The surrounding evidence should talk about bounded computation, not about total elimination of every failure mode everywhere.",
      statusLabel: "Domain readout",
      itemStatusLabel: "Effect",
      items: [
        {
          label: "Bounded division",
          body:
            "The reader should understand why division depends on declared non-zero inputs rather than on hidden runtime hope.",
        },
        {
          label: "Bounded arithmetic",
          body:
            "Range propagation keeps arithmetic consequences reviewable at the blueprint level before the target language syntax appears.",
        },
        {
          label: "Domain-encoded rules",
          body:
            "Business, financial, scientific, or physical limits can live inside the model so violations become compile-time failures when the circuit is declared correctly.",
        },
      ],
    },
  },
  {
    id: "lifting",
    label: "[04] LIFTING",
    title: "Extracción de lógica hacia blueprints revisables",
    lead:
      "El proceso de lifting extrae la lógica computacional de sistemas legados, transformándola en planos de control verificables sin alterar el comportamiento operativo original del sistema. Identificamos y aislamos los núcleos críticos de ejecución, marcando las dependencias externas para generar un blueprint de PCD que garantiza una transparencia total en la auditoría. Esta metodología facilita la modernización de infraestructuras complejas, proporcionando una base de evidencia técnica exacta y un camino seguro para la evolución del software soberano.",
    workflowFocus:
      "Inspect source logic, isolate the computational core, emit a blueprint with contract annotations, and review what was preserved before modernization.",
    integrationPoint:
      "The Lifter feeds PCD and the compiler chain, then platform and enterprise workflows consume the resulting review object.",
    evidenceOutputs: [
      "source language coverage",
      "purity split",
      "bundle decompilation support",
      "incremental lifting",
    ],
    claimBoundary:
      featureSectionBlueprints.lifting.claimBoundary,
    primarySurfaceKind: "ScenarioFlowSurface",
    supportingSurfaceKind: "EvidenceSurface",
    primarySurface: {
      kind: "ScenarioFlowSurface",
      eyebrow: "Lifting Workflow",
      title: "Review the existing logic before modernization changes it",
      description:
        "The lifting story is strongest when it behaves like a four-step review flow instead of a general promise about every file ever written.",
      statusLabel: "Migration loop",
      steps: [
        {
          label: "01",
          title: "Inspect the source",
          body:
            "Point the Lifter at a source function or bundle and start from the logic that actually needs review.",
          state: "active",
        },
        {
          label: "02",
          title: "Isolate the computational core",
          body:
            "Separate bounded computation from database, network, filesystem, and other contract edges.",
          state: "warning",
        },
        {
          label: "03",
          title: "Emit blueprint and annotations",
          body:
            "Generate PCD for the preserved computation and keep contract annotations visible for what remains outside full certification.",
          state: "success",
        },
        {
          label: "04",
          title: "Review before modernization",
          body:
            "Use the emitted blueprint as the reference object before transpilation, refactoring, or platform changes.",
        },
      ],
      footer:
        "Lifting is valuable here because it produces a review object before later migration work obscures the original behavior.",
    },
    supportingSurface: {
      kind: "EvidenceSurface",
      eyebrow: "Lifting Readout",
      title: "What the repo-backed lifting story can support",
      description:
        "This block should stay tied to documented coverage, explicit contract boundaries, and concrete migration steps.",
      statusLabel: "Coverage scope",
      itemStatusLabel: "Evidence",
      items: [
        {
          label: "Source coverage",
          body:
            "The public story can state 10 documented source languages because the repo uses that number consistently in the lifting narrative.",
        },
        {
          label: "Project-backed liftability",
          body:
            "The documented 211/211 result belongs here as evidence from repo-backed projects, not as a universal guarantee for all codebases.",
        },
        {
          label: "Contract visibility",
          body:
            "When full certification is not possible, the useful public promise is explicit contract-bounded output rather than hidden loss of context.",
        },
      ],
    },
  },
  {
    id: "transpilation",
    label: "[05] TRANSPILACIÓN",
    title: "Migración de blueprints entre objetivos",
    lead:
      "Facilitamos la migración de sistemas críticos mediante una normalización que preserva la semántica operativa a través de múltiples lenguajes de programación. Al utilizar el blueprint como ancla de verdad, BRIK-64 asegura que la lógica de negocio se mantenga equivalente sin importar si el objetivo final es Rust, TypeScript o COBOL. Este flujo de trabajo minimiza el riesgo de regresión y permite a los equipos de ingeniería validar la integridad funcional en una única superficie de revisión unificada.",
    workflowFocus:
      "Lift or author the logic, normalize it once in PCD, emit target-specific code, and review preserved computation at the blueprint level.",
    integrationPoint:
      "Lifting or direct PCD authoring feeds this stage; emitted targets and preserved review context then move into platform or enterprise workflows.",
    evidenceOutputs: [
      "source/target separation",
      "PCD hub role",
      "equivalence review posture",
      "legacy modernization path",
    ],
    claimBoundary:
      featureSectionBlueprints.transpilation.claimBoundary,
    primarySurfaceKind: "ComparisonSurface",
    supportingSurfaceKind: "ScenarioFlowSurface",
    primarySurface: {
      kind: "ComparisonSurface",
      eyebrow: "Normalization First",
      title: "Use the blueprint as the migration anchor instead of trusting direct rewrites",
      description:
        "The migration story should compare reviewable normalization against raw language-to-language transformation.",
      statusLabel: "Migration comparison",
      leftEyebrow: "Direct rewrite",
      leftTitle: "Syntax-first migration loses the review anchor",
      leftBody:
        "When a system moves directly from one language to another, review often follows syntax and tooling quirks rather than the preserved computation itself.",
      rightEyebrow: "PCD hub",
      rightTitle: "Normalize once, then emit with the blueprint still visible",
      rightBody:
        "BRIK-64 uses PCD as the review anchor so teams can inspect what was preserved before target-specific idioms are emitted.",
    },
    supportingSurface: {
      kind: "ScenarioFlowSurface",
      eyebrow: "Emission Workflow",
      title: "The target move should stay legible in four steps",
      description:
        "The public story needs a fixed migration sequence, not sweeping equivalence slogans.",
      statusLabel: "Emission path",
      steps: [
        {
          label: "01",
          title: "Lift or author the logic",
          body:
            "Start from existing source or from direct PCD authoring, but keep the bounded computation explicit from the first step.",
          state: "active",
        },
        {
          label: "02",
          title: "Normalize once",
          body:
            "Use PCD as the stable intermediate form that the rest of the review workflow can inspect.",
          state: "warning",
        },
        {
          label: "03",
          title: "Emit target code",
          body:
            "Target-specific code is emitted from the normalized blueprint rather than from a chain of ad hoc rewrites.",
          state: "success",
        },
        {
          label: "04",
          title: "Review preserved behavior",
          body:
            "The blueprint remains the review anchor for what was preserved across the move.",
        },
      ],
    },
  },
  {
    id: "platform",
    label: "[06] PLATAFORMA",
    title: "Gestión centralizada de infraestructura de confianza",
    lead:
      "Nuestra plataforma centraliza el ciclo de vida de los Blueprints y Monomers, integrando el descubrimiento y la inspección de lógica verificada en el flujo de trabajo diario. El Registro de BRIK-64 vincula cada paquete a su estado de prueba formal, permitiendo una trazabilidad total desde la autoría hasta el despliegue en producción. Esto fomenta la reutilización de componentes seguros y garantiza que solo el software con una postura de prueba válida pueda ser integrado en sistemas críticos de escala empresarial.",
    workflowFocus:
      "Publish reviewable circuits, discover reusable blueprints, and keep proof state visible as the workflow moves into registry and tooling.",
    integrationPoint:
      "Compilation and lifting feed this layer; registry, IDE, API, and enterprise review workflows consume its outputs.",
    evidenceOutputs: [
      "registry posture",
      "GitHub App workflow",
      "IDE/LSP surface",
      "API and MCP access",
    ],
    claimBoundary:
      featureSectionBlueprints.platform.claimBoundary,
    primarySurfaceKind: "FeatureMatrixSurface",
    supportingSurfaceKind: "EvidenceSurface",
    primarySurface: {
      kind: "FeatureMatrixSurface",
      eyebrow: "Platform Workflow",
      title: "Carry proof state into registry and tooling",
      description:
        "The platform story should focus on publish, compose, and review workflows rather than on a flat inventory of badges and integrations.",
      metrics: [
        {
          label: "Registry posture",
          value: "Public + private",
          detail:
            "The platform layer combines reusable circuit publishing with controlled visibility and review state.",
        },
        {
          label: "Operator access",
          value: "IDE + API + MCP",
          detail:
            "Human and agent workflows reach the same reviewable blueprint through documented access surfaces.",
        },
        {
          label: "Workflow handoff",
          value: "publish → compose → review",
          detail:
            "The important story is how proof state survives the handoff into later workflows.",
        },
      ],
      rows: [
        {
          title: "Registry publication",
          body:
            "Publish review-ready circuits with metadata that keeps the blueprint legible instead of turning it into a generic package entry.",
        },
        {
          title: "Composition under review",
          body:
            "Compose reusable logic while keeping the review object and its proof state visible to the operator.",
          state: "accent",
        },
        {
          title: "Tooling access",
          body:
            "IDE, API, and MCP access points all matter here because they carry the same workflow state instead of inventing parallel stories.",
        },
      ],
    },
    supportingSurface: {
      kind: "EvidenceSurface",
      eyebrow: "Access Points",
      title: "What the platform block should point to",
      description:
        "This section should guide the user into the real product surfaces that already exist in the site and repo.",
      statusLabel: "Access readout",
      itemStatusLabel: "Route",
      items: [
        {
          label: "GitHub and certification workflow",
          body:
            "The page can reference GitHub-triggered review flows where repo evidence already supports them, but it should avoid turning that into an exclusivity claim.",
        },
        {
          label: "IDE and LSP tooling",
          body:
            "Editor support belongs here as a way to keep proof state visible where engineers work, not as an isolated bullet list.",
        },
        {
          label: "API and MCP access",
          body:
            "Programmatic access matters because the same reviewable blueprint can move through human and agent workflows without leaving the bounded chain.",
        },
      ],
    },
  },
  {
    id: "ai-native",
    label: "[07] AI NATIVE",
    title: "IA como productor acotado, no como fuente de verdad",
    lead:
      "Integramos la inteligencia artificial como un productor acotado de lógica, envolviendo cada salida generada en un bucle de verificación externa que garantiza el cumplimiento de políticas. BRIK-64 trata el código de los agentes como blueprints candidatos, sometiéndolos a diagnósticos de compilación y restricciones de dominio antes de permitir su integración en el registro. Este enfoque elimina la confianza ciega en los modelos probabilísticos, estableciendo una capa de control determinista que asegura la integridad de cada componente sintético.",
    workflowFocus:
      "Treat model output as a candidate blueprint, constrain it with policy and compiler checks, then use diagnostics to drive the next repair loop.",
    integrationPoint:
      "Agent workflows feed candidate logic into PCD and the compiler; platform and registry surfaces consume the bounded result and its diagnostics.",
    evidenceOutputs: [
      "agent skills",
      "MCP tools",
      "machine-readable output",
      "policy circuits",
      "structured diagnostics",
    ],
    claimBoundary:
      featureSectionBlueprints["ai-native"].claimBoundary,
    primarySurfaceKind: "ComparisonSurface",
    supportingSurfaceKind: "EvidenceSurface",
    primarySurface: {
      kind: "ComparisonSurface",
      eyebrow: "External Verification",
      title: "Keep trust outside the model",
      description:
        "The AI story should compare model-first confidence against an external verification loop that stays anchored to the blueprint.",
      statusLabel: "AI comparison",
      leftEyebrow: "Model-first",
      leftTitle: "Generated output without a bounded review loop",
      leftBody:
        "When teams trust the model itself as the source of correctness, review state and failure boundaries stay ambiguous.",
      rightEyebrow: "Bounded loop",
      rightTitle: "Candidate logic enters an external check and repair workflow",
      rightBody:
        "BRIK-64 uses policy circuits, compiler checks, and structured diagnostics so the review object remains outside the model.",
    },
    supportingSurface: {
      kind: "EvidenceSurface",
      eyebrow: "Agent Workflow",
      title: "What the AI block should actually cover",
      description:
        "The useful AI story is the bounded workflow around the model, not the claim that the model becomes trustworthy on its own.",
      statusLabel: "Agent scope",
      itemStatusLabel: "Readout",
      items: [
        {
          label: "Agent skills and tool access",
          body:
            "Agent workflows belong here because they show how models enter the bounded product chain through documented skills and tool calls.",
        },
        {
          label: "Policy circuits",
          body:
            "Policy circuits constrain actions and candidate logic outside the prompt, which is the important integration point for public messaging.",
        },
        {
          label: "Structured diagnostics",
          body:
            "Diagnostics matter because they make the repair loop operator-readable instead of relying on vague model confidence.",
        },
      ],
    },
  },
  {
    id: "enterprise",
    label: "[08] ENTERPRISE",
    title: "Integración de artefactos verificados en auditoría operativa",
    lead:
      "Extendemos la infraestructura de confianza a la escala organizacional mediante la integración de identidades soberanas, trazabilidad de auditoría inmutable y puertas de enlace en CI. BRIK-64 rodea cada blueprint verificado con un plano de control empresarial que registra cada cambio, firma y despliegue, asegurando una cadena de custodia técnica inexpugnable. Nuestra arquitectura soporta flujos de cumplimiento rigurosos y despliegues en entornos críticos, proporcionando la postura de revisión necesaria para operaciones globales de alta seguridad.",
    workflowFocus:
      "Surround the bounded blueprint with identity, audit, CI, deployment, and support workflows so teams can review how it moved and where it was checked.",
    integrationPoint:
      "Platform workflows feed this layer, and enterprise review consumes the resulting blueprint, trace, and status metadata.",
    evidenceOutputs: [
      "identity integration",
      "tamper-evident compilation trail",
      "CI status gating",
      "deployment boundary",
      "support posture",
    ],
    claimBoundary:
      featureSectionBlueprints.enterprise.claimBoundary,
    primarySurfaceKind: "FeatureMatrixSurface",
    supportingSurfaceKind: "EvidenceSurface",
    primarySurface: {
      kind: "FeatureMatrixSurface",
      eyebrow: "Enterprise Review",
      title: "Bring verified blueprints into operating and audit workflows",
      description:
        "Enterprise value in this block should be framed as review posture around the blueprint, not as automatic certification language.",
      metrics: [
        {
          label: "Identity",
          value: "SSO / SAML / OIDC + SCIM",
          detail:
            "Identity integration matters because access to the review object has to fit existing organizational controls.",
        },
        {
          label: "Audit trail",
          value: "hash-linked events",
          detail:
            "Compilation and certification records are useful here when they remain inspectable and attributable.",
        },
        {
          label: "Deployment posture",
          value: "on-prem capable",
          detail:
            "Deployment boundaries belong in the enterprise story as operating posture rather than as a sweeping promise.",
        },
      ],
      rows: [
        {
          title: "Identity and access",
          body:
            "SSO, SAML, OIDC, and SCIM sit around the blueprint so review access stays within existing organizational identity controls.",
        },
        {
          title: "Audit and CI posture",
          body:
            "Compilation records and CI status checks matter here because they show how a bounded blueprint moved through review.",
          state: "accent",
        },
        {
          title: "Deployment and support",
          body:
            "On-prem posture and human support belong in the operating story, but they are not substitutes for a formal claim boundary.",
        },
      ],
    },
    supportingSurface: {
      kind: "EvidenceSurface",
      eyebrow: "Enterprise Scope",
      title: "How enterprise posture should be described",
      description:
        "The supporting block should talk about standards contexts, audit outputs, and deployment boundaries without upgrading them into certification claims.",
      statusLabel: "Audit posture",
      itemStatusLabel: "Context",
      items: [
        {
          label: "Standards context",
          body:
            "BRIK-64 supports review and audit workflows with evidence artifacts that teams may map into standards contexts such as SOC2, PCI-DSS, HIPAA, ISO 27001, FDA 21 CFR Part 11, and NIST 800-53.",
        },
        {
          label: "CI and approval flow",
          body:
            "Required status checks and explicit review steps belong here because they make organizational approval paths readable around the blueprint.",
        },
        {
          label: "Support boundary",
          body:
            "Human support and deployment posture help teams operate the system, but they do not replace the need to qualify what the system itself does and does not certify.",
        },
      ],
    },
  },
];

export const featureCta: {
  title: string;
  description: string;
  actions: FeaturePageAction[];
} = {
  title: "Inicie localmente, escale hacia flujos de plataforma",
  description:
    "Instale la CLI para comenzar con un flujo de trabajo local acotado y desplace sus blueprints hacia rutas de revisión centralizadas cuando la lógica esté lista para producción.",
  actions: [
    { label: "Instalar CLI", href: "/cli", tone: "primary" },
    { label: "Explorar plataforma", href: "/platform", tone: "secondary" },
  ],
};
