import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "FAQ — BRIK64",
  description:
    "Structured answers to common questions about BRIK64, PCD, and the platform path.",
};

export default function FAQPage() {
  return <UtilityPageView page={utilityPages.faq} />;
}
