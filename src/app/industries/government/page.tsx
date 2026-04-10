import { RiskPageView } from "@/components/PageArchetypes";
import { industryPages } from "@/lib/risk-page-data";

export const metadata = {
  title: "Government — BRIK64 Industries",
  description:
    "Public-sector page for deterministic rules, bounded processing, and reviewable decision logic.",
};

export default function GovernmentIndustryPage() {
  return <RiskPageView page={industryPages.government} />;
}
