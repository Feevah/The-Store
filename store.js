"use strict"
setTimeout(function(){
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


var input = prompt("What would you like to order\nWe have the Following items:\n" + items)
var items = [["Blueberries", 10], 
			 ["Kiwis", 20], 
			 ["Oranges", 50], 
			 ["Peaches", 45], 
			 ["Mangoes", 9], 
			 ["Guavas", 29], 
			 ["Strawberries", 104], 
			 ["Cucumbers", 56], 
			 ["Squash", 29], 
			 ["Broccoli", 18]];
	

	var i = 0;

	 while (input !== items[0][0]){
	 	i++; items[i][0];

	 	if (input === items[i][0]) {
     	var orderNumber = Number(prompt ("We have " + items[i][0, 1] + ". How many do you want?"));
     	var newQuant = items[i][0,1] - orderNumber;
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
}



}, 1000);


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


