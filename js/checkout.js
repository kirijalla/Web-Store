
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let summaryEl = document.getElementById("order-summary");
let totalEl = document.getElementById("order-total");

if (cart.length === 0) {
  summaryEl.innerHTML = "<p>Your cart is empty.</p>";
} else {
  let total = 0;
  cart.forEach(item => {
    let price = parseFloat(item.price.replace(/[$,]/g, ""));
    total += price * item.quantity;
    let div = document.createElement("div");
    div.innerHTML = `<p>${item.name} x${item.quantity} — $${(price * item.quantity).toFixed(2)}</p>`;
    summaryEl.appendChild(div);
  });
  totalEl.textContent = "$" + total.toFixed(2);
}

document.getElementById("place-order").addEventListener("click", () => {
  let name = document.getElementById("name").value.trim();
  let address = document.getElementById("address").value.trim();
  let payment = document.getElementById("payment").value;
  let valid = true;

  document.getElementById("name-error").textContent = "";
  document.getElementById("address-error").textContent = "";
  document.getElementById("payment-error").textContent = "";

  if (!name) {
    document.getElementById("name-error").textContent = "Name is required.";
    valid = false;
  }
  if (!address) {
    document.getElementById("address-error").textContent = "Address is required.";
    valid = false;
  }
  if (!payment) {
    document.getElementById("payment-error").textContent = "Please select a payment method.";
    valid = false;
  }

  if (valid) {
    document.getElementById("billing-form").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
    localStorage.removeItem("cart");
  }
});

