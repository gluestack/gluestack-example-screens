import React from 'react';
import { styled } from '@gluestack-ui-new/themed';
import { AnimatedView } from '@gluestack-style/animation-resolver';

const AnimatedBox = styled(AnimatedView, {
  ':initial': {
    opacity: 0,
  },
  ':animate': {
    opacity: 1,
  },
  ':exit': {
    opacity: 0,
  },
});

export const SkeletonCircle = ({ size, ...props }: ISkeletonCircle) => {
  return (
    <AnimatedBox
      borderRadius="$full"
      bg="$background100"
      w={size}
      h={size}
      {...props}
    />
  );
};

export const SkeletonBox = ({ width, height, ...props }: ISkeletonBox) => {
  return (
    <AnimatedBox
      bg="$background100"
      w={width}
      h={height}
      borderRadius="$3xl"
      {...props}
    />
  );
};

type ISkeletonCircle = {
  size: React.ComponentProps<typeof AnimatedBox>['w'];
} & {
  [key: string]: any;
};

type ISkeletonBox = {
  width: React.ComponentProps<typeof AnimatedBox>['w'];
  height: React.ComponentProps<typeof AnimatedBox>['h'];
} & {
  [key: string]: any;
};
