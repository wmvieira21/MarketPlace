export function getProductsAPI() {
  return new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.open("GET", "https://fakestoreapi.com/products/");
    http.responseType = "text";

    http.onreadystatechange = () => {
      if (http.status == 200 && http.readyState == XMLHttpRequest.DONE) {
        resolve(JSON.parse(http.responseText));
      } else {
        if (http.status != 200 && http.readyState == XMLHttpRequest.DONE) {
          reject(http.responseText);
        }
      }
    };
    http.send();
  });
}