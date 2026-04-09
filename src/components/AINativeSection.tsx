import { PhiC } from "@/components/PhiC";
import { ArrowRight, Bot, CheckCircle2, Gauge, Sparkles } from "lucide-react";

const compilationTargets = [
  "Rust",
  "JavaScript",
  "TypeScript",
  "Python",
  "C",
  "C++",
  "Go",
  "COBOL",
  "PHP",
  "Java",
  "Swift",
  "WASM",
  "native x86-64",
  "BIR bytecode",
];

const flowSteps = [
  {
    label: "Intent",
    title: "Natural-language prompt",
    body: "Generate a drone speed controller with wind limits.",
    icon: Sparkles,
    tone: "text-teal border-teal/25 bg-teal/[0.05]",
  },
  {
    label: "Blueprint",
    title: "PCD draft",
    body: "LLM emits a finite circuit instead of open-ended code.",
    icon: Bot,
    tone: "text-sky-400 border-sky-400/25 bg-sky-400/[0.05]",
  },
  {
    label: "Check",
    title: "Closure analysis",
    body: "Compiler finds the missing wind > 120 km/h case.",
    icon: Gauge,
    tone: "text-amber-400 border-amber-400/25 bg-amber-400/[0.06]",
  },
  {
    label: "Proof",
    title: "Certified output",
    body: "Closure reaches Φc = 1 and all execution paths are verified.",
    icon: CheckCircle2,
    tone: "text-emerald-400 border-emerald-400/25 bg-emerald-400/[0.06]",
  },
];

export function AINativeSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-14 sm:px-6 md:py-18 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section counter */}
        <p className="mb-8 text-xs font-medium tracking-[2px] text-muted-foreground md:mb-12">
          [10] · AI-NATIVE
        </p>

        {/* Headline with gradient accent */}
        <h3 className="max-w-3xl text-2xl font-semibold tracking-tight md:text-3xl">
          <span>Tell your AI what to build.</span>{" "}
          <span className="bg-gradient-to-r from-teal to-emerald-400 bg-clip-text text-transparent">
            The compiler proves it&apos;s correct.
          </span>
        </h3>

        {/* Body */}
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          An LLM writes PCD, the compiler checks closure, and the failure becomes the next prompt until the circuit certifies.
        </p>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-border bg-card/60 p-4 md:p-5">
            <div className="grid gap-3 md:grid-cols-[repeat(4,minmax(0,1fr))]">
              {flowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative">
                    <div className={`rounded-xl border p-4 ${step.tone}`}>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {step.label}
                        </span>
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="mt-4 text-sm font-semibold text-foreground">
                        {step.title}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                    {index < flowSteps.length - 1 ? (
                      <div className="pointer-events-none absolute top-1/2 -right-2 hidden -translate-y-1/2 md:block">
                        <ArrowRight className="h-4 w-4 text-border" />
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-gradient-to-br from-[#0d1418] via-[#10181d] to-[#0c1116] p-5 text-white shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Verification state
                </p>
                <p className="mt-2 text-sm font-medium text-white/70">
                  Drone speed controller
                </p>
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-300">
                Certified
              </span>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.06] px-4 py-3">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200/70">
                Closure proof
              </div>
              <div className="mt-2 text-2xl font-semibold tracking-tight text-emerald-300">
                <PhiC /> = 1
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>Paths verified</span>
                  <span>12 / 12</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-full rounded-full bg-emerald-400" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-white/45">Failure loops</p>
                  <p className="mt-2 text-lg font-semibold text-white">2</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-white/45">Missing cases</p>
                  <p className="mt-2 text-lg font-semibold text-white">0</p>
                </div>
              </div>
              <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/[0.06] p-3 text-xs text-emerald-200">
                Wind bounds validated. Unsafe branches eliminated before compile.
              </div>
            </div>
          </div>
        </div>

        {/* Compilation targets */}
        <div className="mt-8">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Compiles to 14 targets
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {compilationTargets.map((target) => (
              <div
                key={target}
                className="rounded-full border border-teal/20 bg-teal/[0.04] px-3 py-1"
              >
                <span className="text-xs font-medium text-teal md:text-sm">
                  {target}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
