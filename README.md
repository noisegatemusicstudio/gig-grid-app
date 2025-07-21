# Gig Grid - Musician Platform

A comprehensive platform connecting musicians with fans, venues, and booking opportunities.

## BDD (Behavior-Driven Development) Approach

This project follows a BDD methodology where features are defined in plain English using Gherkin syntax before implementation. This ensures that all stakeholders understand the requirements and expected behavior.

## Project Structure

```
gig-grid-app/
├── .github/workflows/                  # CI/CD pipeline configurations
│   └── ci-cd.yml                      # GitHub Actions workflow
├── config/                            # Environment-specific configurations
│   ├── development.json               # Local development config
│   ├── sit.json                       # SIT environment config
│   ├── uat.json                       # UAT environment config
│   └── production.json                # Production environment config
├── docs/                              # Documentation
│   ├── branching-strategy.md          # Git branching strategy
│   ├── playwright-framework-summary.md # Web testing framework docs
│   └── appium2-framework-summary.md   # Mobile testing framework docs
├── features/                          # BDD Feature files
│   ├── user_registration.feature      # User sign-up scenarios
│   ├── user_signin.feature           # User authentication scenarios
│   └── user_profile_management.feature # Profile management scenarios
├── scripts/                           # Development and deployment scripts
│   └── setup-dev.sh                  # Development environment setup
├── test-data/                         # Test data for BDD scenarios
│   ├── test_users.csv                 # Comprehensive user test data
│   ├── verification_data.csv          # Email and verification test data
│   └── README.md                      # Test data documentation
├── test-frameworks/                   # Universal testing frameworks (git submodules)
│   ├── playwright-framework/          # Web E2E testing framework
│   └── appium2-framework/             # Mobile testing framework
├── step_definitions/                   # Step implementations (to be created)
├── src/                               # Source code (to be created)
├── tests/                             # Test files (to be created)
└── README.md                          # This file
```

## 🧪 Testing Frameworks

This project includes two professional-grade, universal testing frameworks that can be used across any project:

### 🌐 Web Testing - Universal Playwright Framework
- **Repository**: https://github.com/noisegatemusicstudio/universal-playwright-framework
- **Status**: ✅ Production Ready (4/4 tests passing)
- **Features**: Cross-browser testing, mobile responsive, API testing, smart test data
- **Documentation**: [`docs/playwright-framework-summary.md`](docs/playwright-framework-summary.md)

### 📱 Mobile Testing - Universal Appium2 Framework  
- **Repository**: https://github.com/noisegatemusicstudio/universal-appium2-framework
- **Status**: ✅ Production Ready (Android + iOS support)
- **Features**: Cross-platform mobile testing, real device support, touch gestures, device management
- **Documentation**: [`docs/appium2-framework-summary.md`](docs/appium2-framework-summary.md)

Both frameworks are integrated as git submodules and provide comprehensive testing capabilities for the Gig Grid platform across web and mobile interfaces.

## Features Overview

### 1. User Registration (`user_registration.feature`)
- **Fan Registration**: Music fans with first name, last name, and preferences
- **Band Registration**: Musical groups with band details and member information
- **Solo Artist Registration**: Individual musicians with stage names and instruments
- **Artist Type Selection**: Dynamic form fields based on band vs solo artist choice
- **Validation**: Comprehensive input validation and error handling
- **Social Registration**: Integration with Google/Facebook for quick signup
- **Age Verification**: Ensures compliance with age requirements
- **Mobile Responsive**: Optimized for mobile devices

### 2. User Sign In (`user_signin.feature`)
- **Credential Authentication**: Email/password login for all user types
- **Account Security**: Lockout protection and 2FA support
- **Password Recovery**: Forgot password and reset functionality
- **Social Sign In**: OAuth integration for existing social accounts
- **Session Management**: Remember me and concurrent session handling

### 3. User Profile Management (`user_profile_management.feature`)
- **Profile Completion**: Guided setup for fans, bands, and solo artists
- **Artist-Specific Features**: Band member management, instrument selection
- **Media Upload**: Profile pictures, music samples, and banners
- **Privacy Controls**: Granular privacy settings and visibility options
- **Verification System**: Artist verification process
- **Data Management**: Export and deletion capabilities
- **Analytics**: Profile performance metrics for artists

## User Types

### Fans
- **Personal Info**: First name, last name, email, location
- **Preferences**: Favorite music genres, concert preferences
- **Activities**: Discover music, follow artists, attend events
- **Social Features**: Connect with other fans, share experiences

### Band Artists
- **Band Details**: Band name, contact person, formation date
- **Member Management**: Individual member profiles and roles
- **Collaboration**: Shared booking management and communication
- **Performance Info**: Equipment, setup requirements, pricing

### Solo Artists
- **Personal Branding**: Stage name, artistic identity
- **Musical Skills**: Primary/secondary instruments, vocal range
- **Individual Focus**: Personal booking, solo performance details
- **Artistic Expression**: Personal bio and musical style

## Test Data Integration

