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

function CircuitGridBg() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Main grid pattern */}
          <pattern id="grid-sm" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="60" y1="0" x2="60" y2="60" stroke="#00b8d4" strokeWidth="0.4" opacity="0.06" />
            <line x1="0" y1="60" x2="60" y2="60" stroke="#00b8d4" strokeWidth="0.4" opacity="0.06" />
          </pattern>
          {/* Large grid overlay */}
          <pattern id="grid-lg" width="240" height="240" patternUnits="userSpaceOnUse">
            <line x1="240" y1="0" x2="240" y2="240" stroke="#00b8d4" strokeWidth="0.6" opacity="0.08" />
            <line x1="0" y1="240" x2="240" y2="240" stroke="#00b8d4" strokeWidth="0.6" opacity="0.08" />
          </pattern>
          {/* Crosses at major intersections */}
          <pattern id="crosses" width="240" height="240" patternUnits="userSpaceOnUse">
            <line x1="237" y1="240" x2="243" y2="240" stroke="#00b8d4" strokeWidth="0.8" opacity="0.12" />
            <line x1="240" y1="237" x2="240" y2="243" stroke="#00b8d4" strokeWidth="0.8" opacity="0.12" />
          </pattern>
          {/* Radial fade — visible in center-top, fades at edges */}
          <radialGradient id="grid-fade" cx="50%" cy="0%" r="80%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="60%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="grid-mask">
            <rect width="100%" height="100%" fill="url(#grid-fade)" />
          </mask>
        </defs>

        <g mask="url(#grid-mask)">
          {/* Small grid */}
          <rect width="100%" height="100%" fill="url(#grid-sm)" />
          {/* Large grid */}
          <rect width="100%" height="100%" fill="url(#grid-lg)" />
          {/* Crosses */}
          <rect width="100%" height="100%" fill="url(#crosses)" />

          {/* Circuit traces — horizontal and vertical paths with 90° turns */}
          {[
            "M 0,180 L 120,180 L 120,60 L 300,60",
            "M 480,0 L 480,120 L 360,120 L 360,300 L 480,300",
            "M 720,180 L 600,180 L 600,420 L 720,420",
            "M 960,60 L 840,60 L 840,180 L 720,180",
            "M 0,540 L 180,540 L 180,420 L 360,420",
            "M 1200,300 L 1080,300 L 1080,420 L 960,420 L 960,540",
            "M 240,720 L 240,600 L 420,600 L 420,480",
            "M 600,720 L 600,660 L 780,660 L 780,540",
          ].map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="#00b8d4"
              strokeWidth="0.5"
              opacity="0.07"
            />
          ))}

          {/* Solder pads — small filled squares at trace junctions */}
          {[
            [120, 180], [120, 60], [300, 60], [480, 120], [360, 120],
            [360, 300], [600, 180], [600, 420], [840, 60], [840, 180],
            [180, 540], [180, 420], [360, 420], [1080, 300], [1080, 420],
            [960, 420], [240, 600], [420, 600], [600, 660], [780, 660],
          ].map(([x, y], i) => (
            <rect
              key={`pad-${i}`}
              x={x - 2}
              y={y - 2}
              width="4"
              height="4"
              fill="#00b8d4"
              opacity="0.08"
            />
          ))}

          {/* Via dots — small circles at some intersections */}
          {[
            [60, 120], [180, 240], [300, 360], [420, 120], [540, 300],
            [660, 480], [780, 120], [900, 360], [1020, 240], [1140, 480],
            [120, 480], [360, 600], [540, 540], [720, 300], [960, 180],
          ].map(([x, y], i) => (
            <circle
              key={`via-${i}`}
              cx={x}
              cy={y}
              r="1.5"
              fill="#00b8d4"
              opacity="0.06"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <CircuitGridBg />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <TrustedBySection />
        <div className="border-border mx-auto max-w-7xl border-x bg-background/80 backdrop-blur-[1px]">
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
      <Footer />
    </>
  );
}
