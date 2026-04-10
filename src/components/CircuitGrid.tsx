"use client";
import { useEffect, useRef, useCallback } from "react";

// ── Circuit data (extracted from page.tsx SVG) ──────────────────────────

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
  "M 1800,0 L 1800,180 L 1680,180 L 1680,60 L 1560,60",
  "M 1560,720 L 1560,540 L 1440,540 L 1440,420",
  "M 1920,600 L 1740,600 L 1740,480 L 1620,480 L 1620,360",
  "M 1080,600 L 1200,600 L 1200,480 L 1320,480",
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

const pads: [number, number][] = [
  [120,180],[120,60],[300,60],[480,120],[360,120],[360,300],
  [600,180],[600,420],[840,60],[840,180],[180,540],[180,420],
  [360,420],[1080,300],[1080,420],[960,420],[240,600],[420,600],
  [600,660],[780,660],[60,360],[60,240],[180,240],[180,120],
  [1200,480],[1200,600],[840,540],[960,540],[960,360],[1080,360],
  [300,120],[180,300],
  [1320,120],[1320,240],[1200,240],[1200,360],[1680,180],[1680,300],
  [1560,300],[1380,120],[1380,300],[1500,300],[1800,480],[1800,360],
  [1680,360],[1680,240],[1440,600],[1560,600],[1560,480],[1680,480],
  [1320,540],[1320,420],[1500,420],[1800,180],[1680,60],[1560,60],
  [1740,600],[1740,480],[1620,480],[1620,360],[1200,600],[1320,480],
];

const vias: [number, number][] = [
  [60,120],[180,240],[300,360],[420,120],[540,300],
  [660,480],[780,120],[900,360],[1020,240],[1140,480],
  [120,480],[360,600],[540,540],[720,300],[960,180],
  [1080,120],[480,600],[840,420],[660,240],
  [1260,180],[1380,360],[1500,480],[1620,120],[1740,300],
  [1380,540],[1560,240],[1680,540],[1800,120],[1440,360],
];

const monomerNodes = [
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
];

// ── Helpers ─────────────────────────────────────────────────────────────

type Point = [number, number];

function parseSvgPath(d: string): Point[] {
  const points: Point[] = [];
  const parts = d.split(/\s+(?=[ML])/);
  for (const part of parts) {
    const match = part.match(/[ML]\s*([\d.]+),([\d.]+)/);
    if (match) {
      points.push([parseFloat(match[1]), parseFloat(match[2])]);
    }
  }
  return points;
}

function segmentLength(a: Point, b: Point): number {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  return Math.sqrt(dx * dx + dy * dy);
}

function totalPathLength(pts: Point[]): number {
  let len = 0;
  for (let i = 1; i < pts.length; i++) {
    len += segmentLength(pts[i - 1], pts[i]);
  }
  return len;
}

function positionOnPath(pts: Point[], dist: number): Point {
  let remaining = dist;
  for (let i = 1; i < pts.length; i++) {
    const seg = segmentLength(pts[i - 1], pts[i]);
    if (remaining <= seg) {
      const t = seg === 0 ? 0 : remaining / seg;
      return [
        pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * t,
        pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * t,
      ];
    }
    remaining -= seg;
  }
  return pts[pts.length - 1];
}

// Pseudo-random seeded from index
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

// ── Parsed data ─────────────────────────────────────────────────────────

interface ParsedPath {
  points: Point[];
  length: number;
}

const parsedPaths: ParsedPath[] = circuitPaths.map((d) => {
  const points = parseSvgPath(d);
  return { points, length: totalPathLength(points) };
});

// ── Dot state ───────────────────────────────────────────────────────────

interface DotState {
  pathIndex: number;
  speed: number; // px per second
  distance: number; // along path
  delayRemaining: number; // seconds before restart
  active: boolean;
}

function createDot(i: number): DotState {
  const speed = 40 + seededRandom(i * 3 + 1) * 40;
  const delay = seededRandom(i * 7 + 5) * 5;
  return {
    pathIndex: i,
    speed,
    distance: 0,
    delayRemaining: delay,
    active: false,
  };
}

// ── Component ───────────────────────────────────────────────────────────

const VIRTUAL_WIDTH = 1920;
const VIRTUAL_HEIGHT = 5000;
const MONOMER_W = 40;
const MONOMER_H = 28;
const ACTIVATION_RADIUS = 25;

