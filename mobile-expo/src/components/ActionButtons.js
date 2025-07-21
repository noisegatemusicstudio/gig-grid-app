import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';
import { spacing } from '../styles/theme';

const ActionButtons = () => {
  const handleGetStarted = () => {
    console.log('Get Started pressed!');
    // TODO: Navigate to registration/onboarding flow
  };

  const handleSignIn = () => {
    console.log('Sign In pressed!');
    // TODO: Navigate to sign in screen
  };

  return (
    <View style={styles.buttonSection}>
      <Button
        title="Get Started"
        onPress={handleGetStarted}
        variant="primary"
      />
      <Button
        title="Sign In"
        onPress={handleSignIn}
        variant="secondary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonSection: {
    marginBottom: spacing['4xl'],
  },
});

export default ActionButtons;
