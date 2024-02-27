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

const Dashboard: any = ({ w = '100%', ...props }: any) => {
  return (
    <Box
      className="border border-border-200 rounded-lg w-full"
      {...props}
      w={w}
      display="flex"
      $base-flexDirection="column"
      $md-flexDirection="row"
      bg="$background0"
      position="relative"
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
          <Pressable className="p-2" p="$2">
            {/* <Search
              color={miniNavbarIconColor}
              width={iconSize}
              height={iconSize}
            /> */}
          </Pressable>
          <Pressable
            className="rounded-lg p-2"
            $base-display="flex"
            $xs-display="none"
          >
            {/* <BellIcon
              color={miniNavbarIconColor}
              width={iconSize}
              height={iconSize}
            /> */}
          </Pressable>
        </HStack>
      </HStack>
      <VStack
        className="items-center mb-10 ml-6 justify-between h-full"
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
                  className="text-text-900 font-bold"
                  $xl-fontSize="$3xl"
                  $md-fontSize="$xl"
                  $base-fontSize="$lg"
                  fontFamily="$heading"
                >
                  Good morning, John
                </Text>
                <Text
                  className="text-text-700 font-normal"
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
              {/* <HStack
                alignItems="center"
                space="sm"
                $xl-minWidth="$1/3"
                $xl-justifyContent="flex-end"
                $base-justifyContent="center"
              >
                <CustomInput
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
                </Tooltip>
              </HStack> */}
            </HStack>
            {/* <Box mt="$10">{viewRenderer(view)}</Box> */}
          </VStack>
        </Box>
        <Box $xl-width="$2/6" $lg-width="$2/5" $base-width="$full">
          <VStack flexGrow={1}>
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
                    className="text-lg text-text-900 font-bold"
                    fontFamily="$heading"
                  >
                    John Smith
                  </Text>
                  <Text
                    className="text-sm text-text-700 font-normal mt-0.5"
                    fontFamily="$body"
                  >
                    john@example.com
                  </Text>
                  <Text
                    className="text-sm text-text-700  font-normal align-center w-full mt-2.5 max-w-72"
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
                      className="text-sm text-text-900 font-bold"
                      fontFamily="$heading"
                    >
                      232
                    </Text>
                    <Text
                      className="text-sm text-text-900 font-normal"
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
                  <VStack alignItems="center" space="sm" $sm-w="$20">
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
                  <VStack alignItems="center" space="sm" $sm-w="$20">
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
              {/* <VStack $sm-minWidth="$72" $base-minWidth="$56" space="xl">
                {comments.map((comment) => (
                  <VStack justifyContent="center" space="lg" px="$5">
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
              </VStack> */}
              <Pressable mt="$20" px="$5">
                <HStack
                  space="sm"
                  justifyContent="flex-start"
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
                  {/* <ArrowRight
                    color={arrowIconColor}
                    width={arrowIconSize}
                    height={arrowIconSize}
                  /> */}
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
