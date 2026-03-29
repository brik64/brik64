import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { Building2, Vote, Activity, Fingerprint, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Government — BRIK-64 Industries",
  description:
    "Zero-trust code for zero-trust systems. Classified system verification, voting system certification, and infrastructure monitoring with BRIK-64.",
};

const useCases = [
  {
    icon: Building2,
    title: "Classified System Verification",
    description:
      "Every function in a classified system as a verified circuit. Cross-domain guards, data diodes, and compartmentalization — formally proven, not just tested.",
  },
  {
    icon: Vote,
    title: "Voting System Certification",
    description:
      "Ballot counting, tabulation, and audit trail logic as certified circuits. Every vote path is traceable, every total is provably correct, every audit is mathematical.",
  },
  {
    icon: Activity,
    title: "Infrastructure Monitoring",
    description:
      "Power grid, water systems, transportation networks — monitoring software with domain constraints that enforce physical bounds and alert thresholds.",
  },
  {
    icon: Fingerprint,
    title: "Identity Management",
    description:
      "Authentication flows, authorization decisions, and credential validation as policy circuits. Zero-trust is no longer a policy — it is a mathematical property.",
  },
];

const standards = [
  "FedRAMP — processing logic evidence for authorization packages",
  "NIST 800-53 — change control and processing integrity evidence (partial)",
  "Common Criteria — processing logic evidence for EAL evaluations",
  "CMMC — processing integrity evidence for assessments (Level 1-3)",
  "FIPS 140-3 — verified calculation logic only (not cryptographic module validation)",
  "FISMA — processing logic and change control evidence (not full compliance)",
];

export default function GovernmentIndustryPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* ── Hero ── */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              Government
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Zero-trust code for{" "}
              <span className="text-[#00b8d4]">zero-trust systems.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Government software needs auditability. Supply chain attacks are existential
              threats. BRIK-64 makes every function verifiable, every data path auditable,
              and every deployment certified.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
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
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              The Challenge
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trust no code — verify everything
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Supply chain attacks",
                  desc: "SolarWinds compromised 18,000 organizations including multiple federal agencies. A single unverified dependency brought down national security infrastructure.",
                },
                {
                  title: "Audit failures",
                  desc: "Government auditors review process, not code. FISMA compliance checks boxes — it does not verify that software actually does what it claims to do.",
                },
                {
                  title: "Legacy systems",
                  desc: "Critical government systems run COBOL from the 1960s. Modernization projects fail because there is no way to verify the new code matches the old behavior.",
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

          {/* ── How BRIK-64 Helps ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              How BRIK-64 Helps
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Verifiable software for national security
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
              Access control with clearance-level constraints
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              This circuit enforces classification-based access control. Every access decision
              is mathematically verified against clearance levels, need-to-know, and
              compartmentalization rules.
            </p>
            <CopyableCode title="access_control.pcd">{`// Access Control Circuit — Classification Enforced
// Φ_c = 1 — the circuit is mathematically complete: every input path produces a verified output or an explicit rejection

circuit access_control {
  // Classification levels (ordinal)
  type ClearanceLevel = Enum[
    "UNCLASSIFIED",    // 0
    "CONFIDENTIAL",    // 1
    "SECRET",          // 2
    "TOP_SECRET",      // 3
    "TS_SCI"           // 4
  ]

  // Subject (user) attributes
  input user_clearance   : ClearanceLevel
  input user_compartments: Set[String]
  input user_citizenship : Enum["US", "FVEY", "NATO", "OTHER"]

  // Object (resource) attributes
  input resource_class   : ClearanceLevel
  input resource_comparts: Set[String]
  input resource_relto   : Set[String]        // releasable to

  // Bell-LaPadula: no read up
  assert ord(user_clearance) >= ord(resource_class)
    | deny("Clearance insufficient for resource classification")

  // Compartmentalization: must have all required compartments
  assert is_superset(user_compartments, resource_comparts)
    | deny("Missing required compartment access")

  // Nationality check
  assert contains(resource_relto, user_citizenship)
    | deny("Resource not releasable to user's nationality")

  // Audit trail
  output access_decision : {
    granted:      true,
    user:         user_id(),
    resource:     resource_id(),
    clearance:    user_clearance,
    class:        resource_class,
    timestamp:    now(),
    audit_hash:   certification_hash()
  }
}`}</CopyableCode>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
              Bell-LaPadula enforced. Compartmentalization verified. Nationality checked.{" "}
              <PhiC /> = 1 — unauthorized access is not a runtime error, it is a compile-time impossibility.
            </p>
          </section>

          {/* ── Standards ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Compliance &amp; Standards
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Processing logic evidence for federal standards
            </h2>
            <ul className="mx-auto mt-8 max-w-2xl space-y-3">
              {standards.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00b8d4]" />
                  <span className="text-sm text-foreground">{s}</span>
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted-foreground">
              BRIK-64 generates verification evidence for processing logic and change control.
              Infrastructure, organizational, and procedural controls require separate evidence.
            </p>
          </section>

          {/* ── CTA ── */}
          <section className="bg-background px-6 py-24 text-center lg:px-16">
            <h2 className="mx-auto text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Start building verified government systems
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Build verified government systems. Every access decision proven. Every data path
              auditable. Every deployment mathematically certified.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
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
      </main>
      <Footer />
    </>
  );
}
