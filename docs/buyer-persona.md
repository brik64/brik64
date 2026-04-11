# Buyer Persona

Este documento describe al buyer persona principal de `brik64.com` desde la
perspectiva editorial del sitio público. No intenta inventar mercado, tamaño de
audiencia ni métricas de adopción. Su función es dejar explícito a quién le
habla la web, qué necesita ver para confiar, y qué mensajes deben evitarse.

## Resumen Ejecutivo

El buyer persona principal de BRIK-64 es un perfil técnico senior:

- `Staff / Principal Engineer`
- `Platform Lead`

En términos de decisión y evaluación, este perfil suele actuar como:

- aprobador técnico
- diseñador de la arquitectura de integración
- guardián de la calidad de la plataforma
- evaluador de riesgos operativos y de mantenimiento
- influenciador directo en adopción interna

La web debe convencer a esta persona de una sola idea central: BRIK-64 no es
solo una herramienta de generación o compilación, sino un sistema con gramática
formal, trazabilidad y un camino explícito desde el plano hasta la publicación.

## Qué Está Tratando De Resolver

Este buyer persona normalmente no busca novedad estética. Busca reducir costo
de error y costo de coordinación.

Sus preguntas habituales son:

- ¿Cómo evito que la lógica crítica dependa de esperanza, intuición o prueba
  manual?
- ¿Cómo hago que mi equipo reuse componentes sin perder control semántico?
- ¿Cómo separo la intención formal del programa de su implementación en
  distintos targets?
- ¿Qué parte del sistema puedo auditar, verificar y volver a componer sin
  romper la base?
- ¿Qué pasa cuando el código cambia? ¿Qué se invalida? ¿Qué permanece
  certificado?

No está buscando un demo bonito por sí mismo. Está buscando evidencia de que el
modelo reduce incertidumbre real en un stack de ingeniería.

## Perfil Funcional

### Senioridad

Normalmente tiene suficiente seniority para entender arquitectura, tradeoffs y
fallos sistémicos:

- ha revisado sistemas complejos o ha liderado parte de ellos
- conoce el costo de las regresiones
- ha visto fallar herramientas que prometían más de lo que entregaban
- sabe distinguir claims de marketing de una capacidad operativa real

### Contexto de Trabajo

Suele moverse entre estas responsabilidades:

- diseño de plataforma o arquitectura interna
- standards y contracts entre equipos
- tooling compartido para ingeniería
- gobernanza del cambio y reducción de deuda técnica
- evaluación de tecnologías para uso amplio dentro de la organización

### Horizonte de Decisión

Su decisión no suele ser instantánea. Evalúa:

- claridad del modelo mental
- compatibilidad con flujos existentes
- esfuerzo de adopción
- verificabilidad del resultado
- capacidad de adopción incremental
- riesgo de lock-in conceptual o técnico

## Qué Valora

### 1. Estructura explícita

Quiere ver el sistema como algo que puede descomponerse y revisarse. La idea de
gramática formal importa porque reduce ambigüedad.

Señales que le convencen:

- objetos y términos bien definidos
- composición visible
- límites de dominio claros
- pipeline legible
- estados observables

### 2. Trazabilidad

Necesita saber de dónde sale cada afirmación y cómo se conecta con el resto del
sistema.

Le interesa:

- qué se verifica
- qué se compila
- qué se publica
- qué se certifica
- qué se invalida al cambiar el input

### 3. Determinismo operativo

Valora sistemas donde el comportamiento no dependa de interpretaciones
imprecisas.

Busca:

- input y output predecibles
- reglas explícitas
- reproducibilidad
- invalidación clara al cambiar el artefacto base

### 4. Reutilización segura

Le importa reutilizar sin arrastrar deuda. Un sistema de componentes solo es
útil si conservar el uso no rompe la confianza en el resultado.

Por eso responde bien a:

- bibliotecas personales
- registry público
- certificación visible
- composición con límites claros

### 5. Alineación organizacional

Un perfil senior no compra solo por feature. Compra si puede explicar el valor
al resto del equipo y si el sistema cabe en una práctica de ingeniería seria.

## Qué Le Genera Desconfianza

### Claims demasiado amplios

Este perfil desconfía de frases que prometen demasiado sin prueba verificable.

Ejemplos de lenguaje que lo aleja:

- "zero defects" sin contexto
- "works for everything"
- "completely automatic"
- "no debugging ever"
- "world-leading" sin evidencia

### Tooling sin contrato

Si la herramienta no define bien su semántica, el buyer persona lo interpreta
como riesgo operativo. Un editor visual o un CLI solo sirven si preservan
significado.

### Certificación como marketing

Si la certificación aparece como adorno y no como parte del flujo de
verificación, pierde credibilidad. La persona técnica espera que la certificación
sea un resultado del sistema, no una etiqueta decorativa.

## Fricciones Típicas

### Fricción 1. Cambio de modelo mental

El principal costo de adopción no es instalar la herramienta. Es adoptar una
gramática distinta para pensar el software.

