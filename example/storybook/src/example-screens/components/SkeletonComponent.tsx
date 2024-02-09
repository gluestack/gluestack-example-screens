import React from 'react';
import { Box } from '@gluestack-ui-new/themed';

const SkeletonComponent = ({ type, ...props }) => {
  if (type === 'circle') {
    return (
      <Box borderRadius="$full" bg="$background100" w="$5" h="$5" {...props} />
    );
  }

  if (type === 'bar') {
    return (
      <Box
        borderRadius="$full"
        bg="$background100"
        w="$3/5"
        h="$5"
        {...props}
      />
    );
  }
};

export default SkeletonComponent;
