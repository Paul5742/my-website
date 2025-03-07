function signup() {
    let username = document.getElementById("signup-username").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let reCAPTCHA = grecaptcha.getResponse(); // Get reCAPTCHA response
    if (username === "" || email === "" || password === "") {
        alert("please fill in all fields");
        return;
    }
    if (reCAPTCHA === "") {
        alert("please verify you are not a robot!!");
        return;
    }
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("sign-up successful! Redirecting to login page");
    window.location.href = "login.html"; // Redirect to login page
}

function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    let reCAPTCHA = grecaptcha.getResponse(); // Get reCAPTCHA response
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");
    if (email === "" || password === "") {
        alert("please fill in all fields");
        return;
    }
    if (reCAPTCHA === "") {
        alert("please verify you are not a robot");
        return;
    }
    if (email === storedEmail && password === storedPassword) {
        alert("login successful!");
        window.location.href = "dashboard.html"; // Redirect to another page
    } else {
        alert("Invalid email or password");
    }
}
    