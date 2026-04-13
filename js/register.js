document.getElementById("send-btn").addEventListener("click", function (e) {
  e.preventDefault();

  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("password-error").textContent = "";
  document.getElementById("confirm-password-error").textContent = "";

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirm_password = document.getElementById("confirm_password").value;
  let valid = true;

  if (!name) {
    document.getElementById("name-error").textContent = "Name is required.";
    valid = false;
  }
  if (!email || !email.includes("@")) {
    document.getElementById("email-error").textContent =
      "Valid email is required.";
    valid = false;
  }
  if (!password) {
    document.getElementById("password-error").textContent =
      "Password is required.";
    valid = false;
  }
  if (password !== confirm_password) {
    document.getElementById("confirm-password-error").textContent =
      "Passwords do not match.";
    valid = false;
  }

  if (valid) {
    document.getElementById("regForm").style.display = "none";
    document.getElementById("success-msg").style.display = "block";
    let account = JSON.stringify({ name, email, password });
    localStorage.setItem("account", account);
  }
});
