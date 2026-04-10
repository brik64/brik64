import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "Download — BRIK64",
  description:
    "Install and delivery surfaces for the BRIK64 CLI, SDKs, and platform-facing tooling.",
};

export default function DownloadPage() {
  return <UtilityPageView page={utilityPages.download} />;
}
