import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { CopyableCode } from "@/components/CopyableCode";
import { Plane, Radar, Navigation, Cpu, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";


export const metadata = {
  title: "Aerospace & Defense — BRIK64 Industries",
  description:
    "When a line of code controls a $150M aircraft carrying 300 people, 'tests pass' is not enough. DO-178C certification with BRIK64.",
};

const useCases = [
  {
    icon: Plane,
    title: "Flight Control Verification",
    description:
      "Pitch, roll, yaw — every flight control law bounded to the physical envelope. Stall speed at 1G, Vne at altitude, G-limits from +2.5 to -1.0. Domain constraints map directly to flight parameters: airspeed in knots, bank angle in degrees, angle of attack in real units. The autopilot literally cannot command what the airframe cannot survive.",
  },
  {
    icon: Radar,
    title: "Sensor Fusion Certification",
    description:
      "GPS accuracy ±3 meters. IMU drift accumulates at 0.01°/hr. Barometric altimeter precision ±30 feet. Pitot-static airspeed error ±5 knots. Every sensor carries error bounds. BRIK64 propagates that uncertainty mathematically through every fusion algorithm — so the combined output carries a certified confidence interval, not a hope.",
  },
  {
    icon: Navigation,
    title: "Mission Planning",
    description:
      "Fuel burn = specific fuel consumption × time × thrust setting. Waypoint distance via Vincenty geodesic, not flat-earth math. Alternate airport fuel reserves calculated to FAR 91.167 minimums. Abort criteria formally verified against remaining fuel, distance to divert, and wind component. No mission plan can violate reserves — the math won't let it.",
  },
  {
    icon: Cpu,
    title: "Avionics Software",
    description:
      "DO-178C demands five lifecycle processes: Requirements, Design, Code, Verification, and Configuration Management. Each produces dozens of artifacts — traceability matrices, test procedures, coverage analysis, problem reports. BRIK64 generates the Verification artifacts automatically from the formal proof. What used to take a team of 12 engineers six months now takes minutes.",
  },
];

const standards = [
  "DO-178C — Software lifecycle with 5 Design Assurance Levels (A through E). Level A: catastrophic failure condition. BRIK64 generates Level A evidence: requirements traceability, structural coverage (MC/DC), and formal verification artifacts.",
  "DO-254 — Design assurance for airborne electronic hardware. BRIK64's hardware roadmap (the BPU coprocessor) maps directly to DO-254 — 64 verified logic units in silicon, with certification evidence built into the architecture.",
  "AS9100 — Quality management for aviation, space, and defense. Requires end-to-end traceability from requirements to verified code. Every BRIK64 circuit carries that traceability by construction — not by process.",
  "MIL-STD-882 — System safety standard requiring hazard analysis and risk assessment. BRIK64 circuits encode mitigations as mathematical constraints. Hazards don't get documented and forgotten — they get verified and enforced.",
];

export default function AerospaceIndustryPage() {
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
              Aerospace &amp; Defense
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              When a line of code controls a $150M aircraft carrying 300 people,{" "}
              <span className="text-teal">&lsquo;tests pass&rsquo; is not enough.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              DO-178C Level A certification costs $100M+ per aircraft program and takes 3-5 years.
              A single software change can trigger 6 months of re-certification. The Boeing 787 has
              6.5 million lines of code. The Airbus A350 has over 100 million. Each line needs traceability.
              BRIK64 generates that traceability automatically.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-hover transition-colors"
              >
                Start building &mdash; free <ArrowRight className="h-4 w-4" />
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
              Certification costs more than the software itself
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "3-5 years per program",
                  desc: "DO-178C Level A requires complete traceability from every requirement to every line of code, plus MC/DC structural coverage. The Airbus A350 has 100M+ lines. Every single one needs a traced path from requirement to test to verification. Manual processes turn this into multi-year timelines.",
                },
                {
                  title: "$100M+ and climbing",
                  desc: "Software certification accounts for up to 50% of total avionics development cost. Worse: a single software change — one bug fix, one parameter update — can trigger 6 months and millions in re-verification. Teams freeze code not because it's done, but because they can't afford to change it.",
                },
                {
                  title: "~2,000 DERs for the entire US",
                  desc: "Designated Engineering Representatives are the FAA's bottleneck. There are roughly 2,000 DERs in the entire United States, and every certification artifact must pass through their review. Their bandwidth — not your engineering team's — determines how fast your program certifies.",
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
              Certification evidence generated, not written
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
              A flight computer that cannot exceed its envelope
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              This is not a simulation. This is a circuit with physical constraints baked into the type system.
              Speed between stall and Vne. AoA below critical alpha. Fuel above bingo. Bank angle within structural G-limits.
              The flight computer does not check these limits — it is incapable of violating them.
            </p>
            <CopyableCode title="flight_computer.pcd">{`// Flight Computer — Envelope-Constrained
// Φc = 1 — DO-178C Level A certification evidence

circuit flight_envelope {
  // Flight envelope bounds
  input airspeed    : Float64[60.0 .. 340.0]   // knots (stall to Vne)
  input altitude    : Float64[0.0 .. 51000.0]  // feet MSL
  input fuel_qty    : Float64[0.0 .. 48000.0]  // lbs
  input bank_angle  : Float64[-67.0 .. 67.0]   // degrees
  input pitch       : Float64[-30.0 .. 30.0]   // degrees
  input aoa         : Float64[-5.0 .. 18.0]    // angle of attack, degrees

  // Stall protection
  assert aoa < 15.0 || airspeed > 120.0
    | reject("Stall warning: reduce AoA or increase speed")

  // Overspeed protection
  assert airspeed <= 320.0 || altitude > 10000.0
    | reject("Overspeed: reduce thrust or climb")

  // Fuel reserve enforcement
  let min_fuel = 2400.0  // 30 min reserve at cruise
  assert fuel_qty >= min_fuel
    | reject("Bingo fuel: divert immediately")

  // Structural limit
  let g_load = 1.0 / cos(bank_angle * PI / 180.0)
  assert g_load <= 2.5
    | reject("Structural limit: reduce bank angle")

  output flight_state : {
    v:     airspeed,
    alt:   altitude,
    fuel:  fuel_qty,
    bank:  bank_angle,
    aoa:   aoa,
    g:     g_load,
    valid: true
  }
}`}</CopyableCode>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
              Every parameter carries physical units and hard limits. Airspeed: 60-340 knots. AoA: -5 to 18 degrees. Fuel: 0-48,000 lbs.{" "}
              <PhiC /> = 1 — the flight computer is mathematically constrained to the certified envelope. Not by convention. By construction.
            </p>
          </section>

          {/* ── Standards ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
              Compliance &amp; Standards
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Every standard. Every artifact. By construction.
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
              From code to DO-178C Level A evidence. In minutes, not months.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Your certification cycle just got 10x faster. Every requirement traced automatically.
              Every test generated from the algebra. Every proof a build artifact.
              The DER reviews a mathematical certificate — not six months of manual documentation.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-hover transition-colors"
              >
                Start building &mdash; free <ArrowRight className="h-4 w-4" />
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
