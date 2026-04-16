import type { UtilityPageSpec } from "@/components/PageArchetypes";

function primary(label: string, href: string, external = false) {
  return { label, href, tone: "primary" as const, external };
}

function secondary(label: string, href: string, external = false) {
  return { label, href, tone: "secondary" as const, external };
}

function link(label: string, href: string, external = false) {
  return { label, href, tone: "link" as const, external };
}

export const utilityPages: Record<string, UtilityPageSpec> = {
  about: {
    hero: {
      eyebrow: "Company",
      title: "BRIK-64 builds the formal layer for",
      highlight: "AI-era programming.",
      description:
        "BRIK-64 combines a formal language, a canonical blueprint, a compiler path, platform workflows, and registry-oriented reuse around reviewable software. It clarifies what exists publicly today and where technical teams should go next.",
      actions: [primary("Read foundations", "/foundations"), secondary("Open platform", "/platform")],
      metrics: [
        { label: "Formal layer", value: "PCD", detail: "The public story stays anchored to the bounded blueprint format." },
        { label: "Operator path", value: "CLI → PCD → platform", detail: "The main route stays visible across the site." },
        { label: "Claim posture", value: "Qualified", detail: "Public language stays tied to evidence present in the repo." },
      ],
    },
    sectionHeader: {
      eyebrow: "Company",
      title: "What BRIK-64 is building and how the public stack fits together",
      description:
        "Start with the language and compiler path, then follow the platform, registry, and documentation routes that carry the technical detail.",
    },
    primarySurface: {
      eyebrow: "What BRIK-64 is today",
      title: "A formal language, a compiler path, and reviewable workflows",
      description:
        "The company thesis stays tied to product routes that exist on this site: PCD, the compiler chain, platform workflows, and reusable libraries.",
      thesis: true,
      metrics: [
        { label: "System frame", value: "Verified software", detail: "The public thesis stays tied to bounded verification rather than AI spectacle." },
        { label: "Delivery path", value: "Compiler-led", detail: "Local workflows lead into platform and registry use rather than replacing them." },
        { label: "Truth boundary", value: "Repo-backed", detail: "The site separates product evidence from broader market ambition." },
      ],
      rows: [
        { title: "Why it exists", body: "BRIK-64 argues for bounded computation, explicit composition, and reviewable software before deployment or migration hides the logic." },
        { title: "What is public today", body: "Foundations, PCD, platform, registry, CLI, SDK, and risk pages define the current public stack." },
        { title: "What stays out of scope", body: "The company route does not invent customer, audit, or market-leadership claims that the repo cannot support." },
      ],
    },
    secondarySurface: {
      eyebrow: "Next routes",
      title: "Technical references behind the company overview",
      description:
        "Hand the reader to the formal and product references that carry the real technical detail.",
      kind: "docs",
      links: [
        { title: "Foundations", body: "Formal background and proof-adjacent framing.", href: "/foundations" },
        { title: "Platform", body: "Registry, review, and reuse workflows around certified software.", href: "/platform" },
        { title: "Documentation", body: "Command references, language guides, and operator material.", href: "https://docs.brik64.dev", external: true },
      ],
      footer:
        "The company route stays concise when it ends in product and documentation paths instead of more narrative.",
    },
    cta: {
      title: "Follow the stack into the technical references.",
      description:
        "Move from the company overview into foundations, platform, and documentation without changing claim posture.",
      actions: [primary("Open platform", "/platform"), link("Read docs", "https://docs.brik64.dev", true)],
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Route the request to the right",
      highlight: "channel.",
      description:
        "General questions, enterprise evaluation, and support requests move faster when each route is explicit. The contact route maps each request to the correct mailbox or public channel.",
      actions: [primary("Email enterprise", "mailto:enterprise@brik64.com"), secondary("Open GitHub", "https://github.com/brik64/brik64/issues", true)],
      metrics: [
        { label: "General route", value: "hello@brik64.com", detail: "Product questions and initial contact." },
        { label: "Enterprise route", value: "enterprise@brik64.com", detail: "Deployment, compliance, and commercial evaluation." },
        { label: "Support route", value: "support@brik64.com", detail: "Operational issues and platform help." },
      ],
    },
    sectionHeader: {
      eyebrow: "Contact",
      title: "Choose the route that matches the request",
      description:
        "The point of contact is to reduce ambiguity before someone writes to the wrong place or opens the wrong ticket.",
    },
    primarySurface: {
      eyebrow: "Routing Rules",
      title: "Each route exists for a different class of request",
      description:
        "This contact system is not a generic inbox. It sends product, enterprise, and support questions into channels that preserve traceability.",
      rows: [
        { title: "General inquiries", body: "Route product questions, public site clarifications, and initial conversations through the general mailbox." },
        { title: "Enterprise evaluation", body: "Architecture review, deployment posture, compliance discussion, and commercial scope belong in the enterprise route." },
        { title: "Support and bugs", body: "Operational issues should go through support or GitHub so the evidence trail is preserved." },
      ],
      footer:
        "Good routing reduces ambiguity before a conversation reaches email, chat, or an issue tracker.",
    },
    secondarySurface: {
      eyebrow: "Channels",
      title: "Direct actions",
      description: "Each channel below exists for a different type of request and leads to a real operational path.",
      kind: "action",
      channels: [
        { title: "General inquiries", body: "Questions about BRIK-64, PCD, or Digital Circuitality.", action: "hello@brik64.com", href: "mailto:hello@brik64.com" },
        { title: "Enterprise", body: "SSO, deployment posture, private registry, and evaluation calls.", action: "enterprise@brik64.com", href: "mailto:enterprise@brik64.com" },
        { title: "Support", body: "Technical issues, bug reports, and platform help.", action: "support@brik64.com", href: "mailto:support@brik64.com" },
        { title: "GitHub", body: "Source code, issues, and contribution entrypoint.", action: "github.com/brik64", href: "https://github.com/brik64", external: true },
        { title: "Discord", body: "Community support and announcements.", action: "discord.gg/brik64", href: "https://discord.gg/brik64", external: true },
        { title: "Issue tracker", body: "Open traceable bug reports in the public repository.", action: "Open issue", href: "https://github.com/brik64/brik64/issues", external: true },
      ],
      footer:
        "Public channels stay visible, but they no longer compete with the main contact routes.",
    },
    cta: {
      title: "Need a deeper technical route?",
      description:
        "Route the request to enterprise or documentation when the question is really about architecture, deployment posture, or operator flow.",
      actions: [primary("Architecture review", "mailto:enterprise@brik64.com"), link("Documentation", "https://docs.brik64.dev", true)],
    },
  },
  download: {
    hero: {
      eyebrow: "Download",
      title: "Install the formal layer from the",
      highlight: "real entrypoints.",
      description:
        "Install guidance states what can be installed today, what remains documentation-led, and where each tool fits in the wider BRIK-64 workflow.",
      actions: [primary("Install CLI", "https://docs.brik64.dev", true), secondary("SDKs", "/sdks")],
      metrics: [
        { label: "CLI posture", value: "Primary entrypoint", detail: "The CLI remains the first operator path into the system." },
        { label: "Delivery modes", value: "CLI + SDK + platform", detail: "Each route extends the same formal-layer workflow." },
        { label: "Availability", value: "Explicit", detail: "Anything not live should be marked as scoped work rather than implied as downloadable." },
      ],
    },
    sectionHeader: {
      eyebrow: "Download",
      title: "What can be installed now and where each route leads",
      description:
        "A good download page makes install scope, documentation, and next steps clear before someone starts typing commands.",
    },
    primarySurface: {
      eyebrow: "Current Delivery",
      title: "What an operator can actually install today",
      description:
        "The active developer path is the CLI, with SDKs and platform routes extending that workflow rather than replacing it.",
      rows: [
        { title: "CLI", body: "The primary route for compilation, lifting, checking, certification, and registry interaction." },
        { title: "SDKs", body: "Language-specific packages expose BRIK-64 patterns inside host ecosystems without pretending to replace the CLI." },
        { title: "Platform app", body: "Desktop or richer platform shells should be marked as scoped work, not implied as universally downloadable if they are not live yet." },
      ],
      footer:
        "Install guidance should stay operational and bounded, not read like a storefront of equal-weight binaries.",
    },
    secondarySurface: {
      eyebrow: "Reference routes",
      title: "Where install guidance should send the reader next",
      description:
        "The right outcome is not more prose. It is a clean handoff to docs, SDK references, or platform workflows.",
      kind: "docs",
      links: [
        { title: "CLI docs", body: "Install, command, and certification workflows.", href: "https://docs.brik64.dev", external: true },
        { title: "SDKs", body: "Language-specific package references and examples.", href: "/sdks" },
        { title: "Platform", body: "Registry, review, and reuse workflows around the toolchain.", href: "/platform" },
      ],
      footer:
        "Install pages are strongest when they route directly to the exact docs or product area an operator needs.",
    },
    cta: {
      title: "Start from the documented install path.",
      description:
        "If a package is live, it should resolve to docs or product routes immediately. If it is not, the public copy should say so directly.",
      actions: [primary("Open docs", "https://docs.brik64.dev", true), link("View platform", "/platform")],
    },
  },
  pricing: {
    hero: {
      eyebrow: "Pricing",
      title: "Commercial routes for developers, teams, and",
      highlight: "enterprise evaluation.",
      description:
        "Pricing explains what is open today, what becomes team-oriented workflow, and what remains contact-led enterprise scope. It does not invent billing detail or guarantees the repo cannot support.",
      actions: [primary("Talk to enterprise", "mailto:enterprise@brik64.com"), secondary("Contact", "/contact")],
      metrics: [
        { label: "Open route", value: "CLI + docs", detail: "Developers can start from the public toolchain and documentation." },
        { label: "Team route", value: "Qualified", detail: "Shared libraries and workflow posture belong in a team-oriented route." },
        { label: "Enterprise route", value: "Conversation", detail: "Commercial posture remains an evaluation path, not a promise of undocumented features." },
      ],
    },
    sectionHeader: {
      eyebrow: "Pricing",
      title: "One packaging page for open, team, and enterprise scope",
      description:
        "The goal is to show how a buyer enters the system without fabricating unsupported commercial detail.",
    },
    primarySurface: {
      eyebrow: "Package Map",
      title: "Three routes through the current offering",
      description:
        "Keep the open developer path distinct from team workflow questions and enterprise evaluation.",
      rows: [
        { title: "Developer", body: "Public CLI, product pages, docs, and the open learning path through PCD and the registry narrative.", note: "default" },
        { title: "Team", body: "Shared operating patterns, collaboration posture, and a tighter route into the platform story.", note: "qualified" },
        { title: "Enterprise", body: "Private registry, deployment posture, review workflow, and evaluation-driven support conversations.", note: "contact-led" },
      ],
      footer:
        "Package names are useful only when their scope stays explicitly bounded.",
    },
    secondarySurface: {
      eyebrow: "Commercial next steps",
      title: "The next move should be an actual route, not a decorative plan card.",
      description:
        "The goal is to move a buyer into the right conversation with the minimum possible ambiguity.",
      kind: "action",
      channels: [
        { title: "Developer path", body: "Go directly to docs, the CLI, and the current product routes.", action: "Open docs", href: "https://docs.brik64.dev", external: true },
        { title: "Team questions", body: "Use contact when the question is about workflow fit or operator adoption.", action: "Contact", href: "/contact" },
        { title: "Enterprise evaluation", body: "Route commercial and architecture review to the enterprise channel.", action: "enterprise@brik64.com", href: "mailto:enterprise@brik64.com" },
      ],
    },
    cta: {
      title: "Choose the right route, then inspect the product.",
      description:
        "The next step should always be a product or contact path that already exists elsewhere on the site.",
      actions: [primary("Enterprise contact", "mailto:enterprise@brik64.com"), link("Read platform", "/platform")],
    },
  },
  faq: {
    hero: {
      eyebrow: "FAQ",
      title: "Questions technical teams ask before adopting the",
      highlight: "formal layer.",
      description:
        "Answer the recurring questions quickly, then route deeper technical or commercial topics to the right product or contact path.",
      actions: [primary("Ask a question", "/contact"), secondary("Documentation", "https://docs.brik64.dev", true)],
    },
    sectionHeader: {
      eyebrow: "FAQ",
      title: "Clarify the system, then route to the right next step",
      description:
        "The design priority is clarity and routing, not ornamental interaction.",
    },
    primarySurface: {
      eyebrow: "Common Questions",
      title: "The questions that appear most often before technical adoption",
      description:
        "A good FAQ narrows ambiguity and points users back to the correct product route.",
      rows: [
        { title: "Is BRIK-64 a language, a compiler, or a platform?", body: "Publicly, it is presented as a formal language and compiler path wrapped by broader platform and registry workflows." },
        { title: "Do I need PCD to start?", body: "No. The public entry path can begin with CLI and SDK material, then move into PCD when formal structure matters." },
        { title: "Does the site claim full compliance or certification?", body: "No. Compliance language stays scoped to evidence posture, bounded logic, and operator review workflows." },
        { title: "Where should I go next?", body: "Docs, the platform page, or contact, depending on whether the question is technical, exploratory, or commercial." },
      ],
    },
    secondarySurface: {
      eyebrow: "Reference routes",
      title: "Useful routes when FAQ is not enough",
      description:
        "The FAQ should still resolve to specific technical destinations.",
      kind: "docs",
      links: [
        { title: "Documentation", body: "Reference material and command help.", href: "https://docs.brik64.dev", external: true },
        { title: "Platform", body: "The product route that explains how the pieces combine.", href: "/platform" },
        { title: "Contact", body: "Route unresolved questions into the correct support or enterprise channel.", href: "/contact" },
      ],
    },
    cta: {
      title: "If the answer needs proof, move to the product routes.",
      description:
        "FAQ should clarify terminology and routing. Detailed evidence belongs in the relevant product or risk routes.",
      actions: [primary("Open platform", "/platform"), link("Contact", "/contact")],
    },
  },
  legal: {
    hero: {
      eyebrow: "Legal",
      title: "Policy, privacy, and public communication",
      highlight: "boundaries.",
      description:
        "Legal information should stay readable, explicit, and sober. The legal section covers policy boundaries without turning into a product pitch.",
      actions: [primary("Contact legal", "mailto:hello@brik64.com"), link("Privacy questions", "/contact")],
    },
    sectionHeader: {
      eyebrow: "Legal",
      title: "Legal information should stay readable and explicitly scoped",
      description:
        "Terms, privacy, and brand-related policy references belong here when they can be stated precisely and tied to a human contact path.",
    },
    primarySurface: {
      eyebrow: "Policy Scope",
      title: "What legal coverage includes",
      description:
        "Legal content focuses on policy scope and communication boundaries rather than product marketing.",
      rows: [
        { title: "Terms and acceptable use", body: "Explain the public website and any operator expectations without inventing product commitments." },
        { title: "Privacy posture", body: "Describe how contact, support, or docs interactions are handled to the extent that the repo documents them." },
        { title: "Brand and asset usage", body: "Refer back to the brand asset guidance when the page intersects with logo or trademark usage." },
      ],
    },
    secondarySurface: {
      eyebrow: "Reference material",
      title: "Policy questions should route to the right references and people.",
      description: "Legal copy stays sober without becoming isolated from the rest of the site's truth boundary.",
      kind: "docs",
      links: [
        { title: "Content scope", body: "Truth-boundary and claim-class guidance for public messaging.", href: "/docs" },
        { title: "Brand assets", body: "Canonical logo and asset rules recorded in the repository.", href: "https://github.com/brik64/brik64.com", external: true },
        { title: "Contact", body: "Route legal or policy questions to a human channel.", href: "/contact" },
      ],
    },
  },
  investors: {
    hero: {
      eyebrow: "Investors",
      title: "A category and architecture thesis with an explicit",
      highlight: "truth boundary.",
      description:
        "Investor communication can explain the category thesis, the system form, and the current public product logic. It should not invent traction numbers, customer references, or financial certainty.",
      actions: [primary("Company overview", "/about"), secondary("Enterprise contact", "mailto:enterprise@brik64.com")],
      metrics: [
        { label: "Category thesis", value: "Verified software", detail: "The site frames BRIK-64 as infrastructure for bounded, reusable computation." },
        { label: "System form", value: "Registry + platform", detail: "The public story repeatedly reinforces reusable libraries and review workflows." },
        { label: "Evidence posture", value: "Conservative", detail: "Investor copy avoids unsupported traction or customer claims." },
      ],
    },
    sectionHeader: {
      eyebrow: "Investors",
      title: "A bounded thesis for the category and the system",
      description:
        "The public investor route can communicate architecture and category logic without slipping into unsupported proof or traction language.",
    },
    primarySurface: {
      eyebrow: "Investor Thesis",
      title: "What the public site can communicate responsibly",
      description:
        "Keep the argument on category framing and system architecture rather than financial storytelling the site cannot support.",
      thesis: true,
      metrics: [
        { label: "Why now", value: "AI + verification", detail: "The public story links AI-generated software growth to the need for bounded verification workflows." },
        { label: "Why this form", value: "Platform + registry", detail: "The system argument comes from reusable verified components and workflow reuse." },
        { label: "What remains off-limits", value: "Traction claims", detail: "No customer, revenue, or market-leadership numbers without evidence." },
      ],
      rows: [
        { title: "Category frame", body: "BRIK-64 is framed as infrastructure for verified software rather than a narrow compiler utility." },
        { title: "Architecture frame", body: "PCD, the compiler path, platform workflows, and registry logic remain the public system boundary." },
        { title: "Communication discipline", body: "Investor-facing copy cannot invent customer wins, audit status, or adoption numbers." },
      ],
    },
    secondarySurface: {
      eyebrow: "Useful reading paths",
      title: "Resolve the thesis back to technical evidence",
      description:
        "When investor communication makes a systems argument, it should point back to the relevant product and foundations pages.",
      kind: "docs",
      links: [
        { title: "Foundations", body: "Formal and conceptual background.", href: "/foundations" },
        { title: "Platform", body: "Product workbench and registry posture.", href: "/platform" },
        { title: "About", body: "The company narrative in bounded form.", href: "/about" },
      ],
    },
    cta: {
      title: "Read the technical case behind the category thesis.",
      description:
        "Move from the public company overview into foundations, platform, and enterprise workflows with the same claim discipline.",
      actions: [primary("Open platform", "/platform"), link("Read foundations", "/foundations")],
    },
  },
  enterprise: {
    hero: {
      eyebrow: "Enterprise",
      title: "Private delivery, identity controls, and",
      highlight: "reviewable evidence workflows.",
      description:
        "Enterprise adoption focuses on identity integration, audit traceability, CI/CD status gates, and deployment posture under explicit claim boundaries.",
      actions: [primary("Request architecture review", "mailto:enterprise@brik64.com"), secondary("Read compliance", "/compliance")],
      metrics: [
        { label: "Identity", value: "SSO / SAML / OIDC + SCIM", detail: "Access controls align with enterprise identity lifecycles." },
        { label: "Evidence trail", value: "Compilation + review logs", detail: "Verification outputs carry traceable review artifacts into operating workflows." },
        { label: "Claim boundary", value: "Support posture", detail: "BRIK-64 supports audit and review workflows; it does not certify organizations by itself." },
      ],
    },
    sectionHeader: {
      eyebrow: "Enterprise Operating Model",
      title: "From bounded software checks to organizational review handoff",
      description:
        "Enterprise teams can operationalize identity, evidence, and deployment controls today, while legal and program certification controls remain separate.",
    },
    primarySurface: {
      eyebrow: "Capability Scope",
      title: "What enterprise teams can operationalize",
      description:
        "The enterprise route is about operating control points and review posture, not blanket compliance promises.",
      rows: [
        { title: "Identity and access", body: "SSO, SAML, OIDC, and SCIM integration for centralized user lifecycle and access policy." },
        { title: "Audit and traceability", body: "Compilation trail, certification state, and status artifacts for review and change-control workflows." },
        { title: "Delivery governance", body: "CI/CD gates, private registry controls, and deployment-boundary workflows for production adoption." },
      ],
      footer:
        "Enterprise value comes from traceable workflows and explicit operating boundaries, not certification theater.",
    },
    secondarySurface: {
      eyebrow: "Enterprise Handoff",
      title: "Routes for compliance, deployment, and support",
      description:
        "Use the route that matches the workstream: technical controls, compliance mapping, or architecture review.",
      kind: "action",
      channels: [
        { title: "Architecture review", body: "Technical scope, deployment options, and control-point design.", action: "enterprise@brik64.com", href: "mailto:enterprise@brik64.com" },
        { title: "Compliance posture", body: "Evidence mapping and claim boundaries for standards-oriented programs.", action: "Open compliance", href: "/compliance" },
        { title: "Platform integration", body: "Registry, review flows, and reusable component governance.", action: "Open platform", href: "/platform" },
      ],
    },
    cta: {
      title: "Start with architecture scope, then map controls.",
      description:
        "Begin with enterprise architecture review and move into compliance and platform routes with the same evidence posture.",
      actions: [primary("Request architecture review", "mailto:enterprise@brik64.com"), link("Open platform", "/platform")],
    },
  },
  aiAgents: {
    hero: {
      eyebrow: "AI Agents",
      title: "Use AI as a bounded producer with",
      highlight: "external verification.",
      description:
        "Agent output is treated as candidate logic. Policy circuits and compiler checks stay outside the model and gate what can be accepted or rejected.",
      actions: [primary("Open AI safety use case", "/use-cases/ai-safety"), secondary("Install CLI", "/cli")],
      metrics: [
        { label: "Workflow", value: "discover → check → execute", detail: "Generated output is reviewed before it is allowed to trigger side effects." },
        { label: "Control point", value: "Policy circuits", detail: "Action constraints remain explicit and machine-readable outside model weights." },
        { label: "Boundary", value: "No trust by default", detail: "BRIK-64 constrains model output; it does not make underlying models trustworthy by default." },
      ],
    },
    sectionHeader: {
      eyebrow: "Agent Workflow",
      title: "Generated output enters a constrained review loop",
      description:
        "Teams can integrate AI agents without collapsing proof posture into model confidence by keeping verification outside the model.",
    },
    primarySurface: {
      eyebrow: "Control Loop",
      title: "How agent output is constrained",
      description:
        "The core loop remains external verification: inspect candidate output, apply policy gates, emit diagnostics, then publish accepted results.",
      rows: [
        { title: "Discover candidate logic", body: "Agents generate PCD or policy-relevant code as candidate output, not as trusted final software." },
        { title: "Check and gate", body: "Policy circuits and compiler checks determine whether output can proceed to execution or publication." },
        { title: "Diagnose and iterate", body: "Structured diagnostics feed a repair loop for rejected branches while preserving review traceability." },
      ],
      footer:
        "The value is bounded agent integration with explicit controls, not AI hype language.",
    },
    secondarySurface: {
      eyebrow: "Integration Routes",
      title: "Where the constrained outputs go next",
      description:
        "Accepted outputs can move to CLI, platform, and registry flows while preserving policy and certification context.",
      kind: "docs",
      links: [
        { title: "AI safety use case", body: "Detailed guardrail workflow with policy boundaries.", href: "/use-cases/ai-safety" },
        { title: "CLI", body: "Local verification entrypoint for generated candidates.", href: "/cli" },
        { title: "Platform", body: "Registry and workflow handoff for accepted bounded outputs.", href: "/platform" },
      ],
    },
    cta: {
      title: "Integrate agents through explicit gates.",
      description:
        "Start with constrained generation and policy checks, then route accepted outputs into platform workflows.",
      actions: [primary("Open AI safety use case", "/use-cases/ai-safety"), link("Read platform", "/platform")],
    },
  },
  playground: {
    hero: {
      eyebrow: "Playground",
      title: "A technical sandbox for",
      highlight: "experimentation.",
      description:
        "Use the playground as a bounded environment for trying commands, flows, and examples without leaving the main product narrative.",
      actions: [primary("Open CLI docs", "https://docs.brik64.dev", true), secondary("CLI", "/cli")],
    },
    sectionHeader: {
      eyebrow: "Sandbox",
      title: "Operator sandbox with explicit boundaries",
      description:
        "Keep the page technical and explicit about what it does and does not offer.",
    },
    primarySurface: {
      eyebrow: "Sandbox Scope",
      title: "What belongs in the playground",
      description:
        "Experiments, examples, and quick workflow loops belong here when they are clearly bounded.",
      rows: [
        { title: "Try a command flow", body: "Demonstrate lifting, checking, or certification sequences without claiming hosted execution if none exists." },
        { title: "Inspect examples", body: "Provide bounded code or PCD examples as guidance, not as a substitute for docs." },
        { title: "Route deeper questions", body: "Hand off to CLI, SDK, or docs pages as soon as the user needs full reference material." },
      ],
    },
    secondarySurface: {
      eyebrow: "Reference routes",
      title: "Useful routes around the sandbox",
      description:
        "The sandbox stays useful when it routes directly into formal product references.",
      kind: "docs",
      links: [
        { title: "CLI", body: "The canonical operator path for local work.", href: "/cli" },
        { title: "PCD", body: "Formal language reference and syntax workbench.", href: "/pcd" },
        { title: "Documentation", body: "Reference material beyond the sandbox.", href: "https://docs.brik64.dev", external: true },
      ],
    },
  },
  changelog: {
    hero: {
      eyebrow: "Changelog",
      title: "Release notes as an operational history, not a",
      highlight: "legacy feed.",
      description:
        "The changelog remains public and tied to current product routes, docs, and source references.",
      actions: [primary("Latest releases", "/news"), secondary("Documentation", "https://docs.brik64.dev", true)],
    },
    sectionHeader: {
      eyebrow: "Editorial Utility",
      title: "The changelog is a release route, not a disconnected archive.",
      description:
        "It helps the reader understand what changed and where to continue next.",
    },
    primarySurface: {
      eyebrow: "Release Scope",
      title: "What the public changelog communicates",
      description:
        "Release notes stay factual, scoped, and linked to product routes or docs.",
      rows: [
        { title: "Current status", body: "Summarize meaningful public changes without creating a second design language for release notes." },
        { title: "Source of truth", body: "Link changes back to product pages, docs, or repo-backed evidence wherever possible." },
        { title: "Historical framing", body: "Keep older milestones as history, but do not let them compete with the active product narrative." },
      ],
    },
    secondarySurface: {
      eyebrow: "Reading routes",
      title: "Release notes connect to current public routes.",
      description:
        "Route readers from change history into the relevant product or documentation route immediately.",
      kind: "docs",
      links: [
        { title: "News", body: "Editorial announcements and longer updates.", href: "/news" },
        { title: "Platform", body: "The product route most readers should inspect after a release note.", href: "/platform" },
        { title: "Documentation", body: "Command and API details for the current state.", href: "https://docs.brik64.dev", external: true },
      ],
    },
  },
  shop: {
    hero: {
      eyebrow: "Shop",
      title: "Brand support, collateral, and limited merchandise in one",
      highlight: "honest route.",
      description:
        "If the shop is not a full commerce experience, the copy should state that directly. It exists to explain current brand-support scope and route questions to a human channel.",
      actions: [primary("Brand assets", "/design-system"), secondary("Contact", "/contact")],
    },
    sectionHeader: {
      eyebrow: "Shop",
      title: "A simple brand-support route, not a fake storefront",
      description:
        "Shop copy can explain merchandise or collateral intent without pretending that a full checkout flow already exists.",
    },
    primarySurface: {
      eyebrow: "Current scope",
      title: "Current public shop scope",
      description:
        "Treat the shop as a brand-support route unless and until it becomes a full commerce system.",
      rows: [
        { title: "Brand support items", body: "Merchandise, collateral, or limited-run assets can be described without pretending to be a full retail experience." },
        { title: "Canonical assets", body: "All brand usage should defer to the asset guidance already recorded in the repo." },
        { title: "Commercial clarity", body: "If the shop is not live, the public copy should say so instead of imitating an active checkout flow." },
      ],
    },
    secondarySurface: {
      eyebrow: "Reference routes",
      title: "Useful brand routes",
      description:
        "Readers should be able to move directly to the brand system or contact path.",
      kind: "docs",
      links: [
        { title: "Design system", body: "Visual language and reusable brand components.", href: "/design-system" },
        { title: "Brand assets", body: "Canonical logo usage in the repository docs.", href: "https://github.com/brik64/brik64.com", external: true },
        { title: "Contact", body: "Route any partnership or brand questions to a human channel.", href: "/contact" },
      ],
    },
    cta: {
      title: "Need brand assets or a partnership conversation?",
      description:
        "Open the design system or contact routes rather than treating the shop route like a full retail storefront.",
      actions: [primary("Contact", "/contact"), link("Open design system", "/design-system")],
    },
  },
  docs: {
    hero: {
      eyebrow: "Docs",
      title: "The docs route is a bridge into the",
      highlight: "reference system.",
      description:
        "Instead of a hard redirect, docs copy points to where documentation lives and how it connects to product workflows.",
      actions: [primary("Open documentation", "https://docs.brik64.dev", true), secondary("CLI", "/cli")],
    },
    sectionHeader: {
      eyebrow: "Docs",
      title: "Bridge reference material back to product workflows",
      description:
        "Users can see where docs live, what they cover, and which public routes to use for deeper context.",
    },
    primarySurface: {
      eyebrow: "Documentation Scope",
      title: "What the reference system covers",
      description:
        "This documentation entry helps users find the right part of the stack without disconnecting it from the product narrative.",
      rows: [
        { title: "CLI and commands", body: "Use docs for install, command reference, and certification workflows." },
        { title: "Language guides", body: "SDKs, host language integrations, and examples belong in documentation references." },
        { title: "Platform references", body: "When docs intersect with platform or registry behavior, route back to the relevant product pages as needed." },
      ],
    },
    secondarySurface: {
      eyebrow: "Open these next",
      title: "Useful public routes around the docs",
      description:
        "Readers can move between docs and public product routes without a visual reset.",
      kind: "docs",
      links: [
        { title: "Documentation", body: "Primary reference system.", href: "https://docs.brik64.dev", external: true },
        { title: "CLI", body: "The operator entrypoint that most docs readers will need.", href: "/cli" },
        { title: "PCD", body: "The formal language route behind the reference material.", href: "/pcd" },
      ],
    },
  },
  login: {
    hero: {
      eyebrow: "Login",
      title: "Authentication pages stay minimal but still",
      highlight: "on-system.",
      description:
        "Login communicates the route into the platform without introducing a separate design language.",
      actions: [primary("Platform", "/platform"), link("Contact support", "/contact")],
    },
    sectionHeader: {
      eyebrow: "Auth",
      title: "Login remains a bounded access page.",
      description:
        "It can be visually quiet while still following the same header cadence and structure rules.",
    },
    primarySurface: {
      eyebrow: "Access model",
      title: "What the login route communicates",
      description:
        "Login focuses on access posture, support routing, and where the platform sits in the overall public flow.",
      rows: [
        { title: "Platform access", body: "Use login only as the bridge into authenticated platform work, not as a standalone marketing page." },
        { title: "Support", body: "If the user cannot access the platform, route them into support or enterprise channels explicitly." },
        { title: "Public fallback", body: "Unauthenticated users can immediately return to product and docs routes." },
      ],
    },
    secondarySurface: {
      eyebrow: "Useful routes",
      title: "Do not trap users in auth dead ends.",
      description:
        "Recovery paths remain explicit for platform access issues.",
      kind: "action",
      channels: [
        { title: "Open platform narrative", body: "Return to the public product route.", action: "Platform", href: "/platform" },
        { title: "Read docs", body: "Use docs if the user needs operator guidance before access.", action: "Docs", href: "https://docs.brik64.dev", external: true },
        { title: "Contact support", body: "Route login issues to the human channel.", action: "Support", href: "/contact" },
      ],
    },
  },
  signup: {
    hero: {
      eyebrow: "Signup",
      title: "Account creation is framed as a route into the",
      highlight: "platform.",
      description:
        "The signup page stays minimal, but it still belongs to the same design system as the rest of the site.",
      actions: [primary("Platform", "/platform"), link("Enterprise contact", "mailto:enterprise@brik64.com")],
    },
    sectionHeader: {
      eyebrow: "Auth",
      title: "Signup remains an access step, not a separate landing page.",
      description:
        "It communicates who this signup entry is for and how to get help.",
    },
    primarySurface: {
      eyebrow: "Access rules",
      title: "What signup clarifies",
      description:
        "Clarify how a user enters the product flow and where to go when they need a deeper deployment conversation.",
      rows: [
        { title: "Developer entry", body: "Self-serve users can inspect product and docs routes before account creation." },
        { title: "Enterprise path", body: "Private registry or deployment conversations still belong in the enterprise route, not in generic signup messaging." },
        { title: "Support path", body: "Route access or account issues to the same contact and support routes used elsewhere." },
      ],
    },
    secondarySurface: {
      eyebrow: "Useful routes",
      title: "Help the user move to the right next route.",
      description:
        "The signup route terminates in clear product or support actions.",
      kind: "action",
      channels: [
        { title: "Read platform", body: "Go back to the public product route before signing up.", action: "Platform", href: "/platform" },
        { title: "Open docs", body: "Reference material for users who are still evaluating the toolchain.", action: "Docs", href: "https://docs.brik64.dev", external: true },
        { title: "Enterprise evaluation", body: "Commercial or deployment questions belong in the enterprise route.", action: "enterprise@brik64.com", href: "mailto:enterprise@brik64.com" },
      ],
    },
  },
};

