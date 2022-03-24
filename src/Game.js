const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

class Game {
  constructor() {
    this.currentRound = null;
  }
  start(){
    const deck = new Deck(prototypeQuestions)
    this.currentRound = new Round(deck)

    this.printMessage(deck);
    this.printQuestion(this.currentRound);
  }


  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
