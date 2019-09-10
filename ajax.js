"use strict"


function encode() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {

var res = this.responseText;
console.log(JSON.parse(res));
}
};


var quantRaw = document.getElementById("quantity").value;
var orderRaw = document.getElementById("order").value;
var quant = encodeURIComponent(quantRaw);
var order = encodeURIComponent(orderRaw);
var request = "/order?" + "order=" + order + "&quantity=" + quant;
   xhttp.open("GET",request, true);
   xhttp.send();

console.log(order + quant)
};




