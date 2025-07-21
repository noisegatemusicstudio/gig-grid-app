#!/bin/bash

# Branch Protection Setup Script
# This script helps configure GitHub branch protection rules via GitHub CLI

set -e

REPO="noisegatemusicstudio/gig-grid-app"
BOLD='\033[1m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BOLD}🛡️  GitHub Branch Protection Setup${NC}"
echo "Repository: $REPO"
echo ""

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo -e "${RED}❌ GitHub CLI (gh) is not installed${NC}"
    echo "Please install it from: https://cli.github.com/"
    exit 1
fi

# Check if user is authenticated
if ! gh auth status &> /dev/null; then
    echo -e "${YELLOW}⚠️  Not authenticated with GitHub CLI${NC}"
    echo "Please run: gh auth login"
    exit 1
fi

echo -e "${GREEN}✅ GitHub CLI is ready${NC}"
echo ""

# Function to create branch protection rule
create_protection_rule() {
    local branch_pattern="$1"
    local rule_name="$2"
    local additional_flags="$3"
    
    echo -e "${BOLD}Setting up protection for: $branch_pattern${NC}"
    
    # Base protection settings
    local base_flags="--require-pull-requests --required-approving-review-count 1 --dismiss-stale-reviews --require-conversation-resolution --block-creations"
    
    # Combine base flags with additional flags
    local all_flags="$base_flags $additional_flags"
    
    # Create the protection rule
    if gh api repos/$REPO/branches/$branch_pattern/protection \
        --method PUT \
        --field required_status_checks='{"strict":true,"contexts":["build-and-test","lint","security-scan"]}' \
        --field enforce_admins=true \
        --field required_pull_request_reviews='{"required_approving_review_count":1,"dismiss_stale_reviews":true,"require_code_owner_reviews":true}' \
        --field restrictions=null \
        --field allow_force_pushes=false \
        --field allow_deletions=false \
        --field block_creations=true \
        --field required_conversation_resolution=true; then
        echo -e "${GREEN}✅ Protection rule created for $branch_pattern${NC}"
    else
        echo -e "${RED}❌ Failed to create protection rule for $branch_pattern${NC}"
        return 1
    fi
}

# Main branch protection (strictest)
echo -e "${BOLD}1. Setting up MAIN branch protection${NC}"
create_protection_rule "main" "Main Branch Protection" "--restrict-pushes"

echo ""

# Dev branch protection (slightly relaxed)
echo -e "${BOLD}2. Setting up DEV branch protection${NC}"
# Note: For dev branch, we might allow force pushes for development flexibility
if gh api repos/$REPO/branches/dev/protection \
    --method PUT \
    --field required_status_checks='{"strict":true,"contexts":["build-and-test","lint","security-scan"]}' \
    --field enforce_admins=true \
    --field required_pull_request_reviews='{"required_approving_review_count":1,"dismiss_stale_reviews":true,"require_code_owner_reviews":true}' \
    --field restrictions=null \
    --field allow_force_pushes=true \
    --field allow_deletions=false \
    --field block_creations=false \
    --field required_conversation_resolution=true; then
    echo -e "${GREEN}✅ Protection rule created for dev branch${NC}"
else
    echo -e "${YELLOW}⚠️  Dev branch may not exist yet - will be protected when created${NC}"
fi

echo ""

# Additional configuration
echo -e "${BOLD}3. Additional Repository Settings${NC}"

# Set default branch to main
echo "Setting default branch to main..."
if gh api repos/$REPO --method PATCH --field default_branch=main; then
    echo -e "${GREEN}✅ Default branch set to main${NC}"
else
    echo -e "${YELLOW}⚠️  Could not set default branch${NC}"
fi

# Enable security features
echo "Enabling security features..."

# Enable vulnerability alerts
gh api repos/$REPO/vulnerability-alerts --method PUT || echo -e "${YELLOW}⚠️  Vulnerability alerts may already be enabled${NC}"

# Enable automated security fixes (Dependabot)
gh api repos/$REPO/automated-security-fixes --method PUT || echo -e "${YELLOW}⚠️  Automated security fixes may already be enabled${NC}"

echo ""
echo -e "${BOLD}4. Verification${NC}"

# List current protection rules
echo "Current branch protection rules:"
gh api repos/$REPO/branches --jq '.[] | select(.protected == true) | {name: .name, protected: .protected}' || echo "No protected branches found"

echo ""
echo -e "${GREEN}🎉 Branch protection setup complete!${NC}"
echo ""
echo -e "${BOLD}Next Steps:${NC}"
echo "1. Verify rules in GitHub repository settings"
echo "2. Test by trying to push directly to main (should fail)"
echo "3. Create a feature branch and test PR workflow"
echo "4. Review the CODEOWNERS file and adjust as needed"
echo ""
echo -e "${BOLD}Manual Steps Required:${NC}"
echo "• Go to GitHub repository settings → Branches"
echo "• Verify all protection rules are correctly configured"
echo "• Add any team members to CODEOWNERS file"
echo "• Test the PR workflow with a small change"

echo ""
echo -e "${YELLOW}⚠️  Remember: These rules apply to everyone, including admins!${NC}"
