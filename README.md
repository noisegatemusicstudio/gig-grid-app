# GigGrid Mobile App

A React Native mobile application built with Expo for connecting freelancers with gig opportunities.

## Features

- **Welcome Page**: Beautiful onboarding experience with app overview
- **User-Friendly Interface**: Clean and modern design
- **Cross-Platform**: Works on iOS, Android, and Web
- **Expo Development**: Fast development with Expo Go and web preview

## Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- Expo CLI (installed automatically with npx)
- For mobile testing: Expo Go app on your phone

### Installation & Running

1. Install dependencies:
```bash
npm run install-deps
```

2. Start the Expo development server (auto-handles port conflicts):
```bash
npm start
```

3. Run on different platforms:
```bash
npm run web     # Open in web browser
npm run ios     # Open iOS simulator
npm run android # Open Android emulator
```

### 🚀 Auto Port Management

Our setup automatically handles port conflicts! The start script will:
- ✅ Kill any existing Expo/Metro processes
- ✅ Free up common Expo ports (8081-8085, 19000-19002)
- ✅ Start fresh with cleared cache
- ✅ No more manual port selection prompts!

Additional commands:
```bash
npm run clean      # Clean cache and kill processes
npm run start:fresh # Force fresh start (same as npm start)
```

### Testing on Device

1. Install Expo Go app from App Store (iOS) or Google Play (Android)
2. Scan the QR code shown in the terminal
3. The app will load on your device instantly!

## Project Structure

```
mobile-expo/
├── App.js              # Main app component with welcome page
├── app.json           # Expo configuration
├── package.json       # Dependencies and scripts
└── assets/           # Images and icons
```

## Current Features

- ✅ Welcome Page with modern UI built with Expo
- ✅ React Native with JavaScript
- ✅ Cross-platform (iOS, Android, Web)
- ✅ Live reload during development
- ✅ Instant device testing with Expo Go
- ✅ Beautiful gradient design and animations
- ✅ Responsive layout

### App Screenshots

The welcome page includes:
- **App Branding**: GigGrid logo with tagline
- **Feature Highlights**: Discover gigs, showcase skills, connect with others
- **Call-to-Action Buttons**: Get Started and Sign In
- **Professional Design**: Modern UI with purple theme (#6366f1)

## Development

The Expo server is currently running on port 8083. You can:

- **Web**: Visit http://localhost:8083 to see the app in browser
- **Mobile**: Scan QR code with Expo Go app
- **Hot Reload**: Changes appear instantly during development

### Next Steps

- [ ] Navigation setup (React Navigation)
- [ ] User registration and authentication
- [ ] Profile management screens
- [ ] Gig browsing and search functionality
- [ ] Application system
- [ ] Messaging functionality
- [ ] Push notifications

## Testing

The project includes comprehensive testing frameworks:
- **Appium2**: For mobile automation testing
- **Playwright**: For web-based testing

## Contributing

Please refer to the branching strategy and development guides in the `docs/` folder.

## Deployment

With Expo, you can easily:
- Build standalone apps for iOS and Android
- Deploy to app stores
- Share development builds with teammates