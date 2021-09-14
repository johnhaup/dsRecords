import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Record } from '../components/svgs/Record';
import { Bounce } from '../screens/bounce/Bounce';
import { Spin } from '../screens/spin/Spin';
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
        name={'Bounce'}
        component={Bounce}
        options={() => ({
          tabBarTestID: '@TabBar/Bounce',
          tabBarIcon: renderTabBarIcon,
          tabBarShowLabel: false,
          headerShown: false,
        })}
      />
      <BottomTabNavigator.Screen
        name={'Spin'}
        component={Spin}
        options={() => ({
          tabBarTestID: '@TabBar/Spin',
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
