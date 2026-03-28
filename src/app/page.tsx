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
  // Left zone
  "M 0,180 L 120,180 L 120,60 L 300,60",
  "M 0,540 L 180,540 L 180,420 L 360,420",
  "M 0,360 L 60,360 L 60,240 L 180,240 L 180,120",
  "M 240,720 L 240,600 L 420,600 L 420,480",
  "M 300,0 L 300,120 L 180,120 L 180,300",
  // Center zone
  "M 480,0 L 480,120 L 360,120 L 360,300 L 480,300",
  "M 720,180 L 600,180 L 600,420 L 720,420",
  "M 600,720 L 600,660 L 780,660 L 780,540",
  "M 960,60 L 840,60 L 840,180 L 720,180",
  "M 840,720 L 840,540 L 960,540 L 960,360 L 1080,360",
  // Right zone — NEW
  "M 1440,120 L 1320,120 L 1320,240 L 1200,240 L 1200,360",
  "M 1920,180 L 1680,180 L 1680,300 L 1560,300",
  "M 1200,0 L 1200,120 L 1380,120 L 1380,300 L 1500,300",
  "M 1920,480 L 1800,480 L 1800,360 L 1680,360 L 1680,240",
  "M 1440,720 L 1440,600 L 1560,600 L 1560,480 L 1680,480",
  "M 1200,540 L 1320,540 L 1320,420 L 1500,420",
  "M 1800,0 L 1800,180 L 1680,180 L 1680,60 L 1560,60",
  "M 1560,720 L 1560,540 L 1440,540 L 1440,420",
  "M 1920,600 L 1740,600 L 1740,480 L 1620,480 L 1620,360",
  "M 1080,600 L 1200,600 L 1200,480 L 1320,480",
];

const pads = [
  [120,180],[120,60],[300,60],[480,120],[360,120],[360,300],
  [600,180],[600,420],[840,60],[840,180],[180,540],[180,420],
  [360,420],[1080,300],[1080,420],[960,420],[240,600],[420,600],
  [600,660],[780,660],[60,360],[60,240],[180,240],[180,120],
  [1200,480],[1200,600],[840,540],[960,540],[960,360],[1080,360],
  [300,120],[180,300],
  // Right pads
  [1320,120],[1320,240],[1200,240],[1200,360],[1680,180],[1680,300],
  [1560,300],[1380,120],[1380,300],[1500,300],[1800,480],[1800,360],
  [1680,360],[1680,240],[1440,600],[1560,600],[1560,480],[1680,480],
  [1320,540],[1320,420],[1500,420],[1800,180],[1680,60],[1560,60],
  [1740,600],[1740,480],[1620,480],[1620,360],[1200,600],[1320,480],
];

const vias = [
  [60,120],[180,240],[300,360],[420,120],[540,300],
  [660,480],[780,120],[900,360],[1020,240],[1140,480],
  [120,480],[360,600],[540,540],[720,300],[960,180],
  [1080,120],[480,600],[840,420],[660,240],
  // Right vias
  [1260,180],[1380,360],[1500,480],[1620,120],[1740,300],
  [1380,540],[1560,240],[1680,540],[1800,120],[1440,360],
];

function CircuitGridBg() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <style>{`
        @keyframes energy-flow {
          0% { offset-distance: 0%; opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .energy-dot {
          offset-rotate: 0deg;
          animation: energy-flow var(--dur) ease-in-out var(--delay) infinite;
          filter: blur(0.5px);
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

        {/* Glow filter — white halo around blue dot */}
        <defs>
          <filter id="energy-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 1  0 1 0 0 1  0 0 1 0 1  0 0 0 0.6 0" result="white-blur" />
            <feMerge>
              <feMergeNode in="white-blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ENERGY DOTS — blue core with white blur halo */}
        {circuitPaths.map((d, i) => {
          const dur = 3.2 + ((i * 7 + 3) % 11) * 0.6;
          const delay = ((i * 13 + 5) % 17) * 0.9;
          return (
            <g key={`energy-${i}`}>
              {/* Blue dot with white glow halo */}
              <circle
                r="2.5"
                fill="#00e5ff"
                filter="url(#energy-glow)"
                className="energy-dot"
                style={{
                  offsetPath: `path("${d}")`,
                  ["--dur" as string]: `${dur}s`,
                  ["--delay" as string]: `${delay}s`,
                }}
              />
              {/* Trailing smaller dot */}
              <circle
                r="1"
                fill="#00b8d4"
                opacity="0.4"
                className="energy-dot"
                style={{
                  offsetPath: `path("${d}")`,
                  ["--dur" as string]: `${dur}s`,
                  ["--delay" as string]: `${delay + 0.25}s`,
                }}
              />
            </g>
          );
        })}
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
