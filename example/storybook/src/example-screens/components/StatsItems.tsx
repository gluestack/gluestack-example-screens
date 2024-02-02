import React from 'react';
import { VStack } from '@gluestack-ui/themed';

const StatsItems = ({ children, ...props }: any) => {
  return (
    <VStack flex={1} alignItems="center" space="xs" {...props}>
      {children}
    </VStack>
  );
};

export default StatsItems;
