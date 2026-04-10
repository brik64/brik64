export function StaticCircuitGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 5000"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          <pattern id="sg-sm" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="60" y1="0" x2="60" y2="60" stroke="#00b8d4" strokeWidth="0.5" opacity="0.08" />
            <line x1="0" y1="60" x2="60" y2="60" stroke="#00b8d4" strokeWidth="0.5" opacity="0.08" />
          </pattern>
          <pattern id="sg-lg" width="240" height="240" patternUnits="userSpaceOnUse">
            <line x1="240" y1="0" x2="240" y2="240" stroke="#00b8d4" strokeWidth="0.8" opacity="0.12" />
            <line x1="0" y1="240" x2="240" y2="240" stroke="#00b8d4" strokeWidth="0.8" opacity="0.12" />
          </pattern>
          <pattern id="sg-cross" width="240" height="240" patternUnits="userSpaceOnUse">
            <line x1="234" y1="240" x2="246" y2="240" stroke="#00b8d4" strokeWidth="1" opacity="0.15" />
            <line x1="240" y1="234" x2="240" y2="246" stroke="#00b8d4" strokeWidth="1" opacity="0.15" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#sg-sm)" />
        <rect width="100%" height="100%" fill="url(#sg-lg)" />
        <rect width="100%" height="100%" fill="url(#sg-cross)" />

        {/* Traces */}
        {[
          "M 0,180 L 120,180 L 120,60 L 300,60",
          "M 480,0 L 480,120 L 360,120 L 360,300",
          "M 720,180 L 600,180 L 600,420 L 720,420",
          "M 960,60 L 840,60 L 840,180 L 720,180",
          "M 1440,120 L 1320,120 L 1320,240 L 1200,240",
          "M 1920,180 L 1680,180 L 1680,300 L 1560,300",
          "M 0,540 L 180,540 L 180,420 L 360,420",
          "M 1200,540 L 1320,540 L 1320,420 L 1500,420",
          "M 240,720 L 240,600 L 420,600 L 420,480",
          "M 1680,480 L 1560,480 L 1560,600 L 1440,600",
          "M 480,960 L 480,840 L 600,840 L 600,1020",
          "M 1320,900 L 1320,1080 L 1200,1080",
          "M 120,1200 L 120,1380 L 300,1380",
          "M 1680,1020 L 1680,1200 L 1560,1200",
          "M 720,1440 L 540,1440 L 540,1620",
          "M 1200,1320 L 1200,1500 L 1080,1500",
        ].map((d, i) => (
          <path key={i} d={d} fill="none" stroke="#00b8d4" strokeWidth="0.6" opacity="0.1" />
        ))}

        {/* Pads */}
        {[
          [120,180],[120,60],[300,60],[480,120],[360,120],[360,300],
          [600,180],[600,420],[840,60],[840,180],[1320,120],[1320,240],
          [1200,240],[1680,180],[1680,300],[1560,300],[180,540],[180,420],
          [360,420],[1320,540],[1320,420],[1500,420],[240,600],[420,600],
          [1560,480],[1440,600],[480,840],[600,840],[1320,1080],[1200,1080],
        ].map(([x, y], i) => (
          <rect key={`p-${i}`} x={x-2} y={y-2} width="4" height="4" fill="#00b8d4" opacity="0.1" />
        ))}
      </svg>
    </div>
  );
}
