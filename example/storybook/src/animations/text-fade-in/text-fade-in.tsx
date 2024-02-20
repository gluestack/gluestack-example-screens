import { styled, Center, HStack } from '@gluestack-ui/themed';
import React from 'react';
import {
  AnimatedText,
  AnimatePresence,
} from '@gluestack-style/animation-resolver';

const StyledAnimatedText = styled(AnimatedText);

const words =
  'gluestack-ui can work with Zero JavaScript when combined with Next’s SSR & SSG. gluestack-ui comes packed with a babel-plugin that brings the runtime token interpolation to zero and reduces the hydration resulting in faster runtime. We aim to reduce it further, maybe with bundler plugins in the future.';

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

const AnimatedTextComp = ({ children, ...props }) => {
  return (
    <StyledAnimatedText
      $md-fontSize="$xl"
      $base-fontSize="$md"
      fontFamily="$body"
      fontWeight="$bold"
      selectionColor="$background0"
      selectable={false}
      {...props}
    >
      {children}
    </StyledAnimatedText>
  );
};

const TextFadeIn = ({ h = '95vh', ...props }) => {
  const wordsArray = words.toString().split(' ');
  return (
    <AnimationLayout
      {...props}
      sx={{
        _web: {
          minHeight: h,
        },
      }}
    >
      <HStack
        $base-w="$full"
        $md-w="$3/5"
        $lg-w="$1/2"
        flexWrap="wrap"
        gap="$2"
      >
        <AnimatePresence>
          {wordsArray.map((item, key) => {
            return (
              <AnimatedTextComp
                key={item + key}
                exit={{
                  opacity: 0,
                }}
                sx={{
                  ':initial': { opacity: 0 },
                  ':animate': { opacity: 1 },
                  ':transition': {
                    duration: 2000,
                    delay: key * 100,
                    type: 'timing',
                  },
                }}
              >
                {item}
              </AnimatedTextComp>
            );
          })}
        </AnimatePresence>
      </HStack>
    </AnimationLayout>
  );
};

export default TextFadeIn;
