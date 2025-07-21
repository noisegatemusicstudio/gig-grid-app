Feature: User Sign In
  As a registered user (fan or artist)
  I want to sign in to my account
  So that I can access my personalized dashboard and platform features

  Background:
    Given the Gig Grid application is running
    And I am on the sign in page

  @successful-signin
  Scenario: Fan signs in with valid credentials
    Given I am a registered fan with email "fan.user@example.amazonses.com" and password "FanPass123!"
    When I enter my email "fan.user@example.amazonses.com"
    And I enter my password "FanPass123!"
    And I click "Sign In"
    Then I should be successfully logged in
    And I should be redirected to the fan dashboard
    And I should see "Welcome back, [Fan Name]!"

  @successful-signin
  Scenario: Artist signs in with valid credentials
    Given I am a registered artist with email "artist.band@example.amazonses.com" and password "ArtistPass123!"
    When I enter my email "artist.band@example.amazonses.com"
    And I enter my password "ArtistPass123!"
    And I click "Sign In"
    Then I should be successfully logged in
    And I should be redirected to the artist dashboard
    And I should see "Welcome back, [Artist Name]!"

  @invalid-credentials
  Scenario Outline: Sign in fails with invalid credentials
    When I enter my email "<email>"
    And I enter my password "<password>"
    And I click "Sign In"
    Then I should see an error message "<error_message>"
    And I should remain on the sign in page

    Examples:
      | email                         | password       | error_message                                    |
      | invalid@email.com             | ValidPass123!  | Invalid email or password                        |
      | valid@example.amazonses.com   | wrongpassword  | Invalid email or password                        |
      | not-an-email                  | ValidPass123!  | Please enter a valid email address              |
      |                               | ValidPass123!  | Email is required                                |
      | valid@example.amazonses.com   |                | Password is required                             |

  @account-lockout
  Scenario: Account gets locked after multiple failed attempts
    Given I am a registered user with email "user@example.amazonses.com"
    When I attempt to sign in with incorrect password 5 times
    Then I should see an error message "Account temporarily locked due to multiple failed attempts"
    And I should see "Try again in 15 minutes or reset your password"
    And the sign in form should be disabled
    And I should see a "Reset Password" link

  @unverified-email
  Scenario: User with unverified email attempts to sign in
    Given I am a registered user with unverified email "unverified@example.amazonses.com"
    When I enter my email "unverified@example.amazonses.com"
    And I enter my correct password
    And I click "Sign In"
    Then I should see a message "Please verify your email address before signing in"
    And I should see a "Resend verification email" button
    And I should not be logged in

  @social-signin
  Scenario: User signs in with social media account
    Given I have previously registered using Google
    When I click "Continue with Google"
    And I authorize the application
    Then I should be successfully logged in
    And I should be redirected to my appropriate dashboard

  @remember-me
  Scenario: User chooses to be remembered for future visits
    Given I am a registered fan with email "fan@example.amazonses.com"
    When I enter my email "fan@example.amazonses.com"
    And I enter my password "FanPass123!"
    And I check the "Remember me" checkbox
    And I click "Sign In"
    Then I should be successfully logged in
    And my session should persist for 30 days
    And when I close and reopen the browser within 30 days
    Then I should still be logged in

  @forgot-password
  Scenario: User requests password reset
    Given I am on the sign in page
    When I click "Forgot Password?"
    And I enter my email "user@example.amazonses.com"
    And I click "Send Reset Link"
    Then I should see a message "Password reset link sent to your email"
    And I should receive a password reset email at "user@example.amazonses.com"

  @password-reset
  Scenario: User resets password using email link
    Given I have received a password reset email
    When I click the reset link in the email
    And I am redirected to the password reset page
    And I enter a new password "NewSecurePass456!"
    And I confirm the new password "NewSecurePass456!"
    And I click "Reset Password"
    Then I should see a success message "Password successfully reset"
    And I should be redirected to the sign in page
    And I should be able to sign in with my new password

  @expired-reset-link
  Scenario: User tries to use expired password reset link
    Given I have received a password reset email 25 hours ago
    When I click the reset link in the email
    Then I should see an error message "This password reset link has expired"
    And I should see a "Request new reset link" button

  @two-factor-authentication
  Scenario: Artist with 2FA enabled signs in
    Given I am a registered artist with 2FA enabled
    When I enter my email and password correctly
    And I click "Sign In"
    Then I should see a 2FA verification page
    When I enter the correct 6-digit code from my authenticator app
    And I click "Verify"
    Then I should be successfully logged in
    And I should be redirected to the artist dashboard

  @mobile-signin
  Scenario: User signs in on mobile device
    Given I am using a mobile device
    And I am on the sign in page
    When I enter my credentials
    And I click "Sign In"
    Then the sign in process should work seamlessly
    And the mobile dashboard should load properly
    And all navigation elements should be touch-friendly

  @session-management
  Scenario: User signs out properly
    Given I am signed in as a fan
    When I click on my profile menu
    And I click "Sign Out"
    Then I should be signed out
    And I should be redirected to the home page
    And I should see "Sign In" and "Register" options
    And my session data should be cleared

  @concurrent-sessions
  Scenario: User signs in from multiple devices
    Given I am signed in on my desktop computer
    When I sign in from my mobile phone with the same account
    Then both sessions should remain active
    And I should receive a security notification about the new sign in
    And I should be able to manage active sessions from my account settings
