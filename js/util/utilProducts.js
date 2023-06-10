import * as init from "../init.js";

export function buildProductsCanvas(products) {
    const productSection = init.productsSection;

    products.forEach((element) => {
        const productContainer = document.createElement("div");
        productContainer.className = "product-container";

        buildFigureComponent(productContainer, element);
        buildProductInfo(productContainer, element);
        buildButtons(productContainer, element);

        productSection.appendChild(productContainer);
    });
}

const buildFigureComponent = (parent, product) => {
    const figure = document.createElement("figure");
    figure.className = "product-image__container";

    const image = document.createElement("img");
    image.id = "product-image__url";
    image.src = product.imageURL;

    const caption = document.createElement("figcaption");
    caption.id = "product-image__caption";
    caption.innerHTML = product.description;

    figure.appendChild(image);
    figure.appendChild(caption);

    parent.appendChild(figure);
};

const buildProductInfo = (parent, product) => {

    let { title, price: precoLet, category } = product;

    const productInfo = document.createElement("div");
    productInfo.className = "product-info-container";

    const productTitle = document.createElement("h4");
    productTitle.innerHTML = title;


    const divPriceContainer = document.createElement('div');
    divPriceContainer.className = 'product-info__price'

    const currencySymbol = document.createElement('span');
    currencySymbol.id = 'currency-symbol';
    currencySymbol.innerHTML = "$";

    divPriceContainer.appendChild(currencySymbol);

    const productPrice = document.createElement("h3");
    productPrice.innerHTML = precoLet;
    divPriceContainer.appendChild(productPrice);


    const productCategory = document.createElement("h6");
    productCategory.innerHTML = category;

    productInfo.appendChild(productTitle);
    productInfo.appendChild(divPriceContainer);
    productInfo.appendChild(productCategory);

    parent.appendChild(productInfo);
};

const buildButtons = (parent, product) => {
    const divButton = document.createElement("div");
    divButton.className = "product-button";

    const buyButton = document.createElement("button");
    buyButton.className = "product-button__addCart";
    buyButton.type = "button";
    buyButton.value = product.id;
    buyButton.innerHTML = "Add to cart";

    divButton.appendChild(buyButton);
    parent.appendChild(divButton);
};
