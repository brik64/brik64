import { Metadata } from "next";
import { IndustrySolutionTemplate } from "@/components/IndustrySolutionTemplate";
import { automotiveIndustryData } from "@/lib/industry-v2-data";

export const metadata: Metadata = {
  title: "Automotive & Mobility | BRIK-64",
  description: "Deterministic runtime validation for connected and autonomous vehicles.",
};

export default function AutomotiveIndustryPage() {
  return <IndustrySolutionTemplate data={automotiveIndustryData} />;
}
