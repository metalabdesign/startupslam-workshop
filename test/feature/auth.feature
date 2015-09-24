
Feature: Authentication
	Scenario: Successful Authentication
		Given: I am a valid user
		When: I enter my username and password in the form
		And: I login
		Then: I should see the chat screen
	Scenario: Unsuccessful Authentication
		Given: I am an invalid user
		When: I enter my username and password in the form
		And: I login
		Then: I should see an error
