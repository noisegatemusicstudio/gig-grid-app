import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing, commonStyles } from '../styles/theme';

const Header = () => {
  return (
    <View style={[styles.header, commonStyles.centerAlign]}>
      <Text style={styles.logo}>🎯 GigGrid</Text>
      <Text style={styles.tagline}>Find Your Perfect Gig</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: spacing['4xl'],
    marginBottom: spacing['4xl'],
  },
  logo: {
    fontSize: typography.sizes['5xl'],
    fontWeight: typography.weights.bold,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  tagline: {
    fontSize: typography.sizes.base,
    color: colors.text.secondary,
    fontWeight: typography.weights.medium,
  },
});

export default Header;
