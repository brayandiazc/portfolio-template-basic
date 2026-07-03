/* ==========================================================================
   Plantilla Portafolio Básico — lógica de la página
   - "Proyectos": lista curada a mano (assets/js/projects.js).
   - "Repositorios": desde la API pública de GitHub, los que tienen estrellas,
     ordenados por número de estrellas.
   - Alterna tema claro/oscuro con persistencia.
   ========================================================================== */

import { PROJECTS } from "./projects.js";

/* ===== CONFIG ===== */
const CONFIG = {
  // Usuario de GitHub del que se listan los repositorios. Cámbialo por el tuyo.
  githubUsername: "brayandiazc",
  // Repos que nunca se muestran (p. ej. el repo de perfil "usuario/usuario").
  exclude: ["brayandiazc"],
  // Ocultar forks del listado.
  hideForks: true,
  // Solo mostrar repos con al menos esta cantidad de estrellas (0 = todos).
  minStars: 1,
  // Máximo de repos a mostrar (0 = sin límite).
  maxRepos: 12,
  // Topics a mostrar por card.
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

const renderTags = (tags = [], cls = "topic") =>
  tags.length
    ? `<div class="topics">${tags
        .slice(0, CONFIG.maxTopics)
        .map((t) => `<span class="${cls}">${escapeHtml(t)}</span>`)
        .join("")}</div>`
    : "";

/* ===== PROYECTOS (curados) ===== */
function projectCard(p) {
  const links = [
    p.demoUrl
      ? `<a class="repo-link" href="${encodeURI(p.demoUrl)}" target="_blank" rel="noopener">Demo →</a>`
      : "",
    p.repoUrl
      ? `<a class="repo-link" href="${encodeURI(p.repoUrl)}" target="_blank" rel="noopener">Código →</a>`
      : "",
  ]
    .filter(Boolean)
    .join("");

  return `
    <article class="repo-card">
      <h3>${escapeHtml(p.title || "Proyecto")}</h3>
      <p class="desc">${escapeHtml(p.description || "")}</p>
      ${renderTags(p.tags)}
      <div class="foot">
        <span class="stats"></span>
        <span class="links">${links}</span>
      </div>
    </article>`;
}

function renderProjects() {
  const el = document.getElementById("project-cards");
  if (!el) return;
  if (!Array.isArray(PROJECTS) || !PROJECTS.length) {
    el.innerHTML = `<p class="state">Añade tus proyectos en <code>assets/js/projects.js</code>.</p>`;
    return;
  }
  el.innerHTML = PROJECTS.map(projectCard).join("");
}

/* ===== REPOSITORIOS (GitHub) ===== */
async function ghJson(url) {
  const res = await fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  return res.json();
}

async function loadRepos() {
  const user = CONFIG.githubUsername;
  const repos = await ghJson(
    `https://api.github.com/users/${user}/repos?per_page=100&sort=updated`
  );

  let visible = repos.filter(
    (r) =>
      !CONFIG.exclude.includes(r.name) &&
      !(CONFIG.hideForks && r.fork) &&
      !r.archived &&
      r.stargazers_count >= CONFIG.minStars
  );

  visible.sort((a, b) => b.stargazers_count - a.stargazers_count);

  if (CONFIG.maxRepos > 0) visible = visible.slice(0, CONFIG.maxRepos);
  return visible;
}

function repoCard(repo) {
  return `
    <article class="repo-card">
      <h3>${escapeHtml(repo.name)}</h3>
      <p class="desc">${escapeHtml(truncate(repo.description, 120))}</p>
      ${renderTags(repo.topics)}
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

/* ===== INIT ===== */
async function init() {
  initTheme();
  renderProjects();

  const reposEl = document.getElementById("repo-cards");
  const setState = (msg, isError = false) => {
    if (reposEl)
      reposEl.innerHTML = `<p class="state${isError ? " error" : ""}">${msg}</p>`;
  };

  setState("Cargando repositorios…");
  try {
    const repos = await loadRepos();
    if (!repos.length) {
      setState("No hay repositorios con estrellas para mostrar.");
      return;
    }
    reposEl.innerHTML = repos.map(repoCard).join("");
  } catch (err) {
    console.error(err);
    setState(
      "No se pudieron cargar los repositorios (límite de la API o red). Inténtalo más tarde.",
      true
    );
  }
}

init();
