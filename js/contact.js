document.getElementById("send-btn").addEventListener("click", () => {
  let name = document.getElementById("contact-name").value.trim();
  let email = document.getElementById("contact-email").value.trim();
  let message = document.getElementById("contact-message").value.trim();
  let valid = true;

  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("message-error").textContent = "";

  if (!name) {
    document.getElementById("name-error").textContent = "Name is required.";
    valid = false;
  }
  if (!email || !email.includes("@")) {
    document.getElementById("email-error").textContent = "Valid email is required.";
    valid = false;
  }
  if (!message) {
    document.getElementById("message-error").textContent = "Message is required.";
    valid = false;
  }

  if (valid) {
    document.getElementById("contact-form").style.display = "none";
    document.getElementById("success-msg").style.display = "block";
  }
});

