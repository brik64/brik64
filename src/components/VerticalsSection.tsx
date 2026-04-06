import { Plane, Heart, Link2, Building2, Cpu, Landmark } from "lucide-react";
import type { ReactNode } from "react";

const verticals: { icon: ReactNode; name: string; tagline: string; example: string; badge: string }[] = [
  {
    icon: <Building2 className="h-5 w-5" />,
    name: "Algorithmic Trading",
    tagline: "MiFID II Art. 17 compliance from your algorithms",
    example: "type OrderValue = range[0.01, 10_000_000.0];",
    badge: "MiFID II 40%",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    name: "Medical Devices",
    tagline: "IEC 62304 evidence without $1M manual certification",
    example: "type InsulinDose = range[0.0, 25.0];",
    badge: "IEC 62304",
  },
  {
    icon: <Link2 className="h-5 w-5" />,
    name: "Smart Contracts",
    tagline: "Contracts that can't have bugs. Compiled to WASM.",
    example: "type Balance = range[0, 1_000_000_000];",
    badge: "WASM",
  },
  {
    icon: <Plane className="h-5 w-5" />,
    name: "Aerospace",
    tagline: "DO-178C formal methods evidence from your code",
    example: "type Altitude = range[0, 15_000];",
    badge: "DO-178C",
  },
  {
    icon: <Landmark className="h-5 w-5" />,
    name: "Fintech / Banking",
    tagline: "SOX Sec 404 internal controls. The math is the evidence.",
    example: "type InterestRate = range[0.0, 0.30];",
    badge: "SOX 25%",
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    name: "IoT / Embedded",
    tagline: "Firmware with zero undefined behavior",
    example: "type Temperature = range[-40, 80];",
    badge: "Embedded",
  },
];

export function VerticalsSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-10 text-xs font-medium tracking-[2px] text-muted-foreground md:mb-14">
          [12] &middot; VERTICALS
        </p>

        <h3 className="max-w-3xl text-2xl font-semibold tracking-tight md:text-3xl">
          Industries where a bug{" "}
          <span className="text-teal">can kill.</span>
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Range types. Exhaustive pattern matching. Formal verification.
          BRIK64 eliminates entire classes of bugs at compile time &mdash; then emits to any of 14 targets.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {verticals.map((v) => (
            <div
              key={v.name}
              className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-teal/40"
            >
              <div className="flex items-center gap-2 text-teal">
                {v.icon}
                <span className="text-sm font-medium text-foreground">{v.name}</span>
                <span className="ml-auto rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-medium text-teal">
                  {v.badge}
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{v.tagline}</p>
              <div className="mt-3 overflow-hidden rounded-lg border border-white/10 bg-[#0a0e14]">
                <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                  <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                </div>
                <div className="px-3 py-2 font-mono text-[11px] text-teal/80">
                  {v.example}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
