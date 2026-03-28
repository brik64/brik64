import { PhiC } from "@/components/PhiC";
import { GitBranch, ShieldCheck, Package } from "lucide-react";
import type { ReactNode } from "react";

interface Step {
  number: string;
  icon: ReactNode;
  label: string;
  title: string;
  description: ReactNode;
  bullets: string[];
  terminal: { text: string; style: "command" | "success" | "muted" }[];
}

const steps: Step[] = [
  {
    number: "01",
    icon: <GitBranch className="h-5 w-5 text-teal" />,
    label: "CONNECT",
    title: "Connect Your Repo",
    description:
      "Link any GitHub repository. On every push, BRIK-64 auto-lifts your code into PCD blueprints.",
    bullets: [
      "GitHub App 1-click install",
      "Auto-lift on push",
      "PR comments with certification",
      "Monorepo support",
    ],
    terminal: [
      { text: "$ brikc connect github.com/acme/api", style: "command" },
      { text: "✓ Repository connected", style: "success" },
      { text: "✓ Webhook installed", style: "success" },
      { text: "✓ Auto-lift enabled on push", style: "success" },
    ],
  },
  {
    number: "02",
    icon: <ShieldCheck className="h-5 w-5 text-teal" />,
    label: "CERTIFY",
    title: "Certify Reusable Logic",
    description: null as unknown as ReactNode,
    bullets: [
      "Automatic TCE verification",
      "Φ_c = 1 certification badge",
      "Domain constraint validation",
      "Two-tier: CORE + CONTRACT",
    ],
    terminal: [
      { text: "circuit validate(x: I64) -> Bool", style: "muted" },
      { text: "───────────────────────────", style: "muted" },
      { text: "TCE: Φ_c = 1.000  ● CERTIFIED", style: "success" },
      { text: "Domains: speed ∈ [0, 900] ✓", style: "success" },
      { text: "Closure: all paths terminate ✓", style: "success" },
    ],
  },
  {
    number: "03",
    icon: <Package className="h-5 w-5 text-teal" />,
    label: "PUBLISH",
    title: "Publish to Registry",
    description:
      "Ship certified PCD packages to the public registry. Every package carries an immutable proof.",
    bullets: [
      "Public & private registries",
      "Semantic versioning",
      "Dependency resolution",
      "Searchable marketplace",
    ],
    terminal: [
      { text: "$ brikc publish validate@1.0.0", style: "command" },
      { text: "✓ Certificate: Φ_c = 1", style: "success" },
      { text: "✓ Published to registry.brik64.dev", style: "success" },
      { text: "✓ Badge embedded", style: "success" },
    ],
  },
];

export function WorkflowSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-10 text-xs font-medium tracking-[2px] text-muted-foreground md:mb-14">
          [08] · WORKFLOW
        </p>

        <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
          Three steps to <span className="text-teal">verified software</span>.
        </h3>

        <div className="mt-12 space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid gap-6 border border-border bg-background p-6 md:grid-cols-2 md:p-8"
            >
              {/* Left — info */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-light tabular-nums text-muted-foreground/40">
                    {step.number}
                  </span>
                  {step.icon}
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {step.label}
                  </span>
                </div>

                <h4 className="mt-4 text-lg font-semibold tracking-tight">
                  {step.title}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.number === "02" ? (
                    <>
                      Every extracted circuit is verified by the TCE. If{" "}
                      <PhiC /> = 1, it&apos;s mathematically guaranteed.
                    </>
                  ) : (
                    step.description
                  )}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {step.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal/60" />
                      {bullet.includes("Φ_c") ? (
                        <span>
                          <PhiC /> = 1 certification badge
                        </span>
                      ) : (
                        bullet
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — terminal */}
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14]">
                <div className="border-b border-white/10 px-4 py-2">
                  <span className="text-[10px] font-medium tracking-wider text-white/30">
                    TERMINAL
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 p-5">
                  {step.terminal.map((line, i) => {
                    if (line.style === "command") {
                      return (
                        <div
                          key={i}
                          className="font-mono text-sm text-white/70"
                        >
                          <span className="text-teal">$</span>{" "}
                          {line.text.slice(2)}
                        </div>
                      );
                    }
                    if (line.style === "success") {
                      if (line.text.includes("Φ_c")) {
                        const parts = line.text.split("Φ_c");
                        return (
                          <div
                            key={i}
                            className="font-mono text-sm text-emerald-400"
                          >
                            {parts[0]}
                            <PhiC />
                            {parts[1]}
                          </div>
                        );
                      }
                      return (
                        <div
                          key={i}
                          className="font-mono text-sm text-emerald-400"
                        >
                          {line.text}
                        </div>
                      );
                    }
                    return (
                      <div key={i} className="font-mono text-sm text-zinc-400">
                        {line.text}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
