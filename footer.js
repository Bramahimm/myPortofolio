export function loadFooter() {
  const footer = document.getElementById("footer");
  footer.innerHTML = "";

  const footerElem = document.createElement("footer");
  footerElem.className = "footer";
  footerElem.innerHTML = `
    <div class="footer-text">
      <p>Copyright &copy; Bram 2025 | All Rights Reserved.</p>
    </div>
    <div class="footer-iconTop">
      <a href="#"><i class='bx bx-up-arrow-alt'></i></a>
    </div>
  `;
  footer.appendChild(footerElem);
}
