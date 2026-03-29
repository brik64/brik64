"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import {
  Cpu,
  Shield,
  ArrowRight,
  Zap,
  AlertTriangle,
  Lock,
  Terminal,
  CircuitBoard,
  BookOpen,
} from "lucide-react";

/* ── Architecture subsystems ── */

const architecture = [
  {
    title: "Monomer Gates",
    desc: "Dedicated silicon units for each canonical operation. Each unit is a hardwired combinational circuit with no firmware.",
  },
  {
    title: "Composition Router",
    desc: "Routes monomer calls according to composition laws: sequential, parallel, and conditional evaluation paths.",
  },
  {
    title: "Verification Unit",
    desc: "Coherence verification unit. Certifies that every policy circuit meets formal correctness criteria before it is loaded into the BPU.",
  },
];

/* ── Monomer families (high-level) ── */

const monomerFamilies = [
  { family: "Arithmetic", desc: "Core mathematical operations with saturating semantics" },
  { family: "Logic", desc: "Bitwise and boolean operations" },
  { family: "Memory", desc: "Safe memory access primitives" },
  { family: "Control", desc: "Flow control and branching" },
  { family: "I/O", desc: "Input/output channel operations" },
  { family: "String", desc: "Text processing primitives" },
  { family: "Crypto", desc: "Cryptographic building blocks" },
  { family: "System", desc: "Low-level system interaction" },
];

/* ── Policy examples ── */

const policyExamples = [
  {
    title: "Warehouse Robot",
    desc: "Zone boundaries, speed limits near humans, and restricted area enforcement. The robot physically cannot violate these constraints, regardless of what its AI model decides.",
  },
  {
    title: "Delivery Drone",
    desc: "Altitude ceilings, no-fly zone geofencing, and automatic return-to-base on low battery. Hardware-enforced limits that no software update can bypass.",
  },
  {
    title: "Surgical Robot Arm",
    desc: "Force limits and movement boundaries that cannot be overridden by any software. Critical zones enforce stricter constraints automatically.",
  },
];

/* ── Roadmap phases ── */

const roadmap = [
  {
    phase: "Phase 1 \u2014 Software",
    status: "NOW",
    desc: "Policy circuits compile to Rust, JavaScript, and Python guardrail modules. \u03a6_c = 1 verified by the formal proof checker.",
    cmd: "brikc compile --target rust policy.pcd",
  },
  {
    phase: "Phase 2 \u2014 FPGA",
    status: "12\u201318 months",
    desc: "Full BPU architecture on Xilinx Ultrascale+ FPGA. EVA Router and CMF Unit in synthesizable VHDL. Developer boards and server expansion cards.",
    cmd: null,
  },
  {
    phase: "Phase 3 \u2014 Silicon",
    status: "24\u201336 months",
    desc: "Tape-out as a dedicated ASIC. ARM-style IP licensing model. Target: AI accelerator cards, server CPUs, edge AI SoCs.",
    cmd: null,
  },
];

/* ── Tech specs ── */

const specs = [
  { param: "Operation families", value: "8 families" },
  { param: "Policy circuit max depth", value: "256 nodes" },
  { param: "Evaluation latency target", value: "< 1 \u00b5s (target, ASIC)" },
  { param: "PCIe interface", value: "Gen 5 x4" },
  { param: "Policy flash capacity", value: "256 circuits" },
  { param: "Hot-swap policy update", value: "Yes (CMF re-certifies)" },
  { param: "Side-channel resistance", value: "Constant-time evaluation" },
];

