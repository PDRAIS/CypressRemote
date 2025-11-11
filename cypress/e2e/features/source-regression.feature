# The main purpose of the project is to demonstrate the following:
#  - Cucumber/Gherkin and Feature file implementation
#  - Page Object Model
#  - Repository created in GitHub
#  - Independent tests
#  - CI Pipeline Integration
#  - Implementation of the Axe-plugin for usability reporting
#  - API Testing
#  - Different ways of interacting and verifying UI element attributes

Feature: NBS Source Dyson Manufacturer Page Regression Tests
    As a user of NBS Source
    I want to search for and view manufacturer information
    So that I can verify the correct details are displayed

    # Background: Navigate to Dyson Manufacturer Homepage before each scenario
    Background:
        Given I have navigated to the Dyson Manufacturer Homepage

    # Scenario 1: Verify the telephone number is correct with expected href
    Scenario: Verify the telephone number is correct with expected href
        Then I will see the correct telephone number in UI with expected href

    # Scenario 2: Verify the page heading (h1) value is correct
    Scenario: Verify the page heading (h1) value is correct
        Then I will see the correct h1 heading value in UI

    # Scenario 3: Verify the page title is correct
    Scenario: Verify source logo href is as expected
        Then the source logo href is as expected
