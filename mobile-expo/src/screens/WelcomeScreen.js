import React from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors, typography, spacing } from '../styles/theme';

const WelcomeScreen = () => {
  const handleSkip = () => {
    // Handle skip navigation
    console.log('Skip pressed');
  };

  const handleGetStarted = () => {
    // Handle get started navigation
    console.log('Get Started pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#161616" />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {/* Welcome Image */}
          <View style={styles.imageContainer}>
            <Image 
              source={require('../uizard-imports/welcome-screen/assets/welcome_img.png')}
              style={styles.welcomeImage}
              resizeMode="contain"
            />
          </View>

          {/* Welcome Content */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to GigGrid</Text>
            <Text style={styles.subtitle}>
              Connect with fans and artists in your area. Discover local gigs, 
              share your music, and build your community.
            </Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleGetStarted} style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Get Started</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleSkip} style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Continue as Guest</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616', // Using Uizard dark background
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    justifyContent: 'space-between',
    minHeight: '85%',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  welcomeImage: {
    width: '100%',
    height: 300,
    maxWidth: 350,
  },
  textContainer: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
  },
  title: {
    fontSize: typography.sizes['4xl'],
    fontWeight: typography.weights.bold,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  subtitle: {
    fontSize: typography.sizes.lg,
    color: '#94a3b8',
    textAlign: 'center',
    lineHeight: 26,
    paddingHorizontal: spacing.sm,
  },
  buttonContainer: {
    paddingBottom: spacing.xl,
    gap: spacing.md,
  },
  primaryButton: {
    backgroundColor: '#FCC500',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#FCC500',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  primaryButtonText: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: '#000000',
  },
  secondaryButton: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#374151',
  },
  secondaryButtonText: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.medium,
    color: '#94a3b8',
  },
});

export default WelcomeScreen;
