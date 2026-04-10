import { RiskPageView } from "@/components/PageArchetypes";
import { useCasePages } from "@/lib/risk-page-data";

export const metadata = {
  title: "Universal Transpilation — BRIK64 Use Cases",
  description:
    "Use-case page for lift-check-emit workflows built around bounded intermediate blueprints.",
};

export default function UniversalTranspilationUseCasePage() {
  return <RiskPageView page={useCasePages.universalTranspilation} />;
}
