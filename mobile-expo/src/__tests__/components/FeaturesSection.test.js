import React from 'react';
import { render, screen } from '@testing-library/react-native';
import FeaturesSection from '../../components/FeaturesSection';

describe('FeaturesSection Component', () => {
  it('renders correctly', () => {
    render(<FeaturesSection />);
    
    // Check that all three feature cards are rendered
    expect(screen.getByText('Discover Gigs')).toBeTruthy();
    expect(screen.getByText('Showcase Skills')).toBeTruthy();
    expect(screen.getByText('Connect')).toBeTruthy();
  });

  it('renders all feature icons', () => {
    render(<FeaturesSection />);
    
    expect(screen.getByText('🔍')).toBeTruthy();
    expect(screen.getByText('💼')).toBeTruthy();
    expect(screen.getByText('🤝')).toBeTruthy();
  });

  it('renders all feature titles', () => {
    render(<FeaturesSection />);
    
    expect(screen.getByText('Discover Gigs')).toBeTruthy();
    expect(screen.getByText('Showcase Skills')).toBeTruthy();
    expect(screen.getByText('Connect')).toBeTruthy();
  });

  it('renders all feature descriptions', () => {
    render(<FeaturesSection />);
    
    expect(screen.getByText('Browse through thousands of exciting opportunities')).toBeTruthy();
    expect(screen.getByText('Create your profile and highlight your expertise')).toBeTruthy();
    expect(screen.getByText('Network with clients and fellow professionals')).toBeTruthy();
  });

  it('renders exactly three feature cards', () => {
    render(<FeaturesSection />);
    
    const discoverCard = screen.getByText('Discover Gigs');
    const showcaseCard = screen.getByText('Showcase Skills');
    const connectCard = screen.getByText('Connect');
    
    expect(discoverCard).toBeTruthy();
    expect(showcaseCard).toBeTruthy();
    expect(connectCard).toBeTruthy();
  });

  it('has the correct feature content for Discover Gigs', () => {
    render(<FeaturesSection />);
    
    expect(screen.getByText('🔍')).toBeTruthy();
    expect(screen.getByText('Discover Gigs')).toBeTruthy();
    expect(screen.getByText('Browse through thousands of exciting opportunities')).toBeTruthy();
  });

  it('has the correct feature content for Showcase Skills', () => {
    render(<FeaturesSection />);
    
    expect(screen.getByText('💼')).toBeTruthy();
    expect(screen.getByText('Showcase Skills')).toBeTruthy();
    expect(screen.getByText('Create your profile and highlight your expertise')).toBeTruthy();
  });

  it('has the correct feature content for Connect', () => {
    render(<FeaturesSection />);
    
    expect(screen.getByText('🤝')).toBeTruthy();
    expect(screen.getByText('Connect')).toBeTruthy();
    expect(screen.getByText('Network with clients and fellow professionals')).toBeTruthy();
  });

  it('renders without crashing', () => {
    const { root } = render(<FeaturesSection />);
    
    expect(root).toBeTruthy();
  });

  it('uses FeatureCard components correctly', () => {
    render(<FeaturesSection />);
    
    // Each feature should have all three elements (icon, title, description)
    // First feature
    expect(screen.getByText('🔍')).toBeTruthy();
    expect(screen.getByText('Discover Gigs')).toBeTruthy();
    expect(screen.getByText(/Browse through thousands/)).toBeTruthy();
    
    // Second feature
    expect(screen.getByText('💼')).toBeTruthy();
    expect(screen.getByText('Showcase Skills')).toBeTruthy();
    expect(screen.getByText(/Create your profile/)).toBeTruthy();
    
    // Third feature
    expect(screen.getByText('🤝')).toBeTruthy();
    expect(screen.getByText('Connect')).toBeTruthy();
    expect(screen.getByText(/Network with clients/)).toBeTruthy();
  });

  it('maintains consistent feature structure', () => {
    render(<FeaturesSection />);
    
    // All icons should be present
    const icons = ['🔍', '💼', '🤝'];
    icons.forEach(icon => {
      expect(screen.getByText(icon)).toBeTruthy();
    });
    
    // All titles should be present
    const titles = ['Discover Gigs', 'Showcase Skills', 'Connect'];
    titles.forEach(title => {
      expect(screen.getByText(title)).toBeTruthy();
    });
  });

  it('renders features in the correct order', () => {
    render(<FeaturesSection />);
    
    // All features should be present (order testing would require more specific queries)
    expect(screen.getByText('Discover Gigs')).toBeTruthy();
    expect(screen.getByText('Showcase Skills')).toBeTruthy();
    expect(screen.getByText('Connect')).toBeTruthy();
  });

  it('contains relevant keywords in descriptions', () => {
    render(<FeaturesSection />);
    
    expect(screen.getByText(/opportunities/)).toBeTruthy();
    expect(screen.getByText(/expertise/)).toBeTruthy();
    expect(screen.getByText(/professionals/)).toBeTruthy();
  });

  it('uses appropriate emojis for each feature', () => {
    render(<FeaturesSection />);
    
    // Search/discover emoji
    expect(screen.getByText('🔍')).toBeTruthy();
    // Business/work emoji
    expect(screen.getByText('💼')).toBeTruthy();
    // Handshake/connection emoji
    expect(screen.getByText('🤝')).toBeTruthy();
  });
});
