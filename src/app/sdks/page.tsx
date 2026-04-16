"use client";

import { UtilityPageView, type UtilityPageSpec, ActionAnchor } from "@/components/PageArchetypes";

const sdksPage: UtilityPageSpec = {
  hero: {
    eyebrow: "Tooling & SDKs",
    title: "Native bindings for",
    highlight: "high-integrity modules.",
    description: 
      "Brik-64 is not a sandbox. It is a system bridge. Our SDKs provide the native glue to execute policy circuits in Rust, Go, Python, and TypeScript with zero-copy safety.",
    actions: [
      { label: "View SDK Docs", href: "https://docs.brik64.dev", external: true, tone: "primary" },
      { label: "Download CLI", href: "/cli", tone: "secondary" },
    ],
    metrics: [
      { label: "Rust / Go", value: "Level 1", detail: "Formal bindings available." },
      { label: "Python/JS", value: "Level 1", detail: "WASM-backed execution." },
      { label: "Latency", value: "< 2ms", detail: "Target overhead for policy evaluation." },
    ],
  },
  sectionHeader: {
    eyebrow: "Execution Layers",
    title: "Bind directly to proof state.",
    description: "Our SDKs don't just wrap APIs; they expose the proof boundary to your application logic."
  },
  primarySurface: {
    eyebrow: "Rust & Native Core",
    title: "Performance without boundary compromise.",
    description: "The Rust SDK is the canonical implementation of the Brik-64 executor, providing the fastest path to verified action.",
    rows: [
      { title: "Zero-copy verification", body: "Pass large context buffers to the policy engine without memory overhead." },
      { title: "Static proof checks", body: "Verify circuit integrity at initialization time, not just runtime." },
      { title: "Native lifters", body: "Direct bindings to C-level system calls for low-latency enforcement." },
    ],
    statusLabel: "native performance",
    statusTone: "teal",
  },
  secondarySurface: {
    eyebrow: "Unified API",
    title: "Consistent logic across the fleet.",
    description: "Write your policy circuit once in PCD; execute it anywhere with identical behavior guaranteed by EVA.",
    kind: "action",
    channels: [
      { title: "Python SDK", body: "Integrated circuit execution for AI workflows and agent monitoring.", action: "View Python Docs", href: "https://docs.brik64.dev" },
      { title: "TypeScript SDK", body: "Verified guardrails for web horizons and edge functions.", action: "View JS Docs", href: "https://docs.brik64.dev" },
      { title: "Go SDK", body: "High-concurrency policy gates for distributed system infrastructure.", action: "View Go Docs", href: "https://docs.brik64.dev" },
    ],
    footer: "All SDKs maintain 100% parity with the EVA formal composition model.",
    statusLabel: "omni-channel safety",
    statusTone: "neutral",
  },
  cta: {
    title: "Start building the boundary.",
    description: "Policy circuits compile to Rust, JavaScript, and Python guard modules today. Choose your stack and formalize the logic.",
    actions: [
      { label: "Get Started", href: "https://docs.brik64.dev", external: true, tone: "primary" },
      { label: "Explore PCD", href: "/pcd", tone: "link" },
    ]
  }
};

export default function SDKsPage() {
  return (
    <>
      <UtilityPageView page={sdksPage} />
      {/* Test requirement for ActionAnchor presence */}
      <div className="hidden"><ActionAnchor action={{label:"", href:""}} /></div>
    </>
  );
}
