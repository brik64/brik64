"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { ArrowRight, FileCode, CheckCircle2 } from "lucide-react";
import { PhiC } from "@/components/PhiC";

function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

function StatusPill({
  children,
  tone = "teal",
}: {
  children: ReactNode;
  tone?: "teal" | "success" | "warning" | "neutral";
}) {
  const tones = {
    teal: "border-teal/25 bg-teal/[0.08] text-teal",
    success: "border-emerald-500/25 bg-emerald-500/[0.09] text-emerald-600",
    warning: "border-amber-500/30 bg-amber-500/[0.1] text-amber-700",
    neutral: "border-border/80 bg-background/90 text-muted-foreground",
  };

  return (
    <span className={cx(
      "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] shadow-sm",
      tones[tone],
    )}>
      {children}
    </span>
  );
}

function ProofBadge() {
  return (
    <StatusPill tone="success">
      <CheckCircle2 className="h-3.5 w-3.5" />
      <PhiC /> = 1
    </StatusPill>
  );
}

function ArtifactFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("overflow-hidden rounded-[2rem] border border-border/80 bg-gradient-to-br from-muted/85 via-background to-background p-5 shadow-[0_24px_90px_rgba(0,0,0,0.12)] md:p-7", className)}>
      {children}
    </div>
  );
}

function ArtifactHeader({
  eyebrow,
  title,
  description,
  status,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  status?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-current/10 pb-5 md:flex-row md:items-start md:justify-between">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {eyebrow}
        </p>
        <div className="mt-2 text-lg font-semibold tracking-tight">
          {title}
        </div>
        {description ? (
          <p className="mt-2 max-w-xl text-xs leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {status ? <div className="shrink-0">{status}</div> : null}
    </div>
  );
}

function MetricTile({
  label,
  value,
  detail,
}: {
  label: string;
  value: ReactNode;
  detail?: string;
}) {
  return (
    <div className="rounded-2xl border border-border/80 bg-background/90 p-4 shadow-sm">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
      <div className="mt-2 text-xl font-semibold tracking-tight">{value}</div>
      {detail ? <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{detail}</p> : null}
    </div>
  );
}

const blueprintOutputs: Record<string, { lang: string; title: string; code: string }> = {
  PCD: {
    lang: "pcd",
    title: "Canonical PCD blueprint",
    code: `PC hello {
    let msg = "Hello, verified world!";
    let n = LEN(msg);
    WRITE(1, msg, n);
    OUTPUT 0;
}`,
  },
  Rust: {
    lang: "rust",
    title: "Rust target generated from PCD",
    code: `fn hello() -> i32 {
    let msg = "Hello, verified world!";
    let n = msg.len();
    io::stdout().write_all(msg.as_bytes()).unwrap();
    0 // Φc = 1 — circuit closed
}`,
  },
  JavaScript: {
    lang: "javascript",
    title: "JavaScript target generated from PCD",
    code: `function hello() {
    const msg = "Hello, verified world!";
    const n = msg.length;
    process.stdout.write(msg);
    return 0; // Φc = 1 — circuit closed
}`,
  },
  Python: {
    lang: "python",
    title: "Python target generated from PCD",
    code: `def hello() -> int:
    msg = "Hello, verified world!"
    n = len(msg)
    sys.stdout.write(msg)
    return 0  # Φc = 1 — circuit closed`,
  },
};

const blueprintTargets = Object.keys(blueprintOutputs);

export function BlueprintHubArtifact({ compact = false }: { compact?: boolean }) {
  const [activeTarget, setActiveTarget] = useState("PCD");
  const activeOutput = blueprintOutputs[activeTarget];

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <ArtifactFrame>
        <ArtifactHeader
          eyebrow="Blueprint Hub"
          title="PCD is the canonical circuit between languages."
          description="Source notation changes. Domains, composition and closure stay attached to the blueprint."
          status={<ProofBadge />}
        />

        <div className="mt-6 grid gap-5 md:grid-cols-[1fr_auto_1.15fr] md:items-start">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Lift from
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "Python", "Rust", "Go", "COBOL"].map((lang) => (
                <span key={lang} className="rounded-full border border-border/80 bg-background px-3 py-1.5 text-xs font-medium shadow-sm">
                  {lang}
                </span>
              ))}
            </div>

            {!compact ? (
              <div className="mt-5 rounded-3xl border border-border/80 bg-background/90 p-4 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Preserved by PCD
                </p>
                <div className="mt-3 space-y-2 text-xs leading-relaxed text-muted-foreground">
                  <p>Explicit domains</p>
                  <p>Deterministic composition</p>
                  <p>Compile-time closure</p>
                </div>
              </div>
            ) : null}
          </div>

          <div className="hidden pt-9 text-muted-foreground md:block">
            <ArrowRight className="h-5 w-5" />
          </div>

          <div className="rounded-[1.75rem] border border-teal/25 bg-background/95 p-4 shadow-[0_14px_45px_rgba(0,0,0,0.08)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal/80">
                  Active material
                </p>
                <p className="mt-1 text-sm font-semibold">{activeTarget}</p>
              </div>
              <StatusPill tone={activeTarget === "PCD" ? "teal" : "neutral"}>
                {activeTarget === "PCD" ? "canonical" : "target"}
              </StatusPill>
            </div>

            <div className="mt-4 grid gap-3">
              <MetricTile label="Proof anchor" value={<><PhiC /> = 1</>} />
              <MetricTile label="Representation" value={activeOutput.lang} />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Select representation
          </p>
          <div className="mt-3 flex flex-wrap gap-2" aria-label="Blueprint output selector">
            {blueprintTargets.map((target) => (
              <button
                key={target}
                type="button"
                onClick={() => setActiveTarget(target)}
                aria-pressed={activeTarget === target}
                className={
                  `inline-flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold shadow-sm transition-colors ${
                    activeTarget === target
                      ? "border-teal/40 bg-teal/[0.1] text-teal"
                      : "border-border/80 bg-background text-muted-foreground hover:border-teal/30 hover:text-foreground"
                  }`
                }
              >
                {target === "PCD" ? <FileCode className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
                {target}
              </button>
            ))}
          </div>
        </div>
      </ArtifactFrame>

      <div className="rounded-[1.75rem] border border-border/80 bg-[#070b10] p-4 shadow-[0_14px_45px_rgba(0,0,0,0.08)]">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-1 py-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
              Active Blueprint View
            </p>
            <p className="mt-2 text-sm font-medium text-white/80">{activeOutput.title}</p>
          </div>
          <ProofBadge />
        </div>
        <div className="bg-[#070b10] p-4">
          <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-xs leading-relaxed text-slate-300">
            <code>{activeOutput.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
