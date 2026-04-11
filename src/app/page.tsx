import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { ProblemSection } from "@/components/ProblemSection";
import { PCDSection } from "@/components/PCDSection";
import { PlatformSection } from "@/components/PlatformSection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { AINativeSection } from "@/components/AINativeSection";
import { HomeClaimBoundariesSection } from "@/components/HomeClaimBoundariesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
          <TrustedBySection />
          <div>
            <ProblemSection />
            <PCDSection />
            <WorkflowSection />
            <PlatformSection />
            <AINativeSection />
            <HomeClaimBoundariesSection />
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
