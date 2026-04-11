import { RiskPageView } from "@/components/PageArchetypes";
import { industryPages } from "@/lib/risk-page-data";

export const metadata = {
  title: "Banking & Finance — BRIK64 Industries",
  description:
    "How BRIK-64 helps finance teams lift transaction, ledger, and approval logic into audit-ready artifacts before modernization or execution.",
};

export default function FinanceIndustryPage() {
  return <RiskPageView page={industryPages.finance} />;
}
