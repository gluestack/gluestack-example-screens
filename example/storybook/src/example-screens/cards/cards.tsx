import { Text, Box } from '@gluestack-ui-new/themed';
import React from 'react';

const Cards: any = ({ bg = 'red500', w = '100', h = '100', ...props }: any) => {
  return (
    <Box
      {...props}
      bg={`$${bg}`}
      h={h}
      w={w}
      justifyContent="center"
      alignItems="center"
    >
      <Text color="white" fontWeight="$bold">
        Cards
      </Text>
    </Box>
  );
};

export default Cards;

export { Text, Box };
