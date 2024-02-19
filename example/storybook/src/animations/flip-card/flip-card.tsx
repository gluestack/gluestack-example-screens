import {
  VStack,
  styled,
  Center,
  Text,
  HStack,
  Icon,
  ProgressFilledTrack,
  Progress,
  useMediaQuery,
} from '@gluestack-ui/themed';
import React from 'react';
import {
  AnimatedPressable,
  AnimatePresence,
} from '@gluestack-style/animation-resolver';
import { cardGoals } from './constants';

const StyledAnimatedPressable = styled(AnimatedPressable);

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

const AnimatedPressableComp = ({ children, ...props }) => {
  return (
    <StyledAnimatedPressable
      $md-minWidth="$96"
      $xs-minWidth="$64"
      $base-minWidth="$56"
      $md-minHeight="$40"
      $base-minHeight="$24"
      borderRadius="$xl"
      borderColor="$border200"
      borderWidth="$1"
      p="$2"
      {...props}
    >
      {children}
    </StyledAnimatedPressable>
  );
};
const AnimatedCard = ({
  top,
  icon,
  totalValue,
  savedValue,
  progressValue,
  title,
}: {
  top: number;
  icon: any;
  totalValue: string;
  savedValue: string;
  progressValue: number;
  title: string;
}) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  return (
    <AnimatePresence>
      {isVisible && (
        <AnimatedPressableComp
          bg="$purple800"
          position="absolute"
          zIndex={1}
          top={top}
          onPress={() => setIsVisible((prev) => !prev)}
          exit={{
            opacity: 0,
            rotateY: '-90deg',
            rotateZ: '2deg',
          }}
          sx={{
            ':initial': {
              opacity: 0,
              rotateY: '90deg',
              rotateZ: '-2deg',
            },
            ':animate': {
              opacity: 1,
              rotateY: '0deg',
              rotateZ: '0deg',
            },
            ':transition': {
              duration: 400,
              type: 'timing',
              ease: 'ease-out',
            },
          }}
        >
          <HStack
            justifyContent="space-between"
            alignItems="center"
            px="$2"
            my="auto"
          >
            <VStack>
              <Text
                fontFamily="$heading"
                $md-fontSize="$md"
                $base-fontSize="$xs"
                textAlign="center"
                fontWeight="$bold"
                color="$text200"
              >
                ${savedValue}
              </Text>
              <Text
                fontFamily="$heading"
                $md-fontSize="$md"
                $base-fontSize="$xs"
                textAlign="center"
                fontWeight="$normal"
                color="$text400"
              >
                saved
              </Text>
            </VStack>
            <VStack w="$1/2" space="sm">
              <Text
                fontFamily="$heading"
                $md-fontSize="$md"
                $base-fontSize="$xs"
                textAlign="center"
                fontWeight="$bold"
                color="$pink500"
              >
                {progressValue}%
              </Text>
              <Progress
                value={progressValue}
                w="$full"
                $md-size="sm"
                $base-size="xs"
              >
                <ProgressFilledTrack bg="$pink500" />
              </Progress>
            </VStack>
            <VStack>
              <Text
                fontFamily="$heading"
                $md-fontSize="$md"
                $base-fontSize="$xs"
                textAlign="center"
                fontWeight="$bold"
                color="$text200"
              >
                ${totalValue}
              </Text>
              <Text
                fontFamily="$heading"
                $md-fontSize="$md"
                $base-fontSize="$xs"
                textAlign="center"
                fontWeight="$normal"
                color="$text400"
              >
                Goal
              </Text>
            </VStack>
          </HStack>
        </AnimatedPressableComp>
      )}
      {!isVisible && (
        <AnimatedPressableComp
          borderRadius="$xl"
          borderColor="$border200"
          borderWidth="$1"
          position="absolute"
          top={top}
          p="$2"
          onPress={() => setIsVisible((prev) => !prev)}
          exit={{
            scale: 0.9,
            rotateY: '-15deg',
          }}
          sx={{
            ':initial': {
              scale: 0.9,
              rotateY: '15deg',
            },
            ':animate': {
              scale: 1,
              rotateY: '0deg',
            },
            ':transition': {
              duration: 400,
              type: 'timing',
              ease: 'ease-out',
            },
          }}
        >
          <HStack
            my="auto"
            alignItems="center"
            justifyContent="space-between"
            px="$2"
          >
            <Icon as={icon} $md-size="md" $base-size="sm" color="$black" />
            <Text
              fontFamily="$heading"
              $md-fontSize="$md"
              $base-fontSize="$xs"
              textAlign="center"
              fontWeight="$bold"
            >
              {title}
            </Text>
            <VStack>
              <Text
                fontFamily="$heading"
                $md-fontSize="$md"
                $base-fontSize="$xs"
                textAlign="center"
                fontWeight="$bold"
              >
                ${savedValue}
              </Text>
              <Text
                fontFamily="$heading"
                $md-fontSize="$md"
                $base-fontSize="$xs"
                textAlign="center"
                fontWeight="$normal"
                color="$text600"
              >
                saved
              </Text>
            </VStack>
          </HStack>
        </AnimatedPressableComp>
      )}
    </AnimatePresence>
  );
};
const FlipCard = ({ h = '95vh', ...props }) => {
  const [isSmallScreen] = useMediaQuery({ maxWidth: 444 });
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
      <VStack
        py="$4"
        sx={{
          _web: {
            minHeight: h,
            maxHeight: h,
          },
        }}
        position="relative"
        $xl-w="$1/3"
        $md-w="$3/5"
        $base-w="$full"
        overflow="scroll"
        alignItems="center"
      >
        {cardGoals.map((item, i) => (
          <AnimatedCard
            key={i}
            top={isSmallScreen ? i * 110 : i * 180}
            icon={item.icon}
            progressValue={item.progressValue}
            savedValue={item.savedValue}
            title={item.title}
            totalValue={item.totalValue}
          />
        ))}
      </VStack>
    </AnimationLayout>
  );
};

export default FlipCard;
