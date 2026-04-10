"use client";

import { TextReveal } from "@/components/ui/pixel-perfect/text-reveal";
import { Crosshair } from "@/components/ui/pixel-perfect/crosshair";
import { FAMILIES, type FamilyName } from "@/lib/monomer-data";

interface GraphNode {
  id: string;
  num: string;
  name: string;
  family: string;
  x: number;
  y: number;
  selected?: boolean;
}

interface Connection {
  from: [number, number];
  mid: [number, number][];
  to: [number, number];
  color: string;
  dashed?: boolean;
  bright?: boolean;
}

const NODES: GraphNode[] = [
  { id: "AR-00", num: "00", name: "ADD", family: "Arithmetic", x: 160, y: 60 },
  { id: "AR-02", num: "02", name: "MUL", family: "Arithmetic", x: 160, y: 180 },
  { id: "LG-10", num: "10", name: "XOR", family: "Logic", x: 320, y: 120, selected: true },
  { id: "ME-12", num: "12", name: "SAL", family: "Memory", x: 480, y: 60 },
  { id: "IO-35", num: "35", name: "WRT", family: "I/O", x: 480, y: 195 },
  { id: "CT-24", num: "24", name: "IF", family: "Control", x: 630, y: 120 },
];

const CONNECTIONS: Connection[] = [
  { from: [100, 145], mid: [[130, 145], [130, 100]], to: [160, 100], color: "#00e5ff" },
  { from: [100, 145], mid: [[130, 145], [130, 220]], to: [160, 220], color: "#00e5ff" },
  { from: [240, 100], mid: [[280, 100], [280, 160]], to: [320, 160], color: "#00e5ff" },
  { from: [240, 220], mid: [[280, 220], [280, 160]], to: [320, 160], color: "#00e5ff" },
  { from: [400, 160], mid: [[440, 160], [440, 100]], to: [480, 100], color: "#00e5ff", bright: true },
  { from: [400, 160], mid: [[440, 160], [440, 235]], to: [480, 235], color: "#e0b020", dashed: true },
  { from: [560, 100], mid: [[600, 100], [600, 160]], to: [630, 160], color: "#6b8c40" },
  { from: [560, 235], mid: [[600, 235], [600, 275]], to: [740, 275], color: "#e0b020", dashed: true },
  { from: [710, 160], mid: [[740, 160], [740, 275]], to: [740, 275], color: "#6b8c40" },
];

function NodeBox({ node }: { node: GraphNode }) {
  const color = FAMILIES[node.family as FamilyName] ?? "#64748b";
  return (
    <g transform={`translate(${node.x}, ${node.y})`}>
      {/* Cell background */}
      <rect
        width="80"
        height="80"
        rx="6"
        fill="#1A1817"
        stroke={node.selected ? "#00e5ff" : "#333"}
        strokeWidth={node.selected ? 2 : 1}
      />
      {/* Family color bar */}
      <rect width="80" height="3" rx="1.5" fill={color} />
      {/* Glow for selected */}
      {node.selected && (
        <rect
          width="80"
          height="80"
          rx="6"
          fill="none"
          stroke="#00e5ff"
          strokeWidth="2"
          opacity="0.4"
          filter="url(#glow)"
        />
      )}
      {/* Port left */}
      <circle cx="0" cy="40" r="5" fill="white" stroke={color} strokeWidth="2" />
      {/* Port right */}
      <circle cx="80" cy="40" r="5" fill={node.selected ? color : "white"} stroke={color} strokeWidth="2" />
      {/* ID */}
      <text x="8" y="18" fontSize="8" fontFamily="monospace" fill="rgba(255,255,255,0.4)">
        {node.id}
      </text>
      {/* Number */}
      <text
        x="40"
        y="52"
        fontSize="26"
        fontWeight="700"
        fontFamily="Jura, system-ui"
        fill="white"
        textAnchor="middle"
        letterSpacing="-1"
      >
        {node.num}
      </text>
      {/* Name */}
      <text x="40" y="65" fontSize="10" fontWeight="600" fontFamily="monospace" fill={color} textAnchor="middle">
        {node.name}
      </text>
      {/* Family */}
      <text x="40" y="75" fontSize="6" fill="rgba(255,255,255,0.25)" textAnchor="middle">
        {node.family}
      </text>
    </g>
  );
}

