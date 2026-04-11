import { RiskPageView } from "@/components/PageArchetypes";
import { industryPages } from "@/lib/risk-page-data";

export const metadata = {
  title: "Aerospace — BRIK64 Industries",
  description:
    "How BRIK-64 helps avionics and control teams review envelope logic, degraded modes, and certification-support artifacts before the wider process absorbs the software.",
};

export default function AerospaceIndustryPage() {
  return <RiskPageView page={industryPages.aerospace} />;
}
