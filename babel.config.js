module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.json'
          ],
          alias: {
            '@pages': './src/pages',
            '@assets': './src/assets',
            '@components': './src/components',
          }
        }
      ]
    ]
  };
};
