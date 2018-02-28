Feature: A Standard Deck of Playing Cards

  Scenario: Inspecting a New Deck
    Given I have a new deck of cards
    When I deal all cards
    Then I should have a hand of 52 cards
    And I should have no more cards in the deck
    And the first set of 13 cards should be Hearts ordered from Ace to King
    And the second set of 13 cards should be Clubs ordered from Ace to King
    And the third set of 13 cards should be Diamonds ordered from Ace to King
    And the fourth set of 13 cards should be Spades ordered from Ace to King
