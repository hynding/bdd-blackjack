const { Given, When, Then } = require('cucumber')
const { Deck } = require('../../index')
const { equal, ok } = require('assert')

let deck, hand, faceOrder

Given('I have a new deck of cards', function () {
  deck = new Deck()
})

Given('the face order of each suit is', function(data) {
  faceOrder = data.raw().map(faceName => faceName[0])
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

  Then('I should not expect the cards to be in the same order as a new deck', function () {
    const newDeck = new Deck()
    for (let i = 0; i < newDeck.remaining; i++) {
      if (newDeck.stack[i].face !== deck.stack[i].face && newDeck.stack[i].suit !== deck.stack[i].suit) {
        break
      }
    }
    ok(i < newDeck.remaining)
  })
})