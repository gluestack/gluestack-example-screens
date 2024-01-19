const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@gluestack-ui-new/themed': path.join(
              __dirname,
              '../../packages/themed/src'
            ),
            '@gluestack-ui-new/config': path.join(
              __dirname,
              '../../packages/config/src/gluestack-ui.config'
            ),
          },
        },
      ],
      '@babel/plugin-transform-modules-commonjs',
    ],
  };
};
