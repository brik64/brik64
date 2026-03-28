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
  { x: 8, y: 15, text: "ADD8" },
  { x: 32, y: 8, text: "STORE" },
  { x: 68, y: 12, text: "IF" },
  { x: 88, y: 20, text: "HASH" },
  { x: 15, y: 45, text: "WRITE" },
  { x: 52, y: 38, text: "Φ_c" },
  { x: 78, y: 48, text: "LOOP" },
  { x: 25, y: 75, text: "LEN" },
  { x: 60, y: 72, text: "MC_63" },
  { x: 85, y: 80, text: "EVAL" },
];

// Circuit traces — each is a polyline path that follows the grid with 90-degree turns
const circuitTraces = [
  "M 0,10 L 20,10 L 20,30 L 50,30",
  "M 100,20 L 80,20 L 80,10 L 50,10 L 50,18",
  "M 10,0 L 10,20 L 30,20 L 30,50 L 40,50",
  "M 70,0 L 70,15 L 90,15 L 90,40",
  "M 0,60 L 15,60 L 15,45 L 40,45 L 40,60 L 60,60",
  "M 100,55 L 78,55 L 78,70 L 60,70",
  "M 30,100 L 30,80 L 50,80 L 50,65 L 65,65",
  "M 90,100 L 90,85 L 70,85 L 70,75 L 85,75",
  "M 0,85 L 20,85 L 20,70 L 10,70 L 10,55",
  "M 60,100 L 60,90 L 40,90 L 40,78",
];

// Solder pads — small filled squares at intersections
const solderPads = [
  { x: 20, y: 10 }, { x: 20, y: 30 }, { x: 50, y: 30 },
  { x: 80, y: 20 }, { x: 50, y: 10 }, { x: 10, y: 20 },
  { x: 30, y: 50 }, { x: 70, y: 15 }, { x: 90, y: 40 },
  { x: 15, y: 60 }, { x: 40, y: 45 }, { x: 78, y: 55 },
  { x: 30, y: 80 }, { x: 60, y: 70 }, { x: 90, y: 85 },
];

// IC component outlines
const icComponents = [
  { x: 48, y: 28, label: "MC00" },
  { x: 28, y: 48, label: "EVA" },
  { x: 68, y: 62, label: "TCE" },
  { x: 12, y: 18, label: "" },
  { x: 82, y: 38, label: "" },
  { x: 38, y: 88, label: "" },
];

// Via dots — small bright circles at trace junctions
const viaDots = [
  { x: 50, y: 18 }, { x: 30, y: 20 }, { x: 40, y: 60 },
  { x: 60, y: 60 }, { x: 78, y: 70 }, { x: 50, y: 80 },
  { x: 90, y: 15 }, { x: 15, y: 45 }, { x: 70, y: 85 },
  { x: 40, y: 78 }, { x: 10, y: 55 }, { x: 85, y: 75 },
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
          @keyframes label-drift {
            0%, 100% { opacity: 0.22; }
            50% { opacity: 0.4; }
          }
          @keyframes trace-flow {
            0% { stroke-dashoffset: 24; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes via-pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.9; }
          }
        `}
      </style>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        style={{ animation: "grid-fade-in 1.5s ease-out both" }}
      >
        <defs>
          {/* Radial gradient overlay — fades grid at edges */}
          <radialGradient id="pcb-vignette" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="white" stopOpacity={1} />
            <stop offset="70%" stopColor="white" stopOpacity={0.6} />
            <stop offset="100%" stopColor="white" stopOpacity={0} />
          </radialGradient>
          <mask id="pcb-mask">
            <rect x="0" y="0" width="100" height="100" fill="url(#pcb-vignette)" />
          </mask>
        </defs>

        <g mask="url(#pcb-mask)">
          {/* Base grid — vertical lines */}
          {Array.from({ length: 11 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 10}
              y1={0}
              x2={i * 10}
              y2={100}
              stroke="currentColor"
              className="text-border"
              strokeWidth={0.2}
            />
          ))}
          {/* Base grid — horizontal lines */}
          {Array.from({ length: 11 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1={0}
              y1={i * 10}
              x2={100}
              y2={i * 10}
              stroke="currentColor"
              className="text-border"
              strokeWidth={0.2}
            />
          ))}

          {/* Circuit traces */}
          {circuitTraces.map((d, i) => (
            <path
              key={`trace-${i}`}
              d={d}
              fill="none"
              stroke="currentColor"
              className="text-teal"
              strokeWidth={0.4}
              strokeLinecap="square"
              opacity={0.55}
              strokeDasharray="4 2"
              style={{
                animation: `trace-flow ${6 + (i % 4) * 2}s linear ${i * 0.5}s infinite`,
              }}
            />
          ))}

          {/* Solder pads — small filled squares */}
          {solderPads.map((pad, i) => (
            <rect
              key={`pad-${i}`}
              x={pad.x - 0.75}
              y={pad.y - 0.75}
              width={1.5}
              height={1.5}
              fill="currentColor"
              className="text-teal"
              opacity={0.3}
            />
          ))}

          {/* IC component outlines */}
          {icComponents.map((ic, i) => (
            <g key={`ic-${i}`} opacity={0.4}>
              <rect
                x={ic.x}
                y={ic.y}
                width={4}
                height={2}
                rx={0.3}
                ry={0.3}
                fill="none"
                stroke="currentColor"
                className="text-teal"
                strokeWidth={0.15}
              />
              {ic.label && (
                <text
                  x={ic.x + 2}
                  y={ic.y + 1.35}
                  fontSize={0.9}
                  fontFamily="monospace"
                  fill="currentColor"
                  className="text-teal"
                  textAnchor="middle"
                  opacity={0.7}
                >
                  {ic.label}
                </text>
              )}
              {/* Tiny pin lines on the sides */}
              <line x1={ic.x + 1} y1={ic.y} x2={ic.x + 1} y2={ic.y - 0.5} stroke="currentColor" className="text-teal" strokeWidth={0.1} />
              <line x1={ic.x + 3} y1={ic.y} x2={ic.x + 3} y2={ic.y - 0.5} stroke="currentColor" className="text-teal" strokeWidth={0.1} />
              <line x1={ic.x + 1} y1={ic.y + 2} x2={ic.x + 1} y2={ic.y + 2.5} stroke="currentColor" className="text-teal" strokeWidth={0.1} />
              <line x1={ic.x + 3} y1={ic.y + 2} x2={ic.x + 3} y2={ic.y + 2.5} stroke="currentColor" className="text-teal" strokeWidth={0.1} />
            </g>
          ))}

          {/* Via dots — small bright circles at junctions */}
          {viaDots.map((dot, i) => (
            <circle
              key={`via-${i}`}
              cx={dot.x}
              cy={dot.y}
              r={0.8}
              fill="currentColor"
              className="text-teal"
              opacity={0.5}
              style={{
                animation: `via-pulse ${3 + (i % 3) * 1.2}s ease-in-out ${i * 0.4}s infinite`,
              }}
            />
          ))}

          {/* Floating monomer labels */}
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
        </g>
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
