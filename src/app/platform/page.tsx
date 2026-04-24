import { UtilityPageView, type UtilityPageSpec } from "@/components/PageArchetypes";

const platformPage: UtilityPageSpec = {
  hero: {
    eyebrow: "Product",
    title: "Platform is where bounded blueprints become",
    highlight: "governed packages.",
    backgroundImageSrc: "/generated/platform-hero-bg.png",
    description:
      "Govern workspace state, registry rows, publication, and reuse from one blueprint.",
    actions: [
      { label: "Open registry", href: "/registry", tone: "primary" },
      { label: "Read docs", href: "https://docs.brik64.dev", tone: "secondary", external: true },
    ],
    metrics: [
      {
        label: "Operating surface",
        value: "Workspace + registry",
        detail: "Product state and publication posture stay attached.",
      },
      {
        label: "Publication path",
        value: "Lift → model → publish",
        detail: "Review state moves with package identity.",
      },
      {
        label: "Reuse model",
        value: "Governed rows",
        detail: "Reuse keeps provenance and closure context.",
      },
    ],
  },
  sectionHeader: {
    eyebrow: "Platform Workbench",
    title: "The product layer stays legible because the formal layer stays attached.",
    description:
      "Platform keeps blueprints, rows, and publication flow together.",
  },
  primarySurface: {
    eyebrow: "Platform Jobs",
    title: "Four jobs define the product surface.",
    description:
      "One operating model: state, rows, publication, reuse.",
    rows: [
      {
        title: "Workspace library",
        body: "Private blueprints, versions, and review state by project.",
      },
      {
        title: "Registry rows",
        body: "Packages keep closure state, hashes, and publication posture.",
      },
      {
        title: "Publication path",
        body: "Publication, PR review, and package identity stay aligned.",
      },
      {
        title: "Governed reuse",
        body: "Reuse reviewed logic with provenance and boundary notes.",
      },
    ],
    footer:
      "Boundary: Platform governs workflow; it does not replace certification programs.",
    statusLabel: "product operating layer",
    statusTone: "teal",
  },
  secondarySurface: {
    eyebrow: "Entry Paths",
    title: "Move through registry, CLI, or foundations without losing system form.",
    description:
      "Platform routes into the main product paths.",
    kind: "action",
    channels: [
      {
        title: "Registry",
        body: "Rows, hashes, visibility, publication posture.",
        action: "Open registry",
        href: "/registry",
      },
      {
        title: "CLI",
        body: "Lift, check, emit, publish.",
        action: "Open CLI",
        href: "/cli",
      },
      {
        title: "Foundations",
        body: "Trace Platform back to PCD.",
        action: "Read foundations",
        href: "/foundations",
      },
    ],
    footer:
      "Platform is the governed front door into the formal layer.",
    statusLabel: "routed entry points",
    statusTone: "neutral",
  },
  cta: {
    title: "Use the platform as the front door, not the explanation layer.",
    description:
      "Govern review, publication, and registry workflows.",
    actions: [
      { label: "Open platform", href: "/registry", tone: "primary" },
      { label: "Read docs", href: "https://docs.brik64.dev", tone: "secondary", external: true },
    ],
  },
};

export default function PlatformPage() {
  return <UtilityPageView page={platformPage} />;
}
