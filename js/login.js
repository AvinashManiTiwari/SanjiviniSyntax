/* ==========================================
   SanjiviniSyntax
   login.js
========================================== */

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();

    const password = document.getElementById("password").value;

    const rememberMe = document.getElementById("rememberMe").checked;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(function (item) {

        return item.email === email && item.password === password;

    });

    if (!user) {

        alert("Please Register first or enter a valid Email and Password!");

        return;

    }

    // Current Login User
    localStorage.setItem("currentUser", JSON.stringify(user));

    // Remember Me
    if (rememberMe) {

        localStorage.setItem("rememberEmail", email);

    } else {

        localStorage.removeItem("rememberEmail");

    }

    alert("Login Successful!");

    loginForm.reset();

    window.location.href = "index.html";

});

/* ==========================
   Remember Email
========================== */

window.addEventListener("DOMContentLoaded", function () {

    const rememberedEmail = localStorage.getItem("rememberEmail");

    if (rememberedEmail) {

        document.getElementById("email").value = rememberedEmail;

        document.getElementById("rememberMe").checked = true;

    }

});


/* ===========================
   Show / Hide Password
=========================== */

const passwordInput = document.getElementById("password");

const togglePassword = document.querySelector(".toggle-password");

const eyeIcon = togglePassword.querySelector("i");

togglePassword.addEventListener("click", function(){

    if(passwordInput.type === "password"){

        passwordInput.type = "text";

        eyeIcon.classList.remove("fa-eye");

        eyeIcon.classList.add("fa-eye-slash");

    }

    else{

        passwordInput.type = "password";

        eyeIcon.classList.remove("fa-eye-slash");

        eyeIcon.classList.add("fa-eye");

    }

});
