import React from 'react';
import { Box } from '@gluestack-ui-new/themed';
import PropTypes from 'prop-types';

const SkeletonCircle = ({ size, borderRadius }) => {
  return (
    <Box borderRadius={borderRadius} bg="$background100" w={size} h={size} />
  );
};

const SkeletonBox = ({ width, height, borderRadius }) => {
  return (
    <Box bg="$background100" w={width} h={height} borderRadius={borderRadius} />
  );
};

const SkeletonComp = ({ type, dimensions, borderRadius, ...props }) => {
  let SkeletonComponent;

  switch (type) {
    case 'circle':
      SkeletonComponent = SkeletonCircle;
      break;
    case 'box':
      SkeletonComponent = SkeletonBox;
      break;
    default:
      SkeletonComponent = SkeletonBox;
  }

  return (
    <SkeletonComponent borderRadius={borderRadius} {...dimensions} {...props} />
  );
};

SkeletonComp.propTypes = {
  type: PropTypes.oneOf(['circle', 'box']),
  dimensions: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    size: PropTypes.string, // Required if type is 'circle'
  }).isRequired,
  borderRadius: PropTypes.string, // Optional border radius
};

SkeletonComp.defaultProps = {
  type: 'box',
  dimensions: {
    width: '$3/5',
    height: '$5',
    size: '$5', // Default size for circle
  },
  borderRadius: '$full', // Default border radius
};

export default SkeletonComp;
