let cart = JSON.parse(localStorage.getItem("cart"));
let summaryEl = document.getElementById("order-summary");
let cartContainer = document.getElementById("cart-container");
let totalEl = document.getElementById("cart-total");

function getTotal() {
  return cart.reduce((sum, item) => {
    let price = parseFloat(item.price.replace(/[$,]/g, ""));
    return sum + price * item.quantity;
  }, 0);
}

function renderCart() {
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalEl.textContent = "$0.00";
    return;
  }

  cart.forEach((item, index) => {
    let cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <label>Quantity:</label>
        <input type="number" class="qty-input" value="${item.quantity}" min="1" data-index="${index}" />
      </div>
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;
    cartContainer.appendChild(cartItem);
  });

  document.querySelectorAll(".qty-input").forEach((input) => {
    input.addEventListener("input", (e) => {
      let index = e.target.getAttribute("data-index");
      cart[index].quantity = parseInt(e.target.value) || 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      totalEl.textContent = "$" + getTotal().toFixed(2);
    });
  });

  document.querySelectorAll(".remove-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      let index = e.target.getAttribute("data-index");
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
  });

  totalEl.textContent = "$" + getTotal().toFixed(2);
}

let total = 0;
cart.forEach((item) => {
  let price = parseFloat(item.price.replace(/[$,]/g, ""));
  total += price * item.quantity;
  let div = document.createElement("div");
  div.innerHTML = `<p>${item.name} x${item.quantity} — $${(price * item.quantity).toFixed(2)}</p>`;
  summaryEl.appendChild(div);
});
totalEl.textContent = "$" + total.toFixed(2);

renderCart();
