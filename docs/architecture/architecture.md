# Plantilla Portafolio Básico — Arquitectura

> Vista de alto nivel de cómo está construido el sistema y cómo se reparten las
> responsabilidades. Para el stack real (versiones, librerías) ver
> [`stack.md`](stack.md). Para el negocio ver
> [`../product/business-model.md`](../product/business-model.md).
>
> **Última actualización**: 2026-07-02

## Diagrama

```mermaid
graph TD
    subgraph Cliente
        H[index.html · secciones del perfil]
        CSS[Tokens CSS claro/oscuro]
        JS[assets/js/app.js · ES module]
    end
    subgraph Externos
        GH[API pública de GitHub]
    end

    H --> JS
    CSS --> H
    JS -->|fetch en runtime| GH
    GH -->|repos + starred| JS
    JS -->|render| D[Proyectos destacados]
    JS -->|render| R[Repositorios]
```

## Componentes

| Componente        | Responsabilidad                                                                       | Tecnología             |
| ----------------- | ------------------------------------------------------------------------------------- | ---------------------- |
| `index.html`      | Renderiza las secciones del perfil (inicio, sobre mí, experiencia, educación, habilidades, destacados, repositorios) | HTML5                  |
| Hoja de estilos   | Define los tokens de color y el layout; aplica tema claro/oscuro vía `data-theme`     | CSS3 con variables     |
| `assets/js/app.js`| Consulta la API de GitHub en tiempo de ejecución y renderiza las tarjetas de repos    | JavaScript (ES module) |
| GitHub REST API   | Fuente de datos externa de los repositorios del usuario                               | Servicio público       |

## Decisiones clave

| Decisión                                       | Razón                                                          |
| ---------------------------------------------- | -------------------------------------------------------------- |
| Sitio estático sin backend                     | Cero infraestructura; deploy gratuito en GitHub Pages          |
| API pública de GitHub sin token                | Sin secretos; 60 req/hora bastan para el uso previsto          |
| Sigue siendo una plantilla configurable        | El usuario de GitHub y parte del contenido personal son placeholders editables |
| Tokens de color replicando brayandiazc.com     | Consistencia con la identidad de marca personal                |

> El detalle y las alternativas de cada decisión relevante se registran como
> ADRs en [`../decisions/`](../decisions/README.md).

## Reglas no negociables

- No hay backend ni base de datos: toda la lógica vive en el navegador.
- No se introducen secretos ni tokens; solo se usa la API pública de GitHub.
- El proyecto debe poder clonarse y abrirse sin paso de build.

## Flujos principales

```mermaid
sequenceDiagram
    actor U as Visitante
    participant P as index.html
    participant J as app.js
    participant GH as API GitHub
    U->>P: Abre la página
    P->>J: Carga el módulo
    J->>GH: GET /users/{usuario}/repos y /starred
    GH-->>J: Lista de repositorios
    J->>J: Separa destacados (repos propios con estrella) del resto
    J-->>P: Renderiza "Proyectos destacados" y "Repositorios"
    P-->>U: Perfil + tarjetas de repos
```

Los **Proyectos destacados** son los repositorios **propios** que el autor ha
marcado con estrella; el resto de repositorios visibles (sin forks ni archivados)
se listan en **Repositorios**.

## Referencias

- [`stack.md`](stack.md) — stack tecnológico y versiones.
- [`design.md`](design.md) — diseño visual, temas y tokens.
- [`../conventions/`](../conventions/README.md) — convenciones de trabajo.
