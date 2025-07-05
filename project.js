export function loadProject() {
  const app = document.getElementById("app");
  app.innerHTML = ""; 

  const section = document.createElement("section");
  section.className = "project";
  section.id = "project";

  section.innerHTML = `
    <h2 class="heading">Latest <span>Projects</span></h2>
    <div class="project-container">
      <div class="project-box">
        <img src="images/Me.jpg" alt="Project 1">
        <div class="project-layer">
          <h4>Gambar Biasa aja dulu deh</h4>
          <p>Lorem ipsum braderrr</p>
          <a href="#"><i class='bx bx-link-external'></i></a>
        </div>
      </div>
      <div class="project-box">
        <img src="images/Me.jpg" alt="Project 1">
        <div class="project-layer">
          <h4>Gambar Biasa aja dulu deh</h4>
          <p>Lorem ipsum braderrr</p>
          <a href="#"><i class='bx bx-link-external'></i></a>
        </div>
      </div>
      <div class="project-box">
        <img src="images/Me.jpg" alt="Project 1">
        <div class="project-layer">
          <h4>Gambar Biasa aja dulu deh</h4>
          <p>Lorem ipsum braderrr</p>
          <a href="#"><i class='bx bx-link-external'></i></a>
        </div>
      </div>
    </div>
  `;

  app.appendChild(section);
  [
    "https://unpkg.com/scrollreveal",
    "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js",
    "script.js",
  ].forEach((src) => {
    const script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
  });

  setTimeout(() => {
    if (typeof ScrollReveal === "function") {
      ScrollReveal().reveal(".project-container, .project-box", {
        interval: 200,
      });
    }
  }, 50);
}
