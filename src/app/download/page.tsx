import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "Download — BRIK64",
  description:
    "Install and delivery overview for CLI, SDKs, and platform handoff routes.",
};

export default function DownloadPage() {
  return <UtilityPageView page={utilityPages.download} />;
}
