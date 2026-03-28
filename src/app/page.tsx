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

const circuitPaths = [
  "M 0,180 L 120,180 L 120,60 L 300,60",
  "M 480,0 L 480,120 L 360,120 L 360,300 L 480,300",
  "M 720,180 L 600,180 L 600,420 L 720,420",
  "M 960,60 L 840,60 L 840,180 L 720,180",
  "M 0,540 L 180,540 L 180,420 L 360,420",
  "M 1200,300 L 1080,300 L 1080,420 L 960,420 L 960,540",
  "M 240,720 L 240,600 L 420,600 L 420,480",
  "M 600,720 L 600,660 L 780,660 L 780,540",
  "M 0,360 L 60,360 L 60,240 L 180,240 L 180,120",
  "M 1440,480 L 1200,480 L 1200,600 L 1080,600",
  "M 840,720 L 840,540 L 960,540 L 960,360 L 1080,360",
  "M 300,0 L 300,120 L 180,120 L 180,300",
];

const pads = [
  [120,180],[120,60],[300,60],[480,120],[360,120],[360,300],
  [600,180],[600,420],[840,60],[840,180],[180,540],[180,420],
  [360,420],[1080,300],[1080,420],[960,420],[240,600],[420,600],
  [600,660],[780,660],[60,360],[60,240],[180,240],[180,120],
  [1200,480],[1200,600],[840,540],[960,540],[960,360],[1080,360],
  [300,120],[180,300],
];

const vias = [
  [60,120],[180,240],[300,360],[420,120],[540,300],
  [660,480],[780,120],[900,360],[1020,240],[1140,480],
  [120,480],[360,600],[540,540],[720,300],[960,180],
  [1320,360],[1080,120],[480,600],[840,420],[660,240],
];

function CircuitGridBg() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <style>{`
        @keyframes energy-flow {
          0% { offset-distance: 0%; opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .energy-dot {
          offset-rotate: 0deg;
          animation: energy-flow var(--dur) linear var(--delay) infinite;
        }
      `}</style>
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid-sm" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="60" y1="0" x2="60" y2="60" stroke="#00b8d4" strokeWidth="0.5" opacity="0.12" />
            <line x1="0" y1="60" x2="60" y2="60" stroke="#00b8d4" strokeWidth="0.5" opacity="0.12" />
          </pattern>
          <pattern id="grid-lg" width="240" height="240" patternUnits="userSpaceOnUse">
            <line x1="240" y1="0" x2="240" y2="240" stroke="#00b8d4" strokeWidth="0.8" opacity="0.18" />
            <line x1="0" y1="240" x2="240" y2="240" stroke="#00b8d4" strokeWidth="0.8" opacity="0.18" />
          </pattern>
          <pattern id="crosses" width="240" height="240" patternUnits="userSpaceOnUse">
            <line x1="234" y1="240" x2="246" y2="240" stroke="#00b8d4" strokeWidth="1.2" opacity="0.22" />
            <line x1="240" y1="234" x2="240" y2="246" stroke="#00b8d4" strokeWidth="1.2" opacity="0.22" />
          </pattern>
        </defs>

        {/* Grids — full coverage, no mask */}
        <rect width="100%" height="100%" fill="url(#grid-sm)" />
        <rect width="100%" height="100%" fill="url(#grid-lg)" />
        <rect width="100%" height="100%" fill="url(#crosses)" />

        {/* Circuit traces */}
        {circuitPaths.map((d, i) => (
          <path key={`trace-${i}`} d={d} fill="none" stroke="#00b8d4" strokeWidth="0.8" opacity="0.15" />
        ))}

        {/* Solder pads */}
        {pads.map(([x, y], i) => (
          <rect key={`pad-${i}`} x={x-2.5} y={y-2.5} width="5" height="5" fill="#00b8d4" opacity="0.18" />
        ))}

        {/* Via dots */}
        {vias.map(([x, y], i) => (
          <circle key={`via-${i}`} cx={x} cy={y} r="2" fill="#00b8d4" opacity="0.12" />
        ))}

        {/* ENERGY DOTS — animated circles traveling along circuit paths */}
        {circuitPaths.map((d, i) => (
          <circle
            key={`energy-${i}`}
            r="3"
            fill="#00e5ff"
            className="energy-dot"
            style={{
              offsetPath: `path("${d}")`,
              ["--dur" as string]: `${4 + (i % 4) * 1.5}s`,
              ["--delay" as string]: `${i * 0.8}s`,
            }}
          >
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.05;0.95;1"
              dur={`${4 + (i % 4) * 1.5}s`}
              begin={`${i * 0.8}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Glowing trail effect — secondary dots with offset */}
        {circuitPaths.map((d, i) => (
          <circle
            key={`trail-${i}`}
            r="1.5"
            fill="#00e5ff"
            opacity="0.4"
            className="energy-dot"
            style={{
              offsetPath: `path("${d}")`,
              ["--dur" as string]: `${4 + (i % 4) * 1.5}s`,
              ["--delay" as string]: `${i * 0.8 + 0.15}s`,
            }}
          />
        ))}
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
