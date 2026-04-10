import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "Playground — BRIK64",
  description:
    "A bounded technical sandbox for command flows, examples, and experimentation.",
};

export default function PlaygroundPage() {
  return <UtilityPageView page={utilityPages.playground} />;
}
