Feature: Starting a new game

  Scenario: Dealing the cards
    Given I start a new game
    When the dealer deals a card
    Then the card should appear in the players hand
    When the dealer deals a card
    Then the card should appear in the dealers hand
    When the dealer deals a card
    Then the card should appear in the players hand
    When the dealer deals a card
    Then the card should appear in the dealers hand
    And the player should have 2 cards
    And the dealer should have 2 cards

