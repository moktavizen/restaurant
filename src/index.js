import "./styles/reset.css";
import "./styles/font.css";
import "./styles/template.css";
import { init } from "./modules/init.js";
import { els, states } from "./modules/globals.js";
import { createHomeComponent } from "./modules/home.js";
import { createMenuComponent } from "./modules/menu.js";
import { createAboutComponent } from "./modules/about.js";

init();

function renderContent(tab, component) {
  els.contentDiv.replaceChildren();

  states.prevTab = states.currTab;
  states.prevTab.removeAttribute("data-is-curr");
  states.currTab = tab;
  states.currTab.setAttribute("data-is-curr", "true");

  els.contentDiv.appendChild(component);
}

els.body.addEventListener("click", (e) => {
  const target = e.target;

  if (target.tagName !== "BUTTON" || target.dataset.isCurr === "true") {
    return;
  }

  switch (target.textContent) {
    case "Home":
      renderContent(els.homeTab, createHomeComponent());
      break;
    case "Menu":
    case "See the menu":
      renderContent(els.menuTab, createMenuComponent());
      break;
    case "About":
      renderContent(els.aboutTab, createAboutComponent());
      break;
  }
});
