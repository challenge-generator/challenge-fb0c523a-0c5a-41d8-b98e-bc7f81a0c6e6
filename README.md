# Mejora de calidad de código en aplicación móvil

El equipo de desarrollo móvil de una fintech necesita mejorar la calidad del código de su aplicación principal. La aplicación, construida con Ionic, maneja una variedad de funcionalidades que incluyen autenticación de usuarios, gestión de cuentas y transacciones financieras. El objetivo es aplicar los principios de la programación orientada a objetos para refactorizar el código existente, mejorando su mantenibilidad, escalabilidad y claridad. Los candidatos deben examinar y aplicar las principales características de la POO: herencia, cohesión, abstracción, polimorfismo, acoplamiento y encapsulamiento.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Técnicas de programación orientada a objetos |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 20 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Análisis del código existente

**Objetivo:** Identificar áreas de mejora en el código actual.

**Tiempo estimado:** 5 horas

**Instrucciones:**

- Revisa el código fuente de la aplicación móvil para identificar patrones de diseño y antipatrones.
- Documenta las áreas que podrían beneficiarse de la aplicación de principios de POO.

**Entregable:** Documento de análisis que detalla las áreas de mejora identificadas.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo los principios de POO pueden aplicarse para resolver problemas específicos en el código.
- Piensa en cómo la refactorización puede impactar la funcionalidad existente.

</details>

### Fase 2: Aplicación de herencia y abstracción

**Objetivo:** Refactorizar el código para aplicar herencia y abstracción.

**Tiempo estimado:** 5 horas

**Instrucciones:**

- Identifica clases que podrían heredar de una clase base.
- Crea clases abstractas para definir interfaces comunes.

**Entregable:** Código refactorizado que demuestra la aplicación de herencia y abstracción.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo la herencia puede reducir la redundancia en el código.
- Piensa en cómo las clases abstractas pueden proporcionar una interfaz común para clases derivadas.

</details>

### Fase 3: Implementación de polimorfismo y encapsulamiento

**Objetivo:** Aplicar polimorfismo y encapsulamiento para mejorar la flexibilidad y seguridad del código.

**Tiempo estimado:** 5 horas

**Instrucciones:**

- Implementa métodos polimórficos para permitir que diferentes clases respondan a los mismos mensajes.
- Aplica encapsulamiento para proteger los datos sensibles y garantizar la integridad del estado de los objetos.

**Entregable:** Código refactorizado que demuestra la aplicación de polimorfismo y encapsulamiento.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo el polimorfismo puede mejorar la flexibilidad del código.
- Piensa en cómo el encapsulamiento puede proteger los datos y garantizar la integridad del estado de los objetos.

</details>

### Fase 4: Evaluación de cohesión y acoplamiento

**Objetivo:** Evaluar y mejorar la cohesión y reducir el acoplamiento en el código.

**Tiempo estimado:** 5 horas

**Instrucciones:**

- Evalúa la cohesión de las clases y métodos existentes.
- Identifica y reduce el acoplamiento entre componentes.

**Entregable:** Documento que detalla la evaluación y mejoras realizadas en cohesión y acoplamiento.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo la cohesión puede mejorar la claridad y mantenibilidad del código.
- Piensa en cómo reducir el acoplamiento puede mejorar la flexibilidad y reutilización del código.

</details>

## Dimensiones Evaluadas

- **queEs**: En fase 1, ¿qué es lo que identificaste como área de mejora en el código?
- **paraQueSirve**: En fase 2, ¿para qué sirve la aplicación de herencia y abstracción en el código?
- **comoSeUsa**: En fase 3, ¿cómo se usa el polimorfismo para mejorar la flexibilidad del código?
- **erroresComunes**: En fase 1, ¿qué errores comunes identificaste en el código?
- **queDecisionesImplica**: En fase 4, ¿qué decisiones implica la evaluación y mejora de cohesión y acoplamiento?

## Criterios de Evaluacion

- Identificación de áreas de mejora en el código existente.
- Aplicación correcta de herencia y abstracción.
- Implementación de polimorfismo y encapsulamiento.
- Evaluación y mejora de cohesión y reducción de acoplamiento.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
