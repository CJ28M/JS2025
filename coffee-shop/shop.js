// // For now, display a quick message in the console.
// console.log("ClydeBank Coffee Shop is now open!");

// //Our Inventory
// let inventory = ["Regular Coffee", "Espresso", "Cappuccino", "Latte"];
// let inventoryPrices = [3.0, 3.5, 4.0, 4.25];

// //Obtain reference to the menu list by ID
// let menuList = document.getElementById("coffee-menu");

// //loop through the inventory and display each item in the menu list
// /*for (let i = 0; i < inventory.length; i++) {
//   menuList.innerHTML +=
//     "<li>" + inventory[i] + " - $" + inventoryPrices[i].toFixed(2) + "</li>";
// }
// */

// function populateMenu(container) {
//   for (let i = 0; i < inventory.length; i++) {
//     container.innerHTML +=
//       "<li>" + inventory[i] + " - $" + inventoryPrices[i].toFixed(2) + "</li>";
//   }
// }

// populateMenu(menuList);

// page 121

//the inventory object
let menu = {
  inventory: {
    "Regular Coffee": 3.0,
    Espresso: 3.5,
    Cappuccino: 4.0,
    latte: 4.25,
  },
  populate: function (container) {
    for (let item in this.inventory) {
      let price = this.inventory[item];
      container.innerHTML += "<li>" + item + " -$" + price.toFixed(2) + "</li>";
    }
  },
};

//obtain reference to the menu list by ID

let menuList = document.getElementById("coffee=-menu");

//Populate the menu

menu.populate(menuList);
