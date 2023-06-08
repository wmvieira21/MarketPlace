import * as init from '../init.js';

export default function buildCanvasCart(item) {
    const divCheckoutContainer = document.createElement('div');
    divCheckoutContainer.className = 'main-checkout__cart';

    buildCloseButton(divCheckoutContainer);
    buildFigureComponent(divCheckoutContainer, item);
    buildTitle(divCheckoutContainer, item);
    buildPriceContainer(divCheckoutContainer, item);

    init.mainCheckout.insertBefore(divCheckoutContainer, init.btnsCart);
}

function buildFigureComponent(parent, item) {
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = item.imgSrc;
    img.alt = 'product image';

    figure.appendChild(img);
    parent.appendChild(figure);
}

function buildCloseButton(parent) {
    const closeButton = document.createElement('button');
    closeButton.innerHTML = 'X';
    closeButton.className = 'main-checkout__cart--remove';

    parent.appendChild(closeButton);
}

function buildTitle(parent, item) {
    const titleItem = document.createElement('h5');
    titleItem.id = 'product-title';
    titleItem.innerHTML = item.title;

    parent.appendChild(titleItem);
}

function buildPriceContainer(parent, item) {
    const divCheckoutPrice = document.createElement('div');
    divCheckoutPrice.className = 'main-checkout__price';

    const price = document.createElement('h3');
    price.id = 'product-price';
    price.innerHTML = item.price;
    console.dir(price);

    divCheckoutPrice.appendChild(price);

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

    divCheckoutPrice.appendChild(divCheckoutPriceQt);

    parent.appendChild(divCheckoutPrice);
}