module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  env: {
    jest: true,
  },
  rules: {
    'react-native/no-inline-styles': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
