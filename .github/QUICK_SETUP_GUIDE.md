# Quick Manual Setup Guide

## Step-by-Step GitHub Web Interface Setup

### 1. Access Repository Settings
1. Go to: https://github.com/noisegatemusicstudio/gig-grid-app
2. Click **Settings** tab (you need admin access)
3. Click **Branches** in the left sidebar

### 2. Add Branch Protection Rule for `main`

Click **Add rule** and configure:

**Branch name pattern:** `main`

**Protect matching branches:**
- ✅ **Require a pull request before merging**
  - Required number of reviewers before merging: **1**
  - ✅ Dismiss stale pull request approvals when new commits are pushed
  - ✅ Require review from code owners

- ✅ **Require status checks to pass before merging**
  - ✅ Require branches to be up to date before merging
  - Required status checks: `build-and-test`, `lint`, `security-scan`

- ✅ **Require conversation resolution before merging**

- ✅ **Restrict pushes**
  - Nobody can push to this branch directly

- ❌ **Allow force pushes** (leave unchecked)
- ❌ **Allow deletions** (leave unchecked)

**Rules applied to administrators:**
- ✅ **Include administrators**

### 3. Add Branch Protection Rule for `dev` (when created)

Same as main but with these differences:
- ✅ **Allow force pushes** (for development flexibility)

### 4. Verify Setup

After setup, you should see:
- Direct pushes to `main` are blocked
- PRs require 1 approval
- Status checks must pass
- Conversations must be resolved

## What This Achieves

✅ **No direct pushes** to main branch  
✅ **All changes** go through PR review  
✅ **Automated tests** must pass  
✅ **Code owner approval** required  
✅ **Applies to everyone** including admins  

## Test the Setup

1. Try pushing directly to main: `git push origin main` (should fail)
2. Create feature branch: `git checkout -b feature/test-protection`
3. Make a change and push: `git push origin feature/test-protection`
4. Create PR on GitHub
5. Try to merge without approval (should be blocked)
6. Get approval and merge (should work)

## Emergency Access

If you need emergency access:
1. Go to Settings → Branches
2. Temporarily disable the rule
3. Make emergency fix
4. Re-enable protection immediately
