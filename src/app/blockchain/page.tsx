import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CircuitGrid } from "@/components/CircuitGrid";
import { Link2, ShieldCheck, Fuel, Vote, Package, Leaf, KeyRound } from "lucide-react";
import type { ReactNode } from "react";

const useCases: { icon: ReactNode; name: string; desc: string; code: string }[] = [
  {
    icon: <ShieldCheck className="h-5 w-5 text-teal" />,
    name: "Verified Escrow",
    desc: "Deposit, release, refund, timeout — all states covered by exhaustive pattern matching. No undefined behavior.",
    code: `type Amount = range[0, 1_000_000_000];
type Deadline = range[1, 2_000_000_000];

pc escrow_release(balance: Amount, deadline: Deadline, now: u64) {
    match now > deadline {
        true => Ok(balance),
        false => Err(Error.NotYet),
    }
}`,
  },
  {
    icon: <Package className="h-5 w-5 text-teal" />,
    name: "Supply Chain Tracking",
    desc: "Range types for temperature, GPS, timestamps. A sensor reporting 200°C when the domain is [-40, 80] doesn't compile.",
    code: `type Temperature = range[-40, 80];
type Location = {
    lat: range[-90, 90],
    lon: range[-180, 180]
};

pc log_shipment(temp: Temperature, loc: Location) {
    // -999°C? Doesn't compile.
}`,
  },
  {
    icon: <Vote className="h-5 w-5 text-teal" />,
    name: "Voting System",
    desc: "Double voting is structurally impossible. The circuit is closed — there is no path where a voter votes twice.",
    code: `type Choice = enum { Yes, No, Abstain };

pc cast_vote(voter: VoterId, choice: Choice, has_voted: bool) {
    match has_voted {
        true => Err(Error.AlreadyVoted),
        false => Ok(Vote { voter, choice }),
    }
}`,
  },
  {
    icon: <Fuel className="h-5 w-5 text-teal" />,
    name: "Parametric Insurance",
    desc: "Automatic payout when conditions are met. No negative payouts, no overflow, no undefined magnitude values.",
    code: `type Richter = range[0.0, 10.0];
type PayoutUSD = range[0, 10_000_000];

pc insurance_check(magnitude: Richter, threshold: Richter) {
    match magnitude >= threshold {
        true => calculate_payout(magnitude),
        false => 0,
    }
}`,
  },
  {
    icon: <Leaf className="h-5 w-5 text-teal" />,
    name: "Carbon Credits",
    desc: "A retired credit cannot be re-activated. The circuit prevents double counting structurally.",
    code: `type CreditStatus = enum { Active, Retired, Cancelled };

pc retire_credit(status: CreditStatus) {
    match status {
        Active => Ok(CreditStatus.Retired),
        Retired => Err(Error.AlreadyRetired),
        Cancelled => Err(Error.Invalid),
    }
}`,
  },
  {
    icon: <KeyRound className="h-5 w-5 text-teal" />,
    name: "Identity Verification",
    desc: "Zero-knowledge age check. Reveals only true/false, never the actual data. The circuit guarantees privacy.",
    code: `type Age = range[0, 150];

pc verify_over_18(age: Age) -> bool {
    // Reveals only true/false, never the age
    // Φc = 1: no path where age is -5 or 999
    age >= 18
}`,
  },
];

export default function BlockchainPage() {
  return (
    <>
      <CircuitGrid />
      <Navbar />
      <main className="bg-background relative z-10">
        <section className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
          <span className="text-muted-foreground mb-5 inline-block w-fit rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium tracking-wide">
            Blockchain &middot; Smart Contracts
          </span>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Code is law.{" "}
            <span className="text-teal">Make sure it&apos;s correct.</span>
          </h1>

          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
            Smart contracts can&apos;t be patched after deployment. A single bug has
            caused billions in losses. BRIK-64 is the only language where the
            contract doesn&apos;t deploy if it has undefined behavior.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <Link2 className="mr-1.5 inline h-3 w-3" />CosmWasm
            </span>
            <span className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              Near Protocol
            </span>
            <span className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              Solana (BPF adapter)
            </span>
            <span className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              WASM target &lt; 100KB
            </span>
          </div>

          {/* Comparison */}
          <div className="mt-10 max-w-lg rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-medium text-foreground">The pitch</p>
            <div className="mt-3 space-y-2 text-sm">
              <p className="text-muted-foreground"><span className="text-muted-foreground/40">Solidity:</span> &ldquo;Hope the auditor finds the bugs&rdquo;</p>
              <p className="text-muted-foreground"><span className="text-muted-foreground/40">Rust/WASM:</span> &ldquo;Hope the tests cover the edge cases&rdquo;</p>
              <p className="text-teal font-medium">BRIK-64: &ldquo;The bugs don&apos;t compile&rdquo;</p>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="border-border mx-auto max-w-7xl border-t px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium tracking-tight">Use cases</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {useCases.map((uc) => (
              <div key={uc.name} className="rounded-lg border border-border bg-card p-5">
                <div className="flex items-center gap-2">
                  {uc.icon}
                  <h3 className="text-sm font-medium text-foreground">{uc.name}</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{uc.desc}</p>
                <div className="mt-3 overflow-hidden rounded-lg border border-white/10 bg-[#0a0e14]">
                  <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                    <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                    <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                  </div>
                  <pre className="overflow-x-auto p-3 text-[11px] leading-relaxed text-teal/80">
                    {uc.code}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gas estimation */}
        <section className="border-border mx-auto max-w-7xl border-t px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium tracking-tight">Gas estimation from PCD</h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Count monomers = count operations = estimate gas. Within 20% of actual execution cost.
          </p>
          <div className="mt-4 max-w-md overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-[10px] font-medium tracking-wide text-white/30">brikc build</span>
            </div>
            <div className="flex flex-col gap-1 p-5 font-mono text-xs">
              <p className="text-white/70"><span className="text-teal">$</span> brikc build escrow.b64 --target wasm --estimate-gas</p>
              <p className="mt-1 text-emerald-400">&nbsp;&nbsp;&#10003; Compiled: 42KB WASM</p>
              <p className="text-emerald-400">&nbsp;&nbsp;&#10003; Estimated gas: 127,400 units</p>
              <p className="text-emerald-400">&nbsp;&nbsp;&#10003; Φc = 1 — certificate stored on-chain</p>
            </div>
          </div>
        </section>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
