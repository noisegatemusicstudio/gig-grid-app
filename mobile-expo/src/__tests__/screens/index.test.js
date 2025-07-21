import * as ScreenExports from '../../screens/index';
import WelcomeScreen from '../../screens/WelcomeScreen';

describe('Screens Index', () => {
  it('exports WelcomeScreen correctly', () => {
    expect(ScreenExports.WelcomeScreen).toBeDefined();
    expect(ScreenExports.WelcomeScreen).toBe(WelcomeScreen);
  });

  it('exports exactly 1 screen', () => {
    const exportedKeys = Object.keys(ScreenExports);
    expect(exportedKeys).toHaveLength(1);
  });

  it('has correct export name', () => {
    expect(ScreenExports.WelcomeScreen).toBeDefined();
  });

  it('exported screen is a function/component', () => {
    expect(typeof ScreenExports.WelcomeScreen).toBe('function');
  });

  it('can be destructured from index', () => {
    const { WelcomeScreen: DestructuredWelcomeScreen } = ScreenExports;
    expect(DestructuredWelcomeScreen).toBe(WelcomeScreen);
  });

  it('does not export undefined values', () => {
    expect(ScreenExports.WelcomeScreen).not.toBeUndefined();
    expect(ScreenExports.WelcomeScreen).not.toBeNull();
  });

  it('maintains consistent export pattern', () => {
    expect(ScreenExports.WelcomeScreen).toBeTruthy();
    expect(typeof ScreenExports.WelcomeScreen).toBe('function');
  });

  it('allows direct import usage', () => {
    // Test that the exported component can be used
    const ImportedWelcomeScreen = ScreenExports.WelcomeScreen;
    expect(ImportedWelcomeScreen).toBe(WelcomeScreen);
  });
});
