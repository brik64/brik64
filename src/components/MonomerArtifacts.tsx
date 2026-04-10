"use client";

import { Layers3, Sparkles } from "lucide-react";
import { ArtifactFrame, ArtifactHeader, MetricTile, StatusPill } from "@/components/HomeProofArtifacts";
import { CORE_MONOMERS, EXTENDED_MONOMERS, type Monomer } from "@/lib/monomer-data";
import { MonomerSvg } from "@/components/MonomerSvg";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatUsageCount(count: number) {
  if (count >= 1000) {
    const thousands = Math.floor(count / 1000);
    return `${thousands}K`;
  }

  return String(count);
}

const OFFICIAL_EXTENDED_OFFSET = 64;

interface OfficialMonomerRecord {
  officialNumber: number;
  label: string;
  tier: "core" | "extended";
  monomer: Monomer;
}

function formatOfficialNumber(officialNumber: number) {
  return String(officialNumber).padStart(2, "0");
}

function resolveOfficialMonomer(officialNumber: number): OfficialMonomerRecord | null {
  if (officialNumber >= 0 && officialNumber < CORE_MONOMERS.length) {
    const monomer = CORE_MONOMERS[officialNumber];
    if (!monomer) {
      return null;
    }

    return {
      officialNumber,
      label: `MC ${formatOfficialNumber(officialNumber)}`,
      tier: "core",
      monomer,
    };
  }

  const extendedIndex = officialNumber - OFFICIAL_EXTENDED_OFFSET;
  if (extendedIndex >= 0 && extendedIndex < EXTENDED_MONOMERS.length) {
    const monomer = EXTENDED_MONOMERS[extendedIndex];
    if (!monomer) {
      return null;
    }

    return {
      officialNumber,
      label: `MX ${formatOfficialNumber(officialNumber)}`,
      tier: "extended",
      monomer,
    };
  }

  return null;
}

function describeMonomer(monomer: Monomer) {
  const [inputs = "", outputs = ""] = monomer.signature.split("→").map((segment) => segment.trim());
  const outputLabel = outputs.length > 0 ? outputs : "void";

  return `${monomer.family} operation. Takes ${inputs || "no inputs"} and emits ${outputLabel}.`;
}

function getMonomerPropertyRows(record: OfficialMonomerRecord) {
  const isCore = record.tier === "core";
  return [
    { label: "Official", value: record.label },
    { label: "Family", value: record.monomer.family },
    { label: "Signature", value: record.monomer.signature },
    { label: "Surface", value: isCore ? "Φc = 1" : "CONTRACT" },
  ];
}

function getMonomerPcdSketch(record: OfficialMonomerRecord) {
  const isCore = record.tier === "core";
  const closure = isCore ? "Φc = 1" : "CONTRACT";

  return `monomer ${record.label.toLowerCase().replace(/\s+/g, "_")} {
  operation: ${record.monomer.name}
  family: ${record.monomer.family}
  signature: ${record.monomer.signature}
  surface: ${closure}
}`;
}

interface SolidMonomerTileProps {
  prefix: "MC" | "MX";
  id: number;
  name: string;
  detail?: string;
  tone: "core" | "extended";
  variant?: "positive" | "negative";
  usageCount?: number;
  compact?: boolean;
}

export function SolidMonomerTile({
  prefix,
  id,
  name,
  detail,
  tone,
  variant = "positive",
  usageCount,
  compact = false,
}: SolidMonomerTileProps) {
  const number = String(id).padStart(2, "0");
  const displayCount = typeof usageCount === "number" ? formatUsageCount(usageCount) : null;

  return (
    <MonomerSvg
      prefix={prefix}
      number={number}
      name={name}
      tone={tone}
      variant={variant}
      detail={detail}
      badgeLabel={displayCount ?? undefined}
      className={compact ? "rounded-[0.95rem]" : undefined}
    />
  );
}

