import React from 'react';
import { Box } from '@gluestack-ui-new/themed';

import { VStack } from '@gluestack-ui-new/themed';

const VStackReversed = ({ space, ...props }: any) => {
  return (
    <VStack space={space} mt="$5" {...props} reversed>
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$blue300' }} />
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$blue400' }} />
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$blue500' }} />
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$blue600' }} />
    </VStack>
  );
};

export default VStackReversed;
