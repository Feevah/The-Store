"use strict"

// Exercise

// Create an inventory array and associate a number with each item. Then get user input that purchases items (subtracts one from the item).
// Exercise

// Grocery Store app
// functions:
// add to inventory
// subtract from inventory
// Notify when out of stock
// data:
// inventory
// inventory count







// method 1 ------------------------------------------------------------

// var input = prompt("What would you like to order")

// var Blueberries = 10;
// var Kiwis = 8;
// var Oranges = 0;
// var Peaches = 6
// var Mangoes =12
// var Guavas = 6
// var Strawberries = 30
// var Cucumbers = 7
// var Squash = 4
// var Broccoli = 9

// var items = ["Blueberries", "Kiwis", "Oranges", "Peaches", "Mangoes", "Guavas", "Strawberries", "Cucumbers", "Squash", "Broccoli"];
// var quantity = [Blueberries, Kiwis, Oranges, Peaches, Mangoes, Guavas, Strawberries, Cucumbers, Squash, Broccoli]


// Function help!!!!!!!!

  //    if (input === quantity[0]) {
  //    var orderNumber = Number(prompt ("We have " + Blueberries + ". How many do you want?"));
  //    var newQuant = Blueberries - orderNumber;
  //    alert("Your order has been placed. There are " + newQuant + " left");

  // }









// method 2 ----------------------------


var input = prompt("What would you like to order")
var items = ["Blueberries", "Kiwis", "Oranges", "Peaches", "Mangoes", "Guavas", "Strawberries", "Cucumbers", "Squash", "Broccoli"];
var quantity = [10, 7, 20, 50, 7, 56, 7 , 43, 10, 87];
console.log (items[3], quantity[3])

     if (input === items[0]) {
     var orderNumber = Number(prompt ("We have " + quantity[0] + ". How many do you want?"));
     var newQuant = quantity[0] - orderNumber;
     alert("Your order has been placed. There are " + newQuant + " left");
	}

	if (newQuant < 5) {
		var placeOrder = Number(prompt("We only have " + newQuant + ". How much should I order?"))
        var newAmount = newQuant + placeOrder;
        alert("Your order has been placed. There are " + newAmount + " left");
        quantity = newAmount;

	}

	if (placeOrder === 0 || placeOrder === null) {
	   var doubleCheck = Number(prompt("Are you sure that you don't want to order? Enter amount or press cancel to escape."))

	}





// method 3 ------------------------------------------------


// var input = prompt("What would you like to order")
// var items = [["Blueberries", 10], ["Kiwis", 20], ["Oranges", 50], ["Peaches", 45], ["Mangoes", 9], ["Guavas", 29], ["Strawberries", 104], ["Cucumbers", 56], ["Squash", 29], ["Broccoli", 18]];

//      if (input === items[0]) {
//      var orderNumber = Number(prompt ("We have " + items[0][1] + ". How many do you want?"));
//      var newQuant = items[0][1] - orderNumber;
//      alert("Your order has been placed. There are " + newQuant + " left");
// 	}

// 	if (newQuant < 5) {
// 		var placeOrder = Number(prompt("We only have " + newQuant + ". How much should I order?"))
//         var newAmount = newQuant + placeOrder;
//         alert("Your order has been placed. There are " + newAmount + " left");
//         quantity = newAmount;

// 	}

// 	if (placeOrder === 0 || placeOrder === null) {
// 	   var doubleCheck = Number(prompt("Are you sure that you don't want to order? Enter amount or press cancel to escape."))

// 	}


// console.log (items.length);
// console.log (items);



// while (items.length <= items) {console.log (items);}


// Order Form
// var items = ["Blueberries", var blueberry =[], "Kiwis", var kiwi = [], "Oranges", var orange = [], "Peaches", var peach = [], "Mangoes", var mango = [], "Guavas", var guava = [], "Strawberries", var strawberry = [], "Cucumbers", var cucumber = [], "Squash", var squash =[], "Broccoli", var broccoli =[]];

// console.log (items.length);
// console.log (items);

// functions orderForm () {
// var orderItem = prompt ("What would you like to order?");

// if (items.includes(orderItem)) {
// 	var orderQuant = prompt ("We have that! How many would you like?");
// }
	
//   else {
//   	alert ("Sorry mate! All out :-(");
//   }

// }


