console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen"
var cardTwo = "queen"
var cardThree = "king"
var cardFour = "king"

/*if (cardOne === cardTwo || cardThree === cardFour){
alert("You found a match!");
} else if (cardOne === cardThree){
	alert("Sorry, try again.");
} else if (cardOne === cardFour){
	alert("Sorry, try again.");
} else if (cardTwo === cardThree){
	alert("Sorry, try again.");
} else if(cardTwo === cardFour){
	alert("Sorry, try again.");
}*/

var createCards = function () {
var gameItem = document.getElementById("game-board");
for (var i=1; i < 5; i++) {
	var cardsOnly = document.createElement("div"); 
	cardsOnly.className = "card";
	gameItem.appendChild(cardsOnly);
}
}

addEventListener("load", createCards);


