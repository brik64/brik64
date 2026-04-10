import { RiskPageView } from "@/components/PageArchetypes";
import { industryPages } from "@/lib/risk-page-data";

export const metadata = {
  title: "Automotive — BRIK64 Industries",
  description:
    "Automotive-facing page for bounded control logic, fallback posture, and reviewable evidence.",
};

export default function AutomotiveIndustryPage() {
  return <RiskPageView page={industryPages.automotive} />;
}
