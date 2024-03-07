import {
  Box,
  Divider,
  HStack,
  Pressable,
  Text,
  VStack,
} from '@/components/nativewind';
import React from 'react';
import UserCard from '../chats/components/UserCard';
import UserCardAvatar from '../chats/components/UserCardAvatar';
import UserCardStack from '../chats/components/UserCardStack';
import Card from '../cards/components/Card';

import { useToken } from '@gluestack-ui-new/themed';

import {
  // CalendarView,
  CommentCard,
  // CurrencyView,
  // ExitView,
  // HelpView,
  // HomeView,
  // NotificationsView,
  // ProfileView,
  // SettingsView,
  // SidebarItem,
  // ViewType,
} from './components';
import { comments } from './constants';

import {
  ArrowRight,
  // BadgeHelpIcon,
  BellIcon,
  // CalendarDaysIcon,
  // CircleDollarSignIcon,
  // LayoutDashboardIcon,
  // LogOutIcon,
  // MegaphoneIcon,
  Search,
  // SettingsIcon,
  // UserIcon,
} from 'lucide-react-native';

// export const MiniNavbarMenu = ({
//   onViewChange,
// }: {
//   onViewChange: (view: ViewType) => void;
// }) => {
//   const [selected, setSelected] = React.useState(new Set([]));
//   const [isOpen, setIsOpen] = React.useState<boolean>(false);
//   const iconSize = useToken('space', '6');
//   const iconColor = useToken('colors', 'trueGray400');

//   return (
//     <Menu
//       placement="top left"
//       selectionMode="single"
//       borderWidth={1}
//       selectedKeys={selected}
//       closeOnSelect={true}
//       isOpen={isOpen}
//       onPointerLeave={() => setIsOpen(false)}
//       onOpen={() => setIsOpen(true)}
//       /*TYPE ERROR FIX LATER*/
//       onSelectionChange={(keys: any) => {
//         setSelected(keys);
//         if (keys?.currentKey === 'Dashboard') {
//           onViewChange('home');
//         } else if (keys?.currentKey === 'Announcements') {
//           onViewChange('notifications');
//         } else if (keys?.currentKey === 'Calendar') {
//           onViewChange('calendar');
//         } else if (keys?.currentKey === 'Revenue') {
//           onViewChange('currency');
//         } else if (keys?.currentKey === 'Profile') {
//           onViewChange('profile');
//         } else if (keys?.currentKey === 'Help') {
//           onViewChange('help');
//         } else if (keys?.currentKey === 'Settings') {
//           onViewChange('settings');
//         } else if (keys?.currentKey === 'Logout') {
//           onViewChange('exit');
//         }
//         setIsOpen(false);
//       }}
//       trigger={({ ...triggerProps }) => {
//         return (
//           <Fab
//             size="md"
//             placement="bottom right"
//             isHovered={false}
//             isDisabled={false}
//             isPressed={false}
//             $base-display="flex"
//             $md-display="none"
//             renderInPortal={true}
//             position="fixed"
//             {...triggerProps}
//           >
//             <FabIcon as={MenuIcon} />
//           </Fab>
//         );
//       }}
//     >
//       <MenuItem key="Dashboard" textValue="Dashboard">
//         <LayoutDashboardIcon
//           color={iconColor}
//           width={iconSize}
//           height={iconSize}
//         />
//         <MenuItemLabel size="sm" ml="$2">
//           Dashboard
//         </MenuItemLabel>
//       </MenuItem>
//       <MenuItem key="Announcements" textValue="Announcements">
//         <MegaphoneIcon color={iconColor} width={iconSize} height={iconSize} />
//         <MenuItemLabel size="sm" ml="$2">
//           Announcements
//         </MenuItemLabel>
//       </MenuItem>
//       <MenuItem key="Calendar" textValue="Calendar">
//         <CalendarDaysIcon
//           color={iconColor}
//           width={iconSize}
//           height={iconSize}
//         />
//         <MenuItemLabel size="sm" ml="$2">
//           Calendar
//         </MenuItemLabel>
//       </MenuItem>
//       <MenuItem key="Revenue" textValue="Revenue">
//         <CircleDollarSignIcon
//           color={iconColor}
//           width={iconSize}
//           height={iconSize}
//         />
//         <MenuItemLabel size="sm" ml="$2">
//           Revenue
//         </MenuItemLabel>
//       </MenuItem>
//       <MenuItem key="Profile" textValue="Profile">
//         <UserIcon color={iconColor} width={iconSize} height={iconSize} />
//         <MenuItemLabel size="sm" ml="$2">
//           Profile
//         </MenuItemLabel>
//       </MenuItem>
//       <MenuItem key="Settings" textValue="Settings">
//         <SettingsIcon color={iconColor} width={iconSize} height={iconSize} />
//         <MenuItemLabel size="sm" ml="$2">
//           Settings
//         </MenuItemLabel>
//       </MenuItem>
//       <MenuItem key="Help" textValue="Help">
//         <BadgeHelpIcon color={iconColor} width={iconSize} height={iconSize} />
//         <MenuItemLabel size="sm" ml="$2">
//           Help
//         </MenuItemLabel>
//       </MenuItem>
//       <MenuItem key="Logout" textValue="Logout">
//         <LogOutIcon color={iconColor} width={iconSize} height={iconSize} />
//         <MenuItemLabel size="sm" ml="$2">
//           Logout
//         </MenuItemLabel>
//       </MenuItem>
//     </Menu>
//   );
// };

