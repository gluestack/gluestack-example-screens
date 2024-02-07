import {
  Text,
  Box,
  VStack,
  HStack,
  Divider,
  Pressable,
  InputField,
  useToken,
  Tooltip,
  TooltipContent,
  TooltipText,
  InputIcon,
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
  SidebarItem,
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
import Card from '../components/Card';
import UserCard from '../components/UserCard';
import UserCardAvatar from '../components/UserCardAvatar';
import UserCardStack from '../components/UserCardStack';
import CustomInput from '../components/CustomInput';

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
        top={45}
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
          <SidebarItem
            tooltipText="Dashboard"
            itemProps={{
              bg: view === 'home' ? '$background800' : '$background950',
              onPress: () => handleViewChange('home'),
            }}
            icon={
              <LayoutDashboardIcon
                color={iconColor}
                width={iconSize}
                height={iconSize}
              />
            }
          />
          <SidebarItem
            tooltipText="Announcements"
            itemProps={{
              bg:
                view === 'notifications' ? '$background800' : '$background950',
              onPress: () => handleViewChange('notifications'),
            }}
            icon={
              <MegaphoneIcon
                color={iconColor}
                width={iconSize}
                height={iconSize}
              />
            }
          />
          <SidebarItem
            tooltipText="Calendar"
            itemProps={{
              bg: view === 'calendar' ? '$background800' : '$background950',
              onPress: () => handleViewChange('calendar'),
            }}
            icon={
              <CalendarDaysIcon
                color={iconColor}
                width={iconSize}
                height={iconSize}
              />
            }
          />
          <SidebarItem
            tooltipText="Currency"
            itemProps={{
              bg: view === 'currency' ? '$background800' : '$background950',
              onPress: () => handleViewChange('currency'),
            }}
            icon={
              <CircleDollarSignIcon
                color={iconColor}
                width={iconSize}
                height={iconSize}
              />
            }
          />
          <Divider
            bg="$background600"
            h="$0.5"
            orientation="horizontal"
            w="$full"
            my="$10"
          />
          <SidebarItem
            tooltipText="Profile"
            itemProps={{
              bg: view === 'profile' ? '$background800' : '$background950',
              onPress: () => handleViewChange('profile'),
            }}
            icon={
              <UserIcon color={iconColor} width={iconSize} height={iconSize} />
            }
          />
          <SidebarItem
            tooltipText="Settings"
            itemProps={{
              bg: view === 'settings' ? '$background800' : '$background950',
              onPress: () => handleViewChange('settings'),
            }}
            icon={
              <SettingsIcon
                color={iconColor}
                width={iconSize}
                height={iconSize}
              />
            }
          />
          <SidebarItem
            tooltipText="Help"
            itemProps={{
              bg: view === 'help' ? '$background800' : '$background950',
              onPress: () => handleViewChange('help'),
            }}
            icon={
              <BadgeHelpIcon
                color={iconColor}
                width={iconSize}
                height={iconSize}
              />
            }
          />
        </VStack>
        <VStack
          alignItems="center"
          $md-p="$4"
          $base-p="$2"
          bg="$background950"
          mt="$24"
          borderRadius="$3xl"
        >
          <SidebarItem
            tooltipText="Exit"
            itemProps={{
              bg: view === 'exit' ? '$background800' : '$background950',
              onPress: () => handleViewChange('exit'),
            }}
            icon={
              <LogOutIcon
                color={iconColor}
                width={iconSize}
                height={iconSize}
              />
            }
          />
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
              $xl-px="$6"
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
                  <CustomInput
                    inputStyles={{
                      'borderWidth': '$0',
                      'sx': {
                        _web: {
                          boxShadow: 'none',
                        },
                      },
                      '$base-display': 'none',
                      '$md-display': 'flex',
                    }}
                    icon={
                      <InputIcon
                        color={searchIconColor}
                        as={Search}
                        width={searchIconSize}
                        height={searchIconSize}
                      />
                    }
                  >
                    <InputField
                      placeholder="Search.."
                      fontSize="$sm"
                      color="$text400"
                    />
                  </CustomInput>
                </HStack>
                <Tooltip
                  placement="top"
                  trigger={(triggerProps) => {
                    return (
                      <Pressable
                        bg="$background100"
                        borderRadius="$lg"
                        $base-p="$0.5"
                        $sm-p="$2"
                        {...triggerProps}
                      >
                        <BellIcon
                          color={bellIconColor}
                          width={iconSize}
                          height={iconSize}
                        />
                      </Pressable>
                    );
                  }}
                >
                  <TooltipContent>
                    <TooltipText>Notifications</TooltipText>
                  </TooltipContent>
                </Tooltip>
              </HStack>
            </HStack>
            <Box mt="$11">{viewRenderer(view)}</Box>
          </VStack>
        </Box>
        <Box $xl-width="$2/6" $lg-width="$2/5" $base-width="$full">
          <VStack flexGrow={1}>
            <Card
              bg="$background50"
              $base-flexGrow={1}
              $lg-flexGrow={0}
              $xs-py="$4.5"
              $xs-px="$3"
              $base-py="$3.5"
              $base-px="$2"
              $base-my="$3"
              $base-mx="$2"
              $md-mx="$4"
              $lg-mx="$3"
            >
              <UserCard direction="column">
                <UserCardAvatar
                  name="John Smith"
                  src={require('../assets/avatar-icon.png')}
                  bgColor="$black"
                  size="lg"
                />
                <UserCardStack mt="$3" alignItems="center" width="$full">
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
                    mt="$0.5"
                  >
                    john@example.com
                  </Text>
                  <Text
                    fontFamily="$body"
                    fontSize="$sm"
                    color="$text700"
                    fontWeight="$normal"
                    textAlign="center"
                    width="$full"
                    mt="$2.5"
                  >
                    Pushing the boundaries of reality with XR design wizardry
                    ✨🚀 #XRDesigner
                  </Text>
                </UserCardStack>
                <HStack
                  $base-space="xs"
                  $sm-space="md"
                  alignItems="center"
                  mt="$8"
                  mb="$2"
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
              </UserCard>
            </Card>
            <Box
              display="flex"
              flexDirection="column"
              mt="$2"
              $md-p="$6"
              $base-p="$4"
            >
              <VStack $sm-minWidth="$72" $base-minWidth="$56" space="xl">
                {comments.map((comment) => (
                  <VStack justifyContent="center" space="lg">
                    <CommentCard
                      comment={comment.comment}
                      userName={comment.userName}
                      key={comment.userName}
                    />
                    <Divider
                      orientation="horizontal"
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
