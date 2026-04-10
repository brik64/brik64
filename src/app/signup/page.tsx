import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "Signup — BRIK64",
  description:
    "A minimal, on-system signup page for entering the BRIK64 platform flow.",
};

export default function SignupPage() {
  return <UtilityPageView page={utilityPages.signup} />;
}
