import React, { useState } from 'react';
import {
  LayoutChangeEvent,
  LayoutRectangle,
  StyleSheet,
  View,
} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import { clamp, withBouncing } from 'react-native-redash';
import { Record } from '../../components/svgs/Record';
import { colors } from '../../styles';

const RECORD_SIZE = 80;

export const Bounce = () => {
  const [containerLayoutRectangle, setContainerLayoutRectangle] =
    useState<LayoutRectangle | null>(null);

  const boundX = (containerLayoutRectangle?.width || RECORD_SIZE) - RECORD_SIZE;
  const boundY =
    (containerLayoutRectangle?.height || RECORD_SIZE) - RECORD_SIZE;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<
    // Type of event Gesture Handler is emitting
    PanGestureHandlerGestureEvent,
    // User-defined context available to methods in hook
    {
      offsetX: number;
      offsetY: number;
    }
  >({
    onStart: (_, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = clamp(ctx.offsetX + event.translationX, 0, boundX);
      translateY.value = clamp(ctx.offsetY + event.translationY, 0, boundY);
    },
    onEnd: ({ velocityX, velocityY }) => {
      translateX.value = withBouncing(
        withDecay({
          velocity: velocityX,
        }),
        // Boundaries that will trigger withBouncing hook
        0,
        boundX,
      );
      translateY.value = withBouncing(
        withDecay({
          velocity: velocityY,
        }),
        // Boundaries that will trigger withBouncing hook
        0,
        boundY,
      );
    },
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  const onContainerLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    if (!containerLayoutRectangle) {
      setContainerLayoutRectangle(nativeEvent.layout);
    }
  };

  return (
    <View style={styles.container} onLayout={onContainerLayout}>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View {...{ style }}>
          <Record size={RECORD_SIZE} labelColor={colors.robinsEggBlue} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
