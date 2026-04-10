import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "Shop — BRIK64",
  description:
    "A bounded brand and merchandise surface aligned with the rest of the BRIK64 site.",
};

export default function ShopPage() {
  return <UtilityPageView page={utilityPages.shop} />;
}
