<<<<<<< HEAD
<script>
=======
>>>>>>> 7fad70d (Primer commit del nuevo proyecto)

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}


<<<<<<< HEAD
<script/>




/</script>



// seccion de carritos 
=======

>>>>>>> 7fad70d (Primer commit del nuevo proyecto)
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
<<<<<<< HEAD
        li.textContent = `${item.name} - $${item.price}`;
=======
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
>>>>>>> 7fad70d (Primer commit del nuevo proyecto)
        cartItems.appendChild(li);
        cartTotal += item.price;
    });

<<<<<<< HEAD
    total.textContent = cartTotal.toFixed(2);
    cartCount.textContent = cart.length;
    cartModal.style.display = "flex";
}

// Cerrar carrito
closeCart.addEventListener("click", () => {
    cartModal.style.display = "none";
});
=======
    total.textContent = cartTotal.toFixed(2); // Muestra el total con 2 decimales
    cartCount.textContent = cart.length;
    cartModal.style.display = "flex"; // Mostrar el carrito
}

// Cerrar carrito al hacer clic en el botón de cerrar
closeCart.addEventListener("click", () => {
    cartModal.style.display = "none";
});

// Cerrar el modal si se hace clic fuera del contenido
cartModal.addEventListener("click", (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = "none";
    }
});

>>>>>>> 7fad70d (Primer commit del nuevo proyecto)
