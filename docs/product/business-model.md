# Plantilla Portafolio Básico — Modelo de Negocio

> Marco: **Lean Canvas**. Describe por qué existe el proyecto y cómo genera valor.
> **Última actualización**: 2026-07-02

## 1. Problema

- Montar un portafolio personal de desarrollador desde cero toma tiempo y esfuerzo de mantenimiento.
- Mantener la lista de proyectos actualizada a mano es tedioso y propenso a quedar desfasada.
- **Alternativas actuales**: constructores de portafolios de pago, plantillas pesadas con framework, o escribir un sitio propio.

## 2. Segmentos de cliente

| Segmento                  | Descripción                                      | Notas         |
| ------------------------- | ------------------------------------------------ | ------------- |
| Personas desarrolladoras  | Quieren un portafolio simple y autoactualizable  | ICP principal |
| Estudiantes / bootcamps   | Necesitan presencia web rápida y gratuita        | Early adopters |

- **Cliente ideal (ICP)**: desarrollador/a con repos públicos en GitHub que quiere un portafolio sin mantenimiento.
- **Early adopters**: estudiantes y personas en cambio de carrera hacia el desarrollo.

## 3. Propuesta de valor única

- Un portafolio estático que se despliega en minutos y muestra tus repos en vivo, sin backend ni costos.
- **Concepto de alto nivel**: "un CV vivo para desarrolladores, servido gratis desde GitHub Pages".

## 4. Solución (el producto)

| Módulo / Capacidad             | Qué resuelve                                             |
| ------------------------------ | ------------------------------------------------------- |
| Perfil por secciones           | Presenta experiencia, educación y habilidades           |
| Listado de repos en vivo       | Muestra proyectos destacados y repositorios sin editarlos a mano |

## 5. Canales

- Distribución como plantilla open source en GitHub; se comparte por README, redes y boca a boca.

## 6. Modelo de ingresos

- **No aplica**: es una plantilla open source con licencia MIT, de uso gratuito. No hay planes de pago.

## 7. Estructura de costos

- **Costos variables**: ninguno (sitio estático servido por GitHub Pages).
- **Costos fijos**: opcionalmente el dominio propio (CNAME); el hosting es gratuito.

## 8. Métricas clave

- Estrellas y forks del repositorio de la plantilla; adopción por otras personas.

## 9. Ventaja competitiva

- Cero dependencias y cero mantenimiento: la lista de proyectos se actualiza sola desde la API de GitHub.

## Decisiones pendientes

- [ ] Definir si se ofrecen variantes de tema adicionales más allá de claro/oscuro.
