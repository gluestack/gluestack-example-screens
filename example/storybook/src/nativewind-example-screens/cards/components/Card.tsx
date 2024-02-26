import React from 'react';
import { VStack } from '@/components/nativewind';

const Card = ({ children, ...props }: any) => {
  return (
    <VStack
      className="sm:p-4 md:p-6 rounded-xl border border-border200 bg-background-0"
      $base-p="$4"
      $xs-p="$6"
      hardShadow="5"
      {...props}
    >
      {children}
    </VStack>
  );
};

export default Card;
