import React from 'react';
import { createIcon } from '@gluestack-ui/themed';
import { Circle } from 'react-native-svg';

export const DotIcon = createIcon({
  viewBox: '0 0 7 7',
  path: (
    <>
      <Circle cx="3.5" cy="3.5" r="3.5" fill="currentColor" />
    </>
  ),
});
