if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkModeToggle();
    checkbox.classList.add("on");
    checkbox.setAttribute("aria-checked", "true");
  }