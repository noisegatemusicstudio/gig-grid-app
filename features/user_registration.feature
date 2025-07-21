Feature: User Registration
  As a music enthusiast or artist
  I want to register for an account
  So that I can access the Gig Grid platform and connect with the music community

  Background:
    Given the Gig Grid application is running
    And I am on the registration page

  @fan-registration
  Scenario: Fan successfully registers with valid information
    Given I select "Fan" as my user type
    When I fill in the registration form with:
      | field           | value                    |
      | First Name      | John                     |
      | Last Name       | Musiclover               |
      | Email           | john.musiclover@example.amazonses.com |
      | Password        | SecurePass123!           |
      | Confirm Password| SecurePass123!           |
      | Date of Birth   | 1990-05-15               |
      | Location        | Los Angeles, CA          |
    And I select my favorite music genres:
      | Rock    |
      | Jazz    |
      | Hip Hop |
    And I agree to the terms and conditions
    And I click "Create Account"
    Then I should see a success message "Welcome to Gig Grid! Please check your email to verify your account."
    And I should receive a verification email at "john.musiclover@example.amazonses.com"
    And I should be redirected to the email verification page

  @artist-registration @band
  Scenario: Band successfully registers with valid information
    Given I select "Artist" as my user type
    When I fill in the registration form with:
      | field           | value                    |
      | Band Name       | The Midnight Rockers     |
      | Contact Person  | Jane Smith               |
      | Email           | band.midnightrockers@example.amazonses.com |
      | Password        | ArtistPass456!           |
      | Confirm Password| ArtistPass456!           |
      | Date of Birth   | 1988-03-22               |
      | Location        | Nashville, TN            |
      | Phone Number    | +1-555-123-4567          |
    And I select my music genres:
      | Rock         |
      | Alternative  |
      | Indie        |
    And I select my artist type as "Band"
    And I specify the number of band members as "4"
    And I provide my bio: "We are an indie rock band from Nashville, creating music that blends classic rock with modern alternative sounds."
    And I agree to the terms and conditions
    And I click "Create Account"
    Then I should see a success message "Welcome to Gig Grid! Please check your email to verify your account."
    And I should receive a verification email at "band.midnightrockers@example.amazonses.com"
    And I should be redirected to the artist profile setup page

  @artist-registration @solo-artist
  Scenario: Solo artist successfully registers with valid information
    Given I select "Artist" as my user type
    When I fill in the registration form with:
      | field           | value                    |
      | First Name      | Alex                     |
      | Last Name       | Rivera                   |
      | Stage Name      | Alex Rivers              |
      | Email           | solo.alexrivers@example.amazonses.com |
      | Password        | SoloPass789!             |
      | Confirm Password| SoloPass789!             |
      | Date of Birth   | 1992-07-14               |
      | Location        | Austin, TX               |
      | Phone Number    | +1-555-987-6543          |
    And I select my music genres:
      | Folk         |
      | Acoustic     |
      | Singer-Songwriter |
    And I select my artist type as "Solo Artist"
    And I select my primary instrument as "Guitar"
    And I provide my bio: "Singer-songwriter with a passion for storytelling through acoustic melodies and heartfelt lyrics."
    And I agree to the terms and conditions
    And I click "Create Account"
    Then I should see a success message "Welcome to Gig Grid! Please check your email to verify your account."
    And I should receive a verification email at "solo.alexrivers@example.amazonses.com"
    And I should be redirected to the artist profile setup page

  @validation
  Scenario Outline: Registration fails with invalid input
    Given I select "<user_type>" as my user type
    When I fill in the registration form with invalid data:
      | field           | value           |
      | <field_name>    | <field_value>   |
    And I click "Create Account"
    Then I should see an error message "<error_message>"
    And I should remain on the registration page

    Examples:
      | user_type | field_name       | field_value              | error_message                                    |
      | Fan       | Email            | invalid-email            | Please enter a valid email address              |
      | Fan       | Password         | 123                      | Password must be at least 8 characters long     |
      | Fan       | Confirm Password | different-password       | Passwords do not match                           |
      | Artist    | Email            | existing@example.amazonses.com | This email is already registered           |
      | Artist    | Phone Number     | invalid-phone            | Please enter a valid phone number               |
      | Fan       | Date of Birth    | 2010-01-01               | You must be at least 13 years old to register   |
      | Fan       | First Name       |                          | First name is required                           |
      | Fan       | Last Name        |                          | Last name is required                            |
      | Artist    | Artist Type      |                          | Please select either Band or Solo Artist        |

  @duplicate-email
  Scenario: User attempts to register with existing email
    Given a user with email "existing@example.amazonses.com" already exists
    When I select "Fan" as my user type
    And I fill in the registration form with:
      | field           | value                    |
      | First Name      | Another                  |
      | Last Name       | User                     |
      | Email           | existing@example.amazonses.com |
      | Password        | NewPassword123!          |
      | Confirm Password| NewPassword123!          |
      | Date of Birth   | 1992-08-10               |
      | Location        | Miami, FL                |
    And I click "Create Account"
    Then I should see an error message "This email is already registered. Please sign in or use a different email."
    And I should see a link to "Sign In"

  @social-registration
  Scenario: Fan registers using social media account
    Given I select "Fan" as my user type
    When I click "Continue with Google"
    And I authorize the application with my Google account
    And I complete the additional information:
      | field           | value           |
      | Date of Birth   | 1985-12-03      |
      | Location        | Chicago, IL     |
    And I select my favorite music genres:
      | Blues   |
      | Country |
    And I agree to the terms and conditions
    And I click "Complete Registration"
    Then I should see a success message "Welcome to Gig Grid!"
    And I should be logged in to my fan dashboard

  @artist-verification
  Scenario: Artist registration requires additional verification
    Given I have successfully registered as an artist
    When I complete the email verification
    And I am redirected to the artist profile setup page
    Then I should see a message "Please complete your artist profile to start booking gigs"
    And I should see required fields:
      | Artist Bio          |
      | Profile Picture     |
      | Music Samples       |
      | Performance History |
      | Pricing Information |
    And I should see "Profile Status: Incomplete"

  @password-requirements
  Scenario: Password meets security requirements
    Given I select "Fan" as my user type
    When I enter a password in the password field
    Then I should see real-time validation showing:
      | requirement                    | status |
      | At least 8 characters          | ✓      |
      | Contains uppercase letter      | ✓      |
      | Contains lowercase letter      | ✓      |
      | Contains number                | ✓      |
      | Contains special character     | ✓      |
    And the "Create Account" button should be enabled

  @age-verification
  Scenario: Underage user registration is blocked
    Given I select "Fan" as my user type
    When I fill in the registration form with:
      | field           | value                    |
      | First Name      | Young                    |
      | Last Name       | Musicfan                 |
      | Email           | young.fan@example.amazonses.com |
      | Password        | YoungPass123!            |
      | Confirm Password| YoungPass123!            |
      | Date of Birth   | 2015-05-15               |
      | Location        | Austin, TX               |
    And I click "Create Account"
    Then I should see an error message "You must be at least 13 years old to create an account"
    And I should see information about parental consent options
    And the account should not be created

  @mobile-responsive
  Scenario: Registration works on mobile devices
    Given I am using a mobile device
    And I am on the registration page
    When I select "Artist" as my user type
    And I select "Solo Artist" as my artist type
    Then the registration form should be optimized for mobile
    And all form fields should be easily accessible
    And the keyboard should automatically show appropriate input types for each field
    And the form should be scrollable and all elements visible
    And I should see conditional fields based on artist type selection

  @artist-type-selection
  Scenario: Artist type selection displays appropriate fields
    Given I select "Artist" as my user type
    When I select "Band" as my artist type
    Then I should see fields for:
      | Band Name           |
      | Contact Person      |
      | Number of Members   |
      | Band Formation Date |
    And I should not see fields for:
      | First Name     |
      | Last Name      |
      | Primary Instrument |
    When I select "Solo Artist" as my artist type
    Then I should see fields for:
      | First Name         |
      | Last Name          |
      | Stage Name         |
      | Primary Instrument |
    And I should not see fields for:
      | Band Name           |
      | Contact Person      |
      | Number of Members   |
