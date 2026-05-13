import { ComplianceMappingSurface } from "@/components/PageArchetypes";

const complianceItems = [
  {
    name: "EU AI Act",
    description: "Prepared for risk-tier review with traceable PCD scope, logic boundaries, and evidence metadata.",
    logoSrc: "/compliance-logos/eu-ai-act.png",
    logoAlt: "EU AI Act logo",
    fallback: "EU",
    logoTone: "light" as const,
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_EU_Artificial_Intelligence_Act_Main_Logo.png",
  },
  {
    name: "NIST AI RMF",
    description: "Prepared for Govern, Map, Measure, and Manage review with structured software evidence.",
    logoSrc: "/compliance-logos/nist.svg",
    logoAlt: "National Institute of Standards and Technology logo",
    fallback: "NIST",
    logoTone: "light" as const,
    sourceUrl: "https://www.nist.gov/itl/ai-risk-management-framework",
  },
  {
    name: "HIPAA",
    description: "Prepared to isolate protected-data workflows, access boundaries, and auditable logic paths.",
    logoSrc: "/compliance-logos/hipaa-logo.png",
    logoAlt: "HIPAA logo",
    fallback: "HIPAA",
    logoTone: "brand" as const,
    logoSize: "badge" as const,
    sourceUrl: "https://seeklogo.com/free-vector-logos/hipaa",
  },
  {
    name: "SOC 2",
    description: "Prepared for control review with hash-locked artifacts, change evidence, and process traceability.",
    logoSrc: "/compliance-logos/soc-ii-compliant.png",
    logoAlt: "SOC 2 logo",
    fallback: "SOC",
    logoTone: "brand" as const,
    logoSize: "badge" as const,
    sourceUrl: "https://www.aicpa-cima.com/resources/download/soc-for-service-organizations-logo-guidelines-for-service-organization",
  },
  {
    name: "GDPR",
    description: "Prepared to map personal-data handling, processing boundaries, and reviewable decision logic.",
    logoSrc: "/compliance-logos/gdpr-logo.png",
    logoAlt: "GDPR EU lock emblem",
    fallback: "GDPR",
    logoSize: "badge" as const,
    sourceUrl: "https://commons.wikimedia.org/wiki/File:GDPR_p1.svg",
  },
  {
    name: "ISO 42001",
    description: "Prepared for AI management-system review with reusable PCD evidence and governance records.",
    logoSrc: "/compliance-logos/iso-42001-logo.png",
    logoAlt: "ISO 42001 badge",
    fallback: "ISO",
    logoTone: "brand" as const,
    logoSize: "badge" as const,
    sourceUrl: "https://www.figma.com/community/file/1458082992679071182/iso-security-logos-and-badges",
  },
];

export function RegulatedIndustriesSection() {
  return (
    <section className="border-t border-border bg-[linear-gradient(180deg,#05080c_0%,#081018_18%,#05080c_100%)]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
        <ComplianceMappingSurface
          eyebrow="Compliance references"
          title="PCD evidence packets are prepared for governance review."
          description="Generated PCDs carry logic boundaries, hashes, and review metadata for governance mapping. They support audit preparation; external certification remains with the relevant authority or auditor."
          items={complianceItems}
          statusLabel="review mapping"
          statusTone="neutral"
        />
      </div>
    </section>
  );
}
