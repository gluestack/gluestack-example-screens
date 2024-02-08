import React, { useState } from 'react';
import {
  VStack,
  Icon,
  Image,
  Badge,
  BadgeText,
  Divider,
  HStack,
  InputIcon,
  InputField,
  SearchIcon,
  Heading,
  Text,
  AvatarFallbackText,
  Avatar,
  ScrollView,
  Box,
  Switch,
  Menu,
  MenuItem,
  MenuItemLabel,
  Pressable,
  Tooltip,
  TooltipContent,
  TooltipText,
  useMediaQuery,
} from '@gluestack-ui-new/themed';
import {
  AlertCircle,
  ArrowLeft,
  BadgeHelp,
  Ban,
  BellOff,
  CalendarDays,
  Camera,
  CheckCheck,
  ChevronDown,
  CircleDollarSign,
  ImagePlus,
  LogOut,
  MessageCircle,
  Mic,
  MoreVertical,
  Paperclip,
  Phone,
  Settings,
  SmilePlus,
  Star,
  User,
  UserCircle,
  Video,
} from 'lucide-react-native';
import { Lock } from 'lucide-react-native';
import { DotIcon, GluestackIcon } from './Icons';
import UserCard from '../components/UserCard';
import UserCardAvatar from '../components/UserCardAvatar';
import UserCardStack from '../components/UserCardStack';
import Stats from '../components/Stats';
import CustomInput from '../components/CustomInput';

