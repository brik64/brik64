import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { CopyableCode } from "@/components/CopyableCode";
import { Wrench, Activity, Radio, Cog, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";

export const metadata = {
  title: "Engineering — BRIK64 Industries",
  description:
    "A bridge doesn't fail gradually. A PID controller doesn't fail gracefully. BRIK64 makes engineering software as correct as the physics it models.",
};

const useCases = [
  {
    icon: Wrench,
    title: "Structural Analysis Verification",
    description:
      "Stress calculations, load analysis, material fatigue — all with domain constraints that enforce safety factors. Force divided by area. Moment times distance over inertia. Every formula is bounded, every output is constrained to physically possible values. A design that exceeds yield strength does not fail at runtime. It does not compile.",
  },
  {
    icon: Activity,
    title: "Control Systems Certification",
    description:
      "PID controllers, feedback loops, state machines. Every control path formally verified. Integral windup bounded. Output saturation enforced by the type system. The controller cannot command what the actuator cannot produce. Stability is not a property you test. It is a property you prove.",
  },
  {
    icon: Radio,
    title: "Signal Processing",
    description:
      "DSP algorithms with verified frequency bounds, amplitude constraints, sampling rate enforcement. Nyquist theorem as a domain constraint. Aliasing is not caught in testing — it cannot exist. Every filter coefficient is bounded to the stable region. Every output is within the physical range of the sensor.",
  },
  {
    icon: Cog,
    title: "Simulation Certification",
    description:
      "FEA, CFD, multiphysics. Domain constraints ensure no simulation step produces physically impossible states. Negative density. Superluminal velocity. Temperature below absolute zero. These are not edge cases in your validation suite. They are type errors. They do not compile.",
  },
];

const standards = [
  "IEC 61508 — Functional Safety of Electrical/Electronic/Programmable Electronic Safety-related Systems",
  "ISO 9001 — Quality Management Systems (design control and verification evidence)",
  "IEC 61131-3 — Programmable Controllers (certified PLC logic circuits)",
  "IEEE 603 — Criteria for Safety Systems in Nuclear Power Generating Stations",
  "ASME V&V 10 — Verification and Validation in Computational Solid Mechanics",
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
              <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
                Engineering
              </span>
              <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Certified components.{" "}
                <span className="text-teal">Verified compositions. Zero undefined states.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                A bridge doesn&apos;t fail gradually. A PID controller doesn&apos;t fail gracefully.
                Engineering software has one job: model physics correctly. Every time.
                BRIK64 makes the software as correct as the math it implements.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <a
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-hover transition-colors"
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
              <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
                The Challenge
              </span>
              <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Engineering software runs on trust, not proof
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Spot-checked calculations",
                    desc: "Structural calculations are verified by reviewing sample outputs. A missing edge case in a bridge design tool doesn't show up in the review. It shows up in the failure report. The Sleipner A oil platform sank in 1991. The cause: a finite element analysis error. $700M. Gone.",
                  },
                  {
                    title: "Composition is the gap",
                    desc: "A verified motor controller connected to an unverified sensor driver is not a verified system. Individual component testing proves nothing about the system behavior. BRIK64's EVA algebra means composition is closed: two verified circuits compose into a verified circuit. Always.",
                  },
                  {
                    title: "IEC 61508 costs years",
                    desc: "Functional safety for SIL 3/4 systems requires complete documentation of hazard analysis, verification activities, and proof that every safety function is correctly implemented. Manual processes turn this into multi-year certification cycles. The standard hasn't changed. The tooling has.",
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
              <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
                How BRIK64 Helps
              </span>
              <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Physics as domain constraints. Safety factors as type rules.
              </h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {useCases.map((uc) => (
                  <div key={uc.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-teal/10">
                      <uc.icon className="h-6 w-6 text-teal" />
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
              <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
                Policy Circuit Example
              </span>
              <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Structural analysis that cannot approve an unsafe design
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
                AISC A36 steel. Safety factor 1.67. Axial and bending stress combined.
                Every input is physically bounded. Every output is within material limits.
                A design that exceeds allowable stress does not produce a warning.
                It does not compile.
              </p>
              <CopyableCode title="structural_stress.pcd">{`// Structural Stress Analysis — AISC A36 Steel
// Φc = 1 — no design can exceed material safety limits

circuit stress_analysis {
  // Material properties (ASTM A36 structural steel)
  const yield_strength : Float64 = 250e6   // 250 MPa
  const safety_factor  : Float64 = 1.67    // AISC ASD requirement

  // Input domains — physically bounded
  input force       : Float64[0.0 .. 1e9]       // Newtons
  input area        : Float64[1e-6 .. 1e4]      // m², cross-section
  input moment      : Float64[0.0 .. 1e12]      // N·m, bending moment
  input distance    : Float64[0.0 .. 100.0]     // m, from neutral axis
  input inertia     : Float64[1e-12 .. 1e6]     // m⁴, second moment

  // Stress calculations
  let axial_stress   = force / area
  let bending_stress = moment * distance / inertia
  let total_stress   = axial_stress + bending_stress

  // Allowable stress with safety factor
  let allowable = yield_strength / safety_factor

  // These are laws. Not suggestions.
  assert total_stress <= allowable
    | reject("Design fails: stress " ++ to_string(total_stress) ++ " > allowable " ++ to_string(allowable))

  assert area > 0.0 && inertia > 0.0
    | invariant("Cross-section properties must be positive")

  output result : {
    sigma_axial:   axial_stress,
    sigma_bending: bending_stress,
    sigma_total:   total_stress,
    utilization:   total_stress / allowable,
    safe:          true
  }
}`}</CopyableCode>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
                Force, area, moment — all physically bounded. Safety factor enforced by the compiler.{" "}
                <PhiC /> = 1 — the design is either safe or it does not compile.
              </p>
            </section>

            {/* ── Standards ── */}
            <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
              <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
                Compliance &amp; Standards
              </span>
              <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Built for the standards that keep structures standing
              </h2>
              <ul className="mx-auto mt-8 max-w-2xl space-y-3">
                {standards.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <span className="text-sm text-foreground">{s}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── CTA ── */}
            <section className="bg-background px-6 py-24 text-center lg:px-16">
              <h2 className="mx-auto text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The Sleipner A sank from a calculation error. Your structure won&rsquo;t.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
                Every calculation certified. Every safety factor enforced. Every composition
                verified. IEC 61508 evidence generated at compile time.
                Engineering software should be as correct as the physics it models.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-hover transition-colors"
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
