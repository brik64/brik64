"use client";

const circuitPaths = [
  "M 0,180 L 120,180 L 120,60 L 300,60",
  "M 0,540 L 180,540 L 180,420 L 360,420",
  "M 0,360 L 60,360 L 60,240 L 180,240 L 180,120",
  "M 240,720 L 240,600 L 420,600 L 420,480",
  "M 300,0 L 300,120 L 180,120 L 180,300",
  "M 480,0 L 480,120 L 360,120 L 360,300 L 480,300",
  "M 720,180 L 600,180 L 600,420 L 720,420",
  "M 600,720 L 600,660 L 780,660 L 780,540",
  "M 960,60 L 840,60 L 840,180 L 720,180",
  "M 840,720 L 840,540 L 960,540 L 960,360 L 1080,360",
  "M 1440,120 L 1320,120 L 1320,240 L 1200,240 L 1200,360",
  "M 1920,180 L 1680,180 L 1680,300 L 1560,300",
  "M 1200,0 L 1200,120 L 1380,120 L 1380,300 L 1500,300",
  "M 1920,480 L 1800,480 L 1800,360 L 1680,360 L 1680,240",
  "M 1440,720 L 1440,600 L 1560,600 L 1560,480 L 1680,480",
  "M 1200,540 L 1320,540 L 1320,420 L 1500,420",
];

const pads: [number, number][] = [
  [120,180],[120,60],[300,60],[480,120],[360,120],[360,300],
  [600,180],[600,420],[840,60],[840,180],[1320,120],[1320,240],
  [1200,240],[1680,180],[1680,300],[1560,300],[180,540],[180,420],
  [360,420],[1320,540],[1320,420],[1500,420],[240,600],[420,600],
  [1560,480],[1440,600],[480,840],[600,840],[1320,1080],[1200,1080],
];

export function HeroWireframe() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,229,255,0.10),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(0,229,255,0.08),transparent_24%),linear-gradient(180deg,rgba(0,229,255,0.06),transparent_38%)]" />
      <svg
        className="absolute inset-0 h-full w-full opacity-90"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 720"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="hero-grid-sm" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="60" y1="0" x2="60" y2="60" stroke="#00b8d4" strokeWidth="0.5" opacity="0.08" />
            <line x1="0" y1="60" x2="60" y2="60" stroke="#00b8d4" strokeWidth="0.5" opacity="0.08" />
          </pattern>
          <pattern id="hero-grid-lg" width="240" height="240" patternUnits="userSpaceOnUse">
            <line x1="240" y1="0" x2="240" y2="240" stroke="#00b8d4" strokeWidth="0.8" opacity="0.12" />
            <line x1="0" y1="240" x2="240" y2="240" stroke="#00b8d4" strokeWidth="0.8" opacity="0.12" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#hero-grid-sm)" />
        <rect width="100%" height="100%" fill="url(#hero-grid-lg)" />

        {circuitPaths.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="#00b8d4"
            strokeWidth="0.8"
            opacity={0.12 - i * 0.003}
          />
        ))}

        {pads.map(([x, y], i) => (
          <rect
            key={`pad-${i}`}
            x={x - 2}
            y={y - 2}
            width="4"
            height="4"
            fill="#00b8d4"
            opacity="0.12"
          />
        ))}
      </svg>
    </div>
  );
}
