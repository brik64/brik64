import { EvidenceDossierArtifact } from "@/components/HomeProofArtifacts";
import { ShieldCheck } from "lucide-react";
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
    <section className="border-border border-t bg-background px-4 py-14 sm:px-6 md:py-18 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[11] · COMPLIANCE EVIDENCE"
          title="Compliance evidence. At compile time."
          description="Generate auditor-ready evidence directly from verified code, with scope limitations made explicit."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((std) => (
            <div
              key={std.name}
              className="group relative rounded-3xl border border-border/80 bg-card p-4 shadow-sm transition-colors hover:border-teal/40"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-teal" />
                    <span className="text-sm font-medium text-foreground">{std.name}</span>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground">{std.desc}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground/60">{std.article}</p>
                </div>
                <span className="rounded-full bg-teal/10 px-2.5 py-0.5 text-xs font-medium text-teal">
                  {std.coverage}%
                </span>
              </div>

              <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-teal transition-all"
                  style={{ width: `${std.coverage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <EvidenceDossierArtifact />
        </div>

        <p className="mt-5 text-xs text-muted-foreground/60">
          &ldquo;SOC2 Processing Integrity evidence&rdquo; &mdash; not &ldquo;SOC2 compliant.&rdquo;
          Every report includes what we cover and what requires separate evidence.
        </p>
      </div>
    </section>
  );
}
