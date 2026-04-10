const FAMILIES = [
  ["ADD", "SUB", "MUL", "DIV", "MOD", "POW", "NEG", "ABS"],
  ["AND", "OR", "XOR", "NOT", "SHL", "SHR", "ROL", "ROR"],
  ["LOAD", "STORE", "ALLOC", "FREE", "COPY", "SWAP", "DUP", "DROP"],
  ["IF", "LOOP", "CALL", "RET", "JUMP", "HALT", "NOP", "ASSERT"],
  ["READ", "WRITE", "OPEN", "CLOSE", "SEEK", "FLUSH", "STDIN", "STDOUT"],
  ["STR", "CONCAT", "SPLIT", "TRIM", "UPPER", "LOWER", "LEN", "CHAR"],
  ["HASH", "ENC", "DEC", "SIGN", "VRFY", "RNG", "KDF", "HMAC"],
  ["TIME", "ENV", "EXIT", "SPAWN", "WAIT", "SEND", "RECV", "LOG"],
];

const FAMILY_COLORS = [
  "rgba(0,229,255,0.75)",
  "rgba(0,212,235,0.75)",
  "rgba(0,190,212,0.75)",
  "rgba(0,168,189,0.75)",
  "rgba(0,146,163,0.75)",
  "rgba(0,168,145,0.75)",
  "rgba(0,190,128,0.75)",
  "rgba(0,210,112,0.75)",
];

const HERO_FAMILIES = [
  ["ADD", "SUB", "MUL", "DIV", "MOD", "POW"],
  ["AND", "OR", "XOR", "NOT", "SHL", "SHR"],
  ["LOAD", "STORE", "COPY", "SWAP", "DUP", "DROP"],
  ["IF", "LOOP", "CALL", "RET", "JUMP", "ASSERT"],
  ["STR", "CONCAT", "SPLIT", "TRIM", "UPPER", "LOWER"],
  ["HASH", "ENC", "DEC", "SIGN", "VRFY", "HMAC"],
];

export function MonomerGrid({ variant = "default" }: { variant?: "default" | "hero" }) {
  const families = variant === "hero" ? HERO_FAMILIES : FAMILIES;
  const columns = variant === "hero" ? "grid-cols-6" : "grid-cols-8";
  const width = variant === "hero" ? "max-w-[360px]" : "max-w-[420px]";
  const gap = variant === "hero" ? "gap-2 p-4" : "gap-1.5 p-3";

  return (
    <div className="pointer-events-auto absolute inset-0 z-0 flex items-center justify-center p-6">
      <div className={`grid w-full ${width} ${columns} ${gap} rounded-[1.5rem] border border-teal/20 bg-white/88 shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-sm`}>
        {families.flatMap((family, row) =>
          family.map((name, col) => {
            const index = row * family.length + col;
            return (
              <div
                key={`${row}-${name}`}
                className="group flex aspect-square min-h-[48px] flex-col items-center justify-center rounded-md border border-border/70 bg-background/95 px-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:border-teal/30 hover:text-foreground"
                style={{
                  boxShadow: `inset 0 0 0 1px ${FAMILY_COLORS[row]}`,
                }}
              >
                <span className="text-[7px] font-bold text-teal/80">M{String(index).padStart(2, "0")}</span>
                <span className="mt-1 text-[8px] leading-none">{name}</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
