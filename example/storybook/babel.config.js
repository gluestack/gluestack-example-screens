const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-react'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
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
    ],
  };
};
