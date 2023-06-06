import * as init from "./init.js";
import * as product from "./products.js";

export default function loadEvents() {
  init.loadDynamicComponent(".product-button__buy").forEach((button) => {
    button.addEventListener("click", (event) => {
      document.querySelector(".main-cart__cartSVG").dataset.cart =
        ++document.querySelector(".main-cart__cartSVG").dataset.cart;
      
        console.log(product.getProductById(parseInt(event.target.value)));
    });
  });
}
