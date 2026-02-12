import { createHomeComponent } from "./home.js";

function init() {
  const contentDiv = document.querySelector("#content");

  const homeComponent = createHomeComponent();

  contentDiv.appendChild(homeComponent);
}

export { init };
