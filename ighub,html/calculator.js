function signup() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const phone = document.getElementById('signup-phone').value;
    const password = document.getElementById('signup-password').value;
    const image = document.getElementById('signup-image').files[0];

    if (username && email && phone && password) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const user = {
                username,
                email,
                phone,
                password,
                image: e.target.result
            };
            localStorage.setItem('user', JSON.stringify(user));
            alert('Sign up successful!');
            window.location.href = 'login.html';
        };
        reader.readAsDataURL(image);
    } else {
        alert('Please fill in all fields.');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.username === username && user.password === password) {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password.');
    }
}

function logout() {
    alert('Logged out successfully!');
    window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('username').textContent = user.username;
    }
});