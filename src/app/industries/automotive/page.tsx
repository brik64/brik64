import { RiskPageView } from "@/components/PageArchetypes";
import { industryPages } from "@/lib/risk-page-data";

export const metadata = {
  title: "Automotive — BRIK64 Industries",
  description:
    "How BRIK-64 helps vehicle platform teams review actuation thresholds, sensor assumptions, and fallback logic before wider safety workflows.",
};

export default function AutomotiveIndustryPage() {
  return <RiskPageView page={industryPages.automotive} />;
}
