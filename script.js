const hamburgerMenu = document.querySelector(".hamburgerMenu");
const heroSection = document.querySelector(".heroSection");
const mobileNavContainer = document.querySelector(".mobileNavContainer");
const closeMobileMenu = document.querySelector(".closeMobileMenu");

hamburgerMenu.addEventListener("click", (e) => {
  e.preventDefault();
  heroSection.classList.toggle("hide");
  mobileNavContainer.classList.toggle("show");
});
