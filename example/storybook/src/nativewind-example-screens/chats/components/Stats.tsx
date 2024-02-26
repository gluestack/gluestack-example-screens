import React from 'react';
import { HStack } from '@/components/nativewind';

const Stats = ({ children, ...props }: any) => {
  return (
    <HStack className="w-full items-center justify-center" {...props}>
      {children}
    </HStack>
  );
};

export default Stats;
