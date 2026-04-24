import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";

const targetFile = path.join(
  process.cwd(),
  "node_modules",
  "lightningcss",
  "node",
  "index.js",
);
const oxideWasiDir = path.join(
  process.cwd(),
  "node_modules",
  "@tailwindcss",
  "oxide-wasm32-wasi",
);
const lifecycle = process.env.npm_lifecycle_event ?? "";
const oxideWasiVersion = "4.2.2";

if (!existsSync(targetFile)) {
  console.log("[ensure-lightningcss-wasm] lightningcss not found, skipping");
  process.exit(0);
}

const current = readFileSync(targetFile, "utf8");
const hasFallback = current.includes("lightningcss-wasm");

const sourceBlock = `let native;
try {
  native = require(\`lightningcss-\${parts.join('-')}\`);
} catch (err) {
  native = require(\`../lightningcss.\${parts.join('-')}.node\`);
}
`;

const replacementBlock = `let native;
try {
  native = require(\`lightningcss-\${parts.join('-')}\`);
} catch (err) {
  try {
    native = require(\`../lightningcss.\${parts.join('-')}.node\`);
  } catch {
    native = require('lightningcss-wasm');
  }
}
`;

if (!hasFallback && !current.includes(sourceBlock)) {
  console.warn(
    "[ensure-lightningcss-wasm] unexpected lightningcss entrypoint format, skipping patch",
  );
}
if (hasFallback) {
  console.log("[ensure-lightningcss-wasm] lightningcss fallback already applied");
} else if (current.includes(sourceBlock)) {
  const patched = current.replace(sourceBlock, replacementBlock);
  writeFileSync(targetFile, patched, "utf8");
  console.log(
    "[ensure-lightningcss-wasm] patched lightningcss to use wasm fallback",
  );
}

if (existsSync(oxideWasiDir)) {
  console.log("[ensure-lightningcss-wasm] tailwind WASI runtime already present");
  process.exit(0);
}

if (lifecycle === "postinstall") {
  console.log(
    "[ensure-lightningcss-wasm] skipping tailwind WASI runtime install during postinstall",
  );
  process.exit(0);
}

if (!process.env.npm_execpath) {
  console.warn(
    "[ensure-lightningcss-wasm] npm_execpath missing; cannot auto-install @tailwindcss/oxide-wasm32-wasi",
  );
  process.exit(0);
}

const install = spawnSync(
  process.execPath,
  [
    process.env.npm_execpath,
    "install",
    "--no-save",
    "--force",
    `@tailwindcss/oxide-wasm32-wasi@${oxideWasiVersion}`,
  ],
  { cwd: process.cwd(), stdio: "inherit" },
);

if (install.status !== 0) {
  process.exit(install.status ?? 1);
}

if (!existsSync(oxideWasiDir)) {
  console.error(
    "[ensure-lightningcss-wasm] installed command completed, but tailwind WASI runtime is still missing",
  );
  process.exit(1);
}

console.log("[ensure-lightningcss-wasm] installed tailwind WASI runtime");
