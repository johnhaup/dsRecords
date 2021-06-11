import React, { useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { Record } from '../../components/svgs/Record';
import { colors } from '../../styles';

export const SpinningRecord = () => {
  const spin = useSharedValue(0);

  const startSpinning = useCallback(() => {
    spin.value = withRepeat(
      withTiming(360, { duration: 2000, easing: Easing.linear }),
      -1,
    );
  }, [spin]);

  useEffect(() => {
    startSpinning();
    RNBootSplash.hide({ fade: true });
  }, [startSpinning]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${spin.value}deg` }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyles}>
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
