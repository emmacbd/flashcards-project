const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', () => {
  let game
  beforeEach('Set up game', () => {
    game = new Game();
  })
  it('should be an instance of Game', () => {
     expect(game).to.be.an.instanceof(Game);
  })

  it('should create cards', () => {
     game.createCards();
     expect(game.cards).to.be.an('array');
   })

  it('should create a deck of cards', () => {
     game.createDeck();
     expect(game.cards.length).to.equal(30);
  })

  it('should keep track of the current Round', () => {
     game.createRound();
     expect(game.currentRound).to.be.an.instanceof(Round)
  })
})
