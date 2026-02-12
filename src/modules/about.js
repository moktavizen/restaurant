import "../styles/about.css";
import { createHeadingComponent } from "./heading.js";

function createAboutComponent() {
  const aboutDiv = document.createElement("div");
  aboutDiv.classList = "about component";

  const headingDiv = createHeadingComponent("About");

  const aboutP = document.createElement("p");
  aboutP.classList = "about-paragraph";
  aboutP.textContent = `Welcome to our kitchen, where we bring the authentic,
bold flavors of Padang cuisine straight to your table. Whether
you are craving the melt-in-your-mouth tenderness of our slow-cooked Rendang,
the signature crunch of a Barendo Egg, or the unique taste of Ayam Pop, our
mission is to provide a heartwarming dining experience that celebrates the
vibrant heritage of Minangkabau culture.`;

  aboutDiv.appendChild(headingDiv);
  aboutDiv.appendChild(aboutP);

  return aboutDiv;
}

export { createAboutComponent };
