"use client";

import { UtilityPageView, type UtilityPageSpec } from "@/components/PageArchetypes";

const cliPage: UtilityPageSpec = {
  hero: {
    eyebrow: "CLI",
    title: "Entry point into the",
    highlight: "formal layer.",
    backgroundImageSrc: "/generated/cli-hero-bg.png",
    description: "Use brikc to lift source logic into PCD, check closure and domains, emit supported targets, and publish reusable packages without losing review state.",
    actions: [
      { label: "Open docs", href: "https://docs.brik64.dev", tone: "primary", external: true },
      { label: "PCD", href: "/pcd", tone: "secondary" },
    ],
    metrics: [
      { label: "Entry command", value: "brikc", detail: "The same binary drives local development, CI checks, and publication flow." },
      { label: "Core loop", value: "lift → model → check", detail: "The sequence stays explicit from source extraction to blueprint validation." },
      { label: "Integration", value: "local + CI + platform", detail: "CLI outputs can be handed to platform and registry workflows without changing semantics." },
    ],
  },
  sectionHeader: {
    eyebrow: "Tooling Guide",
    title: "Install once, then run the verification sequence.",
    description: "Each CLI stage maps to a technical output so teams can adopt the same flow in local and CI contexts."
  },
  primarySurface: {
    eyebrow: "Command Model",
    title: "From source code to reusable package state.",
    description: "Commands are grouped by lifecycle stage: lift, model, check, emit, and publish.",
    rows: [
      { title: "Lift", body: "Interpret existing source into a bounded blueprint before deeper review or emission." },
      { title: "Check", body: "Run closure and domain analysis before the blueprint is trusted or shared.", note: "verification gate" },
      { title: "Emit", body: "Generate supported targets and review state from the same bounded blueprint." },
      { title: "Publish", body: "Move the reviewed package into registry or wider platform workflows." },
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
    description: "The execution order used across CLI, platform, and registry handoff stays explicit and inspectable.",
    rows: [
      { title: "01. Start locally", body: "Install or open docs, then begin from real source or a fresh blueprint." },
      { title: "02. Model the blueprint", body: "Lift or write PCD so the computation becomes explicit and inspectable." },
      { title: "03. Check and emit", body: "Run closure and evidence steps before the package is shared." },
      { title: "04. Publish", body: "Move the result into registry, IDE, CI, or enterprise review flows." },
    ],
    statusLabel: "operator loop",
    statusTone: "neutral",
  },
  cta: {
    title: "Install binaries — securely.",
    description: "Add the toolchain command line to access bounded verification natively. Trust comes from showing the boundary clearly.",
    actions: [
      { label: "Installation details", href: "https://docs.brik64.dev", external: true, tone: "primary" },
      { label: "Go to Overview", href: "/", tone: "link" },
    ]
  }
};

export default function CLIPage() {
  return <UtilityPageView page={cliPage} />;
}
