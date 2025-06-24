document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".header-nav li.toggle > a").forEach((item) => {
    item.addEventListener("click", (e) => {
      if (window.innerWidth <= 767) {
        e.preventDefault();

        item.parentElement.classList.toggle("open");
      }
    });
  });

  document.addEventListener("click", function (e) {
    const isClickInside =
      hamburger.contains(e.target) || navMenu.contains(e.target);

    if (!isClickInside && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");

      document
        .querySelectorAll(".header-nav li.toggle.open")
        .forEach((openItem) => {
          openItem.classList.remove("open");
        });
    }
  });
});
