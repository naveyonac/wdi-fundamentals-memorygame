console.log("Up and running!");


var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var checkForMatch = function() {
	if (cardsInPlay.length ===2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}
}
var flipCard = function(cardId) {
	console.log("user flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}
flipCard(0);
	flipCard(1);





/*
var cardOne = cards[3];
cardsInPlay.push(cardOne);
console.log("user flipped " + cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("user flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match!")
	}
		else {
			alert("sorry, try again.")
		}
}
*/