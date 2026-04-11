import { RiskPageView } from "@/components/PageArchetypes";
import { industryPages } from "@/lib/risk-page-data";

export const metadata = {
  title: "Healthcare — BRIK64 Industries",
  description:
    "How BRIK-64 helps clinical and device-workflow teams review dose logic, escalation paths, and emitted engineering evidence.",
};

export default function HealthcareIndustryPage() {
  return <RiskPageView page={industryPages.healthcare} />;
}
