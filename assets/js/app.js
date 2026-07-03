/* ==========================================================================
   Plantilla Portafolio Básico — lógica de la página
   - Carga los repositorios del usuario desde la API pública de GitHub.
   - Separa "Proyectos destacados" (repos propios con estrella del autor)
     de "Repositorios" (el resto).
   - Alterna tema claro/oscuro con persistencia.
   ========================================================================== */

/* ===== CONFIG ===== */
const CONFIG = {
  // Usuario de GitHub del que se listan los repositorios. Cámbialo por el tuyo.
  githubUsername: "brayandiazc",
  // Repos que nunca se muestran (p. ej. el repo de perfil "usuario/usuario").
  exclude: ["brayandiazc"],
  // Ocultar forks del listado.
  hideForks: true,
  maxTopics: 4,
};

/* ===== TEMA ===== */
const THEME_KEY = "portfolio-theme";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (_) {
    /* almacenamiento no disponible: se ignora */
  }
}

function initTheme() {
  const btn = document.getElementById("page-theme");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const current =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";
    applyTheme(current === "dark" ? "light" : "dark");
  });
}

/* ===== UTILS ===== */
const truncate = (text, max) =>
  text && text.length > max
    ? text.slice(0, max).trimEnd() + "…"
    : text || "Sin descripción.";

const escapeHtml = (str = "") =>
  str.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c]
  );

const renderTopics = (topics = []) =>
  topics.length
    ? `<div class="topics">${topics
        .slice(0, CONFIG.maxTopics)
        .map((t) => `<span class="topic">${escapeHtml(t)}</span>`)
        .join("")}</div>`
    : "";

/* ===== FETCH ===== */
async function ghJson(url) {
  const res = await fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  return res.json();
}

async function loadRepos() {
  const user = CONFIG.githubUsername;

  // Repos del usuario + repos que ha marcado con estrella (en paralelo).
  const [repos, starred] = await Promise.all([
    ghJson(
      `https://api.github.com/users/${user}/repos?per_page=100&sort=updated`
    ),
    ghJson(`https://api.github.com/users/${user}/starred?per_page=100`),
  ]);

  // Nombres (owner/repo) de los repos PROPIOS que el autor ha estrellado.
  const starredOwn = new Set(
    starred
      .filter((r) => r.owner?.login?.toLowerCase() === user.toLowerCase())
      .map((r) => r.full_name)
  );

  const visible = repos.filter(
    (r) =>
      !CONFIG.exclude.includes(r.name) &&
      !(CONFIG.hideForks && r.fork) &&
      !r.archived
  );

  const featured = visible
    .filter((r) => starredOwn.has(r.full_name))
    .sort((a, b) => b.stargazers_count - a.stargazers_count);

  const others = visible
    .filter((r) => !starredOwn.has(r.full_name))
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

  return { featured, others };
}

/* ===== RENDER ===== */
function repoCard(repo, { featured = false } = {}) {
  const topics = renderTopics(repo.topics);
  const star = featured ? '<span class="star" title="Destacado">★</span>' : "";
  return `
    <article class="repo-card">
      <h3>${star}${escapeHtml(repo.name)}</h3>
      <p class="desc">${escapeHtml(truncate(repo.description, 120))}</p>
      ${topics}
      <div class="foot">
        <span class="stats">
          <span title="Estrellas">★ ${repo.stargazers_count}</span>
          ${repo.language ? `<span title="Lenguaje">● ${escapeHtml(repo.language)}</span>` : ""}
        </span>
        <a class="repo-link" href="${repo.html_url}" target="_blank" rel="noopener">
          Ver repo →
        </a>
      </div>
    </article>`;
}

function renderInto(containerId, repos, opts) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!repos.length) {
    el.innerHTML = `<p class="state">No hay repositorios para mostrar.</p>`;
    return;
  }
  el.innerHTML = repos.map((r) => repoCard(r, opts)).join("");
}

/* ===== INIT ===== */
async function init() {
  initTheme();

  const featuredEl = document.getElementById("featured-cards");
  const reposEl = document.getElementById("repo-cards");
  const setState = (el, msg, isError = false) => {
    if (el)
      el.innerHTML = `<p class="state${isError ? " error" : ""}">${msg}</p>`;
  };

  setState(featuredEl, "Cargando proyectos destacados…");
  setState(reposEl, "Cargando repositorios…");

  try {
    const { featured, others } = await loadRepos();
    renderInto("featured-cards", featured, { featured: true });
    renderInto("repo-cards", others);
  } catch (err) {
    console.error(err);
    const msg =
      "No se pudieron cargar los repositorios (límite de la API o red). Inténtalo más tarde.";
    setState(featuredEl, msg, true);
    setState(reposEl, "", true);
    if (reposEl) reposEl.innerHTML = "";
  }
}

init();
