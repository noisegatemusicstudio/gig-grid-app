import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  Header,
  WelcomeMessage,
  FeaturesSection,
  ActionButtons,
  Footer
} from '../components';
import { commonStyles } from '../styles/theme';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <StatusBar style="light" backgroundColor="#6366f1" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={commonStyles.scrollView}
      >
        <View style={commonStyles.content}>
          <Header />
          <WelcomeMessage />
          <FeaturesSection />
          <ActionButtons />
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
