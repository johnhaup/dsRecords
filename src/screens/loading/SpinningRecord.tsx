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
import { LaunchScreens, NavigationProps } from '../../navigation/types';
import { colors } from '../../styles';

export const SpinningRecord = ({
  navigation,
}: NavigationProps<LaunchScreens.SPINNING_RECORD>) => {
  const spin = useSharedValue(0);

  const mockLoading = useCallback(() => {
    setTimeout(() => {
      navigation.navigate(LaunchScreens.TAB_NAVIGATOR);
    }, 1000);
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
