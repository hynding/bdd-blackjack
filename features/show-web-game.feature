Feature: Show the Game on a Web Page

  Scenario: Print the dealt cards on the page
    When I navigate to "http://localhost:8080"
    Then I should see 2 dealer cards
    And I should see 2 player cards
