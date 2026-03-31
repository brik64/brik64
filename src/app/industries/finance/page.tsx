import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { TrendingUp, ShieldCheck, CreditCard, Search, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";


export const metadata = {
  title: "Banking & Finance — BRIK64 Industries",
  description:
    "Knight Capital lost $440M in 45 minutes. One software bug. BRIK64 makes that mathematically impossible. Verified trading systems, certified risk calculations, automatic compliance.",
};

const useCases = [
  {
    icon: TrendingUp,
    title: "Trading System Verification",
    description:
      "Order validation with size limits, price bands, and position limits. Pre-trade risk checks and kill switches — all as verified circuits. Domain constraints like order_size: Range[1, 10_000_000] and price: Range[0.0001, 999999.99] are enforced at the circuit level. A trade that violates parameters doesn't fail gracefully — it cannot exist.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Calculation Certification",
    description:
      "VaR with confidence intervals, CVaR for tail risk, stress testing with bounded scenarios — every model carries a mathematical proof. Domain constraints eliminate division by zero in volatility calculations, ensure correlation matrices stay in [-1, 1], and guarantee Monte Carlo paths remain within physically possible bounds.",
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description:
      "Amount validation, currency conversion with bounded exchange rates, balance sufficiency checks, double-spend prevention. Every transaction path is exhaustive — not 'most paths tested,' every single one. A payment either satisfies all constraints and executes, or it is rejected with a cryptographic proof of why.",
  },
  {
    icon: Search,
    title: "Fraud Detection Logic",
    description:
      "Rule-based decision trees as policy circuits. Every decision path is traceable, auditable, and mathematically verifiable. No ML black box a regulator can't inspect — deterministic logic that produces the same result every time, with a complete audit trail a compliance officer can read in plain English.",
  },
];

const standards = [
  { standard: "MiFID II Art. 17", coverage: "Strong", detail: "Algo control evidence: risk parameter bounds, order throttling verification, kill switch circuit proofs, pre/post-trade risk check certification" },
  { standard: "SOX Sec 404", coverage: "Strong", detail: "Internal control evidence for every financial calculation: inputs validated, formulas certified, outputs proven correct with cryptographic hash" },
  { standard: "SOC2 Processing Integrity (PI1.x, CC8.1)", coverage: "~30%", detail: "Processing integrity evidence: every input validated against domain constraints, every output certified correct, change control via immutable compilation hash" },
  { standard: "PCI-DSS Req 6, 10", coverage: "Partial", detail: "Secure development lifecycle evidence: verified payment logic, tamper-proof audit trail for every transaction decision, code integrity via self-compilation fixpoint" },
  { standard: "Basel III", coverage: "Partial", detail: "RWA calculation verification, VaR model constraint proofs, stress test scenario bounds — covers calculation correctness, not capital/liquidity governance" },
  { standard: "DORA Art. 6, 9", coverage: "Partial", detail: "ICT risk management evidence: verified processing logic, deterministic system behavior proofs, change management via immutable hash — covers prevention, not detection/response" },
];

export default function FinanceIndustryPage() {
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
              Banking &amp; Finance
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Knight Capital lost $440M in 45 minutes.{" "}
              <span className="text-[#00b8d4]">One software bug. BRIK64 makes that impossible.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Citibank accidentally sent $900M because of a UI bug. Flash crashes have evaporated
              a trillion dollars in minutes. The average bank spends $270M/year on compliance.
              What if every calculation was provably correct — and every audit trail was automatic?
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building — free <ArrowRight className="h-4 w-4" />
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

        <div className="mx-auto max-w-7xl border-x border-border">
          {/* ── The Challenge ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              The Challenge
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              These are not hypotheticals. These happened.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Catastrophic software failures",
                  desc: "Knight Capital: $440M gone in 45 minutes from a deployment error (2012). Citibank: $900M accidentally sent due to a UI bug (2020). The May 2010 Flash Crash erased $1 trillion in minutes. August 2015, it happened again. These aren't edge cases — they're the norm.",
                },
                {
                  title: "Compliance is a tax on innovation",
                  desc: "The average bank spends $270M/year on compliance (Thomson Reuters). A single SOC2 audit takes 3-6 months and costs $50K-$500K. MiFID II Art. 17 requires algo trading firms to maintain 'effective systems and risk controls' — but proving that to a regulator is months of manual evidence collection.",
                },
                {
                  title: "Black-box risk models",
                  desc: "When a regulator asks 'why did this VaR calculation produce this number?' — the answer takes weeks, not seconds. Risk models are complex, poorly documented, and impossible to audit at speed. Every day you can't answer that question is a day your trading desk might be shut down.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-border bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── How BRIK64 Helps ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              How BRIK64 Helps
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Not better testing. Mathematical proof.
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {useCases.map((uc) => (
                <div key={uc.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#00b8d4]/10">
                    <uc.icon className="h-6 w-6 text-[#00b8d4]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {uc.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {uc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Policy Circuit Example ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Policy Circuit Example
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A transaction validator that cannot be wrong
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              This isn&apos;t pseudocode. This is a real policy circuit. Amount must be positive,
              exchange rate must be bounded, balance must be sufficient, KYC must be enforced
              above $10K. Not &quot;should be&quot; — must be. The circuit rejects anything else.
            </p>
            <CopyableCode title="transaction_validator.pcd">{`// Transaction Validator — Domain-Constrained Finance
// Φ_c = 1 — every transaction mathematically verified

circuit transaction_validator {
  // Input domains
  input amount       : Float64[0.01 .. 1e9]       // > 0, max $1B
  input exchange_rate: Float64[0.0001 .. 10000.0]  // bounded rate
  input balance      : Float64[0.0 .. 1e12]        // current balance
  input fee_rate     : Float64[0.0 .. 0.05]        // max 5% fee
  input tx_type      : Enum["transfer", "payment", "refund"]

  // Derived calculations
  let converted = amount * exchange_rate
  let fee       = amount * fee_rate
  let total     = amount + fee

  // Balance sufficiency
  assert balance >= total
    | reject("Insufficient funds: need " ++ to_string(total))

  // Anti-money laundering threshold
  assert amount <= 10000.0 || has_kyc_verification()
    | reject("KYC required for transactions > $10,000")

  // Refund constraints
  assert tx_type != "refund" || amount <= original_tx_amount()
    | reject("Refund cannot exceed original transaction")

  output validated_tx : {
    amount:     amount,
    converted:  converted,
    fee:        fee,
    total:      total,
    remaining:  balance - total,
    type:       tx_type,
    certified:  certification_hash()
  }
}`}</CopyableCode>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
              Every domain constraint is enforced before execution. Every output carries a certification hash.{" "}
              <PhiC /> = 1 — the circuit is closed. No transaction can exist outside these bounds.
            </p>
          </section>

          {/* ── Standards ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Compliance &amp; Standards
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your auditor&apos;s new favorite tool
            </h2>
            <div className="mx-auto mt-8 max-w-3xl overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-3 font-medium text-muted-foreground">Standard</th>
                    <th className="pb-3 font-medium text-muted-foreground">Coverage</th>
                    <th className="pb-3 font-medium text-muted-foreground">What BRIK64 generates</th>
                  </tr>
                </thead>
                <tbody>
                  {standards.map((s) => (
                    <tr key={s.standard} className="border-b border-border/40">
                      <td className="py-3 font-medium text-foreground">{s.standard}</td>
                      <td className="py-3">
                        <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          s.coverage === "Strong"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}>
                          {s.coverage}
                        </span>
                      </td>
                      <td className="py-3 text-muted-foreground">{s.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted-foreground">
              BRIK64 generates cryptographic verification evidence for processing logic, calculation correctness,
              and change control. Infrastructure, organizational, and procedural controls require separate evidence —
              but the hardest part, proving your code does what you say it does, is now automatic.
            </p>
          </section>

          {/* ── CTA ── */}
          <section className="bg-background px-6 py-24 text-center lg:px-16">
            <h2 className="mx-auto text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Start building &mdash; free
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Every transaction proven. Every calculation certified. Every audit trail automatic.
              Your compliance team will wonder how they ever lived without this.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Start building — free <ArrowRight className="h-4 w-4" />
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
      </div>

      </main>
      <div className="relative z-10">

        <Footer />

      </div>
    </>
  );
}
