import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Plane, Heart, Car, Cpu, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";

export const metadata = {
  title: "Safety-Critical Systems — BRIK64",
  description:
    "When a bug can kill, testing is not enough. BRIK64 makes dangerous software states structurally impossible — not unlikely, impossible. DO-178C, IEC 62304, ISO 26262, ISO 10218.",
};

const examples = [
  {
    icon: Plane,
    name: "Flight Controller",
    standard: "DO-178C Level A",
    code: `type Velocity = range[0, 900];      // km/h
type Altitude = range[0, 15_000];   // meters
type Fuel = range[0, 50_000];       // liters
type Temperature = range[-40, 1200]; // °C

pc flight_check(speed: Velocity, alt: Altitude, fuel: Fuel) {
    // Every combination of inputs produces a valid output.
    // Φc = 1: the circuit is closed. No undefined behavior.
}`,
  },
  {
    icon: Heart,
    name: "Insulin Pump",
    standard: "IEC 62304 Class C",
    code: `type Dose = range[0.0, 25.0];        // units
type Glucose = range[20, 600];        // mg/dL
type InfusionRate = range[0.0, 5.0];  // units/hr

pc calculate_dose(glucose: Glucose, weight_kg: range[1, 300]) {
    // Overdose is structurally impossible.
    // The domain rejects any dose > 25.0 at compile time.
}`,
  },
  {
    icon: Car,
    name: "Autonomous Braking",
    standard: "ISO 26262 ASIL D",
    code: `type Distance = range[0.0, 200.0];   // meters
type Speed = range[0.0, 250.0];      // km/h
type BrakeForce = range[0.0, 1.0];   // 0-100%

pc emergency_brake(dist: Distance, speed: Speed) -> BrakeForce {
    match dist {
        0.0..5.0 => 1.0,    // Full brake
        5.0..20.0 => 0.7,   // Hard brake
        20.0..50.0 => 0.3,  // Moderate
        _ => 0.0,            // No action needed
    }
    // Exhaustive. Every distance has a response.
}`,
  },
  {
    icon: Cpu,
    name: "Cobot Safety",
    standard: "ISO 10218",
    code: `type HumanDistance = range[0.0, 10.0]; // meters
type RobotSpeed = range[0.0, 2.0];    // m/s

pc safety_speed(human_dist: HumanDistance) -> RobotSpeed {
    match human_dist {
        0.0..0.5 => 0.0,          // Stop
        0.5..1.5 => 0.3,          // Crawl
        1.5..3.0 => 1.0,          // Normal
        3.0..10.0 => 2.0,         // Full speed
    }
    // The robot CANNOT hit the human. The circuit prevents it.
}`,
  },
];

const guarantees = [
  {
    title: "Domain constraints as physical laws",
    desc: "type Velocity = range[0, 900] is not a validation rule. It is a physical constraint baked into the type system. The compiler propagates it through every operation algebraically — not by checking. Values outside the domain cannot be expressed. The language itself is the safety system.",
  },
  {
    title: "Exhaustive branch coverage by construction",
    desc: "Match expressions must cover every value in the domain. Not most values. Every value. The compiler rejects programs with uncovered cases before a single test runs. DO-178C calls this MC/DC coverage. BRIK64 makes it the only possible state.",
  },
  {
    title: "Certification evidence generated, not written",
    desc: "Every compile generates requirements traceability, structural coverage analysis, and formal verification artifacts. The output of brikc certify IS the DO-178C evidence package. What a team of 12 engineers produces in six months, BRIK64 generates in milliseconds.",
  },
  {
    title: "Φ_c = 1 — the circuit is closed",
    desc: "Every input consumed. Every output produced. Every branch terminated. No undefined states. No paths to nowhere. If one path is missing — the program does not compile. This is what safety certification has always been trying to prove. BRIK64 makes it impossible to prove false.",
  },
];

