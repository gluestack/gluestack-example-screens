import React from 'react';
import { HStack, VStack } from '@gluestack-ui-new/themed';
import { SkeletonCircle, SkeletonBox } from '../SkeletonComponent';

const Skeleton = ({ ...props }) => {
  return (
    <VStack
      borderRadius="$md"
      gap="$4"
      p="$4"
      h="$full"
      sx={{
        '@lg': { w: '$1/3' },
        '@md': { w: '$1/2' },
        '@base': { w: '$full' },
      }}
      bg="$background100"
      {...props}
    >
      <VStack bg="$white" p="$4" borderRadius="$md" gap="$4">
        <SkeletonBox width="$3/5" height="$5" />
        <SkeletonBox width="$3/5" height="$5" />
      </VStack>
      <HStack bg="$white" p="$4" borderRadius="$md" gap="$4">
        <SkeletonCircle size="$6" />
        <SkeletonBox width="$3/5" height="$5" />
      </HStack>
      <HStack bg="$white" p="$4" borderRadius="$md" gap="$4">
        <SkeletonCircle size="$6" />
        <SkeletonBox width="$3/5" height="$5" />
      </HStack>
    </VStack>
  );
};

export default Skeleton;
