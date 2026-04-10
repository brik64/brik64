import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "Docs — BRIK64",
  description:
    "Bridge page from the public site into the BRIK64 documentation system.",
};

export default function DocsPage() {
  return <UtilityPageView page={utilityPages.docs} />;
}
