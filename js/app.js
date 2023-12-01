
document.addEventListener("DOMContentLoaded", function () {
    let carritoCount = 0;
    let productIds = []

    function updateCartCount() {
        const carritoIcon = document.querySelector(".carrito img");
        carritoIcon.setAttribute("data-count", carritoCount);
        document.getElementById("cart-number").innerHTML = carritoCount;
    }

    function addToCart(event) {
        event.preventDefault();
        const productId = event.target.getAttribute("data-id");


        if (productIds.find((item) => item == productId) == undefined) {
            carritoCount++;
        }
        else {
            alert("Este artículo ya se ingreso.")
        }

        updateCartCount();
    }

    function removeFromCart(event) {
        event.preventDefault();
        const productId = event.target.getAttribute("data-id");
        if (carritoCount > 0) {
            carritoCount--;
        }
        updateCartCount();
    }

    const agregarBotones = document.querySelectorAll(".agregar-carrito");
    const quitarBotones = document.querySelectorAll(".quitar-carrito");

    agregarBotones.forEach(function (boton) {
        boton.addEventListener("click", addToCart);
    });

    quitarBotones.forEach(function (boton) {
        boton.addEventListener("click", removeFromCart);
    });
});
