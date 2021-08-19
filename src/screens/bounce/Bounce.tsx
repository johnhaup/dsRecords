import React, { useRef, useState } from 'react';
import {
  LayoutChangeEvent,
  LayoutRectangle,
  StyleSheet,
  View,
} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import { clamp, withBouncing } from 'react-native-redash';
import { Record } from '../../components/svgs/Record';
import { useAudioPlayer } from '../../services/hooks/useAudioPlayer';
import { colors } from '../../styles';

const RECORD_SIZE = 80;

export const Bounce = () => {
  const tapHandlerRef = useRef();
  const panHandlerRef = useRef();
  const { play, pause } = useAudioPlayer();
  const [containerLayoutRectangle, setContainerLayoutRectangle] =
    useState<LayoutRectangle | null>(null);

  const boundX = (containerLayoutRectangle?.width || RECORD_SIZE) - RECORD_SIZE;
  const boundY =
    (containerLayoutRectangle?.height || RECORD_SIZE) - RECORD_SIZE;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const activeVelocityX = useSharedValue(0);
  const activeVelocityY = useSharedValue(0);
  const decayVelocityX = useSharedValue(0);
  const decayVelocityY = useSharedValue(0);
  const tapActive = useSharedValue(false);

  function playFromUI() {
    'worklet';
    runOnJS(play)();
  }

  function pauseFromUI() {
    'worklet';
    runOnJS(pause)();
  }

  const isMoving = useDerivedValue(() => {
    return (
      activeVelocityX.value +
        activeVelocityY.value +
        decayVelocityX.value +
        decayVelocityY.value !==
      0
    );
  }, [activeVelocityX, decayVelocityX, activeVelocityY, decayVelocityY]);

  useAnimatedReaction(
    () => {
      return isMoving.value || tapActive.value;
    },
    (isActive, wasActive) => {
      if (isActive && !wasActive) {
        playFromUI();
      }
      if (!isActive && wasActive) {
        pauseFromUI();
      }
    },
    [isMoving, tapActive],
  );

  const onTapGestureEvent =
    useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
      onStart: () => {
        tapActive.value = true;
      },
      onEnd: () => {
        tapActive.value = false;
      },
    });

  const onPanGestureEvent = useAnimatedGestureHandler<
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
      activeVelocityX.value = event.velocityX;
      activeVelocityY.value = event.velocityY;
      translateX.value = clamp(ctx.offsetX + event.translationX, 0, boundX);
      translateY.value = clamp(ctx.offsetY + event.translationY, 0, boundY);
    },
    onEnd: ({ velocityX, velocityY }) => {
      activeVelocityX.value = 0;
      activeVelocityY.value = 0;
      decayVelocityX.value = velocityX;
      decayVelocityY.value = velocityY;
      translateX.value = withBouncing(
        withDecay(
          {
            velocity: velocityX,
          },
          () => {
            decayVelocityX.value = 0;
            decayVelocityY.value = 0;
          },
        ),
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
      <TapGestureHandler
        ref={tapHandlerRef}
        simultaneousHandlers={panHandlerRef}
        onGestureEvent={onTapGestureEvent}>
        <Animated.View>
          <PanGestureHandler
            ref={panHandlerRef}
            simultaneousHandlers={tapHandlerRef}
            onGestureEvent={onPanGestureEvent}>
            <Animated.View {...{ style }}>
              <Record size={RECORD_SIZE} labelColor={colors.robinsEggBlue} />
            </Animated.View>
          </PanGestureHandler>
        </Animated.View>
      </TapGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