export function CircuitGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<DotState[]>(parsedPaths.map((_, i) => createDot(i)));
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const cw = window.innerWidth;
    const ch = window.innerHeight;

    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
      canvas.style.width = `${cw}px`;
      canvas.style.height = `${ch}px`;
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Scale: fit VIRTUAL_WIDTH to viewport width, allow vertical overflow (like SVG slice)
    const scale = (cw / VIRTUAL_WIDTH) * dpr;
    ctx.setTransform(scale, 0, 0, scale, 0, 0);

    // ── Small grid (60px) ──
    ctx.strokeStyle = "rgba(0,184,212,0.12)";
    ctx.lineWidth = 0.5;
    const maxX = VIRTUAL_WIDTH;
    const maxY = VIRTUAL_HEIGHT;
    ctx.beginPath();
    for (let x = 60; x <= maxX; x += 60) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, maxY);
    }
    for (let y = 60; y <= maxY; y += 60) {
      ctx.moveTo(0, y);
      ctx.lineTo(maxX, y);
    }
    ctx.stroke();

    // ── Large grid (240px) ──
    ctx.strokeStyle = "rgba(0,184,212,0.18)";
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    for (let x = 240; x <= maxX; x += 240) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, maxY);
    }
    for (let y = 240; y <= maxY; y += 240) {
      ctx.moveTo(0, y);
      ctx.lineTo(maxX, y);
    }
    ctx.stroke();

    // ── Crosses at 240px intersections ──
    ctx.strokeStyle = "rgba(0,184,212,0.22)";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    for (let x = 240; x <= maxX; x += 240) {
      for (let y = 240; y <= maxY; y += 240) {
        ctx.moveTo(x - 6, y);
        ctx.lineTo(x + 6, y);
        ctx.moveTo(x, y - 6);
        ctx.lineTo(x, y + 6);
      }
    }
    ctx.stroke();

    // ── Circuit traces ──
    ctx.strokeStyle = "rgba(0,184,212,0.15)";
    ctx.lineWidth = 0.8;
    for (const pp of parsedPaths) {
      if (pp.points.length < 2) continue;
      ctx.beginPath();
      ctx.moveTo(pp.points[0][0], pp.points[0][1]);
      for (let i = 1; i < pp.points.length; i++) {
        ctx.lineTo(pp.points[i][0], pp.points[i][1]);
      }
      ctx.stroke();
    }

    // ── Pads ──
    ctx.fillStyle = "rgba(0,184,212,0.18)";
    for (const [x, y] of pads) {
      ctx.fillRect(x - 2.5, y - 2.5, 5, 5);
    }

    // ── Vias ──
    ctx.fillStyle = "rgba(0,184,212,0.12)";
    for (const [x, y] of vias) {
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
    }

    // ── Compute dot positions for monomer activation ──
    const dotPositions: Point[] = dotsRef.current.map((dot) => {
      if (!dot.active) return [-9999, -9999] as Point;
      return positionOnPath(parsedPaths[dot.pathIndex].points, dot.distance);
    });

    // ── Energy dots (drawn FIRST, below monomers) ──
    for (let i = 0; i < dotsRef.current.length; i++) {
      const dot = dotsRef.current[i];
      if (!dot.active) continue;
      const pos = dotPositions[i];

      // Simple solid teal dot — no blur/glow
      ctx.fillStyle = "#00e5ff";
      ctx.beginPath();
      ctx.arc(pos[0], pos[1], 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // ── Monomer nodes (drawn AFTER dots, on top) ──
    for (const node of monomerNodes) {
      // Check if any dot is close enough to activate
      let activated = false;
      for (const pos of dotPositions) {
        const dx = pos[0] - node.x;
        const dy = pos[1] - node.y;
        if (dx * dx + dy * dy < ACTIVATION_RADIUS * ACTIVATION_RADIUS) {
          activated = true;
          break;
        }
      }

      const rx = node.x - MONOMER_W / 2;
      const ry = node.y - MONOMER_H / 2;

      // Background rect (slightly larger for border illusion)
      ctx.fillStyle = activated ? "#00e5ff" : "#e4e4e7";
      roundRect(ctx, rx - 1, ry - 1, MONOMER_W + 2, MONOMER_H + 2, 2);
      ctx.fill();

      // Inner rect
      ctx.fillStyle = activated ? "#00b8d4" : "white";
      roundRect(ctx, rx, ry, MONOMER_W, MONOMER_H, 2);
      ctx.fill();

      // Label text
      ctx.fillStyle = activated ? "#ffffff" : "#a1a1aa";
      ctx.font = "bold 7px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(node.label, node.x, node.y - 4);

      // Name text
      ctx.fillStyle = activated ? "#e0f7fa" : "#d4d4d8";
      ctx.font = "5.5px monospace";
      ctx.fillText(node.name, node.x, node.y + 6);
    }
  }, []);

  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current === 0) lastTimeRef.current = time;
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = time;

      dotsRef.current = dotsRef.current.map((dot) => {
        if (dot.delayRemaining > 0) {
          return {
            ...dot,
            delayRemaining: Math.max(0, dot.delayRemaining - dt),
            active: false,
          };
        }

        const distance = dot.distance + dot.speed * dt;
        const pathLen = parsedPaths[dot.pathIndex].length;
        if (distance >= pathLen) {
          return {
            ...dot,
            distance: 0,
            active: false,
            delayRemaining: 1 + seededRandom(dot.pathIndex * 31 + time) * 4,
            speed: 40 + seededRandom(dot.pathIndex * 17 + time) * 40,
          };
        }

        return {
          ...dot,
          distance,
          active: true,
        };
      });

      draw();
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}

// ── Canvas rounded rect helper ──────────────────────────────────────────

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
