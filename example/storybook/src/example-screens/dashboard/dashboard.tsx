import {
  Text,
  Box,
  VStack,
  HStack,
  Divider,
  AvatarImage,
  Avatar,
  AvatarFallbackText,
  Pressable,
  Input,
  InputField,
  Center,
} from '@gluestack-ui-new/themed';
import React from 'react';
import {
  ArrowRightSVG,
  BellIconSVG,
  CalenderIconSVG,
  CatergoriesIconSVG,
  CurrencyIconSVG,
  ExitIconSVG,
  HelpIconSVG,
  NotificationsIconSVG,
  ProfileIconSVG,
  SearchIconSVG,
  SettingsIconSVG,
} from './icons';
import { comments } from './constants';
import {
  HomeView,
  NotificationsView,
  CalendarView,
  CurrencyView,
  ProfileView,
  CommentCard,
  ExitView,
  HelpView,
  SettingsView,
} from './components';

const viewRenderer = (view: string) => {
  switch (view) {
    case 'home':
      return <HomeView />;
    case 'notifications':
      return <NotificationsView />;
    case 'calendar':
      return <CalendarView />;
    case 'currency':
      return <CurrencyView />;
    case 'profile':
      return <ProfileView />;
    case 'settings':
      return <SettingsView />;
    case 'help':
      return <HelpView />;
    case 'exit':
      return <ExitView />;
    default:
      return <HomeView />;
  }
};

