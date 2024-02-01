import React from 'react';
import { HStack, VStack } from '@gluestack-ui-new/themed';

const UserCard = ({ children, direction = 'row', ...props }: any) => {
  return direction === 'row' ? (
    <HStack
      w="$full"
      alignItems="center"
      justifyContent="space-between"
      space="md"
      {...props}
    >
      {children}
    </HStack>
  ) : (
    <VStack w="$full" alignItems="center">
      {children}
    </VStack>
  );
};

export default UserCard;
