import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import { RecordInSleeve } from '../components/svgs/RecordInSleeve';
import { RecordPlayer } from '../components/svgs/RecordPlayer';
import { Play } from '../screens/play/Play';
import { Songs } from '../screens/songs/Songs';

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
        name={'Songs'}
        component={Songs}
        options={() => ({
          tabBarTestID: '@TabBar/Songs',
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
