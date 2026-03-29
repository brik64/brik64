import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CircuitGrid } from "@/components/CircuitGrid";
import { ShieldCheck, FileText, AlertTriangle } from "lucide-react";

const standards = [
  {
    name: "MiFID II",
    coverage: 40,
    desc: "Algorithmic trading controls",
    articles: "Art. 17(1), Art. 17(2), RTS 6, RTS 7",
    covers: [
      "Pre-trade risk controls (domain constraints as risk limits)",
      "Kill switches and circuit breakers (assert/reject)",
      "Algorithm testing evidence (Φc = 1 formal verification)",
      "Change management (certification hash audit trail)",
      "Order-to-trade ratio controls (rate limiting via domains)",
    ],
    doesNot: [
      "Market data quality and connectivity",
      "Client order handling and best execution",
      "Transaction reporting (Art. 26)",
      "Organizational requirements (Art. 16)",
    ],
  },
  {
    name: "SOC2",
    coverage: 30,
    desc: "Processing Integrity",
    articles: "PI1.1–PI1.5, CC6.1, CC8.1",
    covers: [
      "Input completeness (domain constraints)",
      "Processing accuracy (assert/reject validation)",
      "Processing completeness and determinism (Φc = 1)",
      "Change detection (certification hash)",
      "Input validation security (bounds checking)",
    ],
    doesNot: [
      "Availability (uptime, SLAs, failover)",
      "Confidentiality (encryption at rest/transit)",
      "Privacy (PII handling, consent)",
      "Most Security criteria (access, auth)",
    ],
  },
  {
    name: "SOX",
    coverage: 25,
    desc: "Internal controls over financial reporting",
    articles: "Sec 404, PCAOB AS 2201",
    covers: [
      "Financial calculation integrity (Φc = 1)",
      "Input validation (domain constraints)",
      "Business logic controls (assert/reject)",
      "Code change detection (hash-based)",
    ],
    doesNot: [
      "CEO/CFO certification (personal attestation)",
      "IT General Controls (access management)",
      "Entity-level controls",
      "Business formula correctness (structural only)",
    ],
  },
  {
    name: "PCI-DSS",
    coverage: 15,
    desc: "Secure development + audit trails",
    articles: "Req 6.2.4, Req 10.3, Req 11.5",
    covers: [
      "Input validation at development (Req 6)",
      "Business logic security controls",
      "Code review complement (formal verification)",
      "Integrity monitoring (hash change detection)",
    ],
    doesNot: [
      "Network segmentation (Req 1)",
      "Encryption (Req 3, 4)",
      "Access control (Req 7, 8)",
      "Physical security (Req 9)",
      "10 other requirement categories",
    ],
  },
  {
    name: "DORA",
    coverage: 15,
    desc: "ICT risk prevention (EU)",
    articles: "Art. 6, Art. 9, Art. 15",
    covers: [
      "ICT risk management — software integrity",
      "Protection and prevention — input validation",
      "Third-party risk — vendor code verification",
    ],
    doesNot: [
      "Asset identification (Art. 8)",
      "Detection and monitoring (Art. 10)",
      "Response and recovery (Art. 11)",
      "ICT incident reporting (Art. 23–27)",
    ],
  },
  {
    name: "Basel III",
    coverage: 10,
    desc: "Verified financial calculations",
    articles: "RWA, VaR/CVaR, LCR",
    covers: [
      "RWA calculation verification",
      "VaR implementation verification",
      "Liquidity ratio input bounds",
    ],
    doesNot: [
      "Capital adequacy (about bank capital, not software)",
      "Supervisory review (Pillar 2)",
      "Model risk (verifies implementation, NOT model)",
      "Stress testing (requires market data)",
    ],
  },
];

