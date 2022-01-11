const nav = document.querySelector(".primary-navigation");

const navToggle = document.querySelector(".mobile-nav-toggle");

// when someone clicks the hamburger menu button
navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    // if the nav is closed, open it
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    // if the nav is open, close it
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
  console.log(navToggle);
});
