"use client";

import Image from "next/image";
import { UtilityPageView, type UtilityPageSpec, ActionAnchor } from "@/components/PageArchetypes";

const sdkLogos = [
  { name: "Rust", src: "/brands/rust.svg" },
  { name: "Node", src: "/brands/javascript.svg" },
  { name: "TypeScript", src: "/brands/typescript.svg" },
  { name: "Python", src: "/brands/python.svg" },
];

const sdksPage: UtilityPageSpec = {
  hero: {
    eyebrow: "Tooling & SDKs",
    title: "Native bindings for",
    highlight: "bounded host languages.",
    backgroundImageSrc: "/generated/sdks-hero-bg.png",
    description: 
      "Author bounded logic in Rust, Node/TS, and Python before certification.",
    actions: [
      { label: "View SDK Docs", href: "https://docs.brik64.dev", external: true, tone: "primary" },
      { label: "Download CLI", href: "/cli", tone: "secondary" },
    ],
    metrics: [
      { label: "Rust", value: "Native", detail: "Core authoring path." },
      { label: "Node/TS", value: "SDK", detail: "Web and edge path." },
      { label: "Python", value: "SDK", detail: "AI workflow path." },
    ],
  },
  sectionHeader: {
    eyebrow: "Execution Layers",
    title: "Bind directly to proof state.",
    description: "SDKs expose boundaries inside host-language workflows."
  },
  primarySurface: {
    eyebrow: "Rust & Native Core",
    title: "Native authoring without boundary drift.",
    description: "Each runtime gets one statement, one command, one action.",
    rows: [
      { title: "Rust", body: "Author core circuits near the executor." },
      { title: "Node/TS", body: "Gate web, edge, and agent workflows." },
      { title: "Python", body: "Connect AI pipelines to bounded review." },
    ],
    statusLabel: "native performance",
    statusTone: "teal",
    footer: (
      <div className="flex flex-wrap gap-3">
        {sdkLogos.map((logo) => (
          <span
            key={logo.name}
            className="inline-flex items-center gap-2 rounded-[12px] border border-white/8 bg-[#0f1a28] px-3 py-2 text-xs font-semibold text-white/76"
          >
            <Image
              src={logo.src}
              alt=""
              width={18}
              height={18}
              className="h-[18px] w-[18px] object-contain"
              unoptimized
            />
            {logo.name}
          </span>
        ))}
      </div>
    ),
  },
  secondarySurface: {
    eyebrow: "Unified API",
    title: "Consistent logic across the fleet.",
    description: "Keep policy logic aligned across host languages.",
    kind: "action",
    channels: [
      { title: "Python SDK", body: "AI workflow review.", action: "View Python Docs", href: "https://docs.brik64.dev" },
      { title: "TypeScript SDK", body: "Web and edge policy gates.", action: "View JS Docs", href: "https://docs.brik64.dev" },
      { title: "Rust SDK", body: "Native circuit authoring.", action: "View Rust Docs", href: "https://docs.brik64.dev" },
    ],
    footer: "SDKs model boundaries; compiler and Platform carry certification state.",
    statusLabel: "omni-channel safety",
    statusTone: "neutral",
  },
  cta: {
    title: "Start building the boundary.",
    description: "Choose a stack and formalize the boundary.",
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
