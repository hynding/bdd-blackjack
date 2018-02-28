const { defineSupportCode } = require('cucumber')
const { Deck } = require('../../index')
const { equals } = require('assert')

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
    equals(hand.length, 52)
  })

  Then('I should have no more cards in the deck', function () {
    equals(deck.remaining, 0)
  })
})