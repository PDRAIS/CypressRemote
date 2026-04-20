Feature: NBS Source Dyson Manufacturer Page Regression Tests
    As a user of NBS Source
    I want to search for and view manufacturer information
    So that I can verify the correct details are displayed
 
 # Background: This section will run before each scenario to ensure we start from the Dyson Manufacturer Homepage
    Background: Navigate to Dyson Manufacturer Homepage before each scenario
        Given I have navigated to the Dyson Manufacturer Homepage

        # Test Scenario 1: Verify the telephone number is correct with expected href
    Scenario: Verify the telephone number is correct with expected href
        Then I will see the correct telephone number in UI with expected href