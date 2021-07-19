import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import { Bounce } from '../screens/bounce/Bounce';
import { BounceStack } from './types';

const BottomTabNavigator = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen name={BounceStack.BOUNCE} component={Bounce} />
      <BottomTabNavigator.Screen name={'Spin'} component={View} />
    </BottomTabNavigator.Navigator>
  );
};
