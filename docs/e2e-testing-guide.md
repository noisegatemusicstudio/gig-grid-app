# Gig Grid E2E Testing with Universal Playwright Framework

This document shows how to use the universal Playwright framework for Gig Grid's E2E testing.

## Framework Setup ✅

The Universal Playwright Framework is already set up as a git submodule in this project:
- **Repository**: https://github.com/noisegatemusicstudio/universal-playwright-framework
- **Location**: `test-frameworks/playwright-framework/`
- **Status**: Ready to use for Gig Grid testing

## Quick Start

### 1. Install Framework Dependencies

```bash
# Navigate to framework directory
cd test-frameworks/playwright-framework

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### 2. Configure for Gig Grid

```bash
# Create environment configuration
echo 'BASE_URL=http://localhost:3000' > .env
echo 'APP_NAME=Gig Grid' >> .env
```

### 3. Run Example Tests

```bash
# Run all tests
npm run test

# Run with browser visible
npm run test:headed

# Run with Playwright UI
npm run test:ui
```

## Creating Gig Grid Specific Tests

### 1. Create Gig Grid Test Directory

```bash
cd test-frameworks/playwright-framework
mkdir -p tests/gig-grid/pages
mkdir -p tests/gig-grid/fixtures
```

### 2. Create Page Objects for Gig Grid

**`tests/gig-grid/pages/fan-registration-page.ts`**
```typescript
import { BasePage } from '../../src/pages/base-page';
import { Page } from '@playwright/test';

export class FanRegistrationPage extends BasePage {
  constructor(page: Page) {
    super(page, '/fan/register');
  }

  async fillRegistrationForm(userData: any): Promise<void> {
    await this.fillInput('[data-testid="first-name"]', userData.firstName);
    await this.fillInput('[data-testid="last-name"]', userData.lastName);
    await this.fillInput('[data-testid="email"]', userData.email);
    await this.fillInput('[data-testid="password"]', userData.password);
  }

  async submitRegistration(): Promise<void> {
    await this.clickElement('[data-testid="register-btn"]');
  }
}
```

### 3. Create Gig Grid Test Data

**`tests/gig-grid/fixtures/gig-grid-data.ts`**
```typescript
import { TestDataFactory } from '../../fixtures/test-data-factory';

export class GigGridTestData extends TestDataFactory {
  static generateFan() {
    const baseUser = this.generateUser('fan');
    return {
      ...baseUser,
      preferences: ['rock', 'jazz', 'electronic'],
      location: 'Singapore'
    };
  }

  static generateArtist() {
    const baseUser = this.generateUser('artist');
    return {
      ...baseUser,
      artistName: `${baseUser.firstName} ${baseUser.lastName} Band`,
      genre: 'rock',
      bio: 'Passionate musician creating amazing experiences.'
    };
  }
}
```

### 4. Create Test Specifications

**`tests/gig-grid/fan-registration.spec.ts`**
```typescript
import { test, expect } from '@playwright/test';
import { FanRegistrationPage } from './pages/fan-registration-page';
import { GigGridTestData } from './fixtures/gig-grid-data';

test.describe('Fan Registration', () => {
  test('should register new fan successfully', async ({ page }) => {
    const fanData = GigGridTestData.generateFan();
    const registrationPage = new FanRegistrationPage(page);

    await registrationPage.goto();
    await registrationPage.fillRegistrationForm(fanData);
    await registrationPage.submitRegistration();

    // Verify registration success
    await expect(page).toHaveURL('/fan/dashboard');
    await expect(page.locator('[data-testid="welcome"]')).toContainText(fanData.firstName);
  });
});
```

## Running Gig Grid Tests

```bash
# Run only Gig Grid tests
npx playwright test tests/gig-grid/

# Run specific test file
npx playwright test tests/gig-grid/fan-registration.spec.ts

# Run with browser visible
npx playwright test tests/gig-grid/ --headed

# Generate test report
npx playwright test tests/gig-grid/ && npx playwright show-report
```

## Adding to Package.json Scripts

Add these scripts to your main Gig Grid `package.json`:

```json
{
  "scripts": {
    "test:e2e": "cd test-frameworks/playwright-framework && npm run test tests/gig-grid/",
    "test:e2e:headed": "cd test-frameworks/playwright-framework && npm run test:headed tests/gig-grid/",
    "test:e2e:ui": "cd test-frameworks/playwright-framework && npm run test:ui tests/gig-grid/"
  }
}
```

## Framework Updates

To update the framework to the latest version:

```bash
cd test-frameworks/playwright-framework
git pull origin main
cd ../..
git add test-frameworks/playwright-framework
git commit -m "Update Playwright framework"
```

## Benefits

✅ **Universal Framework**: Reusable across multiple projects  
✅ **Gig Grid Specific**: App-specific tests cleanly separated  
✅ **Version Control**: Framework updates via git submodule  
✅ **Professional Testing**: Page Object Model, TypeScript, CI/CD ready  
✅ **Easy Maintenance**: Framework improvements benefit all projects  

## Framework Repository

- **GitHub**: https://github.com/noisegatemusicstudio/universal-playwright-framework
- **Documentation**: Complete guides in the framework's `docs/` directory
- **Examples**: Template tests showing best practices
- **Support**: Issues and feature requests via GitHub

The framework is designed to be plug-and-play for any web application while keeping Gig Grid specific implementations separate and maintainable! 🚀
