"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { ArrowRight, BookOpen } from "lucide-react";
import { PhiC } from "@/components/PhiC";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

const tabs = [
  {
    label: "Compile",
    lines: [
      { text: "$ brikc compile app.pcd --target js", style: "command" as const },
      { text: "", style: "blank" as const },
      { text: "  Parsing app.pcd...", style: "muted" as const },
      { text: "  Resolving 4 monomers: ADD8, STORE, WRITE, LEN", style: "muted" as const },
      { text: "  Emitting JavaScript (ES2024)...", style: "muted" as const },
      { text: "", style: "blank" as const },
      { text: "  ✓ Compiled successfully → dist/app.js", style: "success" as const },
      { text: "  ✓ Φ_c = 1 — circuit closed", style: "success" as const, hasPhiC: true },
    ],
  },
  {
    label: "Lift",
    lines: [
      { text: "$ brikc lift legacy.js --to pcd", style: "command" as const },
      { text: "", style: "blank" as const },
      { text: "  Analyzing legacy.js (247 lines)...", style: "muted" as const },
      { text: "  Extracting computational graph...", style: "muted" as const },
      { text: "  Mapping to PCD monomers...", style: "muted" as const },
      { text: "", style: "blank" as const },
      { text: "  ✓ Lifted → legacy.pcd", style: "success" as const },
      { text: "  ✓ 12 monomers identified", style: "success" as const },
    ],
  },
  {
    label: "Transpile",
    lines: [
      { text: "$ brikc transpile app.pcd --from js --to rust", style: "command" as const },
      { text: "", style: "blank" as const },
      { text: "  Loading PCD intermediate...", style: "muted" as const },
      { text: "  Verifying source equivalence...", style: "muted" as const },
      { text: "  Emitting Rust (edition 2024)...", style: "muted" as const },
      { text: "", style: "blank" as const },
      { text: "  ✓ Transpiled → dist/app.rs", style: "success" as const },
      { text: "  ✓ Φ_c = 1 — both sides verified", style: "success" as const, hasPhiC: true },
    ],
  },
  {
    label: "Certify",
    lines: [
      { text: "$ brikc check program.pcd", style: "command" as const },
      { text: "", style: "blank" as const },
      { text: "  ┌──────────────────────────────────┐", style: "box" as const },
      { text: "  │  CERTIFICATION REPORT             │", style: "box" as const },
      { text: "  ├──────────────────────────────────┤", style: "box" as const },
      { text: "  │  Status:   ✓ CERTIFIED            │", style: "box-green" as const },
      { text: "  │  Φ_c:      1.000000               │", style: "box-green" as const },
      { text: "  │  Panics:   0 possible              │", style: "box" as const },
      { text: "  └──────────────────────────────────┘", style: "box" as const },
    ],
  },
];

function TerminalLine({ line }: { line: (typeof tabs)[number]["lines"][number] }) {
  if (line.style === "blank") return <div className="h-3" />;

  if (line.style === "command") {
    return (
      <div className="font-mono text-sm text-white/70">
        <span className="text-teal">$</span> {line.text.slice(2)}
      </div>
    );
  }

  if (line.style === "success") {
    const hasPhiC = "hasPhiC" in line && line.hasPhiC;
    if (hasPhiC) {
      const parts = line.text.split("Φ_c");
      return (
        <div className="font-mono text-sm text-emerald-400">
          {parts[0]}
          <PhiC />
          {parts[1]}
        </div>
      );
    }
    return <div className="font-mono text-sm text-emerald-400">{line.text}</div>;
  }

  if (line.style === "box-green") {
    return <div className="font-mono text-sm font-bold text-emerald-400">{line.text}</div>;
  }

  if (line.style === "box") {
    return <div className="font-mono text-sm text-emerald-400/70">{line.text}</div>;
  }

  return <div className="font-mono text-sm text-zinc-400">{line.text}</div>;
}

export function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [paused, setPaused] = useState(false);

  const totalTabs = tabs.length;

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % totalTabs);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused, totalTabs]);

  const handleTabClick = useCallback((i: number) => {
    setActiveTab(i);
    setPaused(true);
    // Resume auto-cycle after 10s of no interaction
    setTimeout(() => setPaused(false), 10000);
  }, []);

  return (
    <section className="border-border relative mx-auto w-full max-w-7xl overflow-hidden border-x bg-background">
      {/* Three.js wireframe background */}
      <HeroWireframe />
      <div className="relative z-10 grid gap-8 px-6 pt-16 pb-12 md:grid-cols-2 md:gap-12 md:px-12 lg:px-18 lg:pt-20">
        {/* Left: Copy */}
        <div className="flex flex-col justify-center">
          <span className="text-muted-foreground mb-5 inline-block w-fit rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium tracking-wide shadow-sm">
            A new way to build software
          </span>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            The platform for{" "}
            <span className="text-teal">verified software</span>.
          </h1>

          <p className="text-muted-foreground mt-4 max-w-lg text-base leading-relaxed md:text-lg">
            Compile, certify, publish. The standard format for software that
            provably works.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex h-11 max-w-sm items-center border border-teal/30 bg-background pr-1.5 pl-4 shadow-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-full min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder-teal/40 outline-none"
              />
              <button className="inline-flex h-8 cursor-pointer items-center justify-center rounded-md bg-teal px-4 text-sm font-medium text-white transition-colors hover:bg-teal-hover">
                Get early access
              </button>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-5">
            <a
              href="/registry"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              Browse the registry <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://docs.brik64.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
            >
              Docs <BookOpen className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Right: Interactive terminal */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
          <div className="relative z-10 flex items-center gap-2 border-b border-white/10 px-4 py-2"><span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" /><span className="mx-1" />
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => handleTabClick(i)}
                className={`cursor-pointer px-4 py-2.5 text-xs font-medium tracking-wide transition-colors ${
                  activeTab === i
                    ? "border-b-2 border-teal text-teal"
                    : "text-white/40 hover:text-white/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative z-10 flex flex-col gap-0.5 p-5">
            {tabs[activeTab].lines.map((line, i) => (
              <TerminalLine key={i} line={line} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
