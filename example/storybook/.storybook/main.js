const path = require('path');
// console.log(path.resolve('../../', 'node_modules/@gluestack-style/react'));
module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    // '../src/overview/**/*.stories.mdx',
    // '../src/overview/**/*.stories.@(js|jsx|ts|tsx)',
    // '../src/getting-started/**/*.stories.mdx',
    // '../src/getting-started/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
    '@storybook/addon-docs',
    '@geometricpanda/storybook-addon-iframe',
  ],
  staticDirs: ['../public'],
  framework: '@storybook/react',
  typescript: {
    reactDocgen: 'none',
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });

    config.module.rules.push({
      test: /\.(js|ts|tsx)$/,
      // include: [path.resolve('../../', 'node_modules/@gluestack-style/react')],
      use: 'babel-loader',
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@gluestack-ui-new/themed': path.join(
        __dirname,
        '../../../packages/themed/src'
      ),
      '@gluestack-ui-new/config': path.join(
        __dirname,
        '../../../packages/config/src/gluestack-ui.config'
      ),
    };

    config.resolve.alias = {
      ...config.resolve.alias,
      '@gluestack-ui-new/config': path.join(
        __dirname,
        '../../../packages/config/src/gluestack-ui.config'
      ),
    };
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    // Return the altered config
    return config;
  },
};
