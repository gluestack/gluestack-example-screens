import { Box, Divider, HStack, Text, VStack } from '@/components/nativewind';
import React from 'react';
import {
  AccountView,
  AppearanceView,
  DisplayView,
  NotificationsView,
  ProfileView,
  Sidebar,
  ViewType,
} from './components';
import { sidebarItems } from './constants';

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

const Forms: any = ({ ...props }: any) => {
  const [view, setView] = React.useState<ViewType>('profile');
  const onSelected = (item: any) => {
    setView(item.key);
  };
  return (
    <Box {...props} className="w-full h-96 relative">
      <Box className="border border-outline-200 rounded-lg bg-background-0 p-4 min-h-5/6 grow">
        <VStack
          className="w-full items-start mt-5"
          $base-px="$4"
          $md-px="$6"
          space="sm"
        >
          <Text
            className="text-primary-950 font-bold"
            $base-fontSize="$lg"
            $md-fontSize="$2xl"
            fontFamily="$heading"
          >
            Settings
          </Text>
          <Text
            className="text-primary-200 font-normal"
            $base-fontSize="$sm"
            $md-fontSize="$md"
            fontFamily="$body"
          >
            Manage your account settings and set e-mail preferences
          </Text>
          <Divider className="w-full mt-5 bg-background-200 h-px" />
        </VStack>
        <HStack className="w-full mt-7" space="md">
          <Box className="h-full" $md-minWidth="$1/6">
            <Sidebar sidebarItems={sidebarItems} onSelected={onSelected} />
          </Box>
          {/* <ScrollView
          className="h-full -z-99 grow rounded-md"
            $base-minWidth="$6/6"
            $lg-minWidth="$4/6"
          > */}
          {viewRenderer(view)}
          {/* </ScrollView> */}
        </HStack>
      </Box>
    </Box>
  );
};

export default Forms;
