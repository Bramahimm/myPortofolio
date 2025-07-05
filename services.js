export function loadServices() {
  const app = document.getElementById("app");
  app.innerHTML = ""; // Bersihkan konten lama

  const section = document.createElement("section");
  section.className = "services";
  section.id = "services";

  section.innerHTML = `
    <h2 class="heading">My <span>Services</span></h2>
    <div class="services-container">
      <div class="services-box">
        <i class='bx bx-code-alt'></i>
        <h3>Web Development</h3>
        <p>Membangun sebuah web, biar kita juga bisa bangun pagi.</p>
        <a href="project.html" class="btn">Letsgooo</a>
      </div>
      <div class="services-box">
        <i class='bx bx-paint'></i>
        <h3>UI/UX Design</h3>
        <p>Ngedesign supaya hidup kita juga penuh dengan warna</p>
        <a href="project.html" class="btn">Letsgooo</a>
      </div>
      <div class="services-box">
        <i class='bx bx-coffee'></i>
        <h3>Membuat kopi</h3>
        <p>Ini yang paling penting, supaya kita ga ngantuk waktu ngoding</p>
        <a href="project.html" class="btn">Letsgooo</a>
      </div>
    </div>
  `;

  app.appendChild(section);

  // Re-load animasi dan script eksternal
  [
    "https://unpkg.com/scrollreveal",
    "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js",
    "script.js",
  ].forEach((src) => {
    const script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
  });

  // Re-trigger ScrollReveal setelah elemen muncul
  setTimeout(() => {
    if (typeof ScrollReveal === "function") {
      ScrollReveal().reveal(".services-box", { interval: 200 });
    }
  }, 50);
}
