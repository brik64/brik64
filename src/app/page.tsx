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
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { CircuitGrid } from "@/components/CircuitGrid";

export default function Home() {
  return (
    <>
      <CircuitGrid />
      <Navbar />
      <main className="bg-background relative z-10">
        <HeroSection />
        <TrustedBySection />
        <div className="border-border mx-auto max-w-7xl border-x">
          <ProblemSection />
          <PCDSection />
          <LanguagesSection />
          <PlatformSection />
          <WorldModelsSection />
          <WorkflowSection />
          <IntegrationsSection />
          <EditorsSection />
          <EnterpriseSection />
          <AINativeSection />
        </div>
        <CTASection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
