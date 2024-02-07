import React from 'react';
import { VStack } from '@gluestack-ui-new/themed';

const Card = ({ children, ...props }: any) => {
  return (
    <VStack
      $base-p="$4"
      $xs-p="$6"
      borderRadius="$xl"
      borderWidth="$1"
      borderColor="$border200"
      hardShadow="5"
      backgroundColor="$background0"
      {...props}
    >
      {children}
    </VStack>
  );
};

export default Card;
