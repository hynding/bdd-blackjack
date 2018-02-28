const { Given, When, Then, setDefaultTimeout } = require('cucumber')
const { Builder } = require('selenium-webdriver')
const { Deck, Game } = require('../../index')
const { equal, ok } = require('assert')

let deck, hand, faceOrder, game, dealtCard

setDefaultTimeout(60 * 1000)

Given('I have a new deck of cards', function () {
  deck = new Deck()
})

Given('the face order of each suit is', function(data) {
  faceOrder = data.raw().map(faceName => faceName[0])
})

Given('I start a new game', function () {
  deck = new Deck()
  deck.shuffle()
  game = new Game(deck)
})

When('I deal all cards', function () {
  hand = []
  while (deck.remaining) {
    hand.push(deck.deal())
  }
})

When('I shuffle the deck', function () {
  deck.shuffle()
})

When('the dealer deals a card', function() {
  dealtCard = game.deal()
})

When('I navigate to {string}', function (url) {
  this.driver = new Builder().forBrowser('chrome').build()
  console.log('this.driver', this.driver)
  return this.driver.get(url)
})

Then('I should have a hand of 52 cards', function () {
  equal(hand.length, 52)
})

Then('I should have no more cards in the deck', function () {
  equal(deck.remaining, 0)
})

Then('the {word} set of {int} cards in my hand should be {string} in face order', function (place, count, suit) {
  const placeIndex = Number(place.slice(0, -2)) - 1
  const setIndex = placeIndex * count
  const cardSet = hand.slice(setIndex, setIndex + count)
  cardSet.forEach((card, index) => {
    const cardFaceName = faceOrder[index]
    equal(Deck.suits[card.suit], suit)
    equal(Deck.faces[card.face], cardFaceName)
  })
})

Then('I should not expect the cards to be in the same order as a new deck', function () {
  let counter = 0
  const newDeck = new Deck()
  while (counter < newDeck.remaining) {
    if (newDeck.stack[counter].face !== deck.stack[counter].face && newDeck.stack[counter].suit !== deck.stack[counter].suit) {
      break
    }
    counter++
  }
  ok(counter < newDeck.remaining)
})

Then('the card should appear in the players hand', function () {
  ok(~game.player.hand.indexOf(dealtCard))
})

Then('the card should appear in the dealers hand', function () {
  ok(~game.dealer.hand.indexOf(dealtCard))
})

Then('the {word} should have {int} cards', function (holder, count) {
  equal(game[holder].hand.length, count)
})

Then('I should see {int} {word} cards', function (count, holder) {
  return this.driver.sleep(10000)
})