/* ==========================================
   SanjiviniSyntax
   auth.js
========================================== */

// check registered users

const users = 
JSON.parse(localStorage.getItem("users")) || [];

if (users.length === 0){
    alert("Please Register First!");
    window.location.href = "register.html";


} else if (!
    localStorage.getItem("currentUser")) {
        alert("Please Login First!");

        window.location.href = "login.html";
    }





// check login
// const currentUser = localStorage.getItem("currentUser");

// if (!currentUser) {

//     alert("Please Login First!");

//     window.location.href = "login.html";

// }