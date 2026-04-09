"use client";

import { useState } from "react";
import { FileCode, ArrowRight, Shield, Maximize2, Sparkles, Orbit, Workflow } from "lucide-react";
import { PhiC } from "@/components/PhiC";

const pcdCode = `PC hello {
    let msg = "Hello, verified world!";
    let n = LEN(msg);
    WRITE(1, msg, n);
    OUTPUT 0;
}`;

const outputs: Record<string, { lang: string; code: string }> = {
  PCD: {
    lang: "pcd",
    code: pcdCode,
  },
  Rust: {
    lang: "rust",
    code: `fn hello() -> i32 {
    let msg = "Hello, verified world!";
    let n = msg.len();
    io::stdout().write_all(msg.as_bytes()).unwrap();
    0 // Φ_c = 1 — circuit closed
}`,
  },
  JavaScript: {
    lang: "javascript",
    code: `function hello() {
    const msg = "Hello, verified world!";
    const n = msg.length;
    process.stdout.write(msg);
    return 0; // Φ_c = 1 — circuit closed
}`,
  },
  Python: {
    lang: "python",
    code: `def hello() -> int:
    msg = "Hello, verified world!"
    n = len(msg)
    sys.stdout.write(msg)
    return 0  # Φ_c = 1 — circuit closed`,
  },
};

const tabKeys = Object.keys(outputs);

const sourceLanguages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Rust",
  "Go",
  "COBOL",
] as const;

const blueprintStages = [
  {
    label: "Intent captured",
    value: "Finite syntax. Explicit semantics.",
    icon: Sparkles,
  },
  {
    label: "Circuit normalized",
    value: "Monomers, domains, and composition.",
    icon: Orbit,
  },
  {
    label: "Proof-ready export",
    value: "Same blueprint. Different material.",
    icon: Workflow,
  },
] as const;

const keyPoints = [
  {
    icon: <FileCode className="h-5 w-5 text-teal" />,
    title: "AI-native language",
    desc: "A finite syntax an LLM can learn end to end.",
  },
  {
    icon: <Shield className="h-5 w-5 text-teal" />,
    title: "Verified operations",
    desc: "Core ops are proven; extended ops stay contract-bounded.",
  },
  {
    icon: <ArrowRight className="h-5 w-5 text-teal" />,
    title: "Verified by design",
    desc: (
      <>
        If the blueprint stays open (<PhiC /> ≠ 1), it never ships.
      </>
    ),
  },
  {
    icon: <Maximize2 className="h-5 w-5 text-teal" />,
    title: "Domain Constraints",
    desc: "Every input range is explicit and compiler-enforced.",
  },
];

