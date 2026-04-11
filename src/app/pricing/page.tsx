import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "Pricing — BRIK64",
  description:
    "Commercial entrypoints for developer, team, and enterprise adoption paths.",
};

export default function PricingPage() {
  return <UtilityPageView page={utilityPages.pricing} />;
}
