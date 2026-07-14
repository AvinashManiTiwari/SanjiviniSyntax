/* ==========================================
   SanjiviniSyntax
   menu.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       Elements
    =========================== */

    const menuToggle = document.querySelector(".menu-toggle");

    const navbar = document.querySelector(".navbar");

    const navLinks = document.querySelectorAll(".nav-links a");

    const header = document.querySelector(".header");





    /* ===========================
       Mobile Menu Toggle
    =========================== */

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {

            navbar.classList.toggle("active");

            menuToggle.classList.toggle("active");

        });

    }





    /* ===========================
       Close Menu After Click
    =========================== */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            menuToggle.classList.remove("active");

        });

    });





    /* ===========================
       Close Menu Outside Click
    =========================== */

    document.addEventListener("click", (e) => {

        if (

            navbar &&
            menuToggle &&
            !navbar.contains(e.target) &&
            !menuToggle.contains(e.target)

        ) {

            navbar.classList.remove("active");

            menuToggle.classList.remove("active");

        }

    });





    /* ===========================
       Sticky Header
    =========================== */

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });





    /* ===========================
       Active Navigation Link
    =========================== */

    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {

            link.classList.add("active");

        }

    });





    /* ===========================
       ESC Key Close Menu
    =========================== */

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            navbar.classList.remove("active");

            menuToggle.classList.remove("active");

        }

    });

});