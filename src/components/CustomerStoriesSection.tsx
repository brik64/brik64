"use client";

import { useState } from "react";
import { PhiC } from "@/components/PhiC";

type TabKey = "compile" | "lift" | "transpile" | "certify";

interface TabData {
  label: string;
  description: string;
  stat: string;
  command: string;
  output: string[];
}

const tabs: Record<TabKey, TabData> = {
  compile: {
    label: "Compile",
    description:
      "Write PCD once, compile to any target. The compiler preserves semantic equivalence across all outputs — verified by Φc.",
    stat: "Multiple compilation targets",
    command: "brikc compile app.pcd --target rust",
    output: [
      "brik64 compiler v5.0.0",
      "",
      "  Parsing    app.pcd ........................ ok",
      "  Lowering   PCD → IR ....................... ok",
      "  Emitting   IR → Rust ...................... ok",
      "  Verifying  Φc equivalence ................. ok",
      "",
      '  ✓ Output written to dist/app.rs (342 lines)',
      "  ✓ Semantic equivalence: certified",
      "  ✓ Closure certificate Φc = 1",
    ],
  },
  lift: {
    label: "Lift",
    description:
      "Reverse-compile existing code from mainstream languages into PCD. Every operation is lifted — no manual rewriting required.",
    stat: "100% liftability across all tested files",
    command: "brikc lift legacy.js --to pcd",
    output: [
      "brik64 lifter v5.0.0",
      "",
      "  Scanning   legacy.js ...................... ok",
      "  Detecting  47 functions, 12 classes ....... ok",
      "  Lifting    JS → PCD ...................... ok",
      "  Mapping    operations ..................... ok",
      "",
      "  ✓ Output written to dist/legacy.pcd",
      "  ✓ Operations lifted: 184/184 (100%)",
      "  ✓ Semantic coverage: complete",
    ],
  },
  transpile: {
    label: "Transpile",
    description:
      "Convert any codebase between source languages and targets through PCD as the verified intermediate representation.",
    stat: "Any source → PCD → any target",
    command: "brikc transpile ./src/ --from python --to rust",
    output: [
      "brik64 transpiler v5.0.0",
      "",
      "  Scanning   ./src/ (23 files) .............. ok",
      "  Lifting    Python → PCD .................. ok",
      "  Compiling  PCD → Rust .................... ok",
      "  Verifying  equivalence .................... ok",
      "",
      "  ✓ 23 files transpiled to dist/rust/",
      "  ✓ Path: Python → PCD → Rust",
      "  ✓ All 23 files Φc-certified",
    ],
  },
  certify: {
    label: "Certify",
    description:
      "Run the closure metric on any PCD program. Φc mathematically proves whether a program is semantically complete.",
    stat: "Mathematical proof, not tests",
    command: "brikc check program.pcd",
    output: [
      "brik64 checker v5.0.0",
      "",
      "  Loading    program.pcd .................... ok",
      "  Building   dependency graph ............... ok",
      "  Computing  Φc ............................ ok",
      "",
      "  ┌─────────────────────────────────┐",
      "  │  Φc = 1                          │",
      "  │  Status: CERTIFIED              │",
      "  │  Unclosed operations: 0          │",
      "  │  Total operations: 312           │",
      "  └─────────────────────────────────┘",
    ],
  },
};

const tabOrder: TabKey[] = ["compile", "lift", "transpile", "certify"];

export function CustomerStoriesSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("compile");
  const current = tabs[activeTab];

  return (
    <section className="border-border border-t px-6 py-12 md:py-14">
      {/* Header */}
      <div className="border-border grid gap-8 border-b px-6 py-8 md:grid-cols-[1.1fr_1fr] md:px-8 md:py-10">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            [05] · CAPABILITIES
          </p>
          <h2 className="text-2xl font-semibold leading-[40px] tracking-[-0.9px] md:text-4xl">
            What you can build today.
          </h2>
          <a
            href="https://docs.brik64.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            Read the docs →
          </a>
        </div>
        <div>
          <p className="text-base leading-relaxed text-muted-foreground">
            Everything ships in a single binary:{" "}
            <code className="font-mono text-sm text-foreground">brikc</code>. No
            runtime, no dependencies, no setup. Write PCD, compile to any target,
            lift from any language, certify with <PhiC />.
          </p>
        </div>
      </div>

      {/* Tabbed Code Showcase */}
      <div className="px-6 py-8 md:px-8 md:py-10">
        <div className="mb-0 flex gap-1 border-b border-border">
          {tabOrder.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              className={`relative cursor-pointer px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === key
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tabs[key].label}
              {activeTab === key && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
              )}
            </button>
          ))}
        </div>

        <div className="grid gap-0 overflow-hidden rounded-b-lg border border-t-0 border-border md:grid-cols-[1fr_1.4fr]">
          {/* Left: Description */}
          <div className="flex flex-col justify-center border-b border-border bg-background p-6 md:border-b-0 md:border-r md:p-8">
            <h3 className="mb-3 text-lg font-medium">{current.label}</h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {current.description}
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 ring-1 ring-inset ring-emerald-500/20">
                {current.stat}
              </span>
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="overflow-x-auto rounded-xl bg-zinc-950 p-6 font-mono text-sm md:p-8">
            <div className="mb-4 flex items-center gap-2">
              <span className="select-none text-emerald-400">$</span>
              <span className="text-zinc-100">{current.command}</span>
            </div>
            <div className="space-y-0">
              {current.output.map((line, i) => (
                <div key={i} className="leading-6">
                  {line === "" ? (
                    <br />
                  ) : line.startsWith("  ✓") ? (
                    <span className="text-emerald-400">{line}</span>
                  ) : line.includes("CERTIFIED") ||
                    line.includes("Φc = 1") ? (
                    <span className="font-bold text-emerald-400">{line}</span>
                  ) : line.startsWith("  ┌") ||
                    line.startsWith("  └") ||
                    line.startsWith("  │") ? (
                    <span className="text-emerald-400">{line}</span>
                  ) : (
                    <span className="text-zinc-400">{line}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
