# BRIK-64 — Evaluacion Tecnica para el Architecture Review Board

> Perspectiva: CTO / VP Engineering
> Audiencia: Tech leads, ingenieros senior, comite de arquitectura
> Fecha: 2026-03-27

---

## 1. Arquitectura: Vision General

### PCD — Un lenguaje de esquemas, no un lenguaje de scripting

PCD (Printed Circuit Description) es un lenguaje formal de descripcion de circuitos. Un programa PCD no "instruye a un procesador" — describe un circuito cerrado donde cada entrada tiene un dominio acotado y cada salida esta demostrada.

```pcd
PC flight_controller {
    domain speed: Range [0, 900];
    domain altitude: Range [0, 15000];

    fn calculate_eta(distance, speed) {
        return distance / speed;
    }

    let eta = calculate_eta(500, speed);
    OUTPUT eta;
}
```

El compilador rechaza este programa si `speed` puede ser 0 (division por cero abre el circuito). No hay warning — no compila.

### 128 Monomeros: Dos Tiers

La base computacional son 128 operaciones atomicas organizadas en 8 familias x 8 operaciones x 2 tiers:

| Tier | Rango | Cantidad | Verificacion | Ejemplo |
|------|-------|----------|-------------|---------|
| **Core** | MC_00 -- MC_63 | 64 | Prueba formal en Coq (Phi_c = 1) | ADD8, HASH, IF, CONCAT |
| **Extended** | MC_64 -- MC_127 | 64 | Contrato con bounds-checking, 0 panic | FADD, SIN, TCP_CONN, SPAWN |

Las 8 familias Core:

| Familia | Rango | Operaciones |
|---------|-------|------------|
| Arithmetic | MC_00--07 | ADD8, SUB8, MUL8, DIV8, INC, DEC, MOD, NEG |
| Logic | MC_08--15 | AND8, OR8, XOR8, NOT8, SHL, SHR, ROTL, ROTR |
| Memory | MC_16--23 | LOAD, STORE, ALLOC, FREE, COPY, SWAP, CAS, FENCE |
| Control | MC_24--31 | IF, JUMP, CALL, RET, LOOP, BREAK, CONT, HALT |
| I/O | MC_32--39 | READ, WRITE, OPEN, CLOSE, SEEK, STAT, POLL, FLUSH |
| String | MC_40--47 | CONCAT, SPLIT, SUBSTR, LEN, UPPER, CHAR_AT, TRIM, MATCH |
| Crypto | MC_48--55 | HASH, HMAC, AES_ENC, AES_DEC, SHA256, RAND, SIGN, VERIFY |
| System | MC_56--63 | TIME, SLEEP, ENV, EXIT, PID, SIGNAL, MMAP, SYSINFO |

Las 8 familias Extended cubren: Float64, Math, Network, Graphics, Audio, Filesystem, Concurrency e Interop/FFI.

**Invariante critico:** los monomeros Core mantienen su prueba formal independientemente de los Extended que los rodeen. La frontera se aplica estaticamente en cada call site. Resultados Extended que entran en logica Core deben pasar un boundary de validacion tipado.

### Algebra EVA: Composicion con preservacion de correctitud

EVA define tres operadores de composicion:

| Operador | Simbolo | Semantica |
|----------|---------|-----------|
| Secuencial | `circuito_a` | Ejecutar A, luego B con la salida de A |
| Paralelo | `a \|\| b` | Ejecutar A y B independientemente |
| Condicional | `a (+) b` | Si condicion, ejecutar A; sino, B |

La propiedad fundamental: si A tiene Phi_c = 1 y B tiene Phi_c = 1, entonces `A (+) B`, `A || B` y la composicion secuencial de A y B tambien tienen Phi_c = 1. Esto esta demostrado en Coq. La verificacion es **composicional** — no hay explosion combinatoria del espacio de pruebas.

### CMF (Coherence Metric Framework)

El compilador computa tres metricas para cada programa:

