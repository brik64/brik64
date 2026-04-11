"use client";

import { useState } from "react";
import {
  CORE_MONOMERS,
  EXTENDED_MONOMERS,
  FAMILIES as CORE_FAMILIES,
  type Monomer,
} from "@/lib/monomer-data";

const HERO_CORE_MONOMERS = CORE_MONOMERS.slice(0, 64);
const HERO_EXTENDED_MONOMERS = EXTENDED_MONOMERS.slice(0, 60);

const EXTENDED_FAMILIES: Record<string, string> = {
  Float64: "#4fd1c5",
  Math: "#33d6ff",
  Network: "#14b8a6",
  Graphics: "#8b7ec8",
  Audio: "#b38cff",
  Filesystem: "#f59e0b",
  Concurrency: "#22c55e",
  Interop: "#64748b",
  String: "#8b7ec8",
};

const MONOMER_FAMILIES: Record<string, string> = {
  ...CORE_FAMILIES,
  ...EXTENDED_FAMILIES,
};

type HeroTrack = "core" | "extended";

const HERO_TRACKS: Record<
  HeroTrack,
  {
    label: string;
    panelLabel: string;
    badge: string;
    prefix: "MC" | "MX";
    monomers: Monomer[];
  }
> = {
  core: {
    label: "ATOMIC BOUNDED OPERATIONS",
    panelLabel: "Certified monomer",
    badge: "CORE CERTIFIED",
    prefix: "MC",
    monomers: HERO_CORE_MONOMERS,
  },
  extended: {
    label: "ATOMIC EXPANDED BY CONTRACT",
    panelLabel: "Contract monomer",
    badge: "EXTENDED CONTRACT",
    prefix: "MX",
    monomers: HERO_EXTENDED_MONOMERS,
  },
};

const FAMILY_NOTES: Record<string, string> = {
  Arithmetic: "Bounded numeric transforms and deterministic arithmetic flow.",
  Logic: "Boolean and bitwise operations used to express explicit control and state decisions.",
  Memory: "Load, store, duplication, and movement primitives for controlled state handling.",
  Control: "Branching, call, loop, and halt primitives that keep execution paths explicit.",
  "I/O": "Boundary operations for read, write, and file descriptors at the circuit edge.",
  String: "Finite string transforms and representation operators for textual materials.",
  Crypto: "Hashing, signing, verification, and bounded cryptographic transforms.",
  System: "Time, environment, process, channel, and logging primitives for host interaction.",
  Float64: "Floating-point operations remain explicit and contract-bounded in the review chain.",
  Math: "Extended mathematical functions with explicit boundary semantics.",
  Network: "Network operations remain visible as external boundary contracts.",
  Graphics: "Graphics operations are tracked as extended domain effects.",
  Audio: "Audio operations are modeled as extended output contracts.",
  Filesystem: "Filesystem operations are represented with explicit host boundary semantics.",
  Concurrency: "Concurrency operations stay declared as contract-bounded orchestration primitives.",
  Interop: "Interop operations expose external runtime contracts and conversion boundaries.",
};

function withAlpha(hex: string, alpha: string) {
  return hex.startsWith("#") ? `${hex}${alpha}` : hex;
}

function getTone(family: string) {
  return MONOMER_FAMILIES[family] ?? "#64748b";
}

function getOfficialNumber(track: HeroTrack, id: number) {
  if (track === "extended") {
    return id + 68;
  }

  return id;
}

