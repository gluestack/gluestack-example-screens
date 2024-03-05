import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Pressable,
  Badge,
  BadgeText,
  Divider,
  Text,
  Image,
  Avatar,
  // AvatarBadge,
  AvatarFallbackText,
  // AvatarGroup,
  // AvatarImage,
  Switch,
  Heading,
  Icon,
  Tooltip,
  TooltipText,
  TooltipContent,
} from '@/components/nativewind';
import {
  // AlertCircle,
  ArrowLeft,
  BadgeHelp,
  // Ban,
  BellOff,
  CalendarDays,
  // Camera,
  // CheckCheck,
  ChevronDown,
  CircleDollarSign,
  ImagePlus,
  LogOut,
  MessageCircle,
  // Mic,
  // MoreVertical,
  // Paperclip,
  Phone,
  Settings,
  // SmilePlus,
  Star,
  User,
  // UserCircle,
  Video,
} from 'lucide-react-native';
// import { Lock } from 'lucide-react-native';

import UserCard from './components/UserCard';
import UserCardAvatar from './components/UserCardAvatar';
import UserCardStack from './components/UserCardStack';
import Stats from './components/Stats';

const Chats = () => {
  const chatData = [
    {
      avatarSource: require('../../../src/example-screens/assets/Avatar1.svg'),
      name: 'Mila Dann',
      message: 'These are really cool 💯',
      badgeCount: 1,
    },
    {
      avatarSource: require('../../../src/example-screens/assets/Avatar2.svg'),
      name: 'Jared Dunn',
      message: 'Typing...',
      badgeCount: 1,
    },
    {
      avatarSource: require('../../../src/example-screens/assets/Avatar3.png'),
      name: 'Richard Lyod',
      message: 'Great 💯 Will be there soon!',
      badgeCount: 4,
    },
    {
      avatarSource: require('../../../src/example-screens/assets/Avatar4.png'),
      name: 'Mike',
      message: 'wohoooooo 🔥',
    },
    {
      avatarSource: require('../../../src/example-screens/assets/Avatar5.png'),
      name: 'Ben',
      message: 'I’ll be there in 2 mins',
    },

    {
      avatarSource: require('../../../src/example-screens/assets/Avatar6.png'),
      name: 'Taylor',
      message: 'Okay',
    },
    {
      avatarSource: require('../../../src/example-screens/assets/Avatar7.png'),
      name: 'Batch 2024',
      message: 'Steve typing...',
    },
    {
      avatarSource: require('../../../src/example-screens/assets/Avatar8.png'),
      name: 'Michele',
      message: 'I can’t wait to hear about...',
    },
  ];
  const [selectedChat, setSelectedChat] = React.useState({
    name: 'Richard Lyod',
    message: '',
    avatarSource: require('../../../assets/Avatar3.png'),
  });

  const [showChatList, setShowChatList] = React.useState(false);
  const [showProfile, setShowProfile] = React.useState(false);
  const [showTabButton, setShowTabButton] = React.useState(true);

  const handleBackToChatList = () => {
    setShowChatList(true);
    setShowProfile(false);
  };
  const handleBackToInbox = () => {
    setShowChatList(false);
    setShowProfile(false);
    setShowTabButton(true);
  };
  type chatDataType = {
    avatarSource: any;
    name: string;
    message: string;
    badgeCount?: number;
  };
  type MessageType = {
    [key: string]: {
      messagesRight: string[];
      messagesLeft: string[];
    };
  };
  type selectedChatType = {
    name: string;
    message: string;
    avatarSource: string;
  };
  const handleChatSelect = ({
    name,
    message,
    avatarSource,
  }: {
    name: string;
    message: string;
    avatarSource: any;
  }) => {
    setSelectedChat({ name, message, avatarSource });
    setShowChatList(true);
    setShowProfile(false);
    setShowTabButton(false);
  };

  const Sidebar = () => {
    const icons = [
      { icon: MessageCircle, label: 'Messages', tooltip: 'Messages' },
      { icon: CircleDollarSign, label: 'Dollar', tooltip: 'Payments' },
      { icon: CalendarDays, label: 'Calendar', tooltip: 'Calendar' },
      { icon: User, label: 'User', tooltip: 'Profile' },
      { icon: Settings, label: 'Settings', tooltip: 'Settings' },
      { icon: BadgeHelp, label: 'Help', tooltip: 'Help' },
      { icon: LogOut, label: 'Logout', tooltip: 'Logout' },
    ];

    const defaultActiveIcon = 'Messages';
    const [activeIcon, _setActiveIcon] = React.useState(defaultActiveIcon);
    const messagesBadgeCount = 3;

    return (
      <VStack className="py-6 px-4 items-start gap-6">
        {icons.map(({ icon: IconComponent, label, tooltip }) => (
          <Tooltip
            key={label}
            placement="right"
            trigger={(triggerProps) => (
              <Pressable
                className="hover:bg-background-50 active:bg-background-100 rounded-lg"
                {...triggerProps}
              >
                <Icon
                  className="w-6 h-6 p-2 rounded-lg"
                  as={IconComponent}
                  bg={activeIcon === label ? '$primary500' : 'transparent'}
                  color={
                    activeIcon === label ? '$background200' : '$background800'
                  }
                />
                {label === 'Messages' && (
                  <Badge
                    className="h-4 w-4 rounded-full absolute top-1 right-1 items-center justify-center z-1"
                    bg={activeIcon === label ? '$background0' : '$primary400'}
                    variant="solid"
                  >
                    <BadgeText
                      className="text-2xs"
                      color={activeIcon === label ? '$text950' : '$text0'}
                    >
                      {messagesBadgeCount}
                    </BadgeText>
                  </Badge>
                )}
              </Pressable>
            )}
          >
            <TooltipContent>
              <TooltipText>{tooltip}</TooltipText>
            </TooltipContent>
          </Tooltip>
        ))}
      </VStack>
    );
  };

  const IconWithTooltip = ({
    icon: IconComponent,
    label,
    tooltip,
  }: {
    icon: React.ComponentType<any>;
    label: string | undefined;
    tooltip: string;
  }) => (
    <Tooltip
      key={label}
      placement="bottom"
      trigger={(triggerProps) => (
        <Pressable {...triggerProps}>
          <VStack gap="$2.5" alignItems="center">
            <Icon
              as={IconComponent}
              sx={{ '.dark_theme': { color: '$background800' } }}
              color="$background800"
              w="$4.5"
              h="$4.5"
            />
            <TooltipText
              sx={{ '.dark_theme': { color: '$text700' } }}
              color="$text700"
              fontSize="$xs"
              fontWeight="$normal"
            >
              {label}
            </TooltipText>
          </VStack>
        </Pressable>
      )}
    >
      <TooltipContent>
        <TooltipText>{tooltip}</TooltipText>
      </TooltipContent>
    </Tooltip>
  );

  const Profile = () => {
    return (
      <>
        <VStack className="w-auto py-4.5 px-3 items-start rounded-tr-lg bg-background-50">
          <UserCard direction="column">
            <Box
              className="lg:hidden sm:flex self-start"
              sx={{
                '@base': { display: 'flex', alignSelf: 'flex-start' },
                '@lg': { display: 'none' },
              }}
            >
              <Pressable onPress={handleBackToChatList}>
                <Icon as={ArrowLeft} />
              </Pressable>
            </Box>
            <UserCardAvatar
              className="w-18 h-18"
              name={selectedChat.name}
              src={selectedChat.avatarSource}
            />
            <UserCardStack className="mt-4 gap-0.5 items-center">
              <Text className="text-text-900 text-lg text-center font-bold">
                {selectedChat.name}
              </Text>
              <Text
                className="text-text-700 text-sm text-center font-normal"
                sx={{ '.dark_theme': { color: '$text700' } }}
                color="$text700"
                fontSize="$sm"
                fontWeight="$normal"
                textAlign="center"
              >
                +91 1234567890
              </Text>
            </UserCardStack>
          </UserCard>
          <Stats className="mt-4 gap-11">
            <IconWithTooltip
              icon={Phone}
              label="Voice call"
              tooltip="Voice Call"
            />
            <IconWithTooltip
              icon={Video}
              label="Video call"
              tooltip="Video Call"
            />
            {/* <IconWithTooltip
              icon={SearchIcon}
              label="Search"
              tooltip="Search"
            /> */}
          </Stats>
        </VStack>

        <VStack className="items-start mt-6 ps-4.5 gap-3">
          <Text className="text-text-900 text-md font-medium">
            Media, links, docs
          </Text>
          {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
          <HStack className="gap-3">
            <Image
              className="h-20 w-20"
              source={require('../../../assets/Image.png')}
              resizeMode="contain"
              alt=""
            />
            <Image
              className="h-20 w-20"
              source={require('../../../assets/Image.png')}
              resizeMode="contain"
              alt=""
            />
            <Image
              className="h-20 w-20"
              source={require('../../../assets/Image.png')}
              resizeMode="contain"
              alt=""
            />
            <Image
              className="h-20 w-20"
              source={require('../../../assets/Image.png')}
              resizeMode="contain"
              alt=""
            />
          </HStack>
          {/* </ScrollView> */}
        </VStack>

        <VStack className="mt-5 gap-5 p-6">
          <Text className="text-md text-text-900 font-medium">
            Notification Settings
          </Text>
          <VStack className="self-stretch gap-6">
            <HStack className="justify-between">
              <HStack className="gap-3">
                <Icon className="w-4 h-4" as={Star} />
                <Text className="text-sm font-normal">Starred Messages</Text>
              </HStack>
              <Text className="text-text-400 text-2xs font-medium">123</Text>
            </HStack>
            <HStack className="justify-between">
              <HStack className="gap-3">
                <Icon className="w-4 h-4" as={BellOff} />
                <Text className="text-sm font-normal">Mute Notifications</Text>
              </HStack>

              <Switch className="w-10 h-5" isDisabled={false} />
            </HStack>
            <HStack className="justify-between">
              <HStack className="gap-3">
                <Icon className="w-4 h-4" as={Lock} />
                <Text className="text-sm font-normal">Chat lock</Text>
              </HStack>

              <Switch
                defaultValue={true}
                className="w-10 h-5"
                isDisabled={false}
              />
            </HStack>
            <HStack className="justify-between">
              <HStack className="gap-3">
                <Icon className="w-4 h-4" as={ImagePlus} />
                <Text className="text-sm font-normal">Media Visibility</Text>
              </HStack>

              <Switch
                defaultValue={true}
                className="w-10 h-5"
                isDisabled={false}
              />
            </HStack>
          </VStack>
        </VStack>

        <VStack className="p-6 gap-3">
          <Text className="text-md text-text-900 font-medium">
            7 groups in common
          </Text>

          <VStack>
            <HStack className="items-center gap-3 py-2.5">
              <Avatar className="w-9 h-9 bg-primary-500 rounded-full">
                <AvatarFallbackText className="text-text-0">
                  B A
                </AvatarFallbackText>
              </Avatar>

              <VStack className="gap-0.5">
                <Text className="text-text-900 font-bold text-sm">
                  Batch 2024
                </Text>
                <Text className="font-normal text-xs text-text-500">
                  John, Mike, Jared + 42 others
                </Text>
              </VStack>
            </HStack>

            <HStack className="items-center gap-3 py-2.5">
              <Avatar className="w-9 h-9 bg-primary-500 rounded-full">
                <AvatarFallbackText className="text-text-0">
                  T P
                </AvatarFallbackText>
              </Avatar>

              <VStack className="gap-0.5">
                <Text className="text-text-900 font-bold text-sm">
                  Trip Planning
                </Text>
                <Text className="font-normal text-xs text-text-500">
                  Michele, Mike
                </Text>
              </VStack>
            </HStack>
          </VStack>
          <Pressable>
            <HStack className="px-3.5 gap-2">
              <Text className="text-secondary-600 text-xs font-semibold">
                5 more
              </Text>
              <Icon w="$3" h="$3" as={ChevronDown} />
            </HStack>
          </Pressable>
        </VStack>
      </>
    );
  };
  const ChatTopBar = () => {
    return (
      <Pressable>
        <HStack
          className="p-4 justify-between md:bg-transparent sm:bg-background-100"
          sx={{
            '@base': { bg: '$background100' },
            '@md': { bg: 'transparent' },
          }}
        >
          <HStack className="items-center gap-4">
            <Box className="sm:flex md:hidden">
              <Pressable onPress={handleBackToInbox}>
                <Icon as={ArrowLeft} />
              </Pressable>
            </Box>
            <VStack className="gap-1">
              <Heading className="text-text-900 text-lg font-bold">
                {selectedChat ? selectedChat.name : ''}
              </Heading>
              <HStack className="items-center" space="xs">
                {/* <Icon as={DotIcon} w="$1.5" h="$1.5" /> */}
                <Text size="sm">Online</Text>
              </HStack>
            </VStack>
          </HStack>
          <HStack className="self-center" gap="$6">
            <IconWithTooltip
              icon={Phone}
              tooltip="Voice Call"
              label={undefined}
            />

            <IconWithTooltip
              icon={Video}
              tooltip="Video Call"
              label={undefined}
            />

            {/* <Menu
              borderWidth={1}
              placement="bottom right"
              disabledKeys={['Theme']}
              trigger={({ ...triggerProps }) => (
                <Pressable bg="transparent" {...triggerProps}>
                  <Icon as={MoreVertical} />
                </Pressable>
              )}
            >
              <MenuItem
                sx={{ '@lg': { display: 'none' } }}
                display="flex"
                key="Profile"
                textValue="Profile"
                onPress={handleShowProfile}
              >
                <Icon as={UserCircle} size="sm" mr="$2" />
                <MenuItemLabel size="sm">Show Profile</MenuItemLabel>
              </MenuItem>
              <MenuItem key="Block" textValue="Block">
                <Icon as={Ban} size="sm" mr="$2" />
                <MenuItemLabel size="sm">Block</MenuItemLabel>
              </MenuItem>
              <MenuItem key="Report" textValue="Report">
                <Icon as={AlertCircle} size="sm" mr="$2" />
                <MenuItemLabel size="sm">Report</MenuItemLabel>
              </MenuItem>
            </Menu> */}
          </HStack>
        </HStack>
      </Pressable>
    );
  };
  const TypeMessage = () => {
    return (
      <HStack
        className="items-center px-3 py-0 border border-border-300 rounded-none shadow-trueGray-800"
        space="lg"
        style={{
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        <HStack className="h-12 gap-2 items-center flex-1">
          <Pressable>
            {/* <Tooltip
              placement="top"
              trigger={(triggerProps) => {
                return (
                  <Pressable {...triggerProps}>
                    <Icon
                    className="w-4 h-4 bg-transparent rounded-lg"
                      color="$secondary700"
                      // p="$2"
                      as={SmilePlus}
                    />
                  </Pressable>
                );
              }}
            >
              <TooltipContent>
                <TooltipText>Choose Emoji</TooltipText>
              </TooltipContent>
            </Tooltip> */}
          </Pressable>
          {/* <CustomInput
            formControlProps={{
              flex: 1,
              variant: 'outline',
              isDisabled: false,
              isInvalid: false,
              isReadOnly: false,

              // w:"$96",
              borderColor: 'transparent',
              borderRadius: '$lg',
              alignItems: 'center',
            }}
            inputProps={{
              w: '$full',
              borderWidth: 0,
              sx: {
                _web: {
                  boxShadow: 'none',
                },
              },
            }}
          >
            <InputField
              borderColor="transparent"
              w="$full"
              fontSize="$md"
              fontWeight="$normal"
              type="text"
              placeholderTextColor="$text400"
              placeholder={placeholderText}
            />
          </CustomInput> */}
        </HStack>
        <HStack className="items-center gap-6">
          {/* <Tooltip
            placement="top"
            trigger={(triggerProps) => {
              return (
                <Pressable {...triggerProps}>
                  <Icon
                    color="$secondary700"
                    w="$4"
                    h="$4"
                    bg="$transparent"
                    // p="$2"
                    borderRadius="$lg"
                    as={ImagePlus}
                  />
                </Pressable>
              );
            }}
          >
            <TooltipContent>
              <TooltipText>Photos & Videos</TooltipText>
            </TooltipContent>
          </Tooltip>

          <Tooltip
            placement="top"
            trigger={(triggerProps) => {
              return (
                <Pressable {...triggerProps}>
                  <Icon
                    color="$secondary700"
                    w="$4"
                    h="$4"
                    bg="$transparent"
                    // p="$2"
                    borderRadius="$lg"
                    as={Paperclip}
                  />
                </Pressable>
              );
            }}
          >
            <TooltipContent>
              <TooltipText>Document</TooltipText>
            </TooltipContent>
          </Tooltip>

          <Tooltip
            placement="top"
            trigger={(triggerProps) => {
              return (
                <Pressable {...triggerProps}>
                  <Icon
                    color="$secondary700"
                    w="$4"
                    h="$4"
                    bg="$transparent"
                    // p="$2"
                    borderRadius="$lg"
                    as={Camera}
                  />
                </Pressable>
              );
            }}
          >
            <TooltipContent>
              <TooltipText>Camera</TooltipText>
            </TooltipContent>
          </Tooltip>

          <Tooltip
            placement="top"
            trigger={(triggerProps) => {
              return (
                <Pressable {...triggerProps}>
                  <Icon
                    color="$background200"
                    w="$4"
                    h="$4"
                    bg="$primary500"
                    p="$2"
                    borderRadius="$lg"
                    as={Mic}
                  />
                </Pressable>
              );
            }}
          >
            <TooltipContent>
              <TooltipText>Mic</TooltipText>
            </TooltipContent>
          </Tooltip> */}
        </HStack>
      </HStack>
    );
  };
  const ChatMessage = ({
    message,
    time,
    isRight,
  }: {
    message: string;
    time: string;
    isRight: boolean;
  }) => (
    <VStack
      className="rounded-lg px-2 py-2 gap-2.5 mb-2.5"
      maxWidth={isRight ? '$2/3' : 'auto'}
      bg={isRight ? '$primary500' : '$background50'}
      alignSelf={isRight ? 'flex-end' : 'flex-start'}
      flexDirection={isRight ? 'column' : 'row'}
    >
      <Text
        className="text-sm font-normal pt-0.5 px-2"
        color={isRight ? '$text200' : '$text700'}
      >
        {message}
      </Text>
      {isRight && (
        <HStack className="items-center self-end">
          <Text className="text-2xs font-normal text-text-300 self-end items-center">
            {time}
          </Text>
          {/* <Icon
            paddingHorizontal="$2"
            as={CheckCheck}
            color="$background300"
            sx={{ '.dark_theme': { color: '$background300' } }}
            w="$3"
            h="$3"
          /> */}
        </HStack>
      )}
      {!isRight && (
        <Text className="text-2xs font-normal text-text-500 px-2 self-end">
          {time}
        </Text>
      )}
    </VStack>
  );
  const ChatList = ({ selectedChat }: { selectedChat: selectedChatType }) => {
    const messages: MessageType = {
      'Mila Dann': {
        messagesRight: ['These are really cool 💯'],
        messagesLeft: [],
      },
      'Jared Dunn': {
        messagesRight: [],
        messagesLeft: ['Typing...'],
      },
      'Richard Lyod': {
        messagesRight: [
          'Hey! Haha, no epic news, just wanted to check if you are around. We are going to Starbucks. Wanted to check if you would like to join.',
          'No. You can join us',
          'Seems like we will be here for sometime 😂',
        ],
        messagesLeft: [
          'Hey! Sorry I missed your call',
          'Your number seems to be not reachable',
          "What's the scoop?",
          'oh! I was just on my way from office',
          'Will be reaching home in 40mins',
          'Are you guys about to leave?',
          'Great 💯 Will be there soon!',
        ],
      },
      'Mike': {
        messagesRight: ['These are really cool 💯'],
        messagesLeft: ['Typing...'],
      },
      'Ben': {
        messagesRight: [],
        messagesLeft: [
          'Hey Ben, what are you up to?',
          'I’ll be there in 2 mins',
        ],
      },
      'John': {
        messagesRight: [],
        messagesLeft: ['Done ✅'],
      },
      'Taylor': {
        messagesRight: ['Okay'],
        messagesLeft: [
          'Hey! Haha, no epic news, just wanted to check if you are around. We are going to Starbucks. Wanted to check if you would like to join.',
          'No. You can join us',
          'Seems like we will be here for sometime 😂',
        ],
      },
      'Batch 2024': {
        messagesRight: [],
        messagesLeft: ['Steve typing...'],
      },
      'Michele': {
        messagesRight: [],
        messagesLeft: ['I can’t wait to hear about...'],
      },
    };

    const messageTime = [
      '6:40pm',
      '6:40pm',
      '6:41pm',
      '6:45pm',
      '6:55pm',
      '6:55pm',
      '6:56pm',
      '7:02pm',
      '7:02pm',
      '7:05pm',
    ];

    const selectedChatMessages = messages[selectedChat?.name] || {};
    const { messagesLeft, messagesRight } = selectedChatMessages;

    const messagesOrder = [
      ...messagesLeft.slice(0, 3),
      ...messagesRight.slice(0, 1),
      ...messagesLeft.slice(3, 6),
      ...messagesRight.slice(1, 3),
      ...messagesLeft.slice(6),
    ];
    const messagesOrderWithTime = messagesOrder.map((message, index) => ({
      message,
      time: messageTime[index],
      isRight: messagesRight.includes(message),
    }));

    return (
      <Box className="ml-4 mr-4 py-6 flex-1">
        {messagesOrderWithTime.map((data, index) => (
          <ChatMessage
            key={index}
            message={data.message}
            time={data.time}
            isRight={data.isRight}
          />
        ))}
      </Box>
    );
  };

  const SearchBar = () => {
    return (
      <></>
      // <CustomInput
      //   inputProps={{
      //     m: '$4',
      //     borderRadius: '$lg',
      //     style: {
      //       shadowColor: '#262626',
      //       shadowOffset: { width: 0, height: -2 },
      //       shadowOpacity: 0.1,
      //       shadowRadius: 10,
      //       elevation: 5,
      //     },
      //   }}
      //   icon={
      //     <InputIcon
      //       sx={{ '.dark_theme': { color: '$background700' } }}
      //       color="$background700"
      //       as={SearchIcon}
      //     />
      //   }
      // >
      //   <InputField
      //     type={'text'}
      //     placeholderTextColor={'$text700'}
      //     placeholder={'Search...'}
      //   />
      // </CustomInput>
    );
  };
  const TruncatedText = ({
    children,
    numberOfLines,
  }: {
    children: React.ReactNode;
    numberOfLines: number;
  }) => (
    <Text
      className="text-text-500 text-sm"
      numberOfLines={numberOfLines}
      ellipsizeMode="tail"
    >
      {children}
    </Text>
  );
  const ChatItem = ({
    avatarSource,
    name,
    message,
    badgeCount,
    index,
    onSelect,
  }: {
    avatarSource: string;
    name: string;
    message: string;
    badgeCount?: number;
    index: number;
    onSelect: (arg0: {
      name: string;
      message: string;
      avatarSource: string;
    }) => void;
  }) => {
    return (
      <Pressable
        className="hover:bg-background50 hover:rounded-md active:bg-background-100 rounded-md"
        sx={{
          '@md': {
            bg: selectedChat.name === name ? '$background100' : 'transparent',
          },
        }}
        // bg={selectedChat.name === name ? '$background100' : 'transparent'}
        onPress={() => {
          onSelect({ name, message, avatarSource });
        }}
      >
        <UserCard className="py-2.5 px-4 flex-row">
          <UserCardAvatar className="h-9 w-9" name={name} src={avatarSource} />
          <UserCardStack>
            <Text className="text-text-900 text-sm font-bold" numberOfLines={1}>
              {name}
            </Text>
            <TruncatedText numberOfLines={1}>{message}</TruncatedText>
          </UserCardStack>
          <UserCardStack className="max-w-6 items-end">
            <Text className="text-text-500 text-xs font-normal">12m</Text>
            {index < 3 && (
              <Badge
                className="h-4 w-4 bg-background-950 rounded-full items-center justify-center"
                variant="solid"
              >
                <BadgeText className="tetx-xs text-text-0">
                  {badgeCount}
                </BadgeText>
              </Badge>
            )}
          </UserCardStack>
        </UserCard>
      </Pressable>
    );
  };
  const Inbox = ({
    chatData,
    onSelect,
  }: {
    chatData: chatDataType[];
    onSelect: (arg0: {
      name: string;
      message: string;
      avatarSource: string;
    }) => void;
  }) => {
    return (
      <VStack className="py-0 px-3 gap-5 md:py-6">
        <VStack className="gap-1 w-full">
          {chatData.map((chat: chatDataType, index: number) => (
            <ChatItem key={index} {...chat} index={index} onSelect={onSelect} />
          ))}
        </VStack>
      </VStack>
    );
  };

  const Content = () => {
    return <ChatsContent />;
  };

  const ChatsContent = () => {
    return (
      <>
        {showProfile ? (
          <>
            {/* <ScrollView> */}
            <Profile />
            {/* </ScrollView> */}
          </>
        ) : (
          <>
            {showChatList ? (
              <>
                <VStack className="h-lvh justify-between">
                  <ChatTopBar />
                  {/* <ScrollView> */}
                  <ChatList selectedChat={selectedChat} />
                  {/* </ScrollView> */}
                  <TypeMessage />
                </VStack>
              </>
            ) : (
              <>
                {/* <ScrollView> */}
                <Inbox chatData={chatData} onSelect={handleChatSelect} />
                {/* </ScrollView> */}
              </>
            )}
          </>
        )}
      </>
    );
  };

  return (
    <Box className="w-full h-lvh">
      <HStack className="bg-background-0 h-full w-full md:border md:rounded-lg sm:border-0 flex-1 border-border-200 overflow-hidden self-center">
        <VStack
          className="sm:hidden md:flex"
          sx={{ '@base': { display: 'none' }, '@md': { display: 'flex' } }}
        >
          <Box className="w-11 h-11 m-4 bg-white rounded-lg border items-center justify-center border-border-200">
            {/* <Icon className="w-5 h-5" as={GluestackIcon}  /> */}
          </Box>
          <Sidebar />
        </VStack>
        <Divider
          className="bg-background-200 w-full top-18 absolute"
          sx={{ '@base': { display: 'none' }, '@md': { display: 'flex' } }}
          orientation="horizontal"
          transform="translateY(-50%)"
        />
        <Divider
          className="bg-background-200 h-auto relative"
          sx={{ '@base': { display: 'none' }, '@md': { display: 'flex' } }}
          orientation="vertical"
        />
        <VStack className="flex-1 md:w-1/4 md:flex-none md:flex sm:hidden flex-1">
          <SearchBar />
          {/* <ScrollView> */}
          <Inbox chatData={chatData} onSelect={handleChatSelect} />
          {/* </ScrollView> */}
        </VStack>
        <VStack className="h-lvh md:hidden sm:flex sm:flex-1">
          {showTabButton && (
            <>
              <HStack className="bg-background-100 p-4 justify-between">
                <Pressable>
                  {/* <Icon as={GluestackIcon} class="w-5 h-5" /> */}
                </Pressable>
                <HStack className="gap-4">
                  <Pressable>
                    {/* <Icon as={SearchIcon} class="w-5 h-5" /> */}
                  </Pressable>
                  {/* <Menu
                    borderWidth={1}
                    placement="bottom right"
                    disabledKeys={['Theme']}
                    trigger={({ ...triggerProps }) => (
                      <Pressable bg="transparent" {...triggerProps}>
                        <Icon as={MoreVertical} />
                      </Pressable>
                    )}
                  >
                    <MenuItem
                      sx={{ '@lg': { display: 'none' } }}
                      display="flex"
                      key="Profile"
                      textValue="Profile"
                    >
                      <Icon as={UserCircle} size="sm" mr="$2" />
                      <MenuItemLabel size="sm">Profile</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key="Settings" textValue="Settings">
                      <Icon as={Ban} size="sm" mr="$2" />
                      <MenuItemLabel size="sm">Settings</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key="Help" textValue="Help">
                      <Icon as={AlertCircle} size="sm" mr="$2" />
                      <MenuItemLabel size="sm">Help</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key="Logout" textValue="Logout">
                      <Icon as={AlertCircle} size="sm" mr="$2" />
                      <MenuItemLabel size="sm">Logout</MenuItemLabel>
                    </MenuItem>
                  </Menu> */}
                </HStack>
              </HStack>
              <HStack className="p-6 pb-2 justify-between items-center">
                {/* <TabButton tab={tab} icon={MessageCircle} text="Chats" />
                <TabButton tab={tab} icon={CircleDollarSign} text="Payments" />
                <TabButton tab={tab} icon={CalendarDays} text="Calendar" /> */}
              </HStack>
            </>
          )}
          {/* <ScrollView> */}
          <Content />
          {/* </ScrollView> */}
        </VStack>
        <Divider
          className="bg-background-200 h-auto md:flex sm:hidden"
          orientation="vertical"
        />

        <VStack className="lg:hidden md:flex md:flex-1 sm:hidden w-2/5">
          {showProfile ? (
            <>
              {/* <ScrollView> */}
              <Profile />
              {/* </ScrollView> */}
            </>
          ) : (
            <>
              <ChatTopBar />
              {/* <ScrollView> */}
              <ChatList selectedChat={selectedChat} />
              {/* </ScrollView> */}
              <TypeMessage />
            </>
          )}
        </VStack>
        <VStack className="lg:flex lg:flex-1 md:hidden lg:w-2/5">
          <ChatTopBar />
          {/* <ScrollView> */}
          <ChatList selectedChat={selectedChat} />
          {/* </ScrollView> */}
          <TypeMessage />
        </VStack>
        <Divider
          className="bg-background-200 h-auto relative"
          sx={{ '@base': { display: 'none' }, '@md': { display: 'flex' } }}
          orientation="vertical"
        />
        <VStack
          className="lg:flex md:hidden"
          sx={{
            '@lg': {
              display: 'flex',
              // w:"$1/3"
            },
          }}
          display="none"
        >
          {/* <ScrollView> */}
          <Profile />
          {/* </ScrollView> */}
        </VStack>
      </HStack>
    </Box>
  );
};

export default Chats;
