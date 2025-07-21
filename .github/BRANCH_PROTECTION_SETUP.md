# Branch Protection Setup Guide

This guide outlines the required branch protection rules to ensure no merges can happen without pull request reviews.

## Required Branch Protection Rules

### Main Branch Protection
The following settings must be configured for the `main` branch in GitHub repository settings:

#### 1. Access Repository Settings
1. Go to your GitHub repository: `https://github.com/noisegatemusicstudio/gig-grid-app`
2. Click on **Settings** tab
3. Navigate to **Branches** in the left sidebar
4. Click **Add rule** or edit existing rule for `main` branch

#### 2. Branch Name Pattern
- **Branch name pattern**: `main`

#### 3. Protect Matching Branches Settings

**✅ Require a pull request before merging**
- ✅ Require approvals: **1** (minimum)
- ✅ Dismiss stale pull request approvals when new commits are pushed
- ✅ Require review from code owners (if CODEOWNERS file exists)
- ✅ Restrict pushes that create files larger than 100MB

**✅ Require status checks to pass before merging**
- ✅ Require branches to be up to date before merging
- Required status checks (will be available after first workflow run):
  - `build-and-test`
  - `lint`
  - `security-scan`

**✅ Require conversation resolution before merging**
- Ensures all PR comments are resolved

**✅ Restrict pushes**
- ✅ Restrict pushes that create files larger than 100MB

**✅ Allow force pushes**
- ❌ **DISABLED** - Prevents force pushes to main

**✅ Allow deletions**
- ❌ **DISABLED** - Prevents branch deletion

#### 4. Rules Applied To Administrators
- ✅ **Include administrators** - Even admins must follow PR process

### Development Branch Protection
Apply similar rules to `dev` branch with slightly relaxed settings:

#### Dev Branch Settings
- **Branch name pattern**: `dev`
- ✅ Require a pull request before merging
- ✅ Require approvals: **1**
- ✅ Require status checks to pass before merging
- ✅ Require conversation resolution before merging
- ❌ Allow force pushes: **ENABLED** (for development flexibility)
- ❌ Allow deletions: **DISABLED**

### Feature Branch Pattern Protection
Protect all feature branches with a pattern:

#### Feature Branch Settings
- **Branch name pattern**: `feature/*`
- ✅ Require a pull request before merging
- ✅ Require approvals: **1**
- ✅ Require status checks to pass before merging
- ✅ Allow force pushes: **ENABLED**
- ❌ Allow deletions: **DISABLED**

## Manual Setup Steps

### Step 1: Configure Main Branch Protection
1. Go to repository Settings → Branches
2. Add rule for `main` branch
3. Apply all settings listed above
4. Save changes

### Step 2: Configure Dev Branch Protection
1. Add rule for `dev` branch
2. Apply dev-specific settings
3. Save changes

### Step 3: Configure Feature Branch Protection
1. Add rule for `feature/*` pattern
2. Apply feature-specific settings
3. Save changes

### Step 4: Create CODEOWNERS File (Optional but Recommended)
Create `.github/CODEOWNERS` to specify who must review certain files:

```
# Global code owners
* @noisegatemusicstudio

# Backend/API code
/api/ @noisegatemusicstudio
/lambda/ @noisegatemusicstudio

# Configuration files
/config/ @noisegatemusicstudio

# Infrastructure
/.github/ @noisegatemusicstudio
/terraform/ @noisegatemusicstudio

# Documentation
/docs/ @noisegatemusicstudio
```

## Verification

After setup, verify protection is working:

1. Try to push directly to `main` branch (should fail)
2. Create a feature branch and PR
3. Attempt to merge without approval (should fail)
4. Get approval and verify merge works

## Benefits

- **Code Quality**: All changes reviewed before merging
- **Security**: Prevents unauthorized direct pushes
- **Collaboration**: Encourages discussion and knowledge sharing
- **History**: Maintains clean git history with PR context
- **CI/CD**: Ensures tests pass before merging

## Troubleshooting

### Issue: Can't push to main
**Solution**: This is expected! Create a feature branch and PR instead.

### Issue: PR can't be merged
**Possible causes**:
- Missing required approvals
- Failed status checks
- Unresolved conversations
- Branch not up to date

### Issue: Admin needs emergency access
**Solution**: Temporarily disable branch protection if absolutely necessary, then re-enable.

## Emergency Procedures

If urgent fixes are needed:

1. **Preferred**: Create hotfix branch and expedited PR review
2. **Emergency only**: Temporarily disable protection, fix, re-enable
3. **Never**: Force push to main (disabled by these rules)

## Compliance

These settings ensure:
- ✅ No direct pushes to main/dev branches
- ✅ All changes go through PR review process
- ✅ Automated tests must pass
- ✅ Code quality gates enforced
- ✅ Audit trail of all changes
