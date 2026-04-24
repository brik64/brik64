"use client";

import { UtilityPageView, type UtilityPageSpec } from "@/components/PageArchetypes";

const registryPage: UtilityPageSpec = {
  hero: {
    eyebrow: "Component Registry",
    title: "Reusable packages with",
    highlight: "visible blueprint state.",
    backgroundImageSrc: "/generated/registry-hero-bg.png",
    description: "Registry keeps package identity, closure state, boundary notes, and hashes visible.",
    actions: [
      { label: "Search Registry", href: "https://registry.brik64.com", external: true, tone: "primary" },
      { label: "CLI Reference", href: "/cli", tone: "secondary" },
    ],
    metrics: [
      { label: "Identity", value: "Verified hashes", detail: "Packages are tied to SHA-256 fingerprints." },
      { label: "Status", value: "Validation state", detail: "Badges show whether package state still matches evidence." },
      { label: "Visibility", value: "Boundary notes", detail: "Reviewers see exactly what is Core and what is Extended." },
    ],
  },
  sectionHeader: {
    eyebrow: "Registry Integrity",
    title: "Packages stay legible. Proof state stays attached.",
    description: "Publication keeps package identity and proof posture attached."
  },
  primarySurface: {
    eyebrow: "Certification States",
    title: "Clear semantics for trust and review.",
    description: "Registry state stays explicit to consumers.",
    rows: [
      { title: "CERTIFIED", body: "Closed proof state with immutable hashes.", note: "PhiC = 1" },
      { title: "OPEN", body: "Contract-bounded package with visible metadata.", note: "Partial" },
      { title: "INVALID", body: "Hash mismatch requires review before reuse.", note: "Action Required" },
    ],
    statusLabel: "integrity badges",
    statusTone: "teal",
  },
  secondarySurface: {
    eyebrow: "Publishing Workflow",
    title: "From local certification to global discovery.",
    description: "Move through the publishing loop without losing state.",
    kind: "action",
    channels: [
      { title: "01. Write & check", body: "Write PCD and run brikc checks.", action: "PCD Format", href: "/pcd" },
      { title: "02. Publish", body: "Push packages through the CLI toolchain.", action: "CLI Tooling", href: "/cli" },
      { title: "03. Discover", body: "Search packages with evidence state visible.", action: "Registry", href: "https://registry.brik64.com", external: true },
    ],
    footer: "Badges expose state changes that require review.",
    statusLabel: "verified loop",
    statusTone: "neutral",
  },
  cta: {
    title: "Scale your verified circuits.",
    description: "Check one bounded workflow and publish with status visible.",
    actions: [
      { label: "Install CLI", href: "/cli", tone: "primary" },
      { label: "Platform Overview", href: "/platform", tone: "link" },
    ]
  }
};

export default function RegistryPage() {
  return <UtilityPageView page={registryPage} />;
}