const Chats = () => {
  const chatData = [
    {
      avatarSource: require('../assets/Avatar1.svg'),
      name: 'Mila Dann',
      message: 'These are really cool 💯',
      badgeCount: 1,
    },
    {
      avatarSource: require('../assets/Avatar2.svg'),
      name: 'Jared Dunn',
      message: 'Typing...',
      badgeCount: 1,
    },
    {
      avatarSource: require('../assets/Avatar3.png'),
      name: 'Richard Lyod',
      message: 'Great 💯 Will be there soon!',
      badgeCount: 4,
    },
    {
      avatarSource: require('../assets/Avatar4.png'),
      name: 'Mike',
      message: 'wohoooooo 🔥',
    },
    {
      avatarSource: require('../assets/Avatar5.png'),
      name: 'Ben',
      message: 'I’ll be there in 2 mins',
    },

    {
      avatarSource: require('../assets/Avatar6.png'),
      name: 'Taylor',
      message: 'Okay',
    },
    {
      avatarSource: require('../assets/Avatar7.png'),
      name: 'Batch 2024',
      message: 'Steve typing...',
    },
    {
      avatarSource: require('../assets/Avatar8.png'),
      name: 'Michele',
      message: 'I can’t wait to hear about...',
    },
  ];
  const [selectedChat, setSelectedChat] = useState({
    name: 'Richard Lyod',
    message: '',
    avatarSource: require('../assets/Avatar3.png'),
  });
  const [showChatList, setShowChatList] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showTabButton, setShowTabButton] = useState(true);
  const isSmallScreen = useMediaQuery({ maxWidth: 480 }); // Define your breakpoint for small screens
  const placeholderText = isSmallScreen
    ? 'Type here...'
    : 'Type a message here...';
  const handleChatSelect = ({ name, message, avatarSource }) => {
    setSelectedChat({ name, message, avatarSource });
    setShowChatList(true);
    setShowProfile(false);
    setShowTabButton(false);
  };

  const handleBackToInbox = () => {
    setShowChatList(false);
    setShowProfile(false);
    setShowTabButton(true);
  };
  const handleBackToChatList = () => {
    setShowChatList(true);
    setShowProfile(false);
  };
  const handleShowProfile = () => {
    setShowChatList(false);
    setShowProfile(true);
    setShowTabButton(false);
  };

  const TruncatedText = ({ children, numberOfLines }) => (
    <Text
      color="$text500"
      size="sm"
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
  }) => {
    return (
      <Pressable
        sx={{
          ':hover': { bg: '$background50', borderRadius: '$md' },
          ':active': { bg: '$background100' },
          '@md': {
            bg: selectedChat.name === name ? '$background100' : 'transparent',
          },
        }}
        // bg={selectedChat.name === name ? '$background100' : 'transparent'}
        borderRadius="$md"
        onPress={() => {
          onSelect({ name, message, avatarSource });
        }}
      >
        <UserCard paddingVertical="$2.5" paddingHorizontal="$4" direction="row">
          <UserCardAvatar name={name} src={avatarSource} h="$9" w="$9" />
          <UserCardStack>
            <Text
              numberOfLines={1}
              sx={{ '.dark_theme': { color: '$text900' } }}
              color="$text900"
              fontSize="$sm"
              fontWeight="$bold"
            >
              {name}
            </Text>
            <TruncatedText numberOfLines={1}>{message}</TruncatedText>
          </UserCardStack>
          <UserCardStack maxWidth="$6" alignItems="flex-end">
            <Text
              sx={{ '.dark_theme': { color: '$text500' } }}
              color="$text500"
              fontSize="$xs"
              fontWeight="$normal"
            >
              12m
            </Text>
            {index < 3 && (
              <Badge
                h="$4"
                w="$4"
                bg="$background950"
                borderRadius="$full"
                variant="solid"
                alignItems="center"
                justifyContent="center"
              >
                <BadgeText fontSize="$2xs" color="$text0">
                  {badgeCount}
                </BadgeText>
              </Badge>
            )}
          </UserCardStack>
        </UserCard>
      </Pressable>
    );
  };

  const Inbox = ({ chatData, onSelect }) => {
    return (
      <VStack
        sx={{ '@md': { paddingVertical: '$6' } }}
        paddingVertical="$0"
        paddingHorizontal="$3"
        gap="$5"
      >
        <VStack gap="$1" width="100%">
          {chatData.map((chat, index) => (
            <ChatItem key={index} {...chat} index={index} onSelect={onSelect} />
          ))}
        </VStack>
      </VStack>
    );
  };

  const ChatMessage = ({ message, time, isRight }) => (
    <VStack
      borderRadius="$lg"
      px="$2"
      py="$2"
      gap="$2.5"
      maxWidth={isRight ? '$2/3' : 'auto'}
      bg={isRight ? '$primary500' : '$background50'}
      marginBottom="$2.5"
      alignSelf={isRight ? 'flex-end' : 'flex-start'}
      flexDirection={isRight ? 'column' : 'row'}
    >
      <Text
        fontSize="$sm"
        fontWeight="$normal"
        color={isRight ? '$text200' : '$text700'}
        paddingHorizontal="$2"
        pt="$0.5"
      >
        {message}
      </Text>
      {isRight && (
        <HStack alignItems="center" alignSelf="flex-end">
          <Text
            fontSize="$2xs"
            fontWeight="$normal"
            color="$text300"
            sx={{ '.dark_theme': { color: '$text300' } }}
            alignSelf="flex-end"
            alignItems="center"
          >
            {time}
          </Text>
          <Icon
            paddingHorizontal="$2"
            as={CheckCheck}
            color="$background300"
            sx={{ '.dark_theme': { color: '$background300' } }}
            w="$3"
            h="$3"
          />
        </HStack>
      )}
      {!isRight && (
        <Text
          fontSize="$2xs"
          fontWeight="$normal"
          color="$text500"
          sx={{ '.dark_theme': { color: '$text500' } }}
          paddingHorizontal="$2"
          alignSelf="flex-end"
        >
          {time}
        </Text>
      )}
    </VStack>
  );

  const ChatList = ({ selectedChat }) => {
    const messages = {
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
      <Box ml="$4" mr="$4" paddingVertical="$6" flex={1}>
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

  const TypeMessage = () => {
    return (
      <HStack
        space="lg"
        alignItems="center"
        paddingHorizontal="$3"
        paddingVertical="$0"
        borderWidth={1}
        borderColor="$border300"
        shadowColor="$trueGray800"
        sx={{
          '.dark_theme': { borderColor: '$border300' },
          '@md': { borderRadius: '$none' },
          // '@base': {
          //   borderBottomLeftRadius: '$lg',
          //   borderBottomRightRadius: '$lg',
          // },
        }}
        style={{
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        <HStack h="$12" gap="$2" alignItems="center" flex={1}>
          <Pressable>
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
                      as={SmilePlus}
                    />
                  </Pressable>
                );
              }}
            >
              <TooltipContent>
                <TooltipText>Choose Emoji</TooltipText>
              </TooltipContent>
            </Tooltip>
          </Pressable>
          <CustomInput
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
          </CustomInput>
        </HStack>
        <HStack alignItems="center" gap="$6">
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
          </Tooltip>
        </HStack>
      </HStack>
    );
  };

  const ChatTopBar = () => {
    return (
      <Pressable>
        <HStack
          sx={{
            '@base': { bg: '$background100' },
            '@md': { bg: 'transparent' },
          }}
          p="$4"
          justifyContent="space-between"
        >
          <HStack alignItems="center" gap="$4">
            <Box
              sx={{ '@sm': { display: 'flex' }, '@md': { display: 'none' } }}
            >
              <Pressable onPress={handleBackToInbox}>
                <Icon as={ArrowLeft} />
              </Pressable>
            </Box>
            <VStack gap="$1">
              <Heading
                sx={{ '.dark_theme': { color: '$text900' } }}
                color="$text900"
                fontSize="$lg"
                fontWeight="$bold"
              >
                {selectedChat ? selectedChat.name : ''}
              </Heading>
              <HStack alignItems="center" space="xs">
                <Icon as={DotIcon} w="$1.5" h="$1.5" />
                <Text size="sm">Online</Text>
              </HStack>
            </VStack>
          </HStack>
          <HStack alignSelf="center" gap="$6">
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

            <Menu
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
            </Menu>
          </HStack>
        </HStack>
      </Pressable>
    );
  };

  const SearchBar = () => {
    return (
      <CustomInput
        inputProps={{
          m: '$4',
          borderRadius: '$lg',
          style: {
            shadowColor: '#262626',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5,
          },
        }}
        icon={
          <InputIcon
            sx={{ '.dark_theme': { color: '$background700' } }}
            color="$background700"
            as={SearchIcon}
          />
        }
      >
        <InputField
          type={'text'}
          placeholderTextColor={'$text700'}
          placeholder={'Search...'}
        />
      </CustomInput>
    );
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
    const [activeIcon, _setActiveIcon] = useState(defaultActiveIcon);
    const messagesBadgeCount = 3;

    return (
      <VStack
        paddingVertical="$6"
        paddingHorizontal="$4"
        alignItems="flex-start"
        gap="$6"
      >
        {icons.map(({ icon: IconComponent, label, tooltip }) => (
          <Tooltip
            key={label}
            placement="right"
            trigger={(triggerProps) => (
              <Pressable
                sx={{
                  ':hover': { bg: '$background50' },
                  ':active': { bg: '$background100' },
                  'borderRadius': '$lg',
                }}
                {...triggerProps}
              >
                <Icon
                  as={IconComponent}
                  w="$6"
                  h="$6"
                  p="$2"
                  bg={activeIcon === label ? '$primary500' : 'transparent'}
                  color={
                    activeIcon === label ? '$background200' : '$background800'
                  }
                  borderRadius="$lg"
                />
                {label === 'Messages' && (
                  <Badge
                    h="$4"
                    w="$4"
                    bg={activeIcon === label ? '$background0' : '$primary400'}
                    borderRadius="$full"
                    position="absolute"
                    top={4}
                    right={4}
                    zIndex={1}
                    variant="solid"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <BadgeText
                      fontSize="$2xs"
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
  const IconWithTooltip = ({ icon: IconComponent, label, tooltip }) => (
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
        <VStack
          width="auto"
          paddingVertical="$4.5"
          paddingHorizontal="$3"
          alignItems="flex-start"
          borderTopRightRadius="$lg"
          bg="$background50"
        >
          <UserCard direction="column">
            <Box
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
              name={selectedChat.name}
              src={selectedChat.avatarSource}
              w="$18"
              h="$18"
            />
            <UserCardStack mt="$4" gap="$0.5" alignItems="center">
              <Text
                sx={{ '.dark_theme': { color: '$text900' } }}
                color="$text900"
                fontSize="$lg"
                textAlign="center"
                fontWeight="$bold"
              >
                {selectedChat.name}
              </Text>
              <Text
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
          <Stats mt="$4" gap="$11">
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
            <IconWithTooltip
              icon={SearchIcon}
              label="Search"
              tooltip="Search"
            />
          </Stats>
        </VStack>

        <VStack alignItems="flex-start" mt="$6" pl="$4.5" gap="$3">
          <Text
            sx={{ '.dark_theme': { color: '$text900' } }}
            color="$text900"
            fontSize="$md"
            fontWeight="$medium"
          >
            Media, links, docs
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <HStack gap="$3">
              <Image
                h="$20"
                w="$20"
                source={require('../assets/Image.png')}
                resizeMode="contain"
                alt=""
              />
              <Image
                h="$20"
                w="$20"
                source={require('../assets/Image.png')}
                resizeMode="contain"
                alt=""
              />
              <Image
                h="$20"
                w="$20"
                source={require('../assets/Image.png')}
                resizeMode="contain"
                alt=""
              />
              <Image
                h="$20"
                w="$20"
                source={require('../assets/Image.png')}
                resizeMode="contain"
                alt=""
              />
            </HStack>
          </ScrollView>
        </VStack>

        <VStack mt="$5" gap="$5" p="$6">
          <Text
            sx={{ '.dark_theme': { color: '$text900' } }}
            fontSize="$md"
            color="$text900"
            fontWeight="$medium"
          >
            Notification Settings
          </Text>
          <VStack alignSelf="stretch" gap="$6">
            <HStack justifyContent="space-between">
              <HStack gap="$3">
                <Icon w="$4" h="$4" as={Star} />
                <Text fontSize="$sm" fontWeight="$normal">
                  Starred Messages
                </Text>
              </HStack>
              <Text
                sx={{ '.dark_theme': { color: '$text400' } }}
                color="$text400"
                fontSize="$2xs"
                fontWeight="$medium"
              >
                123
              </Text>
            </HStack>
            <HStack justifyContent="space-between">
              <HStack gap="$3">
                <Icon w="$4" h="$4" as={BellOff} />
                <Text fontSize="$sm" fontWeight="$normal">
                  Mute Notifications
                </Text>
              </HStack>

              <Switch w="$10" h="$5" isDisabled={false} />
            </HStack>
            <HStack justifyContent="space-between">
              <HStack gap="$3">
                <Icon w="$4" h="$4" as={Lock} />
                <Text fontSize="$sm" fontWeight="$normal">
                  Chat lock
                </Text>
              </HStack>

              <Switch defaultValue={true} w="$10" h="$5" isDisabled={false} />
            </HStack>
            <HStack justifyContent="space-between">
              <HStack gap="$3">
                <Icon w="$4" h="$4" as={ImagePlus} />
                <Text fontSize="$sm" fontWeight="$normal">
                  Media Visibility
                </Text>
              </HStack>

              <Switch defaultValue={true} w="$10" h="$5" isDisabled={false} />
            </HStack>
          </VStack>
        </VStack>

        <VStack p="$6" gap="$3">
          <Text
            sx={{ '.dark_theme': { color: '$text900' } }}
            fontSize="$md"
            color="$text900"
            fontWeight="$medium"
          >
            7 groups in common
          </Text>

          <VStack>
            <HStack alignItems="center" gap="$3" paddingVertical="$2.5">
              <Avatar bgColor="$primary500" w="$9" h="$9" borderRadius="$full">
                <AvatarFallbackText color="$text0">B A</AvatarFallbackText>
              </Avatar>

              <VStack gap="$0.5">
                <Text color="$text900" fontWeight="$bold" fontSize="$sm">
                  Batch 2024
                </Text>
                <Text
                  sx={{ '.dark_theme': { color: '$text500' } }}
                  fontWeight="$normal"
                  fontSize="$xs"
                  color="$text500"
                >
                  John, Mike, Jared + 42 others
                </Text>
              </VStack>
            </HStack>

            <HStack alignItems="center" gap="$3" paddingVertical="$2">
              <Avatar bgColor="$primary500" w="$9" h="$9" borderRadius="$full">
                <AvatarFallbackText color="$text0">T P</AvatarFallbackText>
              </Avatar>

              <VStack gap="$0.5">
                <Text color="$text900" fontSize="$sm" fontWeight="$bold">
                  Trip Planning
                </Text>
                <Text
                  sx={{ '.dark_theme': { color: '$text500' } }}
                  fontWeight="$normal"
                  fontSize="$xs"
                  color="$text500"
                >
                  Michele, Mike
                </Text>
              </VStack>
            </HStack>
          </VStack>
          <Pressable>
            <HStack paddingHorizontal="$3.5" gap="$2">
              <Text
                sx={{ '.dark_theme': { color: '$secondary600' } }}
                color="$secondary600"
                fontSize="$xs"
                fontWeight="$semibold"
              >
                5 more
              </Text>
              <Icon w="$3" h="$3" as={ChevronDown} />
            </HStack>
          </Pressable>
        </VStack>
      </>
    );
  };
  const TabButton = ({ tab, icon, text }) => (
    <Pressable opacity={tab === text.toLowerCase() ? '$100' : '$60'}>
      <HStack
        gap="$1.5"
        alignItems="center"
        alignSelf="center"
        borderBottomWidth="$2"
        pb="$1.5"
        borderBottomColor={
          tab === text.toLowerCase() ? '$primary400' : 'transparent'
        }
      >
        <Icon
          sx={{ '@base': { display: 'none' }, '@xs': { display: 'flex' } }}
          w="$4.5"
          h="$4.5"
          as={icon}
        />
        <Text fontSize="$md" color="$primary500" fontWeight="$medium">
          {text}
        </Text>
      </HStack>
    </Pressable>
  );

  const Content = () => {
    return <ChatsContent />;
  };

  const ChatsContent = () => {
    return (
      <>
        {showProfile ? (
          <>
            <ScrollView>
              <Profile />
            </ScrollView>
          </>
        ) : (
          <>
            {showChatList ? (
              <>
                <VStack h="100vh" justifyContent="space-between">
                  <ChatTopBar />
                  <ScrollView>
                    <ChatList selectedChat={selectedChat} />
                  </ScrollView>
                  <TypeMessage />
                </VStack>
              </>
            ) : (
              <>
                <ScrollView>
                  <Inbox chatData={chatData} onSelect={handleChatSelect} />
                </ScrollView>
              </>
            )}
          </>
        )}
      </>
    );
  };

  const [tab, _setTab] = React.useState<'chats' | 'payments' | 'calender'>(
    'chats'
  );
  return (
    <Box
      sx={{
        '@md': { h: 720 },
        // '@base': { h: 550 }
      }}
      w="$full"
    >
      <HStack
        bg="$background0"
        sx={{
          '.dark_theme': { borderColor: '$border200' },
          '@md': { borderWidth: 1, borderRadius: '$lg' },
          '@sm': { borderWidth: 0 },
        }}
        h="$full"
        w="$full"
        overflow="hidden"
        flex={1}
        borderColor="$border200"
        alignSelf="center"
      >
        <VStack
          sx={{ '@base': { display: 'none' }, '@md': { display: 'flex' } }}
        >
          <Box
            w="$11"
            h="$11"
            m="$4"
            sx={{
              '.dark_theme': { borderColor: '$white', bg: '$white' },
              '.light_theme': { borderColor: '$border200', bg: '$white' },
            }}
            borderRadius="$lg"
            borderWidth="$1"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={GluestackIcon} w="$5" h="$5" />
          </Box>

          <Sidebar />
        </VStack>

        <Divider
          sx={{ '@base': { display: 'none' }, '@md': { display: 'flex' } }}
          orientation="horizontal"
          bg="$background200"
          w="$full"
          transform="translateY(-50%)"
          top="10%"
          position="absolute"
        />
        <Divider
          sx={{ '@base': { display: 'none' }, '@md': { display: 'flex' } }}
          orientation="vertical"
          bg="$background200"
          h="auto"
          position="relative"
        >
          {/* <Icon
            sx={{ '@base': { display: 'none' }, '@md': { display: 'flex' } }}
            bg="$background200"
            color="$background800"
            pt="$1.5"
            pb="$1.5"
            pl="$0.5"
            pr="$0.5"
            as={GripVertical}
            size="md"
            borderRadius="$sm"
            position="absolute"
            top="50%" 
            transform="translateY(-50%)" 
            // right="-$1"
            zIndex={2} 
          /> */}
        </Divider>
        <VStack
          sx={{
            '@md': {
              w: '$1/4',
              flex: 'none',
              display: 'flex',
            },
          }}
          flex={1}
          display="none"
        >
          <SearchBar />
          <ScrollView>
            <Inbox chatData={chatData} onSelect={handleChatSelect} />
          </ScrollView>
        </VStack>

        <VStack
          height="100vh"
          sx={{
            '@md': {
              display: 'none',
            },
            '@base': {
              flex: 1,
              display: 'flex',
            },
          }}
        >
          {showTabButton && (
            <>
              <HStack bg="$background100" p="$4" justifyContent="space-between">
                <Pressable>
                  <Icon as={GluestackIcon} w="$5" h="$5" />
                </Pressable>
                <HStack gap="$4">
                  <Pressable>
                    <Icon as={SearchIcon} w="$5" h="$5" />
                  </Pressable>
                  <Menu
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
                  </Menu>
                </HStack>
              </HStack>
              <HStack
                p="$6"
                pb="$2"
                justifyContent="space-between"
                alignItems="center"
              >
                <TabButton tab={tab} icon={MessageCircle} text="Chats" />
                <TabButton tab={tab} icon={CircleDollarSign} text="Payments" />
                <TabButton tab={tab} icon={CalendarDays} text="Calendar" />
              </HStack>
            </>
          )}
          <ScrollView>
            <Content tab={tab} />
          </ScrollView>
        </VStack>

        <Divider
          sx={{ '@base': { display: 'none' }, '@md': { display: 'flex' } }}
          orientation="vertical"
          bg="$background200"
          h="auto"
        />
        <VStack
          sx={{
            '@lg': { display: 'none' },
            '@md': {
              display: 'flex',
              flex: 1,
            },
          }}
          display="none"
          w="$2/5"
        >
          {showProfile ? (
            <>
              <ScrollView>
                <Profile />
              </ScrollView>
            </>
          ) : (
            <>
              <ChatTopBar />
              <ScrollView>
                <ChatList selectedChat={selectedChat} />
              </ScrollView>
              <TypeMessage />
            </>
          )}
        </VStack>

        <VStack
          sx={{
            '@lg': {
              display: 'flex',
              flex: 1,
            },
          }}
          display="none"
          w="$2/5"
        >
          <ChatTopBar />
          <ScrollView>
            <ChatList selectedChat={selectedChat} />
          </ScrollView>
          <TypeMessage />
        </VStack>

        <Divider
          sx={{ '@base': { display: 'none' }, '@md': { display: 'flex' } }}
          orientation="vertical"
          bg="$background200"
          h="auto"
          position="relative"
        >
          {/* <Icon
            sx={{ '@base': { display: 'none' }, '@md': { display: 'flex' } }}
            bg="$background200"
            color="$background800"
            pt="$1.5"
            pb="$1.5"
            pl="$0.5"
            pr="$0.5"
            as={GripVertical}
            size="md"
            borderRadius="$sm"
            position="absolute"
            top="50%" // Center the icon vertically
            transform="translateY(-50%)" // Adjust for vertical centering
            right="-$1"
            zIndex={2} // Set a higher zIndex for the icon
          /> */}
        </Divider>
        <VStack
          sx={{
            '@lg': {
              display: 'flex',
              // w:"$1/3"
            },
          }}
          display="none"
        >
          <ScrollView>
            <Profile />
          </ScrollView>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Chats;
