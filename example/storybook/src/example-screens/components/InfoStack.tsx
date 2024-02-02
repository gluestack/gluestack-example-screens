import React from 'react';
import { HStack, VStack, Text, Divider } from '@gluestack-ui-new/themed';

const InfoStack = ({ stackData, ...props }: any) => {
  return (
    <HStack
      width="$full"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      {stackData?.map((item: any, index: number) => (
        <>
          <VStack flex={1} alignItems="center" space="xs">
            <Text fontSize="$sm" color="$text900" fontWeight="$bold">
              {item?.value}
            </Text>
            <Text
              fontFamily="$body"
              fontSize="$xs"
              color="$text900"
              fontWeight="$normal"
            >
              {item?.label}
            </Text>
          </VStack>
          {index < stackData.length - 1 && (
            <Divider
              mx="$2.5"
              h="$10"
              bg="$trueGray300"
              w="$px"
              orientation="vertical"
            />
          )}
        </>
      ))}
    </HStack>
  );
};

export default InfoStack;
