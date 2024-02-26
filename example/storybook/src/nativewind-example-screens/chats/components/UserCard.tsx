import React from 'react';
import { HStack, VStack } from '@/components/nativewind';

const UserCard = ({ children, direction = 'row', ...props }: any) => {
  return direction === 'row' ? (
    <HStack className="w-full items-center" space="md" {...props}>
      {children}
    </HStack>
  ) : (
    <VStack className="w-full items-center" {...props}>
      {children}
    </VStack>
  );
};

export default UserCard;
