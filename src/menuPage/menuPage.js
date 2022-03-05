function addMenuItems() {
  const menuItems = document.createElement("div");
  menuItems.classList.add("menu");

  const itemContent = [
    { image: "./chickenburger.png", name: "Chicken Burger", price: "$99" },
    { image: "./crispychicken.png", name: "Crispy Chicken", price: "$99" },
    { image: "./macburger.png", name: "Mac Burger", price: "$99" },
    { image: "./regularburger.png", name: "Regular Burger", price: "$99" },
    { image: "./bigburger.png", name: "Big Burger", price: "$99" },
    { image: "./regularcheese.png", name: "Regular Cheese", price: "$99" },
  ];

  for (let i = 0; i < 6; i++) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu__item");

    const itemImage = document.createElement("img");
    itemImage.src = itemContent[i].image;

    const itemName = document.createElement("h2");
    itemName.textContent = itemContent[i].name;

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("price");
    itemPrice.textContent = itemContent[i].price;

    menuItem.appendChild(itemImage);
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemPrice);

    menuItems.appendChild(menuItem);
  }

  return menuItems;
}

function addMenuContent() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  menuContainer.appendChild(addMenuItems());

  return menuContainer;
}

export default addMenuContent;
