# Diseño — Plantilla Portafolio Básico

> Decisiones de diseño técnico y de producto: cómo se resuelve el problema y
> cómo se ve y se siente el producto. Las decisiones relevantes se promueven a
> ADRs en [`../decisions/`](../decisions/README.md).
>
> **Última actualización**: 2026-07-02

## Contexto y objetivos

- **Problema**: montar un portafolio personal de desarrollador suele exigir tiempo,
  mantenimiento y actualizar la lista de proyectos a mano.
- **Objetivos**: una plantilla estática reutilizable que muestre el perfil por
  secciones y liste los repositorios del usuario en vivo desde GitHub, coherente
  con la identidad visual de brayandiazc.com y con tema claro/oscuro.
- **No-objetivos**: no es un CMS ni un sitio con backend; no gestiona usuarios,
  formularios ni base de datos.

## Requisitos

### Funcionales

- Renderizar las secciones del perfil: inicio, sobre mí, experiencia, educación,
  habilidades, proyectos y repositorios.
- Renderizar "Proyectos" desde una lista curada a mano (`assets/js/projects.js`) y
  "Repositorios" desde la API pública de GitHub, filtrados por estrellas.
- Permitir cambiar entre tema claro y oscuro, con persistencia.

### No funcionales

- Sin backend, sin secretos, sin build: usable clonando el repo o abriendo `index.html`.
- Sigue siendo una plantilla: usuario de GitHub y contenido personal configurables.
- Accesible y responsive.

## Diseño propuesto

- **Enfoque general**: `index.html` define el layout por secciones; `assets/js/app.js`
  obtiene los repos en runtime y los renderiza como tarjetas.
- **Componentes y flujos**: ver [`architecture.md`](architecture.md).

## Identidad visual y sistema de diseño

Los tokens replican los de brayandiazc.com. Detalle completo (espaciado, radios,
convenciones) en [`../conventions/design-system.md`](../conventions/design-system.md).

### Tokens de tema (claro / oscuro)

| Token              | Claro     | Oscuro    | Uso                                    |
| ------------------ | --------- | --------- | -------------------------------------- |
| background         | `#fdfdfd` | `#212737` | Fondo de página                        |
| foreground (texto) | `#282728` | `#eaedf3` | Texto principal                        |
| accent             | `#006cac` | `#ff6b01` | Enlaces, acentos, destacados           |
| muted              | `#e6e6e6` | `#343f60` | Fondos secundarios (tarjetas, chips)   |
| muted-foreground   | `#6b7280` | `#afb9ca` | Texto secundario                       |
| border             | `#ece9e9` | `#4a5578` | Bordes de tarjetas y separadores       |

### Tipografía

- **Google Sans Code**, monospace, como familia principal.

### Tematización

- El tema se controla con `data-theme="light|dark"` en el elemento `<html>`.
- El cambio se persiste en `localStorage` y se aplica desde JavaScript.

## Accesibilidad

- Contraste de color objetivo WCAG AA sobre el fondo de cada tema.
- Navegación por teclado, foco visible y marcado semántico por secciones.

## Estados de la interfaz

Las secciones que dependen de la API deben contemplar: **carga** (consultando GitHub),
**vacío** (sin repos), **error** (límite de la API o usuario inexistente) y **éxito**.

## Riesgos y mitigaciones

| Riesgo                                     | Impacto | Mitigación                                            |
| ------------------------------------------ | ------- | ----------------------------------------------------- |
| Límite de 60 req/hora de la API sin token  | Bajo    | Uso puntual; mensaje de error claro al alcanzar el límite |
| Contenido personal sin personalizar        | Bajo    | Placeholders evidentes y documentados en el README    |
| Fuente web no disponible                    | Bajo    | Fallback a `monospace` del sistema                    |

## Preguntas abiertas

- [ ] ¿Cachear la respuesta de la API para mitigar el límite de peticiones?
