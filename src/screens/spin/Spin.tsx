import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  RotationGestureHandler,
  RotationGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import { Record } from '../../components/svgs/Record';
import { colors } from '../../styles';

const RECORD_SIZE = 300;

export const Spin = () => {
  const rotate = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<
    RotationGestureHandlerGestureEvent,
    {
      offset: number;
    }
  >({
    onStart: (_, ctx) => {
      ctx.offset = rotate.value;
    },
    onActive: (event, ctx) => {
      rotate.value = ctx.offset + event.rotation * 1.3;
    },
    onEnd: ({ velocity }) => {
      rotate.value = withDecay({
        velocity: velocity * 10,
        deceleration: 0.9999,
      });
    },
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotate.value}deg` }],
    };
  });

  return (
    <View style={styles.container}>
      <RotationGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={style}>
          <Record size={RECORD_SIZE} labelColor={colors.sourLemon} />
        </Animated.View>
      </RotationGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});