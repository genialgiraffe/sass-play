console.log("script loaded");

function initMenuItems(menu) {
    if (!menu) {
        console.log("menu not found");
        return;
    }

    console.log("creating new menu");
    menu.innerHTML = "";

    let items = getMenuItems()
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

function getMenuItems() {
    let menu = [];
    menu.push(...getAllMeals());
    menu.push(...getAllDesserts());
    menu.push(...getAllDrinks());
    return menu;
}

function getAllDrinks() {
    return [
        { name: "Orange juice", price: "$1.99" },
        { name: "Sparkling Water", price: "$2" },
        { name: "Root beer", price: "$1.95" },
        { name: "Milkshake", price: "$4.75" },
        { name: "Hot coffee", price: "$1" },
        { name: "Green tea", price: "$2.50" }
    ]
}

function getAllMeals() {
    return [
        { name: "Buffalo Chicken", price: "$12.99" },
        { name: "Corndog", price: "$6" },
        { name: "Sloppy Joe", price: "$14.50" },
        { name: "Mac 'n' Cheese", price: "$10" },
        { name: "Tater Tot Casserole", price: "$8.75" },
    ]
}

function getAllDesserts() {
    return [
        { name: "Banana Split", price: "$7.50" },
        { name: "Apple Pie", price: "$9" },
        { name: "Key Lime Pie", price: "$9" },
        { name: "Lemon Pound Cake", price: "$6" },
        { name: "Blueberry Muffin", price: "$6" },
        { name: "Cream Puff", price: "$6" },
    ]
}

window.onload = function () {
    console.log("window.onload invoked");
    initMenuItems(document.getElementById("menu-list"));
};