export function PCDSection() {
  const [activeTab, setActiveTab] = useState("PCD");
  const activeOutput = outputs[activeTab];

  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-10 text-xs font-medium tracking-[2px] text-muted-foreground md:mb-14">
          [02] · THE BLUEPRINT
        </p>

        <h3 className="max-w-3xl text-2xl font-semibold tracking-tight md:text-3xl">
          This is PCD. Learn it in one prompt.
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          64 core monomers, 64 extended monomers, explicit domains, deterministic output. Humans lift into PCD; AIs can write it directly.
        </p>

        {/* Two-column: blueprint map + code */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Interactive blueprint map */}
          <div className="border border-border bg-muted/60 p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Blueprint map
                </p>
                <h4 className="mt-2 text-lg font-semibold tracking-tight">
                  One semantic circuit. Many materials.
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab("PCD")}
                className={`inline-flex items-center gap-2 border px-3 py-2 text-xs font-medium transition-colors ${
                  activeTab === "PCD"
                    ? "border-teal/40 bg-teal/[0.08] text-teal"
                    : "border-border bg-background text-muted-foreground hover:border-teal/30 hover:text-foreground"
                }`}
                aria-pressed={activeTab === "PCD"}
              >
                <FileCode className="h-4 w-4" />
                View blueprint
              </button>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_auto_1.1fr] lg:items-start">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Lift from
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {sourceLanguages.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border border-border bg-background p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    What PCD preserves
                  </p>
                  <ul className="mt-3 space-y-2 text-xs leading-relaxed text-muted-foreground">
                    <li>Domains remain explicit.</li>
                    <li>Composition stays deterministic.</li>
                    <li>Open circuits never ship.</li>
                  </ul>
                </div>
              </div>

              <div className="hidden items-center justify-center lg:flex">
                <div className="flex flex-col items-center gap-3 pt-2 text-muted-foreground">
                  <ArrowRight className="h-4 w-4" />
                  <ArrowRight className="h-4 w-4" />
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="border border-teal/30 bg-background p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal/80">
                        Canonical form
                      </p>
                      <p className="mt-1 text-sm font-semibold text-foreground">
                        PCD Blueprint
                      </p>
                    </div>
                    <div className="rounded-full border border-teal/20 bg-teal/[0.08] px-3 py-1 text-[11px] font-medium text-teal">
                      {activeTab === "PCD" ? "Inspecting blueprint" : `Compiling to ${activeTab}`}
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {blueprintStages.map((stage, index) => {
                      const Icon = stage.icon;
                      const isActive = activeTab === "PCD" ? index < 2 : true;
                      return (
                        <div
                          key={stage.label}
                          className={`flex items-start gap-3 border px-3 py-3 transition-colors ${
                            isActive
                              ? "border-teal/25 bg-teal/[0.05]"
                              : "border-border bg-muted/30"
                          }`}
                        >
                          <div className={`mt-0.5 flex h-8 w-8 items-center justify-center border ${
                            isActive
                              ? "border-teal/30 bg-teal/[0.08] text-teal"
                              : "border-border bg-background text-muted-foreground"
                          }`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-foreground">{stage.label}</p>
                            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stage.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Compile to
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tabKeys.map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setActiveTab(key)}
                        className={`inline-flex items-center gap-2 border px-3 py-1.5 text-xs font-medium transition-colors ${
                          activeTab === key
                            ? "border-teal/40 bg-teal/[0.08] text-teal"
                            : "border-border bg-background text-muted-foreground hover:border-teal/30 hover:text-foreground"
                        }`}
                        aria-pressed={activeTab === key}
                      >
                        {key === "PCD" ? <FileCode className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
                        {key}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-xs italic text-muted-foreground">
              Select the blueprint or a target. The proof stays anchored; only the material changes.
            </p>
          </div>

          {/* Right: Tabbed code */}
          <div className="flex flex-col overflow-hidden border border-border">
            <div className="flex items-center justify-between gap-4 border-b border-border bg-muted/30 px-4 py-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Active view
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {activeTab === "PCD" ? "PCD blueprint source" : `${activeTab} output generated from the same blueprint`}
                </p>
              </div>
              <div className="rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium text-muted-foreground">
                {activeTab === "PCD" ? "Canonical representation" : `${activeOutput.lang} backend`}
              </div>
            </div>

            <div className="flex border-b border-border bg-muted/20">
              {tabKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`cursor-pointer px-4 py-2 text-xs font-medium transition-colors ${
                    activeTab === key
                      ? "border-b-2 border-teal text-teal"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>

            <div className="bg-[#0d1117] p-4 flex-1">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-teal/70">
                {activeTab === "PCD" ? "PCD Source" : `Output — ${activeTab}`}
              </p>
              <pre className="overflow-x-auto text-xs leading-relaxed text-gray-300">
                <code>{activeOutput.code}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Three key-point cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {keyPoints.map((kp) => (
            <div
              key={kp.title}
              className="group border border-border bg-muted p-6 transition-colors hover:border-teal/30 hover:bg-teal/[0.03]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05]">
                {kp.icon}
              </div>
              <p className="text-sm font-medium">{kp.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {kp.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-14 mx-auto max-w-3xl text-center text-sm italic leading-relaxed text-muted-foreground">
          &ldquo;An AI doesn&apos;t need a better language. It needs a language where incorrect programs cannot compile.&rdquo;
        </p>
      </div>
    </section>
  );
}