### Amazon SES Email Testing
- All test emails use `@example.amazonses.com` domain
- Safe testing environment without real email delivery
- Supports email verification and notification testing

### Comprehensive Test Users
- **28 test users** covering all scenarios
- **8 fans** with diverse music preferences
- **8 bands** with different genres and formations  
- **8 solo artists** across various musical styles
- **4 special test cases** for edge conditions

### Test Data Features
- Realistic user profiles with authentic details
- Boundary condition testing (underage users, invalid data)
- Authentication scenarios (locked accounts, unverified emails)
- Profile completion states (complete, incomplete, pending)

## Key Features Covered

### Authentication & Security
- ✅ Secure registration process with user type differentiation
- ✅ Email verification using Amazon SES
- ✅ Password strength requirements with real-time validation
- ✅ Two-factor authentication support
- ✅ Account lockout protection after failed attempts
- ✅ Social media integration (Google/Facebook)

### User Experience
- ✅ Mobile-responsive design with touch optimization
- ✅ Progressive profile completion guides
- ✅ Dynamic form fields based on user type selection
- ✅ Real-time validation with helpful error messages
- ✅ Intuitive navigation and accessibility considerations

### Artist-Specific Features
- ✅ Band vs Solo artist differentiation
- ✅ Conditional form fields based on artist type
- ✅ Band member management and role assignment
- ✅ Instrument selection for solo artists
- ✅ Music sample uploads and organization
- ✅ Performance requirement specifications

### Data Management
- ✅ Profile customization for all user types
- ✅ Privacy controls and visibility settings
- ✅ Data export capabilities (GDPR compliance)
- ✅ Account deletion with recovery period
- ✅ Notification preferences management

## BDD Tags for Organization

### User Type Tags
- `@fan-registration` - Fan-specific scenarios
- `@artist-registration` - Artist registration flows
- `@band` - Band-specific functionality
- `@solo-artist` - Solo artist features

### Feature Tags
- `@validation` - Input validation scenarios
- `@social-signin` - Social media authentication
- `@mobile-responsive` - Mobile-specific scenarios
- `@security` - Security-related scenarios
- `@artist-type-selection` - Dynamic form behavior

## Git Branching Strategy

This project follows a multi-environment branching strategy designed for safe, progressive deployment:

### Branch Structure
```
main (production)
├── uat (user acceptance testing)
├── sit (system integration testing)  
└── dev (development)
    ├── feature/user-registration-ui
    ├── feature/artist-profile-setup
    └── feature/booking-system
```

### Environments

#### `dev` Branch - Local Development
- **Purpose**: UI/UX development with mock data
- **Backend**: JSON Server for API simulation
- **Database**: Local JSON files
- **Email**: Mock email service (console logging)
- **Testing**: BDD scenarios with test data
- **Fast iteration**: No external dependencies

#### `sit` Branch - System Integration Testing  
- **Purpose**: Backend integration with AWS services
- **Backend**: AWS Amplify
- **Database**: DynamoDB (development tables)
- **Email**: Amazon SES (sandbox mode)
- **Authentication**: AWS Cognito
- **Testing**: Integration and API testing

#### `uat` Branch - User Acceptance Testing
- **Purpose**: Production-like environment for final testing
- **Backend**: AWS Amplify (staging)
- **Database**: DynamoDB (staging tables)  
- **Email**: Amazon SES (production mode, limited)
- **Testing**: Performance, load, and user acceptance testing

#### `main` Branch - Production
- **Purpose**: Live production environment
- **Backend**: AWS Amplify (production)
- **Database**: DynamoDB (production tables)
- **Email**: Amazon SES (full production)
- **Monitoring**: Full observability and alerting

### Development Workflow

1. **Feature Development**: Work in `dev` branch with mock data
2. **Integration Testing**: Merge to `sit` for AWS integration
3. **User Testing**: Promote to `uat` for production-like testing  
4. **Production**: Deploy to `main` after UAT approval

📖 **Detailed Strategy**: See [docs/branching-strategy.md](docs/branching-strategy.md)

## Quick Start

### Local Development Setup
```bash
# Clone the repository
git clone https://github.com/noisegatemusicstudio/gig-grid-app.git
cd gig-grid-app

# Switch to development branch
git checkout dev

# Run setup script
chmod +x scripts/setup-dev.sh
./scripts/setup-dev.sh

# Start development environment
npm run dev
```

This will set up:
- Mock API server on port 3001
- Development environment with test data
- Project structure for rapid UI development

## Benefits of This Approach

- **Clear Requirements**: Features written in business language
- **Comprehensive Coverage**: All user types and scenarios included
- **Test-Driven**: Extensive test data guides development
- **Scalable Architecture**: Support for different artist types
- **Real-World Testing**: Amazon SES integration for email workflows
- **Documentation**: Features serve as living documentation

This BDD approach ensures we build exactly what users need while supporting the complexity of different user types (fans, bands, solo artists) with comprehensive test coverage and realistic data scenarios.
