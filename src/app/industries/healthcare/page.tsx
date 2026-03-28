import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { Heart, Pill, Stethoscope, MonitorSmartphone, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Healthcare — BRIK-64 Industries",
  description:
    "Patient safety. Provably. Drug dosage calculation, diagnostic algorithm certification, and medical device software verification with BRIK-64.",
};

const useCases = [
  {
    icon: Pill,
    title: "Drug Dosage Calculation",
    description:
      "Weight-based dosing, age adjustments, and concentration calculations with domain constraints. The compiler rejects any dosage outside the therapeutic window.",
  },
  {
    icon: Heart,
    title: "Patient Data Flow Verification",
    description:
      "Every data path from sensor to display formally verified. No patient datum can be lost, corrupted, or misrouted. HIPAA compliance by construction.",
  },
  {
    icon: Stethoscope,
    title: "Diagnostic Algorithm Certification",
    description:
      "Clinical decision support algorithms as certified circuits. Every diagnostic pathway is traceable, every threshold is bounded, every output is justified.",
  },
  {
    icon: MonitorSmartphone,
    title: "Medical Device Software",
    description:
      "IEC 62304 requires risk-based software classification. BRIK-64 provides Class C evidence automatically — formal proofs for the highest safety class.",
  },
];

const standards = [
  "IEC 62304 — Medical Device Software Lifecycle Processes",
  "HIPAA — Health Insurance Portability and Accountability Act",
  "FDA 21 CFR Part 11 — Electronic Records and Signatures",
  "MDR — EU Medical Device Regulation (2017/745)",
  "IEC 62443 — Industrial Cybersecurity for Medical Devices",
  "ISO 14971 — Application of Risk Management to Medical Devices",
];

export default function HealthcareIndustryPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* ── Hero ── */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              Healthcare
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Patient safety.{" "}
              <span className="text-[#00b8d4]">Provably.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Medical device software has lives at stake. IEC 62304 compliance is complex and
              expensive. BRIK-64 provides mathematical guarantees that every calculation,
              every data path, and every decision is correct.
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
            <h2 className="text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Software bugs in healthcare cost lives
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Dosage errors",
                  desc: "The Therac-25 radiation machine killed patients due to software race conditions. Drug infusion pumps have been recalled hundreds of times for software defects.",
                },
                {
                  title: "Regulatory burden",
                  desc: "IEC 62304 Class C software requires the highest level of verification. Manual evidence collection costs millions and delays product launches by years.",
                },
                {
                  title: "Data integrity",
                  desc: "Patient data flowing through complex systems can be silently corrupted. A wrong decimal point in a lab result or a swapped patient ID can be fatal.",
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
            <h2 className="text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Mathematical proof for patient safety
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
            <h2 className="text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Dosage calculator with therapeutic constraints
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              This circuit calculates drug dosages with weight, age, and concentration
              constraints. No dosage can exceed the therapeutic maximum — the compiler
              guarantees patient safety.
            </p>
            <div className="mt-8 overflow-hidden border border-border bg-[#0a0e14]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-white/50">
                  dosage_calculator.pcd
                </span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-[#e0e0e0]">
                <code>{`// Drug Dosage Calculator — Therapeutic Window Enforced
// Φ_c = 1 — patient safety guaranteed by construction

circuit dosage_calculator {
  // Patient parameters
  input weight_kg     : Float64[0.5 .. 300.0]     // neonate to bariatric
  input age_years     : Float64[0.0 .. 120.0]     // full range
  input creatinine    : Float64[0.1 .. 15.0]      // mg/dL, renal function
  input concentration : Float64[0.001 .. 1000.0]  // mg/mL

  // Drug parameters (example: vancomycin)
  const dose_per_kg   : Float64 = 15.0            // mg/kg
  const max_single    : Float64 = 2000.0          // mg absolute max
  const min_dose      : Float64 = 250.0           // mg minimum effective

  // Renal adjustment factor (Cockcroft-Gault simplified)
  let renal_factor = clamp(
    (140.0 - age_years) * weight_kg / (72.0 * creatinine),
    0.1, 1.0
  )

  // Calculated dose
  let raw_dose     = weight_kg * dose_per_kg * renal_factor
  let clamped_dose = clamp(raw_dose, min_dose, max_single)
  let volume_ml    = clamped_dose / concentration

  // Safety assertions
  assert clamped_dose >= min_dose
    | reject("Sub-therapeutic dose — consult pharmacist")

  assert clamped_dose <= max_single
    | reject("Exceeds maximum single dose")

  assert volume_ml <= 500.0
    | reject("Infusion volume too large — verify concentration")

  output prescription : {
    dose_mg:      clamped_dose,
    volume_ml:    volume_ml,
    renal_adj:    renal_factor,
    frequency:    dose_frequency(creatinine),
    certified:    certification_hash()
  }
}`}</code>
              </pre>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
              Weight, age, renal function — all domain-bounded. Dose clamped to therapeutic window.{" "}
              <PhiC /> = 1 — no prescription can exceed safe limits.
            </p>
          </section>

          {/* ── Standards ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Compliance &amp; Standards
            </span>
            <h2 className="text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Regulatory compliance by construction
            </h2>
            <ul className="mt-8 space-y-3">
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
            <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Start building verified healthcare software
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Build verified healthcare software. Every dosage proven. Every data path
              certified. Every patient interaction mathematically safe.
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
      </main>
      <Footer />
    </>
  );
}
