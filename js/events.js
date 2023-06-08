import * as init from "./init.js";
import * as product from "./model/products.js";
import * as itemsCart from './model/itemsCart.js';
import * as utilCart from './util/utilCart.js';


export default function loadEvents() {
  //add to cart
  init.loadDynamicComponent(".product-button__addCart").forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = +event.target.value;
      const productSelected = product.getProductById(id);

      const isItemAddedCart = itemsCart.addShoppingCart(productSelected.imageURL, productSelected.title, productSelected.price, id);

      updateCartBalloon(isItemAddedCart);
    });
  });
}


//Shopping cart
init.btnShoppingCart.addEventListener('click', () => {
  init.backdrop.style.display = (init.backdrop.style.display === 'block' ? 'none' : 'block');
  init.mainCheckout.style.display = (init.mainCheckout.style.display === 'flex' ? 'none' : 'flex');
});




function updateCartBalloon(isUpdate) {
  if (isUpdate) {
    document.querySelector(".main-cart__cartSVG").dataset.cart =
      ++document.querySelector(".main-cart__cartSVG").dataset.cart;
  }
}
