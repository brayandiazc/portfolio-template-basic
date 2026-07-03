# Convenciones de calidad y tooling

> Linters, formato, análisis estático y git hooks de Plantilla Portafolio Básico.
> **Última actualización**: 2026-07-02

## Stack

- **Linter**: no aplica un linter dedicado; el sitio es HTML/CSS/JS sin build.
- **Formateador**: Prettier (vía `npx`), envuelto en `.github/scripts/format-markdown.sh`.
- **Análisis estático / seguridad**: no aplica.
- **Auditoría de dependencias**: no aplica (el proyecto no tiene dependencias que instalar).
- **Orquestador de git hooks**: no aplica (opcional).

## Git hooks

Estrategia sugerida: hooks baratos y rápidos en `pre-commit`, los más costosos en
`pre-push`. CI ejecuta todo de nuevo en el servidor.

### pre-commit (en cada commit)

- Linter sobre archivos cambiados.
- Formato automático.
- Verificación de trailing whitespace, fin de archivo, conflictos sin resolver.

### pre-push (al subir)

- Linter completo.
- Tests (o un subconjunto rápido).
- Auditoría de dependencias.

## Reglas

- El código debe pasar linter y formato antes del merge.
- Los checks de calidad son **bloqueantes** en CI.

## Comandos útiles

```bash
# Formatear la documentación Markdown
bash .github/scripts/format-markdown.sh
# Verificar formato sin escribir
bash .github/scripts/format-markdown.sh --check
# Lint / auditoría de dependencias: no aplica (sin toolchain ni dependencias)
```

## Referencias

- [Documentación de las herramientas elegidas].
