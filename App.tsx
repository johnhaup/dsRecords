import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { RootNavigator } from './src/navigation/RootNavigator';
import { useAudioPlayer } from './src/services/hooks/useAudioPlayer';

const App = () => {
  const { prepare } = useAudioPlayer();

  useEffect(() => {
    prepare();
  });

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
