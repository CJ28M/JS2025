// For now, display a quick message in the console.
console.log("ClydeBank Coffee Shop is now open!");

//Our Inventory
let inventory = ["Regular Coffee", "Espresso", "Cappuccino", "Latte"];
let inventoryPrices = [3.0, 3.5, 4.0, 4.25];

//Obtain reference to the menu list by ID
let menuList = document.getElementById("coffee-menu");

//loop through the inventory and display each item in the menu list
for (let i = 0; i < inventory.length; i++) {
  menuList.innerHTML +=
    "<li>" + inventory[i] + " - $" + inventoryPrices[i].toFixed(2) + "</li>";
}
