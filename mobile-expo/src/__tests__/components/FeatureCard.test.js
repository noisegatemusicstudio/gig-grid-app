import React from 'react';
import { render, screen } from '@testing-library/react-native';
import FeatureCard from '../../components/FeatureCard';

describe('FeatureCard Component', () => {
  const mockProps = {
    icon: '🎯',
    title: 'Find Perfect Gigs',
    description: 'Discover opportunities that match your skills and interests perfectly.'
  };

  it('renders correctly with all props', () => {
    render(<FeatureCard {...mockProps} />);
    
    expect(screen.getByText('🎯')).toBeTruthy();
    expect(screen.getByText('Find Perfect Gigs')).toBeTruthy();
    expect(screen.getByText('Discover opportunities that match your skills and interests perfectly.')).toBeTruthy();
  });

  it('displays the correct icon', () => {
    render(<FeatureCard {...mockProps} />);
    
    const iconElement = screen.getByText('🎯');
    expect(iconElement).toBeTruthy();
  });

  it('displays the correct title', () => {
    render(<FeatureCard {...mockProps} />);
    
    const titleElement = screen.getByText('Find Perfect Gigs');
    expect(titleElement).toBeTruthy();
  });

  it('displays the correct description', () => {
    render(<FeatureCard {...mockProps} />);
    
    const descriptionElement = screen.getByText('Discover opportunities that match your skills and interests perfectly.');
    expect(descriptionElement).toBeTruthy();
  });

  it('renders with different props', () => {
    const differentProps = {
      icon: '💼',
      title: 'Professional Network',
      description: 'Connect with industry professionals and expand your network.'
    };

    render(<FeatureCard {...differentProps} />);
    
    expect(screen.getByText('💼')).toBeTruthy();
    expect(screen.getByText('Professional Network')).toBeTruthy();
    expect(screen.getByText('Connect with industry professionals and expand your network.')).toBeTruthy();
  });

  it('handles empty props gracefully', () => {
    render(<FeatureCard />);
    
    // Should render without crashing even with undefined props
    const { root } = render(<FeatureCard />);
    expect(root).toBeTruthy();
  });

  it('renders with only icon prop', () => {
    render(<FeatureCard icon="⭐" />);
    
    expect(screen.getByText('⭐')).toBeTruthy();
  });

  it('renders with only title prop', () => {
    render(<FeatureCard title="Test Title" />);
    
    expect(screen.getByText('Test Title')).toBeTruthy();
  });

  it('renders with only description prop', () => {
    render(<FeatureCard description="Test description for the feature card." />);
    
    expect(screen.getByText('Test description for the feature card.')).toBeTruthy();
  });

  it('handles long text content', () => {
    const longProps = {
      icon: '🚀',
      title: 'This is a very long title that should still render correctly',
      description: 'This is a very long description that contains multiple sentences and should wrap properly within the card layout without breaking the component structure.'
    };

    render(<FeatureCard {...longProps} />);
    
    expect(screen.getByText('🚀')).toBeTruthy();
    expect(screen.getByText('This is a very long title that should still render correctly')).toBeTruthy();
    expect(screen.getByText(/This is a very long description/)).toBeTruthy();
  });

  it('renders multiple cards with different content', () => {
    const { rerender } = render(<FeatureCard {...mockProps} />);
    
    expect(screen.getByText('Find Perfect Gigs')).toBeTruthy();
    
    const newProps = {
      icon: '📱',
      title: 'Mobile Ready',
      description: 'Access your gigs anywhere, anytime.'
    };
    
    rerender(<FeatureCard {...newProps} />);
    expect(screen.getByText('Mobile Ready')).toBeTruthy();
  });

  it('maintains proper component structure', () => {
    render(<FeatureCard {...mockProps} />);
    
    // All three elements should be present
    expect(screen.getByText('🎯')).toBeTruthy();
    expect(screen.getByText('Find Perfect Gigs')).toBeTruthy();
    expect(screen.getByText(/Discover opportunities/)).toBeTruthy();
  });

  it('handles special characters in text', () => {
    const specialProps = {
      icon: '🎵',
      title: 'Music & Entertainment',
      description: 'Find gigs in music, entertainment & creative industries!'
    };

    render(<FeatureCard {...specialProps} />);
    
    expect(screen.getByText('🎵')).toBeTruthy();
    expect(screen.getByText('Music & Entertainment')).toBeTruthy();
    expect(screen.getByText('Find gigs in music, entertainment & creative industries!')).toBeTruthy();
  });

  it('renders consistently across multiple instances', () => {
    const props1 = { icon: '🎯', title: 'Title 1', description: 'Description 1' };
    const props2 = { icon: '💼', title: 'Title 2', description: 'Description 2' };
    
    const { root: root1 } = render(<FeatureCard {...props1} />);
    const { root: root2 } = render(<FeatureCard {...props2} />);
    
    expect(root1).toBeTruthy();
    expect(root2).toBeTruthy();
  });
});
