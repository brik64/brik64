import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "Contact — BRIK64",
  description:
    "Operational routing for support, enterprise evaluation, and product questions.",
};

export default function ContactPage() {
  return <UtilityPageView page={utilityPages.contact} />;
}
