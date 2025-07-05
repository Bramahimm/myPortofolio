import { loadHeader } from "./header.js";
import { loadFooter } from "./footer.js";
import { loadHome } from "./home.js";
import { loadContact } from "./contact.js";
import { loadAbout } from "./about.js";
import { loadProject } from "./project.js";
import { loadServices } from "./services.js";

function renderPage() {
  loadHeader();
  loadFooter();
  const page = location.hash.slice(1) || "home";

  const app = document.getElementById("app");
  app.innerHTML = "";

  switch (page) {
    case "home":
      loadHome();
      break;
    case "contact":
      loadContact();
      break;
    case "about":
      loadAbout();
      break;
    case "project":
      loadProject();
      break;
    case "services":
      loadServices();
      break;
    default:
      app.innerHTML = "<h2>404 - Halaman tidak ditemukan</h2>";
  }
}

window.addEventListener("hashchange", renderPage);
window.addEventListener("DOMContentLoaded", renderPage);
