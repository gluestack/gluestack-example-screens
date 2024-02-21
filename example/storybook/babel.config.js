const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/components/nativewind': path.resolve(
              __dirname,
              './components/ui'
            ),
            // 'global.css': path.resolve(__dirname, './global.css'),
            '@gluestack-ui-new/themed': path.join(
              __dirname,
              '../../packages/themed/src'
            ),
            '@gluestack-ui/config-v2': path.join(
              __dirname,
              '../../packages/config-v2/src/gluestack-ui.config'
            ),
          },
        },
      ],
      '@babel/plugin-transform-modules-commonjs',
      'react-native-reanimated/plugin',
    ],
  };
};