type SimpleUtilityKey =
  | "careers"
  | "contactSales"
  | "security"
  | "privacyPolicy"
  | "termsOfUse"
  | "dpa"
  | "subprocessors"
  | "cookiePolicy"
  | "businessInformation"
  | "support"
  | "communityGuides"
  | "postgresqlTutorial"
  | "startups";

function buildSimpleUtilityPage(config: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  sectionTitle: string;
  sectionDescription: string;
  primaryTitle: string;
  primaryDescription: string;
  rows: Array<{ title: string; body: string }>;
  secondaryTitle: string;
  secondaryDescription: string;
  links: Array<{ title: string; body: string; href: string; external?: boolean }>;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaActions?: ReturnType<typeof primary>[] | Array<ReturnType<typeof primary> | ReturnType<typeof secondary> | ReturnType<typeof link>>;
}): UtilityPageSpec {
  return {
    hero: {
      eyebrow: config.eyebrow,
      title: config.title,
      highlight: config.highlight,
      description: config.description,
      actions: config.ctaActions?.slice(0, 2),
    },
    sectionHeader: {
      eyebrow: config.eyebrow,
      title: config.sectionTitle,
      description: config.sectionDescription,
    },
    primarySurface: {
      eyebrow: config.eyebrow,
      title: config.primaryTitle,
      description: config.primaryDescription,
      rows: config.rows,
    },
    secondarySurface: {
      eyebrow: "Reference routes",
      title: config.secondaryTitle,
      description: config.secondaryDescription,
      kind: "docs",
      links: config.links,
    },
    cta: config.ctaTitle && config.ctaDescription && config.ctaActions
      ? {
          title: config.ctaTitle,
          description: config.ctaDescription,
          actions: config.ctaActions,
        }
      : undefined,
  };
}

