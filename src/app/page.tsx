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
  // Right zone
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
  // Deep vertical — below fold
  "M 0,900 L 180,900 L 180,1080 L 360,1080",
  "M 480,780 L 480,960 L 600,960 L 600,1140",
  "M 960,840 L 960,1020 L 840,1020 L 840,1200",
  "M 1440,900 L 1320,900 L 1320,1080 L 1200,1080",
  "M 1800,840 L 1800,1020 L 1680,1020 L 1680,1200 L 1560,1200",
  "M 120,1200 L 120,1380 L 300,1380 L 300,1560",
  "M 720,1260 L 720,1440 L 540,1440 L 540,1620",
  "M 1080,1140 L 1080,1320 L 1200,1320 L 1200,1500",
  "M 1560,1320 L 1440,1320 L 1440,1500 L 1320,1500",
  "M 360,1680 L 360,1860 L 540,1860 L 540,2040",
  "M 960,1740 L 840,1740 L 840,1920 L 720,1920",
  "M 1680,1620 L 1680,1800 L 1800,1800 L 1800,1980",
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
        viewBox="0 0 1920 5000"
        preserveAspectRatio="xMidYMin slice"
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

        {/* Monomer nodes — white by default, invert to teal when energy passes */}
        {[
          { x: 120, y: 60, label: "M00", name: "ADD" },
          { x: 360, y: 300, label: "M03", name: "DIV" },
          { x: 720, y: 420, label: "M08", name: "AND" },
          { x: 960, y: 180, label: "M16", name: "LOAD" },
          { x: 480, y: 300, label: "M24", name: "IF" },
          { x: 180, y: 420, label: "M32", name: "READ" },
          { x: 600, y: 180, label: "M40", name: "STR" },
          { x: 840, y: 60, label: "M48", name: "HASH" },
          { x: 240, y: 600, label: "M56", name: "TIME" },
          { x: 1320, y: 240, label: "M02", name: "MUL" },
          { x: 1560, y: 300, label: "M11", name: "NOT" },
          { x: 1680, y: 480, label: "M25", name: "LOOP" },
          { x: 1440, y: 600, label: "M33", name: "WRITE" },
          { x: 1800, y: 180, label: "M49", name: "ENC" },
          { x: 1200, y: 360, label: "M51", name: "SIGN" },
          { x: 660, y: 660, label: "M63", name: "ASSERT" },
          { x: 1080, y: 600, label: "M17", name: "STORE" },
          { x: 420, y: 480, label: "M07", name: "NEG" },
          // Deep nodes
          { x: 360, y: 1080, label: "M09", name: "OR" },
          { x: 600, y: 960, label: "M12", name: "SHL" },
          { x: 960, y: 1020, label: "M22", name: "DUP" },
          { x: 1320, y: 1080, label: "M26", name: "CALL" },
          { x: 1680, y: 1020, label: "M43", name: "LEN" },
          { x: 300, y: 1380, label: "M52", name: "VRFY" },
          { x: 720, y: 1440, label: "M35", name: "INPUT" },
          { x: 1200, y: 1320, label: "M55", name: "RNG" },
          { x: 540, y: 1860, label: "M60", name: "EXIT" },
          { x: 1440, y: 1500, label: "M10", name: "XOR" },
          { x: 960, y: 1740, label: "M29", name: "HALT" },
          { x: 1800, y: 1800, label: "M46", name: "TRIM" },
        ].map((node, i) => {
          // Each node has a cycle: white(long) → snap to teal(short) → back to white
          // Timing staggered so they don't all fire at once
          const cycleDur = 5 + ((i * 7 + 2) % 9) * 1;
          const cycleDelay = ((i * 11 + 3) % 13) * 1.1;
          // keyTimes: 0=white, 0.4=still white, 0.42=snap teal, 0.58=still teal, 0.6=snap white, 1=white
          // This gives a quick ~18% window where it's inverted (teal)
          return (
            <g key={`mono-${i}`}>
              {/* Opaque background — hides grid */}
              <rect x={node.x - 21} y={node.y - 15} width="42" height="30" fill="white" rx="2" />
              {/* Fill — white → teal → white */}
              <rect x={node.x - 20} y={node.y - 14} width="40" height="28" rx="2" strokeWidth="0.8">
                <animate attributeName="fill" values="white;white;#00b8d4;#00b8d4;white;white" keyTimes="0;0.40;0.42;0.58;0.60;1" dur={`${cycleDur}s`} begin={`${cycleDelay}s`} repeatCount="indefinite" />
                <animate attributeName="stroke" values="#e4e4e7;#e4e4e7;#00e5ff;#00e5ff;#e4e4e7;#e4e4e7" keyTimes="0;0.40;0.42;0.58;0.60;1" dur={`${cycleDur}s`} begin={`${cycleDelay}s`} repeatCount="indefinite" />
              </rect>
              {/* Label — gray → white → gray */}
              <text x={node.x} y={node.y - 3} textAnchor="middle" fontSize="7" fontFamily="monospace" fontWeight="bold">
                {node.label}
                <animate attributeName="fill" values="#a1a1aa;#a1a1aa;#ffffff;#ffffff;#a1a1aa;#a1a1aa" keyTimes="0;0.40;0.42;0.58;0.60;1" dur={`${cycleDur}s`} begin={`${cycleDelay}s`} repeatCount="indefinite" />
              </text>
              {/* Name — light gray → white → light gray */}
              <text x={node.x} y={node.y + 7} textAnchor="middle" fontSize="5.5" fontFamily="monospace">
                {node.name}
                <animate attributeName="fill" values="#d4d4d8;#d4d4d8;#e0f7fa;#e0f7fa;#d4d4d8;#d4d4d8" keyTimes="0;0.40;0.42;0.58;0.60;1" dur={`${cycleDur}s`} begin={`${cycleDelay}s`} repeatCount="indefinite" />
              </text>
            </g>
          );
        })}

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
