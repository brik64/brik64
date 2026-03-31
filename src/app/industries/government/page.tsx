import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { Building2, Vote, Activity, Fingerprint, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";


export const metadata = {
  title: "Government & Defense — BRIK64 Industries",
  description:
    "Government software handles elections, taxes, intelligence, and nuclear weapons. It deserves mathematical proof, not checkbox compliance.",
};

const useCases = [
  {
    icon: Building2,
    title: "Classified System Verification",
    description:
      "Every function in a classified system becomes a verified circuit. Cross-domain guards, data diodes, compartmentalization — formally proven, not penetration-tested. SolarWinds compromised 18,000 organizations because one unverified build slipped through. With BRIK64, unverified code cannot compile.",
  },
  {
    icon: Vote,
    title: "Election Software Integrity",
    description:
      "Every ballot path is traceable. Every tabulation is provably correct. Every audit is mathematical, not procedural. When 40% of Americans doubt election integrity, the answer isn't more auditors — it's software that proves its own correctness.",
  },
  {
    icon: Activity,
    title: "Critical Infrastructure Protection",
    description:
      "State unemployment systems crashed under COVID, leaving 40 million Americans waiting. Healthcare.gov cost $1.7 billion and failed on day one. These weren't hardware failures — they were software without mathematical guarantees running systems that affect millions of lives.",
  },
  {
    icon: Fingerprint,
    title: "Supply Chain Integrity (SBOM+Proof)",
    description:
      "A software bill of materials tells you what's inside. BRIK64 tells you that what's inside is correct. Every component carries a certification hash — not a signature from a developer who might be compromised, but a mathematical proof that the code does exactly what it claims.",
  },
];

const standards = [
  "FedRAMP — automated evidence generation for authorization packages, reducing ATO timelines from 18 months to weeks",
  "NIST 800-53 — processing integrity and change control evidence mapped to SI and CM control families",
  "FISMA — continuous monitoring evidence with mathematical proof of processing logic correctness",
  "CMMC Level 1-3 — processing integrity evidence for DoD contractor assessments",
  "ITAR — verified computation logic for defense-related technical data processing",
  "Common Criteria EAL — processing logic evidence for formal evaluation assurance levels",
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
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              Government &amp; Defense
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Government software handles elections, taxes, and nuclear weapons.{" "}
              <span className="text-[#00b8d4]">It deserves mathematical proof.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              The federal government spends $100 billion a year on IT. Most of it runs on code that
              has never been formally verified. BRIK64 makes every function auditable, every data path
              provable, and every deployment mathematically certified.
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
              Billion-dollar failures. Checkbox compliance. Zero verification.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Healthcare.gov: $1.7B failure",
                  desc: "The most expensive website in history crashed on launch day. 6 million lines of code, thousands of tests, 55 contractors — and nobody could prove the system would work under load. Tests check what you think of. Proofs check everything.",
                },
                {
                  title: "Supply chain compromise",
                  desc: "SolarWinds gave nation-state attackers access to Treasury, Commerce, DHS, and the nuclear weapons stockpile. One compromised build server. 18,000 organizations breached. The fix isn't better perimeters — it's code that proves its own integrity with an immutable hash.",
                },
                {
                  title: "Legacy COBOL systems",
                  desc: "State unemployment systems still run 60-year-old COBOL. During COVID, 40 million Americans waited months for benefits because these systems couldn't scale. Modernization fails because there's no way to prove new code matches old behavior. BRIK64 lifts COBOL to PCD and certifies equivalence.",
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
              Mathematical proof for national security software
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
              Classification-enforced access control
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              This circuit implements Bell-LaPadula mandatory access control as a mathematical proof.
              Clearance levels, compartmentalization, and nationality restrictions are not policy
              documents — they are compiler constraints. Unauthorized access doesn't return 403.
              It cannot compile.
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
              Bell-LaPadula enforced at compile time. Compartments verified. Nationality checked.{" "}
              <PhiC /> = 1 — unauthorized access is not a runtime error. It is a mathematical impossibility.
            </p>
          </section>

          {/* ── Standards ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Compliance &amp; Standards
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Stop checking boxes. Start generating proofs.
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
              BRIK64 generates mathematical verification evidence for processing logic and change control.
              What used to take 18 months of manual documentation now takes minutes of automated proof generation.
            </p>
          </section>

          {/* ── CTA ── */}
          <section className="bg-background px-6 py-24 text-center lg:px-16">
            <h2 className="mx-auto text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The nation&rsquo;s software deserves the nation&rsquo;s best verification
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Every access decision proven. Every data path auditable. Every deployment
              mathematically certified. Software worthy of what it protects.
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
      </div>

      </main>
      <div className="relative z-10">

        <Footer />

      </div>
    </>
  );
}
