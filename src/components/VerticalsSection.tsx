import { PhiC } from "@/components/PhiC";
import { Plane, Heart, Link2, Building2, Cpu, Landmark } from "lucide-react";
import type { ReactNode } from "react";

const verticals: {
  icon: ReactNode;
  name: string;
  tagline: string;
  example: string;
  badge: string;
  risk: string;
}[] = [
  {
    icon: <Building2 className="h-5 w-5" />,
    name: "Algorithmic Trading",
    tagline: "MiFID II evidence for trading logic.",
    example: "type OrderValue = range[0.01, 10_000_000.0];",
    badge: "MiFID II 40%",
    risk: "Capital exposure bounded",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    name: "Medical Devices",
    tagline: "IEC 62304 evidence without manual rework.",
    example: "type InsulinDose = range[0.0, 25.0];",
    badge: "IEC 62304",
    risk: "Unsafe dosage blocked",
  },
  {
    icon: <Link2 className="h-5 w-5" />,
    name: "Smart Contracts",
    tagline: "Verified contract logic compiled to WASM.",
    example: "type Balance = range[0, 1_000_000_000];",
    badge: "WASM",
    risk: "State transitions closed",
  },
  {
    icon: <Plane className="h-5 w-5" />,
    name: "Aerospace",
    tagline: "DO-178C evidence generated from code.",
    example: "type Altitude = range[0, 15_000];",
    badge: "DO-178C",
    risk: "Flight envelope enforced",
  },
  {
    icon: <Landmark className="h-5 w-5" />,
    name: "Fintech / Banking",
    tagline: "SOX-grade controls backed by proof.",
    example: "type InterestRate = range[0.0, 0.30];",
    badge: "SOX 25%",
    risk: "Rate drift prevented",
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    name: "IoT / Embedded",
    tagline: "Firmware without undefined behavior.",
    example: "type Temperature = range[-40, 80];",
    badge: "Embedded",
    risk: "Device bounds explicit",
  },
];

export function VerticalsSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-14 sm:px-6 md:py-18 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-xs font-medium tracking-[2px] text-muted-foreground md:mb-12">
          [12] &middot; VERTICALS
        </p>

        <h3 className="max-w-3xl text-2xl font-semibold tracking-tight md:text-3xl">
          <span>Industries where a bug</span>{" "}
          <span className="text-teal">can kill.</span>
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Range types, exhaustive matching, and formal verification for domains where runtime bugs are unacceptable.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {verticals.map((v) => (
            <div
              key={v.name}
              className="group rounded-2xl border border-border bg-card p-4 transition-colors hover:border-teal/40"
            >
              <div className="flex items-center gap-2 text-teal">
                {v.icon}
                <span className="text-sm font-medium text-foreground">{v.name}</span>
                <span className="ml-auto rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-medium text-teal">
                  {v.badge}
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{v.tagline}</p>
              <div className="mt-3 rounded-xl border border-border bg-background p-3">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span>Critical constraint</span>
                  <span>Proof signal</span>
                </div>
                <div className="mt-3 rounded-lg border border-teal/15 bg-teal/[0.05] px-3 py-2 font-mono text-[11px] text-teal/85">
                  {v.example}
                </div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{v.risk}</span>
                  <span className="font-medium text-foreground"><PhiC /> = 1</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
                  <div className="h-full w-full rounded-full bg-teal" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
