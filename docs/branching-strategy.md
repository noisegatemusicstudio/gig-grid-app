# Gig Grid - Git Branching Strategy

## Overview
This document outlines the branching strategy for the Gig Grid musician platform, designed to support a multi-environment development workflow with proper separation of concerns between UI/UX development and backend integration.

## Branch Structure

```
main (production)
├── uat (user acceptance testing)
├── sit (system integration testing)
└── dev (development)
    ├── feature/user-registration-ui
    ├── feature/artist-profile-setup
    ├── feature/booking-system
    └── hotfix/critical-bug-fix
```

## Branch Definitions

### 1. `main` Branch
- **Purpose**: Production-ready code
- **Environment**: Production
- **Deployment**: Automated deployment to production AWS environment
- **Protection**: 
  - Requires pull request reviews
  - No direct pushes allowed
  - All CI/CD checks must pass
  - Requires UAT approval

### 2. `uat` Branch (User Acceptance Testing)
- **Purpose**: Production-like environment for final testing
- **Environment**: UAT (User Acceptance Testing)
- **Deployment**: Automated deployment to UAT AWS environment
- **Features**:
  - Production-like AWS infrastructure
  - Real AWS services (RDS, S3, SES, etc.)
  - Performance and load testing
  - Final user acceptance testing
- **Merge Strategy**: Only from `sit` branch after SIT validation

### 3. `sit` Branch (System Integration Testing)
- **Purpose**: Backend integration and system testing
- **Environment**: SIT (System Integration Testing)
- **Deployment**: Automated deployment to SIT AWS environment
- **Features**:
  - AWS Amplify backend integration
  - Real AWS services integration (DynamoDB, Lambda, API Gateway)
  - Amazon SES email testing
  - Authentication with AWS Cognito
  - File uploads to S3
  - Real database operations
- **Merge Strategy**: From `dev` branch after local testing completion

### 4. `dev` Branch (Development)
- **Purpose**: Local development and UI/UX testing
- **Environment**: Local development only
- **Features**:
  - Mock data and API responses
  - Local JSON server for API simulation
  - No external service dependencies
  - Fast iteration for UI/UX development
  - BDD scenario testing with mock data
- **Merge Strategy**: Feature branches merge here first

## Environment Configuration

### Local Development (`dev` branch)
```yaml
Environment: Local
Backend: Mock/JSON Server
Database: Local JSON files or SQLite
Email: Mock email service
Authentication: Mock auth
File Storage: Local file system
API: Mock API responses
Testing: Unit tests, UI tests, BDD scenarios with mock data
```

### SIT Environment (`sit` branch)
```yaml
Environment: AWS (Development tier)
Backend: AWS Amplify
Database: DynamoDB (dev tables)
Email: Amazon SES (sandbox mode)
Authentication: AWS Cognito (dev user pool)
File Storage: S3 (dev bucket)
API: AWS API Gateway + Lambda
Testing: Integration tests, API tests, End-to-end tests
```

### UAT Environment (`uat` branch)
```yaml
Environment: AWS (Pre-production)
Backend: AWS Amplify
Database: DynamoDB (staging tables)
Email: Amazon SES (production mode, limited)
Authentication: AWS Cognito (staging user pool)
File Storage: S3 (staging bucket)
API: AWS API Gateway + Lambda
Testing: User acceptance tests, Performance tests, Load tests
```

### Production Environment (`main` branch)
```yaml
Environment: AWS (Production)
Backend: AWS Amplify
Database: DynamoDB (production tables)
Email: Amazon SES (production mode)
Authentication: AWS Cognito (production user pool)
File Storage: S3 (production bucket)
API: AWS API Gateway + Lambda
Testing: Production monitoring, Health checks
```

## Workflow Process

### 1. Feature Development Workflow
```bash
# 1. Start from dev branch
git checkout dev
git pull origin dev

# 2. Create feature branch
git checkout -b feature/user-registration-ui

# 3. Develop with local mock data
# - Implement UI components
# - Test with mock APIs
# - Run BDD scenarios with test data
# - Ensure responsive design

# 4. Commit and push feature
git add .
git commit -m "feat: implement user registration UI with responsive design"
git push origin feature/user-registration-ui

# 5. Create PR to dev branch
# - Review UI/UX implementation
# - Validate responsive design
# - Test BDD scenarios
```

### 2. Integration Testing Workflow
```bash
# 1. Merge approved features to dev
git checkout dev
git merge feature/user-registration-ui

# 2. When ready for backend integration
git checkout sit
git pull origin sit
git merge dev

# 3. Deploy to SIT environment
# - AWS Amplify deployment
# - Real backend integration
# - Database operations
# - Email functionality testing
```

