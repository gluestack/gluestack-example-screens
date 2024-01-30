import { createStyle } from '@gluestack-style/react';

export const MenuItem = createStyle({
  'p': '$3',
  'flexDirection': 'row',
  'alignItems': 'center',

  ':hover': {
    bg: '$background100',
  },

  ':disabled': {
    'opacity': 0.4,

    '_web': {
      cursor: 'not-allowed',
    },

    ':focus': {
      bg: 'transparent',
    },
  },

  ':active': {
    bg: '$background200',
  },

  ':focus': {
    bg: '$background100',
    // @ts-ignore
    outlineWidth: '$0',
    outlineStyle: 'none',
  },

  ':focusVisible': {
    // @ts-ignore
    outlineWidth: '$0.5',

    outlineColor: '$primary700',
    outlineStyle: 'solid',
  },

  '_web': {
    cursor: 'pointer',
  },
});
