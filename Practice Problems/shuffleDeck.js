/**
 * Suppose we want to shuffle a deck of cards (52), and we want to insure that the shuffle is done in linear time.
 * Keep in mind that the number of permutations for a deck of 52 cards is 52!, which is a lot of shuffles to consider....
 * 
 * 1. We will need to create the deck in order! 
 * 2. We will need to shuffle.
 * 
 * I've included a few helper functions as part of this exercise. One is to swap/exchange the array values. 
 * The other is the get random number. 
 * 
 * We can use Knuth's shuffle developed in 1938. 
 * In iteration i, pick integer r between 0 and i uniformaly at random
 * Swap a[i] and a[r].
 * 
 * 
 */

 //Before we shuffle the cards we need a deck! Let's build the values and suits first
  let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let suits = ["spades", "diamonds", "clubs", "hearts"]

  //Next we need a function to return us a full functioning deck! 

  function createDeck(){
      let deck = new Array();
      //go through each suit and assign a value. In the end we have a sorted array.
      for(let i = 0; i < suits.length; i++){
          for(let j = 0; j < values.length; j++){   
              let card = {Suit: suits[i], Value: values[j]};
              deck.push(card);
          }
      }
      return deck;
  }

  //need a way to randomly sort the deck, function to create a random value between two numbers
  function getRandom(min, max){
      return Math.floor(Math.random()* (max-min)) +min;
  }

  function swapArray(deck, swap, index){
      let temp = deck[index];
      deck[index] = deck[swap];
      deck[swap] = temp;
      return deck;

  }
//creating a new deck of cards 
  let cards = createDeck();

  console.log(cards);

  function shuffleCards(deck){
      let len = deck.length;
      for(let i = 0; i < len; i++){
          //pick a random number between 0 and i
          let r = getRandom(0, i+1);
          swapArray(deck, r, i);
      }
      return deck;
}

cards = shuffleCards(cards);

console.log(cards);
