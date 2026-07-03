# Stack Tecnológico

> Fuente de verdad de las tecnologías y versiones del proyecto.
> **Última actualización**: 2026-07-02

## Núcleo

| Categoría  | Tecnología                         | Versión | Por qué                                                            |
| ---------- | ---------------------------------- | ------- | ----------------------------------------------------------------- |
| Marcado    | HTML5                              | —       | Página única semántica, sin build ni framework                    |
| Estilos    | CSS3 con variables (design tokens) | —       | Tokens propios claro/oscuro; sin framework (se eliminó Bootstrap) |
| Lógica     | JavaScript vanilla (ES modules)    | —       | `fetch` a la API de GitHub; poca lógica, sin dependencias         |
| Datos      | GitHub REST API (pública)          | v3      | Lista los repos del usuario en tiempo real, sin token             |
| Tipografía | Google Sans Code (webfont)         | —       | Fuente monoespaciada de la identidad de brayandiazc.com           |

## DevOps & Herramientas

| Categoría | Tecnología                                                               |
| --------- | ------------------------------------------------------------------------ |
| Hosting   | GitHub Pages (sitio estático, sin build)                                 |
| Dominio   | Dominio propio vía `CNAME` → http://template-portafolio.com              |
| CI/CD     | Deploy por push a `main`; GitHub Actions (opcional, ver `ci.example.yml`) |
| Formato   | Prettier / `format-markdown.sh` para documentación                       |

## Servicios externos

| Servicio                  | Uso                                                                         | Credenciales necesarias        |
| ------------------------- | --------------------------------------------------------------------------- | ------------------------------ |
| GitHub REST API (pública) | Listar repos del usuario (nombre, descripción, topics, lenguaje, estrellas) | Ninguna (60 req/hora sin auth) |

## Justificación de elecciones

| Tecnología elegida        | Alternativa descartada     | Razón                                                            |
| ------------------------- | -------------------------- | ---------------------------------------------------------------- |
| JavaScript vanilla        | React / Vite / Astro       | Una sola página con poca lógica; menos mantenimiento y sin build |
| CSS con variables propias | Bootstrap u otro framework | Control total del sistema de tokens claro/oscuro; menos peso     |
| API pública de GitHub     | API autenticada / backend  | Sin secretos que gestionar; el límite de 60 req/h basta          |
| GitHub Pages              | Vercel / Netlify           | Deploy directo por push, gratuito y con dominio propio (CNAME)   |

## Versiones mínimas soportadas

- Navegadores evergreen con soporte de ES modules y `fetch`.
- Para servir en local basta un servidor estático (p. ej. `python3 -m http.server 8000`) o abrir `index.html` directamente.
- No hay runtime propio, gestor de paquetes ni base de datos que instalar.
