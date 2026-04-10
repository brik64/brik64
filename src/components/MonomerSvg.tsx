"use client";

import { useId } from "react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type MonomerTone = "core" | "extended";
type MonomerVariant = "positive" | "negative";

interface MonomerSvgProps {
  prefix: "MC" | "MX";
  number: string;
  name: string;
  tone: MonomerTone;
  variant: MonomerVariant;
  detail?: string;
  badgeLabel?: string;
  className?: string;
}

export function MonomerSvg({
  prefix,
  number,
  name,
  tone,
  variant,
  detail,
  badgeLabel,
  className,
}: MonomerSvgProps) {
  const baseId = useId().replace(/:/g, "");
  const bgId = `${baseId}-bg`;
  const overlayId = `${baseId}-overlay`;
  const badgeId = `${baseId}-badge`;

  const palette =
    tone === "core"
      ? {
          solid: "#12abc5",
          accent: "#12abc5",
          shadow: "rgba(6, 182, 212, 0.28)",
        }
      : {
          solid: "#f38b22",
          accent: "#f38b22",
          shadow: "rgba(249, 115, 22, 0.28)",
        };

  const isPositive = variant === "positive";
  const numberFill = isPositive ? "#ffffff" : palette.accent;
  const labelFill = isPositive ? "#ffffff" : tone === "core" ? "#0f766e" : "#c2410c";
  const detailFill = isPositive ? "rgba(255,255,255,0.66)" : "rgba(15,23,42,0.58)";
  const prefixFill = isPositive ? "rgba(255,255,255,0.58)" : "rgba(71,85,105,0.84)";
  const badgeText = badgeLabel ?? "";

  return (
    <div
      className={cx(
        "relative aspect-square overflow-hidden rounded-[1.1rem] border shadow-[0_16px_36px_rgba(0,0,0,0.14)]",
        className,
        variant === "positive"
          ? tone === "core"
            ? "border-teal/60 bg-[#12abc5]"
            : "border-orange-400/65 bg-[#f38b22]"
          : tone === "core"
            ? "border-teal/25 bg-white"
            : "border-orange-300/35 bg-white",
      )}
    >
      <svg
        viewBox="0 0 340 340"
        className="block h-full w-full"
        preserveAspectRatio="none"
        role="img"
        aria-label={`${prefix} ${number} ${name}`}
      >
        <title>{`${prefix} ${number} ${name}`}</title>
        <defs>
          <linearGradient id={bgId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={isPositive ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.98)"} />
            <stop offset="54%" stopColor={isPositive ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.94)"} />
            <stop offset="100%" stopColor={isPositive ? "rgba(0,0,0,0.14)" : "rgba(248,250,252,0.98)"} />
          </linearGradient>
          <linearGradient id={overlayId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isPositive ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.7)"} />
            <stop offset="100%" stopColor={isPositive ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.12)"} />
          </linearGradient>
          <filter id={badgeId}>
            <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor={palette.shadow} />
          </filter>
        </defs>

        <rect x="0" y="0" width="340" height="340" fill={`url(#${bgId})`} />
        <rect x="0" y="0" width="340" height="340" fill={`url(#${overlayId})`} />

        <text
          x="38"
          y="44"
          fontFamily='var(--font-jura), "Jura", system-ui, sans-serif'
          fontSize="60"
          fontWeight="800"
          letterSpacing="1.8"
          fill={prefixFill}
          textAnchor="start"
        >
          {prefix}
        </text>

        <text
          x="170"
          y="170"
          fontFamily='var(--font-jura), "Jura", system-ui, sans-serif'
          fontSize="200"
          fontWeight="800"
          letterSpacing={number.length >= 3 ? "-10" : "0"}
          fill={numberFill}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {number}
        </text>

        <text
          x="170"
          y="285"
          fontFamily='var(--font-jura), "Jura", system-ui, sans-serif'
          fontSize="60"
          fontWeight="800"
          letterSpacing="0.4"
          fill={labelFill}
          textAnchor="middle"
        >
          {name}
        </text>

        {detail ? (
          <text
            x="170"
            y="308"
            fontFamily='var(--font-jura), "Jura", system-ui, sans-serif'
            fontSize="18"
            fontWeight="700"
            letterSpacing="0.08em"
            fill={detailFill}
            textAnchor="middle"
          >
            {detail}
          </text>
        ) : null}

        {badgeText ? (
          <g transform="translate(288 52)" filter={`url(#${badgeId})`}>
            <circle r="52" fill="#ef4444" />
            <circle r="52" fill="none" stroke="rgba(255,255,255,0.78)" strokeWidth="4" />
            <text
              x="0"
              y="10"
              fontFamily='var(--font-jura), "Jura", system-ui, sans-serif'
              fontSize="44"
              fontWeight="800"
              fill="#ffffff"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {badgeText}
            </text>
          </g>
        ) : null}
      </svg>
    </div>
  );
}
