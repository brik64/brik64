import { RiskPageView } from "@/components/PageArchetypes";
import { industryPages } from "@/lib/risk-page-data";

export const metadata = {
  title: "Engineering — BRIK64 Industries",
  description:
    "Engineering page for explicit assumptions, bounded calculations, and reusable verification surfaces.",
};

export default function EngineeringIndustryPage() {
  return <RiskPageView page={industryPages.engineering} />;
}
