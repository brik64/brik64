import { RiskPageView } from "@/components/PageArchetypes";
import { useCasePages } from "@/lib/risk-page-data";

export const metadata = {
  title: "Formal Verification — BRIK64 Use Cases",
  description:
    "Use-case page connecting formal verification ideas to a bounded product workflow.",
};

export default function FormalVerificationUseCasePage() {
  return <RiskPageView page={useCasePages.formalVerification} />;
}