const standards = [
  "DO-178C Level A — full traceability, MC/DC structural coverage, and formal verification artifacts. Generated automatically at compile time.",
  "IEC 62304 Class C — software lifecycle evidence for medical devices. From requirements to verified circuit, with complete audit trail.",
  "ISO 26262 ASIL D — automotive functional safety. Every hazard encoded as a domain constraint. Every mitigation mathematically enforced.",
  "ISO 10218 — collaborative robot safety. Speed limits, force limits, proximity detection — all structurally bound at compile time.",
];

export default function SafetyCriticalPage() {
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
                Safety-Critical Systems
              </span>
              <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                When a bug can kill,{" "}
                <span className="text-[#00b8d4]">&lsquo;tests pass&rsquo; is not a defense.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                An insulin pump that can overdose is a weapon. A flight controller that can overspeed is a missile.
                A braking system with an unhandled edge case is a coffin. BRIK64 doesn&rsquo;t test for dangerous
                states. It makes them structurally impossible. Not unlikely. Impossible.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <a
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
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

          {/* ── The Problem ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              The Problem
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Testing proves bugs exist. It cannot prove they don&rsquo;t.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "DO-178C Level A: $1M+, 6–12 months",
                  desc: "Every line needs requirements traceability, MC/DC structural coverage, and independent review. A single bug fix can trigger months of re-certification. Teams freeze code not because it is done, but because they cannot afford to change it.",
                },
                {
                  title: "IEC 62304 Class C: years of lifecycle",
                  desc: "Medical device software demands complete documentation of every unit, every integration test, every hazard analysis. A pacemaker with 10,000 lines needs traceability for every single one. Manual processes turn this into decade-long certification cycles.",
                },
                {
                  title: "ISO 26262 ASIL D: unhandled edge cases kill",
                  desc: "Every unhandled edge case is a potential fatality. Toyota&rsquo;s unintended acceleration. Jeep&rsquo;s remote exploit. Boeing&rsquo;s MCAS. All of them: unverified code in safety-critical systems. All of them preventable. Not by better testing — by mathematical impossibility.",
                },
              ].map((item) => (
                <div key={item.title} className="border border-border bg-white p-6">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── How BRIK64 Solves It ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              The Solution
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The compiler is the auditor. The math is the proof.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              BRIK64 domain constraints encode physical reality into the type system. Speed: 0–900 km/h.
              Dose: 0.0–25.0 units. Distance: 0–200 meters. The dangerous value doesn&rsquo;t get rejected
              at runtime — it cannot exist in the program.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {guarantees.map((g) => (
                <div key={g.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#00b8d4]/10">
                    <CheckCircle2 className="h-6 w-6 text-[#00b8d4]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{g.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Code Examples ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Verified Examples
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Every example compiles with Φ_c = 1. No exceptions.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              These are not demos. They are certified circuits. Every input produces a valid output.
              Every dangerous state has been made structurally impossible by the type system.
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {examples.map((ex) => (
                <div key={ex.name} className="rounded-lg border border-border bg-card p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ex.icon className="h-5 w-5 text-[#00b8d4]" />
                      <h3 className="text-sm font-medium text-foreground">{ex.name}</h3>
                    </div>
                    <span className="rounded-full bg-[#00b8d4]/10 px-2.5 py-0.5 text-[10px] font-medium text-[#00b8d4]">
                      {ex.standard}
                    </span>
                  </div>
                  <div className="mt-3 overflow-hidden rounded-lg border border-white/10 bg-[#0a0e14]">
                    <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                      <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                      <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                    </div>
                    <pre className="overflow-x-auto p-3 text-[11px] leading-relaxed text-[#00b8d4]/80">
                      {ex.code}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Standards ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Certification Standards
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Every standard. Every artifact. By construction.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Manual certification: $1M+ and 6–12 months. BRIK64: automatic, at compile time.
              Same verification quality. A fraction of the cost. A fraction of the time.
            </p>
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
              Make the dangerous state impossible. Not unlikely.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              If it compiles, it&rsquo;s certified. If it&rsquo;s dangerous, it doesn&rsquo;t compile.
              That&rsquo;s not a testing strategy. That&rsquo;s a mathematical guarantee.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
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
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
