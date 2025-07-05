export function loadAbout() {
  const app = document.getElementById("app");
  app.innerHTML = ""; // Bersihkan sebelum render

  const section = document.createElement("section");
  section.className = "about";
  section.id = "about";

  section.innerHTML = `
    <div class="about-content">
      <h2 class="heading">About <span>Bramahimm</span></h2>
      <h3>Pilot</h3>
      <p>Halo, saya bram ahimsa lafayet, anak teluk. Sekarang lagi pokus untuk bermain main dulu, tapi sebenernya punya cita cita pilot, makanya suka tidur</p>
      <p>Tujuan saya mau jadi pilot karena saya dulu bingung waktu SD ditanya cita cita jadi apa, makanya jadi pilot aja deh biar cepet</p>
      <a href="project.html" class="btn">View Projects</a>
    </div>
    <div class="about-img">
      <img src="images/Me.jpg" alt="About Me Image">
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

  // Re-trigger animasi jika sudah dimuat
  setTimeout(() => {
    if (typeof ScrollReveal === "function") {
      ScrollReveal().reveal(".about-content, .about-img", { interval: 200 });
    }
  }, 200);
}
