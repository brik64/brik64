export type Monomer = {
  id: number;
  prefix: "MC" | "MX";
  name: string;
  family: string;
  signature: string;
};

const coreFamilies = [
  { family: "Arithmetic", names: ["ADD", "SUB", "MUL", "DIV", "MOD", "POW", "NEG", "ABS"] },
  { family: "Logic", names: ["AND", "OR", "XOR", "NOT", "SHL", "SHR", "ROL", "ROR"] },
  { family: "Memory", names: ["LOAD", "STORE", "ALLOC", "FREE", "COPY", "SWAP", "DUP", "DROP"] },
  { family: "Control", names: ["IF", "LOOP", "CALL", "RET", "JUMP", "HALT", "NOP", "ASSERT"] },
  { family: "I/O", names: ["READ", "WRITE", "OPEN", "CLOSE", "SEEK", "FLUSH", "STDIN", "STDOUT"] },
  { family: "String", names: ["STR", "CONCAT", "SPLIT", "TRIM", "UPPER", "LOWER", "LEN", "CHAR"] },
  { family: "Crypto", names: ["HASH", "ENC", "DEC", "SIGN", "VRFY", "RNG", "KDF", "HMAC"] },
  { family: "System", names: ["TIME", "ENV", "EXIT", "SPAWN", "WAIT", "SEND", "RECV", "LOG"] },
];

const extendedFamilies = [
  { family: "Float64", names: ["FADD", "FSUB", "FMUL", "FDIV", "FSQRT", "FSIN", "FCOS", "FTAN"] },
  { family: "Math", names: ["EXP", "LN", "LOG10", "ROUND", "FLOOR", "CEIL", "MIN", "MAX"] },
  { family: "Network", names: ["CONNECT", "LISTEN", "ACCEPT", "REQUEST", "RESPOND", "SOCKET", "BIND", "ROUTE"] },
  { family: "Graphics", names: ["PIXEL", "LINE", "RECT", "FILL", "BLIT", "SPRITE", "BUFFER", "FRAME"] },
  { family: "Audio", names: ["MIX", "GAIN", "FILTER", "FFT", "WAVE", "ENVELOPE", "PCM", "STREAM"] },
  { family: "Filesystem", names: ["MKDIR", "RMDIR", "STAT", "CHMOD", "COPYFILE", "MOVE", "DELETE", "WATCH"] },
  { family: "Concurrency", names: ["FORK", "JOIN", "LOCK", "UNLOCK", "CHANNEL", "SELECT", "BARRIER", "ATOMIC"] },
  { family: "Interop", names: ["FFI", "WASM", "SERDE", "PACK", "UNPACK", "HOST", "GUEST", "ABI"] },
];

function makeSignature(name: string, index: number) {
  if (index % 3 === 0) return "value → value";
  if (index % 3 === 1) return "lhs, rhs → value";
  return "input → output";
}

function makeMonomers(
  prefix: "MC" | "MX",
  startId: number,
  families: Array<{ family: string; names: string[] }>,
): Monomer[] {
  return families.flatMap((family, familyIndex) =>
    family.names.map((name, offset) => ({
      id: startId + familyIndex * 8 + offset,
      prefix,
      name,
      family: family.family,
      signature: makeSignature(name, offset),
    })),
  );
}

export const CORE_MONOMERS = makeMonomers("MC", 0, coreFamilies);
export const EXTENDED_MONOMERS = makeMonomers("MX", 64, extendedFamilies);
