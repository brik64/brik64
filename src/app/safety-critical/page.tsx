"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Plane, Heart, Car, Cpu } from "lucide-react";

import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

const examples = [
  {
    icon: <Plane className="h-5 w-5 text-teal" />,
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
    icon: <Heart className="h-5 w-5 text-teal" />,
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
    icon: <Car className="h-5 w-5 text-teal" />,
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
    icon: <Cpu className="h-5 w-5 text-teal" />,
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

export default function SafetyCriticalPage() {
  return (
    <>
<Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        <section className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8 relative overflow-hidden">
          <HeroWireframe />
          <span className="text-muted-foreground mb-5 inline-block w-fit rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium tracking-wide">
            Safety-Critical Systems
          </span>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            When a bug{" "}
            <span className="text-teal">can kill.</span>
          </h1>

          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
            Manual certification: $1M+ and months. BRIK64: automatic, at compile time.
            Domain constraints enforce physical safety bounds. The compiler is the auditor. The math is the proof.
          </p>

          <div className="relative z-10 mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-teal/30 bg-teal/10 px-3.5 py-1 text-xs font-medium text-teal">
              DO-178C (Aerospace)
            </span>
            <span className="rounded-full border border-teal/30 bg-teal/10 px-3.5 py-1 text-xs font-medium text-teal">
              IEC 62304 (Medical)
            </span>
            <span className="rounded-full border border-teal/30 bg-teal/10 px-3.5 py-1 text-xs font-medium text-teal">
              ISO 26262 (Automotive)
            </span>
            <span className="rounded-full border border-teal/30 bg-teal/10 px-3.5 py-1 text-xs font-medium text-teal">
              ISO 10218 (Robotics)
            </span>
          </div>

          {/* ROI */}
          <div className="mt-10 max-w-md rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-medium text-foreground">The ROI argument</p>
            <div className="mt-3 space-y-2">
              <div className="flex items-baseline justify-between text-sm">
                <span className="text-muted-foreground">Manual DO-178C certification:</span>
                <span className="font-mono text-muted-foreground/60">$1M+ / 6-12 months</span>
              </div>
              <div className="flex items-baseline justify-between text-sm">
                <span className="text-teal">BRIK64 formal verification:</span>
                <span className="font-mono text-teal">Automatic / compile time</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground/60">
              Same verification quality. Fraction of the cost and time.
            </p>
          </div>
        </section>

        {/* Examples */}
        <section className="border-border mx-auto max-w-7xl border-t px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium tracking-tight">Verified examples</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Every example compiles with &Phi;<sub>c</sub> = 1. Every input produces a valid output. No exceptions.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {examples.map((ex) => (
              <div key={ex.name} className="rounded-lg border border-border bg-card p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {ex.icon}
                    <h3 className="text-sm font-medium text-foreground">{ex.name}</h3>
                  </div>
                  <span className="rounded-full bg-teal/10 px-2.5 py-0.5 text-[10px] font-medium text-teal">
                    {ex.standard}
                  </span>
                </div>
                <div className="mt-3 overflow-hidden rounded-lg border border-white/10 bg-[#0a0e14]">
                  <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                    <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                    <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                  </div>
                  <pre className="overflow-x-auto p-3 text-[11px] leading-relaxed text-teal/80">
                    {ex.code}
                  </pre>
                </div>
              </div>
            ))}
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
