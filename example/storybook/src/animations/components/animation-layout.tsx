import { Center } from '@gluestack-ui/themed';
import React from 'react';

const AnimationLayout = ({ children, ...props }) => {
  return (
    <Center
      w="$full"
      h="$full"
      bg="$background0"
      flex={1}
      p="$4"
      borderColor="$border200"
      borderWidth="$1"
      borderRadius="$md"
      {...props}
    >
      {children}
    </Center>
  );
};

export default AnimationLayout;
