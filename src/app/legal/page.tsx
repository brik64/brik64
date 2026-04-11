import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "Legal — BRIK64",
  description:
    "Public policy, terms, and privacy boundaries with technical claim discipline.",
};

export default function LegalPage() {
  return <UtilityPageView page={utilityPages.legal} />;
}
