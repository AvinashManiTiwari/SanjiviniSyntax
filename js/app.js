/* ==========================================
   SanjiviniSyntax
   app.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("SanjiviniSyntax Loaded Successfully!");


    /* ===========================
       Current Year
    =========================== */

    const years = document.querySelectorAll(".current-year");

    years.forEach(item => {

        item.textContent = new Date().getFullYear();

    });

    /* ===========================
       Scroll To Top
    =========================== */

    const scrollTop = document.querySelector(".scroll-top");

    if (scrollTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {

                scrollTop.style.display = "flex";

            }

            else {

                scrollTop.style.display = "none";

            }

        });

        scrollTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }



    /* ===========================
       Reveal Animation
    =========================== */

    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {

        reveals.forEach(item => {

            const top = item.getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            if (top < windowHeight - 100) {

                item.classList.add("active");

            }

        });

    }

    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll);

    /* ===========================
       Active Navigation
    =========================== */

    const currentPage = window.location.pathname.split("/").pop();

    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {

        const href = link.getAttribute("href");

        if (

            href === currentPage ||

            (currentPage === "" && href === "index.html")

        ) {

            link.classList.add("active");

        }

    });


    /* ===========================
       Newsletter Form
    =========================== */

    const newsletter = document.querySelector(".newsletter-form");
    if (newsletter) {

        newsletter.addEventListener("submit", (e) => {

            e.preventDefault();
            const input = newsletter.querySelector("input");
            if (!input.value.trim()) {

                alert("Please enter your email.");

                return;

            }
            alert("Thank you for subscribing!");

            newsletter.reset();

        });

    }

/* ===========================
   Contact Form
=========================== */

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("keydown", function (e) {

        if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {

            e.preventDefault();

            const fields = form.querySelectorAll("input, textarea, button");

            const index = Array.from(fields).indexOf(e.target);

            if (index < fields.length - 1) {
                fields[index + 1].focus();
            }

        }

    });

}




    /* ===========================
       Footer Year
    =========================== */

    const footerYear = document.getElementById("year");
    if (footerYear) {

        footerYear.textContent =

            new Date().getFullYear();

    }

    /* ===========================
       Loader
    =========================== */

    const loader = document.querySelector(".loader");
    if (loader) {

        window.addEventListener("load", () => {

            loader.style.display = "none";

        });

    }

    /* ===========================
       Console
    =========================== */

    console.log("All Components Initialized");

});













const form = document.querySelector("form");

form.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
        e.preventDefault();

        const fields = form.querySelectorAll("input, textarea");
        const index = Array.from(fields).indexOf(e.target);

        if (index < fields.length - 1) {
            fields[index + 1].focus();
        }
    }
});









/* ===========================
   Login / Logout Navbar
=========================== */

const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const navlogoutBtn = document.getElementById("logoutBtn");

const currentUser = localStorage.getItem("currentUser");

if (currentUser) {

    // User Login Hai
    if (loginBtn) loginBtn.style.display = "none";
    if (registerBtn) registerBtn.style.display = "none";
    if (navlogoutBtn) logoutBtn.style.display = "inline-block";

} else {

    // User Login Nahi Hai
    if (loginBtn) loginBtn.style.display = "inline-block";
    if (registerBtn) registerBtn.style.display = "inline-block";
    if (navlogoutBtn) logoutBtn.style.display = "none";

}