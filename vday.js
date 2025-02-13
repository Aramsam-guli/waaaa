function checkPassword() {
    const password = document.getElementById('password-input').value;
    const correctPassword = '0903'; // Replace with your actual password

    if (password === correctPassword) {
        document.getElementById('password-section').style.display = 'none';
        document.getElementById('message-section').style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
    }
}

