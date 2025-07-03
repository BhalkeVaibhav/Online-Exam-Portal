
  function handleRegister(event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return false;
    }

    // Simulate storing user data or sending to backend
    alert(`Registration successful!\nWelcome, ${fullname}`);

    // Optional: Redirect to login page
    // window.location.href = "login.html";

    return false;
  }