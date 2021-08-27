import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SpinningRecord } from '../screens/loading/SpinningRecord';
import { TabNavigator } from './TabNavigator';
import { RootNavigatorParamList } from './types';

const RootStack = createStackNavigator<RootNavigatorParamList>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{ animationEnabled: false }}
      initialRouteName={'SpinningRecord'}>
      <RootStack.Screen
        name={'Main'}
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name={'SpinningRecord'}
        component={SpinningRecord}
        options={{ presentation: 'modal', headerShown: false }}
      />
    </RootStack.Navigator>
  );
};