| Metrica | Simbolo | Requisito | Significado |
|---------|---------|-----------|-------------|
| Circuit Closure | Phi_c | = 1.000 | Cada rama tiene un camino completo entrada -> salida |
| Entropy Delta | delta_N | = 0.000 | Cero perdida o fuga de informacion |
| Morphological Coherence | C_m | = 1.000 | Composicion limpia via algebra EVA |

**Omega = 1** (certificacion completa) requiere las tres simultaneamente. No existe Omega = 0.9. Si alguna metrica falla, el programa no compila.

---

## 2. El Compilador (`brikc`)

### Caracteristicas del binario

- **708 KB** ELF x86-64 standalone — sin runtime de Rust, sin dependencia de libc
- Es a su vez un programa BRIK-64 certificado (compilado desde `brikc.pcd`)
- **Self-compilation fixpoint:** 4 generaciones consecutivas de auto-compilacion producen el mismo hash SHA-256: `7229cfcde9613de42eda4dd207da3bac80d2bf2b5f778f3270c2321e8e489e95`

```bash
brikc --version
# brikc v4.0.0-beta.2 (fixpoint: 7229cfcde9...)

brikc check --self
# Check: Self-compilation fixpoint verified
# Check: Hash: 7229cfcde9613de42eda4dd207da3bac80d2bf2b5f778f3270c2321e8e489e95
```

### Compilacion: PCD a 14 targets

```bash
brikc compile src/main.pcd --target rs      # Rust
brikc compile src/main.pcd --target js      # JavaScript ES2022
brikc compile src/main.pcd --target py      # Python 3.10+
brikc compile src/main.pcd --target c       # C
brikc compile src/main.pcd --target cpp     # C++
brikc compile src/main.pcd --target go      # Go
brikc compile src/main.pcd --target cobol   # COBOL
brikc compile src/main.pcd --target php     # PHP
brikc compile src/main.pcd --target java    # Java
brikc compile src/main.pcd --target swift   # Swift
brikc compile src/main.pcd --target wasm32  # WebAssembly
brikc compile src/main.pcd --target bir     # BIR bytecode
brikc compile src/main.pcd --target native  # x86-64 ELF
brikc compile src/main.pcd --target typescript # TypeScript
```

El codigo generado hereda la certificacion Phi_c = 1 del fuente PCD. No requiere runtime BRIK-64 en el destino.

### Lifter: De 10 lenguajes a PCD

El Lifter es un compilador inverso que analiza codigo existente y extrae el subconjunto mapeadle a monomeros PCD:

```bash
brikc lift app.js -o app.pcd           # JavaScript
brikc lift script.py -o script.pcd     # Python
brikc lift lib.rs -o lib.pcd           # Rust
brikc lift main.c -o main.pcd          # C/C++
brikc lift server.go -o server.pcd     # Go
brikc lift PAYROLL.cob -o payroll.pcd  # COBOL
brikc lift App.tsx -o app.pcd          # TSX/JSX
brikc lift handler.php -o handler.pcd  # PHP
brikc lift Main.java -o main.pcd      # Java
```

**Pipeline:** Source -> AST -> Pattern Recognition -> Monomer Mapping -> SSA Transform -> PCD Output

**Resultado probado:** 100% de liftability en 211/211 archivos reales de 2 proyectos de produccion, 73/73 circuitos pasando `brikc check`.

Cada archivo lifted recibe un **liftability score** (0.0 a 1.0) que indica el porcentaje del codigo fuente mapeado a monomeros. Se puede filtrar con `--min-liftability 0.5`.

### Transpiler Universal: N x M a traves de un unico IR

El modelo clasico de transpilacion es 1-a-1 (TypeScript -> JavaScript, etc.). BRIK-64 usa PCD como IR universal:

```
10 frontends + 14 backends = 140 rutas de transpilacion
Con esfuerzo N+M en lugar de N x M
```

```bash
brikc transpile ./src/ --to rust --output ./dist/
```

