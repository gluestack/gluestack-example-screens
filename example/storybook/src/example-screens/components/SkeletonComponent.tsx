import React from 'react';
import { styled } from '@gluestack-ui-new/themed';
import PropTypes from 'prop-types';
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

export const SkeletonCircle = ({ size, ...props }) => {
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

export const SkeletonBox = ({ width, height, ...props }) => {
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

SkeletonCircle.propTypes = {
  size: PropTypes.string.isRequired,
};

SkeletonBox.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
