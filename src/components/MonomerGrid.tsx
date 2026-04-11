"use client";

import { useState } from "react";
import { CORE_MONOMERS, FAMILIES as MONOMER_FAMILIES, type FamilyName } from "@/lib/monomer-data";

const HERO_MONOMERS = CORE_MONOMERS.slice(0, 64);

const FAMILY_NOTES: Record<FamilyName, string> = {
  Arithmetic: "Bounded numeric transforms and deterministic arithmetic flow.",
  Logic: "Boolean and bitwise operations used to express explicit control and state decisions.",
  Memory: "Load, store, duplication, and movement primitives for controlled state handling.",
  Control: "Branching, call, loop, and halt primitives that keep execution paths explicit.",
  "I/O": "Boundary operations for read, write, and file descriptors at the circuit edge.",
  String: "Finite string transforms and representation operators for textual materials.",
  Crypto: "Hashing, signing, verification, and bounded cryptographic transforms.",
  System: "Time, environment, process, channel, and logging primitives for host interaction.",
};

function withAlpha(hex: string, alpha: string) {
  return hex.startsWith("#") ? `${hex}${alpha}` : hex;
}

export function MonomerGrid({ variant = "default" }: { variant?: "default" | "hero" }) {
  const [activeId, setActiveId] = useState(HERO_MONOMERS[0]?.id ?? 0);
  const activeMonomer = HERO_MONOMERS.find((monomer) => monomer.id === activeId) ?? HERO_MONOMERS[0];
  const activeTone = MONOMER_FAMILIES[activeMonomer.family as FamilyName];

  if (variant !== "hero") {
    return (
      <div className="pointer-events-auto flex items-center justify-center p-6">
        <div className="grid w-full max-w-[420px] grid-cols-8 gap-1.5 rounded-[1.5rem] border border-teal/20 bg-white/88 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-sm">
          {HERO_MONOMERS.map((monomer) => {
            const tone = MONOMER_FAMILIES[monomer.family as FamilyName];
            return (
              <div
                key={monomer.id}
                className="flex aspect-square min-h-[48px] flex-col items-center justify-center rounded-md border bg-background/95 px-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
                style={{
                  borderColor: withAlpha(tone, "33"),
                  boxShadow: `inset 0 0 0 1px ${withAlpha(tone, "55")}`,
                }}
              >
                <span className="text-[7px] font-bold" style={{ color: tone }}>
                  MC{String(monomer.id).padStart(2, "0")}
                </span>
                <span className="mt-1 text-[8px] leading-none">{monomer.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="pointer-events-auto w-full max-w-[35rem] rounded-[2rem] border border-teal/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,252,253,0.92))] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.14)] backdrop-blur-sm md:p-5">
      <div
        className="rounded-[1.5rem] border bg-background/94 p-4 shadow-sm"
        style={{
          borderColor: withAlpha(activeTone, "33"),
          boxShadow: `0 18px 45px rgba(0,0,0,0.08), inset 0 0 0 1px ${withAlpha(activeTone, "1f")}`,
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Certified monomer
            </p>
            <div className="mt-3 flex items-center gap-3">
              <span
                className="inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em]"
                style={{
                  borderColor: withAlpha(activeTone, "33"),
                  color: activeTone,
                  backgroundColor: withAlpha(activeTone, "12"),
                }}
              >
                MC{String(activeMonomer.id).padStart(2, "0")}
              </span>
              <div>
                <p className="text-base font-semibold text-foreground md:text-lg">{activeMonomer.name}</p>
                <p className="text-xs text-muted-foreground">{activeMonomer.family}</p>
              </div>
            </div>
          </div>

          <span
            className="rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]"
            style={{
              borderColor: withAlpha(activeTone, "2f"),
              color: activeTone,
              backgroundColor: withAlpha(activeTone, "12"),
            }}
          >
            Core certified
          </span>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-[1.05fr_1.15fr]">
          <div className="rounded-[1.25rem] border border-border/80 bg-muted/25 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Signature
            </p>
            <p className="mt-2 font-mono text-sm text-foreground">{activeMonomer.signature}</p>
          </div>

          <div className="rounded-[1.25rem] border border-border/80 bg-muted/25 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Role
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {FAMILY_NOTES[activeMonomer.family as FamilyName]}
            </p>
          </div>
        </div>

      </div>

      <div className="mt-4 rounded-[1.5rem] border border-border/80 bg-background/88 p-3 shadow-sm md:p-4">
        <div className="grid grid-cols-8 gap-1.5 md:gap-2">
          {HERO_MONOMERS.map((monomer) => {
            const tone = MONOMER_FAMILIES[monomer.family as FamilyName];
            const isActive = monomer.id === activeId;

            return (
              <button
                key={monomer.id}
                type="button"
                onMouseOver={() => setActiveId(monomer.id)}
                onMouseEnter={() => setActiveId(monomer.id)}
                onFocus={() => setActiveId(monomer.id)}
                onClick={() => setActiveId(monomer.id)}
                aria-label={`Inspect monomer MC${String(monomer.id).padStart(2, "0")} ${monomer.name}`}
                className="flex aspect-square min-h-[42px] cursor-pointer flex-col items-center justify-center rounded-[0.85rem] border bg-background px-1 text-[9px] font-semibold uppercase tracking-[0.11em] text-muted-foreground transition-[transform,border-color,box-shadow,background-color,color] duration-150 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline-none"
                style={{
                  borderColor: isActive ? withAlpha(tone, "55") : withAlpha(tone, "24"),
                  backgroundColor: isActive ? withAlpha(tone, "12") : "rgba(255,255,255,0.94)",
                  color: isActive ? "var(--foreground)" : undefined,
                  boxShadow: isActive
                    ? `0 10px 24px ${withAlpha(tone, "1f")}, inset 0 0 0 1px ${withAlpha(tone, "4a")}`
                    : `inset 0 0 0 1px ${withAlpha(tone, "18")}`,
                }}
              >
                <span className="font-mono text-[8px] font-bold" style={{ color: tone }}>
                  {String(monomer.id).padStart(2, "0")}
                </span>
                <span className="mt-1 leading-none text-[8px] md:text-[9px]">{monomer.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