Pipeline de 5 pasos: SCAN -> LIFT -> CHECK (Phi_c) -> BUILD -> REPORT.

Analogia precisa: LLVM proporciona una IR comun para optimizacion. PCD proporciona una IR comun **con prueba de equivalencia formal**. La diferencia es que LLVM optimiza pero no prueba equivalencia; BRIK-64 certifica que el output es semanticamente equivalente al input.

### Auto-generacion de tests desde pruebas formales

```bash
brikc compile src/main.pcd --target rs --emit-tests
# build/main.rs          <- implementacion certificada
# build/main_spec.rs     <- test suite completa, auto-generada desde la prueba
```

Los tests se generan **desde la prueba formal**, no escritos a mano. Incluyen property tests, boundary tests, composition tests y regression anchors. Tu pipeline de CI recibe codigo correcto + suite de tests completa + anchors de regresion.

---

## 3. Rutas de Integracion

### SDKs nativos

| Lenguaje | Paquete | Registry |
|----------|---------|----------|
| Rust | `brik64-core` | crates.io |
| JS/TS | `@brik64/core` | npm |
| Python | `brik64` | PyPI |

**Ejemplo en Rust:**

```rust
use brik64_core::{mc, eva};

// Operacion atomica verificada
let sum = mc::arithmetic::add8(200, 100);    // 255 (saturating)
let (q, r) = mc::arithmetic::div8(17, 5);   // (3, 2)

// Composicion EVA — Phi_c = 1 para toda la pipeline
let pipeline = eva::seq(
    |x| mc::arithmetic::add8(x, 10),
    |x| mc::arithmetic::mul8(x, 2),
);
```

**Ejemplo en TypeScript:**

```typescript
import { mc, eva } from '@brik64/core';

const pipeline = eva.seq(
  (x: number) => mc.add8(x, 10),
  (x: number) => mc.mod8(x, 7)
);
console.log(pipeline(250)); // Phi_c = 1
```

**Nota importante:** usar los SDKs directamente da la **disciplina** de Digital Circuitality (operaciones finitas, composicion explicita, comportamiento determinista) pero **no produce certificacion formal**. Para Phi_c verificable se requiere el pipeline PCD completo: escribir en PCD o hacer lift, verificar con `brikc check`, compilar con `brikc compile`.

### MCP Server para agentes de IA

```bash
brikc mcp-server                            # stdio (default)
brikc mcp-server --transport sse --port 3100  # SSE
```

Expone 2 tools:
- **brik64.discover** — buscar circuitos, explorar catalogo de 128 monomeros (read-only)
- **brik64.execute** — publicar, verificar, certificar circuitos (write)

Configuracion para Claude Code (`~/.claude.json`):

```json
{
  "mcpServers": {
    "brik64": {
      "command": "brikc",
      "args": ["mcp-server"],
      "env": { "BRIK64_API_KEY": "brik_live_xxx" }
    }
  }
}
```

Compatible con Claude Code, Cursor y Windsurf.

### REST API — Registry

Base URL: `https://registry.brik64.dev/v1`

| Endpoint | Descripcion |
|----------|-------------|
| `GET /v1/catalog` | 128 monomeros con firmas y documentacion |
| `GET /v1/catalog/:mc_code` | Detalle de un monomero (dominio, prueba Coq) |
| `POST /v1/circuits` | Publicar circuito PCD |
| `POST /v1/circuits/:pid/certify` | Enviar a certificacion TCE |
| `GET /v1/circuits/:pid/artifacts/:target` | Descargar artefacto compilado |

Free tier: 10 publishes/dia, 10 certificaciones/dia, 100 descargas/dia.

### Drop-in: No necesitas reescribir

El flujo de adopcion no requiere reescritura:

```bash
# 1. Lift tu codigo existente a PCD
brikc lift ./src/ -o ./pcd/

# 2. Verificar cierre de circuito
brikc check ./pcd/*.pcd

# 3. Compilar de vuelta al lenguaje original (u otro)
brikc transpile ./pcd/ --to rust --output ./dist/

# 4. Ejecutar con tests auto-generados
brikc compile ./pcd/main.pcd --target rs --emit-tests
cd dist && cargo test
```

---

## 4. Diferenciacion Tecnica: Por que esto no es lo que ya existe

### vs TypeScript / MyPy (Type Safety)

Type safety verifica **formas**, no **semantica**. TypeScript te garantiza que `add(a: number, b: number): number` recibe y devuelve numeros. No te garantiza que el resultado este dentro de un rango valido, que no haya overflow, ni que la funcion termine. BRIK-64 verifica **correctitud semantica completa**: dominio, rango, postcondiciones y terminacion.

### vs Metodos Formales (TLA+, Alloy, Isabelle)

TLA+ y Alloy verifican **especificaciones** — modelos abstractos del sistema. No verifican el codigo ejecutable. Existe un gap entre la especificacion verificada y la implementacion real.

BRIK-64 verifica **el output compilado**. La prueba formal viaja con el codigo generado. Cuando compilas PCD a Rust, el `.rs` resultante hereda la certificacion Phi_c = 1 del fuente PCD.

### vs LLVM

LLVM proporciona una IR comun para optimizacion multi-target. BRIK-64 proporciona una IR comun (PCD) con **certificacion de equivalencia formal**. LLVM optimiza pero no prueba que el output sea semanticamente equivalente al input. brikc lo prueba.

### vs Testing

> "Testing shows the presence of bugs, never their absence." — Dijkstra

Un test suite con 15,000 tests verifica 15,000 caminos. Phi_c = 1 verifica **todos los caminos posibles** — no por enumeracion, sino por construccion estructural. La prueba es composicional: si cada monomero esta verificado y los operadores EVA preservan la verificacion, cualquier programa BRIK-64 valido de cualquier tamano esta verificado.

---

## 5. Sistema de Certificacion de Dos Tiers

### BRIK-64 Certified (Omega = 1)

- Solo monomeros Core (MC_00 -- MC_63)
- Cadena completa de pruebas Coq
- Phi_c = 1.000, delta_N = 0.000, C_m = 1.000
- El compilador rechaza cualquier programa que no cumpla las tres metricas simultaneamente
- Certificado criptografico publicado en el registry con Merkle proof

```json
{
  "tce": { "phi_c": 1.000, "delta_n": 0.000, "c_m": 1.000, "omega": 1 },
  "badge_type": "certified",
  "public_hash": "sha256:beb2c1c6634b...",
  "merkle_proof": { "registry": "registry.brik64.dev", "certified": true }
}
```

### BRIK-64 Open

- Mezcla de Core + Extended
- Muestra porcentaje verificado (e.g., "BRIK-64 Open 84%")
- Core logic mantiene Phi_c = 1; Extended opera bajo CONTRACT closure

```bash
brikc compile src/server.pcd --open   # BRIK-64 Open 84%
```

### CONTRACT closure para Extended

Los monomeros Extended (MC_64 -- MC_127) operan bajo contratos declarados:
- Bounds-checking en todas las entradas
- 0 rutas de panic garantizadas (devuelven `DomainViolation` en lugar de abortar)
- Sin prueba formal Coq — no se afirma equivalencia matematica, sino cumplimiento de contrato

### Badges como endpoints live

| Badge | Condicion |
|-------|-----------|
| BRIK-64 CERTIFIED (verde) | Hash en registry, Omega = 1 |
| BRIK-64 OPEN 78% (azul) | Hash en registry, Core + Extended |
| UNVERIFIED (gris) | Sin certificacion |
| INVALID (rojo) | Hash mismatch — codigo modificado post-certificacion |
| REVOKED (rojo) | Certificado revocado |

El badge es un endpoint REST live. Si el binario desplegado difiere del certificado en un solo byte, el badge se vuelve INVALID automaticamente.

