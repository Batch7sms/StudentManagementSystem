const authForm = document.getElementById('auth-form');
const formTitle = document.getElementById('form-title');
const formSubtitle = document.getElementById('form-subtitle');
const toggleForm = document.getElementById('toggle-form');

let isLogin = true;

const adminCredentials = {
    username: 'admin',
    password: '1234'
};

toggleForm.addEventListener('click', () => {
    isLogin = !isLogin;
    if (isLogin) {
        formTitle.textContent = 'Student Management System';
        formSubtitle.textContent = 'Login Page';
        toggleForm.textContent = 'Switch to Sign Up';
    } else {
        formTitle.textContent = 'Student Management System';
        formSubtitle.textContent = 'Sign Up Page';
        toggleForm.textContent = 'Switch to Login';
    }
});

authForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userType = document.getElementById('user-type').value;
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (userType === 'admin') {
        if (username === adminCredentials.username && password === adminCredentials.password) {
            alert('Login successful as Admin!');
            window.location.href = './admin/admin.html';
        } else {
            alert('Invalid admin username or password.');
        }
    } else if (userType === 'teacher') {
        alert('Login successful as Teacher!');
        window.location.href = '/teacher';
    } else if (userType === 'student') {
        alert('Login successful as Student!');
        window.location.href = '/student';
    } else {
        alert('Please select a valid user type.');
    }

    authForm.reset();
});
