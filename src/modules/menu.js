import "../styles/menu.css";
import { createHeadingComponent } from "./heading.js";

const items = [
  {
    name: "Rendang",
    desc: "Tender beef slow-cooked in rich coconut milk and a complex blend of traditional aromatic spices.",
    price: 10,
  },
  {
    name: "Perkedel",
    desc: "Savory Indonesian potato cakes, seasoned with herbs and nutmeg, fried to golden perfection.",
    price: 10,
  },
  {
    name: "Pop Chicken",
    desc: "Padang-style skinless chicken, simmered in spiced coconut water and briefly fried for a tender, juicy bite.",
    price: 10,
  },
  {
    name: "Barendo Omelet",
    desc: "Signature Padang crispy omelet featuring a lacy, crunchy texture and a fluffy, savory center.",
    price: 10,
  },
  {
    name: "Jasmine Tea",
    desc: "A refreshing and fragrant brewed tea with soothing floral notes to cleanse the palate.",
    price: 5,
  },
  {
    name: "Orange Juice",
    desc: "Freshly squeezed sweet oranges served cold for a zesty and revitalizing thirst quencher.",
    price: 5,
  },
];

function createItemComponent(name = "Foo", desc = "Bar", price = 0) {
  const itemDiv = document.createElement("div");
  itemDiv.classList = "item";

  const itemNameDiv = document.createElement("div");
  itemNameDiv.classList = "item-name";
  itemNameDiv.textContent = name;

  const itemDescDiv = document.createElement("div");
  itemDescDiv.textContent = desc;

  const itemPriceDiv = document.createElement("div");
  itemPriceDiv.classList = "item-price";
  itemPriceDiv.textContent = price + "$";

  const itemDivider = document.createElement("hr");
  itemDivider.classList = "item-divider";

  itemDiv.appendChild(itemNameDiv);
  itemDiv.appendChild(itemDescDiv);
  itemDiv.appendChild(itemPriceDiv);
  itemDiv.appendChild(itemDivider);

  return itemDiv;
}

function createMenuComponent() {
  const menuDiv = document.createElement("div");
  menuDiv.classList = "menu component";

  const headingDiv = createHeadingComponent("Menu");

  const itemContainerDiv = document.createElement("div");
  itemContainerDiv.classList = "items-container";

  items.forEach((item) => {
    const itemComponent = createItemComponent(item.name, item.desc, item.price);
    itemContainerDiv.appendChild(itemComponent);
  });

  menuDiv.appendChild(headingDiv);
  menuDiv.appendChild(itemContainerDiv);
  menuDiv.appendChild(itemContainerDiv);

  return menuDiv;
}

export { createMenuComponent };
