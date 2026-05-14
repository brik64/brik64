import { Metadata } from "next";
import { IndustrySolutionTemplate } from "@/components/IndustrySolutionTemplate";
import { aiIndustryData } from "@/lib/industry-v2-data";

export const metadata: Metadata = {
  title: "AI Systems Infrastructure | BRIK-64",
  description: "Secure boundaries and deterministic operation for AI and autonomous systems.",
};

export default function AiIndustryPage() {
  return <IndustrySolutionTemplate data={aiIndustryData} />;
}
