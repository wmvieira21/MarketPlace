import buildCanvasCart from '../util/utilCart.js';

let itensCartArray = [];

export function ItensCart(imgSrc, title, price, id) {
    this.imgSrc = imgSrc;
    this.title = title;
    this.price = price;
    this.id = id;
}

export function addShoppingCart(imgSrc, title, price, id) {
    if (checkItemCart(id)) {
        alert('This item has already been added to the shopping cart!');
    } else {
        const itemCart = Object.create(ItensCart);

        itemCart.imgSrc = imgSrc;
        itemCart.title = title;
        itemCart.price = price;
        itemCart.id = id;

        itensCartArray.push(itemCart);

        updateCartBalloon(itensCartArray.length);
        buildCanvasCart(itemCart);
    }
}

function checkItemCart(id) {
    return itensCartArray.find(element => {
        return element.id === id;
    });
}

export function getItensCartArray() {
    return itensCartArray.slice();
}

export function clearCart() {
    itensCartArray = [];
}

export function removeItemCart(id) {
    itensCartArray = itensCartArray.filter(item => {
        return item.id !== parseInt(id);
    });
    updateCartBalloon(itensCartArray.length);
}

export function updateCartBalloon(qtItensCart) {
    document.querySelector(".main-cart__cartSVG").dataset.cart = qtItensCart;
}

export function updatePriceItemCart(id, newPrice) {
    itensCartArray.map(item => {
        if (item.id === id) {
            item.price = newPrice;
        }
    });
};

export function sumCartItensTotal() {
    return itensCartArray.reduce((total, item) => {
        return total += item.price;
    }, 0);
}