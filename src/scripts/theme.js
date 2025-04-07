// Theme management functions

/**
 * Toggles between light and dark themes
 * @param {boolean} dark - Whether to apply dark theme
 */
export function toggleTheme(dark) {
  const css = document.createElement("style");

  css.appendChild(
    document.createTextNode(
      `* {
           -webkit-transition: none !important;
           -moz-transition: none !important;
           -o-transition: none !important;
           -ms-transition: none !important;
           transition: none !important;
        }
      `
    )
  );

  document.head.appendChild(css);

  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  window.getComputedStyle(css).opacity;
  document.head.removeChild(css);
}

/**
 * Preloads theme from localStorage or system preference
 */
export function preloadTheme() {
  const userTheme = localStorage.getItem("theme");

  if (userTheme === "light" || userTheme === "dark") {
    toggleTheme(userTheme === "dark");
  } else {
    toggleTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }
}

/**
 * Updates the active state of theme buttons
 */
export function updateThemeButtons() {
  const theme = localStorage.getItem("theme");
  const lightThemeButton = document.getElementById("light-theme-button");
  const darkThemeButton = document.getElementById("dark-theme-button");
  const systemThemeButton = document.getElementById("system-theme-button");

  function removeActiveButtonTheme(button) {
    button?.classList.remove("theme-button-active");
  }

  function addActiveButtonTheme(button) {
    button?.classList.add("theme-button-active");
  }

  removeActiveButtonTheme(lightThemeButton);
  removeActiveButtonTheme(darkThemeButton);
  removeActiveButtonTheme(systemThemeButton);

  if (theme === "light") {
    addActiveButtonTheme(lightThemeButton);
  } else if (theme === "dark") {
    addActiveButtonTheme(darkThemeButton);
  } else {
    addActiveButtonTheme(systemThemeButton);
  }
}

/**
 * Initializes theme functionality
 */
export function initTheme() {
  // Initialize theme
  preloadTheme();

  // Set up theme button event listeners
  const lightThemeButton = document.getElementById("light-theme-button");
  lightThemeButton?.addEventListener("click", () => {
    localStorage.setItem("theme", "light");
    toggleTheme(false);
    updateThemeButtons();
  });

  const darkThemeButton = document.getElementById("dark-theme-button");
  darkThemeButton?.addEventListener("click", () => {
    localStorage.setItem("theme", "dark");
    toggleTheme(true);
    updateThemeButtons();
  });

  const systemThemeButton = document.getElementById("system-theme-button");
  systemThemeButton?.addEventListener("click", () => {
    localStorage.setItem("theme", "system");
    toggleTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
    updateThemeButtons();
  });

  // Listen for system theme changes if using system theme
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    if (localStorage.getItem("theme") === "system" || !localStorage.getItem("theme")) {
      toggleTheme(event.matches);
    }
  });
}
