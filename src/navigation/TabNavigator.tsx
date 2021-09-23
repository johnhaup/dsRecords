import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RecordInSleeve } from '../components/svgs/RecordInSleeve';
import { RecordPlayer } from '../components/svgs/RecordPlayer';
import { Play } from '../screens/play/Play';

const BottomTabNavigator = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{ tabBarStyle: styles.tabBar }}>
      <BottomTabNavigator.Screen
        name={'Play'}
        component={Play}
        options={() => ({
          tabBarTestID: '@TabBar/Play',
          tabBarIcon: ({ focused }) => (
            <RecordPlayer hideFillColors={!focused} size={focused ? 40 : 38} />
          ),
          tabBarShowLabel: false,
          headerShown: false,
        })}
      />
      <BottomTabNavigator.Screen
        name={'Song'}
        component={View}
        options={() => ({
          tabBarTestID: '@TabBar/Song',
          tabBarIcon: ({ focused }) => (
            <RecordInSleeve
              hideFillColors={!focused}
              size={focused ? 60 : 56}
            />
          ),
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
