import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "Investors — BRIK64",
  description:
    "A bounded investor-facing thesis page anchored to the public product and platform story.",
};

export default function InvestorsPage() {
  return <UtilityPageView page={utilityPages.investors} />;
}