Object.assign(utilityPages, {
  careers: buildSimpleUtilityPage({
    eyebrow: "Careers",
    title: "Build the formal layer with",
    highlight: "discipline.",
    description: "Careers stays explicit about the kind of engineering, product, and systems work BRIK64 is building.",
    sectionTitle: "Careers should communicate the work, not generic startup theater.",
    sectionDescription: "Explain the kind of problems, standards, and collaboration posture candidates should expect.",
    primaryTitle: "What working here means",
    primaryDescription: "The public careers route should state the technical bar and the operating model clearly.",
    rows: [
      { title: "Systems rigor", body: "Work spans formal language, compiler, platform, registry, and public product surfaces." },
      { title: "Truth boundary", body: "Public messaging stays tied to supportable product and engineering reality." },
      { title: "Execution style", body: "Teams work with explicit architecture, bounded claims, and reviewable artifacts." },
    ],
    secondaryTitle: "Useful company routes before any hiring conversation",
    secondaryDescription: "Candidates should be able to inspect the company and product surfaces first.",
    links: [
      { title: "About", body: "Company overview and public product framing.", href: "/about" },
      { title: "Foundations", body: "Longer technical framing for the architecture.", href: "/foundations" },
      { title: "Contact", body: "General questions before a hiring conversation.", href: "/contact" },
    ],
    ctaTitle: "Need the human route?",
    ctaDescription: "Use contact when the question is about the company, scope, or future openings.",
    ctaActions: [primary("Contact", "/contact")],
  }),
  contactSales: buildSimpleUtilityPage({
    eyebrow: "Contact Sales",
    title: "Route deployment and commercial questions to the",
    highlight: "right channel.",
    description: "Contact Sales exists for architecture review, deployment posture, and commercial scoping.",
    sectionTitle: "Sales should start from real scope, not from inflated packaging claims.",
    sectionDescription: "Point enterprise buyers to the right surfaces before a commercial conversation starts.",
    primaryTitle: "When to use Contact Sales",
    primaryDescription: "Use this route when the question is deployment, governance, identity, or organizational adoption.",
    rows: [
      { title: "Architecture review", body: "Discuss deployment posture, self-host scope, and control-point design." },
      { title: "Commercial scoping", body: "Use this route for enterprise packaging and support conversations." },
      { title: "Identity and governance", body: "SSO, SCIM, and shared review flows belong here rather than in generic support." },
    ],
    secondaryTitle: "Routes that should be inspected alongside sales",
    secondaryDescription: "The commercial conversation is stronger when it stays tied to existing product and risk routes.",
    links: [
      { title: "Enterprise", body: "Enterprise operating model and qualified scope.", href: "/enterprise" },
      { title: "Pricing", body: "Open path, team workflow, and commercial packaging.", href: "/pricing" },
      { title: "Contact", body: "Use general contact for non-commercial questions.", href: "/contact" },
    ],
    ctaTitle: "Open the enterprise route first.",
    ctaDescription: "The best sales conversation starts after the buyer has seen the system and its boundaries.",
    ctaActions: [primary("Enterprise", "/enterprise"), secondary("Email sales", "mailto:enterprise@brik64.com")],
  }),
  security: buildSimpleUtilityPage({
    eyebrow: "Security",
    title: "Security posture belongs to the",
    highlight: "explicit boundary.",
    description: "Security copy should distinguish product controls, deployment posture, and what remains outside the public claim boundary.",
    sectionTitle: "Security pages should stay precise and bounded.",
    sectionDescription: "Explain how public security language maps to the rest of the site without inventing unsupported assurances.",
    primaryTitle: "What the public security route covers",
    primaryDescription: "Security posture should describe the review and deployment surface honestly.",
    rows: [
      { title: "Product controls", body: "Public language can explain review, package state, and operator visibility." },
      { title: "Deployment posture", body: "Identity and environment controls belong in enterprise scoping, not as universal guarantees." },
      { title: "Disclosure path", body: "Security reporting should route to a clear human channel." },
    ],
    secondaryTitle: "Related reference routes",
    secondaryDescription: "Security lives close to legal, enterprise, and contact surfaces.",
    links: [
      { title: "Enterprise", body: "Deployment and identity posture in enterprise context.", href: "/enterprise" },
      { title: "Legal", body: "Policy and public communication boundaries.", href: "/legal" },
      { title: "Contact", body: "Human route for security questions.", href: "/contact" },
    ],
    ctaTitle: "Need a security conversation?",
    ctaDescription: "Use the contact route if the question requires a human response rather than more public copy.",
    ctaActions: [primary("Contact", "/contact")],
  }),
  privacyPolicy: buildSimpleUtilityPage({
    eyebrow: "Privacy Policy",
    title: "Privacy language should stay",
    highlight: "readable.",
    description: "The privacy route clarifies how contact, support, and public site interactions are handled without turning into product marketing.",
    sectionTitle: "Privacy copy should describe data handling in direct terms.",
    sectionDescription: "Keep this policy route focused on scope, not feature promotion.",
    primaryTitle: "What privacy policy covers",
    primaryDescription: "The public privacy route should focus on contact and website interaction boundaries.",
    rows: [
      { title: "Contact and support", body: "Email and support interactions should be described as operational communication channels." },
      { title: "Website analytics", body: "Cookie and analytics posture should stay explicit and minimal." },
      { title: "Escalation path", body: "Privacy questions should route to a clear contact path." },
    ],
    secondaryTitle: "Related policy routes",
    secondaryDescription: "Readers should be able to move from privacy to the surrounding policy surfaces.",
    links: [
      { title: "Cookie Policy", body: "Cookie and analytics-specific coverage.", href: "/cookie-policy" },
      { title: "Terms of Use", body: "Usage terms for the public site and related services.", href: "/terms-of-use" },
      { title: "Legal", body: "Parent policy and communication boundary route.", href: "/legal" },
    ],
  }),
  termsOfUse: buildSimpleUtilityPage({
    eyebrow: "Terms of Use",
    title: "Terms should define the",
    highlight: "public boundary.",
    description: "The terms route explains usage expectations for the public site and the basic relationship to BRIK64 services.",
    sectionTitle: "Terms of Use should stay plain, structured, and non-promissory.",
    sectionDescription: "Explain expectations without quietly adding product guarantees.",
    primaryTitle: "What Terms of Use establish",
    primaryDescription: "The terms route is about usage boundaries, not about feature promises.",
    rows: [
      { title: "Public website use", body: "State the conditions for using the site and interacting with public routes." },
      { title: "Service boundary", body: "Avoid implying enterprise commitments that belong in contract-led conversations." },
      { title: "Policy linkage", body: "Terms should connect cleanly to privacy and legal routes." },
    ],
    secondaryTitle: "Policy routes around terms",
    secondaryDescription: "Terms should live alongside privacy and general legal surfaces.",
    links: [
      { title: "Privacy Policy", body: "Privacy and contact handling posture.", href: "/privacy-policy" },
      { title: "Legal", body: "Policy overview and public communication boundaries.", href: "/legal" },
      { title: "Business Information", body: "Business entity and public business details.", href: "/business-information" },
    ],
  }),
  dpa: buildSimpleUtilityPage({
    eyebrow: "DPA",
    title: "Data processing terms belong in",
    highlight: "enterprise scope.",
    description: "The DPA route should explain that data processing terms are resolved in commercial and enterprise context, not by decorative public copy.",
    sectionTitle: "Public DPA copy should remain scoped and preparatory.",
    sectionDescription: "The route should state what the DPA is for and where the actual discussion belongs.",
    primaryTitle: "What the DPA route is for",
    primaryDescription: "It should clarify that processing terms attach to enterprise or contract-led adoption.",
    rows: [
      { title: "Contract-led", body: "DPA discussion belongs to enterprise evaluation and contract review." },
      { title: "Support surface", body: "The site can explain the route without pretending a universal DPA already exists for every scenario." },
      { title: "Related posture", body: "Readers should be handed to enterprise and privacy routes where appropriate." },
    ],
    secondaryTitle: "Useful routes before a DPA conversation",
    secondaryDescription: "The user should see the enterprise and policy context first.",
    links: [
      { title: "Enterprise", body: "Deployment, controls, and commercial context.", href: "/enterprise" },
      { title: "Privacy Policy", body: "Public privacy posture.", href: "/privacy-policy" },
      { title: "Contact Sales", body: "Commercial route for contract discussions.", href: "/contact-sales" },
    ],
  }),
  subprocessors: buildSimpleUtilityPage({
    eyebrow: "Subprocessors",
    title: "Subprocessor information should stay",
    highlight: "enumerable.",
    description: "The public subprocessors route exists to make external processing dependencies legible when they matter.",
    sectionTitle: "Subprocessor coverage should be explicit and updateable.",
    sectionDescription: "The route should clarify what kind of third-party processing surfaces exist and where questions should go.",
    primaryTitle: "What subprocessors list should communicate",
    primaryDescription: "It should state the role of third-party providers without turning into a vague vendor cloud page.",
    rows: [
      { title: "Operational vendors", body: "List relevant third-party processors or point to the maintained record." },
      { title: "Scope boundary", body: "Differentiate website operations from enterprise deployment-specific discussions." },
      { title: "Contact route", body: "Complex questions should route to privacy or enterprise channels." },
    ],
    secondaryTitle: "Related policy routes",
    secondaryDescription: "Subprocessors should stay connected to privacy and DPA surfaces.",
    links: [
      { title: "Privacy Policy", body: "Public privacy scope and contact posture.", href: "/privacy-policy" },
      { title: "DPA", body: "Contract-led processing terms.", href: "/dpa" },
      { title: "Contact Sales", body: "Enterprise route for detailed deployment questions.", href: "/contact-sales" },
    ],
  }),
  cookiePolicy: buildSimpleUtilityPage({
    eyebrow: "Cookie Policy",
    title: "Cookie policy should stay",
    highlight: "specific.",
    description: "Cookie policy exists to explain essential site behavior and optional analytics or marketing posture in direct terms.",
    sectionTitle: "Cookies should be explained without dragging marketing language into policy.",
    sectionDescription: "The route should say what the site uses and what controls exist.",
    primaryTitle: "What cookie policy covers",
    primaryDescription: "Explain essential cookies, optional analytics, and the relationship to consent controls.",
    rows: [
      { title: "Essential cookies", body: "Explain what is required for the site to function." },
      { title: "Optional analytics", body: "Clarify the role of optional usage measurement if present." },
      { title: "Preferences", body: "Point users to the cookie banner or privacy route for preference context." },
    ],
    secondaryTitle: "Related routes",
    secondaryDescription: "Cookie policy should connect to privacy and legal routes.",
    links: [
      { title: "Privacy Policy", body: "Broader privacy and contact posture.", href: "/privacy-policy" },
      { title: "Legal", body: "Policy overview and public scope.", href: "/legal" },
      { title: "Support", body: "Human route for site-operation questions.", href: "/support" },
    ],
  }),
  businessInformation: buildSimpleUtilityPage({
    eyebrow: "Business Information",
    title: "Business information should be",
    highlight: "direct.",
    description: "This page covers company identity, public business details, and the administrative facts readers may need.",
    sectionTitle: "Business information should not be buried in marketing copy.",
    sectionDescription: "The route should be practical, minimal, and easy to scan.",
    primaryTitle: "What belongs here",
    primaryDescription: "Readers use this page for entity details and public business context.",
    rows: [
      { title: "Company identity", body: "State the public business identity and core public contact routes." },
      { title: "Administrative details", body: "Keep statutory and administrative information easy to locate." },
      { title: "Related policy surfaces", body: "Link clearly to terms, privacy, and legal routes." },
    ],
    secondaryTitle: "Related company routes",
    secondaryDescription: "Business information should stay close to the rest of the company and legal structure.",
    links: [
      { title: "About", body: "Company and public product framing.", href: "/about" },
      { title: "Legal", body: "Policy overview and public communication boundaries.", href: "/legal" },
      { title: "Terms of Use", body: "Usage expectations for the public site.", href: "/terms-of-use" },
    ],
  }),
  support: buildSimpleUtilityPage({
    eyebrow: "Support",
    title: "Support should reduce",
    highlight: "ambiguity.",
    description: "Support exists for technical issues, operator questions, and route clarification when docs or product pages are not enough.",
    sectionTitle: "Support pages should map users to the correct help path.",
    sectionDescription: "The route should distinguish support, docs, and enterprise escalation clearly.",
    primaryTitle: "Where support fits",
    primaryDescription: "Support is for operational questions and technical help, not for every commercial or policy conversation.",
    rows: [
      { title: "Operator help", body: "Route CLI, platform, or workflow questions to support or docs." },
      { title: "Issue escalation", body: "Bug reports should preserve a traceable path through support or GitHub." },
      { title: "Commercial boundaries", body: "Deployment and contract scope should move to enterprise or Contact Sales." },
    ],
    secondaryTitle: "Useful routes before opening support",
    secondaryDescription: "Support works better when docs and product routes are still visible.",
    links: [
      { title: "Docs", body: "Operator guidance and reference material.", href: "https://docs.brik64.dev", external: true },
      { title: "Contact", body: "General human route.", href: "/contact" },
      { title: "GitHub", body: "Public issues and source repository.", href: "https://github.com/brik64/brik64/issues", external: true },
    ],
    ctaTitle: "Need the documentation route instead?",
    ctaDescription: "Open docs first when the issue is best solved by command or workflow reference.",
    ctaActions: [primary("Open docs", "https://docs.brik64.dev", true), secondary("Contact", "/contact")],
  }),
  communityGuides: buildSimpleUtilityPage({
    eyebrow: "Community Guides",
    title: "Community guidance should keep the",
    highlight: "operator path clear.",
    description: "Community Guides collect practical entrypoints without replacing the canonical docs or the product story.",
    sectionTitle: "Community material should extend the system, not fork it.",
    sectionDescription: "Explain how examples, guides, and public contributions connect back to the canonical workflow.",
    primaryTitle: "What community guides are for",
    primaryDescription: "Use the route for onboarding, examples, and public learning paths that remain aligned with the docs.",
    rows: [
      { title: "Practical examples", body: "Show applied workflows without inventing new semantics or new product surfaces." },
      { title: "Canonical alignment", body: "Community material should still route back to docs, CLI, and product pages." },
      { title: "Contribution posture", body: "Public contribution should preserve truth boundaries and naming discipline." },
    ],
    secondaryTitle: "Canonical routes behind community learning",
    secondaryDescription: "Community guides should never displace the authoritative references.",
    links: [
      { title: "Docs", body: "Canonical reference material.", href: "https://docs.brik64.dev", external: true },
      { title: "CLI", body: "The main operator path into the system.", href: "/cli" },
      { title: "GitHub", body: "Repository and issue tracker for public work.", href: "https://github.com/brik64", external: true },
    ],
  }),
  postgresqlTutorial: buildSimpleUtilityPage({
    eyebrow: "PostgreSQL Tutorial",
    title: "Database tutorials should still end in the",
    highlight: "formal route.",
    description: "The PostgreSQL tutorial route explains how database-oriented guidance fits into the bounded blueprint and migration story.",
    sectionTitle: "Tutorial pages should teach the workflow, not just a stack keyword.",
    sectionDescription: "The route should connect practical database work to the same review and migration model used elsewhere on the site.",
    primaryTitle: "What this tutorial route should communicate",
    primaryDescription: "Use it for operator guidance around database-facing workflows, migration, and bounded logic extraction.",
    rows: [
      { title: "Database-facing logic", body: "Tutorial material should show how database logic relates to the formal layer." },
      { title: "Migration fit", body: "Database-heavy codebases often matter most when teams are modernizing legacy systems." },
      { title: "Docs handoff", body: "Deep command and example material still belongs in canonical docs." },
    ],
    secondaryTitle: "Related routes",
    secondaryDescription: "Readers should be able to move from the tutorial route into docs and migration pages.",
    links: [
      { title: "Docs", body: "Reference documentation and examples.", href: "https://docs.brik64.dev", external: true },
      { title: "COBOL migration", body: "Legacy modernization and review workflows.", href: "/use-cases/cobol-migration" },
      { title: "CLI", body: "Operator path for lift, check, and publication.", href: "/cli" },
    ],
  }),
  startups: buildSimpleUtilityPage({
    eyebrow: "Startups",
    title: "Startups need a faster route into",
    highlight: "reviewable software.",
    description: "The startups route explains how small teams can enter BRIK64 without enterprise ceremony while staying aligned to the system.",
    sectionTitle: "Startup positioning should stay practical and system-led.",
    sectionDescription: "Show how smaller teams adopt the workflow without overselling scale they do not need yet.",
    primaryTitle: "Why startups might care",
    primaryDescription: "For smaller teams, the formal layer matters when velocity is high and review depth is limited.",
    rows: [
      { title: "Generated-code pressure", body: "Smaller teams feel AI-assisted coding speed before they can scale review discipline." },
      { title: "Migration and reuse", body: "Startups often need to evolve fast without rewriting trust from scratch every sprint." },
      { title: "Open entry path", body: "CLI and docs remain the cleanest way to adopt before deeper workflow expansion." },
    ],
    secondaryTitle: "Start here before deeper adoption",
    secondaryDescription: "The startup route should still point back to product and docs, not to a fake venture microsite.",
    links: [
      { title: "Pricing", body: "Open entry, team workflow, and enterprise route.", href: "/pricing" },
      { title: "CLI", body: "Start with the operator path.", href: "/cli" },
      { title: "Docs", body: "Reference material for installation and workflow.", href: "https://docs.brik64.dev", external: true },
    ],
  }),
} satisfies Partial<Record<SimpleUtilityKey, UtilityPageSpec>>);
