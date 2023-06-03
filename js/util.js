import * as init from './init.js';

export function getProductsAPI() {
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open("GET", 'https://fakestoreapi.com/products/');
        http.responseType = 'text';

        http.onreadystatechange = () => {
            if (http.status == 200
                && http.readyState == XMLHttpRequest.DONE) {
                resolve(JSON.parse(http.responseText));
            } else {
                if (http.status != 200
                    && http.readyState == XMLHttpRequest.DONE) {
                    reject(http.responseText);
                }
            }
        }
        http.send();
    });
}

export function buildProductsCanvas(products) {
    const productSection = init.productsSection;

    products.forEach(element => {
        const productContainer = document.createElement('div');
        productContainer.className = "product-container";

        buildFigureComponent(productContainer, element);
        buildProductInfo(productContainer, element);
        buildButtons(productContainer, element);

        productSection.appendChild(productContainer);
    });
}

const buildFigureComponent = (parent, product) => {
    const figure = document.createElement('figure');
    figure.className = "product-image__container";

    const image = document.createElement('img');
    image.id = "product-image__url";
    image.src = product.imageURL;

    const caption = document.createElement('figcaption');
    caption.id = "product-image__caption";
    caption.innerHTML = product.description;

    figure.appendChild(image);
    figure.appendChild(caption);

    parent.appendChild(figure);
}

const buildProductInfo = (parent, product) => {
    const productInfo = document.createElement('div');
    productInfo.className = "product-info-container";

    const productTitle = document.createElement('h4');
    productTitle.innerHTML = product.title;

    const productPrice = document.createElement('h3');
    productPrice.innerHTML = product.price;

    const productCategory = document.createElement('h6');
    productCategory.innerHTML = product.category;

    productInfo.appendChild(productTitle);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productCategory);

    parent.appendChild(productInfo);
}

const buildButtons = (parent, product) => {
    const divButton = document.createElement('div');
    divButton.className = "product-button";

    const buyButton = document.createElement('button');
    buyButton.className = "product-button__buy";
    buyButton.type = "button";
    buyButton.innerHTML = "BUY";


    divButton.appendChild(buyButton);
    parent.appendChild(divButton);
}