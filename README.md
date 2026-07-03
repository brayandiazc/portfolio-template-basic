# Plantilla Portafolio Básico

Portafolio personal en una sola página, **estático y sin framework**: solo HTML5,
CSS3 (con design tokens propios) y JavaScript. Muestra tu perfil por secciones y
carga tus repositorios en vivo desde la API pública de GitHub, con **tema claro y
oscuro** siguiendo el estilo gráfico de [brayandiazc.com](https://brayandiazc.com).

![License](https://img.shields.io/badge/license-MIT-blue)
![Stack](https://img.shields.io/badge/stack-HTML%20%C2%B7%20CSS%20%C2%B7%20JS-006cac)

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Stack Tecnológico](#stack-tecnológico)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y uso](#instalación-y-uso)
- [Configuración](#configuración)
- [Cómo se separan proyectos y repositorios](#cómo-se-separan-proyectos-y-repositorios)
- [Tema y diseño](#tema-y-diseño)
- [Deployment](#deployment)
- [Documentación](#documentación)
- [Contribución](#contribución)
- [Roadmap](#roadmap)
- [Autores](#autores)
- [Licencia](#licencia)

## Descripción

Esta plantilla es una portada profesional lista para publicar en GitHub Pages.
Está pensada para clonarse, cambiar tu usuario de GitHub y tus datos, y tener un
portafolio funcional sin build ni backend. La sección de proyectos se alimenta
sola desde tu cuenta de GitHub.

## Características

- ✅ Diseño responsivo, **sin frameworks CSS** (Bootstrap fue reemplazado por CSS propio)
- ✅ **Tema claro/oscuro** con conmutador y persistencia (`localStorage`), sin parpadeo
- ✅ Secciones bien separadas: perfil, sobre mí, experiencia, educación, habilidades
- ✅ **Proyectos destacados** y **Repositorios** cargados en vivo desde la API de GitHub
- ✅ Los destacados son tus repos propios marcados con ⭐ estrella por ti
- ✅ Datos estructurados JSON-LD para SEO
- ✅ Cero dependencias que instalar

## Stack Tecnológico

- [HTML5](https://developer.mozilla.org/es/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/es/docs/Web/CSS) con variables/design tokens propios
- JavaScript (ES modules, `fetch`) — sin dependencias
- [GitHub REST API](https://docs.github.com/en/rest) (pública, sin token)
- Tipografía [Google Sans Code](https://fonts.google.com/)
- [GitHub Pages](https://pages.github.com/) para el deploy

Detalle completo en [`docs/architecture/stack.md`](docs/architecture/stack.md).

## Estructura del Proyecto

```bash
portfolio-template-basic/
├── assets/
│   ├── css/styles.css   # tema y estilos (design tokens de brayandiazc.com)
│   └── js/app.js        # carga de repos y conmutador de tema
├── docs/                # documentación (arquitectura, convenciones, decisiones…)
├── index.html           # única página del sitio
└── README.md
```

## Instalación y uso

Clona el repositorio y ábrelo con cualquier servidor estático:

```bash
git clone https://github.com/brayandiazc/portfolio-template-basic.git
cd portfolio-template-basic

# Opción A: abrir directamente
open index.html

# Opción B: servidor estático local
python3 -m http.server 8000
# → http://localhost:8000
```

No hay dependencias que instalar ni paso de build.

## Configuración

Edita el objeto `CONFIG` al inicio de [`assets/js/app.js`](assets/js/app.js):

```js
const CONFIG = {
  githubUsername: "brayandiazc", // ← tu usuario de GitHub
  exclude: ["brayandiazc"], // repos a ocultar (p. ej. el repo de perfil)
  hideForks: true, // ocultar forks
  maxTopics: 4, // topics a mostrar por card
};
```

Luego reemplaza los `[Tu Nombre]`, la foto, redes y textos en `index.html`.

## Cómo se separan proyectos y repositorios

La sección de proyectos se genera **dinámicamente** desde tu GitHub, dividida en dos:

1. **Proyectos destacados** → tus repositorios **propios** que **tú has marcado con
   estrella** (`/users/{usuario}/starred`, filtrando `owner == usuario`). Es una
   curaduría manual: la estrella en tu propio repo lo asciende a destacado.
2. **Repositorios** → el resto de tus repos públicos, ordenados por actividad reciente.

Se ocultan forks y archivados; todo es configurable en `CONFIG`. La API pública
tiene límite de peticiones sin token (60/hora por IP), suficiente para un portafolio.

## Tema y diseño

Los colores provienen de los design tokens de brayandiazc.com:

| Token  | Claro     | Oscuro    |
| ------ | --------- | --------- |
| Fondo  | `#fdfdfd` | `#212737` |
| Texto  | `#282728` | `#eaedf3` |
| Acento | `#006cac` | `#ff6b01` |
| Muted  | `#e6e6e6` | `#343f60` |

El tema se controla con `data-theme="light|dark"` en `<html>` y se conmuta con el
botón ◐ de la barra superior. Más detalle en
[`docs/conventions/design-system.md`](docs/conventions/design-system.md).

## Deployment

Sitio estático servido por **GitHub Pages** desde `main`, disponible en
`https://brayandiazc.github.io/portfolio-template-basic/`. Puedes añadir un dominio
propio (opcional) con un archivo `CNAME`. Procedimiento en
[`docs/conventions/deploy.md`](docs/conventions/deploy.md).

## Documentación

Toda la documentación vive en [`docs/`](docs/README.md):

| Documento                                                                | Responde a                     |
| ------------------------------------------------------------------------ | ------------------------------ |
| [`docs/architecture/architecture.md`](docs/architecture/architecture.md) | ¿Cómo está construido?         |
| [`docs/architecture/stack.md`](docs/architecture/stack.md)               | ¿Con qué tecnologías?          |
| [`docs/architecture/design.md`](docs/architecture/design.md)             | ¿Cómo se diseña y por qué?     |
| [`docs/product/roadmap.md`](docs/product/roadmap.md)                     | ¿Hacia dónde va?               |
| [`docs/decisions/`](docs/decisions/README.md)                            | ¿Por qué cada decisión?        |
| [`docs/conventions/`](docs/conventions/README.md)                        | ¿Cómo trabajamos en este repo? |

## Contribución

Lee la [Guía de Contribución](CONTRIBUTING.md) para conocer el flujo de trabajo,
los estándares de código y el formato de commits (Conventional Commits).

## Roadmap

Visión y próximos pasos en [`docs/product/roadmap.md`](docs/product/roadmap.md).

## Autores

- **Brayan Diaz C** — _Trabajo inicial_ — [@brayandiazc](https://github.com/brayandiazc)

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---

⌨️ con ❤️ por [@brayandiazc](https://github.com/brayandiazc)
