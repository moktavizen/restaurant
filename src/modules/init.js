import { els, states } from "./globals.js";
import { createHomeComponent } from "./home.js";

function init() {
  states.currTab = els.homeTab;
  states.currTab.setAttribute("data-is-curr", "true");

  els.contentDiv.appendChild(createHomeComponent());
}

export { init };
