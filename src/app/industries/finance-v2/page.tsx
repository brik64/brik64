import { Metadata } from "next";
import { IndustrySolutionTemplate } from "@/components/IndustrySolutionTemplate";
import { financeIndustryData } from "@/lib/industry-v2-data";

export const metadata: Metadata = {
  title: "Financial Services Infrastructure | BRIK-64",
  description: "Secure, verifiable, high-speed financial infrastructure with cryptographic determinism.",
};

export default function FinanceIndustryPageV2() {
  return <IndustrySolutionTemplate data={financeIndustryData} />;
}
