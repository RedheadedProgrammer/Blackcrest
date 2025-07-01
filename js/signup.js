// This script handles the signup form validation and submission
// It checks if all fields are filled, if passwords match, and if the user agrees to the terms

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("form3Example1cg").value.trim();
  const email = document.getElementById("form3Example3cg").value.trim();
  const password = document.getElementById("form3Example4cg").value;
  const confirmPassword = document.getElementById("form3Example4cdg").value;
  const agree = document.getElementById("form2Example3cg").checked;

  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }
  if (!agree) {
    alert("You must agree to the Terms of service.");
    return;
  }

  // Save user to localStorage (for demo purposes)
  localStorage.setItem("user", JSON.stringify({ name, email, password }));

  alert("Registration successful! Redirecting to login...");
  window.location.href = "login.html";
});