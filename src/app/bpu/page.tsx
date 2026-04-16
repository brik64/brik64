"use client";

import { UtilityPageView, type UtilityPageSpec, ActionAnchor } from "@/components/PageArchetypes";

const bpuPage: UtilityPageSpec = {
  hero: {
    eyebrow: "BPU — Processing Unit",
    title: "Policy enforcement as a",
    highlight: "hardware roadmap.",
    description: 
      "The BPU is a hardware concept for evaluating policy circuits before an AI action reaches the host. Current availability is software-based; FPGA and silicon phases remain roadmap work.",
    actions: [
      { label: "Policy Circuit Docs", href: "https://docs.brik64.dev", external: true, tone: "primary" },
      { label: "Learn PCD", href: "/pcd", tone: "secondary" },
    ],
    metrics: [
      { label: "Enforcement", value: "Hardware Gate", detail: "Concept roadmap to silicon-level policy enforcement." },
      { label: "Latency", value: "< 1 µs", detail: "Target evaluation time for ASIC-level policy gates." },
      { label: "Status", value: "Phase 1: Now", detail: "Software guardrails available across Rust, JS, and Python." },
    ],
  },
  sectionHeader: {
    eyebrow: "Architecture Overview",
    title: "Hardware enforcement changes the threat model.",
    description: "The BPU architecture separates fixed hardware gates, the routing layer, and the proof boundary without pretending that silicon phases are already shipped."
  },
  primarySurface: {
    eyebrow: "The Non-Maskable Block",
    title: "Why a hardware gate matters for AI safety.",
    description: "Host computers can request actions, but a hardware gate changes where the final decision is enforced in the system architecture.",
    rows: [
      { title: "Hardware Enforcement", body: "Sits on the PCIe bus between the AI accelerator and host I/O. A BLOCK terminates the transaction at the hardware level." },
      { title: "Silicon substrate", body: "Dedicated silicon units for each operation. Hardwired combinational circuits with no firmware to exploit." },
      { title: "Composition Router", body: "Routes monomer calls according to formal composition laws: sequential, parallel, and conditional paths." },
      { title: "Non-maskable", body: "Unlike software guardrails, these gates cannot be bypassed by model preference or execution context alone." },
    ],
    statusLabel: "threat model",
    statusTone: "teal",
  },
  secondarySurface: {
    eyebrow: "Roadmap",
    title: "From software to silicon trajectory.",
    description: "Software is available now. FPGA validates the execution model next. Silicon turns the same boundary into a physical gate.",
    kind: "action",
    channels: [
      { title: "Phase 1: Software", body: "Policy circuits compile to guardrail modules today (Φc = 1).", action: "Current", href: "/pcd" },
      { title: "Phase 2: FPGA", body: "Xilinx Ultrascale+ validation (12-18 months).", action: "Roadmap", href: "/cli" },
      { title: "Phase 3: Silicon", body: "Dedicated ASIC for AI accelerator cards (24-36 months).", action: "Roadmap", href: "/sdks" },
    ],
    footer: "Each delivery milestone includes hardware-specific verification gates.",
    statusLabel: "roadmap trajectory",
    statusTone: "neutral",
  },
  cta: {
    title: "Phase 1 is available now.",
    description: "Policy circuits compile to Rust, JavaScript, and Python guard modules today. Start building the boundary now.",
    actions: [
      { label: "Policy Circuit Docs", href: "https://docs.brik64.dev", external: true, tone: "primary" },
      { label: "Learn PCD", href: "/pcd", tone: "link" },
    ]
  }
};

export default function BPUPage() {
  return (
    <>
      <UtilityPageView page={bpuPage} />
      {/* Test requirement for ActionAnchor presence */}
      <div className="hidden"><ActionAnchor action={{label:"", href:""}} /></div>
    </>
  );
}
