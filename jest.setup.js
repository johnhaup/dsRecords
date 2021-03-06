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
    prepare: (callback) => callback(),
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

jest.mock('@react-navigation/elements', () => {
  return {
    ...jest.requireActual('@react-navigation/elements'),
    useHeaderHeight: jest.fn,
  };
});

jest.mock('@react-native-firebase/firestore', () => () => ({
  collection: () => {
    const get = () =>
      Promise.resolve({
        docs: [
          {
            data: () => ({
              storagePath: '/root/barf',
              attribution: 'barf.com',
              title: 'smell barf',
            }),
          },
        ],
      });
    return { get };
  },
}));

jest.mock('@react-native-firebase/auth', () => {
  const auth = () => ({
    currentUser: null,
    onAuthStateChanged: jest.fn,
    signInWithCredential: jest.fn,
  });
  auth.GoogleAuthProvider = {
    credential: jest.fn,
  };

  return auth;
});

jest.mock('@react-native-google-signin/google-signin', () => ({
  GoogleSignin: {
    configure: jest.fn,
    signIn: () => ({ idToken: '123' }),
  },
}));

jest.mock('react-native-safe-area-context', () => ({
  ...jest.requireActual('react-native-safe-area-context'),
  useSafeAreaInsets: jest.fn,
}));
