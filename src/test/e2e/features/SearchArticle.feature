Feature: Performing a clothes search

  Scenario: Search clothes on the web page
    Given I'm on the home page
    When I search clothes in a search bar:
      | search |
      | dress  |
    Then show some results are displayed on the site
    And show a label 'results have been found.' on the site
