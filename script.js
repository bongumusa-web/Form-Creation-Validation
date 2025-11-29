document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById('registration-form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        feedbackDiv.innerHTML = '';

        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        let isValid = true;
        let messages = [];

        // Username validation
        if (usernameValue.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
            username.style = 'border: 2px solid red;';
        } else {
            username.style = 'border: 2px solid green;';
        }

        // Email validation (regex is OK)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            isValid = false;
            messages.push('Email should include @ and . characters.');
            email.style = 'border: 2px solid red;';
        } else {
            email.style = 'border: 2px solid green;';
        }

        // Password validation
        if (passwordValue.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
            password.style = 'border: 2px solid red;';
        } else {
            password.style = 'border: 2px solid green;';
        }

        // Show feedback once (not inside a loop)
        feedbackDiv.style.display = 'block';

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = '#28a745';
            feedbackDiv.style.backgroundColor = '#d4edda';
            feedbackDiv.style.padding = '10px';
            feedbackDiv.style.borderRadius = '5px';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.backgroundColor = '#f8d7da';
            feedbackDiv.style.padding = '10px';
            feedbackDiv.style.borderRadius = '5px';
        }
    });

});
