const year = document.getElementById("year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("main-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open");
  });
}
