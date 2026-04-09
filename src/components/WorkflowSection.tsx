import { PhiC } from "@/components/PhiC";
import { ArrowRight, GitBranch, ShieldCheck, Package, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

interface Step {
  number: string;
  icon: ReactNode;
  label: string;
  title: string;
  description: ReactNode;
  bullets: string[];
  panel: {
    eyebrow: string;
    title: string;
    metrics: { label: string; value: string }[];
    summary: string;
  };
}

const steps: Step[] = [
  {
    number: "01",
    icon: <GitBranch className="h-5 w-5 text-teal" />,
    label: "CONNECT",
    title: "Connect Your Repo",
    description:
      "Link a repo and auto-lift code to PCD on every push.",
    bullets: [
      "GitHub App 1-click install",
      "Auto-lift on push",
      "PR certification comments",
      "Monorepo support",
    ],
    panel: {
      eyebrow: "Connection state",
      title: "Repository link established",
      metrics: [
        { label: "Webhook", value: "Active" },
        { label: "Lift mode", value: "On push" },
        { label: "PR sync", value: "Enabled" },
      ],
      summary: "Source remains in GitHub. BRIK64 watches, lifts, and annotates automatically.",
    },
  },
  {
    number: "02",
    icon: <ShieldCheck className="h-5 w-5 text-teal" />,
    label: "CERTIFY",
    title: "Certify Reusable Logic",
    description: null as unknown as ReactNode,
    bullets: [
      "Automatic TCE verification",
      "Φc = 1 certification badge",
      "Domain constraint validation",
      "Two-tier: CORE + CONTRACT",
    ],
    panel: {
      eyebrow: "Certification state",
      title: "Closed circuit",
      metrics: [
        { label: "Closure", value: "Φc = 1" },
        { label: "Domains", value: "Checked" },
        { label: "Paths", value: "Exhaustive" },
      ],
      summary: "Open circuits never ship. Missing paths and invalid domains fail before release.",
    },
  },
  {
    number: "03",
    icon: <Package className="h-5 w-5 text-teal" />,
    label: "PUBLISH",
    title: "Publish to Registry",
    description:
      "Ship certified PCD packages with immutable proof attached.",
    bullets: [
      "Public & private registries",
      "Semantic versioning",
      "Dependency resolution",
      "Searchable marketplace",
    ],
    panel: {
      eyebrow: "Registry state",
      title: "Certified package published",
      metrics: [
        { label: "Version", value: "1.0.0" },
        { label: "Certificate", value: "Attached" },
        { label: "Discovery", value: "Indexed" },
      ],
      summary: "Reusable logic ships with immutable proof and a live certification badge.",
    },
  },
];

export function WorkflowSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-14 sm:px-6 md:py-18 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-xs font-medium tracking-[2px] text-muted-foreground md:mb-12">
          [06] · WORKFLOW
        </p>

        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Three commands. <span className="text-teal">Verified software.</span>
        </h3>

        <div className="mt-10 space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="grid gap-6 rounded-2xl border border-border bg-background p-6 md:grid-cols-[0.95fr_1.05fr] md:p-8"
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
                      Every extracted circuit is checked by the TCE before it can ship.
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
                      {bullet.includes("Φc") ? (
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

              <div className="rounded-2xl border border-border bg-gradient-to-br from-muted/35 to-background p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {step.panel.eyebrow}
                    </p>
                    <h5 className="mt-2 text-lg font-semibold text-foreground">
                      {step.panel.title}
                    </h5>
                  </div>
                  <div className="rounded-full border border-teal/20 bg-teal/[0.06] p-2 text-teal">
                    {step.icon}
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {step.panel.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-xl border border-border bg-card p-3">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {metric.label}
                      </p>
                      <p className="mt-2 text-base font-semibold text-foreground">
                        {metric.label === "Closure" ? <><PhiC /> = 1</> : metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-border bg-background p-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 p-1.5 text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {step.panel.summary}
                      </p>
                      {index < steps.length - 1 ? (
                        <div className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground">
                          Next stage
                          <ArrowRight className="h-3.5 w-3.5" />
                          <span>{steps[index + 1].label}</span>
                        </div>
                      ) : (
                        <div className="mt-3 inline-flex items-center gap-2 text-xs text-teal">
                          Registry badge live
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
