import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Bounce } from '../screens/bounce/Bounce';
import { Spin } from '../screens/spin/Spin';
import { BounceStack, SpinStack } from './types';

const BottomTabNavigator = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen name={BounceStack.BOUNCE} component={Bounce} />
      <BottomTabNavigator.Screen name={SpinStack.SPIN} component={Spin} />
    </BottomTabNavigator.Navigator>
  );
};
