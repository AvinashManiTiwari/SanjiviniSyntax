const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function (e) {

        e.preventDefault();

        localStorage.removeItem("currentUser");

        alert("Logged Out Successfully!");

        window.location.href = "login.html";

    });

}


// logout button  hide when course.html 


// const logoutBtn = document.getElementById("logoutBtn");

// if (logoutBtn) {

//     logoutBtn.addEventListener("click", function () {

//         localStorage.removeItem("currentUser");

//         alert("Logout Successful!");

//         window.location.href = "login.html";

//     });

// }