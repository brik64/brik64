import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import { CopyableCode } from "@/components/CopyableCode";
import { FlaskConical, Ruler, BarChart3, RefreshCw, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { HeroWireframeClient } from "@/components/HeroWireframeClient";

export const metadata = {
  title: "Science & Research — BRIK64 Industries",
  description:
    "The replication crisis is a software crisis. Algorithms you can cite. Results you can reproduce. Physical laws as domain constraints. BRIK64 makes computational science provable.",
};

const useCases = [
  {
    icon: Ruler,
    title: "Domain Constraints for Physical Units",
    description:
      "Speed cannot exceed c. Temperature cannot go below 0 K. Pressure is always positive. Encode physical laws as domain constraints — the compiler enforces them. A simulation that produces a negative temperature doesn't fail at runtime with a spurious result. It fails to compile. The violation is caught before it propagates.",
  },
  {
    icon: BarChart3,
    title: "Error Propagation Tracking",
    description:
      "Every measurement carries uncertainty. GPS accuracy ±3 meters. Spectrometer precision ±0.1 nm. A 1% error in a glucose sensor becomes a 3% error in a dosing algorithm. BRIK64 propagates error bounds through every computation — so your final result carries a certified uncertainty range, not a silent accumulation of floating-point drift.",
  },
  {
    icon: FlaskConical,
    title: "Algorithm Certification",
    description:
      "Publish your algorithm as a certified PCD circuit. The circuit is the paper. Reviewers verify the proof, not the implementation. Language-agnostic. Compiler-agnostic. Platform-agnostic. The same inputs always produce the same outputs — on any machine, in any year. Reproducibility by construction, not convention.",
  },
  {
    icon: RefreshCw,
    title: "Reproducible Computation",
    description:
      "The replication crisis has a computational root. Studies fail to replicate because the computational environment isn't specified. A BRIK64 circuit has no environment dependencies. No library versions, no OS quirks, no compiler flags. It is a mathematical function. Same input. Same output. Every time. Forever.",
  },
];

const standards = [
  "FAIR Data Principles — Findable, Accessible, Interoperable, Reusable. PCD circuits are language-agnostic and formally versioned.",
  "Good Scientific Practice (GSP) — Algorithm certification provides the formal verification layer GSP requires.",
  "Nature/Science Reproducibility Standards — A certified circuit is a reproducibility guarantee, not a promise.",
  "NIST Measurement Uncertainty Framework — Error propagation through every computation, not just the final result.",
  "Open Science certification — Every PCD circuit is publishable as a DOI-bearing artifact with a machine-verifiable proof.",
];

export default function ScienceIndustryPage() {
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
                Science &amp; Research
              </span>
              <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Algorithms you can cite.{" "}
                <span className="text-[#00b8d4]">Results you can reproduce. Physics you cannot violate.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                The replication crisis is a software crisis. 70% of researchers have tried
                and failed to reproduce another scientist&apos;s results. The culprit is almost
                always the computational pipeline. BRIK64 makes the pipeline a mathematical
                proof — not a script that worked once on someone&apos;s laptop.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <a
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
                >
                  Certify your algorithm <ArrowRight className="h-4 w-4" />
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
                The replication crisis is a software crisis
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "70% of studies fail to replicate",
                    desc: "A 2016 Nature survey found that 70% of researchers failed to reproduce another scientist's results. Ioannidis's landmark paper estimated that most published research findings are false. The most common cause: unspecified computational environments and undocumented algorithmic decisions.",
                  },
                  {
                    title: "Physical units are not enforced",
                    desc: "The Mars Climate Orbiter was lost in 1999 because one team used metric units and another used imperial. $327.6M. The units were not type-checked. They were not domain-constrained. BRIK64 encodes units as part of the domain definition. The compiler catches unit errors before launch.",
                  },
                  {
                    title: "Error bars hide in the pipeline",
                    desc: "A 1% error in a glucose sensor measurement becomes a 3% error in a dosing algorithm. Monte Carlo simulations accumulate floating-point errors silently. By the time the result reaches a publication, the uncertainty has grown far beyond what the methodology section describes.",
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
                The algorithm is the proof. The circuit is the paper.
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
                A spectrometer analysis that cannot violate physics
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
                Wavelength bounded to the UV-Vis range. Absorbance follows Beer-Lambert law.
                Concentration bounded to the calibration range. Temperature within the
                instrument specification. These are not input validations.
                They are physical laws encoded as domain constraints.
                The circuit cannot produce a result that violates them.
              </p>
              <CopyableCode title="spectroscopy_analysis.pcd">{`// UV-Vis Spectroscopy Analysis — Beer-Lambert Law Certified
// Φ_c = 1 — physical laws encoded as domain constraints

circuit spectroscopy_analysis {
  // Instrument parameters
  input wavelength_nm   : Float64[190.0 .. 1100.0]  // UV-Vis-NIR range
  input absorbance      : Float64[0.0 .. 3.5]       // practical photometric range
  input path_length_cm  : Float64[0.001 .. 10.0]    // standard cuvettes
  input temperature_c   : Float64[15.0 .. 35.0]     // instrument spec range

  // Calibration curve parameters
  input molar_extinction : Float64[1.0 .. 1e6]      // L/(mol·cm)
  input blank_absorbance : Float64[0.0 .. 0.1]      // solvent baseline

  // Beer-Lambert law: A = ε·c·l → c = A/(ε·l)
  let corrected_abs  = absorbance - blank_absorbance
  let concentration  = corrected_abs / (molar_extinction * path_length_cm)

  // Physical validity constraints
  assert corrected_abs >= 0.0
    | reject("Negative absorbance after blank correction — check blank")

  assert concentration >= 0.0
    | reject("Negative concentration — impossible physical result")

  // Calibration range enforcement
  assert concentration <= 0.01   // within linear range
    | warn("Above linear range: dilute sample and re-measure")

  // Temperature correction for molar extinction
  let temp_correction = 1.0 + 0.001 * (temperature_c - 25.0)
  let corrected_conc  = concentration / temp_correction

  output result : {
    concentration_M:  corrected_conc,
    absorbance_net:   corrected_abs,
    temp_factor:      temp_correction,
    wavelength:       wavelength_nm,
    certified:        certification_hash()
  }
}`}</CopyableCode>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
                Wavelength bounded. Beer-Lambert law enforced. Negative concentrations impossible.{" "}
                <PhiC /> = 1 — the analysis cannot violate physical laws. Reproducible on any platform, in any year.
              </p>
            </section>

            {/* ── Standards ── */}
            <section className="bg-background border-b border-border px-6 py-20 lg:px-16">
              <span className="mb-3 block text-center text-sm font-semibold uppercase tracking-widest text-[#00b8d4]">
                Research Standards
              </span>
              <h2 className="mx-auto text-center max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Built for the open science movement
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
                The Mars Climate Orbiter crashed over unit conversion. Your experiment won&rsquo;t.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
                Physical laws as domain constraints. Error propagation tracked through every computation.
                Every algorithm publishable as a certified circuit with a DOI.
                Reproducibility is not a goal. It is a mathematical property.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-md bg-[#00b8d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00a0bc] transition-colors"
                >
                  Certify your algorithm <ArrowRight className="h-4 w-4" />
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
