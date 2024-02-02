import React from 'react';
import { VStack } from '@gluestack-ui-new/themed';

const UserCardStack = ({ children, ...props }: any) => {
  return (
    <VStack flex={1} {...props}>
      {children}
    </VStack>
  );
};

export default UserCardStack;
