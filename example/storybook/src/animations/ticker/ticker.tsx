import {
  Icon,
  VStack,
  styled,
  Center,
  Pressable,
  HStack,
} from '@gluestack-ui/themed';
import React from 'react';
import { AnimatedText } from '@gluestack-style/animation-resolver';
import { MinusIcon, PlusIcon } from 'lucide-react-native';

const StyledAnimatedText = styled(AnimatedText);

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
      $md-fontSize="$8xl"
      $base-fontSize="$7xl"
      fontFamily="$body"
      fontWeight="$bold"
      selectionColor="$background0"
      selectable={false}
      $base-minWidth="$6"
      $md-minWidth="$16"
      textAlign="center"
      $md-lineHeight="$7xl"
      {...props}
    >
      {children}
    </StyledAnimatedText>
  );
};

const Ticker = ({ h = '95vh', ...props }) => {
  const [animationState, setAnimationState] = React.useState({
    count: 100,
    operation: '',
  });
  const loopArray = animationState.count.toString().split('');

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
        justifyContent="space-between"
        $md-minWidth="$72"
        $base-minWidth="$48"
        alignItems="center"
      >
        <HStack overflow="hidden" justifyContent="flex-start" flexGrow={1}>
          {loopArray.map((item, key) => {
            // To add one more layer of uniqueness to animation key
            let iteratorKey = `${item}-${key}`;
            // To get the previous value and further use for exit animation
            let prevValue = 0;

            if (animationState.operation === '-') {
              prevValue = parseInt(loopArray[loopArray.length - 1]) + 1;
            } else {
              prevValue =
                parseInt(loopArray[loopArray.length - 1]) > 0
                  ? parseInt(loopArray[loopArray.length - 1]) - 1
                  : 0;
            }
            return (
              <VStack position="relative">
                {parseInt(loopArray[loopArray.length - 1]) === 9 ? (
                  <AnimatedTextComp
                    key={iteratorKey + 'previous-component'}
                    position="absolute"
                    sx={{
                      ':initial': { opacity: 1, y: 0 },
                      ':animate': {
                        opacity: 1,
                        y: animationState.operation === '-' ? 100 : -100,
                      },
                      ':transition': {
                        duration: 300,
                        delay: 0,
                        type: 'timing',
                      },
                      // To handle mis touch & text highlighting in web apps
                      '_web': {
                        WebkitTouchCallout: 'none',
                        WebkitUserSelect: 'none',
                        KhtmlUserSelect: 'none',
                        MozUserSelect: 'none',
                        msUserSelect: 'none',
                        userSelect: 'none',
                      },
                    }}
                  >
                    {animationState.operation === '-'
                      ? key === 0
                        ? animationState.count + 1
                        : ''
                      : key === loopArray.length - 1
                      ? prevValue
                      : ''}
                  </AnimatedTextComp>
                ) : loopArray.length - 1 === key ? (
                  <AnimatedTextComp
                    key={iteratorKey + 'previous-component'}
                    position="absolute"
                    sx={{
                      ':initial': { opacity: 1, y: 0 },
                      ':animate': {
                        opacity: 1,
                        y: animationState.operation === '-' ? 100 : -100,
                      },
                      ':transition': {
                        duration: 300,
                        delay: 0,
                        type: 'timing',
                      },
                      // To handle mis touch & text highlighting in web apps
                      '_web': {
                        WebkitTouchCallout: 'none',
                        WebkitUserSelect: 'none',
                        KhtmlUserSelect: 'none',
                        MozUserSelect: 'none',
                        msUserSelect: 'none',
                        userSelect: 'none',
                      },
                    }}
                  >
                    {prevValue}
                  </AnimatedTextComp>
                ) : null}
                <AnimatedTextComp
                  key={iteratorKey}
                  sx={{
                    ':initial': {
                      opacity: 0,
                      y: animationState.operation === '-' ? -50 : 50,
                    },
                    ':animate': { opacity: 1, y: 0 },
                    ':transition': {
                      duration: 300,
                      delay: 400,
                      type: 'timing',
                    },
                    // To handle mis touch & text highlighting in web apps
                    '_web': {
                      WebkitTouchCallout: 'none',
                      WebkitUserSelect: 'none',
                      KhtmlUserSelect: 'none',
                      MozUserSelect: 'none',
                      msUserSelect: 'none',
                      userSelect: 'none',
                    },
                  }}
                >
                  {item}
                </AnimatedTextComp>
              </VStack>
            );
          })}
        </HStack>
        <VStack space="md">
          <Pressable
            bg="$white"
            $md-w="$12"
            $base-w="$6"
            $base-h="$6"
            $md-h="$12"
            borderRadius="$full"
            hardShadow="5"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onPress={() =>
              setAnimationState((prev) => {
                return {
                  count: prev.count + 1,
                  operation: '+',
                };
              })
            }
          >
            <Icon as={PlusIcon} $md-size="md" $base-size="sm" color="$black" />
          </Pressable>
          <Pressable
            bg="$white"
            $md-w="$12"
            $base-w="$6"
            $base-h="$6"
            $md-h="$12"
            borderRadius="$full"
            hardShadow="5"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onPress={() =>
              setAnimationState((prev) => {
                return {
                  count: prev.count <= 0 ? 0 : prev.count - 1,
                  operation: '-',
                };
              })
            }
          >
            <Icon as={MinusIcon} $md-size="md" $base-size="sm" color="$black" />
          </Pressable>
        </VStack>
      </HStack>
    </AnimationLayout>
  );
};

export default Ticker;
