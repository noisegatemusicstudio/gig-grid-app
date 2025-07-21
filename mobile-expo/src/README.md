# Mobile App Component Structure

This document outlines the modularized component structure for the GigGrid mobile application.

## Directory Structure

```
src/
├── components/           # Reusable UI components
│   ├── ActionButtons.js  # Get Started and Sign In buttons
│   ├── Button.js         # Reusable button component
│   ├── FeatureCard.js    # Individual feature display card
│   ├── FeaturesSection.js # Container for all feature cards
│   ├── Footer.js         # App footer with call-to-action text
│   ├── Header.js         # App logo and tagline
│   ├── WelcomeMessage.js # Welcome title and description
│   └── index.js          # Component exports
├── screens/              # Screen components
│   ├── WelcomeScreen.js  # Main welcome/landing screen
│   └── index.js          # Screen exports
└── styles/               # Shared styling and theming
    └── theme.js          # Global theme, colors, typography
```

## Component Architecture

### Theme System (`src/styles/theme.js`)
- **Colors**: Primary palette, text colors, backgrounds
- **Typography**: Font sizes, weights, line heights
- **Spacing**: Consistent spacing scale
- **Shadows**: Standardized shadow styles
- **Common Styles**: Reusable style objects

### Reusable Components

#### `Button` Component
- **Props**: `title`, `onPress`, `variant`, `style`, `textStyle`
- **Variants**: `primary` (filled), `secondary` (outlined)
- **Usage**: Consistent button styling across the app

#### `FeatureCard` Component  
- **Props**: `icon`, `title`, `description`
- **Purpose**: Display individual app features with icon and text
- **Styling**: Card layout with shadow and consistent spacing

### Screen Components

#### `WelcomeScreen` Component
- **Purpose**: Main landing/welcome screen
- **Composition**: Uses multiple smaller components
- **Structure**: Header → Welcome Message → Features → Action Buttons → Footer

## Benefits of Modularization

### 1. **Maintainability**
- Each component has a single responsibility
- Easy to locate and update specific functionality
- Reduced code duplication

### 2. **Reusability**
- Components can be used across multiple screens
- Consistent design patterns
- Faster development of new features

### 3. **Testability**
- Individual components can be tested in isolation
- Mock props for comprehensive testing
- Clear separation of concerns

### 4. **Scalability**
- Easy to add new components and screens
- Consistent theming system
- Follows React Native best practices

### 5. **Team Collaboration**
- Clear file organization
- Standardized component structure
- Easy to understand for new developers

## Design System

### Color Palette
- **Primary**: `#6366f1` (Purple/Indigo)
- **Text Primary**: `#1e293b` (Dark slate)
- **Text Secondary**: `#64748b` (Slate)
- **Background**: `#f8fafc` (Light gray)

### Typography Scale
- **Logo**: 36px (5xl)
- **Title**: 28px (3xl)
- **Body**: 16px (base)
- **Caption**: 14px (sm)

### Spacing Scale
- Based on 4px increments
- Consistent margins and padding
- Responsive layout principles

## Future Enhancements

### Planned Components
- [ ] Navigation components
- [ ] Form input components
- [ ] Loading states
- [ ] Error boundaries
- [ ] Modal components

### Planned Screens
- [ ] Registration/Signup screen
- [ ] Login screen
- [ ] Profile setup screens
- [ ] Gig browsing screens

## Usage Examples

### Importing Components
```javascript
import { Button, Header, FeatureCard } from './src/components';
import { WelcomeScreen } from './src/screens';
```

### Using the Button Component
```javascript
<Button
  title="Get Started"
  variant="primary"
  onPress={handleGetStarted}
/>
```

### Using the Theme System
```javascript
import { colors, typography, spacing } from './src/styles/theme';

const styles = StyleSheet.create({
  title: {
    fontSize: typography.sizes['3xl'],
    color: colors.text.primary,
    marginBottom: spacing.lg,
  }
});
```
