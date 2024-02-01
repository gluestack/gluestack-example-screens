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
  useToken,
} from '@gluestack-ui-new/themed';
import React from 'react';
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
  MiniNavbarMenu,
} from './components';
import {
  ArrowRight,
  BadgeHelpIcon,
  BellIcon,
  CalendarDaysIcon,
  CircleDollarSignIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  MegaphoneIcon,
  Search,
  SettingsIcon,
  UserIcon,
} from 'lucide-react-native';

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
  const iconColor = useToken('colors', 'background200');
  const searchIconColor = useToken('colors', 'background500');
  const bellIconColor = useToken('colors', 'background600');
  const arrowIconColor = useToken('colors', 'background800');
  const miniNavbarIconColor = useToken('colors', 'white');
  const iconSize = useToken('space', '6');
  const arrowIconSize = useToken('space', '3');
  const searchIconSize = useToken('space', '3.5');

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
      display="flex"
      $base-flexDirection="column"
      $md-flexDirection="row"
      bg="$background0"
    >
      <HStack
        bg="$background950"
        justifyContent="space-between"
        alignItems="center"
        $base-display="flex"
        $md-display="none"
        p="$2"
        mb="$2"
        sx={{
          _web: {
            position: 'sticky',
            top: 0,
            zIndex: 99,
          },
        }}
      >
        <Pressable p="$2">
          <MiniNavbarMenu
            onViewChange={(view: string) => handleViewChange(view)}
          />
        </Pressable>
        <Pressable p="$2">
          <Search
            color={miniNavbarIconColor}
            width={iconSize}
            height={iconSize}
          />
        </Pressable>
      </HStack>
      <VStack
        alignItems="center"
        mb="$10"
        ml="$6"
        justifyContent="space-between"
        $base-display="none"
        $md-display="flex"
        h="$full"
        $sm-top={45}
        $lg-top={100}
        sx={{
          _web: {
            position: 'sticky',
          },
        }}
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
            <LayoutDashboardIcon
              color={iconColor}
              width={iconSize}
              height={iconSize}
            />
          </Pressable>
          <Pressable
            p="$2"
            $focus-bg="$background800"
            borderRadius="$xl"
            bg={view === 'notifications' ? '$background800' : '$background950'}
            onPress={() => handleViewChange('notifications')}
          >
            <MegaphoneIcon
              color={iconColor}
              width={iconSize}
              height={iconSize}
            />
          </Pressable>
          <Pressable
            p="$2"
            $focus-bg="$background800"
            borderRadius="$xl"
            bg={view === 'calendar' ? '$background800' : '$background950'}
            onPress={() => handleViewChange('calendar')}
          >
            <CalendarDaysIcon
              color={iconColor}
              width={iconSize}
              height={iconSize}
            />
          </Pressable>
          <Pressable
            p="$2"
            $focus-bg="$background800"
            borderRadius="$xl"
            bg={view === 'currency' ? '$background800' : '$background950'}
            onPress={() => handleViewChange('currency')}
          >
            <CircleDollarSignIcon
              color={iconColor}
              width={iconSize}
              height={iconSize}
            />
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
            <UserIcon color={iconColor} width={iconSize} height={iconSize} />
          </Pressable>
          <Pressable
            p="$2"
            $focus-bg="$background800"
            borderRadius="$xl"
            bg={view === 'settings' ? '$background800' : '$background950'}
            onPress={() => handleViewChange('settings')}
          >
            <SettingsIcon
              color={iconColor}
              width={iconSize}
              height={iconSize}
            />
          </Pressable>
          <Pressable
            p="$2"
            $focus-bg="$background800"
            borderRadius="$xl"
            bg={view === 'help' ? '$background800' : '$background950'}
            onPress={() => handleViewChange('help')}
          >
            <BadgeHelpIcon
              color={iconColor}
              width={iconSize}
              height={iconSize}
            />
          </Pressable>
        </VStack>
        <VStack
          alignItems="center"
          $md-p="$4"
          $base-p="$2"
          bg="$background950"
          mt="$32"
          borderRadius="$3xl"
        >
          <Pressable
            p="$2"
            $focus-bg="$background800"
            borderRadius="$xl"
            bg={view === 'exit' ? '$background800' : '$background950'}
            onPress={() => handleViewChange('exit')}
          >
            <LogOutIcon color={iconColor} width={iconSize} height={iconSize} />
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
            <HStack
              $md-pt="$6"
              $lg-px="$2"
              $sm-px="$4"
              $sm-pt="$4"
              $base-pt="$2"
              $base-px="$2"
              justifyContent="space-between"
              alignItems="center"
            >
              <VStack space="xs">
                <Text
                  $xl-fontSize="$3xl"
                  $md-fontSize="$xl"
                  $base-fontSize="$lg"
                  color="$text900"
                  fontWeight="$bold"
                  fontFamily="$heading"
                >
                  Good morning, John
                </Text>
                <Text
                  $md-fontSize="$sm"
                  $base-fontSize="$xs"
                  color="$text700"
                  fontWeight="$normal"
                  fontFamily="$body"
                >
                  Let’s take a look at your social presence
                </Text>
              </VStack>
              <HStack
                h="$10"
                alignItems="center"
                space="sm"
                $xl-minWidth="$1/3"
                $xl-justifyContent="flex-end"
                $base-justifyContent="center"
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
                  $md-flex={0.8}
                  $base-flex={0.5}
                  $base-borderWidth="$0"
                  $base-display="none"
                  $md-display="flex"
                >
                  <Search
                    color={searchIconColor}
                    width={searchIconSize}
                    height={searchIconSize}
                  />
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
                <Pressable
                  bg="$background100"
                  borderRadius="$lg"
                  $base-p="$0.5"
                  $sm-p="$2"
                >
                  <BellIcon
                    color={bellIconColor}
                    width={iconSize}
                    height={iconSize}
                  />
                </Pressable>
              </HStack>
            </HStack>
            <Box mt="$10">{viewRenderer(view)}</Box>
          </VStack>
        </Box>
        <Box $xl-width="$2/6" $lg-width="$2/5" $base-width="$full" $lg-p="$3">
          <VStack
            space="2xl"
            $lg-alignItems="center"
            $base-mx="$2"
            mb="$2"
            $sm-mx="$4"
            $lg-mx="$0"
            flexGrow={1}
          >
            <VStack
              bg="$background50"
              alignItems="center"
              $sm-minWidth="$72"
              $base-minWidth="$64"
              space="md"
              p="$3"
              borderRadius="$xl"
              $base-flexGrow={1}
              $lg-flexGrow={0}
            >
              <Box borderRadius="$full">
                <Avatar bgColor="$black" size="lg">
                  <AvatarFallbackText>John Smith</AvatarFallbackText>
                  <AvatarImage source={require('../assets/avatar-icon.png')} />
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
            <Box $lg-p="$3" $base-p="$1" display="flex" flexDirection="column">
              <VStack $sm-minWidth="$72" $base-minWidth="$56">
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
                <HStack
                  space="sm"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Text
                    fontWeight="$semibold"
                    fontSize="$xs"
                    color="$secondary600"
                    fontFamily="$body"
                  >
                    See All Activity
                  </Text>
                  <ArrowRight
                    color={arrowIconColor}
                    width={arrowIconSize}
                    height={arrowIconSize}
                  />
                </HStack>
              </Pressable>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

export { Text, Box };
