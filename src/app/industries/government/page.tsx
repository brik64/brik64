import { Metadata } from "next";
import { IndustrySolutionTemplate } from "@/components/IndustrySolutionTemplate";
import { governmentIndustryData } from "@/lib/industry-v2-data";

export const metadata: Metadata = {
  title: "Government & Defense | BRIK-64",
  description: "Zero-trust architecture and cryptographic assurance for public sector.",
};

export default function GovernmentIndustryPage() {
  return <IndustrySolutionTemplate data={governmentIndustryData} />;
}
