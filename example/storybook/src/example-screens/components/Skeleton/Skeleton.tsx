import React from 'react';
import { HStack, VStack } from '@gluestack-ui-new/themed';
import { SkeletonBox, SkeletonCircle } from '../SkeletonComponent';

const Skeleton = ({ ...props }) => {
  return (
    <VStack
      borderRadius="$md"
      gap="$4"
      p="$4"
      h="$1/3"
      w="$1/3"
      bg="$background100"
      {...props}
    >
      <VStack bg="$white" p="$4" borderRadius="$md" gap="$4">
        <SkeletonBox />
        <SkeletonBox />
      </VStack>
      <HStack bg="$white" p="$4" borderRadius="$md" gap="$4">
        <SkeletonCircle />
        <SkeletonBox />
      </HStack>
      <HStack bg="$white" p="$4" borderRadius="$md" gap="$4">
        <SkeletonCircle />
        <SkeletonBox />
      </HStack>
    </VStack>
  );
};

export default Skeleton;
