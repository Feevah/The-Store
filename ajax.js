"use strict"


function encode() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {

var res = this.responseText;
console.log(JSON.parse(res));
}
};
var blueberryCount = document.getElementById("blueberries").value;
var kiwiCount = document.getElementById("kiwis").value;
var blueberryCount = document.getElementById("blueberries").value;
var kiwiCount = document.getElementById("kiwis").value;
var blueberryCount = document.getElementById("blueberries").value;
var kiwiCount = document.getElementById("kiwis").value;
var blueberryCount = document.getElementById("blueberries").value;
var kiwiCount = document.getElementById("kiwis").value;
var email = encodeURIComponent(emailRaw);
// var event = encodeURIComponent(eventRaw);
var request = "/add?" + "email=" + email + "&event=" + event;
   xhttp.open("GET",request, true);
   xhttp.send();

console.log(emailRaw + blueberryCount)
};

