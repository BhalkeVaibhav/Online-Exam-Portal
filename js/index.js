
  function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "root" && password === "1234") {
      alert("Login successful!");
      window.location.href = "start.html"; // ✅ Redirect to your homepage
    } else {
      alert("Invalid credentials. Try again.");
    }

    return false;
  }
