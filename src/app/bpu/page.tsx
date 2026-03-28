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
    title: "64 Monomer Gates",
    desc: "One dedicated silicon unit per canonical monomer (MC_00 through MC_63). Each unit is a hardwired combinational circuit with no firmware.",
  },
  {
    title: "EVA Router",
    desc: "Routes monomer calls according to EVA algebra composition laws: sequential (\u2297), parallel (\u2225), and conditional (\u2295).",
  },
  {
    title: "TCE Unit",
    desc: "Coherence Metric Framework unit. Certifies that \u03a6_c = 1 for every policy circuit before it is loaded into the BPU.",
  },
];

/* ── Monomer families ── */

const monomerFamilies = [
  { family: "Arithmetic", range: "MC_00\u2013MC_07", ops: "ADD8, SUB8, MUL8, DIV8, MOD8, ABS8, NEG8, POW8" },
  { family: "Logic", range: "MC_08\u2013MC_15", ops: "AND, OR, XOR, NOT, SHL, SHR, ROTL, ROTR" },
  { family: "Memory", range: "MC_16\u2013MC_23", ops: "LOAD, STORE, ALLOC, FREE, COPY, MOVE, SWAP, ZERO" },
  { family: "Control", range: "MC_24\u2013MC_31", ops: "IF, LOOP, CALL, RET, JUMP, HALT, NOOP, YIELD" },
  { family: "I/O", range: "MC_32\u2013MC_39", ops: "READ, WRITE, OPEN, CLOSE, SEEK, FLUSH, STAT, SYNC" },
  { family: "String", range: "MC_40\u2013MC_47", ops: "CONCAT, SPLIT, SUBSTR, LEN, UPPER, LOWER, TRIM, MATCH" },
  { family: "Crypto", range: "MC_48\u2013MC_55", ops: "HASH, VERIFY, SIGN, ENCRYPT, DECRYPT, RAND, DERIVE, SEAL" },
  { family: "System", range: "MC_56\u2013MC_63", ops: "TIME, PID, WRITE_FD, DEC2, SEND, RECV, LOG, ASSERT" },
];

/* ── Policy examples ── */

