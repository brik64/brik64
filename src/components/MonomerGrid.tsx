"use client";

import { useRef, useEffect, useCallback } from "react";

// 64 core monomers: 8 families × 8
const FAMILIES = ["Arithmetic", "Logic", "Memory", "Control", "I/O", "String", "Crypto", "System"];
const OPS = [
  ["ADD", "SUB", "MUL", "DIV", "MOD", "POW", "NEG", "ABS"],
  ["AND", "OR", "XOR", "NOT", "SHL", "SHR", "ROL", "ROR"],
  ["LOAD", "STORE", "ALLOC", "FREE", "COPY", "SWAP", "DUP", "DROP"],
  ["IF", "LOOP", "CALL", "RET", "JUMP", "HALT", "NOP", "ASSERT"],
  ["READ", "WRITE", "OPEN", "CLOSE", "SEEK", "FLUSH", "STDIN", "STDOUT"],
  ["STR", "CONCAT", "SPLIT", "TRIM", "UPPER", "LOWER", "LEN", "CHAR"],
  ["HASH", "ENC", "DEC", "SIGN", "VRFY", "RNG", "KDF", "HMAC"],
  ["TIME", "ENV", "EXIT", "SPAWN", "WAIT", "SEND", "RECV", "LOG"],
];

interface Monomer {
  id: string;
  name: string;
  col: number;
  row: number;
}

const MONOMERS: Monomer[] = [];
for (let f = 0; f < 8; f++) {
  for (let o = 0; o < 8; o++) {
    MONOMERS.push({
      id: `MC_${String(f * 8 + o).padStart(2, "0")}`,
      name: OPS[f][o],
      col: o,
      row: f,
    });
  }
}

// Layout
const CELL_W = 52;
const CELL_H = 34;
const GAP_X = 10;
const GAP_Y = 8;
const COLS = 8;
const ROWS = 8;
const STEP_X = CELL_W + GAP_X;
const STEP_Y = CELL_H + GAP_Y;
const GRID_W = COLS * STEP_X - GAP_X;
const GRID_H = ROWS * STEP_Y - GAP_Y;

// Physics — grid-relative displacement (all cells move together, maintaining spacing)
const MOUSE_RADIUS = 160;
const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS;
const MOUSE_FORCE = 18;
const EASING = 0.08;
const SNAP = 0.02;

// Family colors
const FAMILY_COLORS = [
  "#00b8d4", "#00acc1", "#0097a7", "#00838f",
  "#006064", "#00796b", "#00897b", "#009688",
];

export function MonomerGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  // Per-cell displacement
  const dxRef = useRef(new Float32Array(64));
  const dyRef = useRef(new Float32Array(64));
  const rafRef = useRef(0);
  const scaleRef = useRef(1);
  const offsetRef = useRef({ x: 0, y: 0 });

  const getBasePos = useCallback((m: Monomer): [number, number] => {
    return [m.col * STEP_X + CELL_W / 2, m.row * STEP_Y + CELL_H / 2];
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

    const scale = Math.min(cw / GRID_W, ch / GRID_H) * 0.92;
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

    // Mouse in grid space
    const mx = (mouse.x - offsetRef.current.x) / scaleRef.current;
    const my = (mouse.y - offsetRef.current.y) / scaleRef.current;

    // Update physics per cell
    for (let i = 0; i < 64; i++) {
      const [bx, by] = getBasePos(MONOMERS[i]);
      let fx = 0, fy = 0;

      if (mouse.active) {
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

      // Clamp max displacement so cells never overlap
      const maxDisp = Math.min(GAP_X, GAP_Y) * 0.8;

      dx[i] += (fx - dx[i]) * EASING;
      dy[i] += (fy - dy[i]) * EASING;

      // Clamp
      if (dx[i] > maxDisp) dx[i] = maxDisp;
      if (dx[i] < -maxDisp) dx[i] = -maxDisp;
      if (dy[i] > maxDisp) dy[i] = maxDisp;
      if (dy[i] < -maxDisp) dy[i] = -maxDisp;

      if (Math.abs(dx[i]) < SNAP) dx[i] = 0;
      if (Math.abs(dy[i]) < SNAP) dy[i] = 0;
    }

    // Render
    for (let i = 0; i < 64; i++) {
      const m = MONOMERS[i];
      const [bx, by] = getBasePos(m);
      const cx = bx + dx[i];
      const cy = by + dy[i];
      const x = cx - CELL_W / 2;
      const y = cy - CELL_H / 2;

      const displacement = Math.sqrt(dx[i] * dx[i] + dy[i] * dy[i]);
      const activated = displacement > 0.5;
      const color = FAMILY_COLORS[m.row];

      if (activated) {
        // State 2: colored with white text
        ctx.fillStyle = color;
        roundRect(ctx, x, y, CELL_W, CELL_H, 3);
        ctx.fill();

        // ID
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.font = "bold 7px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(m.id, cx, cy - 5);

        // Name
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 6px monospace";
        ctx.fillText(m.name, cx, cy + 6);
      } else {
        // State 1: white with light border
        ctx.fillStyle = "rgba(255,255,255,0.95)";
        roundRect(ctx, x, y, CELL_W, CELL_H, 3);
        ctx.fill();

        ctx.strokeStyle = "#e4e4e7";
        ctx.lineWidth = 0.5;
        roundRect(ctx, x, y, CELL_W, CELL_H, 3);
        ctx.stroke();

        // ID
        ctx.fillStyle = "#a1a1aa";
        ctx.font = "bold 7px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(m.id, cx, cy - 5);

        // Name
        ctx.fillStyle = "#d4d4d8";
        ctx.font = "bold 6px monospace";
        ctx.fillText(m.name, cx, cy + 6);
      }
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
