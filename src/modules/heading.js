import "../styles/heading.css";

function createHeadingComponent(txt = "Foo") {
  const headingDiv = document.createElement("div");
  headingDiv.classList = "fancy-heading";

  const greetingDiv = document.createElement("div");
  greetingDiv.classList = "greeting-txt";
  greetingDiv.textContent = "Welcome";

  const headingTxt = document.createElement("h1");
  headingTxt.classList = "heading-txt";
  headingTxt.textContent = txt;

  const divider = document.createElement("hr");
  divider.classList = "divider";

  headingDiv.appendChild(greetingDiv);
  headingDiv.appendChild(headingTxt);
  headingDiv.appendChild(divider);

  return headingDiv;
}

export { createHeadingComponent };
