import React from 'react';
import { VStack } from '@gluestack-ui-new/themed';

const CardWrapper = ({ children, ...props }: any) => {
  return (
    <VStack
      p="$6"
      borderRadius="$xl"
      borderWidth="$1"
      borderColor="$border200"
      hardShadow="5"
      {...props}
    >
      {children}
    </VStack>
  );
};

export default CardWrapper;
