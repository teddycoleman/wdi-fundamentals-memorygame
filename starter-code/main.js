var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
if (cardOne == cardTwo){
	alert("You found a match!");
}
*/

var gameBoard = document.getElementById('game-board');

var createBoard = function () {
	for (var i = 0; i < 4; i++) {
	    var newCardElement = document.createElement('div');
	    newCardElement.className = 'card';
	    gameBoard.appendChild(newCardElement);
	}
}

createBoard();