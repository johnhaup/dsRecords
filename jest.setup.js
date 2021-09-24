jest.mock('react-native-bootsplash', () => ({
  hide: jest.fn,
}));

// Reanimated 2
require('react-native-reanimated/src/reanimated2/jestUtils').setUpTests();
// https://github.com/software-mansion/react-native-reanimated/issues/1941#issuecomment-826995101
global.__reanimatedWorkletInit = jest.fn();

jest.mock('react-native-reanimated', () => {
  return {
    ...jest.requireActual('react-native-reanimated/mock'),
    useSharedValue: jest.fn,
    useAnimatedStyle: jest.fn,
    withTiming: jest.fn,
    withSpring: jest.fn,
    withRepeat: jest.fn,
    withSequence: jest.fn,
    useAnimatedProps: jest.fn,
    useDerivedValue: jest.fn,
    useAnimatedReaction: jest.fn,
    useAnimatedGestureHandler: jest.fn,
    Easing: {
      linear: jest.fn,
      elastic: jest.fn,
    },
  };
});

jest.mock('@react-native-community/audio-toolkit', () => ({
  Player: () => ({
    prepare: jest.fn,
    play: jest.fn,
    stop: jest.fn,
    pause: jest.fn,
    speed: 1,
  }),
}));

// https://stackoverflow.com/a/59593847
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useFocusEffect: jest.fn,
  };
});

jest.mock('@react-native-firebase/firestore', () => {
  return () => ({
    collection: jest.fn,
  });
});
