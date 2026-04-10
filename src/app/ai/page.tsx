import { RiskPageView } from "@/components/PageArchetypes";
import { thesisPages } from "@/lib/risk-page-data";

export const metadata = {
  title: "AI — BRIK64",
  description:
    "Applied AI thesis page focused on external verification, bounded generation, and operator-readable proof loops.",
};

export default function AIPage() {
  return <RiskPageView page={thesisPages.ai} />;
}
