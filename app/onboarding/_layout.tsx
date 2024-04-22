import { Stack } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function OnBoardingLayout() {
  return (
    <Stack screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name='one'></Stack.Screen>
        <Stack.Screen name='two'></Stack.Screen>
        <Stack.Screen name='three'></Stack.Screen>
    </Stack>
  );
}
