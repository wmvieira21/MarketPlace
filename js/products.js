export function Product(category, description, id, image, price, rating, title) {
    this.category = category;
    this.description = description;
    this.id = id;
    this.imageURL = image;
    this.price = price;
    this.rating = rating;
    this.title = title;
}

export function createProducts(obj) {
    const products = [];

    obj.forEach(element => {
        const product = Object.create(Product);
        product.id = element.id;
        product.category = element.category;
        product.description = element.description.substring(1,200);
        product.imageURL = element.image;
        product.price = "$".concat(element.price);
        product.rating = element.rating;
        product.title = element.title;

        products.push(product);
    });

    return products;
}