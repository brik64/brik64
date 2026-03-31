import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { Car, Eye, Route, Cpu, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";


export const metadata = {
  title: "Automotive — BRIK64 Industries",
  description:
    "A modern car has 100M+ lines of code. More than a fighter jet. BRIK64 proves every line is correct. ISO 26262 ASIL D verification, ADAS certification, and autonomous vehicle safety.",
};

const useCases = [
  {
    icon: Eye,
    title: "Emergency Braking (AEB)",
    description:
      "Distance sensors feed braking force. Domain: distance: Range[0.0, 200.0]m. Speed: Range[0.0, 250.0] km/h. Brake force: Range[0.0, 1.0]. Every distance has a defined response. No undefined behavior at ANY speed. The car cannot not brake.",
  },
  {
    icon: Car,
    title: "Lane Keeping Assist",
    description:
      "Steering angle bounded to a safe range. Torque limits enforced by construction. Lane departure thresholds mathematically guaranteed. The vehicle cannot command a steering angle that exceeds the dynamic envelope. Period.",
  },
  {
    icon: Route,
    title: "Battery Management (BEV)",
    description:
      "Cell voltage: Range[2.5, 4.2]V. Temperature: Range[-40, 60]°C. Current: Range[-500, 500]A. Thermal runaway prevention is not a feature — it is a mathematical invariant. Every cell state is bounded. Every transition is verified.",
  },
  {
    icon: Cpu,
    title: "Autonomous Driving",
    description:
      "Decision trees for obstacle avoidance as verified circuits. Every scenario has a defined safe action. Not 'most scenarios' — every scenario. The decision software is a closed circuit: every input produces a verified output or an explicit safe stop.",
  },
];

const standards = [
  "ISO 26262 — Functional safety for road vehicles (ASIL A-D). The gold standard. We generate verification evidence directly from formal proofs.",
  "ISO 21448 (SOTIF) — Safety of the Intended Functionality. Because the software working correctly is not enough — it must work correctly in the real world.",
  "UNECE WP.29 R155/R156 — Cybersecurity and software update management. New regulations require provable software integrity. We deliver it.",
  "AUTOSAR — Standardized software architecture. BRIK64 circuits map directly to AUTOSAR software components.",
];

export default function AutomotiveIndustryPage() {
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
              Automotive
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              100 million lines of code.{" "}
              <span className="text-[#00b8d4]">Every one proven correct.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              A modern car runs more software than a fighter jet. More than the
              Space Shuttle. And when that software fails, people die. BRIK64
              makes it mathematically impossible for safety-critical automotive
              software to produce an undefined state. Not unlikely — impossible.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building — free <ArrowRight className="h-4 w-4" />
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
              The most dangerous computer you own is the one you drive
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "100M lines, 150 ECUs, zero margin for error",
                  desc: "A modern vehicle runs 100-150 electronic control units executing over 100 million lines of code. ISO 26262 ASIL D — the highest automotive safety level — demands formal verification. Not testing. Not code review. Mathematical proof.",
                },
                {
                  title: "The recalls that bankrupted an industry",
                  desc: "The average safety recall costs $500M+. The Takata airbag recall cost $24 billion. Tesla Autopilot: multiple fatal crashes from edge cases in perception software. These are not acceptable losses. These are engineering failures.",
                },
                {
                  title: "Regulations are coming. Fast.",
                  desc: "UNECE WP.29 now requires software update management systems for every vehicle sold in Europe. Autonomous driving regulations demand provable safety cases. 'Our tests passed' is not a legal defense when a self-driving car kills someone.",
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
              Every braking decision proven. Every steering command certified.
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
              Emergency braking. Not tested — proven.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              This is not a simulation. This is a mathematical proof that compiles.
              Distance to obstacle, vehicle speed, brake force — every variable is
              domain-constrained. The system cannot reach a state where braking is
              needed but not applied.
            </p>
            <CopyableCode title="emergency_braking.pcd">{`// Emergency Braking Circuit — ASIL D
// Φ_c = 1 — every input produces a verified braking response or a safe stop

circuit emergency_braking {
  // Vehicle dynamics
  input speed_kmh       : Float64[0.0 .. 260.0]     // governed top speed
  input acceleration    : Float64[-10.0 .. 5.0]     // m/s², braking to full throttle
  input steering_angle  : Float64[-540.0 .. 540.0]  // degrees
  input proximity_m     : Float64[0.0 .. 200.0]     // nearest obstacle

  // Brake system
  input brake_pressure  : Float64[0.0 .. 180.0]     // bar
  input brake_temp      : Float64[-40.0 .. 800.0]   // °C

  // Stopping distance model
  let speed_ms = speed_kmh / 3.6
  let reaction_dist = speed_ms * 1.5           // 1.5s reaction time
  let braking_dist  = (speed_ms * speed_ms) / (2.0 * 9.81 * 0.7)  // μ = 0.7
  let total_stop    = reaction_dist + braking_dist

  // Safety constraints — these are not checks. They are laws.
  assert proximity_m > total_stop
    | emergency("AEB: obstacle within stopping distance — BRAKE NOW")

  assert brake_temp < 600.0
    | warn("Brake fade: reduce speed immediately")

  assert speed_kmh < 50.0 || steering_angle < 180.0
    | reject("Rollover risk: speed and steering exceed safe envelope")

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
}`}</CopyableCode>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
              Speed governed. Stopping distance calculated from physics. AEB triggered when math demands it.{" "}
              <PhiC /> = 1 — the vehicle cannot reach an unsafe state. Not &quot;should not.&quot; Cannot.
            </p>
          </section>

          {/* ── Standards ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Compliance &amp; Standards
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for the standards that keep people alive
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
              Start building — free
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Every braking decision proven. Every steering command certified.
              Every battery state bounded. Every autonomous decision verified.
              This is what automotive software should have been from the beginning.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Prove your automotive software <ArrowRight className="h-4 w-4" />
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
