Feature: Check motor vehicle stamp duty

  Scenario: Verify calculation for motor vehicle stamp duty
    Given I am on the Service NSW stamp duty page
    When I click the "Check online" button on the homepage
    Then I should be navigated to the calculator page
    And I select Yes and enter vehicle price as "60000"
    And I click the Calculate button to see the stamp duty result
    
