import React from 'react';
import { Divider } from '@gluestack-ui/themed';

const StatsDivider = ({ ...props }: any) => {
  return (
    <Divider
      w="$px"
      mx="$2.5"
      bg="$trueGray300"
      orientation="vertical"
      {...props}
    />
  );
};

export default StatsDivider;
