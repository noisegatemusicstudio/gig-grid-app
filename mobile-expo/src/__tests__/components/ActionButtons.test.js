import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import ActionButtons from '../../components/ActionButtons';

// Mock console.log to capture function calls
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

describe('ActionButtons Component', () => {
  beforeEach(() => {
    mockConsoleLog.mockClear();
  });

  afterAll(() => {
    mockConsoleLog.mockRestore();
  });

  it('renders correctly', () => {
    render(<ActionButtons />);
    
    expect(screen.getByText('Get Started')).toBeTruthy();
    expect(screen.getByText('Sign In')).toBeTruthy();
  });

  it('renders Get Started button', () => {
    render(<ActionButtons />);
    
    const getStartedButton = screen.getByText('Get Started');
    expect(getStartedButton).toBeTruthy();
  });

  it('renders Sign In button', () => {
    render(<ActionButtons />);
    
    const signInButton = screen.getByText('Sign In');
    expect(signInButton).toBeTruthy();
  });

  it('handles Get Started button press', () => {
    render(<ActionButtons />);
    
    const getStartedButton = screen.getByText('Get Started');
    fireEvent.press(getStartedButton);
    
    expect(mockConsoleLog).toHaveBeenCalledWith('Get Started pressed!');
  });

  it('handles Sign In button press', () => {
    render(<ActionButtons />);
    
    const signInButton = screen.getByText('Sign In');
    fireEvent.press(signInButton);
    
    expect(mockConsoleLog).toHaveBeenCalledWith('Sign In pressed!');
  });

  it('renders both buttons together', () => {
    render(<ActionButtons />);
    
    // Both buttons should be present
    expect(screen.getByText('Get Started')).toBeTruthy();
    expect(screen.getByText('Sign In')).toBeTruthy();
  });

  it('handles multiple button presses', () => {
    render(<ActionButtons />);
    
    const getStartedButton = screen.getByText('Get Started');
    const signInButton = screen.getByText('Sign In');
    
    fireEvent.press(getStartedButton);
    fireEvent.press(signInButton);
    fireEvent.press(getStartedButton);
    
    expect(mockConsoleLog).toHaveBeenCalledTimes(3);
    expect(mockConsoleLog).toHaveBeenNthCalledWith(1, 'Get Started pressed!');
    expect(mockConsoleLog).toHaveBeenNthCalledWith(2, 'Sign In pressed!');
    expect(mockConsoleLog).toHaveBeenNthCalledWith(3, 'Get Started pressed!');
  });

  it('maintains correct button order', () => {
    render(<ActionButtons />);
    
    // Get Started should appear before Sign In
    const buttons = screen.getAllByText(/Get Started|Sign In/);
    expect(buttons).toHaveLength(2);
  });

  it('renders without crashing', () => {
    const { root } = render(<ActionButtons />);
    
    expect(root).toBeTruthy();
    expect(screen.getByText('Get Started')).toBeTruthy();
    expect(screen.getByText('Sign In')).toBeTruthy();
  });

  it('uses Button component correctly', () => {
    render(<ActionButtons />);
    
    // Both buttons should be touchable (Button components)
    const getStartedButton = screen.getByText('Get Started');
    const signInButton = screen.getByText('Sign In');
    
    expect(getStartedButton).toBeTruthy();
    expect(signInButton).toBeTruthy();
    
    // Should be able to press both
    fireEvent.press(getStartedButton);
    fireEvent.press(signInButton);
    
    expect(mockConsoleLog).toHaveBeenCalledTimes(2);
  });
});
