import { RiskPageView } from "@/components/PageArchetypes";
import { industryPages } from "@/lib/risk-page-data";

export const metadata = {
  title: "Government — BRIK64 Industries",
  description:
    "How BRIK-64 helps public-sector teams turn eligibility and routing rules into auditable software artifacts and bounded processing paths.",
};

export default function GovernmentIndustryPage() {
  return <RiskPageView page={industryPages.government} />;
}
