import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "About — BRIK64",
  description:
    "Company thesis, proof posture, and the bounded public story behind BRIK64.",
};

export default function AboutPage() {
  return <UtilityPageView page={utilityPages.about} />;
}
