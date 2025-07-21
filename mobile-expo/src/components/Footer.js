import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing, commonStyles } from '../styles/theme';

const Footer = () => {
  return (
    <View style={[styles.footer, commonStyles.centerAlign]}>
      <Text style={styles.footerText}>
        Ready to transform your career? Join thousands of professionals already using GigGrid.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingBottom: spacing.xl,
  },
  footerText: {
    fontSize: typography.sizes.sm,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: typography.lineHeights.tight,
    paddingHorizontal: spacing.xl,
  },
});

export default Footer;
