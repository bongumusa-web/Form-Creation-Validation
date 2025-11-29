document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        //retriving input values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true;
        let messages = [];

        // Username validation 
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
            document.getElementById("username").style = "border: 2px solid red;";
        } else {
            document.getElementById("username").style = "border: 2px solid green;";
        }

        // Email validation should include email includes '@' and '.')
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email should include @ and . characters.");
            document.getElementById("email").style = "border: 2px solid red;";
        } else {
            document.getElementById("email").style = "border: 2px solid green;";
        }

        // Password validation 
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
            document.getElementById("password").style = "border: 2px solid red;";
        } else {
            document.getElementById("password").style = "border: 2px solid green;";
        }

        // Display feedback 
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.style.backgroundColor = "#d4edda";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.backgroundColor = "#f8d7da";
        }
    });
});
