import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Footer from '../../components/Footer';

describe('Footer Component', () => {
  it('renders correctly', () => {
    render(<Footer />);
    
    expect(screen.getByText(/Ready to transform your career/)).toBeTruthy();
  });

  it('displays the complete footer text', () => {
    render(<Footer />);
    
    const expectedText = 'Ready to transform your career? Join thousands of professionals already using GigGrid.';
    expect(screen.getByText(expectedText)).toBeTruthy();
  });

  it('renders footer text with correct content', () => {
    render(<Footer />);
    
    const footerText = screen.getByText(/Ready to transform your career/);
    expect(footerText.props.children).toBe('Ready to transform your career? Join thousands of professionals already using GigGrid.');
  });

  it('renders without crashing', () => {
    const { root } = render(<Footer />);
    
    expect(root).toBeTruthy();
  });

  it('contains motivational text about GigGrid', () => {
    render(<Footer />);
    
    // Test that it mentions key concepts
    expect(screen.getByText(/Ready to transform your career/)).toBeTruthy();
    expect(screen.getByText(/Join thousands of professionals/)).toBeTruthy();
    expect(screen.getByText(/GigGrid/)).toBeTruthy();
  });

  it('renders as a single text element', () => {
    render(<Footer />);
    
    const textElements = screen.getAllByText(/Ready to transform your career/);
    expect(textElements).toHaveLength(1);
  });

  it('includes question mark in the text', () => {
    render(<Footer />);
    
    expect(screen.getByText(/Ready to transform your career\?/)).toBeTruthy();
  });

  it('mentions thousands of professionals', () => {
    render(<Footer />);
    
    expect(screen.getByText(/thousands of professionals/)).toBeTruthy();
  });

  it('has consistent text formatting', () => {
    render(<Footer />);
    
    const fullText = 'Ready to transform your career? Join thousands of professionals already using GigGrid.';
    const textElement = screen.getByText(fullText);
    expect(textElement).toBeTruthy();
  });

  it('renders footer as a complete component', () => {
    render(<Footer />);
    
    // Should render successfully with the expected content
    expect(screen.getByText(/Ready to transform your career\? Join thousands of professionals already using GigGrid\./)).toBeTruthy();
  });
});
