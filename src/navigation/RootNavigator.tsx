import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SpinningRecord } from '../screens/loading/SpinningRecord';
import { TabNavigator } from './TabNavigator';
import { LaunchScreens } from './types';

const RootStack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      mode="modal"
      headerMode={'none'}
      screenOptions={{ animationEnabled: false }}
      initialRouteName={LaunchScreens.SPINNING_RECORD}>
      <RootStack.Screen
        name={LaunchScreens.TAB_NAVIGATOR}
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={LaunchScreens.SPINNING_RECORD}
        component={SpinningRecord}
      />
    </RootStack.Navigator>
  );
};
