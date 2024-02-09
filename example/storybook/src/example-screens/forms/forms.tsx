import { Box, Divider, HStack, Text, VStack } from '@gluestack-ui-new/themed';
import React from 'react';
import Sidebar from '../components/Sidebar';
import { sidebarItems } from './constants';
import {
  ProfileView,
  AccountView,
  AppearanceView,
  NotificationsView,
  DisplayView,
  ViewType,
} from './components';

const viewRenderer = (viewInput: ViewType) => {
  switch (viewInput) {
    case 'profile':
      return <ProfileView />;
    case 'account':
      return <AccountView />;
    case 'appearance':
      return <AppearanceView />;
    case 'notifications':
      return <NotificationsView />;
    case 'display':
      return <DisplayView />;
    default:
      return <ProfileView />;
  }
};

const Forms: any = ({ w = '100%', ...props }: any) => {
  const [view, setView] = React.useState<ViewType>('profile');
  const onSelected = (item: any) => {
    setView(item.key);
  };
  return (
    <Box
      {...props}
      w={w}
      borderWidth="$1"
      borderColor="$border200"
      borderRadius="$lg"
      // display="flex"
      // $base-flexDirection="column"
      // $md-flexDirection="row"
      bg="$background0"
      p="$4"
    >
      <VStack w="$full" alignItems="flex-start" px="$10" space="sm" mt="$5">
        <Text
          fontSize="$2xl"
          fontFamily="$heading"
          color="$primary950"
          fontWeight="$bold"
        >
          Settings
        </Text>
        <Text
          fontSize="$md"
          fontFamily="$body"
          color="$primary200"
          fontWeight="$normal"
        >
          Manage your account settings and set e-mail preferences
        </Text>
        <Divider w="$full" mt="$5" bg="$background200" h="$0.25" />
      </VStack>
      <HStack w="$full" mt="$7">
        <Box
          minWidth="$1/6"
          h="$full"
          mx="$4"
          $base-display="none"
          $md-display="flex"
        >
          <Sidebar sidebarItems={sidebarItems} onSelected={onSelected} />
        </Box>
        <Box minWidth="$4/6" h="$full" flexGrow={1} borderRadius="$md">
          {viewRenderer(view)}
        </Box>
      </HStack>
    </Box>
  );
};

export default Forms;