export default function CompliancePage() {
  return (
    <>
      <CircuitGrid />
      <Navbar />
      <main className="bg-background relative z-10">
        <section className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
          <span className="text-muted-foreground mb-5 inline-block w-fit rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium tracking-wide">
            Compliance Evidence Engine
          </span>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            The math is{" "}
            <span className="text-teal">the evidence.</span>
          </h1>

          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
            Generate auditor-ready compliance evidence from your verified code.
            We say &ldquo;evidence,&rdquo; not &ldquo;compliance&rdquo; &mdash; because we&apos;re honest
            about what formal verification can and cannot prove.
          </p>

          {/* CLI demo — terminal with traffic lights */}
          <div className="mt-8 max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-[10px] font-medium tracking-wide text-white/30">brikc certify</span>
            </div>
            <div className="flex flex-col gap-1 p-5 font-mono text-xs">
              <p className="text-white/70"><span className="text-teal">$</span> brikc certify --evidence mifid2 trading_algo.pcd</p>
              <p className="mt-1 text-emerald-400">&nbsp;&nbsp;&#10003; Parsing trading_algo.pcd... 4 domains, 3 assertions</p>
              <p className="text-emerald-400">&nbsp;&nbsp;&#10003; Φc = 1.000 — circuit closed</p>
              <p className="text-emerald-400">&nbsp;&nbsp;&#10003; MiFID II Art. 17 evidence: 5 controls mapped</p>
              <p className="text-emerald-400">&nbsp;&nbsp;&#10003; Scope limitation included</p>
              <p className="mt-1 text-zinc-400">&nbsp;&nbsp;Output: evidence_mifid2.json + evidence_mifid2.pdf</p>
            </div>
          </div>

          {/* Scope disclaimer */}
          <div className="mt-6 flex max-w-2xl items-start gap-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
            <p className="text-xs leading-relaxed text-amber-200/80">
              BRIK-64 generates verification evidence for the processing logic and change
              control aspects of these standards. Infrastructure, organizational, and
              procedural controls require separate evidence. Each report includes an explicit
              scope limitation.
            </p>
          </div>
        </section>

        {/* Standards grid */}
        <section className="border-border mx-auto max-w-7xl border-t px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {standards.map((std) => (
              <div
                key={std.name}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-teal" />
                    <div>
                      <h3 className="text-lg font-medium text-foreground">{std.name}</h3>
                      <p className="text-xs text-muted-foreground">{std.desc}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-teal/10 px-3 py-1 text-sm font-medium text-teal">
                    {std.coverage}% coverage
                  </span>
                </div>

                <p className="mt-2 text-xs text-muted-foreground/60">{std.articles}</p>

                {/* Coverage bar */}
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full rounded-full bg-teal"
                    style={{ width: `${std.coverage}%` }}
                  />
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-teal">
                      <ShieldCheck className="h-3 w-3" /> What we cover
                    </p>
                    <ul className="space-y-1">
                      {std.covers.map((c) => (
                        <li key={c} className="text-xs leading-relaxed text-muted-foreground">
                          &#10003; {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground/60">
                      <FileText className="h-3 w-3" /> Out of scope
                    </p>
                    <ul className="space-y-1">
                      {std.doesNot.map((d) => (
                        <li key={d} className="text-xs leading-relaxed text-muted-foreground/40">
                          &mdash; {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sample report */}
        <section className="border-border mx-auto max-w-7xl border-t px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium tracking-tight">Sample evidence output</h2>
          <p className="mt-2 text-sm text-muted-foreground">What your auditor sees:</p>

          <div className="mt-6 max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-[10px] font-medium tracking-wide text-white/30">evidence_mifid2.json</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-muted-foreground">{`{
  "standard": "MiFID II",
  "articles_covered": ["Art. 17(1)", "Art. 17(2)", "RTS 6"],
  "circuit": "trading_algo@1.2.0",
  "certification": {
    "phi_c": 1.0,
    "hash": "sha256:a8f3e7...",
    "timestamp": "2026-03-29T10:00:00Z",
    "domains_verified": 4,
    "paths_verified": 12,
    "unhandled_paths": 0
  },
  "controls": [
    {
      "article": "Art. 17(1)",
      "control": "Pre-trade risk controls",
      "evidence": "Input 'order_value' bounded to [0.01, 10000000.0]",
      "strength": "strong"
    }
  ],
  "scope_limitation": "Covers processing logic only. Infrastructure, organizational, and reporting obligations require separate evidence."
}`}</pre>
          </div>
        </section>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
