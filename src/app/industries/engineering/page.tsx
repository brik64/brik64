import { Metadata } from "next";
import { IndustrySolutionTemplate } from "@/components/IndustrySolutionTemplate";
import { engineeringIndustryData } from "@/lib/industry-v2-data";

export const metadata: Metadata = {
  title: "Critical Engineering | BRIK-64",
  description: "Secure operational technology and SCADA environment validation.",
};

export default function EngineeringIndustryPage() {
  return <IndustrySolutionTemplate data={engineeringIndustryData} />;
}
