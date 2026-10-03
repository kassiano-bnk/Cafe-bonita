const header = document.querySelector("header");
const toggle = () => header.classList.toggle("scrolled", window.scrollY > 4);
window.addEventListener("scroll", toggle, { passive: true });
toggle();
