import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "Investors — BRIK64",
  description:
    "Category thesis and architecture thesis for investor readers, bounded by repo-backed evidence.",
};

export default function InvestorsPage() {
  return <UtilityPageView page={utilityPages.investors} />;
}
