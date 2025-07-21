import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing, commonStyles } from '../styles/theme';

const WelcomeMessage = () => {
  return (
    <View style={[styles.welcomeSection, commonStyles.centerAlign]}>
      <Text style={styles.welcomeTitle}>Welcome to GigGrid!</Text>
      <Text style={styles.welcomeDescription}>
        Connect with opportunities, showcase your skills, and find the perfect gig that matches your passion and expertise.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeSection: {
    marginBottom: spacing['4xl'],
  },
  welcomeTitle: {
    fontSize: typography.sizes['3xl'],
    fontWeight: typography.weights.bold,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  welcomeDescription: {
    fontSize: typography.sizes.base,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: typography.lineHeights.normal,
    paddingHorizontal: spacing.xl,
  },
});

export default WelcomeMessage;
