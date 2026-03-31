import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, FileText, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";

export const metadata = {
  title: "Compliance Evidence — BRIK64",
  description:
    "Compliance evidence generated at compile time. Not after the audit. Not after the incident. Every certified program generates auditor-ready artifacts automatically. MiFID II, SOC2, SOX, PCI-DSS, DORA, Basel III.",
};

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
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">

          {/* ── Hero ── */}
          <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white relative overflow-hidden">
            <HeroWireframeClient />
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
              <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
                Compliance Evidence Engine
              </span>
              <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Compliance evidence.{" "}
                <span className="text-[#00b8d4]">At compile time.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Not after the audit. Not after the incident. At compile time. Your verified code generates
                auditor-ready evidence automatically. We say &ldquo;evidence,&rdquo; not &ldquo;compliance&rdquo; — because we are honest about scope.
                We cover the software correctness layer. The rest is yours.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <a
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
                >
                  Start building &mdash; free <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://docs.brik64.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
                >
                  Read the docs <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          {/* ── CLI Demo ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              How It Works
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              One command. Auditor-ready output.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Run brikc certify against any PCD file. The compiler verifies Φ_c = 1, maps your
              certified constraints to the applicable regulatory articles, and generates a JSON + PDF
              evidence package. Your compliance team walks into the audit with mathematical proof, not screenshots.
            </p>
            <div className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[10px] font-medium tracking-wide text-white/30">brikc certify</span>
              </div>
              <div className="flex flex-col gap-1 p-5 font-mono text-xs">
                <p className="text-white/70"><span className="text-blue-400">$</span> brikc certify --evidence mifid2 trading_algo.pcd</p>
                <p className="mt-1 text-blue-400">&nbsp;&nbsp;&#10003; Parsing trading_algo.pcd... 4 domains, 3 assertions</p>
                <p className="text-blue-400">&nbsp;&nbsp;&#10003; Φc = 1.000 — circuit closed</p>
                <p className="text-blue-400">&nbsp;&nbsp;&#10003; MiFID II Art. 17 evidence: 5 controls mapped</p>
                <p className="text-blue-400">&nbsp;&nbsp;&#10003; Scope limitation included</p>
                <p className="mt-1 text-zinc-400">&nbsp;&nbsp;Output: evidence_mifid2.json + evidence_mifid2.pdf</p>
              </div>
            </div>
          </section>

          {/* ── Standards Grid ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Regulatory Coverage
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Six standards. Honest about every one of them.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Every compliance vendor claims full coverage. We show you exactly what we cover and what we do not.
              Our coverage percentages reflect the fraction of each standard where software correctness
              verification is directly applicable. No inflation. No marketing math.
            </p>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {standards.map((std) => (
                <div key={std.name} className="rounded-lg border border-border bg-card p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-5 w-5 text-[#00b8d4]" />
                      <div>
                        <h3 className="text-lg font-medium text-foreground">{std.name}</h3>
                        <p className="text-xs text-muted-foreground">{std.desc}</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-[#00b8d4]/10 px-3 py-1 text-sm font-medium text-[#00b8d4]">
                      {std.coverage}% coverage
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground/60">{std.articles}</p>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-[#00b8d4]"
                      style={{ width: `${std.coverage}%` }}
                    />
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-[#00b8d4]">
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

          {/* ── What Makes This Different ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              The Difference
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Other tools generate reports. BRIK64 generates proof.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Tamper-proof by construction",
                  desc: "Every certified function carries an immutable SHA-256 hash. Change one character — the hash changes. Change the hash — the certification breaks. Your auditor sees mathematical certainty, not a PDF that anyone could have written.",
                },
                {
                  title: "Evidence at commit time, not audit time",
                  desc: "The GitHub App posts a certification report to every pull request. By the time the auditor asks, you have 12 months of continuous evidence. Not a scramble to reconstruct what happened. A complete, timestamped mathematical record.",
                },
                {
                  title: "Scope honesty is the product",
                  desc: "We cover the software correctness layer. 10–40% of each standard, depending on how much is about code behavior. We document exactly which articles apply and why. Your auditor respects evidence-based scope. So do we.",
                },
              ].map((item) => (
                <div key={item.title} className="border border-border bg-white p-6">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="bg-background px-6 py-24 text-center lg:px-16">
            <h2 className="mx-auto text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The auditor walks in. You hand them mathematics.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Every compile. Every function. Every constraint. Automatically documented, hashed, and ready.
              Compliance stops being a fire drill and becomes a build artifact.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building &mdash; free <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://docs.brik64.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Read the docs <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </section>

        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