function MonomerVariantGrid({
  title,
  tone,
  items,
  compact,
}: {
  title: string;
  tone: "core" | "extended";
  items: typeof CORE_MONOMERS;
  compact: boolean;
}) {
  return (
    <div className="space-y-3">
      <p
        className={cx(
          "text-[10px] font-semibold uppercase tracking-[0.16em]",
          tone === "core" ? "text-teal/80" : "text-orange-500",
        )}
      >
        {title}
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {items.map((monomer, index) => (
          <SolidMonomerTile
            key={`${tone}-${title}-${monomer.id}`}
            prefix={monomer.prefix}
            id={monomer.id}
            name={monomer.name}
            detail={monomer.signature.replace(" → ", " to ")}
            tone={tone}
            variant={title.toLowerCase() === "positive" ? "positive" : "negative"}
            usageCount={index === 1 || index === 3 ? index + 2 : undefined}
            compact={compact}
          />
        ))}
      </div>
    </div>
  );
}

export function MonomerShowcase({
  title = "The monomer surface is finite, explicit, and inspectable.",
  description = "Certified Core uses teal. Extended uses orange. Each family now has positive and negative variants so the system remains legible on both dark and light surfaces.",
  compact = false,
}: {
  title?: string;
  description?: string;
  compact?: boolean;
}) {
  const core = CORE_MONOMERS.slice(0, 8);
  const extended = EXTENDED_MONOMERS.slice(0, 8);

  return (
    <ArtifactFrame className="space-y-6">
      <ArtifactHeader
        eyebrow="Monomer Surface"
        title={title}
        description={description}
        status={
          <StatusPill tone="teal">
            <Layers3 className="h-3.5 w-3.5" />
            128 explicit operations
          </StatusPill>
        }
      />

      <div className="grid gap-4 md:grid-cols-3">
        <MetricTile label="Core" value="64 teal cells" detail="Formally certified monomers." />
        <MetricTile label="Extended" value="64 orange cells" detail="Contract-bounded system bridges." />
        <MetricTile label="Display" value="Positive + Negative" detail="The number in Jura inverts depending on the surface." />
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-[1.6rem] border border-teal/20 bg-teal/[0.05] p-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal/80">Core monomers</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Certified computation substrate</p>
            </div>
            <StatusPill tone="success">Φc anchor</StatusPill>
          </div>
          <div className="space-y-4">
            <MonomerVariantGrid title="Positive" tone="core" items={core.slice(0, 4)} compact={compact} />
            <MonomerVariantGrid title="Negative" tone="core" items={core.slice(4, 8)} compact={compact} />
          </div>
        </div>

        <div className="rounded-[1.6rem] border border-orange-400/25 bg-orange-400/[0.06] p-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-500">Extended monomers</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Bounded bridges to real systems</p>
            </div>
            <StatusPill tone="warning">contract-bounded</StatusPill>
          </div>
          <div className="space-y-4">
            <MonomerVariantGrid title="Positive" tone="extended" items={extended.slice(0, 4)} compact={compact} />
            <MonomerVariantGrid title="Negative" tone="extended" items={extended.slice(4, 8)} compact={compact} />
          </div>
        </div>
      </div>
    </ArtifactFrame>
  );
}

export function MonomerFamilyBoard() {
  const familyRows = [
    {
      label: "Core · Certified",
      tone: "core" as const,
      body: "Arithmetic, Logic, Memory, Control, I/O, String, Crypto, System.",
    },
    {
      label: "Extended · Contract",
      tone: "extended" as const,
      body: "Float64, Math, Network, Graphics, Audio, Filesystem, Concurrency, Interop.",
    },
  ];

  return (
    <ArtifactFrame className="space-y-6">
      <ArtifactHeader
        eyebrow="Operation Families"
        title="Sixteen families, one explicit material system."
        description="The families are not abstract categories. They are the bounded source of every circuit, compiler guarantee, and registry package."
        status={
          <StatusPill tone="teal">
            <Sparkles className="h-3.5 w-3.5" />
            family board
          </StatusPill>
        }
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {familyRows.map((row) => (
          <div
            key={row.label}
            className={cx(
              "rounded-[1.5rem] border p-5 shadow-sm",
              row.tone === "core"
                ? "border-teal/20 bg-teal/[0.05]"
                : "border-orange-400/20 bg-orange-400/[0.05]",
            )}
          >
            <p
              className={cx(
                "text-[10px] font-semibold uppercase tracking-[0.18em]",
                row.tone === "core" ? "text-teal/80" : "text-orange-500",
              )}
            >
              {row.label}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{row.body}</p>
          </div>
        ))}
      </div>
    </ArtifactFrame>
  );
}

