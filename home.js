export function loadHome() {
  const app = document.getElementById("app");
  const section = document.createElement("section");
  section.className = "home";
  section.id = "home";

  section.innerHTML = `
    <div class="home-content">
      <h3>Hello, Gua</h3>
      <h1>Bram Ahimsa</h1>
      <p>kegiatan saya saat ini adalah tidur, bangun, ngoding, repeat (kalo lagi malas ya ke indomaret beli golda)</p>
      <p>keseharian saya hanya tidur, makan, minum, mengasap dan skrol tiktod.</p>
      <div class="social-media">
        <a href="https://github.com/bramahimm" target="_blank"><i class='bx bxl-github'></i></a>
        <a href="https://linkedin.com/in/bramahimsa28" target="_blank"><i class='bx bxl-linkedin'></i></a>
        <a href="mailto:bramahimm@example.com"><i class='bx bxl-gmail'></i></a>
      </div>
      <a href="#" class="btn">Donlot CV</a>
    </div>
    <div class="profession-container">
      <div class="profession-box">
        <div class="profession" style="--i:0"><i class='bx bx-code-alt'></i><h3>Suka ngoding</h3></div>
        <div class="profession" style="--i:1"><i class='bx bx-camera'></i><h3>Suka senja</h3></div>
        <div class="profession" style="--i:2"><i class='bx bx-palette'></i><h3>Suka design</h3></div>
        <div class="profession" style="--i:3"><i class='bx bx-video-recording'></i><h3>Editor</h3></div>
        <div class="circle"></div>
      </div>
      <div class="overlay"></div>
    </div>
    <div class="home-img"><img src="images/me.png" alt=""></div>
  `;

  app.appendChild(section);

  ["https://unpkg.com/scrollreveal", "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js", "script.js"]
    .forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      document.body.appendChild(script);
    });
}
