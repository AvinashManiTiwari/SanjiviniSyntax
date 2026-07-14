/* ==========================================
   SanjiviniSyntax
   register.js
========================================== */

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();

    const email = document.getElementById("email").value.trim().toLowerCase();

    const phone = document.getElementById("phone").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;

    if (
        fullname === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {

        alert("Please fill all required fields.");

        return;

    }

    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;

    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(user => user.email === email);

    if (userExists) {

        alert("Email already registered.");

        return;

    }

    const newUser = {

        fullname: fullname,

        email: email,

        phone: phone,

        password: password

    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");

    registerForm.reset();

    window.location.href = "login.html";

});