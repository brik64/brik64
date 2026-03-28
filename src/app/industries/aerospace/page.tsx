import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { Plane, Radar, Navigation, Cpu, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Aerospace & Defense — BRIK-64 Industries",
  description:
    "When failure is not an option. DO-178C compliance, flight control verification, and mission-critical certification with BRIK-64.",
};

const useCases = [
  {
    icon: Plane,
    title: "Flight Control Verification",
    description:
      "Every flight control law as a verified circuit. Pitch, roll, yaw — domain-bounded to physical limits. The autopilot cannot command what physics forbids.",
  },
  {
    icon: Radar,
    title: "Sensor Fusion Certification",
    description:
      "GPS, IMU, altimeter, airspeed — each sensor has error bounds. BRIK-64 propagates uncertainty through fusion algorithms and certifies the combined output.",
  },
  {
    icon: Navigation,
    title: "Mission Planning",
    description:
      "Waypoint calculations, fuel consumption models, and abort criteria — all formally verified. No mission plan can violate fuel reserves or flight envelope constraints.",
  },
  {
    icon: Cpu,
    title: "Avionics Software",
    description:
      "DO-178C requires evidence of correctness at every Design Assurance Level. BRIK-64 generates that evidence automatically from the formal proof.",
  },
];

const standards = [
  "DO-178C — Software Considerations in Airborne Systems (Level A through E)",
  "AS9100 — Quality Management Systems for Aviation, Space, and Defense",
  "ITAR — International Traffic in Arms Regulations compliance",
  "DO-254 — Design Assurance Guidance for Airborne Electronic Hardware",
  "MIL-STD-882 — System Safety Engineering",
];

export default function AerospaceIndustryPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="border-b border-border bg-gradient-to-b from-[#f0fdff] to-white">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              Aerospace &amp; Defense
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              When failure is{" "}
              <span className="text-[#00b8d4]">not an option.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              DO-178C compliance is expensive, manual, and slow. Software certification
              takes years. BRIK-64 automates the evidence — so your team focuses on the
              mission, not the paperwork.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Explore aerospace certification <ArrowRight className="h-4 w-4" />
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
          <section className="border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              The Challenge
            </span>
            <h2 className="text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Certification costs more than development
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Years of documentation",
                  desc: "DO-178C Level A requires complete traceability from requirements to code. Manual processes create multi-year certification timelines.",
                },
                {
                  title: "$100M+ per program",
                  desc: "Software certification accounts for up to 50% of total avionics development cost. Every change triggers re-verification.",
                },
                {
                  title: "Human bottleneck",
                  desc: "Designated Engineering Representatives (DERs) review every artifact. Their bandwidth limits how fast programs can certify.",
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
          <section className="border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              How BRIK-64 Helps
            </span>
            <h2 className="text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Automated certification evidence
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
          <section className="border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Policy Circuit Example
            </span>
            <h2 className="text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Flight computer with envelope constraints
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              This circuit enforces the aircraft flight envelope. Speed, altitude, fuel —
              every parameter is bounded. The flight computer cannot command states outside
              the certified envelope.
            </p>
            <div className="mt-8 overflow-hidden border border-border bg-[#0a0e14]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-white/50">
                  flight_computer.pcd
                </span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-[#e0e0e0]">
                <code>{`// Flight Computer — Envelope-Constrained
// Φ_c = 1 — DO-178C Level A certification evidence

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
}`}</code>
              </pre>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
              Speed between stall and Vne. Altitude within service ceiling. Fuel above bingo.{" "}
              <PhiC /> = 1 — the flight computer is mathematically constrained to the certified envelope.
            </p>
          </section>

          {/* ── Standards ── */}
          <section className="border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Compliance &amp; Standards
            </span>
            <h2 className="text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Certification evidence by construction
            </h2>
            <ul className="mt-8 space-y-3">
              {standards.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00b8d4]" />
                  <span className="text-sm text-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── CTA ── */}
          <section className="px-6 py-24 text-center lg:px-16">
            <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Explore aerospace certification with BRIK-64
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Reduce certification timelines from years to months. Every requirement traced.
              Every test generated. Every proof automated.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Explore aerospace certification <ArrowRight className="h-4 w-4" />
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
      </main>
      <Footer />
    </>
  );
}