### Comparacion con estandares existentes

| Estandar | Que certifica |
|----------|--------------|
| ISO 26262 (automotive) | "Seguimos el proceso" |
| DO-178C (avionica) | "Ejecutamos los tests" |
| Common Criteria EAL7 | "Evaluamos el diseno" |
| **BRIK-64 Certified** | **"Programas incorrectos no pueden compilar"** |

Los otros certifican el proceso. BRIK-64 certifica el objeto.

---

## 6. Policy Circuits para AI Safety

### El problema

Cuando un modelo de IA genera una accion (escribir archivo, enviar request HTTP, mover un brazo robotico), ningun componente de hardware evalua si esa accion deberia permitirse. El software puede ser parcheado, bypasseado, o comprometido.

### La solucion: Policy Circuits

Un Policy Circuit es un programa PCD compuesto exclusivamente de monomeros Core que evalua un descriptor de accion y retorna exactamente `ALLOW` o `BLOCK`:

```pcd
policy check_file_write(path: string, agent_id: string) -> decision {
    let allowed_prefix = "/tmp/";
    let is_safe_path = MC_40.FIND(path, allowed_prefix);
    let is_known_agent = MC_40.FIND(agent_id, "verified:");

    if (is_safe_path == 0) { return BLOCK; }
    if (is_known_agent == 0) { return BLOCK; }
    return ALLOW;
}
```

**Propiedad formal:** Phi_c = 1 implica que para todo input en el dominio del circuito, el output es `ALLOW` o `BLOCK`. No existe input que produzca comportamiento indefinido.

### Ejemplos reales

**Robots de almacen:**

```pcd
policy warehouse_movement(zone_id: i64, speed: i64, area_type: i64) -> decision {
    if (zone_id < 1) { return BLOCK; }
    if (zone_id > 50) { return BLOCK; }
    if (area_type == 2) {           // zona humana
        if (speed > 3) { return BLOCK; }
    }
    if (area_type == 9) { return BLOCK; }  // area restringida
    return ALLOW;
}
```

**Drones de entrega con geofencing:**

```pcd
policy drone_flight(altitude: i64, lat_zone: i64, battery_pct: i64) -> decision {
    if (altitude > 400) { return BLOCK; }        // limite FAA
    if (lat_zone > 99) { return BLOCK; }          // no-fly zones
    if (battery_pct < 20) { return BLOCK; }       // return-to-base
    return ALLOW;
}
```

**Trading financiero:**

```pcd
policy trade_check(amount: i64, daily_total: i64, max_daily: i64) -> decision {
    let new_total = MC_00.ADD8(daily_total, amount);
    if (new_total > max_daily) { return BLOCK; }
    if (amount > 100000) { return BLOCK; }        // limite por operacion
    return ALLOW;
}
```

### Enforcement en hardware (BPU)

La progresion de enforcement:

| Fase | Mecanismo | Bypasseable |
|------|-----------|-------------|
| Hoy (software) | PCD policy circuit en CPU estandar | Si, con acceso al proceso |
| Phase 2 (FPGA) | Policy circuit en BPU sintetizado en FPGA | No desde software |
| Phase 3 (ASIC) | Policy circuit en silicio custom, BLOCK no-maskable | No — fisicamente imposible |

La IA no puede parchear sus propias restricciones porque las restricciones estan en silicio, no en memoria.

---

## 7. Evaluacion del Roadmap

### Que esta shipping ahora (v4.0.0-beta.2)

| Entregable | Estado |
|-----------|--------|
| 64 Core Monomers con pruebas Coq | Completo |
| 64 Extended Monomers con bounds-checking | Completo |
| EVA Algebra (secuencial, paralelo, condicional) | Completo |
| TCE con metricas Phi_c, delta_N, C_m, Omega | Completo |
| Self-hosting fixpoint (4 generaciones, hash identico) | Completo |
| Binario nativo x86-64 ELF (708 KB, standalone) | Completo |
| 14 targets de compilacion | Completo |
| Lifter con 10 frontends (100% liftability probada) | Completo |
| Transpiler universal (140 rutas) | Completo |
| SDKs: Rust, JS/TS, Python | Completo |
| MCP server | Completo |
| 15,424 tests, 16 suites | Completo |
| `--emit-tests` (auto-generacion de tests) | Completo |

