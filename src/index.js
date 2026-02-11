import "./template/reset.css";
import "./template/font.css";
import "./template/template.css";
import { init } from "./modules/init/init.js";

// TODO
// Tab-switching logic
// Should have event listeners for each button in the header navbar that wipes out the current
// contents of div#content and then runs the correct ‘tab module’ to populate it with the new
// contents again.

init();
