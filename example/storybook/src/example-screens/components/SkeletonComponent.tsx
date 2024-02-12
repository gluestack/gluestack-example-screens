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

export const SkeletonCircle = ({ size, borderRadius, ...props }) => {
  return (
    <AnimatedBox
      borderRadius={borderRadius}
      bg="$background100"
      w={size}
      h={size}
      {...props}
    />
  );
};

export const SkeletonBox = ({ width, height, borderRadius, ...props }) => {
  return (
    <AnimatedBox
      bg="$background100"
      w={width}
      h={height}
      borderRadius={borderRadius}
      {...props}
    />
  );
};

SkeletonCircle.propTypes = {
  size: PropTypes.string.isRequired,
  borderRadius: PropTypes.string,
};

SkeletonCircle.defaultProps = {
  borderRadius: '$full',
};

SkeletonBox.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  borderRadius: PropTypes.string,
};

SkeletonBox.defaultProps = {
  borderRadius: '$full',
};