### Que esta planificado

| Version | Timeline | Entregable clave |
|---------|----------|-----------------|
| v5.0.0 | Q2 2026 | Certification Registry, Circuit Packages, `brikc publish` |
| v6.0.0 | Q2 2027 | ARM64 + RISC-V backends, bare-metal targets |
| v7.0.0 | 2027 | Package Manager completo |
| v8.0.0 | 2027 | Publicacion academica (Zenodo, arXiv, USPTO) |
| v9.0.0 | 2028 | BPU Hardware, ASIC tape-out, BLOCK no-maskable |

### Arquitectura del Registry (v5.0.0)

- Append-only, blockchain-anchored log de programas certificados
- Circuit Packages: como npm/crates.io, pero solo circuitos con Omega = 1 pueden publicarse
- El compilador verifica el hash de import contra el registry antes de cada build
- Badges live: endpoint REST que consulta el registry en tiempo real

```bash
# Publicar
brikc publish src/hash_pipeline.pcd --name brik64/hash-pipeline --version 1.0.0

# Importar en PCD
import { hash_pipeline } from "brik64/hash-pipeline@1.0.0";
```

### Camino a silicio (BPU)

| Fase | Target | Descripcion |
|------|--------|-------------|
| Phase 1 (ahora) | Software | Policy circuits como programas certificados en CPU estandar |
| Phase 2 (2027) | FPGA | BPU completo sintetizado en Xilinx/Intel FPGA |
| Phase 3 (2028) | ASIC | Silicio custom, BLOCK no-maskable a nivel de pin |
| Phase 4 (2029+) | Estandar | Ruta regulatoria: voluntario -> estandar -> obligatorio |

Arquitectura BPU: 64 Monomer Units (silicio hardwired) + EVA Router (enrutamiento por composicion) + CMF Unit (verificacion Phi_c a velocidad de reloj).

### Limitaciones actuales (transparencia)

| Pattern | Estado |
|---------|--------|
| Funciones puras, condicionales, loops | 100% |
| Acceso a arrays/objetos | ~80% |
| Clases con herencia | Parcial |
| async/await | No soportado aun |
| Generics/templates | No soportado aun |
| Reflection/metaprogramming | No planificado (incompatible con verificacion estatica) |
| Codigo dinamico generado en runtime | No planificado |

Benchmark honesto: 8/10 funciones utility de lodash transpilan y ejecutan correctamente.

Timeline de cobertura:
- L2 "Logic" (80%+ librerias utility): Q2 2026
- L3 "Systems" (95%+ codigo de libreria): Q3 2026
- L4 "Universal" (99%+ codigo de aplicacion): Q1 2027

---

## Recomendacion para adopcion

1. **Evaluacion inmediata (0 coste):** Instalar `brikc`, hacer lift de una funcion critica existente, verificar con `brikc check`, y evaluar el output.

2. **Integracion gradual:** Usar los SDKs (`@brik64/core`, `brik64-core`, `brik64`) en modulos criticos sin cambiar el stack.

3. **Adopcion formal:** Para modulos donde la correctitud es requisito regulatorio o de negocio, escribir en PCD, compilar al target requerido, y publicar en el registry cuando v5.0.0 este disponible.

```bash
# Evaluacion en 3 comandos
curl -fsSL https://brik64.dev/install | bash
brikc lift tu-funcion-critica.js -o circuit.pcd
brikc check circuit.pcd
```

Si Phi_c = 1 — el circuito esta cerrado. Si no — el compilador te dice exactamente donde se abre.
