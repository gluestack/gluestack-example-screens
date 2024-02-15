import {
  CloseIcon,
  Icon,
  VStack,
  styled,
  MenuIcon,
  Center,
  Pressable,
} from '@gluestack-ui/themed';
import React from 'react';
import {
  AnimatedView,
  AnimatePresence,
} from '@gluestack-style/animation-resolver';
import { animationValues } from './constants';

const StyledAnimatedView = styled(AnimatedView);

const AnimationLayout = ({ children, ...props }) => {
  return (
    <Center
      w="$full"
      h="$full"
      bg="$background0"
      flex={1}
      p="$4"
      borderColor="$border200"
      borderWidth="$1"
      borderRadius="$md"
      {...props}
    >
      {children}
    </Center>
  );
};

const AnimatedCircle = ({ children, ...props }) => {
  return (
    <StyledAnimatedView
      w="$12"
      h="$12"
      borderRadius="$full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      hardShadow="5"
      bg="$black"
      {...props}
    >
      {children}
    </StyledAnimatedView>
  );
};

const Stagger = ({ h = '95vh', ...props }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <AnimationLayout
      {...props}
      sx={{
        _web: {
          minHeight: h,
        },
      }}
    >
      <VStack minHeight="$80" position="relative" minWidth="$12">
        <VStack gap="$4" flexGrow={1}>
          {animationValues.map((item, key) => (
            <AnimatePresence key={key}>
              {isVisible && (
                <AnimatedCircle
                  key={key}
                  exit={item.exit}
                  sx={{
                    ':initial': item.initial,
                    ':animate': item.animate,
                    ':transition': item.transition,
                  }}
                >
                  {<Icon as={item.icon} size="md" color="$white" />}
                </AnimatedCircle>
              )}
            </AnimatePresence>
          ))}
        </VStack>
        <Pressable
          mt="$4"
          bg="$white"
          w="$12"
          h="$12"
          borderRadius="$full"
          hardShadow="5"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onPress={() => setIsVisible((prev) => !prev)}
          position="absolute"
          bottom={0}
        >
          {isVisible ? (
            <Icon as={CloseIcon} size="md" color="$black" />
          ) : (
            <Icon as={MenuIcon} size="md" color="$black" />
          )}
        </Pressable>
      </VStack>
    </AnimationLayout>
  );
};

export default Stagger;
