import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { Wrench, Activity, Radio, Cog, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Engineering — BRIK-64 Industries",
  description:
    "Certified components. Verified compositions. Structural analysis verification, control systems, and simulation certification with BRIK-64.",
};

const useCases = [
  {
    icon: Wrench,
    title: "Structural Analysis Verification",
    description:
      "Stress calculations, load analysis, and material fatigue models — all with domain constraints that enforce safety factors. The compiler rejects designs that exceed material limits.",
  },
  {
    icon: Activity,
    title: "Control Systems Certification",
    description:
      "PID controllers, feedback loops, and state machines formally verified. Every control path is bounded, every transition is proven, every output is constrained.",
  },
  {
    icon: Radio,
    title: "Signal Processing",
    description:
      "DSP algorithms with verified frequency bounds, amplitude constraints, and sampling rate enforcement. No signal can exceed its physical domain.",
  },
  {
    icon: Cog,
    title: "Simulation Certification",
    description:
      "Certify your FEA, CFD, and multiphysics simulations. Domain constraints ensure no simulation step produces physically impossible states.",
  },
];

const standards = [
  "IEC 61508 — Functional Safety of E/E/PE systems",
  "ISO 9001 — Quality Management Systems",
  "IEC 61131 — Programmable Controllers",
  "IEEE 603 — Nuclear Power Plant Safety Systems",
  "ASME V&V — Verification and Validation in Computational Modeling",
];

export default function EngineeringIndustryPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        {/* ── Hero ── */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              Engineering
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Certified components.{" "}
              <span className="text-[#00b8d4]">Verified compositions.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Engineering software has informal testing. Critical infrastructure runs on hope.
              BRIK-64 brings mathematical verification to every calculation, every controller,
              every simulation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Build verified engineering software <ArrowRight className="h-4 w-4" />
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
              Engineering software runs on trust, not proof
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Informal testing",
                  desc: "Structural calculations are verified by spot-checking outputs. A missed edge case in a bridge design tool could be catastrophic.",
                },
                {
                  title: "Composition gaps",
                  desc: "Individual components pass tests, but their composition is untested. A verified motor controller connected to an unverified sensor is a liability.",
                },
                {
                  title: "Standards overhead",
                  desc: "IEC 61508 compliance requires extensive documentation of verification. Manual processes create bottlenecks and cost millions per year.",
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

          {/* ── How BRIK-64 Helps ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              How BRIK-64 Helps
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Mathematical certainty for critical systems
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
              Stress calculation with safety factors
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              This circuit calculates structural stress with domain constraints that enforce
              material limits and safety factors. If stress exceeds yield strength, the
              circuit rejects the design.
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
              Force, area, moment — all physically bounded. Safety factor enforced by the compiler.{" "}
              <PhiC /> = 1 — the circuit is mathematically complete: every input path produces a verified output or an explicit rejection.
            </p>
          </section>

          {/* ── Standards ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Compliance &amp; Standards
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Standards compliance by construction
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
              Start building verified engineering software
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Build verified engineering software. Every calculation proven. Every component
              certified. Every composition mathematically verified.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Build verified engineering software <ArrowRight className="h-4 w-4" />
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
