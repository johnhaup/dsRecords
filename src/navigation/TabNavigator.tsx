import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';

const BottomTabNavigator = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen name={'Bounce'} component={View} />
      <BottomTabNavigator.Screen name={'Spin'} component={View} />
    </BottomTabNavigator.Navigator>
  );
};
