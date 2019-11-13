var cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		//adds each card to the board in a loop until it reaches the length of the cards array
		var cardElement = document.createElement('img');
		//this line stores an image to the variable cardElement
		cardElement.setAttribute('src', "images/back.png");
		//this allows the user to see the back of the cards
		cardElement.setAttribute('data-id', i);
		//this allows us to track which card is which.
		document.getElementById("game-board").appendChild(cardElement);
		//this added the cardElement to the game board.
		cardElement.addEventListener('click', flipCard);
		//this tells us to use the flipCard function when it hears a click.
	}
};

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			// the two cards that were drawn match
	} 	else {
			alert("Sorry, try again.");
			// the two cards that were drawn do NOT match
		}
};

function flipCard() {
	var cardId = this.getAttribute('data-id');
	//store the card clicked in the attribute
	console.log("User flipped " + cards[cardId].rank);
	// display what card was drawn
	cardsInPlay.push(cards[cardId].rank);
	// log card in cardsInPlay array
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		// two cards have been played
		checkForMatch();
		// display if you have a match with the two cards drawn.
	} 	/*if (cardsInPlay.length === 1) {
			console.log("Please draw another card");
			// one card have been played
		} 	else {
				console.log("Please draw a card");
				// no cards have been played
			}*/
};

function clearBoard() {
	button.addEventListener('click', location.reload());
	//listening for a user to click the reset button to reload the page for a new game
};

//flipCard(0);
//flip the first card

//flipCard(2);
//flip the third card

createBoard();
