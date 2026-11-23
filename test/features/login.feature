@auth
Feature: Mobile App Authentication

  @loginValid
  Scenario: Successful login with valid credentials
    Given user navigates to the mobile login screen
    When user enters valid mobile credentials
    Then user is redirected to the mobile product catalog

  @loginLocked
  Scenario: Unsuccessful login with locked user credentials
    Given user navigates to the mobile login screen
    When user enters username "alice@example.com" and password "10203040"
    Then user should see the mobile error message "Sorry this user has been locked out."