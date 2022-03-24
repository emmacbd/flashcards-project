const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = undefined;
    this.cards = [];
  }

  createCards(){
    prototypeQuestions.forEach(question =>{
      this.cards.push(new Card(question.id, question.question, question.answers, question.correctAnswer))
    })
  }

  createDeck(){
    let deck = new Deck(this.cards)
    this.deck = deck;
    return this.deck
  }

  createRound(){
    let round = new Round(this.deck);
    this.currentRound = round;
    return this.currentRound;
  }

  start(){
    this.createCards();
    this.createDeck();
    this.createRound();
    this.printMessage(this.deck);
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
