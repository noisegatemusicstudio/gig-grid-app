import { StyleSheet } from 'react-native';

// Color palette
export const colors = {
  primary: '#6366f1',
  primaryLight: '#818cf8',
  primaryDark: '#4f46e5',
  
  text: {
    primary: '#1e293b',
    secondary: '#64748b',
    light: '#94a3b8',
  },
  
  background: {
    primary: '#f8fafc',
    secondary: '#ffffff',
    accent: '#f1f5f9',
  },
  
  border: {
    light: '#e2e8f0',
    medium: '#cbd5e1',
  },
  
  shadow: {
    color: '#000',
    primary: '#6366f1',
  }
};

// Typography
export const typography = {
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
    '5xl': 36,
  },
  
  weights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  lineHeights: {
    tight: 20,
    normal: 24,
    relaxed: 28,
  }
};

// Spacing
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
};

// Border radius
export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

// Shadow styles
export const shadows = {
  sm: {
    shadowColor: colors.shadow.color,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  
  md: {
    shadowColor: colors.shadow.color,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  lg: {
    shadowColor: colors.shadow.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  }
};

// Common styles
export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  
  scrollView: {
    flex: 1,
  },
  
  content: {
    flex: 1,
    padding: spacing.xl,
  },
  
  section: {
    marginBottom: spacing['4xl'],
  },
  
  centerAlign: {
    alignItems: 'center',
  },
  
  textCenter: {
    textAlign: 'center',
  },
});
