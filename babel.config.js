module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    // Reanimated plugin has to be listed last.
    'react-native-reanimated/plugin',
  ],
  sourceMaps: true,
};