La web debe ayudar a responder:

- qué es PCD
- cómo se compone
- cómo se valida
- cómo se publica
- cómo se reutiliza

### Fricción 2. Integración con el stack existente

No quiere un universo aislado. Quiere entender:

- cómo entra al flujo actual
- qué reemplaza
- qué complementa
- qué requiere de forma obligatoria
- qué puede adoptar por etapas

### Fricción 3. Prueba de valor

Necesita ver una secuencia clara:

1. entiendo el sistema
2. veo una aplicación concreta
3. veo cómo se compone
4. veo cómo se verifica
5. veo cómo se reutiliza
6. veo cómo se publica o certifica

Si uno de esos pasos falta, la propuesta se siente incompleta.

## Mapa De Motivaciones

### Motivaciones explícitas

- reducir riesgo de regresión
- hacer más legible la arquitectura
- reutilizar piezas verificadas
- elevar el estándar del equipo
- reducir deuda técnica estructural
- mejorar la confianza en la entrega

### Motivaciones implícitas

- tener más control sobre sistemas complejos
- evitar dependencia exclusiva de testing manual
- construir una base que otros equipos puedan adoptar
- reducir la fricción entre diseño formal e implementación

### Motivaciones negativas que también influyen

- evitar herramientas que producen ilusión de rigor
- evitar plataformas que no escalan en gobernanza
- evitar ecosistemas donde la semántica cambia según contexto

## Qué Mensaje Le Funciona

El mensaje debe ser corto, técnico y verificable.

Las formulaciones que mejor encajan con este perfil son del tipo:

- plataforma para software verificado
- composición formal con trazabilidad
- gramática explícita para construir, verificar y publicar
- del plano al artefacto con estados observables
- reutilización de componentes certificados

Le funciona el lenguaje que presenta el sistema como infraestructura y no como
simple productividad.

## Qué Mensaje No Le Funciona

No conecta con:

- slogans vacíos
- comparaciones sin límite
- promesas absolutas
- lenguaje puramente aspiracional
- narrativa que omite el pipeline real

Si la web usa demasiado lenguaje de "magia", el buyer persona asume que el
sistema no soporta revisión seria.

## Qué Necesita Ver En La Web

### En el hero

Debe entender, en segundos, que:

- BRIK-64 tiene una tesis formal
- existe un pipeline claro
- hay una relación entre compilación, certificación y publicación

### En la sección de producto

Debe ver:

- la estructura del sistema
- la relación entre PCD, CLI, plataforma y registry
- evidencias de composición y estado

### En la sección de confianza

Debe ver:

- límites explícitos
- claim discipline
- referencias a fuentes dentro del repo cuando una afirmación es fuerte

### En CTA

Debe encontrar acciones que respeten su madurez técnica:

- revisar la plataforma
- inspeccionar la gramática
- explorar el registry
- evaluar el flujo de compilación/certificación/publicación

## Señales De Adopción

Si este buyer persona se interesa, normalmente lo hace por una combinación de
factores:

- entiende el modelo sin tener que reinterpretarlo
- ve un camino de adopción incremental
- percibe que la herramienta reduce incertidumbre real
- identifica reutilización de alto valor
- ve trazabilidad suficiente para presentar internamente

## Señales De Rechazo

El perfil tiende a abandonar cuando:

- la propuesta parece demasiado amplia para ser creíble
- la interfaz publicitaria domina sobre la estructura
- la historia no explica el flujo de extremo a extremo
- no puede distinguir evidencia de aspiración
- el sistema parece depender de confianza humana en vez de contratos claros

## Relación Con El Restante Ecosistema

Este buyer persona suele conectar bien con:

- equipos de plataforma
- ingeniería de infraestructuras
- seguridad aplicada
- formal methods
- AI engineering con guardrails

También puede aparecer como puente hacia:

- enterprise buyers
- platform governance
- internal developer platforms

La web debe asumir que este perfil puede ser un multiplicador, no solo un
usuario final.

## Implicaciones Editoriales

Para este buyer persona, la edición pública debe obedecer estas reglas:

- usar términos precisos
- evitar superlativos sin prueba
- mostrar el flujo, no solo el claim
- mantener límites explícitos
- diferenciar tesis, capacidad y evidencia

Esto coincide con el resto del repositorio:

- el scope público está limitado por `docs/content-marketing-scope.md`
- la calibración principal de audiencia ya apunta a `Staff / Principal Engineer`
  o `Platform Lead`
- los contratos editoriales del sitio esperan una lectura técnica y trazable

## Conclusión

El buyer persona principal de BRIK-64 es un lector técnico senior que evalúa
estructura, verificabilidad y reutilización segura. No responde bien a la
publicidad genérica ni a la promesa vacía. Responde cuando el sitio le muestra
un sistema formal, un flujo claro y un estándar de rigor que pueda defender
internamente.

Si este documento se usa como referencia editorial, la web debería sonar menos
como una campaña y más como una interfaz seria hacia un sistema formal.
