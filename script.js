// 1. Toggle Dark Mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// 2. Handle registration form submission
document.getElementById('registration-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  // Get input values
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  // Basic validation
  if (username.length < 3) {
    alert('Username must be at least 3 characters.');
    return;
  }

  const emailPattern = /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters.');
    return;
  }

  // All inputs are valid
  alert('Registration successful!');
  this.reset(); // Clear form
});

// 3. Live text input update
document.getElementById('inputBox').addEventListener('input', function () {
  const output = document.getElementById('Output');
  const value = this.value.trim();
  output.textContent = value ? `You typed: ${value}` : 'Waiting...';
});
