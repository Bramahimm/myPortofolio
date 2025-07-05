export function loadContact() {
  const app = document.getElementById("app");
  app.innerHTML = ""; // Kosongkan dulu sebelum render

  const section = document.createElement("section");
  section.className = "contact";
  section.id = "contact";

  section.innerHTML = `
    <h2 class="heading">Get in <span>Touch</span></h2>
    <div class="contact-container">
      <div class="contact-box">
        <h3>Contact Info</h3>
        <p>Kalo temen temen sekalian butuh ingpo apapun bisa chat saya yaa</p>
        <div class="contact-info">
          <i class="bx bx-map"></i>
          <span>Teluk Cimeng</span>
        </div>
        <div class="contact-info">
          <i class="bx bx-phone"></i>
          <span>12345678910</span>
        </div>
        <div class="contact-info">
          <i class="bx bx-mail-send"></i>
          <span>bramahimsa123@gmail.com</span>
        </div>
      </div>
      <div class="contact-box">
        <h3>Send a Message</h3>
        <form action="" method="POST">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" class="btn">Send Message</button>
        </form>
      </div>
    </div>
  `;

  app.appendChild(section);
  
}
