"use client";

import { useMemo, useState } from "react";

import { CORE_MONOMERS, EXTENDED_MONOMERS, type Monomer } from "@/lib/monomer-data";
import { cn } from "@/lib/utils";
import {
  ButtonVNext,
  GitHubMark,
  PageHeaderVNext,
  SupportingSurface,
} from "@/components/vnext/primitives";
import { MonomerTile } from "@/components/vnext/monomer-tile";

type HoveredMonomer = {
  id: string;
  title: string;
  type: "core" | "extended";
  domain: string;
  property: string;
  description: string;
};

type Edge = "top" | "right" | "bottom" | "left";

type ExtendedFamilyGroup = {
  edge: Edge;
  label: string;
  monomers: Monomer[];
};

const DEFAULT_MONOMER: HoveredMonomer = {
  id: "MC_00",
  title: "ADD",
  type: "core",
  domain: "i64, i64 → i64",
  property: "Bounded",
  description: "Standard 64-bit integer addition with overflow wrapping.",
};

function toHoveredMonomer(monomer: Monomer): HoveredMonomer {
  const isCore = monomer.prefix === "MC";
  const id = isCore
    ? `MC_${monomer.id.toString().padStart(2, "0")}`
    : `MX_${(monomer.id + 64).toString().padStart(2, "0")}`;

  return {
    id,
    title: monomer.name,
    type: isCore ? "core" : "extended",
    domain: monomer.signature,
    property: isCore ? "Bounded" : "Contract",
    description: monomer.description,
  };
}

function MonomerDot({
  monomer,
  activeId,
  onHover,
  dense = false,
}: {
  monomer: Monomer;
  activeId: string;
  onHover: (monomer: HoveredMonomer) => void;
  dense?: boolean;
}) {
  const hovered = toHoveredMonomer(monomer);
  const isCore = monomer.prefix === "MC";
  const isActive = activeId === hovered.id;

  return (
    <button
      type="button"
      aria-label={`${hovered.id}: ${monomer.name}`}
      title={`${hovered.id}: ${monomer.name}`}
      onFocus={() => onHover(hovered)}
      onMouseEnter={() => onHover(hovered)}
      className={cn(
        "group relative rounded-sm border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
        dense ? "h-5 w-5 sm:h-6 sm:w-6" : "h-5 w-5 sm:h-6 sm:w-6",
        isCore
          ? "border-[#2BB6AC]/20 bg-[#2BB6AC]/12 hover:bg-[#2BB6AC]/35"
          : "border-[#FF8A22]/20 bg-[#FF8A22]/12 hover:bg-[#FF8A22]/35",
        isActive && isCore
          ? "z-20 scale-125 border-[#2BB6AC] bg-[#2BB6AC] shadow-[0_0_20px_rgba(43,182,172,0.95)]"
          : null,
        isActive && !isCore
          ? "z-20 scale-125 border-[#FF8A22] bg-[#FF8A22] shadow-[0_0_20px_rgba(255,138,34,0.95)]"
          : null,
      )}
    >
      <span className="sr-only">{monomer.name}</span>
    </button>
  );
}

function FamilyStrip({
  group,
  activeId,
  onHover,
}: {
  group: ExtendedFamilyGroup;
  activeId: string;
  onHover: (monomer: HoveredMonomer) => void;
}) {
  const vertical = group.edge === "left" || group.edge === "right";

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        vertical ? "flex-col" : "flex-row",
      )}
      aria-label={group.label}
    >
      {group.monomers.map((monomer) => (
        <MonomerDot
          key={`${monomer.prefix}-${monomer.id}`}
          monomer={monomer}
          activeId={activeId}
          onHover={onHover}
        />
      ))}
    </div>
  );
}

function EdgeFace({
  edge,
  groups,
  activeId,
  onHover,
}: {
  edge: Edge;
  groups: ExtendedFamilyGroup[];
  activeId: string;
  onHover: (monomer: HoveredMonomer) => void;
}) {
  const vertical = edge === "left" || edge === "right";
  const label = groups.map((group) => group.label).join(" / ");
  const labelClassName =
    "font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#FF8A22]/70";

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        vertical ? "flex-row" : "flex-col",
      )}
    >
      {edge === "left" ? (
        <span className={cn(labelClassName, "max-h-[170px] [writing-mode:vertical-rl]")}>{label}</span>
      ) : null}
      {edge === "top" || edge === "bottom" ? (
        <span className={cn(labelClassName, "max-w-[320px] truncate text-center")}>{label}</span>
      ) : null}
      <div
        className={cn(
          "flex rounded-[18px] border border-[#FF8A22]/12 bg-[#140d0a]/44 p-2.5 shadow-inner backdrop-blur-sm",
          vertical ? "flex-row gap-2" : "flex-col gap-2",
        )}
      >
        {groups.map((group) => (
          <FamilyStrip
            key={group.label}
            group={group}
            activeId={activeId}
            onHover={onHover}
          />
        ))}
      </div>
      {edge === "right" ? (
        <span className={cn(labelClassName, "max-h-[170px] [writing-mode:vertical-rl]")}>{label}</span>
      ) : null}
    </div>
  );
}

