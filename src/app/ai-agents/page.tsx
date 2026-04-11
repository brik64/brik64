import { UtilityPageView } from "@/components/PageArchetypes";
import { utilityPages } from "@/lib/utility-page-data";

export const metadata = {
  title: "AI Agents — BRIK64",
  description:
    "Bounded agent workflow for CTO and VP Engineering: candidate generation, external checks, and controlled publication.",
};

export default function AIAgentsPage() {
  return <UtilityPageView page={utilityPages.aiAgents} />;
}
