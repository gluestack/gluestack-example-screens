import React from 'react';
import {
  Box,
  Divider,
  VStack,
  Text,
  HStack,
  Pressable,
} from '@gluestack-ui/themed';
import Cards from '../../cards/cards';

const screenSizes = [
  {
    value: 'mobile',
    label: 'Mobile',
    size: 375,
  },
  {
    value: 'tablet',
    label: 'Tablet',
    size: 768,
  },
  {
    value: 'laptop',
    label: 'Laptop',
    size: 1440,
  },
];

const ResponsiveFold = () => {
  const [activeTab, setActiveTab] = React.useState('mobile');
  // const [isMobile] = useMediaQuery({ maxWidth: 375 });

  return (
    <Box w="$full">
      {/* tabs section */}
      <HStack space="2xl">
        {screenSizes.map((size) => (
          <Pressable>
            <VStack key={size.value}>
              <Pressable
                key={size.value}
                onPress={() => {
                  setActiveTab(size.value);
                }}
              >
                <Text mb="$1.5">{size.label}</Text>
              </Pressable>
              <Divider
                display={activeTab === size.value ? 'flex' : 'none'}
                backgroundColor="$text200"
                h="$0.5"
              />
            </VStack>
          </Pressable>
        ))}
      </HStack>
      <Box>
        {screenSizes.map((size) => (
          <Box
            key={size.value}
            maxWidth={size.size}
            my="$6"
            display={activeTab === size.value ? 'flex' : 'none'}
          >
            {/* responsive example screen */}
            <Cards />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ResponsiveFold;
