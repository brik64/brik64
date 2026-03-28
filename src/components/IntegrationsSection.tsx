import { PhiC } from "@/components/PhiC";

const flowSteps = [
  { label: "GitHub Repo", accent: false },
  { label: "brikc lift", accent: true },
  { label: "PCD Blueprint", accent: true },
  { label: "brikc build", accent: true },
  { label: "Any Language", accent: false },
];

const workflowSteps = [
  {
    number: "1",
    title: "Push to GitHub",
    description: "Your team pushes code as usual. No workflow changes required.",
  },
  {
    number: "2",
    title: "Lift to PCD",
    description:
      "BRIK-64 automatically lifts your code into a PCD blueprint — a language-agnostic, verified representation.",
  },
  {
    number: "3",
    title: "Certify",
    description: null,
  },
  {
    number: "4",
    title: "Build to any target",
    description:
      "Emit verified code to Rust, JavaScript, Python, or any supported target from the same blueprint.",
  },
];

export function IntegrationsSection() {
  return (
    <section className="border-border border-t px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-10 text-xs font-medium tracking-[2px] text-muted-foreground md:mb-14">
          [09] · INTEGRATIONS
        </p>

        <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
          PCD is where your logic lives.
          <br />
          GitHub is where your code lives.
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          <span className="text-teal font-medium">BRIK-64</span> connects both.
        </p>

        {/* Flow diagram */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {flowSteps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2 md:gap-3">
              <div
                className={`border px-4 py-2.5 text-xs font-medium ${
                  step.accent
                    ? "border-teal/30 bg-teal/10 text-teal"
                    : "border-border bg-background text-foreground"
                }`}
              >
                {step.label}
              </div>
              {i < flowSteps.length - 1 && (
                <span className="text-muted-foreground">→</span>
              )}
            </div>
          ))}
        </div>

        {/* The Full Workflow */}
        <div className="mt-16">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            The Full Workflow
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {workflowSteps.map((step) => (
              <div
                key={step.number}
                className="group flex gap-5 border border-border bg-background p-5 transition-colors hover:border-teal/30"
              >
                <span className="text-2xl font-light tabular-nums text-muted-foreground/40 transition-colors group-hover:text-teal/60">
                  {step.number}
                </span>
                <div>
                  <p className="text-sm font-medium">{step.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {step.description ?? (
                      <>
                        TCE verifies every circuit. <PhiC /> = 1, and your PR
                        gets a certification comment automatically.
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
