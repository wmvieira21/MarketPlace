import * as init from "./init.js";
import * as product from "./model/products.js";
import * as itemsCart from './model/itemsCart.js';

export default function loadEvents() {
  //add to cart
  init.loadDynamicComponent(".product-button__addCart").forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = +event.target.value;
      const productSelected = product.getProductById(id);

      itemsCart.addShoppingCart(productSelected.imageURL, productSelected.title, productSelected.price, id);
    });
  });
}

//Shopping cart
init.btnShoppingCart.addEventListener('click', () => {
  init.backdrop.style.display = (init.backdrop.style.display === 'block' ? 'none' : 'block');
  init.mainCheckoutContainer.style.display = (init.mainCheckoutContainer.style.display === 'flex' ? 'none' : 'flex');
});

init.backdrop.addEventListener('click', () => {
  init.backdrop.style.display = 'none';
  init.mainCheckoutContainer.style.display = 'none';
});