import { RiskPageView } from "@/components/PageArchetypes";
import { thesisPages } from "@/lib/risk-page-data";

export const metadata = {
  title: "Safety-Critical — BRIK64",
  description:
    "Applied safety-critical thesis page focused on bounded computation and readable assurance paths.",
};

export default function SafetyCriticalPage() {
  return <RiskPageView page={thesisPages.safetyCritical} />;
}
