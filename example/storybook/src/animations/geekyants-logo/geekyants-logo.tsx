import { styled, Center, HStack, useMediaQuery } from '@gluestack-ui/themed';
import React from 'react';
import { AnimatedView } from '@gluestack-style/animation-resolver';

const StyledAnimatedView = styled(AnimatedView);

const AnimationLayout = ({ children, ...props }: any) => {
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
const AnimatedShape = ({ children, ...props }: any) => {
  return (
    <StyledAnimatedView
      bg="red"
      $md-w="$96"
      $base-w="$64"
      $base-h="$64"
      $md-h="$96"
      borderRadius="$full"
      {...props}
    >
      {children}
    </StyledAnimatedView>
  );
};

const GeekyantsLogo = ({ h = '95vh', ...props }) => {
  const [isSmallScreen] = useMediaQuery({ maxWidth: 765 });

  return (
    <AnimationLayout
      {...props}
      sx={{
        _web: {
          minHeight: h,
        },
      }}
      justifyContent="flex-start"
    >
      <HStack w="$full" justifyContent="center">
        <AnimatedShape
          overflow="hidden"
          position="relative"
          sx={{
            ':initial': {
              scale: 0,
            },
            ':animate': {
              scale: 1,
            },
            ':transition': {
              type: 'spring',
              damping: 6.5,
              stiffness: 120,
              mass: 0.3,
            },
          }}
          hardShadow={5}
        >
          <AnimatedShape
            $md-w="$16"
            $base-w="$8"
            $md-h="$16"
            $base-h="$8"
            bg="$white"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            sx={{
              ':initial': {
                opacity: 0,
                x: -3040,
                y: 200,
              },
              ':animate': {
                opacity: 1,
                x: isSmallScreen ? 65 : 80,
                y: 80,
              },
              ':transition': {
                type: 'spring',
                damping: 8,
                stiffness: 35,
                mass: 1,
              },
            }}
          />
          <AnimatedShape
            $md-w="$16"
            $base-w="$8"
            $md-h="$16"
            $base-h="$8"
            bg="$white"
            position="absolute"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              ':initial': {
                opacity: 0,
                x: 4000,
                y: 0,
              },
              ':animate': {
                opacity: 1,
                x: isSmallScreen ? 160 : 240,
                y: 80,
              },
              ':transition': {
                type: 'spring',
                damping: 8,
                stiffness: 35,
                mass: 1,
              },
            }}
          />

          <AnimatedShape
            $md-w="$32"
            $base-w="$16"
            $md-h="$5"
            $base-h="$2.5"
            borderRadius="$lg"
            bg="$white"
            position="absolute"
            sx={{
              ':initial': {
                opacity: 0,
                x: 100,
                y: 200,
                rotateZ: '240deg',
              },
              ':animate': {
                opacity: 1,
                x: isSmallScreen ? 60 : 80,
                y: isSmallScreen ? 120 : 160,
                rotateZ: '240deg',
              },
              ':transition': {
                type: 'timing',
                duration: 800,
                delay: 800,
              },
            }}
          />
          <AnimatedShape
            $md-w="$32"
            $base-w="$16"
            $md-h="$5"
            $base-h="$2.5"
            borderRadius="$lg"
            bg="$white"
            position="absolute"
            sx={{
              ':initial': {
                opacity: 0,
                x: 170,
                y: 200,
                rotateZ: '110deg',
              },
              ':animate': {
                opacity: 1,
                x: isSmallScreen ? 130 : 180,
                y: isSmallScreen ? 120 : 160,
                rotateZ: '110deg',
              },
              ':transition': {
                type: 'timing',
                duration: 800,
                delay: 800,
              },
            }}
          />
          <AnimatedShape
            $md-w="$40"
            $base-w="$24"
            $md-h="$40"
            $base-h="$24"
            bg="$white"
            position="absolute"
            sx={{
              ':initial': {
                scale: 0.5,
                opacity: 0,
                x: 120,
                y: 180,
              },
              ':animate': {
                scale: 1,
                opacity: 1,
                x: isSmallScreen ? 85 : 120,
                y: isSmallScreen ? 135 : 180,
              },
              ':transition': {
                type: 'timing',
                duration: 500,
              },
            }}
          />
          <AnimatedShape
            $md-w="$32"
            $base-w="$20"
            $md-h="$32"
            $base-h="$20"
            bg="$white"
            position="absolute"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              ':initial': {
                scale: 0.5,
                x: 1100,
                y: 700,
              },
              ':animate': {
                scale: 1,
                x: isSmallScreen ? 100 : 140,
                y: isSmallScreen ? 220 : 320,
              },
              ':transition': {
                type: 'spring',
                damping: 8,
                stiffness: 35,
                mass: 1,
              },
            }}
          />
        </AnimatedShape>
      </HStack>
    </AnimationLayout>
  );
};

export default GeekyantsLogo;
