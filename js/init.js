export const productsSection = document.querySelector(".products-section");
export const backdrop = document.querySelector(".backdrop");

export const mainCheckoutContainer = document.querySelector('.main-checkout__container');
export const mainCheckoutItems = document.querySelector('.main-checkout');
export const btnShoppingCart = document.querySelector(".btn-cart-buy");
export const btnsCart = document.querySelector(".main-checkout__buttons");
export const totalPanel = document.querySelector(".main-checkout__total");
export const totalField = document.querySelector("#main-checkout__total--sum");

export const btnBuy = document.querySelector(".main-checkout__buy");
export const btnCancel = document.querySelector(".main-checkout__cancel");

export const loadDynamicComponent = (componentClass) => {
  return document.querySelectorAll(componentClass);
};
