Feature: A Standard Deck of Playing Cards

  Scenario: Inspecting a New Deck
    Given I have a new deck of cards
    When I deal all cards
    Then I should have a hand of 52 cards
    And I should have no more cards in the deck
    And the first set of 13 cards should be Hearts in the following order
      | Ace   |
      | Two   |
      | Three |
      | Four  |
      | Five  |
      | Six   |
      | Seven |
      | Eight |
      | Nine  |
      | Ten   |
      | Jack  |
      | Queen |
      | King  |
    And the second set of 13 cards should be Clubs in the following order
      | Ace   |
      | Two   |
      | Three |
      | Four  |
      | Five  |
      | Six   |
      | Seven |
      | Eight |
      | Nine  |
      | Ten   |
      | Jack  |
      | Queen |
      | King  |
    And the third set of 13 cards should be Diamonds in the following order
      | Ace   |
      | Two   |
      | Three |
      | Four  |
      | Five  |
      | Six   |
      | Seven |
      | Eight |
      | Nine  |
      | Ten   |
      | Jack  |
      | Queen |
      | King  |
    And the fourth set of 13 cards should be Spades in the following order
      | Ace   |
      | Two   |
      | Three |
      | Four  |
      | Five  |
      | Six   |
      | Seven |
      | Eight |
      | Nine  |
      | Ten   |
      | Jack  |
      | Queen |
      | King  |