function MonomerSpotlightCard({
  record,
}: {
  record: OfficialMonomerRecord;
}) {
  const isCore = record.tier === "core";
  const description = describeMonomer(record.monomer);
  const rows = getMonomerPropertyRows(record);
  const pcdSketch = getMonomerPcdSketch(record);

  return (
    <div
      className={cx(
        "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-4 text-left transition-all duration-300 hover:-translate-y-0.5",
        isCore
          ? "border-teal/20 bg-teal/[0.05] hover:border-teal/35 hover:bg-teal/[0.08]"
          : "border-orange-400/20 bg-orange-400/[0.05] hover:border-orange-400/35 hover:bg-orange-400/[0.08]",
      )}
    >
      <div className="space-y-5">
        <MonomerSvg
          prefix={record.monomer.prefix}
          number={formatOfficialNumber(record.officialNumber)}
          name={record.monomer.name}
          tone={record.tier}
          variant="positive"
          detail={record.monomer.family}
          className="mx-auto w-full max-w-[170px] opacity-95 transition-transform duration-300 group-hover:scale-[1.015] sm:max-w-[186px] lg:max-w-[196px]"
        />

        <div className="flex items-center gap-2">
          <span
            className={cx(
              "rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]",
              isCore ? "border-teal/20 bg-teal/[0.08] text-teal" : "border-orange-400/20 bg-orange-400/[0.08] text-orange-500",
            )}
          >
            {record.label}
          </span>
          <span
            className={cx(
              "rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]",
              "border-border bg-background text-muted-foreground",
            )}
          >
            Hover to inspect
          </span>
        </div>

        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="space-y-4">
          <div className="rounded-[1.4rem] border border-border/70 bg-background px-4 py-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-teal">Properties</p>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {record.tier === "core" ? "Certified" : "Contract"}
              </span>
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {rows.map((row) => (
                <div key={row.label} className="rounded-2xl border border-border/70 bg-muted/20 px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {row.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    {row.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.4rem] border border-border/70 bg-background px-4 py-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-teal">PCD sketch</p>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Monomer source
              </span>
            </div>
            <pre className="mt-3 overflow-x-auto rounded-2xl border border-border/70 bg-muted/25 px-4 py-4 text-[11px] leading-6 text-foreground">
              <code>{pcdSketch}</code>
            </pre>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {isCore
                ? "The sketch shows a closed certified monomer that stays inside Φc = 1."
                : "The sketch shows a bounded extended monomer that remains contract-based by construction."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MonomerSpotlightPair({
  leftOfficialNumber = 0,
  rightOfficialNumber = 67,
}: {
  leftOfficialNumber?: number;
  rightOfficialNumber?: number;
}) {
  const leftRecord = resolveOfficialMonomer(leftOfficialNumber);
  const rightRecord = resolveOfficialMonomer(rightOfficialNumber);

  if (!leftRecord || !rightRecord) {
    return null;
  }

  return (
    <ArtifactFrame className="space-y-6">
      <ArtifactHeader
        eyebrow="Monomer Spotlight"
        title="Two canonical monomers, one interactive surface."
        description="Each monomer is shown at reduced scale, then explained through a property card and a PCD sketch so the object reads as a unit rather than a grid cell."
        status={
          <StatusPill tone="teal">
            <Layers3 className="h-3.5 w-3.5" />
            official monomers
          </StatusPill>
        }
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <MonomerSpotlightCard
          record={leftRecord}
        />
        <MonomerSpotlightCard
          record={rightRecord}
        />
      </div>
    </ArtifactFrame>
  );
}
