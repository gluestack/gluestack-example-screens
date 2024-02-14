import {
  CloseIcon,
  Icon,
  VStack,
  styled,
  MenuIcon,
  Center,
} from '@gluestack-ui/themed';
import React from 'react';
import {
  AnimatedView,
  AnimatedPressable,
  AnimatePresence,
} from '@gluestack-style/animation-resolver';
import { subAnimations } from './constants';

const MainAnimator = styled(AnimatedPressable, {
  ':initial': { opacity: 0, scale: 0 },
  ':animate': { opacity: 1, scale: 1 },
  ':exit': { opacity: 0, scale: 0 },
  ':transition': {
    duration: 100,
  },
});
const SubAnimator = styled(AnimatedView);

const AnimationLayout = ({ children, ...props }) => {
  return (
    <Center w="$full" h="$full" bg="$background0" flex={1} p="$4" {...props}>
      {children}
    </Center>
  );
};

const SubComp = ({ children, ...props }) => {
  return (
    <SubAnimator
      w="$12"
      h="$12"
      borderRadius="$full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      {children}
    </SubAnimator>
  );
};

const Stagger = ({ w = '100vw', h = '95vh', ...props }) => {
  const [showComp, setShowComp] = React.useState(false);
  return (
    <AnimationLayout {...props} minHeight={h} w={w}>
      <VStack gap="$4" minHeight="$96" justifyContent="flex-end">
        {subAnimations.map((item, key) => (
          <AnimatePresence key={key}>
            {showComp && (
              <SubComp
                key={key}
                exit={item.exit}
                bg="$black"
                sx={{
                  ':initial': item.initial,
                  ':animate': item.animate,
                  ':transition': item.transition,
                }}
              >
                {<Icon as={item.icon} size="md" color="$white" />}
              </SubComp>
            )}
          </AnimatePresence>
        ))}
        <MainAnimator
          bg="$white"
          w="$12"
          h="$12"
          borderRadius="$full"
          hardShadow="5"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onPress={() => setShowComp((prev) => !prev)}
        >
          {showComp ? (
            <Icon as={CloseIcon} size="md" color="$black" />
          ) : (
            <Icon as={MenuIcon} size="md" color="$black" />
          )}
        </MainAnimator>
      </VStack>
    </AnimationLayout>
  );
};

export default Stagger;
