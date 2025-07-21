# Uizard Imports

This folder contains all assets and components imported from Uizard designs, organized by screen.

## Structure

Each screen has its own folder containing:
- **ScreenName.jsx** - Main screen component from Uizard
- **screenshots/** - Overall screen design images for reference
- **assets/** - Icons, images specific to this screen
- **components/** - Reusable components specific to this screen

Example:
```
welcome-screen/
├── WelcomeScreen.jsx          # Main Uizard export
├── screenshots/
│   ├── welcome-design.png     # Overall screen design
│   └── welcome-mobile.jpg     # Mobile view reference
├── assets/
│   ├── welcome-bg.jpg         # Screen-specific images
│   └── welcome-icon.svg       # Screen-specific icons
└── components/
    ├── WelcomeButton.jsx      # Screen-specific components
    └── WelcomeCard.jsx
```

## Workflow

1. Export your Uizard screen design as JSX
2. Create a folder for the screen (e.g., `welcome-screen/`)
3. Place the main JSX file in the screen folder
4. **Place overall screen screenshots in the `screenshots/` subfolder**
5. Place screen-specific assets in the `assets/` subfolder
6. Place screen-specific components in the `components/` subfolder
7. Tell me the scenario for the screen
8. I'll reference the screenshots and adapt the Uizard JSX to work with your app framework

## Current Screens

- **welcome-screen/** - Ready for Uizard imports
