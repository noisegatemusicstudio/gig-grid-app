Feature: User Profile Management
  As a registered user (fan or artist)
  I want to manage my profile information
  So that I can keep my account up to date and optimize my experience on the platform

  Background:
    Given I am a registered and verified user
    And I am signed in to my account

  @fan-profile
  Scenario: Fan completes their profile setup
    Given I am signed in as a fan
    And my profile is incomplete
    When I navigate to my profile settings
    And I upload a profile picture
    And I add my bio: "Passionate music lover who enjoys discovering new artists and attending live shows"
    And I update my favorite venues:
      | The Fillmore        |
      | Red Rocks           |
      | Madison Square Garden |
    And I set my concert preferences:
      | preference          | value    |
      | Max travel distance | 50 miles |
      | Preferred day       | Friday   |
      | Notification type   | Email    |
    And I save my changes
    Then I should see a success message "Profile updated successfully"
    And my profile completion should show 100%

  @artist-profile @band
  Scenario: Band sets up their complete profile
    Given I am signed in as a band artist
    And my profile is incomplete
    When I navigate to my profile settings
    And I upload a high-quality profile picture
    And I upload banner images for my profile
    And I add my detailed bio: "Indie rock band with 10+ years of experience performing across the country"
    And I add band member information:
      | member_name    | instrument | role        |
      | John Smith     | Guitar     | Lead Guitar |
      | Sarah Jones    | Bass       | Bassist     |
      | Mike Wilson    | Drums      | Drummer     |
      | Lisa Brown     | Keyboard   | Keyboardist |
    And I add my music samples:
      | song_title     | file_name        | genre |
      | Electric Dreams| dreams.mp3       | Rock  |
      | Midnight Blues | blues.mp3        | Blues |
      | City Lights    | lights.mp3       | Indie |
    And I set my performance details:
      | field                | value           |
      | Performance radius   | 100 miles       |
      | Minimum booking fee  | $500            |
      | Setup time required  | 2 hours         |
      | Equipment provided   | Full sound system |
    And I add my social media links:
      | platform  | url                           |
      | Instagram | @themidnightrockers           |
      | YouTube   | youtube.com/midnightrockers   |
      | Spotify   | spotify.com/midnightrockers   |
    And I save my changes
    Then I should see a success message "Band profile updated successfully"
    And my profile should be marked as "Complete"
    And I should be eligible to receive booking requests

  @artist-profile @solo-artist  
  Scenario: Solo artist sets up their complete profile
    Given I am signed in as a solo artist
    And my profile is incomplete
    When I navigate to my profile settings
    And I upload a high-quality profile picture
    And I upload banner images for my profile
    And I add my detailed bio: "Singer-songwriter with 10+ years of experience in acoustic folk music"
    And I add my musical background:
      | field              | value                    |
      | Years of experience| 10                       |
      | Primary instrument | Guitar                   |
      | Secondary instrument| Piano                   |
      | Vocal range        | Baritone                 |
    And I add my music samples:
      | song_title      | file_name        | genre            |
      | Mountain Road   | mountain.mp3     | Folk             |
      | City Dreams     | dreams.mp3       | Singer-Songwriter|
      | River Song      | river.mp3        | Acoustic         |
    And I set my performance details:
      | field                | value           |
      | Performance radius   | 75 miles        |
      | Minimum booking fee  | $300            |
      | Setup time required  | 1 hour          |
      | Equipment needed     | Microphone and amp |
    And I add my social media links:
      | platform  | url                      |
      | Instagram | @alexrivers             |
      | YouTube   | youtube.com/alexrivers   |
      | Spotify   | spotify.com/alexrivers   |
    And I save my changes
    Then I should see a success message "Solo artist profile updated successfully"
    And my profile should be marked as "Complete"
    And I should be eligible to receive booking requests

  @profile-validation
  Scenario Outline: Profile update validation
    When I try to update my profile with invalid data:
      | field         | value            |
      | <field_name>  | <invalid_value>  |
    And I save my changes
    Then I should see an error message "<error_message>"
    And my changes should not be saved

    Examples:
      | field_name        | invalid_value           | error_message                              |
      | Bio               | [text over 500 chars]  | Bio must be less than 500 characters      |
      | Social media URL  | invalid-url             | Please enter a valid URL                   |
      | Minimum fee       | -100                    | Minimum fee must be a positive number      |
      | Performance radius| text                    | Performance radius must be a number        |

  @artist-type-validation
  Scenario Outline: Artist type specific validation
    Given I am signed in as a "<artist_type>"
    When I try to update my profile with invalid data:
      | field         | value            |
      | <field_name>  | <invalid_value>  |
    And I save my changes
    Then I should see an error message "<error_message>"
    And my changes should not be saved

    Examples:
      | artist_type | field_name        | invalid_value    | error_message                              |
      | band        | Number of members | 0                | Band must have at least 1 member          |
      | band        | Number of members | 21               | Band cannot have more than 20 members     |
      | band        | Band name         |                  | Band name is required                      |
      | solo_artist | Primary instrument|                  | Primary instrument is required             |
      | solo_artist | Stage name        |                  | Stage name is required                     |

  @privacy-settings
  Scenario: User manages privacy settings
    Given I am on my profile settings page
    When I navigate to the "Privacy" tab
    And I set my profile visibility to "Public"
    And I enable "Show my attendance at events"
    And I disable "Allow direct messages from anyone"
    And I set "Email notifications" to "Weekly digest only"
    And I save my privacy settings
    Then I should see a confirmation "Privacy settings updated"
    And my profile should respect these privacy settings

  @profile-picture
  Scenario: User uploads profile picture
    Given I am on my profile settings page
    When I click "Change Profile Picture"
    And I select an image file "profile.jpg" that is 2MB
    And the image is automatically cropped to a square format
    And I click "Save Picture"
    Then I should see my new profile picture displayed
    And the image should be optimized for fast loading
    And I should see the upload success message

  @profile-picture-validation
  Scenario: Profile picture upload validation
    Given I am on my profile settings page
    When I try to upload a profile picture with:
      | issue           | file_details        |
      | Too large       | 15MB image file     |
      | Wrong format    | document.pdf        |
      | Inappropriate   | flagged_image.jpg   |
    Then I should see appropriate error messages
    And the upload should be rejected
    And I should see format and size requirements

  @account-verification
  Scenario: Artist requests account verification
    Given I am an artist with a complete profile
    When I navigate to account settings
    And I click "Request Verification"
    And I provide verification documents:
      | document_type        | file_name           |
      | Government ID        | drivers_license.jpg |
      | Proof of Performance | concert_poster.jpg  |
      | Music credentials    | certification.pdf   |
    And I submit my verification request
    Then I should see "Verification request submitted"
    And I should see "We'll review your documents within 3-5 business days"
    And my account status should show "Verification Pending"

  @profile-deletion
  Scenario: User requests account deletion
    Given I am on my account settings page
    When I click "Delete Account"
    And I see a warning about permanent data loss
    And I type "DELETE" to confirm
    And I provide a reason for leaving: "Moving to a different platform"
    And I click "Permanently Delete Account"
    Then I should receive a confirmation email
    And my account should be scheduled for deletion in 30 days
    And I should be able to recover it within that period

  @data-export
  Scenario: User exports their data
    Given I am on my account settings page
    When I navigate to "Data & Privacy"
    And I click "Download My Data"
    And I select the data types to include:
      | Profile information |
      | Event history       |
      | Messages           |
      | Uploaded content   |
    And I click "Generate Export"
    Then I should see "Your data export is being prepared"
    And I should receive an email when the export is ready
    And the download link should be valid for 7 days

  @notification-preferences
  Scenario: User customizes notification preferences
    Given I am on my profile settings page
    When I navigate to "Notifications"
    And I configure my preferences:
      | notification_type     | email | push | sms |
      | New event nearby      | ✓     | ✓    | ✗   |
      | Booking confirmations | ✓     | ✓    | ✓   |
      | Messages              | ✗     | ✓    | ✗   |
      | Weekly digest         | ✓     | ✗    | ✗   |
    And I save my notification settings
    Then I should see "Notification preferences updated"
    And I should only receive notifications according to my preferences

  @profile-analytics
  Scenario: Artist views profile analytics
    Given I am an artist with an active profile
    When I navigate to "Profile Analytics"
    Then I should see metrics including:
      | metric               | description                    |
      | Profile views        | Number of times profile viewed |
      | Music plays          | Plays of uploaded samples      |
      | Booking inquiries    | Number of booking requests     |
      | Follower growth      | New followers over time        |
    And I should be able to filter data by date range
    And I should see visual charts and graphs
