import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "Login — BRIK64",
  description:
    "A minimal, on-system access page for the BRIK64 platform surfaces.",
};

export default function LoginPage() {
  return <UtilityPageView page={utilityPages.login} />;
}
