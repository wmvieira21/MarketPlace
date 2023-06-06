export function Product(category, description, id, image, price, rating, title) {
  this.category = category;
  this.description = description;
  this.id = id;
  this.imageURL = image;
  this.price = price;
  this.rating = rating;
  this.title = title;
}

const products = [];

export function createProducts(obj) {
  obj.forEach((element) => {
    const product = Object.create(Product);
    product.id = element.id;
    product.category = element.category;
    product.description = element.description.substring(1, 200);
    product.imageURL = element.image;
    product.price = `$${element.price}`;
    product.rating = element.rating;
    product.title = element.title;

    products.push(product);
  });

  return products;
}

export function getProductById(id) {
  return products.find((element) => {
    return element.id === id;
  });
}
