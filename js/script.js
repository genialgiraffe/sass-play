console.log("script loaded");

function initMenuItems(menu) {
    if (!menu) {
        console.log("menu not found");
        return;
    }

    console.log("creating new menu");
    menu.innerHTML = "";

    let items = getSampleDrinks()
    items.forEach((info => menu.append(buildItemHtml(info))));
}

{/* 
  Sample HTML:
  <li>
    <h3>Orange juice</h3>
    <p class="price">$1.99</p>
  </li> 
*/}
function buildItemHtml(info) {
    let name = document.createElement("h3");
    name.append(info.name);
    let price = document.createElement("span");
    price.append(info.price);
    price.classList.add("price");
    let item = document.createElement("li");
    item.append(name);
    item.append(price);
    return item;
}

function getSampleDrinks() {
    return [
        { name: "Orange juice", price: "$1.99" },
        { name: "Sparkling Water", price: "$2" },
        { name: "Root beer", price: "$1.95" },
        { name: "Milkshake", price: "$4.75" },
        { name: "Hot coffee", price: "$1" },
        { name: "Green tea", price: "$2.50" }
    ]
}

window.onload = function () {
    console.log("window.onload invoked");
    initMenuItems(document.getElementById("menu-list"));
};