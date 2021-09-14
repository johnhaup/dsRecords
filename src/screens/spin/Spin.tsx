import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import { canvas2Polar } from 'react-native-redash';
import { AbsoluteContainer } from '../../components/primitives/AbsoluteContainer';
import { Record } from '../../components/svgs/Record';
import { useAudioPlayer } from '../../services/hooks/useAudioPlayer';
import { colors } from '../../styles';

const RECORD_SIZE = Dimensions.get('window').width - 40;
const CENTER = { x: 0, y: 0 };

export const Spin = () => {
  const theta = useSharedValue(0);
  const rotate = useSharedValue(0);
  const playSpeed = useSharedValue(0);
  const { play, pause } = useAudioPlayer();

  const isMoving = useDerivedValue(() => playSpeed.value !== 0, [playSpeed]);

  function playFromUI() {
    'worklet';
    runOnJS(play)();
  }

  function pauseFromUI() {
    'worklet';
    runOnJS(pause)();
  }

  useAnimatedReaction(
    () => isMoving.value,
    (isActive, wasActive) => {
      if (isActive && !wasActive) {
        playFromUI();
      }
      if (!isActive && wasActive) {
        pauseFromUI();
      }
    },
    [isMoving],
  );

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      offset: number;
    }
  >({
    onStart: (_, ctx) => {
      ctx.offset = rotate.value;
      playSpeed.value = 1;
    },
    onActive: (event, ctx) => {
      const x = event.translationX;
      const y = event.translationY;

      const value = canvas2Polar({ x, y }, CENTER).theta;
      theta.value = value > 0 ? value : 2 * Math.PI + value;
      const thetaRotationValue = theta.value * (360 / (2 * Math.PI)) * -1;
      const newValue = thetaRotationValue + ctx.offset;
      rotate.value =
        newValue > 360 || newValue < -360 ? newValue % 360 : newValue;
    },
    onEnd: () => {
      playSpeed.value = 0;
    },
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotate.value}deg` }],
    };
  });

  return (
    <AbsoluteContainer center>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={styles.handlerChild}>
          <Animated.View style={style}>
            <Record size={RECORD_SIZE} labelColor={colors.sourLemon} />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </AbsoluteContainer>
  );
};

const styles = StyleSheet.create({
  handlerChild: {
    height: RECORD_SIZE,
    width: RECORD_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