export default function BPUPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* Hero */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
                BPU &mdash; BRIK Processing Unit
              </span>
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                CONCEPT &mdash; ROADMAP TO SILICON
              </span>
            </div>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Hardware that <span className="text-[#00b8d4]">says no.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              A dedicated hardware coprocessor designed to evaluate Policy Circuits &mdash; PCD programs that produce
              either ALLOW or BLOCK &mdash; before any AI-generated action reaches the host system.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground italic">
              &ldquo;RLHF teaches an AI to prefer correct behavior. The BPU enforces boundaries in hardware.
              Software policies can be circumvented. Hardware gates cannot.&rdquo;
            </p>
          </div>
        </section>

        {/* Architecture */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] ARCHITECTURE
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Three subsystems. Fixed pipeline.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {architecture.map((a) => (
              <div key={a.title} className="border border-border bg-muted/20 p-6">
                <Cpu className="mb-3 h-5 w-5 text-teal" />
                <p className="text-sm font-bold">{a.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>

          {/* Monomer families */}
          <div className="mt-8 overflow-hidden border border-border">
            <div className="grid grid-cols-2 gap-0 border-b border-border bg-muted/30 px-4 py-2.5 text-xs font-medium text-muted-foreground">
              <div>Family</div>
              <div>Description</div>
            </div>
            {monomerFamilies.map((f) => (
              <div key={f.family} className="grid grid-cols-2 gap-0 border-b border-border px-4 py-2.5 last:border-b-0">
                <div className="text-xs font-medium">{f.family}</div>
                <div className="text-xs text-muted-foreground">{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* BLOCK Signal */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] THE NON-MASKABLE BLOCK
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            No software can override hardware.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="border border-red-500/20 bg-red-500/[0.03] p-6">
              <AlertTriangle className="mb-3 h-5 w-5 text-red-400" />
              <h3 className="text-sm font-bold text-red-400">Software Guardrails</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                RLHF, Constitutional AI, output filters &mdash; all operate in the same execution context
                as the AI model. A sufficiently capable model can find adversarial routes around these checks.
                If it runs as software on the same CPU, it can be disabled.
              </p>
            </div>
            <div className="rounded-md border border-teal/30 bg-teal/[0.03] p-6">
              <Shield className="mb-3 h-5 w-5 text-teal" />
              <h3 className="text-sm font-bold text-teal">Hardware Enforcement</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                The BPU sits on the PCIe bus between the AI accelerator and the host I/O subsystem.
                A BLOCK terminates the PCIe transaction at the hardware level. No interrupt handler,
                no signal, no exception. The AI process never learns the block happened.
              </p>
            </div>
            <div className="border border-border bg-muted/20 p-6">
              <Lock className="mb-3 h-5 w-5 text-muted-foreground" />
              <h3 className="text-sm font-bold">Threat Model</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Protects against: compromised, jailbroken, or misaligned AI models.
                Does NOT protect against: compromised host OS or malicious human with physical access.
                Guards the boundary between AI actions and the systems they target.
              </p>
            </div>
          </div>
        </section>

        {/* AI Safety */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [03] POLICY CIRCUITS
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            AI safety by physics, not psychology.
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed">
            A Policy Circuit takes an action descriptor, evaluates it against certified constraints, and returns
            exactly ALLOW or BLOCK. <PhiC /> = 1 means every possible input maps deterministically to one of two terminal states.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {policyExamples.map((ex) => (
              <div key={ex.title} className="flex flex-col overflow-hidden border border-border">
                <div className="bg-muted/30 px-4 py-5">
                  <Shield className="mb-3 h-5 w-5 text-teal" />
                  <p className="text-sm font-medium">{ex.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{ex.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [04] ROADMAP
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            From software to silicon
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {roadmap.map((r) => (
              <div key={r.phase} className="border border-border bg-muted/20 p-6">
                <div className="flex items-center gap-3">
                  <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                    r.status === "NOW"
                      ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                      : "border border-border bg-muted/30 text-muted-foreground"
                  }`}>
                    {r.status}
                  </span>
                  <h3 className="text-sm font-bold">{r.phase}</h3>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{r.desc}</p>
                {r.cmd && (
                  <div className="mt-3 bg-[#0a0e14] px-4 py-2.5">
                    <code className="font-mono text-xs text-emerald-400">
                      <span className="text-teal">$</span> {r.cmd}
                    </code>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Regulatory trajectory */}
          <div className="mt-8 border border-border bg-muted/20 p-6">
            <p className="text-sm font-medium">Regulatory trajectory</p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { phase: "Concept & software prototype", timing: "Now", analogy: "ABS optional (1978)" },
                { phase: "FPGA validation", timing: "12\u201318 months", analogy: "ABS standard equipment" },
                { phase: "Silicon target", timing: "24\u201336 months", analogy: "ABS mandatory (2004)" },
              ].map((r) => (
                <div key={r.phase} className="text-center">
                  <p className="text-xs font-bold text-teal">{r.phase}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{r.timing}</p>
                  <p className="mt-1 text-[10px] italic text-muted-foreground">{r.analogy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Specs */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [05] SPECIFICATIONS
          </p>
          <div className="overflow-hidden border border-border">
            {specs.map((s) => (
              <div key={s.param} className="flex items-center justify-between border-b border-border px-4 py-3 last:border-b-0">
                <span className="text-xs text-muted-foreground">{s.param}</span>
                <span className="font-mono text-xs font-medium text-teal">{s.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Use Phase 1 today.
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            Policy circuits already compile to software guardrails. Start writing and certifying policy circuits
            now &mdash; the hardware will catch up.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://docs.brik64.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              <BookOpen className="h-4 w-4" /> Policy Circuit Docs
            </a>
            <a
              href="/pcd"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              Learn PCD <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
