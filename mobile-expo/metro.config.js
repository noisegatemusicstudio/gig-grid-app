const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Configure Metro with default port
config.server = {
  ...config.server,
  port: process.env.EXPO_PORT || 8081,
};

module.exports = config;
