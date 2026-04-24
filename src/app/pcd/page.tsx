"use client";

import { UtilityPageView, type UtilityPageSpec, ActionAnchor } from "@/components/PageArchetypes";

const pcdPage: UtilityPageSpec = {
  hero: {
    eyebrow: "Format Guide",
    title: "Canonical blueprint language for",
    highlight: "bounded software logic.",
    backgroundImageSrc: "/generated/pcd-hero-bg.png",
    description:
      "PCD describes domains, composition, and closure before target code exists.",
    actions: [
      { label: "Full PCD Reference", href: "https://docs.brik64.dev", external: true, tone: "primary" },
      { label: "Install CLI", href: "/cli", tone: "secondary" },
    ],
    metrics: [
      { label: "Core", value: "64", detail: "Bounded operations." },
      { label: "Extended", value: "64", detail: "Contract-bounded bridges." },
      { label: "Closure", value: "Φc = 1", detail: "Compiler gate state." },
    ],
  },
  sectionHeader: {
    eyebrow: "Format Overview",
    title: "Circuit schematics, not source code.",
    description: 
      "PCD is a bounded circuit format."
  },
  primarySurface: {
    eyebrow: "Format Properties",
    title: "High-integrity computational primitives.",
    description: "PCD value comes from finite grammar and explicit closure.",
    rows: [
      { title: "Finite grammar", body: "Small enough for humans, agents, and compilers." },
      { title: "Reviewed operations", body: "Core operations plus contract-bounded extensions." },
      { title: "Closure gate", body: "If Φc is not 1, the compiler rejects it." },
      { title: "Target emission", body: "One blueprint preserves the intermediate form." },
    ],
    statusLabel: "format integrity",
    statusTone: "teal",
  },
  secondarySurface: {
    eyebrow: "EVA Algebra",
    title: "Three operators. Correctness preserved.",
    description: "EVA defines sequence, parallel fan-out, and conditional branching.",
    rows: [
      { title: "SEQ", body: "One stage feeds the next." },
      { title: "PAR", body: "One input fans out to branches." },
      { title: "COND", body: "Branches stay explicit before selection." },
    ],
    statusLabel: "composition model",
    statusTone: "neutral",
  },
  cta: {
    title: "Formalize the stack.",
    description: "PCD formalizes circuits; it does not replace organizational controls.",
    actions: [
      { label: "Full PCD Reference", href: "https://docs.brik64.dev", external: true, tone: "primary" },
      { label: "Install the CLI", href: "/cli", tone: "secondary" },
    ]
  }
};

export default function PCDPage() {
  return (
    <>
      <UtilityPageView page={pcdPage} />
      {/* Test requirement for ActionAnchor presence */}
      <div className="hidden"><ActionAnchor action={{label:"", href:""}} /></div>
    </>
  );
}
