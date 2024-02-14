import {
  Box,
  Divider,
  HStack,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui-new/themed';
import React from 'react';
import { sidebarItems } from './constants';
import {
  ProfileView,
  AccountView,
  AppearanceView,
  NotificationsView,
  DisplayView,
  ViewType,
  Sidebar,
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

const Forms: any = ({ w = '100%', h = '96vh', ...props }: any) => {
  const [view, setView] = React.useState<ViewType>('profile');
  const onSelected = (item: any) => {
    setView(item.key);
  };
  return (
    <Box {...props} w={w} h={h} position="relative">
      <Box
        borderWidth="$1"
        borderColor="$border200"
        borderRadius="$lg"
        bg="$background0"
        p="$4"
        minHeight="$5/6"
        flexGrow={1}
      >
        <VStack
          w="$full"
          alignItems="flex-start"
          $base-px="$4"
          $md-px="$6"
          space="sm"
          mt="$5"
        >
          <Text
            $base-fontSize="$lg"
            $md-fontSize="$2xl"
            fontFamily="$heading"
            color="$primary950"
            fontWeight="$bold"
          >
            Settings
          </Text>
          <Text
            $base-fontSize="$sm"
            $md-fontSize="$md"
            fontFamily="$body"
            color="$primary200"
            fontWeight="$normal"
          >
            Manage your account settings and set e-mail preferences
          </Text>
          <Divider w="$full" mt="$5" bg="$background200" h="$px" />
        </VStack>
        <HStack w="$full" mt="$7" space="md">
          <Box $md-minWidth="$1/6" h="$full">
            <Sidebar sidebarItems={sidebarItems} onSelected={onSelected} />
          </Box>
          <ScrollView
            $base-minWidth="$6/6"
            $lg-minWidth="$4/6"
            h="$full"
            flexGrow={1}
            borderRadius="$md"
            zIndex={-99}
          >
            {viewRenderer(view)}
          </ScrollView>
        </HStack>
      </Box>
    </Box>
  );
};

export default Forms;
