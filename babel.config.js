module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.json', '.tsx', '.ts'],
          alias: {
            '@components': './src/components',
            '@api': './src/api',
            '@navigation': './src/navigation',
            '@helpers': './src/helpers',
            '@hooks': './src/hooks',
            '@contexts': './src/contexts',
            '@services': './src/services',
            '@constants': './src/constants',
            '@assets': './src/assets',
            '@config': './src/config',
          },
        },
      ],
    ],
  };
};
