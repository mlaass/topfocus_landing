// JS Goes here - ES6 supported

import "./css/main.css";

// Import Decap CMS
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

// Mobile menu functionality
const mobileMenu = document.querySelector("[data-mobile-menu]");
const nav = document.querySelector("[data-nav]");

if (mobileMenu && nav) {
  function toggleMobileMenu() {
    nav.classList.toggle("menu-open");
  }

  mobileMenu.addEventListener("click", toggleMobileMenu);
}

// Say hello
// eslint-disable-next-line no-console
console.log("🦊 Hello! Edit me in src/index.js");
