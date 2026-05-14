import { Metadata } from "next";
import { IndustrySolutionTemplate } from "@/components/IndustrySolutionTemplate";
import { aerospaceIndustryData } from "@/lib/industry-v2-data";

export const metadata: Metadata = {
  title: "Aerospace & Defense | BRIK-64",
  description: "Certifiable and deterministic infrastructure for flight systems.",
};

export default function AerospaceIndustryPage() {
  return <IndustrySolutionTemplate data={aerospaceIndustryData} />;
}
