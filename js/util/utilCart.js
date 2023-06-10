import * as init from '../init.js';
import * as itemsCart from '../model/itemsCart.js';

export default function buildCanvasCart(item) {
    const divCheckoutContainer = document.createElement('div');
    divCheckoutContainer.className = 'main-checkout__cart';

    buildCloseButton(divCheckoutContainer, item);
    buildFigureComponent(divCheckoutContainer, item);
    buildTitle(divCheckoutContainer, item);
    buildPriceContainer(divCheckoutContainer, item);

    init.mainCheckoutItems.appendChild(divCheckoutContainer, init.totalPanel);
}

function buildFigureComponent(parent, item) {
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = item.imgSrc;
    img.alt = 'product image';

    figure.appendChild(img);
    parent.appendChild(figure);
}

function buildCloseButton(parent, item) {
    const closeButton = document.createElement('button');
    closeButton.innerHTML = 'X';
    closeButton.className = 'main-checkout__cart--remove';
    closeButton.value = item.id;
    closeButton.type = 'button';

    addEventListenerComponent(closeButton, 'click', parent, item);

    parent.appendChild(closeButton);
}

function buildTitle(parent, item) {
    const divProductInfo = document.createElement('div');

    const productKey = document.createElement('h6');
    productKey.innerHTML = `Item: ${item.id}`;

    const titleItem = document.createElement('h5');
    titleItem.id = 'product-title';
    titleItem.innerHTML = item.title;

    divProductInfo.appendChild(productKey);
    divProductInfo.appendChild(titleItem);

    parent.appendChild(divProductInfo);
}

function buildPriceContainer(parent, item) {

    const divPriceContainer = document.createElement('div');
    divPriceContainer.className = 'cart-info__price'

    const currencySymbol = document.createElement('span');
    currencySymbol.id = 'cart-currency-symbol';
    currencySymbol.innerHTML = "$";

    const price = document.createElement('h3');
    price.id = 'product-price';
    price.innerHTML = item.price;

    divPriceContainer.appendChild(currencySymbol);
    divPriceContainer.appendChild(price);

    const divCheckoutPriceQt = document.createElement('div');
    divCheckoutPriceQt.className = 'main-checkout__quantidade';

    const priceQuantidadeLabel = document.createElement('label');
    priceQuantidadeLabel.for = 'main-checkout__price--qt';
    priceQuantidadeLabel.innerHTML = 'Qt:';

    const priceQuantidadeInput = document.createElement('input');
    priceQuantidadeInput.type = 'number';
    priceQuantidadeInput.id = 'main-checkout__price--qt';
    priceQuantidadeInput.value = 1;
    priceQuantidadeInput.min = 1;
    priceQuantidadeInput.max = 10;

    divCheckoutPriceQt.appendChild(priceQuantidadeLabel);
    divCheckoutPriceQt.appendChild(priceQuantidadeInput);

    parent.appendChild(divCheckoutPriceQt);
    parent.appendChild(divPriceContainer);

    addEventListenerComponent(priceQuantidadeInput, 'input', price, item);
}

function addEventListenerComponent(component, eventName, parentCart, item) {
    if (component instanceof HTMLButtonElement) {
        component.addEventListener(eventName, (event) => {
            itemsCart.removeItemCart(event.target.value);

            init.mainCheckoutItems.removeChild(parentCart);

            itemsCart.updateCartBalloon(itemsCart.getItensCartArray().length);
            updateTotalCart();
        });
    } else if (component instanceof HTMLInputElement) {
        const normalPrice = +parentCart.innerText;

        component.addEventListener(eventName, (event) => {
            const vlMultiplica = event.target.value;
            const vlPrice = parseFloat((normalPrice * vlMultiplica).toFixed(2));

            parentCart.innerHTML = vlPrice;
            itemsCart.updatePriceItemCart(item.id, vlPrice);
            updateTotalCart();
        });
    }
    updateTotalCart();
}

function updateTotalCart() {
    init.totalField.innerHTML = itemsCart.sumCartItensTotal().toFixed(2);
}

export function cancelCart() {
    const cartItensArray = document.querySelectorAll('.main-checkout__cart');
    cartItensArray.forEach(component => {
        init.mainCheckoutItems.removeChild(component);
    });
    itemsCart.clearCart();
    itemsCart.updateCartBalloon(0);
    updateTotalCart();
}