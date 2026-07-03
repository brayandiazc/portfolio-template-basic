# Convenciones de vistas y layouts

> Cómo organizamos vistas, layouts y UI compartida en Plantilla Portafolio Básico.
> **Última actualización**: 2026-07-02

## Layout

Este es un sitio de **página única** (`index.html`). No hay layouts múltiples ni
rutas: todo el contenido vive en secciones dentro del mismo documento.

| Sección        | Uso                                                    |
| -------------- | ------------------------------------------------------ |
| `#inicio`      | Hero de presentación                                   |
| `#sobre-mi`    | Descripción personal                                   |
| `#experiencia` | Historial profesional                                  |
| `#educacion`   | Formación                                              |
| `#habilidades` | Tecnologías y competencias                             |
| `#destacados`  | Proyectos destacados (repos propios con estrella)      |
| `#repositorios`| Resto de repositorios cargados desde la API de GitHub  |

## Elementos compartidos

- **Head compartido**: metadatos y SEO (ver [`seo.md`](seo.md)).
- **Cambio de tema**: botón que alterna `data-theme` claro/oscuro.
- **Tarjeta de repositorio**: patrón único reutilizado en destacados y repositorios.

## Reglas

- Reutiliza el patrón de tarjeta; no dupliques marcado por sección.
- Las secciones que dependen de la API contemplan sus estados: carga, vacío, error y éxito.
- La UI sigue el [sistema de diseño](design-system.md).
- Separa estructura (HTML), estilo (CSS con tokens) y comportamiento (`app.js`).

## Estructura

```text
index.html          # secciones del perfil
assets/
├── css/            # estilos y tokens
├── js/app.js       # carga y render de repos
└── img/            # imágenes
```

## Referencias

- [`design-system.md`](design-system.md)
- [`seo.md`](seo.md)
