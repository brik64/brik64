"use client";

import { useState } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { PhiC } from "@/components/PhiC";

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

const gridLabels = [
  { x: 8, y: 15, text: "MC_00" },
  { x: 32, y: 8, text: "ADD8" },
  { x: 68, y: 12, text: "STORE" },
  { x: 88, y: 20, text: "IF" },
  { x: 15, y: 45, text: "HASH" },
  { x: 52, y: 38, text: "Φ_c" },
  { x: 78, y: 48, text: "WRITE" },
  { x: 25, y: 75, text: "LOOP" },
  { x: 60, y: 72, text: "MC_63" },
  { x: 85, y: 80, text: "EVA" },
];

const accentCrosses = [
  { x: 20, y: 10 },
  { x: 50, y: 18 },
  { x: 80, y: 8 },
  { x: 10, y: 35 },
  { x: 42, y: 50 },
  { x: 72, y: 35 },
  { x: 30, y: 65 },
  { x: 65, y: 60 },
  { x: 90, y: 55 },
  { x: 18, y: 85 },
  { x: 48, y: 82 },
  { x: 78, y: 90 },
];

function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.35]">
      <style>
        {`
          @keyframes grid-fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes cross-pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
          }
          @keyframes label-drift {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.55; }
          }
        `}
      </style>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        style={{ animation: "grid-fade-in 1.5s ease-out both" }}
      >
        {Array.from({ length: 11 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 10}
            y1={0}
            x2={i * 10}
            y2={100}
            stroke="currentColor"
            className="text-border"
            strokeWidth={0.15}
          />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1={0}
            y1={i * 10}
            x2={100}
            y2={i * 10}
            stroke="currentColor"
            className="text-border"
            strokeWidth={0.15}
          />
        ))}
        {accentCrosses.map((cross, i) => (
          <g
            key={`cross-${i}`}
            style={{
              animation: `cross-pulse ${3 + (i % 4) * 0.8}s ease-in-out ${i * 0.3}s infinite`,
            }}
          >
            <line
              x1={cross.x - 1.2}
              y1={cross.y}
              x2={cross.x + 1.2}
              y2={cross.y}
              stroke="currentColor"
              className="text-teal"
              strokeWidth={0.35}
            />
            <line
              x1={cross.x}
              y1={cross.y - 1.2}
              x2={cross.x}
              y2={cross.y + 1.2}
              stroke="currentColor"
              className="text-teal"
              strokeWidth={0.35}
            />
          </g>
        ))}
        {gridLabels.map((label, i) => (
          <text
            key={`label-${i}`}
            x={label.x}
            y={label.y}
            fontSize={2.2}
            fontFamily="monospace"
            fill="currentColor"
            className="text-muted-foreground"
            style={{
              animation: `label-drift ${4 + (i % 3)}s ease-in-out ${0.5 + i * 0.4}s infinite`,
            }}
          >
            {label.text}
          </text>
        ))}
      </svg>
    </div>
  );
}

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

  return (
    <section className="border-border relative mx-auto w-full max-w-7xl border-x">
      <GridBackground />

      <div className="relative z-10 grid gap-8 px-6 pt-16 pb-12 md:grid-cols-2 md:gap-12 md:px-12 lg:px-18 lg:pt-20">
        {/* Left: Copy */}
        <div className="flex flex-col justify-center">
          <span className="text-muted-foreground mb-5 inline-block w-fit rounded-full border border-border bg-background/80 px-3.5 py-1 text-xs font-medium tracking-wide backdrop-blur-sm">
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
            <div className="flex h-11 max-w-sm items-center rounded-lg border border-teal/20 bg-background/80 pr-1.5 pl-4 backdrop-blur-sm">
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
          <div className="relative z-10 flex border-b border-white/10">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
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
