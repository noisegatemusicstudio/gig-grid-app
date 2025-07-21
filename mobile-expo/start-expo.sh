#!/bin/bash

# Kill any existing Expo/Metro processes
echo "🔄 Checking for existing Expo processes..."
pkill -f "expo start" 2>/dev/null || true
pkill -f "metro" 2>/dev/null || true

# Kill processes on common Expo ports
echo "🔄 Freeing up Expo ports..."
for port in 8081 8082 8083 8084 8085 19000 19001 19002; do
    lsof -ti:$port | xargs kill -9 2>/dev/null || true
done

echo "✅ Ports cleared. Starting Expo..."

# Start Expo with clear cache
npx expo start --clear "$@"
