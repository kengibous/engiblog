// Theme toggle: cycles light/dark and remembers the choice.
const root = document.documentElement;
const media = window.matchMedia("(prefers-color-scheme: dark)");

function currentTheme() {
  return root.dataset.theme || (media.matches ? "dark" : "light");
}

document.querySelector(".theme-toggle")?.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
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
