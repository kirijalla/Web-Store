let products = document.querySelectorAll(".product");

let details = [
  {
    image: "images/Homewrecker7.webp",
    name: "Homewrecker",
    price: "$17.99",
    description: "Homewrecker by sombr",
  },
  {
    image: "images/gorillaz.webp",
    name: "Demon Days [2LP]",
    price: "$39.99",
    description: "Demon days by gorillaz",
  },
  {
    image: "images/barbie.webp",
    name: "Barbie The Album (White) (Limited Edition) Vinyl [LP]",
    price: "$32.99",
    description: "Barbie soundtrack by various artists",
  },
  {
    image: "images/BEWITCHED.jpeg",
    name: "Bewitched",
    price: "$59.99",
    description: "Bewitched by Laufey",
  },
  {
    image: "images/FUNNY-LITTLE-FEARS.jpg",
    name: "Funny little fears",
    price: "$49.99",
    description: "Funny little fears by Damiano David",
  },
  {
    image: "images/IRIS-OUT.jpg",
    name: "Iris out",
    price: "$37.99",
    description: "Iris out by Kenshi Yonezu",
  },
  {
    image: "images/LPFZSpotify.webp",
    name: "From Zero Spotify Fans First Vinyl [LP]",
    price: "$44.99",
    description: "From Zero Spotify Fans First Vinyl [LP] by linkin park",
  },
  {
    image: "images/buble.webp",
    name: "Christmas Green [LP + Exclusive Flexidisc]",
    price: "$37.99",
    description: "Christmas Green [LP + Exclusive Flexidisc] by michael buble",
  },
  {
    image: "images/mystical.webp",
    name: "American Heart - Galaxy Marble Spotify Fans First Vinyl [LP]",
    price: "$39.99",
    description:
      "American Heart - Galaxy Marble Spotify Fans First Vinyl [LP] by Bonson boone",
  },
  {
    image: "images/rosie.webp",
    name: "Rosie",
    price: "$39.99",
    description: "Rosie by Rose",
  },
  {
    image: "images/RUSH.jpg",
    name: "Rush",
    price: "$29.99",
    description: "Rush by Maneskin",
  },
  {
    image: "images/headphones.webp",
    name: ">ATH-M50xENSO",
    price: "$249.99",
    description: "Headphones by Audio-Technica",
  },
  {
    image: "images/headphones2.webp",
    name: "WH-ATH-M50x",
    price: "$249.99",
    description: "Headphones by Audio-Technica",
  },
  {
    image: "images/turntable.webp",
    name: "AT-LP70X",
    price: "$269.99",
    description: "Turntable by Audio-Technica",
  },
  {
    image: "images/turntable2.webp",
    name: "Hotaru",
    price: "$14,000.00",
    description: "Turntable by Audio-Technica",
  },
];

function viewProductdetails(index) {
  let product = details[index];
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "product-details.html";
}

let product = JSON.parse(localStorage.getItem("selectedProduct"));

if (product) {
    document.getElementById("product-image").src = product.image;
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent = product.price;
  document.getElementById("product-description").textContent = product.description;

  let qty = document.getElementById("quantity");
  let total = document.getElementById("total-price");
  let basePrice = parseFloat(product.price.replace(/[$,]/g, ""));

  total.textContent = "$" + basePrice.toFixed(2);

  qty.addEventListener("input", () => {
    total.textContent = "$" + (basePrice * qty.value).toFixed(2);
  });

  document.getElementById("add-to-cart").addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...product, quantity: parseInt(qty.value) });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  });
}
