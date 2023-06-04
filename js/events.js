import * as init from "./init.js";

export default function loadEvents() {
  init.loadDynamicComponent(".product-button__buy").forEach((button) => {
    button.addEventListener("click", (event) => {
      console.log(event.target.value);
    });
  });
}
