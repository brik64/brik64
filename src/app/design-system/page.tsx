import { UtilityPageView, type UtilityPageSpec } from "@/components/PageArchetypes";
import { DesignKitSection } from "@/components/DesignKitSection";

const designSystemPage: UtilityPageSpec = {
  hero: {
    eyebrow: "Design System",
    title: "The current site grammar is a family of bounded",
    highlight: "page archetypes.",
    description: "This internal design reference uses the same shell and cadence as the rest of the public site.",
    actions: [
      { label: "Read canon", href: "/docs", tone: "primary" },
      {
        label: "Repository docs",
        href: "https://github.com/brik64/brik64.com",
        tone: "secondary",
        external: true,
      },
    ],
  },
  sectionHeader: {
    eyebrow: "Design Kit",
    title: "The kit demonstrates the canonical surfaces and their allowed variations.",
    description: "It clarifies the living site grammar and avoids parallel visual languages.",
  },
  primarySurface: {
    eyebrow: "Archetypes",
    title: "Living site documentation",
    description: "The design system is implemented via the PageArchetypes component library.",
    rows: [
      { title: "CanonicalPageLayout", body: "The master shell containing Navbar and Footer." },
      { title: "UtilityPageView", body: "The standard product archetype for technical pages." },
      { title: "RiskPageView", body: "The specialized archetype for risk and evidence analysis." },
    ],
    footer: <DesignKitSection />,
    statusLabel: "system grammar",
    statusTone: "teal",
  },
  secondarySurface: {
    eyebrow: "Reference Rails",
    title: "The design system references point back to the governing docs.",
    description: "This surface makes the truth hierarchy explicit for anyone changing copy or visuals.",
    kind: "docs",
    links: [
      { title: "Design canon", body: "The active design-system document for the site.", href: "/docs" },
      { title: "Content scope", body: "Claim boundaries and truth-set guidance.", href: "https://github.com/brik64/brik64.com", external: true },
      { title: "Platform", body: "The strongest public example of the product grammar.", href: "/platform" },
    ],
    footer: "This design reference is part of the live system and remains consistent with the public routes it governs.",
    statusLabel: "reference rails",
    statusTone: "neutral",
  },
  cta: {
    title: "Maintain the system grammar",
    description: "Avoid inventing parallel visual languages. Use the established archetypes and primitives to ensure consistency across all public surfaces.",
    actions: [
      { label: "Back to home", href: "/", tone: "primary" },
      { label: "Open platform", href: "/platform", tone: "secondary" },
    ],
  },
};

export const metadata = {
  title: "Design System — BRIK64",
  description: "Internal and public-facing design system surface for the current BRIK64 site grammar.",
};

export default function DesignSystemPage() {
  return <UtilityPageView page={designSystemPage} />;
}
