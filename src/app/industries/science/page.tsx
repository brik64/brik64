import { Metadata } from "next";
import { IndustrySolutionTemplate } from "@/components/IndustrySolutionTemplate";
import { scienceIndustryData } from "@/lib/industry-v2-data";

export const metadata: Metadata = {
  title: "Scientific & Research | BRIK-64",
  description: "Deterministic validation for experimental environments and instrumentation.",
};

export default function ScienceIndustryPage() {
  return <IndustrySolutionTemplate data={scienceIndustryData} />;
}
