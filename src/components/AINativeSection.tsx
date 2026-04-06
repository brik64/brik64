import { PhiC } from "@/components/PhiC";

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
    desc: "64 + 64 ops",
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
        <h3 className="max-w-3xl text-2xl font-semibold tracking-tight md:text-3xl">
          Tell your AI what to build.{" "}
          <span className="bg-gradient-to-r from-teal to-emerald-400 bg-clip-text text-transparent">
            The compiler proves it&apos;s correct.
          </span>
        </h3>

        {/* Body */}
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          An LLM writes PCD, the compiler verifies &Phi;<sub>c</sub> = 1, and if verification fails,{" "}
          <strong className="text-foreground">the error becomes the next prompt.</strong>{" "}
          <span className="text-teal font-medium">Repeat until certified.</span>{" "}
          No other language has this loop.
        </p>

        {/* brikc ai demo — terminal window with traffic lights */}
        <div className="mt-8 max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
          {/* Title bar with 3 dots */}
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[10px] font-medium tracking-wide text-white/30">brikc ai</span>
          </div>
          {/* Terminal content */}
          <div className="flex flex-col gap-1 p-5 font-mono text-xs">
            <p className="text-white/70"><span className="text-teal">$</span> brikc ai &quot;Generate a drone speed controller with wind limits&quot;</p>
            <p className="mt-1 text-zinc-400">&nbsp;&nbsp;LLM generating PCD...</p>
            <p className="mt-1 text-amber-400">&nbsp;&nbsp;&Phi;<sub>c</sub> = 0.847 &mdash; missing case: wind &gt; 120 km/h</p>
            <p className="mt-1 text-zinc-400">&nbsp;&nbsp;LLM fixing...</p>
            <p className="mt-1 text-emerald-400">&nbsp;&nbsp;&#10003; <span className="font-bold">&Phi;<sub>c</sub></span> = 1.000 &mdash; all 12 paths verified. Certified.</p>
          </div>
        </div>

        {/* Compilation targets */}
        <div className="mt-10">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Compiles to 14 targets
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
