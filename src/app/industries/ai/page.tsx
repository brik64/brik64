import { RiskPageView } from "@/components/PageArchetypes";
import { industryPages } from "@/lib/risk-page-data";

export const metadata = {
  title: "AI Industry — BRIK64",
  description:
    "Policy-circuit and external-verification framing for AI systems, agents, and generated code.",
};

export default function AIIndustryPage() {
  return <RiskPageView page={industryPages.ai} />;
}
