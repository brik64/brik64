import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "Contact — BRIK64",
  description:
    "Route general, enterprise, and support requests through clear service channels.",
};

export default function ContactPage() {
  return <UtilityPageView page={utilityPages.contact} />;
}
