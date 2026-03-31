import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { TrendingUp, ShieldCheck, CreditCard, Search, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";


export const metadata = {
  title: "Banking & Finance — BRIK64 Industries",
  description:
    "Every transaction. Mathematically verified. Trading system verification, risk calculation certification, and compliance automation with BRIK64.",
};

const useCases = [
  {
    icon: TrendingUp,
    title: "Trading System Verification",
    description:
      "Order validation, position limits, and risk checks as verified circuits. No trade can exceed risk parameters — the circuit rejects it before execution.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Calculation Certification",
    description:
      "VaR, CVaR, stress tests — all with domain constraints that enforce regulatory bounds. Every risk model carries a mathematical proof of correctness.",
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description:
      "Transaction validation with amount bounds, currency conversion constraints, and balance sufficiency checks. Zero undefined behavior in the payment path.",
  },
  {
    icon: Search,
    title: "Fraud Detection Logic",
    description:
      "Rule-based fraud detection as policy circuits. Every decision path is traceable, auditable, and mathematically verifiable — no black boxes.",
  },
];

const standards = [
  { standard: "MiFID II Art. 17", coverage: "Strong", detail: "Algo trading controls, risk bounds, kill switches" },
  { standard: "SOX Sec 404", coverage: "Strong", detail: "Internal controls on financial calculations" },
  { standard: "SOC2 Processing Integrity (PI1.x, CC8.1)", coverage: "~30%", detail: "Processing logic + change control evidence" },
  { standard: "PCI-DSS Req 6, 10", coverage: "Partial", detail: "Secure coding evidence + audit trail" },
  { standard: "Basel III", coverage: "Partial", detail: "Verified calculations only — not capital/liquidity governance" },
  { standard: "DORA Art. 6, 9", coverage: "Partial", detail: "Prevention only — not detection/response" },
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
              Every transaction.{" "}
              <span className="text-[#00b8d4]">Mathematically verified.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Financial software bugs cost billions. Compliance audits are manual and fragile.
              BRIK64 makes every calculation provably correct and every audit trail automatic.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Verify your financial systems <ArrowRight className="h-4 w-4" />
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
              One bug can move billions
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Billion-dollar bugs",
                  desc: "Knight Capital lost $440M in 45 minutes from a software deployment error. Citibank accidentally sent $900M due to a UI bug. The stakes are existential.",
                },
                {
                  title: "Manual compliance",
                  desc: "SOC2 audits, PCI-DSS assessments, and regulatory reviews consume thousands of hours per year. Evidence collection is manual, error-prone, and expensive.",
                },
                {
                  title: "Opaque logic",
                  desc: "Risk models are complex, poorly documented, and hard to audit. When regulators ask 'why did this calculation produce this result?' — the answer takes weeks.",
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
              Provable correctness for financial logic
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
              Transaction validator with balance constraints
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              This circuit validates financial transactions at the domain level. Amount must
              be positive, rate must be bounded, balance must be sufficient. No transaction
              can violate these constraints.
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
              Amount positive, rate bounded, balance sufficient, KYC enforced.{" "}
              <PhiC /> = 1 — every transaction carries mathematical proof of validity.
            </p>
          </section>

          {/* ── Standards ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Compliance &amp; Standards
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Processing logic evidence, mapped to standards
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
              BRIK64 generates verification evidence for processing logic and change control.
              Infrastructure, organizational, and procedural controls require separate evidence.
            </p>
          </section>

          {/* ── CTA ── */}
          <section className="bg-background px-6 py-24 text-center lg:px-16">
            <h2 className="mx-auto text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Start building &mdash; financial systems
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Verify your financial systems. Every transaction proven. Every risk calculation
              certified. Every audit trail automatic.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
              >
                Verify your financial systems <ArrowRight className="h-4 w-4" />
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
