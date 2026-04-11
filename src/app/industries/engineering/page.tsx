import { RiskPageView } from "@/components/PageArchetypes";
import { industryPages } from "@/lib/risk-page-data";

export const metadata = {
  title: "Engineering — BRIK64 Industries",
  description:
    "How BRIK-64 helps engineering software teams preserve assumptions, bounded transforms, and reusable computational dossiers.",
};

export default function EngineeringIndustryPage() {
  return <RiskPageView page={industryPages.engineering} />;
}
