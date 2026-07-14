/* ==========================================
   SanjiviniSyntax
   utils.js
========================================== */

/* ===========================
   Query Selector
=========================== */

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);



/* ===========================
   Add Event
=========================== */

const on = (element, event, callback) => {

    if (element) {

        element.addEventListener(event, callback);

    }

};

/* ===========================
   Current Year (footer section me website me automatically current year dikhana)
=========================== */

function currentYear() {

    const year = new Date().getFullYear();

    document.querySelectorAll(".current-year").forEach(item => {

        item.textContent = year;

    });

}

/* ===========================
   Debounce (search box ke input field ke liye)
=========================== */

function debounce(callback, delay = 300) {

    let timer;

    return (...args) => {

        clearTimeout(timer);

        timer = setTimeout(() => {

            callback(...args);

        }, delay);

    };

}

/* ===========================
   Window Width
=========================== */

function screenWidth() {

    return window.innerWidth;

}

/* ===========================
   Window Height
=========================== */

function screenHeight() {

    return window.innerHeight;

}


/* ===========================
   Loader
=========================== */

function hideLoader() {

    const loader = $(".loader");

    if (loader) {

        loader.style.display = "none";

    }

}

/* ===========================
   DOM Loaded
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    currentYear();

    hideLoader();

});