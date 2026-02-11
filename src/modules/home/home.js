// Export a function that creates a div element, adds the appropriate content and styles to that
// element

// <div>
//   <div>Welcome</div>
//   <h1>Ranah Minang</h1>
//   <hr />
//   <div>The best padang restaurant in town!</div>
//   <button>See the menu</button>
// </div>

import "./home.css";
import { createHeading } from "../heading/heading.js";

function createHomeComponent() {
  const homeDiv = document.createElement("div");
  homeDiv.classList = "home component";

  const headingDiv = createHeading("Ranah Minang");

  const sloganDiv = document.createElement("div");
  sloganDiv.classList = "slogan";
  sloganDiv.textContent = "The best padang restaurant in town. Just try it!";

  const menuCTAButton = document.createElement("button");
  menuCTAButton.classList = "menu-cta";
  menuCTAButton.textContent = "See the menu";

  homeDiv.appendChild(headingDiv);
  homeDiv.appendChild(sloganDiv);
  homeDiv.appendChild(menuCTAButton);

  return homeDiv;
}

export { createHomeComponent };
