import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { ProblemSection } from "@/components/ProblemSection";
import { PCDSection } from "@/components/PCDSection";
import { LanguagesSection } from "@/components/LanguagesSection";
import { PlatformSection } from "@/components/PlatformSection";
import { WorldModelsSection } from "@/components/WorldModelsSection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { EditorsSection } from "@/components/EditorsSection";
import { EnterpriseSection } from "@/components/EnterpriseSection";
import { AINativeSection } from "@/components/AINativeSection";
import { ComplianceSection } from "@/components/ComplianceSection";
import { VerticalsSection } from "@/components/VerticalsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { CircuitGrid } from "@/components/CircuitGrid";

export default function Home() {
  return (
    <>
      <CircuitGrid />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        <TrustedBySection />
        <div>
          <ProblemSection />
          <PCDSection />
          <LanguagesSection />
          <PlatformSection />
          <WorldModelsSection />
          <WorkflowSection />
          <IntegrationsSection />
          <EditorsSection />
          <AINativeSection />
          <ComplianceSection />
          <VerticalsSection />
          <EnterpriseSection />
        </div>
        <CTASection />
        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
