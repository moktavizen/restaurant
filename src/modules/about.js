import "../styles/about.css";
import { createHeadingComponent } from "./heading.js";

function createAboutComponent() {
  const aboutDiv = document.createElement("div");
  aboutDiv.classList = "about component";

  const headingDiv = createHeadingComponent("About");

  const aboutContainerDiv = document.createElement("div");
  aboutContainerDiv.classList = "about-container";

  const aboutP = document.createElement("p");
  aboutP.textContent = `Welcome to our kitchen. Whether
you are craving the melt-in-your-mouth tenderness of our slow-cooked Rendang,
the signature crunch of a Barendo Egg, or the unique taste of Ayam Pop, our
mission is to provide a heartwarming experience that celebrates the
vibrant heritage of Padang and Minangkabau.`;

  const addressDiv = document.createElement("div");
  addressDiv.textContent = "Address: ";

  const addressA = document.createElement("a");
  addressA.setAttribute("target", "_blank");
  addressA.setAttribute("href", "https://maps.app.goo.gl/1GdaFpXUyh2M2toF9");
  addressA.textContent = "112 Veteran St., Lamongan, Indonesia";

  aboutContainerDiv.appendChild(aboutP);
  aboutContainerDiv.appendChild(addressDiv);
  aboutContainerDiv.appendChild(addressA);

  aboutDiv.appendChild(headingDiv);
  aboutDiv.appendChild(aboutContainerDiv);

  return aboutDiv;
}

export { createAboutComponent };
