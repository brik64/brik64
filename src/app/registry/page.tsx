"use client";

import { UtilityPageView, type UtilityPageSpec } from "@/components/PageArchetypes";

const registryPage: UtilityPageSpec = {
  hero: {
    eyebrow: "Component Registry",
    title: "Bounded blueprints with",
    highlight: "verifiable state.",
    backgroundImageSrc: "/generated/registry-hero-bg.png",
    description: "The Brik64 Registry is an evidence-backed ledger of computational closure. It maintains immutable fingerprints, boundary notes, and formal certification states for every Monomer and Blueprint.",
    actions: [
      { label: "Search Registry", href: "https://registry.brik64.com", external: true, tone: "primary" },
      { label: "CLI Reference", href: "/cli", tone: "secondary" },
    ],
    metrics: [
      { label: "Identity", value: "SHA-256", detail: "Immutable binding between PCD source and binary targets." },
      { label: "Integrity", value: "State Ledger", detail: "Real-time tracking of proof posture vs. artifact consumption." },
      { label: "Closure", value: "ΦC = 1", detail: "Explicit marking of fully closed and verified computational circuits." },
    ],
  },
  sectionHeader: {
    eyebrow: "Registry Protocol",
    title: "Integrity is not assumed. It is measured.",
    description: "Every artifact in the registry carries its own diagnostic history and verification state, making trust a calculable property rather than a vendor promise."
  },
  primarySurface: {
    eyebrow: "Verification States",
    title: "Formal semantics for safe reuse.",
    description: "We replace 'latest' with 'verified'. Registry badges expose the actual proof posture of a component, ensuring consumers understand the exact boundary of trust.",
    rows: [
      { title: "CERTIFIED", body: "Fully closed proof state (ΦC = 1). The modeled circuit meets all formal constraints.", note: "PhiC = 1" },
      { title: "VERIFIED", body: "Partially bounded logic with explicit boundary notes and attached diagnostics.", note: "Bounded" },
      { title: "REJECTED", body: "Evidence mismatch or failed constraints. Re-use blocked by platform policy.", note: "Unsafe" },
    ],
    statusLabel: "evidence-backed states",
    statusTone: "teal",
  },
  secondarySurface: {
    eyebrow: "PCD Lifecycle",
    title: "The path to production-ready logic.",
    description: "Moving from candidate code to a certified registry artifact requires a strict sequence of formal gates.",
    kind: "action",
    channels: [
      { title: "01. Lift & Check", body: "Transform source to PCD and run brikc diagnostic circuits.", action: "PCD Spec", href: "/pcd" },
      { title: "02. Certify", body: "Execute formal solvers to establish ΦC = 1 or bounded verification state.", action: "Solver Docs", href: "/docs" },
      { title: "03. Distribute", body: "Publish with attached evidence to the global discovery ledger.", action: "Search Registry", href: "https://registry.brik64.com", external: true },
    ],
    footer: "Every state transition requires an explicit proof update.",
    statusLabel: "certified loop",
    statusTone: "neutral",
  },
  cta: {
    title: "Scale your verified circuits.",
    description: "Check one bounded workflow and publish with its formal status visible to the entire network.",
    actions: [
      { label: "Install CLI", href: "/cli", tone: "primary" },
      { label: "Platform Overview", href: "/platform", tone: "link" },
    ]
  }
};

export default function RegistryPage() {
  return <UtilityPageView page={registryPage} />;
}
