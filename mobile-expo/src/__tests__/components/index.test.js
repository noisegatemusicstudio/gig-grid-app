import * as ComponentExports from '../../components/index';
import Header from '../../components/Header';
import WelcomeMessage from '../../components/WelcomeMessage';
import FeatureCard from '../../components/FeatureCard';
import FeaturesSection from '../../components/FeaturesSection';
import Button from '../../components/Button';
import ActionButtons from '../../components/ActionButtons';
import Footer from '../../components/Footer';

describe('Components Index', () => {
  it('exports all required components', () => {
    expect(ComponentExports.Header).toBeDefined();
    expect(ComponentExports.WelcomeMessage).toBeDefined();
    expect(ComponentExports.FeatureCard).toBeDefined();
    expect(ComponentExports.FeaturesSection).toBeDefined();
    expect(ComponentExports.Button).toBeDefined();
    expect(ComponentExports.ActionButtons).toBeDefined();
    expect(ComponentExports.Footer).toBeDefined();
  });

  it('exports Header component correctly', () => {
    expect(ComponentExports.Header).toBe(Header);
  });

  it('exports WelcomeMessage component correctly', () => {
    expect(ComponentExports.WelcomeMessage).toBe(WelcomeMessage);
  });

  it('exports FeatureCard component correctly', () => {
    expect(ComponentExports.FeatureCard).toBe(FeatureCard);
  });

  it('exports FeaturesSection component correctly', () => {
    expect(ComponentExports.FeaturesSection).toBe(FeaturesSection);
  });

  it('exports Button component correctly', () => {
    expect(ComponentExports.Button).toBe(Button);
  });

  it('exports ActionButtons component correctly', () => {
    expect(ComponentExports.ActionButtons).toBe(ActionButtons);
  });

  it('exports Footer component correctly', () => {
    expect(ComponentExports.Footer).toBe(Footer);
  });

  it('exports exactly 7 components', () => {
    const exportedKeys = Object.keys(ComponentExports);
    expect(exportedKeys).toHaveLength(7);
  });

  it('has correct export names', () => {
    const expectedExports = [
      'Header',
      'WelcomeMessage', 
      'FeatureCard',
      'FeaturesSection',
      'Button',
      'ActionButtons',
      'Footer'
    ];
    
    expectedExports.forEach(exportName => {
      expect(ComponentExports[exportName]).toBeDefined();
    });
  });

  it('all exported components are functions/classes', () => {
    Object.values(ComponentExports).forEach(component => {
      expect(typeof component).toBe('function');
    });
  });

  it('components can be destructured from index', () => {
    const {
      Header: DestructuredHeader,
      WelcomeMessage: DestructuredWelcomeMessage,
      FeatureCard: DestructuredFeatureCard,
      FeaturesSection: DestructuredFeaturesSection,
      Button: DestructuredButton,
      ActionButtons: DestructuredActionButtons,
      Footer: DestructuredFooter
    } = ComponentExports;

    expect(DestructuredHeader).toBe(Header);
    expect(DestructuredWelcomeMessage).toBe(WelcomeMessage);
    expect(DestructuredFeatureCard).toBe(FeatureCard);
    expect(DestructuredFeaturesSection).toBe(FeaturesSection);
    expect(DestructuredButton).toBe(Button);
    expect(DestructuredActionButtons).toBe(ActionButtons);
    expect(DestructuredFooter).toBe(Footer);
  });

  it('maintains consistent export pattern', () => {
    // All exports should be default exports re-exported
    Object.values(ComponentExports).forEach(component => {
      expect(component).toBeTruthy();
      expect(typeof component).toBe('function');
    });
  });

  it('does not export undefined values', () => {
    Object.values(ComponentExports).forEach(component => {
      expect(component).not.toBeUndefined();
      expect(component).not.toBeNull();
    });
  });
});
