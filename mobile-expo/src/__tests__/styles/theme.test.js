import { colors, typography, spacing, shadows, commonStyles } from '../../styles/theme';

describe('Theme System', () => {
  describe('Colors', () => {
    it('has primary color defined', () => {
      expect(colors.primary).toBe('#6366f1');
    });

    it('has primary light color defined', () => {
      expect(colors.primaryLight).toBe('#818cf8');
    });

    it('has primary dark color defined', () => {
      expect(colors.primaryDark).toBe('#4f46e5');
    });

    it('has text colors defined', () => {
      expect(colors.text).toBeDefined();
      expect(colors.text.primary).toBe('#1e293b');
      expect(colors.text.secondary).toBe('#64748b');
      expect(colors.text.light).toBe('#94a3b8');
    });

    it('has background colors defined', () => {
      expect(colors.background).toBeDefined();
      expect(colors.background.primary).toBe('#f8fafc');
      expect(colors.background.secondary).toBe('#ffffff');
      expect(colors.background.accent).toBe('#f1f5f9');
    });

    it('has border colors defined', () => {
      expect(colors.border).toBeDefined();
      expect(colors.border.light).toBe('#e2e8f0');
      expect(colors.border.medium).toBe('#cbd5e1');
    });

    it('has shadow colors defined', () => {
      expect(colors.shadow).toBeDefined();
      expect(colors.shadow.color).toBe('#000');
      expect(colors.shadow.primary).toBe('#6366f1');
    });
  });

  describe('Typography', () => {
    it('has font sizes defined', () => {
      expect(typography.sizes).toBeDefined();
      expect(typography.sizes.xs).toBe(12);
      expect(typography.sizes.sm).toBe(14);
      expect(typography.sizes.base).toBe(16);
      expect(typography.sizes.lg).toBe(18);
      expect(typography.sizes.xl).toBe(20);
      expect(typography.sizes['2xl']).toBe(24);
      expect(typography.sizes['3xl']).toBe(28);
      expect(typography.sizes['4xl']).toBe(32);
      expect(typography.sizes['5xl']).toBe(36);
    });

    it('has font weights defined', () => {
      expect(typography.weights).toBeDefined();
      expect(typography.weights.normal).toBe('400');
      expect(typography.weights.medium).toBe('500');
      expect(typography.weights.semibold).toBe('600');
      expect(typography.weights.bold).toBe('700');
    });
  });

  describe('Spacing', () => {
    it('has spacing values defined', () => {
      expect(spacing).toBeDefined();
      expect(spacing.xs).toBe(4);
      expect(spacing.sm).toBe(8);
      expect(spacing.md).toBe(12);
      expect(spacing.lg).toBe(16);
      expect(spacing.xl).toBe(20);
      expect(spacing['2xl']).toBe(24);
      expect(spacing['3xl']).toBe(32);
    });
  });

  describe('Shadows', () => {
    it('has shadow configurations defined', () => {
      expect(shadows).toBeDefined();
      expect(shadows.sm).toBeDefined();
      expect(shadows.md).toBeDefined();
      expect(shadows.lg).toBeDefined();
    });

    it('has correct shadow properties', () => {
      expect(shadows.sm.shadowColor).toBe(colors.shadow.color);
      expect(shadows.sm.shadowOffset).toEqual({ width: 0, height: 1 });
      expect(shadows.sm.shadowOpacity).toBe(0.05);
      expect(shadows.sm.shadowRadius).toBe(2);
      expect(shadows.sm.elevation).toBe(2);
    });
  });

  describe('Common Styles', () => {
    it('has common styles defined', () => {
      expect(commonStyles).toBeDefined();
      expect(commonStyles.container).toBeDefined();
      expect(commonStyles.scrollView).toBeDefined();
      expect(commonStyles.content).toBeDefined();
    });

    it('has correct container styles', () => {
      expect(commonStyles.container.flex).toBe(1);
      expect(commonStyles.container.backgroundColor).toBe(colors.background.primary);
    });

    it('has correct scroll view styles', () => {
      expect(commonStyles.scrollView.flex).toBe(1);
    });

    it('has correct content styles', () => {
      expect(commonStyles.content.padding).toBe(spacing.xl);
    });
  });

  describe('Theme Consistency', () => {
    it('uses consistent color values across theme', () => {
      expect(shadows.lg.shadowColor).toBe(colors.shadow.primary);
      expect(commonStyles.container.backgroundColor).toBe(colors.background.primary);
    });

    it('uses consistent spacing values', () => {
      expect(commonStyles.content.padding).toBe(spacing.xl);
    });
  });
});
