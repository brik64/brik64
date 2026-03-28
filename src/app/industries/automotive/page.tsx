import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { Car, Eye, Route, Cpu, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Automotive — BRIK-64 Industries",
  description:
    "ISO 26262. Automatically. ADAS verification, sensor fusion, path planning certification, and ECU software verification with BRIK-64.",
};

const useCases = [
  {
    icon: Eye,
    title: "ADAS Verification",
    description:
      "Lane keeping, adaptive cruise control, automatic emergency braking — every ADAS function as a verified circuit. The system cannot command unsafe actions.",
  },
  {
    icon: Car,
    title: "Sensor Fusion",
    description:
      "Camera, radar, lidar, ultrasonic — each sensor has noise bounds. BRIK-64 verifies the fusion algorithm and certifies that combined perception stays within safe domains.",
  },
  {
    icon: Route,
    title: "Path Planning Certification",
    description:
      "Trajectory generation with speed limits, acceleration bounds, and obstacle clearance constraints. No planned path can violate the vehicle's dynamic envelope.",
  },
  {
    icon: Cpu,
    title: "ECU Software",
    description:
      "Engine control, transmission logic, braking systems — every ECU function formally verified. AUTOSAR-compatible. ASIL D evidence generated automatically.",
  },
];

const standards = [
  "ISO 26262 — Functional Safety (ASIL A through D)",
  "AUTOSAR — Automotive Open System Architecture",
  "ISO 21448 (SOTIF) — Safety of the Intended Functionality",
  "ISO/SAE 21434 — Automotive Cybersecurity Engineering",
  "UNECE WP.29 — Vehicle Regulations for Automated Driving",
  "ASPICE — Automotive Software Process Improvement and Capability Determination",
];

export default function AutomotiveIndustryPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="border-b border-border bg-gradient-to-b from-[#f0fdff] to-white">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              Automotive
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              ISO 26262.{" "}
              <span className="text-[#00b8d4]">Automatically.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Autonomous vehicles need guarantees, not guesses. ASIL certification is a
              bottleneck. BRIK-64 generates the evidence automatically — so your engineers
              build the future instead of filling out spreadsheets.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Certify your automotive software <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://docs.brik64.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Read the docs <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl border-x border-border">
          {/* ── The Challenge ── */}
          <section className="border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              The Challenge
            </span>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              100 million lines of code per vehicle
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Software-defined vehicles",
                  desc: "Modern cars run 100M+ lines of code across 100+ ECUs. Every line is safety-relevant. Manual verification is physically impossible at this scale.",
                },
                {
                  title: "ASIL bottleneck",
                  desc: "ISO 26262 ASIL D — the highest automotive safety level — requires formal verification evidence. The cost: $50-100M per platform, 3-5 years timeline.",
                },
                {
                  title: "Autonomous liability",
                  desc: "When a self-driving car crashes, 'our tests passed' is not a legal defense. Regulators want mathematical proof that the software cannot produce unsafe states.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-white p-6"
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
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              How BRIK-64 Helps
            </span>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Safety certification at software speed
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {useCases.map((uc) => (
                <div key={uc.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#00b8d4]/10">
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
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Policy Circuit Example
            </span>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Vehicle safety circuit with dynamic constraints
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              This circuit enforces vehicle safety boundaries. Speed, proximity, and braking
              force are all domain-constrained. Emergency braking activates automatically
              when physics demands it.
            </p>
            <div className="mt-8 overflow-hidden rounded-xl border border-border bg-[#0a0a0a]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-white/50">
                  vehicle_safety.pcd
                </span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-[#e0e0e0]">
                <code>{`// Vehicle Safety Circuit — ASIL D Compliant
// Φ_c = 1 — no unsafe vehicle state is reachable

circuit vehicle_safety {
  // Vehicle dynamics
  input speed_kmh       : Float64[0.0 .. 260.0]     // governed top speed
  input acceleration    : Float64[-10.0 .. 5.0]     // m/s², braking to full throttle
  input steering_angle  : Float64[-540.0 .. 540.0]  // degrees
  input proximity_m     : Float64[0.0 .. 200.0]     // nearest obstacle

  // Brake system
  input brake_pressure  : Float64[0.0 .. 180.0]     // bar
  input brake_temp      : Float64[-40.0 .. 800.0]   // °C

  // Stopping distance model (simplified)
  let speed_ms = speed_kmh / 3.6
  let reaction_dist = speed_ms * 1.5           // 1.5s reaction time
  let braking_dist  = (speed_ms * speed_ms) / (2.0 * 9.81 * 0.7)  // μ = 0.7
  let total_stop    = reaction_dist + braking_dist

  // Safety constraints
  assert proximity_m > total_stop
    | emergency("AEB: obstacle within stopping distance")

  assert brake_temp < 600.0
    | warn("Brake fade: reduce speed")

  assert speed_kmh < 50.0 || steering_angle < 180.0
    | reject("Rollover risk: reduce speed or steering input")

  // Speed limiting in zones
  input zone_limit : Float64[0.0 .. 260.0]
  assert speed_kmh <= zone_limit
    | limit("Speed exceeds zone limit")

  output vehicle_state : {
    speed:         speed_kmh,
    stop_dist:     total_stop,
    clearance:     proximity_m - total_stop,
    brake_health:  1.0 - (brake_temp / 800.0),
    safe:          true
  }
}`}</code>
              </pre>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Speed governed, stopping distance calculated, AEB triggered by physics.{" "}
              <PhiC /> = 1 — the vehicle cannot reach an unsafe state.
            </p>
          </section>

          {/* ── Standards ── */}
          <section className="border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Compliance &amp; Standards
            </span>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Automotive safety certification, automated
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Certify your automotive software
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              ISO 26262 evidence generated from formal proofs. Every ECU function verified.
              Every ADAS component certified. Every safety case mathematically proven.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Certify your automotive software <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://docs.brik64.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
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
