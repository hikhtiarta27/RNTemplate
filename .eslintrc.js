module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-wrap-multilines': 0, // along the same lines of playing fast-and-loose with ASI
    'react/jsx-filename-extension': 0, // component files still have a .js extension
    'react/prop-types': 0, // not currently using props validation
    'no-use-before-define': 0, // allows to make the component the topmost element in a module file, and define a styles object further down
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'object-curly-spacing': ['error', 'never'],
  },
  plugins: ['react-native'],
};
