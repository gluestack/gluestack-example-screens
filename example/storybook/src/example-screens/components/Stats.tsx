import React from 'react';
import { HStack } from '@gluestack-ui-new/themed';

const Stats = ({ children, ...props }: any) => {
  return (
    <HStack
      width="$full"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      {children}
    </HStack>
  );
};

export default Stats;
