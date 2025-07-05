export function loadHeader() {
  const header = document.getElementById("header");
  header.innerHTML = "";

  const nav = document.createElement("header");
  nav.className = "header";

  const currentHash = location.hash.slice(1) || "home";

  nav.innerHTML = `
    <a href="#home" class="logo">BramahimmCode</a>
    <nav class="navbar">
      ${[
        ["home", "Home"],
        ["about", "About"],
        ["services", "Services"],
        ["project", "Project"],
        ["contact", "Contact"],
      ]
        .map(
          ([page, label]) =>
            `<a href="#${page}" class="${
              currentHash === page ? "active" : ""
            }">${label}</a>`
        )
        .join("")}
    </nav>
    <div class="bx bx-moon" id="darkMode-icon"></div>
    <div class="bx bx-menu" id="menu-icon"></div>
  `;

  header.appendChild(nav);
  const darkModeToggle = header.querySelector("#darkMode-icon");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
    });

    // Terapkan preferensi user saat load
    const mode = localStorage.getItem("darkMode");
    if (mode === "enabled") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }
}
