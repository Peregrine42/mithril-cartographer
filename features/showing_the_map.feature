Feature: showing the map
  As a network engineer
  I want a map of the network
  So that I can understand the geographical locations of the network devices

  @javascript
  Scenario: visiting transactionthe homepage
    Given there are some devices in the database, with geographical data
    When I visit the homepage
    Then I see the map
