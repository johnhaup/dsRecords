jest.mock('react-native-bootsplash', () => ({
  hide: jest.fn,
}));

// Reanimated 2
// require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests(); <-- Has no effect on tests
// https://github.com/software-mansion/react-native-reanimated/issues/1941#issuecomment-826995101
// @ts-ignore
global.__reanimatedWorkletInit = jest.fn();

jest.mock('react-native-reanimated', () => {
  return {
    // @ts-ignore
    ...jest.requireActual('react-native-reanimated/mock'),
    useSharedValue: jest.fn,
    useAnimatedStyle: jest.fn,
    withTiming: jest.fn,
    withSpring: jest.fn,
    withRepeat: jest.fn,
    withSequence: jest.fn,
    useAnimatedProps: jest.fn,
    Easing: {
      linear: jest.fn,
      elastic: jest.fn,
    },
  };
});