const policyExamples = [
  {
    title: "Warehouse Robot",
    desc: "A robot must never leave its zone, exceed safe speeds near humans, or access restricted areas.",
    code: `policy warehouse_movement(zone_id: i64, speed: i64, area_type: i64) -> decision {
  if (zone_id < 1) { return BLOCK; }
  if (zone_id > 50) { return BLOCK; }
  // Speed limit near humans
  if (area_type == 2) {
    if (speed > 3) { return BLOCK; }
  }
  // Restricted areas
  if (area_type == 9) { return BLOCK; }
  return ALLOW;
}`,
  },
  {
    title: "Delivery Drone",
    desc: "Altitude limits, no-fly zones, and return-to-base conditions enforced by hardware.",
    code: `policy drone_flight(altitude: i64, lat_zone: i64, battery_pct: i64) -> decision {
  // FAA altitude ceiling
  if (altitude > 400) { return BLOCK; }
  // No-fly zones (100-199)
  if (lat_zone > 99) {
    if (lat_zone < 200) { return BLOCK; }
  }
  // Force return when battery critical
  if (battery_pct < 15) { return BLOCK; }
  return ALLOW;
}`,
  },
  {
    title: "Surgical Robot Arm",
    desc: "Force limits and movement boundaries that cannot be overridden by any software.",
    code: `policy surgical_movement(force_n: i64, distance_mm: i64, zone: i64) -> decision {
  // Maximum force (Newtons * 10)
  if (force_n > 50) { return BLOCK; }
  // Movement boundary
  if (distance_mm > 200) { return BLOCK; }
  // Critical zone: reduced force
  if (zone == 1) {
    if (force_n > 20) { return BLOCK; }
  }
  return ALLOW;
}`,
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
  { param: "Monomer count", value: "64 (Core only)" },
  { param: "Policy circuit max depth", value: "256 nodes" },
  { param: "Evaluation latency target", value: "< 1 \u00b5s (ASIC)" },
  { param: "PCIe interface", value: "Gen 5 x4" },
  { param: "Policy flash capacity", value: "256 circuits" },
  { param: "Hot-swap policy update", value: "Yes (CMF re-certifies)" },
  { param: "Side-channel resistance", value: "Constant-time evaluation" },
];

export default function BPUPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="border-border mx-auto max-w-7xl border-x px-6 pt-20 pb-16 md:px-12 lg:px-18">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-muted-foreground inline-block rounded-full border border-border bg-background/80 px-3.5 py-1 text-xs font-medium tracking-wide">
              BPU &mdash; BRIK Processing Unit
            </span>
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
              CONCEPT &mdash; ROADMAP TO SILICON
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Hardware that <span className="text-teal">says no.</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
            A dedicated hardware coprocessor designed to evaluate Policy Circuits &mdash; PCD programs that produce
            either ALLOW or BLOCK &mdash; before any AI-generated action reaches the host system.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground italic">
            &ldquo;RLHF teaches an AI to want to do right. The BPU prevents it from doing wrong.
            Education fails. Physics does not.&rdquo;
          </p>
        </section>

        {/* Architecture */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] ARCHITECTURE
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Three subsystems. Fixed pipeline.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {architecture.map((a) => (
              <div key={a.title} className="rounded-lg border border-border bg-muted/20 p-6">
                <Cpu className="mb-3 h-5 w-5 text-teal" />
                <p className="text-sm font-bold">{a.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>

          {/* Monomer families table */}
          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            <div className="grid grid-cols-3 gap-0 border-b border-border bg-muted/30 px-4 py-2.5 text-xs font-medium text-muted-foreground">
              <div>Family</div>
              <div>Range</div>
              <div>Operations</div>
            </div>
            {monomerFamilies.map((f) => (
              <div key={f.family} className="grid grid-cols-3 gap-0 border-b border-border px-4 py-2.5 last:border-b-0">
                <div className="text-xs font-medium">{f.family}</div>
                <div className="font-mono text-xs text-teal">{f.range}</div>
                <div className="text-xs text-muted-foreground">{f.ops}</div>
              </div>
            ))}
          </div>
        </section>

        {/* BLOCK Signal */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] THE NON-MASKABLE BLOCK
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            No software can override hardware.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-red-500/20 bg-red-500/[0.03] p-6">
              <AlertTriangle className="mb-3 h-5 w-5 text-red-400" />
              <h3 className="text-sm font-bold text-red-400">Software Guardrails</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                RLHF, Constitutional AI, output filters &mdash; all operate in the same execution context
                as the AI model. A sufficiently capable model can find adversarial routes around these checks.
                If it runs as software on the same CPU, it can be disabled.
              </p>
            </div>
            <div className="rounded-lg border border-teal/30 bg-teal/[0.03] p-6">
              <Shield className="mb-3 h-5 w-5 text-teal" />
              <h3 className="text-sm font-bold text-teal">Hardware Enforcement</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                The BPU sits on the PCIe bus between the AI accelerator and the host I/O subsystem.
                A BLOCK terminates the PCIe transaction at the hardware level. No interrupt handler,
                no signal, no exception. The AI process never learns the block happened.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-muted/20 p-6">
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
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [03] POLICY CIRCUITS
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            AI safety by physics, not psychology.
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-relaxed">
            A Policy Circuit takes an action descriptor, evaluates it against certified constraints, and returns
            exactly ALLOW or BLOCK. <PhiC /> = 1 means every possible input maps deterministically to one of two terminal states.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {policyExamples.map((ex) => (
              <div key={ex.title} className="flex flex-col overflow-hidden rounded-xl border border-border">
                <div className="border-b border-border bg-muted/30 px-4 py-3">
                  <p className="text-sm font-medium">{ex.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{ex.desc}</p>
                </div>
                <div className="flex-1 bg-[#0a0e14] p-4">
                  <pre className="overflow-x-auto text-[11px] leading-relaxed text-gray-300">
                    <code>{ex.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [04] ROADMAP
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            From software to silicon
          </h2>
          <div className="mt-8 space-y-4">
            {roadmap.map((r) => (
              <div key={r.phase} className="rounded-lg border border-border bg-muted/20 p-6">
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
                  <div className="mt-3 rounded-lg bg-[#0a0e14] px-4 py-2.5">
                    <code className="font-mono text-xs text-emerald-400">
                      <span className="text-teal">$</span> {r.cmd}
                    </code>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Regulatory trajectory */}
          <div className="mt-8 rounded-lg border border-border bg-muted/20 p-6">
            <p className="text-sm font-medium">Regulatory trajectory</p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { phase: "Voluntary adoption", timing: "Now", analogy: "ABS optional (1978)" },
                { phase: "Industry standard", timing: "2\u20133 years", analogy: "ABS standard equipment" },
                { phase: "Regulatory mandate", timing: "5\u201310 years", analogy: "ABS mandatory (2004)" },
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
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [05] SPECIFICATIONS
          </p>
          <div className="overflow-hidden rounded-xl border border-border">
            {specs.map((s) => (
              <div key={s.param} className="flex items-center justify-between border-b border-border px-4 py-3 last:border-b-0">
                <span className="text-xs text-muted-foreground">{s.param}</span>
                <span className="font-mono text-xs font-medium text-teal">{s.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
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
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
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
