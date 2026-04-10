import { RiskPageView } from "@/components/PageArchetypes";
import { industryPages } from "@/lib/risk-page-data";

export const metadata = {
  title: "Aerospace — BRIK64 Industries",
  description:
    "Aerospace-facing safety case page for explicit envelope constraints and reviewable software evidence.",
};

export default function AerospaceIndustryPage() {
  return <RiskPageView page={industryPages.aerospace} />;
}
