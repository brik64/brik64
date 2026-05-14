"use client";

import { UtilityPageView, type UtilityPageSpec } from "@/components/PageArchetypes";

const registryPage: UtilityPageSpec = {
  hero: {
    eyebrow: "Registro de Componentes",
    title: "Blueprints acotados con",
    highlight: "estado verificable.",
    backgroundImageSrc: "/generated/registry-hero-bg.png",
    description: "El Registro de BRIK-64 constituye un libro de contabilidad de evidencia técnica sobre la clausura computacional. Mantenemos huellas digitales inmutables, notas de frontera y estados de certificación formal para cada Monómero y Blueprint, asegurando que la confianza sea una propiedad técnica calculable y no una promesa comercial.",
    actions: [
      { label: "Buscar en el Registro", href: "https://registry.brik64.com", external: true, tone: "primary" },
      { label: "Referencia CLI", href: "/cli", tone: "secondary" },
    ],
    metrics: [
      { label: "Identidad", value: "SHA-256", detail: "Vínculo inmutable entre la fuente PCD y los objetivos binarios." },
      { label: "Integridad", value: "Libro de Estados", detail: "Seguimiento en tiempo real de la postura de prueba frente al consumo de artefactos." },
      { label: "Clausura", value: "ΦC = 1", detail: "Marcado explícito de circuitos computacionales totalmente cerrados y verificados." },
    ],
  },
  sectionHeader: {
    eyebrow: "Protocolo de Registro",
    title: "La integridad no se asume. Se mide.",
    description: "Cada artefacto en el registro porta su propio historial de diagnóstico y estado de verificación, transformando la confianza en una propiedad auditable y reproducible por cualquier operador del sistema."
  },
  primarySurface: {
    eyebrow: "Estados de Verificación",
    title: "Semántica formal para la reutilización segura.",
    description: "Sustituimos el concepto de 'última versión' por el de 'versión verificada'. Las insignias del registro exponen la postura de prueba real de un componente, permitiendo a los consumidores comprender los límites exactos de la frontera de confianza.",
    rows: [
      { title: "CERTIFICADO", body: "Estado de prueba de clausura total (ΦC = 1). El circuito modelado cumple con todas las restricciones formales.", note: "PhiC = 1" },
      { title: "VERIFICADO", body: "Lógica parcialmente acotada con notas de frontera explícitas y diagnósticos adjuntos.", note: "Acotado" },
      { title: "RECHAZADO", body: "Discrepancia de evidencia o fallo en las restricciones. Reutilización bloqueada por política de plataforma.", note: "Inseguro" },
    ],
    statusLabel: "estados respaldados por evidencia",
    statusTone: "teal",
  },
  secondarySurface: {
    eyebrow: "Ciclo de Vida PCD",
    title: "El camino hacia la lógica lista para producción.",
    description: "La transición desde código candidato hacia un artefacto de registro certificado requiere una secuencia estricta de puertas de enlace formales y evidencia verificable.",
    kind: "action",
    channels: [
      { title: "01. Extracción y Chequeo", body: "Transformación de fuente a PCD y ejecución de circuitos de diagnóstico brikc.", action: "Espec. PCD", href: "/pcd" },
      { title: "02. Certificación", body: "Ejecución de solvers formales para establecer el estado ΦC = 1 o de verificación acotada.", action: "Documentación", href: "/docs" },
      { title: "03. Distribución", body: "Publicación con evidencia adjunta en el libro de descubrimiento global.", action: "Buscar Registro", href: "https://registry.brik64.com", external: true },
    ],
    footer: "Cada transición de estado requiere una actualización de prueba explícita.",
    statusLabel: "bucle certificado",
    statusTone: "neutral",
  },
  cta: {
    title: "Escala tus circuitos verificados.",
    description: "Valida un flujo de trabajo acotado y publica con su estado formal visible para toda la red.",
    actions: [
      { label: "Instalar CLI", href: "/cli", tone: "primary" },
      { label: "Visión General", href: "/platform", tone: "link" },
    ]
  }
};

export default function RegistryPage() {
  return <UtilityPageView page={registryPage} />;
}
