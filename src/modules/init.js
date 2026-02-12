import { createAboutComponent } from "./about.js";

function init() {
  const contentDiv = document.querySelector("#content");

  const aboutComponent = createAboutComponent();

  contentDiv.appendChild(aboutComponent);
}

export { init };
