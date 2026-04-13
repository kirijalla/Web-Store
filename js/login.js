let account = JSON.parse(localStorage.getItem("account"));
let userEmail = account ? account.email : "";
let userPassword = account ? account.password : "";

document.getElementById("send-btn").addEventListener("click", function (e) {
  e.preventDefault();

  document.getElementById("email-error").textContent = "";
  document.getElementById("password-error").textContent = "";

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let valid = true;

  if (!email || !email.includes("@")) {
    document.getElementById("email-error").textContent =
      "Valid email is required.";
    valid = false;
  }
  if (email !== userEmail) {
    document.getElementById("email-error").textContent =
      "Email not found. Please register.";
    valid = false;
  }
  if (!password) {
    document.getElementById("password-error").textContent =
      "Password is required.";
    valid = false;
  }
  if (password !== userPassword) {
    document.getElementById("password-error").textContent =
      "Incorrect password.";
    valid = false;
  }

  if (valid) {
    document.getElementById("LogInForm").style.display = "none";
    document.getElementById("success-msg").style.display = "block";
  }
});
