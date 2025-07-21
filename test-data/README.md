# Test Data Documentation

This directory contains CSV files with test data for the Gig Grid application's BDD testing scenarios.

## Files Overview

### test_users.csv
Contains comprehensive test user data for both fans and artists (bands and solo artists).

**Columns:**
- `user_type`: Type of user (fan, band, solo_artist)
- `artist_type`: Sub-type for artists (band, solo_artist) - null for fans
- `first_name`: User's first name (for fans and solo artists)
- `last_name`: User's last name (for fans and solo artists)
- `band_name`: Name of the band (for band artists only)
- `stage_name`: Stage/performance name (for solo artists)
- `contact_person`: Primary contact for bands
- `email`: Email address using Amazon SES test domain (@example.amazonses.com)
- `password`: Test password (all meet security requirements)
- `date_of_birth`: Birth date in YYYY-MM-DD format
- `location`: User's location (City, State format)
- `phone_number`: Phone number (for artists)
- `genres`: Musical genres (pipe-separated for multiple)
- `primary_instrument`: Main instrument (for solo artists)
- `num_members`: Number of band members (for bands)
- `bio`: User biography/description
- `profile_status`: Current profile completion status

### verification_data.csv
Contains test data for various verification and authentication scenarios.

**Columns:**
- `scenario`: Test scenario type
- `email`: Email address for the test case
- `verification_status`: Current verification state
- `verification_date`: Date of verification/action
- `notes`: Additional information about the test case

## Amazon SES Test Email Addresses

All email addresses use the Amazon SES test domain format: `user@example.amazonses.com`

This ensures:
- Emails won't be delivered to real recipients during testing
- Amazon SES can simulate various email scenarios
- Safe testing environment for email verification flows

## User Types and Data Structure

### Fans
- **Fields**: first_name, last_name, email, password, date_of_birth, location, genres
- **Focus**: Music preferences, event attendance, social features
- **Example**: John Musiclover (john.musiclover@example.amazonses.com)

### Band Artists
- **Fields**: band_name, contact_person, email, password, date_of_birth, location, phone_number, genres, num_members, bio
- **Focus**: Collaborative music creation, booking management, member coordination
- **Example**: The Midnight Rockers (band.midnightrockers@example.amazonses.com)

### Solo Artists
- **Fields**: first_name, last_name, stage_name, email, password, date_of_birth, location, phone_number, genres, primary_instrument, bio
- **Focus**: Individual artistic identity, personal branding, solo performances
- **Example**: Alex Rivers (solo.alexrivers@example.amazonses.com)

## Test Scenarios Covered

### Registration Tests
- Valid fan registration with all required fields
- Band registration with complete information
- Solo artist registration with artistic details
- Validation errors for missing/invalid data
- Duplicate email handling
- Underage user validation
- Social media registration flows

### Authentication Tests
- Successful login for all user types
- Failed login attempts and account lockout
- Password reset workflows
- Email verification processes
- Two-factor authentication
- Session management

### Profile Management Tests
- Profile completion for different user types
- Photo and media uploads
- Artist-specific information (band members, instruments)
- Privacy settings configuration
- Account verification processes
- Data export and deletion

## Usage in BDD Tests

The CSV data can be used in step definitions to:

1. **Data-driven testing**: Use different user profiles for comprehensive testing
2. **State setup**: Create users with specific characteristics for scenarios
3. **Validation testing**: Test edge cases and error conditions
4. **Performance testing**: Generate multiple users for load testing
5. **Email testing**: Simulate various email verification scenarios

## Data Maintenance

- **Regular updates**: Keep test data current with application requirements
- **Clean separation**: Maintain clear boundaries between user types
- **Realistic data**: Use plausible names, locations, and preferences
- **Edge cases**: Include boundary conditions and error scenarios
- **Privacy compliance**: No real personal information in test data

## Integration with Features

The test data directly supports the BDD feature files:
- `user_registration.feature`: Uses registration scenarios and validation cases
- `user_signin.feature`: Leverages authentication test cases
- `user_profile_management.feature`: Utilizes profile completion scenarios

This structured approach ensures comprehensive test coverage while maintaining realistic and manageable test data sets.
