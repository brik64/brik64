import { RiskPageView } from "@/components/PageArchetypes";
import { useCasePages } from "@/lib/risk-page-data";

export const metadata = {
  title: "COBOL Migration — BRIK64 Use Cases",
  description:
    "Use-case page for lifting legacy COBOL logic into bounded, inspectable migration artifacts.",
};

export default function COBOLMigrationUseCasePage() {
  return <RiskPageView page={useCasePages.cobolMigration} />;
}
