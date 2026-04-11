import { RiskPageView } from "@/components/PageArchetypes";
import { industryPages } from "@/lib/risk-page-data";

export const metadata = {
  title: "Science — BRIK64 Industries",
  description:
    "How BRIK-64 helps research software teams publish reproducible computation with declared assumptions, repeatable transforms, and result lineage.",
};

export default function ScienceIndustryPage() {
  return <RiskPageView page={industryPages.science} />;
}
