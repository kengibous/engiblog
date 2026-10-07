// Theme toggle: cycles light/dark and remembers the choice.
const root = document.documentElement;
const media = window.matchMedia("(prefers-color-scheme: dark)");

function currentTheme() {
  return root.dataset.theme || (media.matches ? "dark" : "light");
}

document.querySelector(".theme-toggle")?.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  setGiscusTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    // storage unavailable (private mode etc.) — toggle still works for this page
  }
});

// Copy buttons on code blocks.
if (navigator.clipboard) {
  for (const block of document.querySelectorAll(".highlight")) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "copy-code";
    button.textContent = "Copy";
    button.addEventListener("click", async () => {
      const code = block.querySelector("pre code");
      try {
        await navigator.clipboard.writeText(code.innerText);
        button.textContent = "Copied!";
      } catch {
        button.textContent = "Failed";
      }
      setTimeout(() => (button.textContent = "Copy"), 2000);
    });
    block.append(button);
  }
}

// giscus comments: load on demand with the current theme, and keep the theme
// in sync when the toggle is used.
const giscusTheme = (theme) => (theme === "dark" ? "dark" : "light");

function setGiscusTheme(theme) {
  const frame = document.querySelector("iframe.giscus-frame");
  frame?.contentWindow.postMessage(
    { giscus: { setConfig: { theme: giscusTheme(theme) } } },
    "https://giscus.app",
  );
}

const giscus = document.querySelector(".giscus-container");
if (giscus) {
  const script = document.createElement("script");
  script.src = "https://giscus.app/client.js";
  script.async = true;
  script.crossOrigin = "anonymous";
  const attrs = {
    repo: giscus.dataset.repo,
    "repo-id": giscus.dataset.repoId,
    category: giscus.dataset.category,
    "category-id": giscus.dataset.categoryId,
    mapping: giscus.dataset.mapping,
    "strict": "1",
    "reactions-enabled": "1",
    "emit-metadata": "0",
    "input-position": "top",
    theme: giscusTheme(currentTheme()),
    lang: "en",
    loading: "lazy",
  };
  for (const [key, value] of Object.entries(attrs)) {
    script.setAttribute(`data-${key}`, value);
  }
  giscus.append(script);
}

// Follow OS theme changes when the visitor hasn't picked one.
media.addEventListener("change", () => {
  if (!root.dataset.theme) setGiscusTheme(currentTheme());
});
