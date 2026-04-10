import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "Pricing — BRIK64",
  description:
    "Scoped packaging routes for developers, teams, and enterprise buyers.",
};

export default function PricingPage() {
  return <UtilityPageView page={utilityPages.pricing} />;
}