### 3. User Acceptance Testing Workflow
```bash
# 1. After SIT validation
git checkout uat
git pull origin uat
git merge sit

# 2. Deploy to UAT environment
# - Production-like testing
# - Performance validation
# - User acceptance testing
# - Load testing
```

### 4. Production Deployment Workflow
```bash
# 1. After UAT approval
git checkout main
git pull origin main
git merge uat

# 2. Deploy to production
# - Automated production deployment
# - Monitoring and health checks
# - Rollback capability if needed
```

## Branch Protection Rules

### `main` Branch Protection
- Require pull request reviews (2 reviewers)
- Require status checks to pass
- Require branches to be up to date
- Restrict pushes to administrators only
- Require conversation resolution before merging

### `uat` Branch Protection
- Require pull request reviews (1 reviewer)
- Require status checks to pass
- Require branches to be up to date
- Allow only from `sit` branch

### `sit` Branch Protection
- Require pull request reviews (1 reviewer)
- Require CI/CD checks to pass
- Allow only from `dev` branch

### `dev` Branch Protection
- Allow direct pushes for rapid development
- Require CI/CD checks for basic validation
- Feature branches merge here

## Environment-Specific Configurations

### Development Environment Setup
```json
{
  "environment": "development",
  "api": {
    "baseUrl": "http://localhost:3001",
    "timeout": 5000
  },
  "database": {
    "type": "json-server",
    "file": "./mock-data/db.json"
  },
  "email": {
    "provider": "mock",
    "logEmails": true
  },
  "authentication": {
    "provider": "mock",
    "mockUsers": true
  }
}
```

### SIT Environment Setup
```json
{
  "environment": "sit",
  "api": {
    "baseUrl": "https://api-sit.gigrid.com",
    "timeout": 10000
  },
  "database": {
    "type": "dynamodb",
    "region": "us-east-1",
    "tablePrefix": "GigGrid-SIT-"
  },
  "email": {
    "provider": "aws-ses",
    "region": "us-east-1",
    "sandboxMode": true
  },
  "authentication": {
    "provider": "aws-cognito",
    "userPoolId": "us-east-1_SITPOOL",
    "clientId": "sit-client-id"
  }
}
```

## CI/CD Pipeline Configuration

### Development Pipeline (`dev` branch)
- **Triggers**: Push to `dev` or feature branches
- **Steps**:
  1. Install dependencies
  2. Run unit tests
  3. Run BDD scenarios with mock data
  4. Build application
  5. Deploy to local development server

### SIT Pipeline (`sit` branch)
- **Triggers**: Push to `sit` branch
- **Steps**:
  1. Install dependencies
  2. Run unit tests
  3. Run integration tests
  4. Build application
  5. Deploy to AWS Amplify (SIT)
  6. Run E2E tests against SIT environment
  7. Send notification to team

### UAT Pipeline (`uat` branch)
- **Triggers**: Push to `uat` branch
- **Steps**:
  1. Install dependencies
  2. Run full test suite
  3. Build production-ready application
  4. Deploy to AWS Amplify (UAT)
  5. Run performance tests
  6. Run user acceptance tests
  7. Generate test reports

### Production Pipeline (`main` branch)
- **Triggers**: Push to `main` branch
- **Steps**:
  1. Install dependencies
  2. Run full test suite
  3. Build production application
  4. Deploy to AWS Amplify (Production)
  5. Run health checks
  6. Monitor deployment
  7. Send deployment notifications

## Mock Data Strategy for Development

### Local Development Mock Data
- Use CSV test data from `test-data/` directory
- JSON server for API simulation
- Mock authentication responses
- Local file storage simulation
- Mock email sending (log to console)

### Example Mock API Setup
```bash
# Install json-server for local API mocking
npm install -g json-server

# Start mock API server
json-server --watch mock-data/db.json --port 3001
```

## Hotfix Strategy

### Critical Production Issues
```bash
# 1. Create hotfix branch from main
git checkout main
git checkout -b hotfix/critical-security-fix

# 2. Implement fix
# 3. Test thoroughly
# 4. Create PR to main
# 5. After merge, cherry-pick to all other branches
git checkout uat
git cherry-pick <hotfix-commit>
git checkout sit
git cherry-pick <hotfix-commit>
git checkout dev
git cherry-pick <hotfix-commit>
```

## Benefits of This Strategy

1. **Separation of Concerns**: UI/UX development isolated from backend complexity
2. **Fast Iteration**: Local development with mock data enables rapid prototyping
3. **Progressive Integration**: Gradual introduction of real backend services
4. **Risk Mitigation**: Multiple testing environments catch issues early
5. **Production Safety**: Multiple validation gates before production
6. **Team Productivity**: Developers can work on UI without waiting for backend

This branching strategy ensures that you can develop and test the UI/UX efficiently in the `dev` environment while having proper integration and production deployment pipelines through `sit`, `uat`, and `main` branches.
