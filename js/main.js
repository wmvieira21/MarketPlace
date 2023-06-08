import * as products from "./model/products.js";
import * as util from "./util/util.js";
import loadEvents from "./events.js";
import * as utilProducts from './util/utilProducts.js';

(function () {
  util
    .getProductsAPI()
    .then((result) => {
      utilProducts.buildProductsCanvas(products.createProducts(result));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loadEvents();
    });
})();
