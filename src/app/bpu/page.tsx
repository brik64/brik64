"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { MonomerFamilyBoard } from "@/components/MonomerArtifacts";
import { EvidenceSurface } from "@/components/PageArtifacts";
import {
  Cpu,
  Shield,
  ArrowRight,
  AlertTriangle,
  Lock,
  BookOpen,
} from "lucide-react";

import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

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

function BpuRoadmapRail() {
  return (
    <div className="mx-auto mt-8 max-w-5xl rounded-[1.9rem] border border-border/80 bg-gradient-to-br from-muted/35 via-background to-background p-5 shadow-[0_24px_70px_rgba(15,23,42,0.05)]">
      <div className="relative">
        <div className="absolute left-8 right-8 top-9 hidden h-px bg-gradient-to-r from-teal/20 via-teal/40 to-orange-400/30 md:block" />
        <div className="grid gap-4 md:grid-cols-3">
          {roadmap.map((r, index) => (
            <div key={r.phase} className="relative rounded-[1.6rem] border border-border/80 bg-background/90 p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-teal/20 bg-teal/[0.06] text-sm font-semibold text-teal">
                  {index + 1}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                    r.status === "NOW"
                      ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                      : r.phase.includes("Silicon")
                        ? "border border-orange-400/30 bg-orange-400/10 text-orange-300"
                        : "border border-border bg-muted/30 text-muted-foreground"
                  }`}
                >
                  {r.status}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">{r.phase}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              {r.cmd ? (
                <div className="mt-4 rounded-2xl border border-white/10 bg-[#0a0e14] px-4 py-3">
                  <code className="font-mono text-xs text-emerald-400">
                    <span className="text-teal">$</span> {r.cmd}
                  </code>
                </div>
              ) : (
                <div className="mt-4 rounded-2xl border border-border/70 bg-muted/25 px-4 py-3 text-xs text-muted-foreground">
                  Delivery milestone with hardware-specific verification gates.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-teal/15 bg-teal/[0.05] px-4 py-4 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-teal/80">Roadmap</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Software is available now. FPGA validates the execution model. Silicon turns the same policy boundary into a physical gate.
        </p>
      </div>
    </div>
  );
}

export default function BPUPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        {/* Hero */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white relative overflow-hidden">
          <HeroWireframe />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
                BPU &mdash; BRIK Processing Unit
              </span>
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                CONCEPT &mdash; ROADMAP TO SILICON
              </span>
            </div>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Policy enforcement as a <span className="text-teal">hardware roadmap.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              The BPU is a hardware concept for evaluating policy circuits before an AI action reaches the host. Current availability is software-based; FPGA and silicon phases remain roadmap work.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground italic">
              &ldquo;Software guardrails share execution context with the model they constrain. The BPU roadmap moves that gate outside the model&rsquo;s execution context.&rdquo;
            </p>
          </div>
        </section>

        {/* Architecture */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] ARCHITECTURE
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            The enforcement boundary at a glance.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            The architecture separates fixed hardware gates, the routing layer, and the proof boundary without pretending that the silicon phases are already shipped.
          </p>

          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
            {architecture.map((a) => (
              <div key={a.title} className="rounded-[1.5rem] border border-border/80 bg-gradient-to-br from-background to-muted/20 p-6 text-center shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
                <Cpu className="mx-auto mb-3 h-5 w-5 text-teal" />
                <p className="text-sm font-bold">{a.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6">
            <MonomerFamilyBoard />
            <EvidenceSurface
              eyebrow="Hardware Evidence"
              title="The hardware map stays explicit about what is enforced in silicon and what remains a bridge."
              description="The hardware roadmap distinguishes fixed silicon enforcement from contract-bounded bridges."
              items={[
                { label: "Certified core", body: "Core families map to the fixed teal substrate and preserve the proof boundary." },
                { label: "Extended bridges", body: "Orange bridges remain contract-bounded and never masquerade as the silicon core." },
                { label: "Threat model", body: "The non-maskable gate and roadmap stay explicit about what the concept protects and what remains outside scope." },
              ]}
            />
            <div className="mx-auto max-w-4xl overflow-hidden rounded-[1.75rem] border border-border/80 bg-background shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
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
          </div>
        </section>

        {/* BLOCK Signal */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] THE NON-MASKABLE BLOCK
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            Why a hardware gate changes the threat model
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            The host can request an action, but a hardware gate changes where the final decision is enforced in the system architecture.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-red-500/20 bg-red-500/[0.03] p-6 text-center">
              <AlertTriangle className="mb-3 h-5 w-5 text-red-400" />
              <h3 className="text-sm font-bold text-red-400">Software Guardrails</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                RLHF, Constitutional AI, output filters &mdash; all operate in the same execution context
                as the AI model. A sufficiently capable model can find adversarial routes around these checks.
                If it runs as software on the same CPU, it can be disabled.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-teal/30 bg-teal/[0.03] p-6 text-center shadow-[0_18px_50px_rgba(13,148,136,0.08)]">
              <Shield className="mx-auto mb-3 h-5 w-5 text-teal" />
              <h3 className="text-sm font-bold text-teal">Hardware Enforcement</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                The BPU sits on the PCIe bus between the AI accelerator and the host I/O subsystem.
                A BLOCK terminates the PCIe transaction at the hardware level. No interrupt handler,
                no signal, no exception. The roadmap goal is to enforce the policy before the host accepts the action.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-border bg-muted/20 p-6 text-center">
              <Lock className="mx-auto mb-3 h-5 w-5 text-muted-foreground" />
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
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            Policy circuits as an execution boundary
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed">
            A Policy Circuit takes an action descriptor, evaluates it against certified constraints, and returns
            exactly ALLOW or BLOCK. <PhiC /> = 1 means every possible input maps deterministically to one of two terminal states.
          </p>

          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
            {policyExamples.map((ex) => (
              <div key={ex.title} className="flex flex-col overflow-hidden rounded-[1.5rem] border border-border/80 bg-gradient-to-br from-background to-muted/20">
                <div className="px-5 py-6 text-center">
                  <Shield className="mx-auto mb-3 h-5 w-5 text-teal" />
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
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            From software to silicon
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            The roadmap separates what is available in software today, what gets validated on FPGA next, and what only becomes true at tape-out.
          </p>
          <BpuRoadmapRail />

          {/* Regulatory trajectory */}
          <div className="mx-auto mt-8 max-w-4xl rounded-[1.75rem] border border-border/80 bg-gradient-to-br from-background to-muted/20 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <p className="text-center text-sm font-medium">Regulatory trajectory</p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { phase: "Concept & software prototype", timing: "Now", analogy: "ABS optional (1978)" },
                { phase: "FPGA validation", timing: "12\u201318 months", analogy: "ABS standard equipment" },
                { phase: "Silicon target", timing: "24\u201336 months", analogy: "ABS mandatory (2004)" },
              ].map((r) => (
                <div key={r.phase} className="rounded-2xl border border-border/70 bg-background/80 px-4 py-4 text-center">
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
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            Target envelope
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            These are target constraints for the BPU roadmap. They define the concept envelope, not a claim that tape-out has already happened.
          </p>
          <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-[1.75rem] border border-border/80 bg-background shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
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
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            Phase 1 is available now.
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            Policy circuits compile to Rust, JavaScript, and Python guard modules today. FPGA and silicon remain roadmap phases that extend the same policy boundary into hardware.
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
      </div>

      </main>
      <div className="relative z-10">

        <Footer />

      </div>
    </>
  );
}
