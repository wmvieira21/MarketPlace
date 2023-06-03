import * as products from './products.js';
import * as util from './util.js';

(function () {
    util.getProductsAPI()
        .then((result) => {
            console.log(result);
            util.buildProductsCanvas(products.createProducts(result));
        }).catch((err) => {
            console.log(err);
        });
})();