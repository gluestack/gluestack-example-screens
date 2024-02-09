import { Box, Center, Text } from '@gluestack-ui/themed';
import React from 'react';
export type ViewType =
  | 'profile'
  | 'account'
  | 'appearance'
  | 'notifications'
  | 'display';
export const ProfileView = () => {
  return (
    <Center px="$4" flex={1}>
      <Box
        borderWidth="$1"
        borderRadius="$3xl"
        alignSelf="center"
        borderColor="$border200"
        w="$full"
        minHeight="$96"
      >
        <Text
          textAlign="center"
          fontSize="$lg"
          color="$background950"
          my="auto"
          p="$4"
        >
          Profile
        </Text>
      </Box>
    </Center>
  );
};
export const AccountView = () => {
  return (
    <Center px="$4" flex={1}>
      <Box
        borderWidth="$1"
        borderRadius="$3xl"
        alignSelf="center"
        borderColor="$border200"
        w="$full"
        minHeight="$96"
      >
        <Text
          textAlign="center"
          fontSize="$lg"
          color="$background950"
          my="auto"
          p="$4"
        >
          Account
        </Text>
      </Box>
    </Center>
  );
};
export const AppearanceView = () => {
  return (
    <Center px="$4" flex={1}>
      <Box
        borderWidth="$1"
        borderRadius="$3xl"
        alignSelf="center"
        borderColor="$border200"
        w="$full"
        minHeight="$96"
      >
        <Text
          textAlign="center"
          fontSize="$lg"
          color="$background950"
          my="auto"
          p="$4"
        >
          Appearance
        </Text>
      </Box>
    </Center>
  );
};
export const NotificationsView = () => {
  return (
    <Center px="$4" flex={1}>
      <Box
        borderWidth="$1"
        borderRadius="$3xl"
        alignSelf="center"
        borderColor="$border200"
        w="$full"
        minHeight="$96"
      >
        <Text
          textAlign="center"
          fontSize="$lg"
          color="$background950"
          my="auto"
          p="$4"
        >
          Notifications
        </Text>
      </Box>
    </Center>
  );
};
export const DisplayView = () => {
  return (
    <Center px="$4" flex={1}>
      <Box
        borderWidth="$1"
        borderRadius="$3xl"
        alignSelf="center"
        borderColor="$border200"
        w="$full"
        minHeight="$96"
      >
        <Text
          textAlign="center"
          fontSize="$lg"
          color="$background950"
          my="auto"
          p="$4"
        >
          Display
        </Text>
      </Box>
    </Center>
  );
};
