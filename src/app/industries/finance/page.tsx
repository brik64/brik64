import { RiskPageView } from "@/components/PageArchetypes";
import { industryPages } from "@/lib/risk-page-data";

export const metadata = {
  title: "Banking & Finance — BRIK64 Industries",
  description:
    "Bounded transaction logic, explicit review paths, and audit-oriented evidence surfaces for finance software.",
};

export default function FinanceIndustryPage() {
  return <RiskPageView page={industryPages.finance} />;
}
