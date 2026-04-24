"use client";

import { UtilityPageView, type UtilityPageSpec } from "@/components/PageArchetypes";

const cliPage: UtilityPageSpec = {
  hero: {
    eyebrow: "CLI",
    title: "Lift, check, emit, and publish from one",
    highlight: "bounded CLI chain.",
    backgroundImageSrc: "/generated/cli-hero-bg.png",
    description: "Use brikc locally, then hand artifacts into Platform governance.",
    actions: [
      { label: "Open docs", href: "https://docs.brik64.dev", tone: "primary", external: true },
      { label: "PCD", href: "/pcd", tone: "secondary" },
    ],
    metrics: [
      { label: "Entry command", value: "brikc", detail: "Local development, CI checks, publication flow." },
      { label: "Core loop", value: "lift → check → emit", detail: "Extraction stays tied to blueprint validation." },
      { label: "Integration", value: "local + platform", detail: "Outputs hand off to registry workflows." },
    ],
  },
  sectionHeader: {
    eyebrow: "Tooling Guide",
    title: "Install once, then run the verification sequence.",
    description: "Each stage emits a concrete review artifact."
  },
  primarySurface: {
    eyebrow: "Command Model",
    title: "Source code to reusable package state.",
    description: "Commands follow one lifecycle: lift, check, emit, publish.",
    rows: [
      { title: "Lift", body: "Turn source into a blueprint." },
      { title: "Check", body: "Run closure and domain analysis.", note: "verification gate" },
      { title: "Emit", body: "Generate targets from the blueprint." },
      { title: "Publish", body: "Move packages into registry workflows." },
    ],
    statusLabel: "verification loop",
    statusTone: "teal",
    footer: (
      <div className="mt-4 overflow-hidden rounded-2xl border border-white/5 bg-black/40 px-4 py-3">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-white/40">Quickstart sequence</p>
        <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-xs leading-relaxed text-white/80">
          <code>{`$ brikc lift src/ --to pcd\n$ brikc check dist/project.pcd\n$ brikc certify dist/project.pcd\n$ brikc registry publish dist/project.pcd`}</code>
        </pre>
      </div>
    ),
  },
  secondarySurface: {
    eyebrow: "Operator Loop",
    title: "Move through lift, check, and publish.",
    description: "The CLI order stays explicit across local and Platform use.",
    rows: [
      { title: "01. Start locally", body: "Begin from source or PCD." },
      { title: "02. Model", body: "Make computation explicit." },
      { title: "03. Check and emit", body: "Run closure checks." },
      { title: "04. Publish", body: "Hand off to registry or CI." },
    ],
    statusLabel: "operator loop",
    statusTone: "neutral",
  },
  cta: {
    title: "Install binaries — securely.",
    description: "CLI produces bounded artifacts; team governance lives in Platform.",
    actions: [
      { label: "Installation details", href: "https://docs.brik64.dev", external: true, tone: "primary" },
      { label: "Go to Overview", href: "/features", tone: "link" },
    ]
  }
};

export default function CLIPage() {
  return <UtilityPageView page={cliPage} />;
}
