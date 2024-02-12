import React from 'react';
import { HStack, VStack } from '@gluestack-ui-new/themed';
import SkeletonComp from '../SkeletonComponent';

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
        <SkeletonComp
          type="box"
          dimensions={undefined}
          borderRadius={undefined}
        />

        <SkeletonComp
          type="box"
          dimensions={undefined}
          borderRadius={undefined}
        />
      </VStack>
      <HStack bg="$white" p="$4" borderRadius="$md" gap="$4">
        <SkeletonComp
          type="circle"
          dimensions={undefined}
          borderRadius={undefined}
        />

        <SkeletonComp
          type="box"
          dimensions={undefined}
          borderRadius={undefined}
        />
      </HStack>
      <HStack bg="$white" p="$4" borderRadius="$md" gap="$4">
        <SkeletonComp
          type="circle"
          dimensions={undefined}
          borderRadius={undefined}
        />

        <SkeletonComp
          type="box"
          dimensions={undefined}
          borderRadius={undefined}
        />
      </HStack>
    </VStack>
  );
};

export default Skeleton;
