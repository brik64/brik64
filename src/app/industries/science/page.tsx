import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { FlaskConical, Ruler, BarChart3, RefreshCw, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";


export const metadata = {
  title: "Science & Research — BRIK64 Industries",
  description:
    "Algorithms you can cite. Results you can reproduce. Domain constraints for physical units, error propagation tracking, and reproducible computation.",
};

const useCases = [
  {
    icon: Ruler,
    title: "Domain Constraints for Physical Units",
    description:
      "Speed cannot exceed c. Temperature cannot go below 0 K. Pressure is always positive. Encode physical laws as domain bounds — the compiler enforces them.",
  },
  {
    icon: BarChart3,
    title: "Error Propagation Tracking",
    description:
      "Every measurement carries uncertainty. BRIK64 propagates error bounds through every composition — so your final result includes verified uncertainty ranges.",
  },
  {
    icon: FlaskConical,
    title: "Algorithm Certification",
    description:
      "Publish your algorithm as a certified PCD circuit. Reviewers verify the proof, not the implementation. The algorithm is language-agnostic and formally correct.",
  },
  {
    icon: RefreshCw,
    title: "Reproducible Computation",
    description:
      "A PCD circuit produces the same output for the same input — reproducible at the logical level. Circuit semantics are platform-independent while numerical precision follows IEEE 754 bounds. Reproducibility by construction, not convention.",
  },
];

const standards = [
  "Good Scientific Practice (GSP) guidelines",
  "FAIR data principles — Findable, Accessible, Interoperable, Reusable",
  "Reproducible Research standards (Nature, Science journals)",
  "NIST measurement uncertainty frameworks",
  "Open Science certification-ready workflows",
];

export default function ScienceIndustryPage() {
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
              Science &amp; Research
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Algorithms you can cite.{" "}
              <span className="text-[#00b8d4]">Results you can reproduce.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Computational science has a reproducibility crisis. Code published alongside
              papers is untested, platform-dependent, and fragile. BRIK64 makes scientific
              computation formally verifiable.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Certify your research code <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://digitalcircuitality.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Read the papers <ExternalLink className="h-4 w-4" />
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
              The reproducibility crisis is a software crisis
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Untested code",
                  desc: "70% of published computational results cannot be reproduced. The code compiles on the author's machine — and nowhere else.",
                },
                {
                  title: "Implicit assumptions",
                  desc: "Physical constraints live in comments, not code. Nothing prevents a simulation from producing negative mass or faster-than-light velocities.",
                },
                {
                  title: "Platform dependency",
                  desc: "Results change between Python versions, OS builds, and floating-point implementations. The algorithm is correct — the execution is not.",
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
              Formally verified scientific computation
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
              Physics simulation with domain bounds
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              This circuit enforces physical constraints at the type level. A simulation
              cannot produce invalid states — the compiler prevents it.
            </p>
            <CopyableCode title="physics_simulation.pcd">{`// Physics Simulation — Domain-Bounded Computation
// Φ_c = 1 — all physical constraints enforced

circuit particle_dynamics {
  // Physical domain constraints
  input temperature : Float64[0.0 .. 1e8]       // Kelvin, ≥ absolute zero
  input pressure    : Float64[0.0 .. 1e12]      // Pascals, always positive
  input velocity    : Float64[0.0 .. 299792458]  // m/s, ≤ speed of light
  input mass        : Float64[1e-30 .. 1e40]     // kg, always positive

  // Derived quantities with propagated bounds
  let kinetic_energy = 0.5 * mass * velocity * velocity
    : Float64[0.0 .. ∞]

  let momentum = mass * velocity
    : Float64[0.0 .. ∞]

  // Ideal gas law: PV = nRT
  let volume = (mass / molar_mass) * R * temperature / pressure
    : Float64[0.0 .. ∞]

  assert kinetic_energy >= 0.0
    | invariant("Energy conservation violated")

  output state : {
    T: temperature,
    P: pressure,
    v: velocity,
    KE: kinetic_energy,
    p: momentum,
    V: volume
  }
}`}</CopyableCode>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
              Temperature, pressure, velocity, mass — all domain-bounded to physical reality.{" "}
              <PhiC /> = 1 means no simulation state can violate the laws of physics.
            </p>
          </section>

          {/* ── Standards ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Compliance &amp; Standards
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for scientific rigor
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
              Start building &mdash; research software
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Certify your research code. Publish reproducible algorithms. Make your
              computational results as rigorous as your methodology.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Certify your research code <ArrowRight className="h-4 w-4" />
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
