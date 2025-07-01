
// Login functionality for the login page
// This script handles user login by checking credentials against localStorage
   document.getElementById("loginBtn").addEventListener("click", function() {
  const email = document.getElementById("typeEmailX").value.trim();
  const password = document.getElementById("typePasswordX").value;

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  // Retrieve user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    alert("Login successful!");
    window.location.href = "index-2.html"; // Redirect to the main page(2nd page)
  } else {
    alert("Invalid email or password.");
  }
});