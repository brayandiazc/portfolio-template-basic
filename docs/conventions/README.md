# Convenciones

Esta carpeta documenta **cómo trabajamos** en Plantilla Portafolio Básico: reglas y
estándares transversales que aplican al día a día, independientes de cualquier
feature concreta.

> Diferencia con `docs/architecture/`: aquí van las **reglas** ("cómo modelamos
> datos"); en `architecture/` va **este** proyecto en concreto ("cuál es nuestro
> modelo de datos").

## Convenciones incluidas

| Convención                                         | Tema                               |
| -------------------------------------------------- | ---------------------------------- |
| [branding.md](branding.md)                         | Identidad de marca y assets        |
| [deploy.md](deploy.md)                             | Despliegue y operaciones           |
| [design-system.md](design-system.md)               | Sistema de diseño y componentes    |
| [quality-tooling.md](quality-tooling.md)           | Linters, formato y git hooks       |
| [secrets.md](secrets.md)                           | Manejo de secretos y credenciales  |
| [seo.md](seo.md)                                   | SEO y metadatos                    |
| [testing.md](testing.md)                           | Estrategia y estándares de testing |
| [views-and-layouts.md](views-and-layouts.md)       | Vistas, layouts y UI compartida    |

## Agregar una convención

Copia [`_template.md`](_template.md), renómbralo en `kebab-case` y documenta el
nuevo tema. Añádelo a la tabla de arriba.

## Convenciones adicionales opcionales

No se incluyen por defecto; créalas con `_template.md` si tu proyecto las necesita.

- **Genéricas / SaaS**: pagos, webhooks, multi-tenancy, PWA, administración,
  aceptación legal, observabilidad.
- **Móvil**: release a stores (versionado, firma/code-signing, capturas y ASO),
  permisos del dispositivo, notificaciones push, modo offline.
- **Escritorio**: empaquetado e instaladores por SO, code signing y notarización,
  auto-update, telemetría / reporte de crashes.
