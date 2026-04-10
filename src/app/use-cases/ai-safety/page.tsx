import { RiskPageView } from "@/components/PageArchetypes";
import { useCasePages } from "@/lib/risk-page-data";

export const metadata = {
  title: "AI Safety — BRIK64 Use Cases",
  description:
    "Policy-circuit workflow page for AI safety, pre-execution checks, and structured diagnostics.",
};

export default function AISafetyUseCasePage() {
  return <RiskPageView page={useCasePages.aiSafety} />;
}
