import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "Enterprise — BRIK64",
  description:
    "Enterprise operating model for identity controls, audit traceability, and bounded verification workflows.",
};

export default function EnterprisePage() {
  return <UtilityPageView page={utilityPages.enterprise} />;
}
