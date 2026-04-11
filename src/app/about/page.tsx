import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "About — BRIK64",
  description:
    "Company overview for CTO and VP Engineering readers: formal language, compiler path, and platform workflows.",
};

export default function AboutPage() {
  return <UtilityPageView page={utilityPages.about} />;
}