export function MonomerGrid({ variant = "default" }: { variant?: "default" | "hero" }) {
  const [activeTrack, setActiveTrack] = useState<HeroTrack>("core");
  const [activeIds, setActiveIds] = useState<Record<HeroTrack, number>>({
    core: HERO_CORE_MONOMERS[0]?.id ?? 0,
    extended: HERO_EXTENDED_MONOMERS[0]?.id ?? 0,
  });

  const activeMonomers = HERO_TRACKS[activeTrack].monomers;
  const activeMonomer =
    activeMonomers.find((monomer) => monomer.id === activeIds[activeTrack]) ?? activeMonomers[0];
  const activeTone = getTone(activeMonomer.family);
  const activeOfficialNumber = getOfficialNumber(activeTrack, activeMonomer.id);

  const activeTrackIndex = activeTrack === "core" ? 0 : 1;
  const badgeTone = activeTrack === "core" ? "#00b8d4" : "#f59e0b";

  function selectTrack(track: HeroTrack) {
    setActiveTrack(track);
  }

  function setActiveMonomerId(track: HeroTrack, monomerId: number) {
    setActiveIds((current) => ({ ...current, [track]: monomerId }));
  }

  if (variant !== "hero") {
    return (
      <div className="pointer-events-auto flex items-center justify-center p-6">
        <div className="grid w-full max-w-[420px] grid-cols-8 gap-1.5 rounded-[1.5rem] border border-teal/20 bg-white/88 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-sm">
          {HERO_CORE_MONOMERS.map((monomer) => {
            const tone = getTone(monomer.family);
            const officialNumber = getOfficialNumber("core", monomer.id);
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
                  {monomer.prefix}
                  {String(officialNumber).padStart(2, "0")}
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
              {HERO_TRACKS[activeTrack].panelLabel}
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {HERO_TRACKS[activeTrack].label}
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
                {HERO_TRACKS[activeTrack].prefix}
                {String(activeOfficialNumber).padStart(2, "0")}
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
              borderColor: withAlpha(badgeTone, "45"),
              color: badgeTone,
              backgroundColor: withAlpha(badgeTone, "14"),
            }}
          >
            {HERO_TRACKS[activeTrack].badge}
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
            <p className="mt-2 overflow-hidden text-sm leading-relaxed text-muted-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
              {FAMILY_NOTES[activeMonomer.family]}
            </p>
          </div>
        </div>

      </div>

      <div className="mt-4 rounded-[1.5rem] border border-border/80 bg-background/88 p-3 shadow-sm md:p-4">
        <div className="mb-3 flex items-center justify-start gap-3">
          <div className="inline-flex rounded-full border border-border/80 bg-muted/35 p-1">
            {(["core", "extended"] as const).map((track) => {
              const isActive = track === activeTrack;
              const trackColor = track === "core" ? "text-teal" : "text-amber-600";
              return (
                <button
                  key={track}
                  type="button"
                  onClick={() => selectTrack(track)}
                  className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                    isActive ? `bg-muted/70 ${trackColor}` : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label={`Show ${HERO_TRACKS[track].label}`}
                  aria-pressed={isActive}
                >
                  {track === "core" ? "Core" : "Extended"}
                </button>
              );
            })}
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeTrackIndex * 100}%)` }}
          >
            {(["core", "extended"] as const).map((track) => (
              <div key={track} className="w-full shrink-0">
                <div className="grid grid-cols-8 gap-1.5 md:gap-2">
                  {HERO_TRACKS[track].monomers.map((monomer) => {
                    const tone = getTone(monomer.family);
                    const isActive = monomer.id === activeIds[track] && track === activeTrack;
                    const officialNumber = getOfficialNumber(track, monomer.id);

                    return (
                      <button
                        key={`${track}-${monomer.id}`}
                        type="button"
                        onMouseOver={() => setActiveMonomerId(track, monomer.id)}
                        onMouseEnter={() => setActiveMonomerId(track, monomer.id)}
                        onFocus={() => setActiveMonomerId(track, monomer.id)}
                        onClick={() => {
                          setActiveMonomerId(track, monomer.id);
                          selectTrack(track);
                        }}
                        aria-label={`Inspect monomer ${HERO_TRACKS[track].prefix}${String(officialNumber).padStart(2, "0")} ${monomer.name}`}
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
                          {String(officialNumber).padStart(2, "0")}
                        </span>
                        <span className="mt-1 leading-none text-[8px] md:text-[9px]">{monomer.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
