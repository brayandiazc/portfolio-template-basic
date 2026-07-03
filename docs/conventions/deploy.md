# Convenciones de despliegue

> Operaciones de producción de Plantilla Portafolio Básico. Fuente de verdad de cómo se
> despliega, se hace rollback y se opera el sistema.
> **Última actualización**: 2026-07-02

## Stack de infraestructura

- **Hosting / cómputo**: GitHub Pages (sitio estático, sin build).
- **DNS / TLS**: dominio propio vía `CNAME`, TLS gestionado por GitHub Pages.
- **Contenedores / orquestación**: no aplica.
- **CI/CD**: GitHub Pages publica automáticamente al hacer push a `main`.

## Ambientes

| Ambiente   | URL                            | Rama   | Deploy                     |
| ---------- | ------------------------------ | ------ | -------------------------- |
| Desarrollo | No aplica (sitio único)        | —      | Local (`http.server`)      |
| Staging    | No aplica (sitio único)        | —      | —                          |
| Producción | http://template-portafolio.com | `main` | Automático al hacer push   |

## Reglas

- Solo se despliega a producción desde `main`.
- Cada deploy debe ser reproducible y reversible.
- Las variables de entorno y secretos se gestionan según [`secrets.md`](secrets.md).
- Verificar health checks tras cada deploy.

## Procedimiento de deploy

```bash
# 1. Build: no aplica (sitio estático)

# 2. Deploy: publicar en main
git push origin main

# 3. Verificar
curl -I http://template-portafolio.com
```

## Rollback

```bash
# Revertir el commit problemático y volver a publicar
git revert <commit>
git push origin main
```

## Health checks y monitoreo

- Endpoint de salud: `/` (la página principal debe cargar y listar los repos).
- Monitoreo de errores: no aplica (sin backend).
- Alertas: no aplica.

## Referencias

- [Documentación de GitHub Pages](https://docs.github.com/pages).
