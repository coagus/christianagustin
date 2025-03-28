// Efecto de opacidad en el navbar al hacer scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("bg-opacity-80");
    navbar.classList.add("backdrop-blur-sm");
  } else {
    navbar.classList.remove("bg-opacity-80");
    navbar.classList.remove("backdrop-blur-sm");
  }
});

// Resaltar la opción activa en el menú inferior
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const mobileNavLinks = document.querySelectorAll(".md\\:hidden a");

  function highlightActiveSection() {
    let scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        mobileNavLinks.forEach((link) => {
          link.classList.remove("text-blue-600");
          link.classList.add("text-gray-600");
          if (link.getAttribute("href").substring(1) === sectionId) {
            link.classList.remove("text-gray-600");
            link.classList.add("text-blue-600");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightActiveSection);
}); 