console.log("script loaded");

FILTER_SELECTED_CLASS = "selected";

let FILTER = {
    MEALS: "MEALS",
    DESSERTS: "DESSERTS",
    DRINKS: "DRINKS"
}

let CURRENT_FILTER = [FILTER.MEALS, FILTER.DESSERTS, FILTER.DRINKS];

function refreshMenuItems() {
    let menu = document.getElementById("menu-list")
    if (!menu) {
        console.log("menu not found");
        return;
    }

    console.log("creating new menu");
    menu.innerHTML = "";

    let items = getMenuItems(CURRENT_FILTER);
    items.forEach((info => menu.append(buildItemHtml(info))));
}

function initFilterButton(button, filterValue) {
    button.onclick = function () { onClickFilter(this, filterValue); }
    button.classList.add(FILTER_SELECTED_CLASS);
}

{/* 
  Sample HTML:
  <li class="menu-item">
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
    item.classList.add("menu-item")
    return item;
}

function getMenuItems(filter) {
    let menu = [];
    if (filter.indexOf(FILTER.MEALS) > -1) {
        menu.push(...getAllMeals());
    }
    if (filter.indexOf(FILTER.DESSERTS) > -1) {
        menu.push(...getAllDesserts());
    }
    if (filter.indexOf(FILTER.DRINKS) > -1) {
        menu.push(...getAllDrinks());
    }
    return menu;
}

function onClickFilter(button, filterClicked) {
    if (CURRENT_FILTER.indexOf(filterClicked) > -1) {
        CURRENT_FILTER = CURRENT_FILTER.filter(item => item !== filterClicked);
        button.classList.remove(FILTER_SELECTED_CLASS);
    } else {
        CURRENT_FILTER.push(filterClicked);
        button.classList.add(FILTER_SELECTED_CLASS);
    }
    console.log("New filter selection", CURRENT_FILTER);
    refreshMenuItems();
    scrollTopMenuItemIntoView();
}

function scrollTopMenuItemIntoView() {
    let menuTitle = document.getElementById("menu-title");
    let menuFilter = document.getElementById("filter");
    if (menuTitle && menuFilter) {
        const offset = menuFilter.offsetHeight;
        const y = menuTitle.getBoundingClientRect().top + window.scrollY - offset;
        console.log("Scrolling to top of menu", y);
        window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
        console.log("Failed to find elements to scroll", menuTitle, menuFilter)
    }

    // let items = document.getElementsByClassName("menu-item");
    // if (items.length > 0) {
    //     console.log("Scrolling to item", items[0]);
    //     items[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    // }
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
    refreshMenuItems();
    initFilterButton(document.getElementById("filter-meals"), FILTER.MEALS);
    initFilterButton(document.getElementById("filter-desserts"), FILTER.DESSERTS);
    initFilterButton(document.getElementById("filter-drinks"), FILTER.DRINKS);
};