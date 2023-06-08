import buildCanvasCart from '../util/utilCart.js';

const itensCartArray = [];

export function ItensCart(imgSrc, title, price, id) {
    this.imgSrc = imgSrc;
    this.title = title;
    this.price = price;
    this.id = id;
}

export function addShoppingCart(imgSrc, title, price, id) {
    if (checkItemCart(id)) {
        return alert('This item has already been added to the shopping cart!');
    } else {
        const itemCart = Object.create(ItensCart);

        itemCart.imgSrc = imgSrc;
        itemCart.title = title;
        itemCart.price = price;
        itemCart.id = id;

        itensCartArray.push(itemCart);
        
        buildCanvasCart(itemCart);

        return true;
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
    this.itensCartArray = [];
}