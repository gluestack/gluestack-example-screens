import {
  Icon,
  VStack,
  styled,
  Center,
  Pressable,
  HStack,
  useMediaQuery,
} from '@gluestack-ui/themed';
import React from 'react';
import {
  AnimatedText,
  AnimatePresence,
} from '@gluestack-style/animation-resolver';
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
      position="absolute"
      left={-0}
      {...props}
    >
      {children}
    </StyledAnimatedText>
  );
};

const Ticker = ({ h = '95vh', ...props }) => {
  const [count, setCount] = React.useState(100);
  const countRef = React.useRef(count);
  const [isSmallScreen] = useMediaQuery({ maxWidth: 765 });
  const countArray = count.toString().split('');

  return (
    <AnimationLayout
      {...props}
      sx={{
        _web: {
          minHeight: h,
        },
      }}
    >
      <HStack $md-minWidth="$72" $base-minWidth="$40" space="3xl">
        <VStack justifyContent="space-between" $base-py="$4" $md-py="$0">
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
              setCount((prev) => {
                countRef.current = prev;
                return prev + 1;
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
              setCount((prev) => {
                countRef.current = prev;
                return prev - 1;
              })
            }
          >
            <Icon as={MinusIcon} $md-size="md" $base-size="sm" color="$black" />
          </Pressable>
        </VStack>
        <HStack
          w="$full"
          justifyContent="center"
          overflow="hidden"
          $md-minHeight="$32"
          $base-minHeight="$24"
          alignItems="center"
          position="relative"
        >
          <AnimatePresence>
            {countArray.map((item, key) => {
              return (
                <AnimatedTextComp
                  key={item + key}
                  exit={{
                    opacity: 0,
                    y: countRef.current < count ? 100 : -100,
                  }}
                  sx={{
                    ':initial': {
                      opacity: 0,
                      y: countRef.current < count ? -100 : 100,
                      x: isSmallScreen ? key * 50 : key * 100,
                    },
                    ':animate': {
                      opacity: 1,
                      y: 0,
                      x: isSmallScreen ? key * 50 : key * 100,
                    },
                    ':transition': {
                      duration: 300,
                      delay: 100,
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
              );
            })}
          </AnimatePresence>
        </HStack>
      </HStack>
    </AnimationLayout>
  );
};

export default Ticker;
