// Jest setup file for React Native Testing Library
import '@testing-library/jest-native/extend-expect';

// Mock Expo modules
jest.mock('expo-status-bar', () => ({
  StatusBar: 'StatusBar',
}));

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

// Mock asset requires
jest.mock('../src/uizard-imports/welcome-screen/assets/welcome_img.png', () => 'welcome_img.png');
jest.mock('../src/uizard-imports/welcome-screen/assets/Icon skip next.png', () => 'Icon skip next.png');
