import { CopyableCode } from "@/components/CopyableCode";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { Heart, Pill, Stethoscope, MonitorSmartphone, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";


export const metadata = {
  title: "Healthcare — BRIK64 Industries",
  description:
    "An insulin pump that can overdose is a weapon. BRIK64 makes overdose structurally impossible. Medical device software verification with mathematical proof.",
};

const useCases = [
  {
    icon: Pill,
    title: "Insulin Pump Controllers",
    description:
      "Dose calculation with domain constraints that make overdose structurally impossible. Dose: Range[0.0, 25.0] units. Glucose: Range[20, 600] mg/dL. Basal rate: Range[0.0, 5.0] units/hr. The domain rejects what kills patients — before the code ever runs.",
  },
  {
    icon: Heart,
    title: "Infusion Pump Software",
    description:
      "Flow rate bounds, air-in-line detection thresholds, occlusion pressure limits — all mathematically verified. Every parameter that touches a patient's bloodstream is domain-constrained. Not tested. Proven.",
  },
  {
    icon: Stethoscope,
    title: "Diagnostic Algorithms",
    description:
      "Sensitivity and specificity thresholds bounded by construction. False positive and false negative rates constrained at the compiler level. Every diagnostic pathway is traceable, every clinical decision is justified.",
  },
  {
    icon: MonitorSmartphone,
    title: "Patient Monitoring Systems",
    description:
      "Alarm thresholds verified at compile time. HR: Range[30, 250] bpm. SpO2: Range[0, 100]%. BP systolic: Range[40, 300] mmHg. When a monitor fails silently, patients die. BRIK64 makes silent failure impossible.",
  },
];

const standards = [
  "IEC 62304 — Software lifecycle for medical devices. Classes A, B, and C. BRIK64 generates Class C verification evidence automatically.",
  "FDA 21 CFR Part 820 — Quality System Regulation. Every software change requires re-validation. BRIK64 makes re-validation instant.",
  "IEC 60601-1 — Medical electrical equipment safety. Processing logic verified by construction, not by manual review.",
  "ISO 14971 — Risk management for medical devices. Domain constraints are risk controls. Compiler-enforced, not document-enforced.",
  "EU MDR 2017/745 — European Medical Device Regulation. Mathematical proof of processing integrity for CE marking.",
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
              An insulin pump that can overdose is a{" "}
              <span className="text-[#00b8d4]">weapon.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              BRIK64 makes overdose structurally impossible. Not with better testing.
              Not with more careful code review. With mathematical proof that
              dangerous values cannot exist in your software.
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
              Software kills patients. This is not hypothetical.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Therac-25: the warning we ignored",
                  desc: "Six patients received massive radiation overdoses because of a software race condition. Three died. That was 1985. Forty years later, medical device software is still verified by humans reading documents.",
                },
                {
                  title: "$31M per recall. 70+ per year.",
                  desc: "The FDA MAUDE database logs 70+ software-related medical device recalls annually. Average cost of a Class I recall: $31 million. IEC 62304 Class C requires complete lifecycle documentation. FDA 510(k) takes 6-12 months. PMA takes 1-3 years. Every software change requires re-validation under 21 CFR Part 820.",
                },
                {
                  title: "The real cost is human",
                  desc: "A wrong decimal in a dose calculation. A race condition in an infusion pump. A silent alarm failure in a patient monitor. These aren't edge cases — they're Tuesday. And every one of them was \"thoroughly tested.\"",
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
              The compiler rejects what kills patients
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
              Insulin dose calculator. Overdose is a compile error.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Real insulin pump parameters. Real clinical constraints. The compiler
              enforces every domain bound — a dose of 26 units doesn't produce
              a wrong answer. It doesn't compile.
            </p>
            <CopyableCode title="insulin_dose_controller.pcd">{`// Insulin Dose Controller — Overdose Structurally Impossible
// Φ_c = 1 — patient safety guaranteed by construction

circuit insulin_dose_controller {
  // Patient inputs — every value is domain-bounded
  input glucose_mgdl    : Float64[20.0 .. 600.0]     // mg/dL — clinical range
  input current_iob     : Float64[0.0 .. 25.0]       // insulin-on-board (units)
  input weight_kg       : Float64[2.0 .. 250.0]      // neonate to bariatric
  input sensitivity     : Float64[10.0 .. 500.0]     // mg/dL per unit (ISF)

  // Pump constraints — hardware limits
  const max_bolus       : Float64 = 25.0              // units — absolute max
  const max_basal_rate  : Float64 = 5.0               // units/hr
  const target_glucose  : Float64 = 110.0             // mg/dL — target
  const min_glucose_act : Float64 = 70.0              // don't dose below this

  // Correction dose calculation
  let correction = (glucose_mgdl - target_glucose) / sensitivity
  let adjusted   = correction - current_iob
  let safe_dose  = clamp(adjusted, 0.0, max_bolus)

  // Safety: never dose if glucose is low
  let final_dose = if glucose_mgdl < min_glucose_act
    then 0.0
    else safe_dose

  // Assertions — the compiler enforces these
  assert final_dose >= 0.0
    | reject("Negative dose — logic error")

  assert final_dose <= max_bolus
    | reject("Exceeds maximum bolus — rejected")

  assert glucose_mgdl >= 20.0
    | reject("Glucose reading out of sensor range")

  output prescription : {
    bolus_units:   final_dose,
    glucose_input: glucose_mgdl,
    iob_remaining: current_iob,
    correction:    correction,
    certified:     certification_hash()
  }
}`}</CopyableCode>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
              Glucose, insulin-on-board, sensitivity factor — all domain-bounded. Dose clamped to pump hardware limits. IOB subtracted before delivery.{" "}
              <PhiC /> = 1 — overdose is not a risk to mitigate. It is a state that cannot exist.
            </p>
          </section>

          {/* ── Standards ── */}
          <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
            <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
              Compliance &amp; Standards
            </span>
            <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Every standard your QMS team dreads. Handled.
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
              BRIK64 generates mathematical verification evidence for processing logic.
              Infrastructure, organizational, and procedural controls require separate evidence —
              but the hardest part, proving your software is correct, is now automatic.
            </p>
          </section>

          {/* ── CTA ── */}
          <section className="bg-background px-6 py-24 text-center lg:px-16">
            <h2 className="mx-auto text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              When your software touches patients, mathematical proof isn&apos;t optional.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Start building — free. Every dose proven safe. Every alarm threshold verified.
              Every diagnostic pathway certified. Ship to the FDA with evidence that isn't
              a PDF someone wrote at 2am.
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
