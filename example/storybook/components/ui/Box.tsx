import React from 'react';
import { View } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils';

const boxStyle = tva({});
const Box = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <View ref={ref} className={boxStyle({ class: className })} {...props} />
  );
});

Box.displayName = 'Box';
export { Box };
