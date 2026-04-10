import { RiskPageView } from "@/components/PageArchetypes";
import { industryPages } from "@/lib/risk-page-data";

export const metadata = {
  title: "Healthcare — BRIK64 Industries",
  description:
    "Healthcare-facing page for bounded clinical logic, escalation paths, and readable review evidence.",
};

export default function HealthcareIndustryPage() {
  return <RiskPageView page={industryPages.healthcare} />;
}