// const viewRenderer = (view: string) => {
//   switch (view) {
//     case 'home':
//       return <HomeView />;
//     case 'notifications':
//       return <NotificationsView />;
//     case 'calendar':
//       return <CalendarView />;
//     case 'currency':
//       return <CurrencyView />;
//     case 'profile':
//       return <ProfileView />;
//     case 'settings':
//       return <SettingsView />;
//     case 'help':
//       return <HelpView />;
//     case 'exit':
//       return <ExitView />;
//     default:
//       return <HomeView />;
//   }
// };

const Dashboard: any = ({ w = '100%', ...props }: any) => {
  const arrowIconColor = useToken('colors', 'background800');
  const arrowIconSize = useToken('space', '3');
  // const [view, setView] = React.useState<ViewType>('home');
  const miniNavbarIconColor = useToken('colors', 'trueGray200');
  const iconSize = useToken('space', '5');
  // const iconColor = useToken('colors', 'trueGray200');
  // const handleViewChange = (viewInput: typeof view) => {
  //   if (viewInput !== 'home') {
  //     setView('home');
  //   }
  // };
  return (
    <Box
      className="border border-border-200 rounded-lg w-full bg-background-0 relative"
      {...props}
      w={w}
      display="flex"
      $base-flexDirection="column"
      $md-flexDirection="row"
    >
      <HStack
        className="bg-trueGray-800 justify-end items-center p-4 mb-2"
        $base-display="flex"
        $md-display="none"
        sx={{
          _web: {
            position: 'sticky',
            top: 0,
            zIndex: 99,
          },
        }}
      >
        <HStack space="md">
          <Pressable className="p-2">
            <Search
              color={miniNavbarIconColor}
              width={iconSize}
              height={iconSize}
            />
          </Pressable>
          <Pressable
            className="rounded-lg p-2"
            $base-display="flex"
            $xs-display="none"
          >
            <BellIcon
              color={miniNavbarIconColor}
              width={iconSize}
              height={iconSize}
            />
          </Pressable>
        </HStack>
      </HStack>
      <VStack
        className="items-center mb-10 ml-6 justify-between h-full top-[45]"
        $base-display="none"
        $md-display="flex"
        top={45}
        sx={{
          _web: {
            position: 'sticky',
          },
        }}
      >
        <VStack
          className="items-center bg-trueGray-800 rounded-3xl md:p-4"
          $base-p="$2"
          space="lg"
        >
          {/* <SidebarItem
            tooltipText="Dashboard"
            itemProps={{
              bg: view === 'home' ? '$trueGray600' : '$trueGray800',
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
              bg: view === 'notifications' ? '$trueGray600' : '$trueGray800',
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
              bg: view === 'calendar' ? '$trueGray600' : '$trueGray800',
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
              bg: view === 'currency' ? '$trueGray600' : '$trueGray800',
              onPress: () => handleViewChange('currency'),
            }}
            icon={
              <CircleDollarSignIcon
                color={iconColor}
                width={iconSize}
                height={iconSize}
              />
            }
          /> */}
          <Divider
            className="bg-background-600 h-0.5 w-full my-10"
            orientation="horizontal"
          />
          {/* <SidebarItem
            tooltipText="Profile"
            itemProps={{
              bg: view === 'profile' ? '$trueGray600' : '$trueGray800',
              onPress: () => handleViewChange('profile'),
            }}
            icon={
              <UserIcon color={iconColor} width={iconSize} height={iconSize} />
            }
          />
          <SidebarItem
            tooltipText="Settings"
            itemProps={{
              bg: view === 'settings' ? '$trueGray600' : '$trueGray800',
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
              bg: view === 'help' ? '$trueGray600' : '$trueGray800',
              onPress: () => handleViewChange('help'),
            }}
            icon={
              <BadgeHelpIcon
                color={iconColor}
                width={iconSize}
                height={iconSize}
              />
            }
          /> */}
        </VStack>
        <VStack
          className="items-center mt-24 rounded-3xl bg-trueGray-800"
          $md-p="$4"
          $base-p="$2"
        >
          {/* <SidebarItem
            tooltipText="Exit"
            itemProps={{
              bg: view === 'exit' ? '$trueGray600' : '$trueGray800',
              onPress: () => handleViewChange('exit'),
            }}
            icon={
              <LogOutIcon
                color={iconColor}
                width={iconSize}
                height={iconSize}
              />
            }
          /> */}
        </VStack>
      </VStack>
      <Box className="flex lg-flex-row flex-1" $base-flexDirection="column">
        <Box
          className="border-l-0 border-border-200"
          $xl-width="$4/6"
          $lg-width="$3/5"
          $base-width="$full"
          $md-borderRightWidth="$1"
          $base-borderRightWidth="$0"
        >
          <VStack>
            <HStack className="justify-between items-start px-4 pt-4">
              <VStack space="xs">
                <Text
                  className="text-typography-900 font-bold"
                  $xl-fontSize="$3xl"
                  $md-fontSize="$xl"
                  $base-fontSize="$lg"
                  fontFamily="$heading"
                >
                  Good morning, John
                </Text>
                <Text
                  className="text-typography-700 font-normal"
                  $md-fontSize="$sm"
                  $base-fontSize="$xs"
                  fontFamily="$body"
                  numberOfLines={2}
                  $lg-maxWidth="$64"
                  $xl-maxWidth="$72"
                >
                  Let’s take a look at your social presence
                </Text>
              </VStack>
              <HStack
                className="items-center"
                space="sm"
                $xl-minWidth="$1/3"
                $xl-justifyContent="flex-end"
                $base-justifyContent="center"
              >
                {/* <CustomInput
                  inputProps={{
                    'sx': {
                      _web: {
                        boxShadow: 'none',
                      },
                    },
                    '$base-display': 'none',
                    '$md-display': 'flex',
                  }}
                  formControlProps={{
                    '$base-display': 'none',
                    '$md-display': 'flex',
                    'flexGrow': 1,
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
                <Tooltip
                  placement="top"
                  trigger={(triggerProps) => {
                    return (
                      <Pressable
                        bg="$background100"
                        borderRadius="$lg"
                        p="$2"
                        $base-display="none"
                        $xs-display="flex"
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
                </Tooltip> */}
              </HStack>
            </HStack>
            <Box className="mt-10">{/* {viewRenderer(view)} */}</Box>
          </VStack>
        </Box>
        <Box $xl-width="$2/6" $lg-width="$2/5" $base-width="$full">
          <VStack className="grow">
            <Card
              className="bg-background-50 border-0"
              hardShadow="0"
              $base-flexGrow={1}
              $lg-flexGrow={0}
              $xs-py="$4.5"
              $xs-px="$3"
              $base-py="$3.5"
              $base-px="$2"
              $base-my="$3"
              $base-mx="$3"
              $md-mx="$4"
              $lg-mx="$3"
            >
              <UserCard direction="column">
                <UserCardAvatar
                  name="John Smith"
                  src={require('../../../assets/avatar-icon.png')}
                  className="bg-black"
                  size="lg"
                />
                <UserCardStack className="mt-3 items-center w-full">
                  <Text
                    className="text-lg text-typography-900 font-bold"
                    fontFamily="$heading"
                  >
                    John Smith
                  </Text>
                  <Text
                    className="text-sm text-typography-700 font-normal mt-0.5"
                    fontFamily="$body"
                  >
                    john@example.com
                  </Text>
                  <Text
                    className="text-sm text-typography-700  font-normal align-center w-full mt-2.5 max-w-72"
                    fontFamily="$body"
                    numberOfLines={2}
                    lineHeight="$sm"
                  >
                    Pushing the boundaries of reality with XR design wizardry
                    ✨🚀 #XRDesigner
                  </Text>
                </UserCardStack>
                <HStack
                  className="items-center mt-8 mb-2 w-full justify-center"
                  $base-space="xs"
                  $sm-space="md"
                >
                  <VStack className="items-center" space="sm" $sm-w="$20">
                    <Text
                      className="text-sm text-typography-900 font-bold"
                      fontFamily="$heading"
                    >
                      232
                    </Text>
                    <Text
                      className="text-sm text-typography-900 font-normal"
                      fontFamily="$body"
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
                  <VStack className="items-center" space="sm" $sm-w="$20">
                    <Text
                      className="text-sm text-typography-900 font-bold"
                      fontFamily="$heading"
                    >
                      108.3k
                    </Text>
                    <Text
                      className="text-sm text-typography-900 font-normal"
                      fontFamily="$body"
                    >
                      followers
                    </Text>
                  </VStack>
                  <Divider
                    className="mx-2.5 h-10 bg-background-400 w-0.5"
                    orientation="vertical"
                  />
                  <VStack className="items-center" space="sm" $sm-w="$20">
                    <Text
                      className="text-sm text-typography-900 font-bold"
                      fontFamily="$heading"
                    >
                      40
                    </Text>
                    <Text
                      className="text-sm text-typography-900 font-normal"
                      fontFamily="$body"
                    >
                      following
                    </Text>
                  </VStack>
                </HStack>
              </UserCard>
            </Card>
            <Box className="flex flex-col mt-2 " $md-p="$6" $base-p="$4">
              <VStack $sm-minWidth="$72" $base-minWidth="$56" space="xl">
                {comments.map((comment) => (
                  <VStack className="justify-center px-5" space="lg">
                    <CommentCard
                      comment={comment.comment}
                      userName={comment.userName}
                      key={comment.userName}
                    />
                    <Divider
                      className="bg-background-200 h-0.5"
                      orientation="horizontal"
                    />
                  </VStack>
                ))}
              </VStack>
              <Pressable className="mt-20 px-5">
                <HStack className="justify-start items-center" space="sm">
                  <Text
                    className="font-semibold text-xs text-secondary-600"
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
      {/* <MiniNavbarMenu
        onViewChange={(newView: typeof view) => handleViewChange(newView)}
      /> */}
    </Box>
  );
};

export default Dashboard;
