import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { CopyableCode } from "@/components/CopyableCode";
import { Building2, Vote, Activity, Fingerprint, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";

export const metadata = {
  title: "Government — BRIK64 Industries",
  description:
    "Democracy runs on software. Voting systems, classified networks, critical infrastructure — all running code that no one has formally proven correct. Until now.",
};

const useCases = [
  {
    icon: Vote,
    title: "Voting System Certification",
    description:
      "Ballot counting, tabulation, and audit trail logic as certified circuits. Every vote path is traceable. Every total is provably correct. Every audit is mathematical — not a re-count, a proof. The system cannot produce a total that doesn't follow from the inputs. Not unlikely. Impossible.",
  },
  {
    icon: Building2,
    title: "Classified System Verification",
    description:
      "Cross-domain guards, data diodes, compartmentalization logic — all formally proven. Every function in a classified system as a verified circuit. The orange wire does not cross the red boundary. Not by policy. By mathematical construction. FedRAMP High and Common Criteria EAL 6+.",
  },
  {
    icon: Activity,
    title: "Critical Infrastructure Monitoring",
    description:
      "Power grid, water treatment, transportation networks. Monitoring software with domain constraints that enforce physical bounds. Voltage: Range[0, 765000] V. pH: Range[0.0, 14.0]. Speed: Range[0, 350] km/h. The control system cannot command what the infrastructure cannot survive.",
  },
  {
    icon: Fingerprint,
    title: "Identity Management",
    description:
      "Authentication flows, authorization decisions, credential validation as policy circuits. Zero-trust is not a policy declaration — it is a mathematical property. Every access decision is a circuit: identity verified, clearance checked, resource bounded, action authorized. No exceptions. No bypasses.",
  },
];

const standards = [
  "FedRAMP — Federal Risk and Authorization Management Program (High baseline evidence)",
  "NIST SP 800-53 — Security and Privacy Controls (verification evidence for applicable controls)",
  "Common Criteria — IT Security Evaluation (EAL 4-7 assurance evidence)",
  "CMMC — Cybersecurity Maturity Model Certification (Level 2-3 practice evidence)",
  "FIPS 140-3 — Cryptographic Module Validation (cryptographic operation verification)",
  "FISMA — Federal Information Security Modernization Act (continuous monitoring evidence)",
];

export default function GovernmentIndustryPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
          {/* ── Hero ── */}
          <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white relative overflow-hidden">
            <HeroWireframeClient />
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
              <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
                Government
              </span>
              <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Zero-trust code{" "}
                <span className="text-teal">for zero-trust systems.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Democracy runs on software. Critical infrastructure runs on software.
                National security runs on software. None of it has been formally proven correct.
                The Colonial Pipeline ransomware attack cost $4.4M and disrupted fuel
                to 17 states. The root cause: unverified software. BRIK64 changes that.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-hover transition-colors"
                >
                  Build verified government systems <ArrowRight className="h-4 w-4" />
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
              <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
                The Challenge
              </span>
              <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The systems that protect democracy run on unverified code
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Voting systems run on hope",
                    desc: "The 2020 U.S. election saw claims of software manipulation that could not be definitively refuted — not because fraud occurred, but because the software was not formally verified. A certified voting system doesn't require a recount. It comes with a mathematical proof.",
                  },
                  {
                    title: "FedRAMP takes 12-18 months",
                    desc: "FedRAMP High authorization requires extensive evidence collection: system security plans, penetration testing, continuous monitoring plans, and documentation of hundreds of security controls. Manual evidence collection creates multi-year backlogs. BRIK64 generates processing integrity evidence automatically.",
                  },
                  {
                    title: "Critical infrastructure is the target",
                    desc: "The Stuxnet worm targeted industrial control systems. The SolarWinds attack compromised 18,000 government networks. Both exploited unverified software. Mathematical verification does not prevent all attacks. But it eliminates an entire class of software-logic vulnerabilities.",
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
              <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
                How BRIK64 Helps
              </span>
              <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Every vote proven. Every access decision verified.
              </h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {useCases.map((uc) => (
                  <div key={uc.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-teal/10">
                      <uc.icon className="h-6 w-6 text-teal" />
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
              <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
                Policy Circuit Example
              </span>
              <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A ballot counter that cannot miscount
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
                Every ballot has one vote. Every vote increments exactly one candidate.
                The total equals the sum of all ballots. These are not requirements.
                They are domain constraints. The circuit cannot produce a total that
                doesn&apos;t follow from the inputs. Mathematical proof, not audit hope.
              </p>
              <CopyableCode title="ballot_counter.pcd">{`// Ballot Counter Circuit — Provably Correct Tabulation
// Φc = 1 — every vote counted exactly once

circuit ballot_counter {
  // Election parameters
  input ballot_id        : Int64[1 .. 10000000]    // unique ballot identifier
  input candidate_id     : Int64[1 .. 100]         // bounded candidate list
  input precinct_id      : Int64[1 .. 100000]      // verified precinct
  input timestamp        : Int64[0 .. 9999999999]  // Unix timestamp

  // Ballot integrity constraints
  assert ballot_id not_in processed_ballots()
    | reject("Duplicate ballot: " ++ to_string(ballot_id))

  assert candidate_id in valid_candidates()
    | reject("Invalid candidate ID: " ++ to_string(candidate_id))

  assert precinct_id in valid_precincts()
    | reject("Invalid precinct: " ++ to_string(precinct_id))

  assert timestamp >= election_start() && timestamp <= election_end()
    | reject("Vote outside election window")

  // Record the vote — one and only one
  let vote_record = {
    ballot:    ballot_id,
    candidate: candidate_id,
    precinct:  precinct_id,
    time:      timestamp,
    hash:      certification_hash()
  }

  output counted_vote : {
    record:   vote_record,
    running_total: increment_count(candidate_id),
    audit_chain:   append_audit_log(vote_record)
  }
}`}</CopyableCode>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
                No duplicate ballots. No invalid candidates. No votes outside the election window.{" "}
                <PhiC /> = 1 — the ballot counter is mathematically correct. Not audited. Proven.
              </p>
            </section>

            {/* ── Standards ── */}
            <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
              <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-teal">
                Compliance &amp; Standards
              </span>
              <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Built for the frameworks that protect national security
              </h2>
              <ul className="mx-auto mt-8 max-w-2xl space-y-3">
                {standards.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <span className="text-sm text-foreground">{s}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── CTA ── */}
            <section className="bg-background px-6 py-24 text-center lg:px-16">
              <h2 className="mx-auto text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Democracy deserves software that can be proven correct.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
                Every vote certified. Every access decision verified. Every critical system
                mathematically proven. FedRAMP evidence generated automatically.
                Zero-trust is not a policy. It is a property. BRIK64 gives it to you by construction.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-hover transition-colors"
                >
                  Build verified government systems <ArrowRight className="h-4 w-4" />
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
