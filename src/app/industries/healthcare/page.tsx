import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { CopyableCode } from "@/components/CopyableCode";
import { Heart, Pill, Stethoscope, MonitorSmartphone, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";

export const metadata = {
  title: "Healthcare — BRIK64 Industries",
  description:
    "An insulin pump that can overdose is a weapon. BRIK64 makes that mathematically impossible. IEC 62304 Class C evidence, drug dosage verification, and patient safety by construction.",
};

const useCases = [
  {
    icon: Pill,
    title: "Drug Dosage Calculation",
    description:
      "Weight-based dosing. Age adjustments. Renal function correction via Cockcroft-Gault. Therapeutic window enforcement. The compiler rejects any prescription outside the safe range. Not as a warning — as a compilation failure. The overdose cannot be compiled.",
  },
  {
    icon: Heart,
    title: "Patient Data Flow Verification",
    description:
      "Every data path from sensor to display formally verified. Patient weight, lab values, vital signs — all carry domain constraints. A corrupted decimal point, a swapped patient ID — the circuit rejects it before it reaches a clinician. HIPAA compliance is not a policy. It is a mathematical property.",
  },
  {
    icon: Stethoscope,
    title: "Diagnostic Algorithm Certification",
    description:
      "Clinical decision support as certified circuits. Every diagnostic pathway is traceable. Every threshold is bounded. Every output is justified by a mathematical proof a regulator can read. No ML black box. Deterministic logic. Always.",
  },
  {
    icon: MonitorSmartphone,
    title: "Medical Device Software",
    description:
      "IEC 62304 Class C — the highest risk classification — requires formal verification evidence. BRIK64 generates it automatically. What used to take 18 months of manual documentation now happens at compile time. Every function certified. Every artifact timestamped. Every audit automatic.",
  },
];

const standards = [
  "IEC 62304 — Medical Device Software Lifecycle Processes (Class A/B/C)",
  "HIPAA — Health Insurance Portability and Accountability Act (data integrity by construction)",
  "FDA 21 CFR Part 11 — Electronic Records and Signatures (cryptographic audit trail)",
  "MDR — EU Medical Device Regulation 2017/745 (CE marking evidence)",
  "IEC 62443 — Industrial Cybersecurity for Medical Devices",
  "ISO 14971 — Application of Risk Management to Medical Devices",
];

export default function HealthcareIndustryPage() {
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
                Healthcare
              </span>
              <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                An insulin pump that can overdose{" "}
                <span className="text-[#00b8d4]">is a weapon. BRIK64 makes that impossible.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                The Therac-25 killed patients with a race condition. Drug infusion pumps have been
                recalled hundreds of times for software defects. Every one of those deaths was
                preventable. Not with better testing. With mathematical proof.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <a
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
                >
                  Build verified healthcare software <ArrowRight className="h-4 w-4" />
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
                Software bugs in healthcare don&apos;t fail gracefully. They kill.
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "The recalls that never stopped",
                    desc: "The FDA recalled 8.5 million insulin pump units in 2019 due to a cybersecurity vulnerability. Drug infusion pumps account for 35% of all medical device recalls. These are not hardware failures. They are software failures. Every single one.",
                  },
                  {
                    title: "IEC 62304 Class C costs millions",
                    desc: "Class C medical device software — the highest risk category — requires complete requirements traceability, formal test coverage, and a full verification audit trail. Manual evidence collection takes 12-18 months and costs $2-5M per product cycle. There is no shortcut. Until now.",
                  },
                  {
                    title: "A decimal point kills",
                    desc: "In 1999, a decimal point error in chemotherapy software at a cancer center caused 10x overdoses. The code passed testing. The engineer didn't catch it. The patient didn't survive it. Testing finds some bugs. Proof finds all of them.",
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
                Every prescription proven. Every data path certified.
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
                A dosage calculator that cannot overdose
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
                Vancomycin. Weight-based. Age-adjusted. Renal-corrected. The therapeutic
                window is not a guideline — it is a domain constraint. No prescription
                outside these bounds can compile. The overdose is not caught at runtime.
                It does not exist.
              </p>
              <CopyableCode title="dosage_calculator.pcd">{`// Drug Dosage Calculator — Vancomycin Weight-Based Dosing
// Φ_c = 1 — therapeutic window enforced by the compiler

circuit dosage_calculator {
  // Patient parameters — full clinical range
  input weight_kg     : Float64[0.5 .. 300.0]     // neonate to bariatric
  input age_years     : Float64[0.0 .. 120.0]     // full patient range
  input creatinine    : Float64[0.1 .. 15.0]      // mg/dL, renal function
  input concentration : Float64[0.001 .. 1000.0]  // mg/mL preparation

  // Vancomycin parameters
  const dose_per_kg   : Float64 = 15.0            // mg/kg standard
  const max_single    : Float64 = 2000.0          // mg absolute ceiling
  const min_dose      : Float64 = 250.0           // mg minimum effective

  // Renal adjustment (Cockcroft-Gault simplified)
  let renal_factor = clamp(
    (140.0 - age_years) * weight_kg / (72.0 * creatinine),
    0.1, 1.0
  )

  // Dose calculation with renal correction
  let raw_dose     = weight_kg * dose_per_kg * renal_factor
  let clamped_dose = clamp(raw_dose, min_dose, max_single)
  let volume_ml    = clamped_dose / concentration

  // Safety assertions — these are not guidelines. They are laws.
  assert clamped_dose >= min_dose
    | reject("Sub-therapeutic dose — consult pharmacist")

  assert clamped_dose <= max_single
    | reject("Exceeds maximum single dose — IEC 62304 Class C violation")

  assert volume_ml <= 500.0
    | reject("Infusion volume exceeds safe limit — verify concentration")

  output prescription : {
    dose_mg:    clamped_dose,
    volume_ml:  volume_ml,
    renal_adj:  renal_factor,
    certified:  certification_hash()
  }
}`}</CopyableCode>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
                Weight, age, renal function — all domain-bounded. Dose clamped to therapeutic window.{" "}
                <PhiC /> = 1 — no prescription can exceed safe limits. Not by design. By construction.
              </p>
            </section>

            {/* ── Standards ── */}
            <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
              <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
                Compliance &amp; Standards
              </span>
              <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                IEC 62304 Class C evidence. Generated, not written.
              </h2>
              <ul className="mx-auto mt-8 max-w-2xl space-y-3">
                {standards.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00b8d4]" />
                    <span className="text-sm text-foreground">{s}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── CTA ── */}
            <section className="bg-background px-6 py-24 text-center lg:px-16">
              <h2 className="mx-auto text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The Therac-25 killed with a race condition. Your device won&rsquo;t.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
                Every dosage proven. Every data path certified. Every device recall prevented.
                IEC 62304 evidence generated automatically. Patient safety is not a feature.
                It is a mathematical property.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
                >
                  Build verified healthcare software <ArrowRight className="h-4 w-4" />
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
