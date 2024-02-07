document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(registrationForm);
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');

        // Send registration data to server
        registerUser({ username, email, password });

        // Clear form fields
        registrationForm.reset();
    });

    // Function to register a user
    function registerUser(userData) {
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(user => {
            console.log('User registered successfully:', user);
            // You can redirect the user to a login page or display a success message here
        })
        .catch(error => console.error('Error registering user:', error));
    }
});
