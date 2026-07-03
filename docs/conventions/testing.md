# Convenciones de testing

> Cómo escribimos y ejecutamos tests en Plantilla Portafolio Básico.
> **Última actualización**: 2026-07-02

## Stack

- **Framework de tests**: no aplica; el sitio no tiene una suite automatizada.
- **Cobertura**: no aplica.
- **Tests de sistema/E2E**: no aplica.

La verificación es **manual**: abrir `index.html` en el navegador y comprobar que
las secciones renderizan y que los repos se cargan desde la API de GitHub en tema
claro y oscuro.

## Tipos de test

| Tipo             | Qué cubre                                              | Cómo                        |
| ---------------- | ------------------------------------------------------ | --------------------------- |
| Revisión visual  | Layout y estilos en claro/oscuro                       | Manual en el navegador      |
| Carga de datos   | El listado de repos aparece y maneja error/vacío       | Manual (probar usuario real) |

## Reglas

- Antes de cada release, revisa manualmente la página en tema claro y oscuro.
- Comprueba los estados de la carga de repos: cargando, con datos, vacío y error.
- Prueba en al menos un navegador evergreen y en ancho móvil.
- No se introduce una suite automatizada mientras el proyecto no tenga build ni backend.

## Cómo probar en local

```bash
# Servir el sitio de forma estática
python3 -m http.server 8000
# Abrir http://localhost:8000 y revisar cada sección
```

## Referencias

- [`../architecture/architecture.md`](../architecture/architecture.md) — flujo de carga de repos.
