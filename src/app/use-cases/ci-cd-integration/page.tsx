import { RiskPageView } from "@/components/PageArchetypes";
import { useCasePages } from "@/lib/risk-page-data";

export const metadata = {
  title: "CI/CD Integration — BRIK64 Use Cases",
  description:
    "Use-case page for inserting explicit verification and evidence emission into delivery pipelines.",
};

export default function CICDIntegrationUseCasePage() {
  return <RiskPageView page={useCasePages.ciCdIntegration} />;
}
