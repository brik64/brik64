import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "Shop — BRIK64",
  description:
    "Brand-support and merchandise scope with explicit launch and routing posture.",
};

export default function ShopPage() {
  return <UtilityPageView page={utilityPages.shop} />;
}
