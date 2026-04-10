import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "Legal — BRIK64",
  description:
    "Policy, privacy, and public-boundary information for the BRIK64 website.",
};

export default function LegalPage() {
  return <UtilityPageView page={utilityPages.legal} />;
}