export function CircuitAnalyzerSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-center gap-3 md:mb-14">
          <Crosshair size={20} />
          <p className="text-xs font-medium tracking-[2px] text-muted-foreground">
            [04.2] · CIRCUIT ANALYZER
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              <TextReveal>Trace every connection.</TextReveal>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              See how monomers connect inside a polymer. Every path verified.
              Every circuit closed. If Φc = 1, the circuit is complete.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-foreground">
              OAuth2 Handler
            </span>
            <span className="text-xs text-muted-foreground">
              6 nodes · 9 connections
            </span>
            <span className="rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-semibold text-white">
              Φc = 1 ✓
            </span>
          </div>
        </div>

        {/* Canvas */}
        <div
          className="relative mt-8 overflow-hidden rounded-xl border border-border"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,229,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.05) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          <svg
            viewBox="0 0 800 320"
            className="w-full"
            style={{ minHeight: 320 }}
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connections */}
            {CONNECTIONS.map((conn, i) => {
              const points = [
                conn.from,
                ...conn.mid,
                conn.to,
              ]
                .map((p) => p.join(","))
                .join(" ");
              return (
                <polyline
                  key={i}
                  points={points}
                  stroke={conn.color}
                  strokeWidth={conn.bright ? 3 : 2}
                  fill="none"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  opacity={conn.bright ? 0.9 : conn.dashed ? 0.4 : 0.5}
                  strokeDasharray={conn.dashed ? "6 4" : undefined}
                />
              );
            })}

            {/* INPUT node */}
            <g transform="translate(20, 120)">
              <rect width="80" height="40" rx="8" fill="white" stroke="#34d399" strokeWidth="2" />
              <text x="14" y="24" fontSize="10" fontWeight="700" fontFamily="monospace" fill="#059669">
                ▶ INPUT
              </text>
              <text x="65" y="24" fontSize="8" fill="#999">i64</text>
            </g>

            {/* Nodes */}
            {NODES.map((node) => (
              <NodeBox key={node.id} node={node} />
            ))}

            {/* OUTPUT node */}
            <g transform="translate(720, 250)">
              <rect width="65" height="40" rx="8" fill="white" stroke="#34d399" strokeWidth="2" />
              <text x="8" y="24" fontSize="10" fontWeight="700" fontFamily="monospace" fill="#059669">
                OUT ▶
              </text>
            </g>

            {/* Minimap background */}
            <g transform="translate(16, 250)">
              <rect width="100" height="55" rx="6" fill="rgba(255,255,255,0.9)" stroke="#ddd" strokeWidth="1" />
              <text x="8" y="12" fontSize="6" fill="#999" fontWeight="600">MINIMAP</text>
              <circle cx="15" cy="30" r="3" fill="#34d399" />
              <rect x="28" y="22" width="5" height="5" rx="1" fill="#00e5ff" />
              <rect x="28" y="33" width="5" height="5" rx="1" fill="#00e5ff" />
              <rect x="46" y="27" width="5" height="5" rx="1" fill="#5ce5f0" />
              <rect x="62" y="22" width="5" height="5" rx="1" fill="#00b8d4" />
              <rect x="62" y="35" width="5" height="5" rx="1" fill="#e0b020" />
              <rect x="80" y="27" width="5" height="5" rx="1" fill="#6b8c40" />
            </g>
          </svg>

          {/* Legend overlay */}
          <div className="absolute bottom-3 right-3 flex gap-3 rounded-md border border-border bg-background/90 px-3 py-1.5 text-[9px] text-muted-foreground backdrop-blur-sm">
            <span className="flex items-center gap-1">
              <span className="inline-block h-0.5 w-3 bg-teal" /> Data
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-0.5 w-3 border-t border-dashed border-gold" /> I/O
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-0.5 w-3 bg-olive" /> Control
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
