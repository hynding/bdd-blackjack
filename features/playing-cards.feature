Feature: A Standard Deck of Playing Cards

  Scenario: Inspecting a New Deck
    Given I have a new deck of cards
    And the face order of each suit is
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
    When I deal all cards
    Then I should have a hand of 52 cards
    And I should have no more cards in the deck
    And the 1st set of 13 cards in my hand should be "Hearts" in face order
    And the 2nd set of 13 cards in my hand should be "Clubs" in face order
    And the 3rd set of 13 cards in my hand should be "Diamonds" in face order
    And the 4th set of 13 cards in my hand should be "Spades" in face order

  Scenario: Shuffling a New Deck
    Given I have a new deck of cards
    When I shuffle the deck
    Then I should not expect the cards to be in the same order as a new deck
