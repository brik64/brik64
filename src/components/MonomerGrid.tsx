"use client";

import { useRef, useEffect, useCallback } from "react";

// 128 monomers: 8 families × 8 core + 8 families × 8 extended
const FAMILIES_CORE = ["Arithmetic", "Logic", "Memory", "Control", "I/O", "String", "Crypto", "System"];
const FAMILIES_EXT = ["Float64", "Math", "Network", "Graphics", "Audio", "Filesystem", "Concurrency", "Interop"];
const OPS_CORE = [
  ["ADD", "SUB", "MUL", "DIV", "MOD", "POW", "NEG", "ABS"],
  ["AND", "OR", "XOR", "NOT", "SHL", "SHR", "ROL", "ROR"],
  ["LOAD", "STORE", "ALLOC", "FREE", "COPY", "SWAP", "DUP", "DROP"],
  ["IF", "LOOP", "CALL", "RET", "JUMP", "HALT", "NOP", "ASSERT"],
  ["READ", "WRITE", "OPEN", "CLOSE", "SEEK", "FLUSH", "STDIN", "STDOUT"],
  ["STR", "CONCAT", "SPLIT", "TRIM", "UPPER", "LOWER", "LEN", "CHAR"],
  ["HASH", "ENC", "DEC", "SIGN", "VRFY", "RNG", "KDF", "HMAC"],
  ["TIME", "ENV", "EXIT", "SPAWN", "WAIT", "SEND", "RECV", "LOG"],
];
const OPS_EXT = [
  ["FADD", "FSUB", "FMUL", "FDIV", "FMOD", "FPOW", "FNEG", "FABS"],
  ["SIN", "COS", "TAN", "SQRT", "LOG2", "EXP", "CEIL", "FLOOR"],
  ["CONN", "BIND", "LISTEN", "ACCEPT", "DNS", "HTTP", "TLS", "UDP"],
  ["PIXEL", "LINE", "RECT", "FILL", "BLIT", "CLEAR", "BLEND", "TEXT"],
  ["PLAY", "PAUSE", "MIX", "FREQ", "VOL", "BUF", "WAVE", "FFT"],
  ["FOPEN", "FREAD", "FWRITE", "FSTAT", "MKDIR", "RMDIR", "GLOB", "LINK"],
  ["FORK", "JOIN", "LOCK", "UNLOCK", "CHAN", "SELECT", "ATOMIC", "BARRIER"],
  ["FFI", "DLOPEN", "DLSYM", "MARSHAL", "UNMARSHAL", "CBIND", "PYOBJ", "JSVAL"],
];

interface Monomer {
  id: string;
  name: string;
  family: string;
  isExtended: boolean;
  gridCol: number;
  gridRow: number;
}

function buildMonomers(): Monomer[] {
  const result: Monomer[] = [];
  for (let f = 0; f < 8; f++) {
    for (let o = 0; o < 8; o++) {
      result.push({
        id: `MC_${String(f * 8 + o).padStart(2, "0")}`,
        name: OPS_CORE[f][o],
        family: FAMILIES_CORE[f],
        isExtended: false,
        gridCol: o,
        gridRow: f,
      });
    }
  }
  for (let f = 0; f < 8; f++) {
    for (let o = 0; o < 8; o++) {
      result.push({
        id: `MC_${String(64 + f * 8 + o).padStart(2, "0")}`,
        name: OPS_EXT[f][o],
        family: FAMILIES_EXT[f],
        isExtended: true,
        gridCol: o + 9, // gap of 1 column between core and extended
        gridRow: f,
      });
    }
  }
  return result;
}

const MONOMERS = buildMonomers();

// Layout constants
const CELL_W = 48;
const CELL_H = 32;
const GAP = 4;
const COLS = 17; // 8 core + 1 gap + 8 extended
const ROWS = 8;
const GRID_W = COLS * (CELL_W + GAP);
const GRID_H = ROWS * (CELL_H + GAP);

// Physics
const MOUSE_RADIUS = 120;
const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS;
const MOUSE_FORCE = 28;
const EASING = 0.1;
const SNAP = 0.05;

// Family colors (teal spectrum)
const FAMILY_COLORS_CORE = [
  "#00b8d4", "#00acc1", "#0097a7", "#00838f",
  "#006064", "#00796b", "#00897b", "#009688",
];
const FAMILY_COLORS_EXT = [
  "#4db6ac", "#4dd0e1", "#4fc3f7", "#42a5f5",
  "#5c6bc0", "#7e57c2", "#ab47bc", "#ec407a",
];

