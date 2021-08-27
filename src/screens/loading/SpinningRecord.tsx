import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { Record } from '../../components/svgs/Record';
import { RootNavigatorParamList } from '../../navigation/types';
import { colors } from '../../styles';

export const SpinningRecord = ({
  navigation,
}: BottomTabScreenProps<RootNavigatorParamList, 'SpinningRecord'>) => {
  const spin = useSharedValue(0);

  const mockLoading = useCallback(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 2500);
  }, [navigation]);

  const startSpinning = useCallback(() => {
    spin.value = withRepeat(
      withTiming(360, { duration: 2000, easing: Easing.linear }),
      -1,
    );
  }, [spin]);

  useEffect(() => {
    startSpinning();
    mockLoading();
    RNBootSplash.hide({ fade: true });
  }, [startSpinning, mockLoading]);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('light-content');

      return () => StatusBar.setBarStyle('dark-content');
    }, []),
  );

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${spin.value}deg` }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyles} testID={'animated-view'}>
        <Record />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.electronBlue,
    flex: 1,
  },
});
