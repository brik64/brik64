import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "Changelog — BRIK64",
  description:
    "Release notes and update rails connected back to the public BRIK64 product surfaces.",
};

export default function ChangelogPage() {
  return <UtilityPageView page={utilityPages.changelog} />;
}
