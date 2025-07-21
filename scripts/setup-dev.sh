#!/bin/bash

# Gig Grid Development Environment Setup Script
# This script sets up the local development environment with mock data

set -e

echo "🎸 Setting up Gig Grid development environment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18.x or later."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18.x or later is required. Current version: $(node -v)"
    exit 1
fi

print_success "Node.js $(node -v) is installed"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed."
    exit 1
fi

print_success "npm $(npm -v) is installed"

# Install dependencies
print_status "Installing dependencies..."
npm install

# Install global dependencies for development
print_status "Installing global development tools..."
npm install -g json-server concurrently

# Create mock data directory
print_status "Setting up mock data..."
mkdir -p mock-data
mkdir -p logs
mkdir -p uploads

# Create mock database
cat > mock-data/db.json << 'EOF'
{
  "users": [],
  "artists": [],
  "events": [],
  "bookings": [],
  "messages": []
}
EOF

# Create environment file for development
cat > .env.development << 'EOF'
NODE_ENV=development
REACT_APP_API_URL=http://localhost:3001
REACT_APP_ENVIRONMENT=development
REACT_APP_MOCK_DATA=true
REACT_APP_DEBUG=true
EOF

# Create package.json scripts if they don't exist
print_status "Setting up development scripts..."

# Create a basic package.json if it doesn't exist
if [ ! -f "package.json" ]; then
    cat > package.json << 'EOF'
{
  "name": "gig-grid-app",
  "version": "1.0.0",
  "description": "Musician platform connecting artists with fans and venues",
  "main": "index.js",
  "scripts": {
    "dev": "concurrently \"npm run mock-api\" \"npm run start:dev\"",
    "mock-api": "json-server --watch mock-data/db.json --port 3001 --delay 500",
    "start:dev": "echo 'Starting development server...'",
    "build:dev": "echo 'Building for development...'",
    "build:sit": "echo 'Building for SIT...'",
    "build:uat": "echo 'Building for UAT...'",
    "build:prod": "echo 'Building for production...'",
    "test:unit": "echo 'Running unit tests...'",
    "test:integration": "echo 'Running integration tests...'",
    "test:bdd:mock": "echo 'Running BDD scenarios with mock data...'",
    "test:e2e:sit": "echo 'Running E2E tests against SIT...'",
    "test:performance": "echo 'Running performance tests...'",
    "test:uat": "echo 'Running UAT tests...'",
    "test:all": "npm run test:unit && npm run test:integration",
    "lint": "echo 'Running linter...'",
    "type-check": "echo 'Running type check...'",
    "health-check": "echo 'Running health check...'",
    "monitor:deployment": "echo 'Monitoring deployment...'",
    "reports:generate": "echo 'Generating test reports...'"
  },
  "keywords": ["music", "platform", "musicians", "booking", "events"],
  "author": "Noise Gate Music Studio",
  "license": "MIT",
  "devDependencies": {
    "concurrently": "^8.2.0",
    "json-server": "^0.17.3"
  }
}
EOF
fi

# Create basic directory structure
print_status "Creating project structure..."
mkdir -p src/{components,pages,services,utils,types,hooks,contexts}
mkdir -p src/components/{ui,forms,navigation,media}
mkdir -p src/pages/{auth,dashboard,profile,events,booking}
mkdir -p src/services/{api,auth,storage,email}
mkdir -p public/assets/{images,icons}

# Create a basic README for development
cat > src/README.md << 'EOF'
# Gig Grid - Source Code

## Development Setup

This is the main source directory for the Gig Grid application.

### Directory Structure

- `components/` - Reusable UI components
  - `ui/` - Basic UI elements (buttons, inputs, etc.)
  - `forms/` - Form components (registration, login, etc.)
  - `navigation/` - Navigation components
  - `media/` - Media-related components
- `pages/` - Application pages/screens
  - `auth/` - Authentication pages
  - `dashboard/` - User dashboards
  - `profile/` - Profile management
  - `events/` - Event-related pages
  - `booking/` - Booking system pages
- `services/` - Business logic and API interactions
  - `api/` - API service layer
  - `auth/` - Authentication services
  - `storage/` - File storage services
  - `email/` - Email services
- `utils/` - Utility functions
- `types/` - TypeScript type definitions
- `hooks/` - Custom React hooks
- `contexts/` - React context providers

## Development Guidelines

1. Use the BDD feature files as your development guide
2. Start with mock data for rapid UI/UX development
3. Implement components progressively
4. Test early and often with the provided test data
5. Follow the branching strategy for proper workflow
EOF

# Create a basic index file
cat > src/index.js << 'EOF'
// Gig Grid Application Entry Point
console.log('🎸 Gig Grid Application Starting...');

// This is a placeholder for the main application entry point
// Replace this with your actual application framework setup
// (React, Vue, Angular, vanilla JS, etc.)

const initializeApp = () => {
    console.log('Environment:', process.env.NODE_ENV || 'development');
    console.log('API URL:', process.env.REACT_APP_API_URL || 'http://localhost:3001');
    console.log('Mock Data:', process.env.REACT_APP_MOCK_DATA === 'true' ? 'Enabled' : 'Disabled');
    
    // Add your application initialization code here
};

// Initialize the application
initializeApp();
EOF

print_success "Development environment setup complete!"

echo ""
echo "🎸 Gig Grid Development Environment Ready!"
echo ""
echo "📁 Project structure created"
echo "🔧 Mock API server configured (port 3001)"
echo "📋 Test data available in test-data/ directory"
echo "⚙️  Environment configurations in config/ directory"
echo ""
echo "🚀 Next Steps:"
echo "   1. Choose your frontend framework (React, Vue, Angular, etc.)"
echo "   2. Install framework-specific dependencies"
echo "   3. Start developing UI components using the BDD scenarios"
echo "   4. Run 'npm run dev' to start development with mock API"
echo ""
echo "📚 Documentation:"
echo "   - Branching strategy: docs/branching-strategy.md"
echo "   - Test data: test-data/README.md"
echo "   - BDD features: features/"
echo ""
print_success "Happy coding! 🎵"
