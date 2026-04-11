import { RiskPageView } from "@/components/PageArchetypes";
import { industryPages } from "@/lib/risk-page-data";

export const metadata = {
  title: "AI Industry — BRIK64",
  description:
    "How BRIK-64 inserts policy circuits, generated-code review, and operator diagnostics between AI output and execution.",
};

export default function AIIndustryPage() {
  return <RiskPageView page={industryPages.ai} />;
}
