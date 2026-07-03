/* ==========================================================================
   Proyectos (curados a mano)
   --------------------------------------------------------------------------
   Edita esta lista para mostrar TUS proyectos en la sección "Proyectos".
   No depende de GitHub: aquí pones el título, la descripción y los enlaces.

   Cada proyecto admite:
     - title       (obligatorio) nombre del proyecto
     - description (obligatorio) 1–2 líneas de qué es
     - tags        (opcional)    tecnologías / etiquetas (array de strings)
     - demoUrl     (opcional)    enlace a la demo / sitio en vivo
     - repoUrl     (opcional)    enlace al repositorio
   ========================================================================== */

export const PROJECTS = [
  {
    title: "Task Manager API",
    description:
      "API REST para gestionar tareas y proyectos, con autenticación JWT y documentación OpenAPI.",
    tags: ["Node.js", "Express", "PostgreSQL"],
    demoUrl: "https://example.com/task-manager",
    repoUrl: "https://github.com/brayandiazc",
  },
  {
    title: "Weather Dashboard",
    description:
      "Panel del clima en tiempo real que consume una API pública y muestra pronósticos por ciudad.",
    tags: ["React", "Vite", "API"],
    demoUrl: "https://example.com/weather",
    repoUrl: "https://github.com/brayandiazc",
  },
  {
    title: "Tienda E-commerce",
    description:
      "Frontend de una tienda con carrito, filtros y checkout simulado. Diseño responsivo.",
    tags: ["JavaScript", "CSS", "UX"],
    demoUrl: "https://example.com/tienda",
    repoUrl: "https://github.com/brayandiazc",
  },
  {
    title: "Bot de Recordatorios",
    description:
      "Bot que envía recordatorios programados por mensajería, con panel de administración.",
    tags: ["Python", "Cron", "Telegram"],
    repoUrl: "https://github.com/brayandiazc",
  },
];
