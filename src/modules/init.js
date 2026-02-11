import { createMenuComponent } from "./menu.js";

function init() {
  const contentDiv = document.querySelector("#content");

  const menuComponent = createMenuComponent();

  contentDiv.appendChild(menuComponent);
}

export { init };
