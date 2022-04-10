export function loadTheme() {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
  }

  const theme = localStorage.getItem("theme")!;

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function toggleTheme() {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
  }

  const theme = localStorage.getItem("theme")!;

  localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  loadTheme();
}
