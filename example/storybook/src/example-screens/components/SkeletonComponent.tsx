import React from 'react';
import { Box } from '@gluestack-ui-new/themed';

export const SkeletonCircle = () => {
  return <Box borderRadius="$full" bg="$background100" w="$5" h="$5" />;
};

export const SkeletonBox = () => {
  return <Box borderRadius="$full" bg="$background100" w="$3/5" h="$5" />;
};
