import { createHomeComponent } from "../home/home.js";

function init() {
  const contentDiv = document.querySelector("#content");

  const homecComponent = createHomeComponent();

  contentDiv.appendChild(homecComponent);
}

export { init };
