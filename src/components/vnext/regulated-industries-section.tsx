import { PageHeaderVNext, SurfaceCard } from "@/components/vnext/primitives";

type IndustryCard = {
  id: string;
  title: string;
  description: string;
  badges: [string, string, string];
  frameworkLabel: string;
  shortLabel: string;
  panelLabel: string;
  tint: string;
};

const regulatedIndustries: IndustryCard[] = [
  {
    id: "AER-01",
    title: "Aerospace",
    description: "Review-ready logic for flight-critical decisions.",
    badges: ["DO-178C Evidence Support", "Review-Ready", "Traceable Logic"],
    frameworkLabel: "DO-178C",
    shortLabel: "AEROSPC",
    panelLabel: "Flight Review",
    tint: "from-[#0b1a24] to-[#0f2737]",
  },
  {
    id: "MED-02",
    title: "Healthcare",
    description: "Clinical review support for regulated software logic.",
    badges: ["IEC 62304 Aligned", "Audit-Ready Evidence", "Controlled Changes"],
    frameworkLabel: "HIPAA",
    shortLabel: "HEALTH",
    panelLabel: "Clinical Review",
    tint: "from-[#111824] to-[#1b2435]",
  },
  {
    id: "AUT-03",
    title: "Automotive",
    description: "Safety review flows for fallback and control logic.",
    badges: ["ISO 26262 Support", "ASIL-Oriented Review", "Safety Logic Trace"],
    frameworkLabel: "ISO 26262",
    shortLabel: "AUTOMTV",
    panelLabel: "Safety Logic",
    tint: "from-[#161616] to-[#232323]",
  },
  {
    id: "FIN-04",
    title: "Finance",
    description: "Audit-ready controls for approvals and transaction logic.",
    badges: ["PCI DSS Evidence", "SOX-Oriented Controls", "Audit Trail Ready"],
    frameworkLabel: "PCI DSS",
    shortLabel: "FINANCE",
    panelLabel: "Audit Controls",
    tint: "from-[#111825] to-[#1b2435]",
  },
  {
    id: "GOV-05",
    title: "Government",
    description: "Structured review for security-sensitive deployments.",
    badges: ["FedRAMP Readiness", "NIST-Oriented Controls", "Review Support"],
    frameworkLabel: "FedRAMP",
    shortLabel: "GOVRNMT",
    panelLabel: "Security Review",
    tint: "from-[#131923] to-[#1c2532]",
  },
  {
    id: "ENG-06",
    title: "Engineering",
    description: "Verifiable review for assumptions and calculations.",
    badges: ["IEC 61508-Oriented", "Verification Support", "Calculation Trace"],
    frameworkLabel: "IEC 61508",
    shortLabel: "ENGINRG",
    panelLabel: "Calculation Trace",
    tint: "from-[#151515] to-[#20242d]",
  },
];

export function RegulatedIndustriesSection() {
  return (
    <section className="border-t border-border bg-[linear-gradient(180deg,#05080c_0%,#081018_18%,#05080c_100%)]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
        <PageHeaderVNext
          eyebrow="Regulated Environments"
          title="Built for review-critical industry surfaces."
          description="BRIK64 is designed for teams that need traceable logic, evidence-ready workflows, and structured review posture across regulated and high-assurance software environments."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {regulatedIndustries.map((industry) => {
            return (
              <SurfaceCard
                key={industry.id}
                className="group flex h-full flex-col rounded-[26px] border-white/8 bg-[linear-gradient(180deg,rgba(7,12,18,0.96),rgba(10,16,23,0.9))] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent-soft)]/60 hover:shadow-[0_28px_90px_rgba(0,0,0,0.38)]"
              >
                <div className="flex items-start justify-end gap-4">
                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white/42">
                    {industry.id}
                  </div>
                </div>

                <div className="mt-5 flex flex-1 flex-col">
                  <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/58 xl:whitespace-nowrap">
                    {industry.description}
                  </p>
                </div>

                <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_160px] lg:items-end">
                  <div className="flex min-w-0 flex-col gap-2.5">
                    {industry.badges.map((badge) => (
                      <span
                        key={badge}
                        className="inline-flex h-9 w-full min-w-0 items-center justify-center rounded-[12px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-3 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-white/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div className={`flex w-full min-w-0 flex-col items-center justify-center rounded-[16px] border border-white/10 bg-gradient-to-br ${industry.tint} px-3 py-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] lg:max-w-[160px] lg:justify-self-end`}>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                      {industry.frameworkLabel}
                    </span>
                    <span className="mt-2 text-[18px] font-black uppercase tracking-[0.22em] text-white">
                      {industry.shortLabel}
                    </span>
                    <span className="mt-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-white/46">
                      {industry.panelLabel}
                    </span>
                  </div>
                </div>
              </SurfaceCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
