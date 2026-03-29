import { PhiC } from "@/components/PhiC";

const compilationTargets = [
  "Rust",
  "JavaScript",
  "Python",
  "native x86-64",
  "BIR bytecode",
];

const endpoints = [
  {
    label: "JSON",
    desc: "Full site data",
  },
  {
    label: "Markdown",
    desc: "LLM-readable",
  },
  {
    label: "Documentation",
    desc: "docs.brik64.dev",
  },
  {
    label: "Claude Code Skills",
    desc: "5 skills",
  },
  {
    label: "PCD Language Spec",
    desc: "128 ops",
  },
];

const formats = ["JSON", "MARKDOWN", "YAML", "PCD"];

export function AINativeSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section counter */}
        <p className="mb-10 text-xs font-medium tracking-[2px] text-muted-foreground md:mb-14">
          [10] · AI-NATIVE
        </p>

        {/* Headline with gradient accent */}
        <h3 className="max-w-3xl text-2xl font-normal tracking-tight md:text-3xl">
          A language designed{" "}
          <span className="bg-gradient-to-r from-teal to-emerald-400 bg-clip-text text-transparent">
            for AI.
          </span>
        </h3>

        {/* Body */}
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          PCD has a finite, learnable set of operations. An AI model can learn the entire
          language in minutes and generate certified code with structural verification. When an AI generates PCD, the compiler automatically
          certifies it. The math is the trust.
        </p>

        {/* Compilation targets */}
        <div className="mt-10">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Compiles to 5 targets
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {compilationTargets.map((target) => (
              <div
                key={target}
                className="rounded-full border border-teal/20 bg-teal/[0.04] px-4 py-1.5"
              >
                <span className="text-sm font-medium text-teal">
                  {target}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Data Endpoints Grid */}
        <div className="mt-12">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Data Endpoints
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {endpoints.map((ep) => (
              <div
                key={ep.label}
                className="group flex items-center gap-4 border border-border bg-muted px-5 py-4 transition-colors hover:border-teal/30 hover:bg-teal/[0.03]"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-teal/10 text-[10px] font-bold text-teal">
                  {ep.label.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-medium">{ep.label}</p>
                  <p className="text-xs text-muted-foreground">{ep.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formats badge row */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Formats
          </p>
          <div className="flex gap-2">
            {formats.map((fmt) => (
              <span
                key={fmt}
                className="rounded-full border border-border px-3 py-1 text-[10px] font-medium text-muted-foreground"
              >
                {fmt}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
