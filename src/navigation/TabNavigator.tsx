import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Record } from '../components/svgs/Record';
import { Play } from '../screens/play/Play';
import { colors } from '../styles';

const BottomTabNavigator = createBottomTabNavigator();

const renderTabBarIcon = ({ focused }: { focused: boolean }) => {
  const color = focused ? colors.chiGong : colors.soothingBreeze;
  const size = focused ? 40 : 36;
  return <Record size={size} labelColor={color} />;
};

export const TabNavigator = () => {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{ tabBarStyle: styles.tabBar }}>
      <BottomTabNavigator.Screen
        name={'Play'}
        component={Play}
        options={() => ({
          tabBarTestID: '@TabBar/Play',
          tabBarIcon: renderTabBarIcon,
          tabBarShowLabel: false,
          headerShown: false,
        })}
      />
      <BottomTabNavigator.Screen
        name={'Song'}
        component={View}
        options={() => ({
          tabBarTestID: '@TabBar/Song',
          tabBarIcon: renderTabBarIcon,
          tabBarShowLabel: false,
          headerShown: false,
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
