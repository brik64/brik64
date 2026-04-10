import { CTASection } from "@/components/CTASection";
import { ComplianceSection } from "@/components/ComplianceSection";
import { EditorsSection } from "@/components/EditorsSection";
import { EnterpriseSection } from "@/components/EnterpriseSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { Navbar } from "@/components/Navbar";
import { PCDSection } from "@/components/PCDSection";
import { PlatformSection } from "@/components/PlatformSection";
import { ProblemSection } from "@/components/ProblemSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { VerticalsSection } from "@/components/VerticalsSection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { WorldModelsSection } from "@/components/WorldModelsSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <TrustedBySection />
        <ProblemSection />
        <PCDSection />
        <PlatformSection />
        <WorldModelsSection />
        <WorkflowSection />
        <IntegrationsSection />
        <EditorsSection />
        <EnterpriseSection />
        <ComplianceSection />
        <VerticalsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
