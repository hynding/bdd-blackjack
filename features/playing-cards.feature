Feature: A Standard Deck of Playing Cards

  Scenario: Inspecting a New Deck
    Given I have a new deck of cards
    When I deal all cards
    Then I should have a hand of 52 cards
    And I should have no more cards in the deck
