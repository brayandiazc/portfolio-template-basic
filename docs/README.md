# Documentación de Plantilla Portafolio Básico

Mapa de la documentación del proyecto. Empieza por aquí para saber qué documento
responde cada pregunta.

| Documento                                                      | Pregunta que responde                | Cuándo leerlo                   |
| -------------------------------------------------------------- | ------------------------------------ | ------------------------------- |
| [`architecture/architecture.md`](architecture/architecture.md) | ¿Cómo está construido el sistema?    | Al entender el panorama general |
| [`architecture/stack.md`](architecture/stack.md)               | ¿Con qué tecnologías y versiones?    | Al configurar el entorno        |
| [`architecture/design.md`](architecture/design.md)             | ¿Cómo se ve y por qué?               | Al diseñar features o UI        |
| [`product/business-model.md`](product/business-model.md)       | ¿Por qué existe / cómo genera valor? | Para entender el negocio        |
| [`product/roadmap.md`](product/roadmap.md)                     | ¿Hacia dónde va?                     | Para conocer prioridades        |
| [`decisions/`](decisions/README.md)                            | ¿Por qué tomamos cada decisión?      | Antes de re-debatir algo        |
| [`conventions/`](conventions/README.md)                        | ¿Cómo trabajamos en este repo?       | Antes de escribir código        |
| [`glossary.md`](glossary.md)                                   | ¿Qué significa cada término?         | Ante vocabulario desconocido    |

## Sobre la distinción `architecture/` vs `conventions/`

- **`architecture/`** describe **este** proyecto en concreto (cómo se renderiza el
  perfil, cómo se cargan los repos, cómo se ve).
- **`conventions/`** describe **reglas reusables** de cómo trabajamos
  (cómo desplegamos, cómo testeamos, cómo manejamos el branding) — transversales a
  cualquier feature.

## Cómo mantener esta documentación

- Actualiza la línea **"Última actualización"** al editar un documento.
- Registra las decisiones relevantes como [ADRs](decisions/README.md).
- Mantén este índice al día si agregas o quitas documentos.
