import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GitBranch,
  MessageCircle,
  Newspaper,
  Shield,
  Workflow,
} from "lucide-react";

import { CopyableCode } from "@/components/CopyableCode";
import { Footer } from "@/components/Footer";
import { HeroWireframe } from "@/components/HeroWireframe";
import { Navbar } from "@/components/Navbar";
import { PhiC } from "@/components/PhiC";

export const metadata = {
  title: "Agentes IA — BRIK64",
  description:
    "Guía de integración de agentes IA con matriz de configuración, circuitos de política, bucle de diagnóstico y fronteras explícitas de no-confianza por defecto.",
};

const agents = [
  {
    name: "Claude Code",
    company: "Anthropic",
    command: 'claude "read the brik64-pcd-system skill and lift my auth.js to PCD"',
    prompt: "Lift my authentication module to PCD and emit review-ready output.",
  },
  {
    name: "Codex",
    company: "OpenAI",
    command: 'codex --skill brik64-pcd-system "lift this function to PCD"',
    prompt: "Lift this function to a bounded PCD blueprint and show diagnostics.",
  },
  {
    name: "Gemini CLI",
    company: "Google",
    command: 'gemini "using the brik64 skill, certify my utils.py"',
    prompt: "Certify my Python utility functions with bounded domain checks.",
  },
  {
    name: "Grok",
    company: "xAI",
    command: 'grok --context https://brik64.com/ai-agents "lift my code to PCD"',
    prompt: "Use BRIK64 context to lift the computational core and keep the boundary explicit.",
  },
  {
    name: "OpenCode",
    company: "Open Source",
    command: 'opencode --skill brik64-pcd-system "export my PCD to Rust and Python"',
    prompt: "Emit target outputs from one normalized bounded blueprint.",
  },
] as const;

const workflowSteps = [
  {
    step: "01",
    title: "Descubrir",
    description:
      "Generar PCD candidato, lógica de política o salida de lifting acotada a partir de fuentes o prompts.",
  },
  {
    step: "02",
    title: "Verificar",
    description:
      "Ejecutar circuitos de política y validación del compilador fuera del modelo antes de proceder con la rama.",
  },
  {
    step: "03",
    title: "Diagnosticar",
    description:
      "Utilizar diagnósticos estructurados para reparar la rama en lugar de adivinar qué suposición falló.",
  },
  {
    step: "04",
    title: "Ejecutar / Publicar",
    description:
      "Solo las ramas aceptadas avanzan hacia el CLI, la plataforma, el registro o el flujo empresarial.",
  },
] as const;

const community = [
  {
    icon: MessageCircle,
    title: "Discord",
    description: "Soporte para operadores, resolución de problemas y intercambio de circuitos.",
    href: "https://discord.gg/brik64",
    external: true,
  },
  {
    icon: GitBranch,
    title: "GitHub",
    description: "Código fuente, incidencias, skills y rutas de contribución.",
    href: "https://github.com/brik64",
    external: true,
  },
  {
    icon: BookOpen,
    title: "Documentación",
    description: "Material de referencia para CLI, PCD y flujos de verificación.",
    href: "https://docs.brik64.dev",
    external: true,
  },
  {
    icon: Newspaper,
    title: "Seguridad IA",
    description: "Tesis sobre la integración de la verificación externa en el flujo de IA.",
    href: "/use-cases/ai-safety",
    external: false,
  },
] as const;

const referencePoints = [
  "PCD — Printed Circuit Description, la capa de blueprint revisable.",
  "Monómeros — operaciones acotadas compuestas en circuitos explícitos.",
  "Álgebra EVA — reglas de composición secuencial, paralela y condicional.",
  "Circuitos de política — puertas legibles por máquina externas a los pesos del modelo.",
  "Diagnósticos estructurados — razones de rechazo explícitas para bucles de reparación.",
] as const;

const assessment = {
  value: [
    "Tratar la salida del agente como lógica candidata, no como verdad final.",
    "Mantener la verificación fuera del modelo para una ruta de aprobación inspeccionable.",
    "Utilizar la misma ruta CLI-a-plataforma que el trabajo de autoría humana.",
    "Llevar la política, los diagnósticos y el estado de publicación como metadatos del blueprint.",
  ],
  limitations: [
    "Sin confianza por defecto: el modelo no es la fuente de la prueba.",
    "La clausura total se aplica solo al circuito modelado y dominios declarados.",
    "El runtime y la infraestructura permanecen fuera del objeto de prueba.",
    "El hardware BPU sigue siendo trabajo de roadmap, no infraestructura actual.",
  ],
} as const;

