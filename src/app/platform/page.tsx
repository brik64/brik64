import { UtilityPageView, type UtilityPageSpec } from "@/components/PageArchetypes";

const platformPage: UtilityPageSpec = {
  hero: {
    eyebrow: "Product",
    title: "Platform is where bounded blueprints become",
    highlight: "governed packages.",
    backgroundImageSrc: "/generated/platform-hero-bg.png",
    description:
      "Workspace state, registry rows, publication flow, and package identity stay attached to the same canonical blueprint instead of fragmenting across tools.",
    actions: [
      { label: "Open registry", href: "/registry", tone: "primary" },
      { label: "Read docs", href: "https://docs.brik64.dev", tone: "secondary", external: true },
    ],
    metrics: [
      {
        label: "Operating surface",
        value: "Workspace + registry",
        detail: "Product state and publication posture remain visible together.",
      },
      {
        label: "Publication path",
        value: "Lift → model → publish",
        detail: "The same canonical blueprint carries review, target, and package identity.",
      },
      {
        label: "Reuse model",
        value: "Governed rows",
        detail: "Teams reuse reviewed logic without losing provenance or closure context.",
      },
    ],
  },
  sectionHeader: {
    eyebrow: "Platform Workbench",
    title: "The product layer stays legible because the formal layer stays attached.",
    description:
      "BRIK64 Platform is not a loose feature bundle. It is the operating surface where canonical blueprints, registry rows, and publication flow read as one governed system.",
  },
  primarySurface: {
    eyebrow: "Platform Jobs",
    title: "Four jobs define the product surface.",
    description:
      "The platform page should explain the operating model, not just enumerate capabilities.",
    rows: [
      {
        title: "Workspace library",
        body: "Keep private blueprints, versions, and review state organized by project instead of scattering them across unrelated tools.",
      },
      {
        title: "Registry rows",
        body: "Search reusable packages with closure state, hashes, and publication posture still attached.",
      },
      {
        title: "Publication path",
        body: "Publication, PR review, and package identity stay aligned to the same canonical blueprint.",
      },
      {
        title: "Governed reuse",
        body: "Teams reuse reviewed logic without losing provenance, boundary notes, or package state.",
      },
    ],
    footer:
      "The platform remains useful because package identity, proof posture, and operator flow stay visible at the same time.",
    statusLabel: "product operating layer",
    statusTone: "teal",
  },
  secondarySurface: {
    eyebrow: "Entry Paths",
    title: "Move through registry, CLI, or foundations without losing system form.",
    description:
      "The top-level platform page routes into the main operating paths instead of restating every subsystem in one place.",
    kind: "action",
    channels: [
      {
        title: "Registry",
        body: "Inspect package rows, hashes, visibility, and publication posture.",
        action: "Open registry",
        href: "/registry",
      },
      {
        title: "CLI",
        body: "Start from lift, compile, and publication commands without leaving the bounded toolchain.",
        action: "Open CLI",
        href: "/cli",
      },
      {
        title: "Foundations",
        body: "Trace the product surface back to Digital Circuitality, EVA composition, and PCD.",
        action: "Read foundations",
        href: "/foundations",
      },
    ],
    footer:
      "The platform is a governed front door into the formal layer, not a replacement for the formal layer.",
    statusLabel: "routed entry points",
    statusTone: "neutral",
  },
  cta: {
    title: "Use the platform as the front door, not the explanation layer.",
    description:
      "The home and product pages confirm what BRIK64 is. Deeper pages and docs carry the extended model, compiler flow, and formal rationale.",
    actions: [
      { label: "Open platform", href: "/registry", tone: "primary" },
      { label: "Read docs", href: "https://docs.brik64.dev", tone: "secondary", external: true },
    ],
  },
};

export default function PlatformPage() {
  return <UtilityPageView page={platformPage} />;
}
