import { RiskPageView } from "@/components/PageArchetypes";
import { thesisPages } from "@/lib/risk-page-data";

export const metadata = {
  title: "Blockchain — BRIK64",
  description:
    "Applied blockchain thesis page focused on bounded contract logic and reviewable state transitions.",
};

export default function BlockchainPage() {
  return <RiskPageView page={thesisPages.blockchain} />;
}
