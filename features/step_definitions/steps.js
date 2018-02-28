const { defineSupportCode } = require('cucumber')
const { Deck } = require('../../index')
const { equal, ok } = require('assert')

defineSupportCode(function ({ Given, When, Then }) {

  let deck, hand

  Given('I have a new deck of cards', function () {
    deck = new Deck()
  })

  When('I deal all cards', function () {
    hand = []
    while (deck.remaining) {
      hand.push(deck.deal())
    }
  })

  Then('I should have a hand of 52 cards', function () {
    equal(hand.length, 52)
  })

  Then('I should have no more cards in the deck', function () {
    equal(deck.remaining, 0)
  })

  Then('the first set of 13 cards should be Hearts in the following order', function (order) {
    const cardSet = hand.slice(0, 13)
    const firstCard = cardSet[0]
    const lastCard = cardSet[cardSet.length - 1]
    const cardFaceOrder = order.raw()
    console.log('cfo', cardFaceOrder)
    cardSet.forEach((card, index) => {
      const cardFaceName = cardFaceOrder[index][0]
      equal(Deck.suits[card.suit], 'Hearts')
      equal(Deck.face[card.face], cardFaceName)
    })
  })

  Then('the second set of 13 cards should be Clubs in the following order', function (order) {
    const cardSet = hand.slice(1, 13)
    const firstCard = cardSet[0]
    const lastCard = cardSet[cardSet.length - 1]
    const cardFaceOrder = order.raw()
    cardSet.forEach((card, index) => {
      const cardFaceName = cardFaceOrder[index][0]
      equal(Deck.suits[card.suit], 'Clubs')
      equal(Deck.face[card.face], cardFaceName)
    })
  })

  Then('the third set of 13 cards should be Diamonds in the following order', function (order) {
    const cardSet = hand.slice(2, 13)
    const firstCard = cardSet[0]
    const lastCard = cardSet[cardSet.length - 1]
    const cardFaceOrder = order.raw()
    cardSet.forEach((card, index) => {
      const cardFaceName = cardFaceOrder[index][0]
      equal(Deck.suits[card.suit], 'Diamonds')
      equal(Deck.face[card.face], cardFaceName)
    })
  })

  Then('the fourth set of 13 cards should be Spades in the following order', function (order) {
    const cardSet = hand.slice(3, 13)
    const firstCard = cardSet[0]
    const lastCard = cardSet[cardSet.length - 1]
    const cardFaceOrder = order.raw()
    cardSet.forEach((card, index) => {
      const cardFaceName = cardFaceOrder[index][0]
      equal(Deck.suits[card.suit], 'Spades')
      equal(Deck.face[card.face], cardFaceName)
    })
  })
})