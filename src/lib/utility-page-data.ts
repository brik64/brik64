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
      title: "We are building the public surface for",
      highlight: "verified software.",
      description:
        "The company page should explain the thesis, the proof posture, and the operator path without collapsing into manifesto copy.",
      actions: [primary("Read foundations", "/foundations"), secondary("Platform", "/platform")],
      metrics: [
        { label: "Core language", value: "PCD", detail: "The public narrative stays anchored to the formal description layer." },
        { label: "Composition", value: "EVA", detail: "Sequential, parallel, and conditional composition remain part of the public operating model." },
        { label: "Proof posture", value: "Qualified", detail: "Claims stay bounded by the evidence present in this repo." },
      ],
    },
    sectionHeader: {
      eyebrow: "Company Surface",
      title: "The company story now opens as a bounded thesis surface.",
      description:
        "Narrative remains important, but it should follow a structured object that clarifies what BRIK-64 is, what the site can prove, and how the public product surfaces connect.",
    },
    primarySurface: {
      eyebrow: "Company Thesis",
      title: "The public company object in one surface",
      description:
        "The site should describe BRIK-64 as a coherent system: a formal language, a compiler path, a platform surface, and a registry narrative.",
      thesis: true,
      metrics: [
        { label: "Public thesis", value: "Verified software", detail: "Positioning remains anchored to verification rather than general AI hype." },
        { label: "Operator path", value: "CLI → PCD → platform", detail: "The company page should reinforce the actual delivery path visible elsewhere on the site." },
        { label: "Truth boundary", value: "Repo-backed", detail: "The page distinguishes engineering evidence from broader market ambition." },
      ],
      rows: [
        { title: "Why this exists", body: "Software review and testing remain post-hoc. BRIK-64 argues for bounded computation and explicit composition earlier in the flow." },
        { title: "What is public today", body: "The website exposes foundations, product pages, SDK surfaces, registry language, and operator-oriented documentation paths." },
        { title: "What the page will not do", body: "It will not blur present product surfaces with unsupported customer, audit, or market-superiority claims." },
      ],
    },
    secondarySurface: {
      eyebrow: "Reading Paths",
      title: "Useful next steps from the company story",
      description:
        "Readers should leave this page with technical destinations, not just more prose.",
      kind: "docs",
      links: [
        { title: "Foundations", body: "Formal background and proof-adjacent framing.", href: "/foundations" },
        { title: "Platform", body: "The public product surface that turns the thesis into an inspectable workbench.", href: "/platform" },
        { title: "Documentation", body: "Command references, language guides, and operator material.", href: "https://docs.brik64.dev", external: true },
      ],
      footer:
        "The company page stays narrative, but it should still terminate in clear operator paths.",
    },
    cta: {
      title: "Follow the formal path through the product surfaces.",
      description:
        "Move from the thesis to the product evidence without changing design language or claim posture.",
      actions: [primary("Open platform", "/platform"), link("Read docs", "https://docs.brik64.dev", true)],
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Route the request to the right",
      highlight: "channel.",
      description:
        "General questions, enterprise evaluation, and support requests should be explicit service paths instead of three disconnected boxes.",
      actions: [primary("Email enterprise", "mailto:enterprise@brik64.com"), secondary("GitHub issues", "https://github.com/brik64/brik64/issues", true)],
      metrics: [
        { label: "General route", value: "hello@brik64.com", detail: "Product questions and initial contact." },
        { label: "Enterprise route", value: "enterprise@brik64.com", detail: "Deployment, compliance, and commercial evaluation." },
        { label: "Support route", value: "support@brik64.com", detail: "Operational issues and platform help." },
      ],
    },
    sectionHeader: {
      eyebrow: "Action Surface",
      title: "Contact becomes a service routing page instead of a card gallery.",
      description:
        "The page should make the support model legible before the user chooses a channel.",
    },
    primarySurface: {
      eyebrow: "Routing Rules",
      title: "Each route exists for a different class of request",
      description:
        "This page is not a generic inbox. It routes questions into channels that preserve traceability.",
      rows: [
        { title: "General inquiries", body: "Use the general route for product questions, public site clarifications, and initial conversations." },
        { title: "Enterprise evaluation", body: "Architecture review, deployment posture, compliance discussion, and commercial scope belong in the enterprise route." },
        { title: "Support and bugs", body: "Operational issues should go through support or GitHub so the evidence trail is preserved." },
      ],
      footer:
        "The page should reduce ambiguity before the user ever reaches a form or mailbox.",
    },
    secondarySurface: {
      eyebrow: "Channels",
      title: "Direct actions",
      description: "The contact channels themselves are rendered as a bounded action rail.",
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
        "External community links remain visible, but they no longer behave like random social cards.",
    },
    cta: {
      title: "Need a deeper technical route?",
      description:
        "Use the enterprise or docs path when the request is really about architecture or deployment posture, not generic contact.",
      actions: [primary("Architecture review", "mailto:enterprise@brik64.com"), link("Documentation", "https://docs.brik64.dev", true)],
    },
  },
  download: {
    hero: {
      eyebrow: "Download",
      title: "Delivery surfaces for the toolchain, not",
      highlight: "promo cards.",
      description:
        "The download page should make install paths, package scope, and support state explicit without introducing a parallel visual language.",
      actions: [primary("Install CLI", "https://docs.brik64.dev", true), secondary("SDKs", "/sdks")],
      metrics: [
        { label: "CLI posture", value: "Single entrypoint", detail: "The CLI remains the first operator path into the system." },
        { label: "Delivery modes", value: "CLI + SDK + platform", detail: "Each package surface carries a different operational scope." },
        { label: "Truth boundary", value: "Explicit", detail: "Unavailable artifacts are marked as roadmap or pending rather than implied as live." },
      ],
    },
    sectionHeader: {
      eyebrow: "Delivery Surface",
      title: "Downloads now read as install and packaging evidence.",
      description:
        "The page explains what is available now, what remains pending, and where each install path belongs.",
    },
    primarySurface: {
      eyebrow: "Current Delivery",
      title: "What an operator can actually install today",
      description:
        "The page should distinguish the active developer path from broader packaging surfaces.",
      rows: [
        { title: "CLI", body: "The primary route for compilation, lifting, checking, certification, and registry interaction." },
        { title: "SDKs", body: "Language-specific packages expose BRIK-64 patterns inside host ecosystems without pretending to replace the CLI." },
        { title: "Platform app", body: "Desktop or richer platform shells should be marked as scoped work, not implied as universally downloadable if they are not live yet." },
      ],
      footer:
        "Install paths should feel operational and bounded, not like a storefront of equal-weight binaries.",
    },
    secondarySurface: {
      eyebrow: "Reference Rails",
      title: "Where install guidance should send the reader next",
      description:
        "The download page should hand off to the right docs and product surfaces immediately.",
      kind: "docs",
      links: [
        { title: "CLI docs", body: "Install, command, and certification workflows.", href: "https://docs.brik64.dev", external: true },
        { title: "SDKs", body: "Language-specific package surfaces and examples.", href: "/sdks" },
        { title: "Platform", body: "The wider product surface that surrounds the toolchain.", href: "/platform" },
      ],
      footer:
        "A delivery page should route to the exact docs the operator needs instead of trapping them in feature cards.",
    },
    cta: {
      title: "Start from the documented install path.",
      description:
        "If the package is live, it should resolve to docs or product surfaces immediately. If it is not, the page should say so directly.",
      actions: [primary("Open docs", "https://docs.brik64.dev", true), link("View platform", "/platform")],
    },
  },
  pricing: {
    hero: {
      eyebrow: "Pricing",
      title: "Package the public surface without inventing",
      highlight: "commercial claims.",
      description:
        "Pricing should communicate scope and buyer intent, not imply unsupported billing or enterprise guarantees.",
      actions: [primary("Talk to enterprise", "mailto:enterprise@brik64.com"), secondary("Contact", "/contact")],
      metrics: [
        { label: "Open route", value: "CLI + docs", detail: "Developers can start from the public toolchain surfaces." },
        { label: "Team route", value: "Qualified", detail: "Shared libraries and workflow posture belong in a team-oriented surface." },
        { label: "Enterprise route", value: "Conversation", detail: "Commercial posture remains an evaluation path, not a promise of undocumented features." },
      ],
    },
    sectionHeader: {
      eyebrow: "Commercial Surface",
      title: "Pricing becomes a scoped packaging page.",
      description:
        "The page should communicate how buyers enter the system without fabricating unsupported commercial detail.",
    },
    primarySurface: {
      eyebrow: "Package Map",
      title: "Three routes through the public product surface",
      description:
        "The pricing page should separate what is openly available from what requires evaluation.",
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
      title: "Pricing should terminate in action, not in decorative plan cards.",
      description:
        "The goal is to move a buyer into the right conversation with the minimum possible ambiguity.",
      kind: "action",
      channels: [
        { title: "Developer path", body: "Go directly to docs, the CLI, and the product surfaces.", action: "Start free", href: "https://docs.brik64.dev", external: true },
        { title: "Team questions", body: "Use contact when the question is about workflow fit or operator adoption.", action: "Contact", href: "/contact" },
        { title: "Enterprise evaluation", body: "Route commercial and architecture review to the enterprise channel.", action: "enterprise@brik64.com", href: "mailto:enterprise@brik64.com" },
      ],
    },
    cta: {
      title: "Choose the right route, then verify the surface.",
      description:
        "The commercial page should always hand the user to a route that already exists somewhere else in the site.",
      actions: [primary("Enterprise contact", "mailto:enterprise@brik64.com"), link("Read platform", "/platform")],
    },
  },
  faq: {
    hero: {
      eyebrow: "FAQ",
      title: "Frequently asked questions should live in one",
      highlight: "bounded surface.",
      description:
        "This page should answer high-frequency questions without dropping into legacy accordions and card grids.",
      actions: [primary("Ask a question", "/contact"), secondary("Documentation", "https://docs.brik64.dev", true)],
    },
    sectionHeader: {
      eyebrow: "Utility Surface",
      title: "FAQ becomes a structured answer rail.",
      description:
        "The design priority is clarity and routing, not ornamental interaction.",
    },
    primarySurface: {
      eyebrow: "Common Questions",
      title: "The questions that appear most often on the public site",
      description:
        "A good FAQ narrows ambiguity and points back to the correct product surface.",
      rows: [
        { title: "Is BRIK-64 a language, a compiler, or a platform?", body: "Publicly, it is presented as a formal language and compiler path wrapped by broader platform and registry surfaces." },
        { title: "Do I need PCD to start?", body: "No. The public entry path can begin with CLI and SDK material, then move into PCD when formal structure matters." },
        { title: "Does the site claim full compliance or certification?", body: "No. Compliance language must stay scoped to evidence posture, bounded logic, and operator support surfaces." },
        { title: "Where should I go after this page?", body: "Docs, the platform page, or contact, depending on whether the question is technical, exploratory, or commercial." },
      ],
    },
    secondarySurface: {
      eyebrow: "Reference rails",
      title: "Useful routes when FAQ is not enough",
      description:
        "A bounded utility page should still resolve to specific technical destinations.",
      kind: "docs",
      links: [
        { title: "Documentation", body: "Reference material and command help.", href: "https://docs.brik64.dev", external: true },
        { title: "Platform", body: "The product surface that explains how the pieces combine.", href: "/platform" },
        { title: "Contact", body: "Route unresolved questions into the correct support or enterprise channel.", href: "/contact" },
      ],
    },
    cta: {
      title: "If the answer needs proof, move to the product surfaces.",
      description:
        "FAQ should clarify terminology and routing. Detailed evidence still belongs in the relevant product or risk pages.",
      actions: [primary("Open platform", "/platform"), link("Contact", "/contact")],
    },
  },
  legal: {
    hero: {
      eyebrow: "Legal",
      title: "A sober shell for policy, privacy, and public",
      highlight: "boundaries.",
      description:
        "Legal pages do not need product theatrics, but they should still belong to the same site system.",
      actions: [primary("Contact legal", "mailto:hello@brik64.com"), link("Privacy questions", "/contact")],
    },
    sectionHeader: {
      eyebrow: "Legal Surface",
      title: "Legal information should remain readable and explicitly scoped.",
      description:
        "The legal page keeps typography disciplined and uses the same visual shell as the rest of the site.",
    },
    primarySurface: {
      eyebrow: "Policy Scope",
      title: "What this page should cover",
      description:
        "The legal surface should focus on policy scope and communication boundaries, not mimic a product pitch.",
      rows: [
        { title: "Terms and acceptable use", body: "Explain the public website and any operator expectations without inventing product commitments." },
        { title: "Privacy posture", body: "Describe how contact, support, or docs interactions are handled to the extent that the repo documents them." },
        { title: "Brand and asset usage", body: "Refer back to the brand asset guidance when the page intersects with logo or trademark usage." },
      ],
    },
    secondarySurface: {
      eyebrow: "Reference material",
      title: "The legal page should point back to governing docs when needed.",
      description: "It remains sober, but not isolated from the rest of the site's truth set.",
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
      title: "Explain the company surface without pretending to publish",
      highlight: "financial proof.",
      description:
        "This page can state the thesis, the product architecture, and the category ambition. It should not fabricate traction numbers or market certainty.",
      actions: [primary("Company overview", "/about"), secondary("Enterprise contact", "mailto:enterprise@brik64.com")],
      metrics: [
        { label: "Category thesis", value: "Verified software", detail: "The site frames BRIK-64 as infrastructure for bounded, reusable computation." },
        { label: "Product moat narrative", value: "Registry + platform", detail: "The public surface repeatedly reinforces library, registry, and composition workflow." },
        { label: "Evidence posture", value: "Conservative", detail: "This page should avoid unsupported traction or customer claims." },
      ],
    },
    sectionHeader: {
      eyebrow: "Company Narrative",
      title: "Investor-facing copy should remain disciplined.",
      description:
        "The page can communicate thesis, architecture, and market frame without slipping into unsupported proof language.",
    },
    primarySurface: {
      eyebrow: "Investor Thesis",
      title: "What the public site is allowed to communicate",
      description:
        "This page should focus on category framing and system architecture rather than financial storytelling it cannot support.",
      thesis: true,
      metrics: [
        { label: "Why now", value: "AI + verification", detail: "The public story links AI-generated software growth to the need for bounded verification surfaces." },
        { label: "Why this form", value: "Platform + registry", detail: "The moat narrative comes from reusable verified components and workflow surfaces." },
        { label: "What remains off-limits", value: "Traction claims", detail: "No customer, revenue, or market-leadership numbers without evidence." },
      ],
      rows: [
        { title: "Category frame", body: "BRIK-64 is framed as infrastructure for verified software rather than a narrow compiler utility." },
        { title: "Architecture frame", body: "PCD, the compiler path, platform surfaces, and registry narrative remain the public system boundary." },
        { title: "Communication discipline", body: "Investor-facing copy cannot invent customer wins, audit status, or adoption numbers." },
      ],
    },
    secondarySurface: {
      eyebrow: "Useful reading paths",
      title: "The investor page should still resolve to technical evidence.",
      description:
        "When the page makes a systems argument, it should point the reader back to the relevant product and foundations pages.",
      kind: "docs",
      links: [
        { title: "Foundations", body: "Formal and conceptual background.", href: "/foundations" },
        { title: "Platform", body: "Product workbench and registry posture.", href: "/platform" },
        { title: "About", body: "The company narrative in bounded form.", href: "/about" },
      ],
    },
  },
  playground: {
    hero: {
      eyebrow: "Playground",
      title: "A technical utility surface for",
      highlight: "experimentation.",
      description:
        "The playground should be framed as a bounded environment for trying commands, flows, and examples, not as a separate product brand.",
      actions: [primary("Open CLI docs", "https://docs.brik64.dev", true), secondary("CLI", "/cli")],
    },
    sectionHeader: {
      eyebrow: "Utility Surface",
      title: "The playground should behave like an operator sandbox.",
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
      eyebrow: "Operator rails",
      title: "Useful routes around the sandbox",
      description:
        "A utility sandbox should still point outward to formal product surfaces.",
      kind: "docs",
      links: [
        { title: "CLI", body: "The canonical operator path for local work.", href: "/cli" },
        { title: "PCD", body: "Formal language surface and syntax workbench.", href: "/pcd" },
        { title: "Documentation", body: "Reference material beyond the sandbox.", href: "https://docs.brik64.dev", external: true },
      ],
    },
  },
  changelog: {
    hero: {
      eyebrow: "Changelog",
      title: "Release notes should read as an editorial utility, not a",
      highlight: "legacy feed.",
      description:
        "The changelog stays public, but it should be tied back to current product surfaces and source references.",
      actions: [primary("Latest releases", "/news"), secondary("Documentation", "https://docs.brik64.dev", true)],
    },
    sectionHeader: {
      eyebrow: "Editorial Utility",
      title: "The changelog is a release rail, not a disconnected archive.",
      description:
        "It should help the reader understand what changed and where to go next.",
    },
    primarySurface: {
      eyebrow: "Release Scope",
      title: "What the public changelog should communicate",
      description:
        "Release notes should remain factual, scoped, and linked to product surfaces or docs.",
      rows: [
        { title: "Current status", body: "Summarize meaningful public changes without creating a second design language for release notes." },
        { title: "Source of truth", body: "Link changes back to product pages, docs, or repo-backed artifacts wherever possible." },
        { title: "Historical framing", body: "Keep older milestones as history, but do not let them compete with the active product narrative." },
      ],
    },
    secondarySurface: {
      eyebrow: "Reading rails",
      title: "Release notes should connect to current public surfaces.",
      description:
        "This page should route a reader from change history into the relevant surface immediately.",
      kind: "docs",
      links: [
        { title: "News", body: "Editorial announcements and longer updates.", href: "/news" },
        { title: "Platform", body: "The product surface most readers should inspect after a release note.", href: "/platform" },
        { title: "Documentation", body: "Command and API details for the current state.", href: "https://docs.brik64.dev", external: true },
      ],
    },
  },
  shop: {
    hero: {
      eyebrow: "Shop",
      title: "Treat merchandise or support materials as a bounded",
      highlight: "brand surface.",
      description:
        "If the shop is not a full commerce experience, the page should say so directly and remain inside the site system.",
      actions: [primary("Brand assets", "/design-system"), secondary("Contact", "/contact")],
    },
    sectionHeader: {
      eyebrow: "Brand Utility",
      title: "The shop page should not behave like an unrelated storefront.",
      description:
        "It can communicate merchandise or support intent without inventing a separate visual grammar.",
    },
    primarySurface: {
      eyebrow: "Current scope",
      title: "What this page can responsibly communicate",
      description:
        "Treat the shop as a bounded brand-support surface unless and until it becomes a full commerce system.",
      rows: [
        { title: "Brand support items", body: "Merchandise, collateral, or limited-run assets can be described without pretending to be a full retail experience." },
        { title: "Canonical assets", body: "All brand usage should defer to the asset guidance already recorded in the repo." },
        { title: "Commercial clarity", body: "If the shop is not live, the page should say so instead of imitating an active checkout flow." },
      ],
    },
    secondarySurface: {
      eyebrow: "Reference rails",
      title: "Useful brand routes",
      description:
        "Readers should be able to move directly to the brand system or contact path.",
      kind: "docs",
      links: [
        { title: "Design system", body: "Visual language and reusable surfaces.", href: "/design-system" },
        { title: "Brand assets", body: "Canonical logo usage in the repository docs.", href: "https://github.com/brik64/brik64.com", external: true },
        { title: "Contact", body: "Route any partnership or brand questions to a human channel.", href: "/contact" },
      ],
    },
  },
  docs: {
    hero: {
      eyebrow: "Docs",
      title: "The docs route should act as a bridge into the",
      highlight: "reference system.",
      description:
        "Instead of a hard redirect, this page can explain where the documentation lives and how it connects to the public product surfaces.",
      actions: [primary("Open documentation", "https://docs.brik64.dev", true), secondary("CLI", "/cli")],
    },
    sectionHeader: {
      eyebrow: "Docs Rail",
      title: "This route should bridge reference material back to the product surfaces.",
      description:
        "The user should know where docs live, what they cover, and which public pages to use when they need more context.",
    },
    primarySurface: {
      eyebrow: "Documentation Scope",
      title: "What the reference system covers",
      description:
        "This page helps route the user into the right part of the documentation stack without pretending the docs are separate from the product narrative.",
      rows: [
        { title: "CLI and commands", body: "Use docs for install, command reference, and certification workflows." },
        { title: "Language guides", body: "SDKs, host language integrations, and examples belong in the documentation rail." },
        { title: "Platform references", body: "When docs intersect with platform or registry behavior, route back to the relevant product pages as needed." },
      ],
    },
    secondarySurface: {
      eyebrow: "Open these next",
      title: "Useful public routes around the docs",
      description:
        "Readers should be able to move between docs and public product surfaces without a visual reset.",
      kind: "docs",
      links: [
        { title: "Documentation", body: "Primary reference system.", href: "https://docs.brik64.dev", external: true },
        { title: "CLI", body: "The operator entrypoint that most docs readers will need.", href: "/cli" },
        { title: "PCD", body: "The formal language surface behind the reference material.", href: "/pcd" },
      ],
    },
  },
  login: {
    hero: {
      eyebrow: "Login",
      title: "Authentication pages should be minimal but still",
      highlight: "on-system.",
      description:
        "The login surface should communicate the route into the platform without spinning up a separate design language.",
      actions: [primary("Platform", "/platform"), link("Contact support", "/contact")],
    },
    sectionHeader: {
      eyebrow: "Auth Surface",
      title: "Login remains a bounded access page.",
      description:
        "It can be visually quiet while still following the same header cadence and surface rules.",
    },
    primarySurface: {
      eyebrow: "Access model",
      title: "What the login page should communicate",
      description:
        "This page is about access posture, support routing, and where the platform sits in the overall public flow.",
      rows: [
        { title: "Platform access", body: "Use login only as the bridge into authenticated platform work, not as a standalone marketing surface." },
        { title: "Support", body: "If the user cannot access the platform, route them into support or enterprise channels explicitly." },
        { title: "Public fallback", body: "Unauthenticated users should still be able to return to product and docs surfaces immediately." },
      ],
    },
    secondarySurface: {
      eyebrow: "Useful routes",
      title: "Do not trap users in auth dead ends.",
      description:
        "The login page should make recovery paths explicit.",
      kind: "action",
      channels: [
        { title: "Open platform narrative", body: "Return to the public product surface.", action: "Platform", href: "/platform" },
        { title: "Read docs", body: "Use docs if the user needs operator guidance before access.", action: "Docs", href: "https://docs.brik64.dev", external: true },
        { title: "Contact support", body: "Route login issues to the human channel.", action: "Support", href: "/contact" },
      ],
    },
  },
  signup: {
    hero: {
      eyebrow: "Signup",
      title: "Account creation should be framed as a route into the",
      highlight: "platform.",
      description:
        "The signup page stays minimal, but it still belongs to the same design system as the rest of the site.",
      actions: [primary("Platform", "/platform"), link("Enterprise contact", "mailto:enterprise@brik64.com")],
    },
    sectionHeader: {
      eyebrow: "Auth Surface",
      title: "Signup remains an access step, not a separate landing page.",
      description:
        "It should communicate who this route is for and how to get help.",
    },
    primarySurface: {
      eyebrow: "Access rules",
      title: "What signup should clarify",
      description:
        "This page should make it clear how a user enters the product flow and where they go when they need a deeper deployment conversation.",
      rows: [
        { title: "Developer entry", body: "Self-serve users should still be able to inspect product and docs surfaces before account creation." },
        { title: "Enterprise path", body: "Private registry or deployment conversations still belong in the enterprise route, not in generic signup messaging." },
        { title: "Support path", body: "Route access or account issues to the same contact and support surfaces used elsewhere." },
      ],
    },
    secondarySurface: {
      eyebrow: "Useful routes",
      title: "Help the user move to the right next surface.",
      description:
        "A signup page should terminate in clear product or support actions.",
      kind: "action",
      channels: [
        { title: "Read platform", body: "Go back to the public product surface before signing up.", action: "Platform", href: "/platform" },
        { title: "Open docs", body: "Reference material for users who are still evaluating the toolchain.", action: "Docs", href: "https://docs.brik64.dev", external: true },
        { title: "Enterprise evaluation", body: "Commercial or deployment questions belong in the enterprise route.", action: "enterprise@brik64.com", href: "mailto:enterprise@brik64.com" },
      ],
    },
  },
};
