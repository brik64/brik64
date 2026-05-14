import { Metadata } from "next";
import { IndustrySolutionTemplate } from "@/components/IndustrySolutionTemplate";
import { healthcareIndustryData } from "@/lib/industry-v2-data";

export const metadata: Metadata = {
  title: "Healthcare & Medical | BRIK-64",
  description: "Regulatory compliance and software validation for medical devices.",
};

export default function HealthcareIndustryPage() {
  return <IndustrySolutionTemplate data={healthcareIndustryData} />;
}
