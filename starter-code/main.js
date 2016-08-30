var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
if (cardOne == cardTwo){
	alert("You found a match!");
}
*/

var cards = ['queen','queen','king','king']
var cardsInPlay = []

var gameBoard = document.getElementById('game-board');

var isMatch = function(array){
	if (array[0] == array[1]){
		alert('you win!');
	}
	else{
		alert('keep trying!');
	}
}

function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

    var resetCards = document.getElementsByClassName('card');
    for (var i = 0; i < resetCards.length; i++) {
    	resetCards[i].innerHTML = '';
    }
  }

}

function flip(){
	if(this.getAttribute('data-card') == 'king'){
		this.innerHTML = '<img src="king.jpg" alt="King" />';
	}
	else {
		this.innerHTML = '<img src="queen.jpg" alt="Queen" />';
	}
}

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
	    var cardElement = document.createElement('div');
	    cardElement.className = 'card';
	    cardElement.setAttribute('data-card', cards[i]);
	    cardElement.addEventListener('click', flip);
	    cardElement.addEventListener('click', isTwoCards);
	    gameBoard.appendChild(cardElement);
	}
}

createBoard();