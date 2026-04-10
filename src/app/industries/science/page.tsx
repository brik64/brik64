import { RiskPageView } from "@/components/PageArchetypes";
import { industryPages } from "@/lib/risk-page-data";

export const metadata = {
  title: "Science — BRIK64 Industries",
  description:
    "Scientific-computing page for explicit assumptions, repeatable transforms, and traceable results.",
};

export default function ScienceIndustryPage() {
  return <RiskPageView page={industryPages.science} />;
}
