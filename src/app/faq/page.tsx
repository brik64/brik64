import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "FAQ — BRIK64",
  description:
    "Frequently asked technical and operational questions with explicit next-step routes.",
};

export default function FAQPage() {
  return <UtilityPageView page={utilityPages.faq} />;
}
