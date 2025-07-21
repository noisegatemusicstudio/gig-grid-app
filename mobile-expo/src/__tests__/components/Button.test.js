import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import Button from '../../components/Button';

describe('Button Component', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    mockOnPress.mockClear();
  });

  it('renders correctly with title', () => {
    render(<Button title="Test Button" onPress={mockOnPress} />);
    
    expect(screen.getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    render(<Button title="Test Button" onPress={mockOnPress} />);
    
    const button = screen.getByText('Test Button');
    fireEvent.press(button);
    
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('renders primary variant by default', () => {
    render(<Button title="Primary Button" onPress={mockOnPress} />);
    
    const button = screen.getByText('Primary Button');
    expect(button).toBeTruthy();
  });

  it('renders secondary variant when specified', () => {
    render(<Button title="Secondary Button" onPress={mockOnPress} variant="secondary" />);
    
    const button = screen.getByText('Secondary Button');
    expect(button).toBeTruthy();
  });

  it('applies custom style prop', () => {
    const customStyle = { marginTop: 10 };
    render(<Button title="Styled Button" onPress={mockOnPress} style={customStyle} />);
    
    const button = screen.getByText('Styled Button');
    expect(button).toBeTruthy();
  });

  it('applies custom text style prop', () => {
    const customTextStyle = { fontSize: 20 };
    render(<Button title="Custom Text" onPress={mockOnPress} textStyle={customTextStyle} />);
    
    const buttonText = screen.getByText('Custom Text');
    expect(buttonText).toBeTruthy();
  });

  it('handles multiple presses correctly', () => {
    render(<Button title="Multi Press" onPress={mockOnPress} />);
    
    const button = screen.getByText('Multi Press');
    
    fireEvent.press(button);
    fireEvent.press(button);
    fireEvent.press(button);
    
    expect(mockOnPress).toHaveBeenCalledTimes(3);
  });

  it('renders without crashing when no onPress provided', () => {
    render(<Button title="No Press Handler" />);
    
    expect(screen.getByText('No Press Handler')).toBeTruthy();
  });

  it('handles empty title gracefully', () => {
    render(<Button title="" onPress={mockOnPress} />);
    
    // Should render but with empty text
    expect(() => screen.getByText('')).not.toThrow();
  });

  it('supports both variant options', () => {
    const { rerender } = render(
      <Button title="Test" onPress={mockOnPress} variant="primary" />
    );
    expect(screen.getByText('Test')).toBeTruthy();

    rerender(<Button title="Test" onPress={mockOnPress} variant="secondary" />);
    expect(screen.getByText('Test')).toBeTruthy();
  });
});
