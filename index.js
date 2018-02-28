class Deck {
  constructor () {
    this.stack = new Array(52)
  }

  deal () {
    if (this.remaining) {
      this.stack.pop()
    }
  }

  get remaining () {
    return this.stack.length
  }
}
exports.Deck = Deck