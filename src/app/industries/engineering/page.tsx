import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { Wrench, Activity, Radio, Cog, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";


export const metadata = {
  title: "Engineering & Infrastructure — BRIK64 Industries",
  description:
    "Bridges have load calculations. Buildings have structural analysis. Software has hope. BRIK64 brings mathematical verification to SCADA, PLC, and industrial control systems.",
};

const useCases = [
  {
    icon: Wrench,
    title: "PLC Logic Verification",
    description:
      "Every PLC program in every factory, power plant, and water treatment facility is a control loop running without formal proof. BRIK64 lifts ladder logic and structured text to PCD circuits — and the compiler proves your safety interlocks actually interlock.",
  },
  {
    icon: Activity,
    title: "SCADA Protocol Validation",
    description:
      "Modbus, DNP3, IEC 61850 — industrial protocols that control the power grid, water supply, and gas pipelines. BRIK64 verifies that every protocol handler stays within domain bounds. A pressure reading outside physical limits doesn't just trigger an alarm — it cannot exist.",
  },
  {
    icon: Radio,
    title: "Safety Instrumented Systems (SIS)",
    description:
      "SIL 1 through SIL 4 require proof that safety functions perform on demand. BRIK64 generates that proof automatically. Your emergency shutdown circuit doesn't just pass functional tests — it carries mathematical certification that every failure mode is handled.",
  },
  {
    icon: Cog,
    title: "Control Loop Bounds Verification",
    description:
      "A PID controller with unbounded integral windup destroyed a $200M satellite. A valve that opened 2% too far caused the Bhopal disaster. BRIK64 constrains every control output to its physical domain. The compiler rejects configurations that can exceed safe operating limits.",
  },
];

const standards = [
  "IEC 61508 — Functional Safety: SIL verification evidence for E/E/PE safety-related systems",
  "IEC 61511 — Process Industry Safety: safety instrumented function proof for chemical, oil & gas plants",
  "ISA/IEC 62443 — Industrial Cybersecurity: verified processing logic for IACS components",
  "IEC 61131-3 — Programmable Controllers: formal verification of structured text and function blocks",
  "IEEE 603 — Nuclear Safety: mathematical proof of safety system logic for nuclear power plants",
];

export default function EngineeringIndustryPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        {/* ── Hero ── */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white relative overflow-hidden">
          <HeroWireframeClient />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              Engineering &amp; Infrastructure
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Bridges have load calculations. Buildings have structural analysis.{" "}
              <span className="text-[#00b8d4]">Software has... hope. Not anymore.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              The software controlling your power grid, water treatment plant, and gas pipeline has
              never been formally verified. Every SCADA system, every PLC program, every safety
              interlock runs on testing and prayer. BRIK64 replaces prayer with proof.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Verify your control systems <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://docs.brik64.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Read the docs <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl border-x border-border">
          {/* ── The Challenge ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              The Challenge
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              When infrastructure software fails, people die
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "SCADA/ICS vulnerabilities",
                  desc: "80% of critical infrastructure facilities have experienced a cybersecurity incident in the past two years. The Colonial Pipeline attack shut down fuel supply to the entire U.S. East Coast. These systems were designed for isolated networks in the 1980s — now they're connected to the internet with software that has never been formally verified.",
                },
                {
                  title: "Control loop failures",
                  desc: "The Therac-25 killed patients with radiation overdoses because of a software race condition. The Bhopal disaster killed thousands partly due to a safety system that failed to engage. Every day, millions of PID controllers, safety interlocks, and emergency shutdowns run without mathematical proof of correctness.",
                },
                {
                  title: "IEC 61508 compliance burden",
                  desc: "Achieving SIL 3 certification costs $2-5 million per system and takes 18-24 months of manual documentation. Companies spend more proving their software is safe than building it. And after all that, the proof is still based on testing — not mathematical verification.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-border bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── How BRIK64 Helps ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              How BRIK64 Helps
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Every valve, every sensor, every interlock — mathematically proven
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {useCases.map((uc) => (
                <div key={uc.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#00b8d4]/10">
                    <uc.icon className="h-6 w-6 text-[#00b8d4]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {uc.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {uc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Policy Circuit Example ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Policy Circuit Example
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Structural stress analysis — the compiler rejects unsafe designs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              This circuit doesn't just calculate stress — it enforces AISC safety factors at the
              compiler level. A design that exceeds allowable stress doesn't produce a warning.
              It produces a compilation error. The unsafe design literally cannot be built.
            </p>
            <CopyableCode title="structural_stress.pcd">{`// Structural Stress Analysis — Safety-Factor Enforced
// Φ_c = 1 — no calculation proceeds without material limit verification

circuit stress_analysis {
  // Material properties (steel A36)
  const yield_strength : Float64 = 250e6   // 250 MPa
  const safety_factor  : Float64 = 1.67    // AISC standard

  // Input domains
  input force       : Float64[0.0 .. 1e9]       // Newtons
  input area        : Float64[1e-6 .. 1e4]      // m², always positive
  input moment      : Float64[0.0 .. 1e12]      // N·m
  input distance    : Float64[0.0 .. 100.0]     // m from neutral axis
  input inertia     : Float64[1e-12 .. 1e6]     // m⁴, always positive

  // Stress calculations
  let axial_stress   = force / area
  let bending_stress = moment * distance / inertia
  let total_stress   = axial_stress + bending_stress

  // Allowable stress with safety factor
  let allowable = yield_strength / safety_factor

  assert total_stress <= allowable
    | reject("Design exceeds allowable stress — increase section")

  assert area > 0.0 && inertia > 0.0
    | invariant("Cross-section properties must be positive")

  output result : {
    sigma_axial:   axial_stress,
    sigma_bending: bending_stress,
    sigma_total:   total_stress,
    sigma_allow:   allowable,
    utilization:   total_stress / allowable
  }
}`}</CopyableCode>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
              Force, area, moment — all physically bounded. Safety factor enforced by the compiler, not the engineer's memory.{" "}
              <PhiC /> = 1 — a design that exceeds material limits is not a warning. It is a compile-time impossibility.
            </p>
          </section>

          {/* ── Standards ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Compliance &amp; Standards
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Compliance by construction, not documentation
            </h2>
            <ul className="mx-auto mt-8 max-w-2xl space-y-3">
              {standards.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00b8d4]" />
                  <span className="text-sm text-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── CTA ── */}
          <section className="bg-background px-6 py-24 text-center lg:px-16">
            <h2 className="mx-auto text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Infrastructure that proves itself safe
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Every calculation proven. Every control loop bounded. Every safety interlock
              mathematically certified. Software as rigorous as the engineering it serves.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Verify your control systems <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://docs.brik64.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Read the docs <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </section>
        </div>
      </div>

      </main>
      <div className="relative z-10">

        <Footer />

      </div>
    </>
  );
}
