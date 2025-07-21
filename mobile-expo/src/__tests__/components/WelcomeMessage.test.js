import React from 'react';
import { render, screen } from '@testing-library/react-native';
import WelcomeMessage from '../../components/WelcomeMessage';

describe('WelcomeMessage Component', () => {
  it('renders correctly', () => {
    render(<WelcomeMessage />);
    
    expect(screen.getByText('Welcome to GigGrid!')).toBeTruthy();
    expect(screen.getByText(/Connect with opportunities/)).toBeTruthy();
  });

  it('displays the welcome title', () => {
    render(<WelcomeMessage />);
    
    const titleElement = screen.getByText('Welcome to GigGrid!');
    expect(titleElement).toBeTruthy();
  });

  it('displays the complete welcome description', () => {
    render(<WelcomeMessage />);
    
    const expectedDescription = 'Connect with opportunities, showcase your skills, and find the perfect gig that matches your passion and expertise.';
    expect(screen.getByText(expectedDescription)).toBeTruthy();
  });

  it('renders both title and description', () => {
    render(<WelcomeMessage />);
    
    expect(screen.getByText('Welcome to GigGrid!')).toBeTruthy();
    expect(screen.getByText(/Connect with opportunities/)).toBeTruthy();
  });

  it('has correct title text with exclamation mark', () => {
    render(<WelcomeMessage />);
    
    const titleText = screen.getByText('Welcome to GigGrid!');
    expect(titleText.props.children).toBe('Welcome to GigGrid!');
  });

  it('mentions key concepts in description', () => {
    render(<WelcomeMessage />);
    
    const description = screen.getByText(/Connect with opportunities/);
    expect(description.props.children).toContain('opportunities');
    expect(description.props.children).toContain('skills');
    expect(description.props.children).toContain('passion');
    expect(description.props.children).toContain('expertise');
  });

  it('renders without crashing', () => {
    const { root } = render(<WelcomeMessage />);
    
    expect(root).toBeTruthy();
  });

  it('contains GigGrid branding in title', () => {
    render(<WelcomeMessage />);
    
    expect(screen.getByText(/GigGrid/)).toBeTruthy();
  });

  it('has motivational description text', () => {
    render(<WelcomeMessage />);
    
    expect(screen.getByText(/showcase your skills/)).toBeTruthy();
    expect(screen.getByText(/perfect gig/)).toBeTruthy();
    expect(screen.getByText(/passion and expertise/)).toBeTruthy();
  });

  it('renders title and description as separate elements', () => {
    render(<WelcomeMessage />);
    
    const titleElements = screen.getAllByText('Welcome to GigGrid!');
    const descriptionElements = screen.getAllByText(/Connect with opportunities/);
    
    expect(titleElements).toHaveLength(1);
    expect(descriptionElements).toHaveLength(1);
  });

  it('maintains proper text structure', () => {
    render(<WelcomeMessage />);
    
    // Both elements should be present and distinct
    expect(screen.getByText('Welcome to GigGrid!')).toBeTruthy();
    expect(screen.getByText('Connect with opportunities, showcase your skills, and find the perfect gig that matches your passion and expertise.')).toBeTruthy();
  });

  it('uses proper punctuation', () => {
    render(<WelcomeMessage />);
    
    expect(screen.getByText('Welcome to GigGrid!')).toBeTruthy(); // Exclamation mark
    expect(screen.getByText(/expertise\./)).toBeTruthy(); // Period at end
  });
});
