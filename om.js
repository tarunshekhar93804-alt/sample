const products = [
    { id: 1, name: "Wireless Headphones", price: 59.99, img: "assets/images/p1.jpg" },
    { id: 2, name: "Smart Watch", price: 99.99, img: "assets/images/p2.jpg" },
    { id: 3, name: "Bluetooth Speaker", price: 39.99, img: "assets/images/p3.jpg" },
    { id: 4, name: "Gaming Mouse", price: 29.99, img: "assets/images/p4.jpg" },
    { id: 5, name: "Smart Phone", price : 179.99, img:"asests/images/p5.jpg"},
    { id: 6, name: "Remote", price : 19.99, img:"asests/images/p6.jpg"},
    { id: 7, name: "Bottle", price : 5.99, img:"asests/images/p7.jpg"},
    { id: 8, name: "Laptop", price : 1179.99, img:"asests/images/p8.jpg"},
    { id: 9, name: "Adapter", price : 39.99, img:"asests/images/p9.jpg"},
    { id: 10, name: "Earphone", price : 9.99, img:"asests/images/p10.jpg"},
    { id: 11, name: "Powerbank", price : 39.99, img:"asests/images/p11.jpg"},
    { id: 12, name: "Hair Drier", price : 15.99, img:"asests/images/p12.jpg"},
];

let cart = [];


const productList = document.getElementById("product-list");
productList.innerHTML = products.map(p => `
    <div class="product-card">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>$${p.price.toFixed(2)}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
      `).join("");

function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCart();
}

function updateCart() {
    document.getElementById("cart-count").innerText = cart.length;

    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = cart.map(item => `<li>${item.name} - $${item.price}</li>`).join("");

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("cart-total").innerText = total.toFixed(2);
}

function toggleCart() {
    document.getElementById("cart-sidebar").classList.toggle("open");
}