const Dashboard: any = ({ w = '100%', ...props }: any) => {
  const [view, setView] = React.useState<
    | 'home'
    | 'notifications'
    | 'calendar'
    | 'currency'
    | 'profile'
    | 'settings'
    | 'help'
    | 'exit'
  >('home');
  const handleViewChange = (viewInput: typeof view) => {
    setView(viewInput);
  };
  return (
    <Box
      {...props}
      w={w}
      borderWidth="$1"
      borderColor="$border200"
      borderRadius="$lg"
    >
      <HStack justifyContent="space-between">
        <VStack
          alignItems="center"
          my="$24"
          px="$2"
          justifyContent="space-between"
        >
          <VStack
            alignItems="center"
            $md-p="$4"
            $base-p="$2"
            bg="$background950"
            space="lg"
            borderRadius="$3xl"
          >
            <Pressable
              p="$2"
              $focus-bg="$background800"
              borderRadius="$xl"
              bg={view === 'home' ? '$background800' : '$background950'}
              onPress={() => handleViewChange('home')}
            >
              <CatergoriesIconSVG />
            </Pressable>
            <Pressable
              p="$2"
              $focus-bg="$background800"
              borderRadius="$xl"
              bg={
                view === 'notifications' ? '$background800' : '$background950'
              }
              onPress={() => handleViewChange('notifications')}
            >
              <NotificationsIconSVG />
            </Pressable>
            <Pressable
              p="$2"
              $focus-bg="$background800"
              borderRadius="$xl"
              bg={view === 'calendar' ? '$background800' : '$background950'}
              onPress={() => handleViewChange('calendar')}
            >
              <CalenderIconSVG />
            </Pressable>
            <Pressable
              p="$2"
              $focus-bg="$background800"
              borderRadius="$xl"
              bg={view === 'currency' ? '$background800' : '$background950'}
              onPress={() => handleViewChange('currency')}
            >
              <CurrencyIconSVG />
            </Pressable>
            <Divider
              bg="$background600"
              h="$0.5"
              orientation="horizontal"
              w="$full"
              my="$10"
            />
            <Pressable
              p="$2"
              $focus-bg="$background800"
              borderRadius="$xl"
              bg={view === 'profile' ? '$background800' : '$background950'}
              onPress={() => handleViewChange('profile')}
            >
              <ProfileIconSVG />
            </Pressable>
            <Pressable
              p="$2"
              $focus-bg="$background800"
              borderRadius="$xl"
              bg={view === 'settings' ? '$background800' : '$background950'}
              onPress={() => handleViewChange('settings')}
            >
              <SettingsIconSVG />
            </Pressable>
            <Pressable
              p="$2"
              $focus-bg="$background800"
              borderRadius="$xl"
              bg={view === 'help' ? '$background800' : '$background950'}
              onPress={() => handleViewChange('help')}
            >
              <HelpIconSVG />
            </Pressable>
          </VStack>
          <VStack
            alignItems="center"
            $md-p="$4"
            $base-p="$2"
            bg="$background950"
            space="lg"
            borderRadius="$3xl"
          >
            <Pressable
              p="$2"
              $focus-bg="$background800"
              borderRadius="$xl"
              bg={view === 'exit' ? '$background800' : '$background950'}
              onPress={() => handleViewChange('exit')}
            >
              <ExitIconSVG />
            </Pressable>
          </VStack>
        </VStack>
        <Box
          display="flex"
          $base-flexDirection="column"
          $lg-flexDirection="row"
          flex={1}
        >
          <Box
            $xl-width="$4/6"
            $lg-width="$3/5"
            $base-width="$full"
            borderLeftWidth="$0"
            $md-borderRightWidth="$1"
            $base-borderRightWidth="$0"
            borderColor="$border200"
          >
            <VStack>
              <HStack p="$4" justifyContent="space-between" alignItems="center">
                <VStack space="xs">
                  <Text
                    $xl-fontSize="$3xl"
                    $md-fontSize="$xl"
                    $base-fontSize="$lg"
                    color="$text900"
                    fontWeight="$bold"
                  >
                    Good morning, John
                  </Text>
                  <Text
                    $md-fontSize="$sm"
                    $base-fontSize="$xs"
                    color="$text700"
                    fontWeight="$normal"
                  >
                    Let’s take a look at your social presence
                  </Text>
                </VStack>
                <HStack
                  h="$10"
                  alignItems="center"
                  space="sm"
                  $base-minWidth="$1/3"
                  $md-minWidth="$1/5"
                  $xl-minWidth="$1/3"
                  $xl-justifyContent="flex-end"
                  $base-justifyContent="flex-start"
                >
                  <HStack
                    $md-borderWidth="$1"
                    borderColor="$border300"
                    borderRadius="$lg"
                    alignItems="center"
                    space="sm"
                    $base-px="$0"
                    $md-px="$4"
                    $xl-flex={0.95}
                    $md-flex={0.9}
                    $base-flex={0.5}
                    $base-borderWidth="$0"
                  >
                    <SearchIconSVG />
                    <Input
                      borderWidth="$0"
                      sx={{
                        _web: {
                          boxShadow: 'none',
                        },
                      }}
                      flex={0.95}
                      $base-display="none"
                      $md-display="flex"
                    >
                      <InputField
                        placeholder="Search.."
                        fontSize="$sm"
                        color="$text400"
                      />
                    </Input>
                  </HStack>
                  <Center bg="$background100" borderRadius="$lg" p="$2">
                    <BellIconSVG />
                  </Center>
                </HStack>
              </HStack>
              <Box>{viewRenderer(view)}</Box>
            </VStack>
          </Box>
          <Box $xl-width="$2/6" $lg-width="$2/5" $base-width="$full" p="$2">
            <VStack space="2xl" alignItems="center">
              <VStack
                bg="$background50"
                alignItems="center"
                minWidth="$72"
                space="md"
                p="$3"
                borderRadius="$xl"
              >
                <Box borderRadius="$full">
                  <Avatar bgColor="$black" size="lg">
                    <AvatarFallbackText>John Smith</AvatarFallbackText>
                    <AvatarImage source={require('/assets/avatar-icon.png')} />
                  </Avatar>
                </Box>
                <VStack alignItems="center" space="xs" width="$full">
                  <Text
                    fontFamily="$heading"
                    fontSize="$lg"
                    color="$text900"
                    fontWeight="$bold"
                  >
                    John Smith
                  </Text>
                  <Text
                    fontFamily="$body"
                    fontSize="$sm"
                    color="$text700"
                    fontWeight="$normal"
                  >
                    john@example.com
                  </Text>
                </VStack>
                <Text
                  fontFamily="$body"
                  fontSize="$sm"
                  color="$text700"
                  fontWeight="$normal"
                  textAlign="center"
                  width="$full"
                >
                  Pushing the boundaries of reality with XR design wizardry ✨🚀
                  #XRDesigner
                </Text>
                <HStack
                  space="md"
                  alignItems="center"
                  my="$2"
                  width="$full"
                  justifyContent="center"
                >
                  <VStack alignItems="center" space="sm">
                    <Text
                      fontFamily="$heading"
                      fontSize="$sm"
                      color="$text900"
                      fontWeight="$bold"
                    >
                      232
                    </Text>
                    <Text
                      fontFamily="$body"
                      fontSize="$sm"
                      color="$text900"
                      fontWeight="$normal"
                    >
                      posts
                    </Text>
                  </VStack>
                  <Divider
                    mx="$2.5"
                    h="$10"
                    bg="$background400"
                    w="$0.5"
                    orientation="vertical"
                  />
                  <VStack alignItems="center" space="sm">
                    <Text
                      fontFamily="$heading"
                      fontSize="$sm"
                      color="$text900"
                      fontWeight="$bold"
                    >
                      108.3k
                    </Text>
                    <Text
                      fontFamily="$body"
                      fontSize="$sm"
                      color="$text900"
                      fontWeight="$normal"
                    >
                      followers
                    </Text>
                  </VStack>
                  <Divider
                    mx="$2.5"
                    h="$10"
                    bg="$background400"
                    w="$0.5"
                    orientation="vertical"
                  />
                  <VStack alignItems="center" space="sm">
                    <Text
                      fontFamily="$heading"
                      fontSize="$sm"
                      color="$text900"
                      fontWeight="$bold"
                    >
                      40
                    </Text>
                    <Text
                      fontFamily="$body"
                      fontSize="$sm"
                      color="$text900"
                      fontWeight="$normal"
                    >
                      following
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
              <Box p="$3" display="flex" flexDirection="column">
                <VStack minWidth="$72">
                  {comments.map((comment) => (
                    <VStack justifyContent="center">
                      <CommentCard
                        comment={comment.comment}
                        userName={comment.userName}
                        key={comment.userName}
                      />
                      <Divider
                        orientation="horizontal"
                        my="$2"
                        bg="$background200"
                        h="$0.5"
                      />
                    </VStack>
                  ))}
                </VStack>
                <Pressable mt="$20">
                  <HStack space="sm" justifyContent="flex-end">
                    <Text
                      fontWeight="$semibold"
                      fontSize="$xs"
                      color="$secondary600"
                    >
                      See All Activity
                    </Text>
                    <ArrowRightSVG />
                  </HStack>
                </Pressable>
              </Box>
            </VStack>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default Dashboard;

export { Text, Box };
