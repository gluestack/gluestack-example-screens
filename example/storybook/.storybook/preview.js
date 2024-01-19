import { addParameters } from '@storybook/client-api';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { useDarkMode } from 'storybook-dark-mode';
import { config } from '@gluestack-ui-new/config';
import { Center, GluestackUIProvider } from '@gluestack-ui-new/themed';
import gstheme from './gstheme';
import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: '',
      order: [
        'Overview',
        ['Introduction'],
        'Design Tokens',
        [
          'Colors',
          'Typography',
          'Space',
          'Opacity',
          'Breakpoints',
          'Borders',
          'Radii',
          'Shadows',
        ],
        'components',
        'example-screens',
        [('PRIMITIVES', 'COMPOSITES', 'CUSTOM')],
      ],
    },
  },
};

export const decorators = [
  (Story) => {
    const theme = useDarkMode() ? 'dark' : 'light';
    return (
      <GluestackUIProvider config={config} colorMode={theme}>
        <Center>
          <Story />
        </Center>
      </GluestackUIProvider>
    );
  },
];

addParameters({
  docs: {
    theme: gstheme,
    inlineStories: false,
    container: ({ children, context }) => {
      return <DocsContainer context={context}>{children}</DocsContainer>;
    },
  },
  darkMode: {
    current: 'light',
    light: {
      ...themes.light,
      brandTitle: 'Gluestack Design System',
      brandUrl: '/',
      brandImage: '/images/logo-light.png',
    },
    dark: {
      ...themes.dark,
      brandTitle: 'Gluestack Design System',
      brandUrl: '/',
      brandImage: '/images/logo-dark.png',
    },
  },
});
