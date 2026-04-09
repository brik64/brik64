import { FileCheck2, FileJson2, FileText, ShieldCheck } from "lucide-react";

const standards = [
  { name: "MiFID II", coverage: 40, desc: "Algorithmic trading controls", article: "Art. 17" },
  { name: "SOC2", coverage: 30, desc: "Processing integrity", article: "PI1.x" },
  { name: "SOX", coverage: 25, desc: "Internal controls", article: "Sec 404" },
  { name: "PCI-DSS", coverage: 15, desc: "Secure development", article: "Req 6, 10" },
  { name: "DORA", coverage: 15, desc: "ICT risk prevention", article: "Art. 6, 9" },
  { name: "Basel III", coverage: 10, desc: "Verified calculations", article: "RWA, VaR" },
];

export function ComplianceSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-14 sm:px-6 md:py-18 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-xs font-medium tracking-[2px] text-muted-foreground md:mb-12">
          [11] &middot; COMPLIANCE EVIDENCE
        </p>

        <h3 className="max-w-3xl text-2xl font-semibold tracking-tight md:text-3xl">
          <span>Compliance evidence.</span>{" "}
          <span className="text-teal">At compile time.</span>
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Generate auditor-ready evidence directly from verified code, with scope limitations made explicit.
        </p>

        {/* Standards grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((std) => (
            <div
              key={std.name}
              className="group relative rounded-lg border border-border bg-card p-4 transition-colors hover:border-teal/40"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-teal" />
                    <span className="text-sm font-medium text-foreground">{std.name}</span>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground">{std.desc}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground/60">{std.article}</p>
                </div>
                <span className="rounded-full bg-teal/10 px-2.5 py-0.5 text-xs font-medium text-teal">
                  {std.coverage}%
                </span>
              </div>

              {/* Coverage bar */}
              <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-teal transition-all"
                  style={{ width: `${std.coverage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-border bg-card/60 p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Evidence package
                </p>
                <h4 className="mt-2 text-lg font-semibold text-foreground">
                  MiFID II Art. 17 report
                </h4>
              </div>
              <span className="rounded-full bg-teal/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-teal">
                Ready for audit
              </span>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-xl border border-border bg-background p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg border border-teal/20 bg-teal/[0.06] p-2">
                    <FileCheck2 className="h-4 w-4 text-teal" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">5 mapped controls</p>
                    <p className="text-xs text-muted-foreground">Trading guardrails linked to verified paths.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.06] p-2">
                    <ShieldCheck className="h-4 w-4 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Scope limitation included</p>
                    <p className="text-xs text-muted-foreground">Claims stay bounded to what the compiler actually proved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-gradient-to-br from-muted/40 to-background p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Report snapshot
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  Generated from verified trading logic
                </p>
              </div>
              <div className="flex gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
                  <FileJson2 className="h-3.5 w-3.5" />
                  JSON
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
                  <FileText className="h-3.5 w-3.5" />
                  PDF
                </span>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-border bg-background p-4">
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-card p-3">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Controls</p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">5</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-3">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Trace links</p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">12</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-3">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Limitations</p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">1</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between rounded-xl border border-border px-3 py-2 text-xs">
                  <span className="text-muted-foreground">Article mapped</span>
                  <span className="font-medium text-foreground">MiFID II Art. 17</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-border px-3 py-2 text-xs">
                  <span className="text-muted-foreground">Evidence source</span>
                  <span className="font-medium text-foreground">Certified PCD circuit</span>
                </div>
                <div className="rounded-xl border border-teal/20 bg-teal/[0.05] px-3 py-2 text-xs text-teal">
                  Explicitly positioned as evidence support, not blanket compliance.
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 text-xs text-muted-foreground/60">
          &ldquo;SOC2 Processing Integrity evidence&rdquo; &mdash; not &ldquo;SOC2 compliant.&rdquo;
          Every report includes what we cover and what requires separate evidence.
        </p>
      </div>
    </section>
  );
}
