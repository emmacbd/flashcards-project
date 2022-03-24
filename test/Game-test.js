const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', () => {
  let game, turn, deck, round
  beforeEach('Set up game', () => {
    game = new Game();
  })
  it('should be an instance of Game', () => {
    expect(game).to.be. an.instanceof(Game);
  })

   it('should have a deck of cards', () => {
     game.start()
     expect(game.deck.cards.length).to.equal(30);
   })


  it('should keep track of the current Round', () => {
    game.start()
    expect(game.currentRound).to.be.an.instanceof(Round)
  })


})
// Your Game class should meet these other requirements:
// start: method that starts everything
// Creates Cards
// Puts Cards in a Deck
// Creates a new Round using the Deck
// invokes printMessage to display the message in the CLI
// invokes printQuestion to kick off our helper functions that allow interaction via the CLI