export default function AIAgentsPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 bg-background">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
          <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-teal/[0.10] via-background to-background">
            <HeroWireframe />
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
              <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
                Agentes IA
              </span>
              <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                La IA puede producir lógica candidata.{" "}
                <span className="text-teal">La capa formal decide qué se puede confiar.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                BRIK-64 no le pide que confíe en el modelo. Otorga a la salida del agente un lenguaje formal, un blueprint canónico y un bucle de verificación externa antes de cualquier ejecución o publicación.
              </p>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Flujo</p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                    descubrir → verificar → ejecutar
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    La salida candidata se mueve a través de un bucle de operador visible antes de ser autorizada.
                  </p>
                </div>
                <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Punto de control</p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">circuitos de política</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    La lógica de aprobación permanece legible por máquina y externa a los pesos del modelo.
                  </p>
                </div>
                <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Frontera</p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">Sin confianza por defecto</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    La verificación se mantiene externa al modelo y visible para el equipo de ingeniería.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
            <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">Cómo funciona</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {workflowSteps.map((item) => (
                <article key={item.step} className="border border-border bg-muted/10 p-6 text-center">
                  <div className="text-3xl font-bold text-teal">{item.step}</div>
                  <h3 className="mt-3 text-sm font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
            <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">Matriz de configuración de agentes</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
              Recupere la ruta real del operador: un comando, una forma de prompt, un blueprint explícito y un bucle de revisión.
            </p>
            <div className="mx-auto mt-10 max-w-4xl space-y-4">
              {agents.map((agent) => (
                <article key={agent.name} className="border border-border bg-muted/10 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold">{agent.name}</h3>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{agent.company}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
                      <Workflow className="h-3.5 w-3.5" /> Verificación externa requerida
                    </span>
                  </div>
                  <pre className="mt-4 overflow-x-auto rounded-md bg-[#0a0e14] px-4 py-3 text-xs text-gray-300">
                    <code>{agent.command}</code>
                  </pre>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Ejemplo de prompt: “{agent.prompt}”
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
            <div className="mx-auto max-w-4xl rounded-3xl border border-teal/30 bg-teal/[0.04] p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-teal">Referencia legible por máquina</p>
              <div className="mt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Conceptos clave</h3>
                <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                  {referencePoints.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Ejemplo de sintaxis PCD</h3>
                <div className="mt-2">
                  <CopyableCode>{`circuit suma_de_dos(x: i64, y: i64) -> i64 {
  resultado = ADD(x, y);
  return resultado;
}
// El estado de revisión se verifica externamente bajo dominios declarados`}</CopyableCode>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Cómo extraer código (lifting)</h3>
                <ol className="mt-2 list-inside list-decimal space-y-1.5 text-xs text-muted-foreground">
                  <li>Instalar la skill relevante para el agente.</li>
                  <li>Apuntar al agente hacia un archivo, directorio o repositorio.</li>
                  <li>Generar blueprints candidatos acotados o lógica de política.</li>
                  <li>Ejecutar verificaciones del compilador e inspeccionar diagnósticos.</li>
                  <li>Publicar ramas aceptadas a través del CLI y el flujo de plataforma.</li>
                </ol>
              </div>
              <div className="mt-6 rounded-2xl border border-border/70 bg-background/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Nota de frontera</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <PhiC /> = 1 y los estados de verificación relacionados se aplican al circuito modelado bajo dominios declarados.
                  No hacen que el modelo subyacente, el runtime o la organización sean confiables por defecto.
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
            <div className="mx-auto max-w-4xl rounded-3xl border border-teal/30 bg-teal/[0.04] p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-teal">Resumen de evaluación de plataforma</p>
              <h3 className="mt-2 text-lg font-bold text-foreground">Lo que esta página puede afirmar responsablemente</h3>
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Propuestas de valor</h4>
                <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                  {assessment.value.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Limitaciones honestas</h4>
                <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                  {assessment.limitations.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-16 md:px-12 lg:px-18">
            <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">Comunidad y rutas de referencia</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {community.map((item) => {
                const body = (
                  <>
                    <item.icon className="mb-4 h-6 w-6 text-teal" />
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </>
                );

                return item.external ? (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border bg-muted/10 p-6 transition-colors hover:border-teal/40 hover:bg-teal/[0.03]"
                  >
                    {body}
                  </a>
                ) : (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="border border-border bg-muted/10 p-6 transition-colors hover:border-teal/40 hover:bg-teal/[0.03]"
                  >
                    {body}
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="mx-auto max-w-7xl border-x border-t border-border px-6 py-20 text-center md:px-12 lg:px-18">
            <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
              Comience con el bucle del operador, no con el teatro del modelo.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Instale la CLI, inspeccione el flujo de seguridad de IA o abra la documentación que define la frontera de integración actual.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/use-cases/ai-safety"
                className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
              >
                Revisar flujo de seguridad IA
              </Link>
              <Link
                href="/cli"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Instalar CLI <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="https://docs.brik64.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Abrir docs <Shield className="h-3.5 w-3.5" />
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
