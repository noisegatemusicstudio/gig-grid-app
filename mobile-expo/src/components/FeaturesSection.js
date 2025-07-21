import React from 'react';
import { View, StyleSheet } from 'react-native';
import FeatureCard from './FeatureCard';
import { spacing } from '../styles/theme';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🔍',
      title: 'Discover Gigs',
      description: 'Browse through thousands of exciting opportunities'
    },
    {
      icon: '💼',
      title: 'Showcase Skills',
      description: 'Create your profile and highlight your expertise'
    },
    {
      icon: '🤝',
      title: 'Connect',
      description: 'Network with clients and fellow professionals'
    }
  ];

  return (
    <View style={styles.featuresSection}>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  featuresSection: {
    marginBottom: spacing['4xl'],
  },
});

export default FeaturesSection;