export function MonomerGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const dxRef = useRef(new Float32Array(MONOMERS.length));
  const dyRef = useRef(new Float32Array(MONOMERS.length));
  const rafRef = useRef(0);
  const scaleRef = useRef(1);
  const offsetRef = useRef({ x: 0, y: 0 });

  const getBasePos = useCallback((m: Monomer): [number, number] => {
    const x = m.gridCol * (CELL_W + GAP) + CELL_W / 2;
    const y = m.gridRow * (CELL_H + GAP) + CELL_H / 2;
    return [x, y];
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;

    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
    }

    // Scale to fit
    const scale = Math.min(cw / GRID_W, ch / GRID_H) * 0.9;
    scaleRef.current = scale;
    const ox = (cw - GRID_W * scale) / 2;
    const oy = (ch - GRID_H * scale) / 2;
    offsetRef.current = { x: ox, y: oy };

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(dpr * scale, 0, 0, dpr * scale, dpr * ox, dpr * oy);

    const dx = dxRef.current;
    const dy = dyRef.current;
    const mouse = mouseRef.current;

    // Update physics
    for (let i = 0; i < MONOMERS.length; i++) {
      const [bx, by] = getBasePos(MONOMERS[i]);
      let fx = 0, fy = 0;

      if (mouse.active) {
        // Convert mouse to grid space
        const mx = (mouse.x - offsetRef.current.x) / scaleRef.current;
        const my = (mouse.y - offsetRef.current.y) / scaleRef.current;
        const vx = (bx + dx[i]) - mx;
        const vy = (by + dy[i]) - my;
        const d2 = vx * vx + vy * vy;

        if (d2 > 0.1 && d2 < MOUSE_RADIUS_SQ) {
          const d = Math.sqrt(d2);
          const falloff = 1 - d / MOUSE_RADIUS;
          const force = falloff * falloff * falloff * MOUSE_FORCE;
          fx += (vx / d) * force;
          fy += (vy / d) * force;
        }
      }

      dx[i] += (fx - dx[i]) * EASING;
      dy[i] += (fy - dy[i]) * EASING;
      if (Math.abs(dx[i]) < SNAP) dx[i] = 0;
      if (Math.abs(dy[i]) < SNAP) dy[i] = 0;
    }

    // Render monomers
    for (let i = 0; i < MONOMERS.length; i++) {
      const m = MONOMERS[i];
      const [bx, by] = getBasePos(m);
      const x = bx + dx[i] - CELL_W / 2;
      const y = by + dy[i] - CELL_H / 2;

      const displacement = Math.sqrt(dx[i] * dx[i] + dy[i] * dy[i]);
      const glow = Math.min(displacement / 15, 1);

      // Background
      const familyIdx = m.gridRow;
      const baseColor = m.isExtended ? FAMILY_COLORS_EXT[familyIdx] : FAMILY_COLORS_CORE[familyIdx];
      const alpha = 0.08 + glow * 0.25;

      ctx.fillStyle = `rgba(255,255,255,0.95)`;
      roundRect(ctx, x, y, CELL_W, CELL_H, 3);
      ctx.fill();

      // Border
      ctx.strokeStyle = glow > 0.1 ? baseColor : "#e4e4e7";
      ctx.lineWidth = glow > 0.1 ? 1.5 : 0.5;
      roundRect(ctx, x, y, CELL_W, CELL_H, 3);
      ctx.stroke();

      // Glow fill overlay
      if (glow > 0.1) {
        ctx.fillStyle = baseColor.replace(")", `,${alpha})`).replace("rgb", "rgba");
        roundRect(ctx, x, y, CELL_W, CELL_H, 3);
        ctx.fill();
      }

      // ID text
      ctx.fillStyle = glow > 0.3 ? baseColor : "#a1a1aa";
      ctx.font = "bold 6.5px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(m.id, bx + dx[i], by + dy[i] - 5);

      // Name text
      ctx.fillStyle = glow > 0.3 ? "#1a1a1a" : "#d4d4d8";
      ctx.font = "bold 5.5px monospace";
      ctx.fillText(m.name, bx + dx[i], by + dy[i] + 5);
    }
  }, [getBasePos]);

  const animate = useCallback(() => {
    draw();
    rafRef.current = requestAnimationFrame(animate);
  }, [draw]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top, active: true };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { ...mouseRef.current, active: false };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
  );
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
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
