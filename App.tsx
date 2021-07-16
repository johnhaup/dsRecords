import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootNavigator } from './src/navigation/RootNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
      {/* <SpinningRecord /> */}
    </NavigationContainer>
  );
};

export default App;
