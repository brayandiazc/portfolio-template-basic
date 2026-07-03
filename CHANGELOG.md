# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [Unreleased]

### Added

- Sección **Proyectos** curada a mano en `assets/js/projects.js` (título, descripción,
  tags, enlaces a demo y código), con ejemplos editables.
- Opciones `minStars` y `maxRepos` en `CONFIG`.

### Changed

- La sección **Repositorios** ahora muestra los repos de GitHub **con estrellas**,
  ordenados de más a menos (antes: destacados = repos propios con estrella + resto).
- **Proyectos** y **Repositorios** son ahora orígenes independientes: curado manual vs GitHub.

### Removed

- Sitio ya no usa el dominio inexistente `template-portafolio.com`; se sirve en la URL
  por defecto de GitHub Pages. Se elimina el archivo `CNAME` y la captura
  `assets/img/main.jpeg` (obsoleta tras el rediseño).

## [1.0.0] - 2026-07-02

### Added

- Estructura de documentación y gobernanza basada en `project-starter-template-es`:
  `docs/` (arquitectura, convenciones, decisiones, producto, glosario), plantillas de
  issues/PR, `dependabot`, `labeler`, scripts y workflows de ejemplo en `.github/`.
- Archivos de gobernanza en la raíz: `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`,
  `SECURITY.md`, `CHANGELOG.md`, `LICENSE` (MIT), `.editorconfig`, `.gitignore`.
- Tema claro/oscuro con conmutador y persistencia en `localStorage`, usando los
  design tokens de [brayandiazc.com](https://brayandiazc.com).
- Sección **Proyectos destacados**: repos propios marcados con estrella por el autor,
  separada de la sección **Repositorios** (el resto), ambas desde la API de GitHub.
- Objeto `CONFIG` configurable en `assets/js/app.js` (usuario, exclusiones, forks, topics).

### Changed

- Reemplazo de **Bootstrap 5.3** por CSS propio con variables/design tokens; se elimina
  la dependencia de CDN de Bootstrap.
- Reestructuración del portafolio en secciones claras: perfil, sobre mí, experiencia,
  educación, habilidades, destacados y repositorios.
- Tipografía unificada a **Google Sans Code** (misma familia que brayandiazc.com).
- `app.js` reescrito: carga en paralelo repos y starred, escapa HTML, maneja estados
  de carga/error/vacío.

### Removed

- Dependencias de CDN de Bootstrap y Font Awesome.

<!--
Enlaces de comparación entre versiones:
[Unreleased]: https://github.com/brayandiazc/portfolio-template-basic/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/brayandiazc/portfolio-template-basic/releases/tag/v1.0.0
-->

[Unreleased]: https://github.com/brayandiazc/portfolio-template-basic/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/brayandiazc/portfolio-template-basic/releases/tag/v1.0.0
