import { EvidenceDossierArtifact } from "@/components/HomeProofArtifacts";
import { HomeSectionHeader } from "@/components/PageArtifacts";

const standards = [
  { name: "MiFID II", coverage: 40, desc: "Algorithmic trading controls", article: "Art. 17" },
  { name: "SOC2", coverage: 30, desc: "Processing integrity", article: "PI1.x" },
  { name: "SOX", coverage: 25, desc: "Internal controls", article: "Sec 404" },
  { name: "PCI-DSS", coverage: 15, desc: "Secure development", article: "Req 6, 10" },
  { name: "DORA", coverage: 15, desc: "ICT risk prevention", article: "Art. 6, 9" },
  { name: "Basel III", coverage: 10, desc: "Verified calculations", article: "RWA, VaR" },
];

export function ComplianceSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[11] · COMPLIANCE EVIDENCE"
          title="Compliance evidence, at compile time."
          description="Generate auditor-ready evidence directly from verified code, with scope limitations made explicit."
        />

        <div className="mt-8">
          <EvidenceDossierArtifact />
        </div>

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-border/80 bg-background/90 shadow-sm">
          <div className="border-b border-border/70 px-6 py-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Evidence mapping</p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
              Scope and article mapping stay explicit inside the same evidence surface.
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The dossier is the protagonist. Standards and coverage notes are supporting rows so the reader sees bounded evidence, not a fake blanket-compliance matrix.
            </p>
          </div>
          <div className="divide-y divide-border/70">
            {standards.map((std) => (
              <div key={std.name} className="grid gap-3 px-6 py-4 md:grid-cols-[140px_1fr_auto] md:items-start">
                <div>
                  <p className="text-sm font-semibold text-foreground">{std.name}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal">{std.coverage}% mapped</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{std.desc}</p>
                <p className="text-xs font-medium text-muted-foreground md:text-right">{std.article}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-border/70 bg-teal/[0.03] px-6 py-4 text-sm leading-relaxed text-muted-foreground">
            &ldquo;SOC2 Processing Integrity evidence&rdquo; means scoped evidence packets, not a blanket &ldquo;SOC2 compliant&rdquo; claim. Every report states what is covered and what requires separate evidence.
          </div>
        </div>
      </div>
    </section>
  );
}
