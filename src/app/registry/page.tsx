"use client";

import { UtilityPageView, type UtilityPageSpec } from "@/components/PageArchetypes";

const registryPage: UtilityPageSpec = {
  hero: {
    eyebrow: "Component Registry",
    title: "Reusable packages with",
    highlight: "visible blueprint state.",
    backgroundImageSrc: "/generated/registry-hero-bg.png",
    description: "Registry is the reusable layer of the formal system: package identity, closure state, boundary notes, hashes, and invalidation semantics stay visible when teams discover or publish logic.",
    actions: [
      { label: "Search Registry", href: "https://registry.brik64.com", external: true, tone: "primary" },
      { label: "CLI Reference", href: "/cli", tone: "secondary" },
    ],
    metrics: [
      { label: "Identity", value: "Verified hashes", detail: "Every package is tied to an immutable SHA-256 fingerprint." },
      { label: "Status", value: "Live validation", detail: "Certification badges invalidate instantly if code drifts from proof." },
      { label: "Visibility", value: "Boundary notes", detail: "Reviewers see exactly what is Core and what is Extended." },
    ],
  },
  sectionHeader: {
    eyebrow: "Registry Integrity",
    title: "Packages stay legible. Proof state stays attached.",
    description: "Certified packages carry Φc = 1 through publication. Every byte counts toward maintaining the system's formal integrity."
  },
  primarySurface: {
    eyebrow: "Certification States",
    title: "Clear semantics for trust and review.",
    description: "The registry makes the internal state of every circuit explicit to the consumer.",
    rows: [
      { title: "CERTIFIED", body: "Closed proof state and immutable hashes. Every input path is verified to produce correct output or explicit rejection.", note: "PhiC = 1" },
      { title: "OPEN", body: "Contract-bounded packages with visible metadata. Core where specified, contracted at the boundary.", note: "Partial" },
      { title: "INVALID", body: "Hash mismatch detected. The code has been modified after certification, breaking the trust surface.", note: "Action Required" },
    ],
    statusLabel: "integrity badges",
    statusTone: "teal",
  },
  secondarySurface: {
    eyebrow: "Publishing Workflow",
    title: "From local certification to global discovery.",
    description: "Move through the four stages of the verified publishing loop.",
    kind: "action",
    channels: [
      { title: "01. Write & Certify", body: "Write your PCD circuit and run brikc check to verify Φc = 1.", action: "PCD Format", href: "/pcd" },
      { title: "02. Publish", body: "Push to the public or private registry using the CLI toolchain.", action: "CLI Tooling", href: "/cli" },
      { title: "03. Discover", body: "Others search and install your circuit with full certification proof.", action: "Registry", href: "https://registry.brik64.com", external: true },
    ],
    footer: "The badge is a live endpoint — if the code changes, the badge turns red instantly.",
    statusLabel: "verified loop",
    statusTone: "neutral",
  },
  cta: {
    title: "Scale your verified circuits.",
    description: "Install the CLI, check one bounded workflow, and publish to the registry with status and package identity still visible.",
    actions: [
      { label: "Install CLI", href: "/cli", tone: "primary" },
      { label: "Platform Overview", href: "/platform", tone: "link" },
    ]
  }
};

export default function RegistryPage() {
  return <UtilityPageView page={registryPage} />;
}
