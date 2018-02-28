class Deck {
  constructor () {
    this.create()
  }

  create () {
    this.stack = []
    for (let index = 0; index < Deck.limit; index++) {
      const suit = Math.floor(index / Deck.faces.length)
      const face = index % Deck.faces.length
      this.stack.push({ face, suit })
    }
    return this
  }

  deal () {
    if (this.remaining) {
      return this.stack.shift()
    }
  }

  shuffle() {
    for (let index = this.stack.length - 1; index > 0; index--) {
      const current = this.stack[index]
      const randomIndex = Math.floor(Math.random() * (index + 1));
      this.stack[index] = this.stack[randomIndex];
      this.stack[randomIndex] = current;
    }
    return this
  }

  get remaining () {
    return this.stack.length
  }

  static get limit () {
    return Deck.suits.length * Deck.faces.length
  }

  static get suits () {
    return [
      'Hearts',
      'Clubs',
      'Diamonds',
      'Spades'
    ]
  }

  static get faces () {
    return [
      'Ace',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
      'Ten',
      'Jack',
      'Queen',
      'King'
    ]
  }
}
exports.Deck = Deck