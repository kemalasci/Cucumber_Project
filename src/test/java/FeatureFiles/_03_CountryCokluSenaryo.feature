Feature: Country Multi Scenario


  Background:
    Given Navigate to basqar
    When Enter username and password and click Login button
    Then User should login successfully
    And Navigate to country page


  Scenario: Create a country

    When Create a country
    Then Success message should be displayed


  Scenario: Create a country parameter data

    When Create a country name as "temurUlke2" and code as "code2"
    Then Success message should be displayed
