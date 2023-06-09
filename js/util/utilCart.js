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

    addEventListenerComponent(closeButton, 'click', parent);

    parent.appendChild(closeButton);
}

function buildTitle(parent, item) {
    const titleItem = document.createElement('h5');
    titleItem.id = 'product-title';
    titleItem.innerHTML = item.title;

    parent.appendChild(titleItem);
}

function buildPriceContainer(parent, item) {
    const price = document.createElement('h3');
    price.id = 'product-price';
    price.innerHTML = item.price;

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
    parent.appendChild(price);
}

function addEventListenerComponent(component, eventName, parentCart) {
    if (component instanceof HTMLButtonElement) {
        component.addEventListener(eventName, (event) => {
            itemsCart.removeItemCart(event.target.value);
            init.mainCheckoutItems.removeChild(parentCart);

            itemsCart.updateCartBalloon(itemsCart.getItensCartArray().length);
        });
    }
}