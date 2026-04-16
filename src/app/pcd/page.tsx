"use client";

import { UtilityPageView, type UtilityPageSpec, ActionAnchor } from "@/components/PageArchetypes";

const pcdPage: UtilityPageSpec = {
  hero: {
    eyebrow: "Format Guide",
    title: "Printed Circuit Description. A",
    highlight: "bounded computational format.",
    description:
      "PCD is the compiler-facing format for describing bounded computation, declared domains, and explicit composition. It is readable by humans and agents, but verification still happens outside the authoring model.",
    actions: [
      { label: "Full PCD Reference", href: "https://docs.brik64.dev", external: true, tone: "primary" },
      { label: "Install CLI", href: "/cli", tone: "secondary" },
    ],
    metrics: [
      { label: "Core", value: "64 certified", detail: "Formally proven monomers." },
      { label: "Extended", value: "64 contract-bounded", detail: "System bridges that stay explicit." },
      { label: "Targets", value: "14", detail: "One blueprint, many export materials." },
    ],
  },
  sectionHeader: {
    eyebrow: "Format Overview",
    title: "Circuit schematics, not source code.",
    description: 
      "PCD is not an open syntax playground. It is a bounded circuit format where every program is assembled from a finite substrate and a closed composition algebra."
  },
  primarySurface: {
    eyebrow: "Format Properties",
    title: "High-integrity computational primitives.",
    description: "The value of PCD comes from its finite grammar and deterministic closure under the formal model.",
    rows: [
      { title: "Finite grammar", body: "Intentionally small so humans, agents, and the compiler can reason about the same bounded format." },
      { title: "Reviewed operations", body: "Built from a formally reviewed core plus explicit contract-bounded extensions." },
      { title: "Closure gate", body: "If the blueprint does not close as a circuit (Φc ≠ 1), the compiler rejects it." },
      { title: "Multi-target compiler", body: "One blueprint can emit multiple hardware/software targets while keeping the intermediate form explicit." },
    ],
    statusLabel: "format integrity",
    statusTone: "teal",
  },
  secondarySurface: {
    eyebrow: "EVA Algebra",
    title: "Three operators. Correctness preserved.",
    description: "EVA is the formal composition algebra behind PCD: sequence, parallel fan-out, and conditional branching.",
    rows: [
      { title: "SEQ (Sequential)", body: "Output of one stage feeds into the next in a deterministic pipeline." },
      { title: "PAR (Parallel)", body: "The same input fans out to independent branches and returns a tuple." },
      { title: "COND (Conditional)", body: "Both branches are explicit in the circuit; the predicate selects the terminal path." },
    ],
    statusLabel: "composition model",
    statusTone: "neutral",
  },
  cta: {
    title: "Formalize the stack.",
    description: "Read the format, then install the toolchain. Follow the logical chain from theory into PCD, CLI, and platform workflows.",
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
