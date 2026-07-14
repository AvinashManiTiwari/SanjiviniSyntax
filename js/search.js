// /* ==========================================
//    SanjiviniSyntax
//    search.js
// ========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       Elements
    =========================== */

    const searchInput = document.querySelector(".search-input");

    const cards = document.querySelectorAll(".search-card");





    if (!searchInput || cards.length === 0) {

        return;

    }





//     /* ===========================
//        No Result Message
//     =========================== */

    const noResult = document.createElement("p");

    noResult.textContent = "No matching results found.";

    noResult.style.textAlign = "center";

    noResult.style.marginTop = "30px";

    noResult.style.fontWeight = "600";

    noResult.style.display = "none";

    searchInput.parentElement.appendChild(noResult);





//     /* ===========================
//        Live Search
//     =========================== */

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase().trim();
        let visibleCount = 0;
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(keyword)) {
                card.style.display = "";

                visibleCount++;
            }
            else {
                card.style.display = "none";
            }
        });

        if (visibleCount === 0) {
            noResult.style.display = "block";
        }
        else {
            noResult.style.display = "none";
        }
    });





//     /* ===========================
//        ESC Clear Search
//     =========================== */

    searchInput.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            searchInput.value = "";



            cards.forEach(card => {

                card.style.display = "";

            });



            noResult.style.display = "none";

        }

    });





//     /* ===========================
//        Auto Focus (Optional)
//     =========================== */

    // searchInput.focus();

});
































//  code for home search button

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// // code for course search button
// const searchInput = document.getElementById("courseSearch");
// const searchBtn = document.getElementById("courseBtn");



// Search Function
function searchPage() {

    let value = searchInput.value.trim().toLowerCase();

    if(value === ""){
        alert("Please enter something!");
        return;
    }

    // Home
    if(value.includes("home")){
        window.location.href = "index.html";
    }

    // Courses
    else if(value.includes("course") || value.includes("html") || value.includes("css") || value.includes("javascript") || value.includes("java") || value.includes("react") || value.includes("python") || value.includes("data structure and algorithm") || value.includes("database management system") || value.includes("computer network") || value.includes("operating system") || value.includes("cyber security")  || value.includes("software engineering") || value.includes("dbms") || value.includes("dsa") || value.includes("os")
     || value.includes("js")){
        window.location.href = "courses.html";
    }

    // Notes
    else if(value.includes("notes")){
        window.location.href = "notes.html";
    }

    // Videos
    else if(value.includes("video")){
        window.location.href = "videos.html";
    }

    // Quiz
    else if(value.includes("quiz")){
        window.location.href = "quiz.html";
    }

    // Dashboard
    // else if(value.includes("dashboard")){
    //     window.location.href = "dashboard.html";
    // }

    // About
    else if(value.includes("about")){
        window.location.href = "about.html";
    }

    // Contact
    else if(value.includes("contact")){
        window.location.href = "contact.html";
    }

    // Login
    else if(value.includes("login") || value.includes("sign in")){
        window.location.href = "login.html";
    }

    // Register
    else if(value.includes("register") || value.includes("signup") || value.includes("sign up")){
        window.location.href = "register.html";
    }

    // FAQ
    else if(value.includes("faq") || value.includes("question")){
        window.location.href = "faq.html";
    }

    // Privacy
    else if(value.includes("privacy")){
        window.location.href = "privacy-policy.html";
    }

    // Terms
    else if(value.includes("terms")){
        window.location.href = "terms-and-conditions.html";
    }

    else{
        alert("No result found!");
    }
}

// Button Click
searchBtn.addEventListener("click", searchPage);

// Enter Press
searchInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        searchPage();
    }
});




