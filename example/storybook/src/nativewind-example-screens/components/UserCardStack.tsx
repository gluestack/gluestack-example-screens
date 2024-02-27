import React from 'react';
import { VStack } from '@/components/nativewind';

const UserCardStack = ({ children, ...props }: any) => {
  return (
    <VStack className="flex-1" {...props}>
      {children}
    </VStack>
  );
};

export default UserCardStack;
