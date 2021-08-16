import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Record } from '../components/svgs/Record';
import { Bounce } from '../screens/bounce/Bounce';
import { Spin } from '../screens/spin/Spin';
import { colors } from '../styles';
import { BounceStack, SpinStack } from './types';

const BottomTabNavigator = createBottomTabNavigator();

const renderTabBarIcon = ({ focused }: { focused: boolean }) => {
  const color = focused ? colors.chiGong : colors.soothingBreeze;
  const size = focused ? 40 : 36;
  return <Record size={size} labelColor={color} />;
};

export const TabNavigator = () => {
  return (
    <BottomTabNavigator.Navigator
      tabBarOptions={{ showLabel: false, style: styles.tabBar }}>
      <BottomTabNavigator.Screen
        name={BounceStack.BOUNCE}
        component={Bounce}
        options={() => ({
          tabBarIcon: renderTabBarIcon,
        })}
      />
      <BottomTabNavigator.Screen
        name={SpinStack.SPIN}
        component={Spin}
        options={() => ({
          tabBarIcon: renderTabBarIcon,
        })}
      />
    </BottomTabNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    paddingTop: 8,
  },
});
