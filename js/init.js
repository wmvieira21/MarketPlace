export const productsSection = document.querySelector(".products-section");
export const backdrop = document.querySelector(".backdrop");

export const mainCheckoutContainer = document.querySelector('.main-checkout__container');
export const mainCheckoutItems = document.querySelector('.main-checkout');
export const btnShoppingCart = document.querySelector(".btn-cart-buy");
export const btnsCart = document.querySelector(".main-checkout__buttons");
export const totalPanel = document.querySelector(".main-checkout__total");


export const loadDynamicComponent = (componentClass) => {
  return document.querySelectorAll(componentClass);
};