function CoreMatrix({
  activeId,
  onHover,
}: {
  activeId: string;
  onHover: (monomer: HoveredMonomer) => void;
}) {
  return (
    <div className="relative rounded-[30px] border border-[#2BB6AC]/16 bg-[#071117]/74 p-5 shadow-[inset_0_0_40px_rgba(43,182,172,0.04),0_28px_90px_rgba(0,0,0,0.34)] backdrop-blur-sm">
      <div className="grid grid-cols-8 gap-1.5">
        {CORE_MONOMERS.map((monomer) => (
          <MonomerDot
            key={`${monomer.prefix}-${monomer.id}`}
            monomer={monomer}
            activeId={activeId}
            onHover={onHover}
          />
        ))}
      </div>
    </div>
  );
}

export function MonomerCubeMap() {
  const [hoveredMonomer, setHoveredMonomer] = useState<HoveredMonomer>(DEFAULT_MONOMER);

  const edgeGroups = useMemo(() => {
    const edges: Edge[] = ["top", "right", "bottom", "left"];
    const groups = Array.from({ length: 8 }, (_, index) => {
      const monomers = EXTENDED_MONOMERS.slice(index * 8, index * 8 + 8);
      const families = Array.from(new Set(monomers.map((monomer) => monomer.family)));

      return {
        label: families.join(" / "),
        monomers,
      };
    });

    return edges.reduce<Record<Edge, ExtendedFamilyGroup[]>>(
      (acc, edge, edgeIndex) => {
        acc[edge] = groups.slice(edgeIndex * 2, edgeIndex * 2 + 2).map((group) => ({
          edge,
          label: group.label,
          monomers: group.monomers,
        }));
        return acc;
      },
      { top: [], right: [], bottom: [], left: [] },
    );
  }, []);

  return (
    <SupportingSurface className="border-t border-border bg-[#05080c]">
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.34fr)] lg:items-center">
          <div className="min-w-0">
            <PageHeaderVNext
              eyebrow="The Atomic Logic"
              title="Monomer structure, core first."
              description="64 bounded core monomers remain centered. 64 contract-bounded extensions sit around the square as two families on each face."
            />

            <div className="mt-12 overflow-x-auto pb-4">
              <div className="mx-auto grid min-w-[620px] max-w-max grid-cols-[auto_auto_auto] grid-rows-[auto_auto_auto] items-center justify-center gap-3">
                <div className="col-start-2 row-start-1 flex justify-center">
                  <EdgeFace
                    edge="top"
                    groups={edgeGroups.top}
                    activeId={hoveredMonomer.id}
                    onHover={setHoveredMonomer}
                  />
                </div>
                <div className="col-start-1 row-start-2 flex justify-end">
                  <EdgeFace
                    edge="left"
                    groups={edgeGroups.left}
                    activeId={hoveredMonomer.id}
                    onHover={setHoveredMonomer}
                  />
                </div>
                <div className="col-start-2 row-start-2 flex justify-center">
                  <CoreMatrix activeId={hoveredMonomer.id} onHover={setHoveredMonomer} />
                </div>
                <div className="col-start-3 row-start-2 flex justify-start">
                  <EdgeFace
                    edge="right"
                    groups={edgeGroups.right}
                    activeId={hoveredMonomer.id}
                    onHover={setHoveredMonomer}
                  />
                </div>
                <div className="col-start-2 row-start-3 flex justify-center">
                  <EdgeFace
                    edge="bottom"
                    groups={edgeGroups.bottom}
                    activeId={hoveredMonomer.id}
                    onHover={setHoveredMonomer}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonVNext href="https://docs.brik64.com" tone="primary" className="text-xs font-bold uppercase tracking-widest">
                Learn PCD Language
              </ButtonVNext>
              <ButtonVNext href="https://github.com/brik64" tone="secondary" external className="text-xs font-bold uppercase tracking-widest">
                <GitHubMark className="h-4 w-4" />
                Add Skills to your AI Agent
              </ButtonVNext>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <MonomerTile
              id={hoveredMonomer.id}
              title={hoveredMonomer.title}
              type={hoveredMonomer.type}
              domain={hoveredMonomer.domain}
              property={hoveredMonomer.property}
              description={hoveredMonomer.description}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </SupportingSurface>
  );
}
