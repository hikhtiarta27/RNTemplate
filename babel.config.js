module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          component: './app/components',
          modules: './app/modules',
          config: './app/config',
          styles: './app/styles',
          font: './app/styles/Font',
          color: './app/styles/Color',
          typography: './app/styles/Typography',
        },
      },
    ],
  ],
};
