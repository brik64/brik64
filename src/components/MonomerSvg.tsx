type MonomerSvgProps = {
  prefix: string;
  number: string;
  name: string;
  tone: "core" | "extended";
  variant?: "positive" | "negative";
  detail?: string;
  badgeLabel?: string;
  className?: string;
};

function joinClasses(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function MonomerSvg({
  prefix,
  number,
  name,
  tone,
  variant = "positive",
  detail,
  badgeLabel,
  className,
}: MonomerSvgProps) {
  const accent = tone === "core" ? "#00b8d4" : "#f97316";
  const background = variant === "positive" ? "rgba(255,255,255,0.96)" : "rgba(15,23,32,0.92)";
  const foreground = variant === "positive" ? "#0f1720" : "#f8fafc";

  return (
    <div className={joinClasses("overflow-hidden rounded-[1.25rem] border border-border/80 bg-background/95 shadow-sm", className)}>
      <svg viewBox="0 0 340 340" className="h-auto w-full" role="img" aria-label={`${prefix} ${number} ${name}`}>
        <rect x="0" y="0" width="340" height="340" fill={background} />
        <rect x="22" y="22" width="296" height="296" rx="28" fill="none" stroke={accent} strokeWidth="2.5" opacity="0.4" />
        <rect x="58" y="58" width="224" height="224" rx="24" fill="none" stroke={accent} strokeWidth="1.8" opacity="0.65" />
        <circle cx="170" cy="118" r="52" fill="none" stroke={accent} strokeWidth="1.8" opacity="0.7" />
        <path d="M80 220H260M170 168V264M104 92L236 92" stroke={accent} strokeWidth="1.5" opacity="0.35" />
        <text x="170" y="138" textAnchor="middle" fill={foreground} fontFamily='var(--font-jura), "Jura", system-ui, sans-serif' fontSize="22" fontWeight="700">
          {prefix} {number}
        </text>
        <text x="170" y="186" textAnchor="middle" fill={accent} fontFamily='var(--font-jura), "Jura", system-ui, sans-serif' fontSize="34" fontWeight="700">
          {name}
        </text>
        {detail ? (
          <text x="170" y="218" textAnchor="middle" fill={foreground} opacity="0.65" fontFamily='var(--font-geist-mono), monospace' fontSize="12">
            {detail}
          </text>
        ) : null}
        {badgeLabel ? (
          <>
            <rect x="120" y="242" width="100" height="28" rx="14" fill={accent} opacity="0.12" />
            <text x="170" y="260" textAnchor="middle" fill={accent} fontFamily='var(--font-geist-mono), monospace' fontSize="12" fontWeight="700">
              {badgeLabel}
            </text>
          </>
        ) : null}
      </svg>
    </div>
  );
}
