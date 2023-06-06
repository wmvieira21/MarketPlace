import * as products from "./products.js";
import * as util from "./util.js";
import loadEvents from "./events.js";

(function () {
  util
    .getProductsAPI()
    .then((result) => {
      util.buildProductsCanvas(products.createProducts(result));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loadEvents();
    });
})();
