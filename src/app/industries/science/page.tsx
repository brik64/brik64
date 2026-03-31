import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { FlaskConical, Ruler, BarChart3, RefreshCw, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";


export const metadata = {
  title: "Science & Research — BRIK64 Industries",
  description:
    "If your simulation has a bug, your paper has a bug. BRIK64 makes your algorithms reproducible and provably correct — with domain bounds that enforce the laws of physics.",
};

const useCases = [
  {
    icon: Ruler,
    title: "Domain-Bounded Simulations",
    description:
      "Temperature cannot go below 0 K. Velocity cannot exceed c. Pressure is always positive. Mass is never negative. In every other language, these are comments. In PCD, they are compiler constraints. A climate model that produces negative absolute temperature doesn't just flag a warning — it cannot compile.",
  },
  {
    icon: BarChart3,
    title: "Precision Guarantees",
    description:
      "The Patriot missile failure killed 28 soldiers because of a 0.34-second floating point drift over 100 hours. BRIK64 propagates precision bounds through every computation. Your final result includes verified uncertainty ranges — no floating point surprises, no silent precision loss.",
  },
  {
    icon: FlaskConical,
    title: "Verified Numerical Algorithms",
    description:
      "Publish your algorithm as a certified PCD circuit with a DOI. Reviewers verify the mathematical proof, not your Python implementation. The algorithm is language-agnostic, formally correct, and emits to 14 target languages. Your method section becomes your executable proof.",
  },
  {
    icon: RefreshCw,
    title: "Reproducible Computation",
    description:
      "A PCD circuit produces the same output for the same input — on every platform, in every language, forever. No more 'works on my machine.' No more results that change between NumPy versions. Reproducibility by mathematical construction, not Docker containers and pinned dependencies.",
  },
];

const standards = [
  "Nature/Science reproducibility standards — verified computational methods with certification hashes",
  "FAIR data principles — algorithms that are Findable, Accessible, Interoperable, and Reusable by construction",
  "NIST measurement uncertainty frameworks — automated error propagation and precision tracking",
  "Good Scientific Practice (GSP) — complete audit trail from raw data to published result",
  "Open Science workflows — certified algorithms publishable as DOI-linked, language-agnostic circuits",
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
              If your simulation has a bug,{" "}
              <span className="text-[#00b8d4]">your paper has a bug.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              70% of researchers cannot reproduce other scientists' computational results. Not because
              the science is wrong — because the software is unverified. BRIK64 makes your algorithms
              provably correct and reproducible on any platform, in any language, forever.
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
                  title: "70% irreproducible",
                  desc: "A 2016 Nature survey of 1,576 researchers found that 70% had failed to reproduce another scientist's experiments. For computational results, the number is even worse. The code compiles on the author's laptop, with their Python version, their NumPy build, their OS — and nowhere else. Retracted papers cost careers and waste billions in follow-up research.",
                },
                {
                  title: "Silent numerical errors",
                  desc: "The Reinhart-Rogoff Excel error influenced austerity policies across Europe. A single misplaced cell reference in a spreadsheet. In real simulations, floating point drift, catastrophic cancellation, and silent overflow produce results that look plausible but are wrong. No language prevents a temperature of -50 Kelvin or a negative probability.",
                },
                {
                  title: "Simulation bugs = paper retractions",
                  desc: "In 2019, a group of crystallography papers was retracted because the underlying software had a sign error in its coordinate transformation. The bug existed for 5 years. Hundreds of structures were wrong. Every downstream paper that cited those structures was contaminated. A single uncaught software bug created a cascade of invalid science.",
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
              Your method section becomes your executable proof
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
              Physics simulation — where the laws of physics are compiler constraints
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              This circuit doesn't just compute particle dynamics — it enforces physical reality at
              the type level. Negative mass, superluminal velocity, sub-zero-Kelvin temperature:
              these aren't runtime errors. They are compilation impossibilities.
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
              <PhiC /> = 1 means no simulation state can violate the laws of physics. Your simulation
              is correct by construction, not by testing.
            </p>
          </section>

          {/* ── Standards ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Compliance &amp; Standards
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Make your computational results as rigorous as your methodology
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
              Science too important to trust to unverified code
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Certify your algorithms. Publish reproducible results. Make every simulation
              provably correct — from climate models to drug discovery to particle physics.
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
