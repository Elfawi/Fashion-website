/* Responsive navigation */
const phoneMenu = document.querySelector(".phone-menu");
const nav = document.querySelector(".nav__list");

phoneMenu.addEventListener("click", () => {
  nav.classList.toggle("nav__list--responsive");
});

document.addEventListener("click", (e) => {
  if (e.target !== phoneMenu) {
    nav.classList.remove("nav__list--responsive");
  }
});
/* End of responsive navigation */
//  Smooth scrolling
const links = [...document.querySelectorAll("a")];

links.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const hash = e.target.getAttribute("href");

    if (hash === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",

      });
    }
  })
);
// End of smooth scrolling