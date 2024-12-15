<script>

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}


<script/>




/</script>



// seccion de carritos 
const cart = [];
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");

// Añadir producto al carrito
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const car = button.parentElement;
        const name = car.dataset.name;
        const price = parseFloat(car.dataset.price);

        cart.push({ name, price });
        updateCart();
    });
});

// Actualizar carrito
function updateCart() {
    cartItems.innerHTML = "";
    let cartTotal = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        cartTotal += item.price;
    });

    total.textContent = cartTotal.toFixed(2);
    cartCount.textContent = cart.length;
    cartModal.style.display = "flex";
}

// Cerrar carrito
closeCart.addEventListener("click", () => {
    cartModal.style.display = "none";
});