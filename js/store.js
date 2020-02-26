"use strict"

var date = new Date ();
var today = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

document.querySelector(".date").innerHTML = (month + '-' + today + '-' + year);


var items = [["Blueberries", 40], 
			 ["Kiwis", 20], 
			 ["Oranges", 50], 
			 ["Peaches", 45], 
			 ["Mangoes", 37], 
			 ["Guavas", 26], 
			 ["Strawberries", 104], 
			 ["Cucumbers", 56], 
			 ["Squash", 29], 
			 ["Broccoli", 18]];

// The amounts
var blueBerries = document.querySelector(".bbCount");
var kiwi = document.querySelector(".kCount");
var oranges = document.querySelector(".oCount"); 
var peaches = document.querySelector(".pCount");
var mangoes = document.querySelector(".mCount");
var guava = document.querySelector(".gCount");
var strawberries = document.querySelector(".sCount");
var cucumber = document.querySelector(".cCount");
var squash = document.querySelector(".sqCount");
// var broccoli = document.querySelector(".bCount");

blueBerries.innerText = items[0][1];
kiwi.innerText = items[1][1];
oranges.innerText = items[2][1];
peaches.innerText = items[3][1];
mangoes.innerText = items[4][1];
guava.innerText = items[5][1];
strawberries.innerText = items[6][1];
cucumber.innerText = items[7][1];
squash.innerText = items[8][1];
broccoli.innerText = items[9][1];




// Append Order

var userItem = document.createElement("p");


function paste() {
	var i = 0;
	var order = document.getElementById("order").value;
	// var quant = document.getElementById("quantity").value;
	// var para = document.createElement("li");
	// para.innerHTML = order + " " + orderNumber;
	// var newO = document.querySelector(".newOrder");
	// newO.insertBefore(para, newO.childNodes[0]);


	while (order !== null){
	 	items[i][0]; 

	 	if (order === items[i][0]) {
     	var orderNumber = Number(prompt ("We have " + items[i][0, 1] + ". How many do you want?"));
     	var newQuant = items[i][0,1] - orderNumber;
		alert("Your order has been placed. There are " + newQuant + " left");
		var para = document.createElement("li");
		para.innerHTML = order + " " + orderNumber;
		var newO = document.querySelector(".newOrder");
		newO.insertBefore(para, newO.childNodes[0]);
		};
		
     

	    if (newQuant < 10) {
		var placeOrder = Number(prompt("We only have " + newQuant + ". How much should I order?"))
        var newAmount = newQuant + placeOrder;
        alert("Your order has been placed. There are " + newAmount + " left");
        newQuant = newAmount;

	    };


	    i++;
};


};



document.querySelector('.add').addEventListener("click", paste);







// <============================== The Prompt ===============================>


// setTimeout(function(){
// // // The loop & propmpt

// var input = prompt("What would you like to order?\nWe have the items behind this alert:\nPlease make first letter of item capitalized\n(i.e. Kiwis not kiwis)");
// 	var i = 0;



// // Choosing what you want

// 	 while (input !== null){
// 	 	items[i][0]; 

// 	 	if (input === items[i][0]) {
//      	var orderNumber = Number(prompt ("We have " + items[i][0, 1] + ". How many do you want?"));
//      	var newQuant = items[i][0,1] - orderNumber;
//      	alert("Your order has been placed. There are " + newQuant + " left");
// 	    }
     

// 	    if (newQuant < 10) {
// 		var placeOrder = Number(prompt("We only have " + newQuant + ". How much should I order?"))
//         var newAmount = newQuant + placeOrder;
//         alert("Your order has been placed. There are " + newAmount + " left");
//         newQuant = newAmount;

// 	    }

// 	    else if (placeOrder === 0 || placeOrder === null) {
// 	   var doubleCheck = (prompt("Are you sure that you don't want to order? Enter amount or press cancel to escape."))
// 	    }

// 	    i++;
// }


// }, 8000);









// <======================= Old Stuff Section ==============================>








// Junk 1

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



// Select
// var something = document.getElementById("")
// var some = document.getElementByClassName("")
// var trial = document.getElementsByTagName("")
// var tag = document.querySelector("#form" =id ".form" = class "h1" = tag)
// var tag = document.querySelectorAll ("#form")


// Manipulate
// tag.style.color = "blue"
// tag.style.border = "10px solid red"
// tag.style.fontSizen = "70px"
// tag.style.background = "yellow"
// tag.style.marginTop = "200px"






// function registerUser () {
// 	var userName = document.querySelector('form').addEventListener("click", function(){
// 		document.querySelector()
// 	})
// }

// function registerUser (event) {
//   log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
//   event.preventDefault();
// }

// var form = document.querySelector('form');
// var log = document.getElementById('log');
// form.pushButton('register', logSubmit);




// Junk 2

// document.querySelector(".placeO").addEventListener("click", function(){
//   document.querySelector(".grid").x.style.display === "none" 
//   {
//   if ( x.style.display = "grid");
//   } else {
//     x.style.display = "none";
//   }
// });


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





// Junk 3

// var quantity = document.querySelector


// addEvent(quantity, "change", function() {
// 	if (this.value === "choose") 



// }



// Button




// Junk 4

	// // Inventory in prompt
 //      while (i < items.length){
 //      	i++;

 //      	// Item name
 //      var updateItem = items[i][0];
 //       return items

 //        // Item Quantity
 //      var updateQuantity = items[i][1];

 //      }



 // Playing around 


//     document.querySelector(".placeO").addEventListener("click", function(){ 

// 	document.querySelector(".placeO").style.backgroundColor = "#8fa854";

// 	document.querySelector("body").style.backgroundColor = "white";

// 	document.querySelector("h1").style.color = "blue";
//     var goodEats = "<h4>Click and you will see the good Eats we have available.</h4>";

// 	document.querySelector(".grid").innerHTML = goodEats;

	
// });
