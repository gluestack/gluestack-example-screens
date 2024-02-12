import React from 'react';
import { HStack, VStack } from '@gluestack-ui-new/themed';
import { SkeletonCircle, SkeletonBox } from '../SkeletonComponent';

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
        <SkeletonBox width="$3/5" height="$5" borderRadius="$full" />
        <SkeletonBox width="$3/5" height="$5" borderRadius="$full" />
      </VStack>
      <HStack bg="$white" p="$4" borderRadius="$md" gap="$4">
        <SkeletonCircle size="$6" borderRadius="$full" />
        <SkeletonBox width="$3/5" height="$5" borderRadius="$full" />
      </HStack>
      <HStack bg="$white" p="$4" borderRadius="$md" gap="$4">
        <SkeletonCircle size="$6" borderRadius="$full" />
        <SkeletonBox width="$3/5" height="$5" borderRadius="$full" />
      </HStack>
    </VStack>
  );
};

export default Skeleton;
