import { ShieldCheck } from "lucide-react";

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
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-10 text-xs font-medium tracking-[2px] text-muted-foreground md:mb-14">
          [11] &middot; COMPLIANCE EVIDENCE
        </p>

        <h3 className="max-w-3xl text-2xl font-normal tracking-tight md:text-3xl">
          The math is{" "}
          <span className="text-teal">the evidence.</span>
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Generate auditor-ready compliance evidence from your verified code.
          No manual documentation. No ambiguity. Each report includes explicit
          scope limitations &mdash; we tell you what we cover and what we don&apos;t.
        </p>

        {/* Standards grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((std) => (
            <div
              key={std.name}
              className="group relative rounded-lg border border-border bg-card p-5 transition-colors hover:border-teal/40"
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
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-teal transition-all"
                  style={{ width: `${std.coverage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CLI example — terminal with traffic lights */}
        <div className="mt-8 max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[10px] font-medium tracking-wide text-white/30">brikc certify</span>
          </div>
          <div className="flex flex-col gap-1 p-5 font-mono text-xs">
            <p className="text-white/70"><span className="text-teal">$</span> brikc certify --evidence mifid2 trading_algo.pcd</p>
            <p className="mt-1 text-emerald-400">&nbsp;&nbsp;&#10003; MiFID II Art. 17 evidence generated &mdash; 5 controls mapped</p>
            <p className="mt-1 text-zinc-400">&nbsp;&nbsp;&#10003; Scope limitation included</p>
            <p className="mt-1 text-zinc-400">&nbsp;&nbsp;&#10003; Output: evidence_mifid2.json + evidence_mifid2.pdf</p>
          </div>
        </div>

        <p className="mt-6 text-xs text-muted-foreground/60">
          &ldquo;SOC2 Processing Integrity evidence&rdquo; &mdash; not &ldquo;SOC2 compliant.&rdquo;
          Every report includes what we cover and what requires separate evidence.
        </p>
      </div>
    </section>
  );
}
