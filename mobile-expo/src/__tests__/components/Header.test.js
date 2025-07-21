import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Header from '../../components/Header';

describe('Header Component', () => {
  it('renders correctly', () => {
    render(<Header />);
    
    expect(screen.getByText('🎯 GigGrid')).toBeTruthy();
    expect(screen.getByText('Find Your Perfect Gig')).toBeTruthy();
  });

  it('displays the correct logo text', () => {
    render(<Header />);
    
    const logoElement = screen.getByText('🎯 GigGrid');
    expect(logoElement).toBeTruthy();
  });

  it('displays the correct tagline text', () => {
    render(<Header />);
    
    const taglineElement = screen.getByText('Find Your Perfect Gig');
    expect(taglineElement).toBeTruthy();
  });

  it('renders both logo and tagline together', () => {
    render(<Header />);
    
    // Both elements should be present
    expect(screen.getByText('🎯 GigGrid')).toBeTruthy();
    expect(screen.getByText('Find Your Perfect Gig')).toBeTruthy();
  });

  it('renders without props', () => {
    // Header doesn't take props, so this tests basic rendering
    render(<Header />);
    
    expect(screen.getByText('🎯 GigGrid')).toBeTruthy();
  });

  it('has consistent text content', () => {
    render(<Header />);
    
    // Test exact text matches
    expect(screen.getByText('🎯 GigGrid')).toBeTruthy();
    expect(screen.getByText('Find Your Perfect Gig')).toBeTruthy();
  });

  it('renders emoji in logo correctly', () => {
    render(<Header />);
    
    const logoText = screen.getByText('🎯 GigGrid');
    expect(logoText).toBeTruthy();
    expect(logoText.props.children).toBe('🎯 GigGrid');
  });

  it('renders as a complete header structure', () => {
    const { root } = render(<Header />);
    
    // Should not throw and should render successfully
    expect(root).toBeTruthy();
    expect(screen.getByText('🎯 GigGrid')).toBeTruthy();
    expect(screen.getByText('Find Your Perfect Gig')).toBeTruthy();
  });
});
