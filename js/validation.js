document.addEventListener('DOMContentLoaded', function () {
    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate password strength
    function isValidPassword(password) {
        // Add your password strength criteria here
        // For simplicity, let's require a minimum of 8 characters
        return password.length >= 8;
    }

    // Function to validate form inputs
    function validateForm(username, password) {
        return username.trim() !== '' && password.trim() !== '';
    }

    // Function to validate login form
    function validateLoginForm(username, password) {
        return validateForm(username, password);
    }

    // Function to validate signup form
    function validateSignupForm(username, password) {
        return validateForm(username, password) && isValidEmail(username) && isValidPassword(password);
    }

    // Function to handle form submission
    function handleFormSubmission(event, validationFunction, successMessage, failureMessage) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (validationFunction(username, password)) {
            alert(successMessage);
        } else {
            alert(failureMessage);
        }
    }

    // Event listener for login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            handleFormSubmission(event, validateLoginForm, 'Login successful!', 'Invalid login credentials. Please try again.');
        });
    }

    // Event listener for signup form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            handleFormSubmission(event, validateSignupForm, 'Signup successful!', 'Invalid signup details. Please check your input and try again.');
        });
    }
});
