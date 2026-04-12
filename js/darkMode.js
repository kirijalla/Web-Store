
const toggleBtn = document.getElementById("dark-toggle");

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "Light Mode";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  let isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark);
  toggleBtn.textContent = isDark ? " Light Mode" : "Dark Mode";
});