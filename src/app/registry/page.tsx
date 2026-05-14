"use client";

import { UtilityPageView, type UtilityPageSpec } from "@/components/PageArchetypes";

const registryPage: UtilityPageSpec = {
  hero: {
    eyebrow: "Component Registry",
    title: "Bounded blueprints with",
    highlight: "verifiable posture.",
    backgroundImageSrc: "/generated/registry-hero-bg.png",
    description: "The BRIK-64 Registry serves as a technical evidence ledger for computational closure. We maintain immutable digital signatures, boundary annotations, and formal certification states for every Monomer and Blueprint, ensuring that trust is a calculable technical property rather than a commercial promise.",
    actions: [
      { label: "Search Registry", href: "https://registry.brik64.com", external: true, tone: "primary" },
      { label: "CLI Reference", href: "/cli", tone: "secondary" },
    ],
    metrics: [
      { label: "Identity", value: "SHA-256", detail: "Immutable link between PCD source and binary targets." },
      { label: "Integrity", value: "State Ledger", detail: "Real-time tracking of proof posture across artifact consumption." },
      { label: "Closure", value: "ΦC = 1", detail: "Explicit marking of fully closed and verified computational circuits." },
    ],
  },
  sectionHeader: {
    eyebrow: "Registry Protocol",
    title: "Integrity is measured, not assumed.",
    description: "Every artifact in the registry carries its own diagnostic history and verification state, transforming trust into an auditable and reproducible property for every system operator."
  },
  primarySurface: {
    eyebrow: "Verification States",
    title: "Formal semantics for secure reuse.",
    description: "We replace the concept of 'latest version' with 'verified version'. Registry badges expose the actual proof posture of a component, enabling consumers to understand the exact boundaries of the trust perimeter.",
    rows: [
      { title: "CERTIFIED", body: "Full closure proof state (ΦC = 1). The modeled circuit satisfies all formal constraints.", note: "PhiC = 1" },
      { title: "VERIFIED", body: "Partially bounded logic with explicit boundary notes and attached diagnostics.", note: "Bounded" },
      { title: "REJECTED", body: "Evidence mismatch or constraint failure. Reuse blocked by platform policy.", note: "Unsafe" },
    ],
    statusLabel: "evidence-backed states",
    statusTone: "teal",
  },
  secondarySurface: {
    eyebrow: "PCD Lifecycle",
    title: "The path to production-ready logic.",
    description: "The transition from candidate code to a certified registry artifact requires a strict sequence of formal gateways and verifiable evidence.",
    kind: "action",
    channels: [
      { title: "01. Extraction and Check", body: "Transformation from source to PCD and execution of brikc diagnostic circuits.", action: "PCD Spec", href: "/pcd" },
      { title: "02. Certification", body: "Execution of formal solvers to establish ΦC = 1 or bounded verification state.", action: "Documentation", href: "/docs" },
      { title: "03. Distribution", body: "Publication with attached evidence in the global discovery ledger.", action: "Search Registry", href: "https://registry.brik64.com", external: true },
    ],
    footer: "Every state transition requires an explicit proof update.",
    statusLabel: "certified loop",
    statusTone: "neutral",
  },
  cta: {
    title: "Scale your verified circuits.",
    description: "Validate a bounded workflow and publish with its formal state visible to the entire network.",
    actions: [
      { label: "Install CLI", href: "/cli", tone: "primary" },
      { label: "Overview", href: "/platform", tone: "link" },
    ]
  }
};

export default function RegistryPage() {
  return <UtilityPageView page={registryPage} />;
}
