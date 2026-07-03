# Convenciones del sistema de diseño

> Tokens, componentes y reglas de UI de Plantilla Portafolio Básico.
> Para el diseño técnico/UX del producto ver
> [`../architecture/design.md`](../architecture/design.md).
> **Última actualización**: 2026-07-02

## Stack

- **Librería de componentes**: ninguna; UI propia en HTML5 semántico.
- **Solución de estilos**: CSS3 con variables (custom properties) como design tokens; sin framework.
- **Página de referencia viva**: no aplica; los tokens viven en la hoja de estilos del proyecto.

## Tokens

Los colores se definen como variables CSS con dos valores según el tema, seleccionado
mediante `data-theme="light|dark"` en `<html>`. Replican los tokens de brayandiazc.com.

| Token              | Claro     | Oscuro    | Uso                                  |
| ------------------ | --------- | --------- | ------------------------------------ |
| background         | `#fdfdfd` | `#212737` | Fondo de página                      |
| foreground (texto) | `#282728` | `#eaedf3` | Texto principal                      |
| accent             | `#006cac` | `#ff6b01` | Enlaces, acentos, destacados         |
| muted              | `#e6e6e6` | `#343f60` | Fondos secundarios (tarjetas, chips) |
| muted-foreground   | `#6b7280` | `#afb9ca` | Texto secundario                     |
| border             | `#ece9e9` | `#4a5578` | Bordes y separadores                 |

- **Tipografía**: "Google Sans Code", monospace.
- **Espaciado**: escala basada en múltiplos de `0.25rem` (4px).
- **Bordes/radios**: radios suaves y consistentes en tarjetas y chips; bordes con el token `border`.

> Usa **tokens semánticos** (las variables CSS), no valores hexadecimales crudos, en los componentes.

## Componentes permitidos

- Reutiliza los patrones existentes (secciones, tarjetas de repo, chips de topics); evita variantes ad-hoc.
- Cada elemento interactivo debe contemplar sus **estados**: normal, hover, foco, y (para datos remotos) carga y error.

## Tematización

- El tema se aplica con `data-theme` en `<html>` y se persiste en `localStorage`.
- Todo color nuevo debe declararse como par de tokens claro/oscuro, nunca como valor fijo por tema.

## Accesibilidad (baseline)

- Contraste mínimo objetivo: WCAG AA.
- Foco visible y navegación por teclado.
- Roles/atributos ARIA donde corresponda.

## Anti-patrones

- Valores de color/espaciado hardcodeados fuera de los tokens.
- Reintroducir un framework de CSS (p. ej. Bootstrap) para algo que resuelven los tokens.

## Referencias

- [`../architecture/design.md`](../architecture/design.md) — decisiones de diseño y tokens en contexto.
