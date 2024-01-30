import React, { useEffect, useState } from 'react';
import {
  VStack,
  Icon,
  Image,
  Badge,
  BadgeText,
  Divider,
  HStack,
  Input,
  InputSlot,
  InputIcon,
  InputField,
  SearchIcon,
  Heading,
  Text,
  AvatarImage,
  AvatarFallbackText,
  Avatar,
  ScrollView,
  Box,
  Switch,
  Menu,
  MenuItem,
  MenuItemLabel,
  Pressable,
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
  Home,
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
import { Key } from 'react-stately';

const chatData = [
  {
    avatarSource: require('../assets/Avatar1.png'),
    name: 'Mila Dann',
    message: 'These are really cool 💯',
    badgeCount: 1,
  },
  {
    avatarSource: require('../assets/Avatar2.png'),
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
    avatarSource: require('../assets/Avatar1.png'),
    name: 'John',
    message: 'Done ✅',
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

const Chats = () => {
  const [selectedChat, setSelectedChat] = useState({
    name: 'Richard Lyod',
  });
  const [showChatList, setShowChatList] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const [_isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsSmallScreen(mediaQuery.matches);
    const handleResize = () => {
      setIsSmallScreen(mediaQuery.matches);
    };
    mediaQuery.addListener(handleResize);
    return () => mediaQuery.removeListener(handleResize);
  }, []);

  const handleChatSelect = ({ name, message }) => {
    setSelectedChat({ name, message });
    setShowChatList(true);
  };

  const handleBackToInbox = () => {
    setShowChatList(false);
  };
  const handleMenuClick = (key: string | Set<Key>) => {
    if (key === 'Profile') {
      setShowChatList(false);
      setShowProfile(true);
    }
    // Handle other menu items if needed
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
  }) => (
    <Pressable onPress={() => onSelect({ name, message })}>
      <HStack space="sm" paddingHorizontal="$2">
        <Avatar w="$9" h="$9">
          <AvatarFallbackText>{name.charAt(0)}</AvatarFallbackText>
          <AvatarImage source={avatarSource} />
        </Avatar>

        <VStack gap="$0.5" flex={1} ml="$2">
          <HStack gap="$1" justifyContent="space-between" flex={1}>
            <Text
              numberOfLines={1}
              sx={{ '.dark_theme': { color: '$text900' } }}
              color="$text900"
              fontSize="$sm"
              fontWeight="$bold"
            >
              {name}
            </Text>
            <Text
              sx={{ '.dark_theme': { color: '$text500' } }}
              color="$text500"
              fontSize="$xs"
              fontWeight="$normal"
            >
              12m
            </Text>
          </HStack>

          <HStack gap="$1" justifyContent="space-between" flex={1}>
            <TruncatedText numberOfLines={1}>{message}</TruncatedText>
            {index < 3 && (
              <Badge
                h="$4"
                w="$4"
                bg="$background950"
                borderRadius="$full"
                //  position="absolute"
                //  top={4}
                //  right={4}
                //  zIndex={1}
                variant="solid"
                alignItems="center" // Center the text
                justifyContent="center" // Center the text
              >
                <BadgeText
                  fontSize="$2xs"
                  color="$text0"
                  // color={activeIcon === label ? '$text950' : '$white'}
                >
                  {badgeCount}
                </BadgeText>
              </Badge>
              // <BadgeText
              //   sx={{
              //     '.dark_theme': { color: '$text0', bg: '$background950' },
              //   }}
              //   textAlign="center"
              //   bg="$background950"
              //   fontSize="$2xs"
              //   p="$0.5"
              //   h="$3.5"
              //   w="$3.5"
              //   borderRadius="$3xl"
              //   color="$text0"
              // >
              //   {badgeCount}
              // </BadgeText>
            )}
          </HStack>
        </VStack>
      </HStack>
    </Pressable>
  );

  const Inbox = ({ chatData, onSelect }) => {
    return (
      <VStack paddingVertical="$6" paddingHorizontal="$3" gap="$5">
        <VStack space="2xl" width="100%">
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
      px="$1"
      py="$0.5"
      gap="$2.5"
      maxWidth={isRight ? '$2/3' : 'auto'}
      bg={isRight ? '$primary300' : '$background50'}
      marginBottom="$2.5"
      alignSelf={isRight ? 'flex-end' : 'flex-start'} // Align to the right if isRight is true
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
            // paddingHorizontal="$2"
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
    // Define different sets of messages for different chats
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
      // Add more messages for other chats as needed
    };

    // Define message times for each message set
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

    // Get the messages for the selected chat
    const selectedChatMessages = messages[selectedChat?.name] || {};
    const { messagesLeft, messagesRight } = selectedChatMessages;

    // Create message order with time for the selected chat
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
        sx={{ '.dark_theme': { borderColor: '$border300' } }}
        style={{
          shadowColor: '#262626',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        <HStack alignItems="center" flex={1}>
          <Pressable>
            <Icon
              sx={{ '.dark_theme': { color: '$background700' } }}
              color="$background700"
              w="$4"
              h="$4"
              as={SmilePlus}
              mr="$2"
            />
          </Pressable>

          <Input
            flex={1}
            variant="outline"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            borderWidth={0}
            paddingVertical="$2"
            w="$72"
          >
            <InputField
              w="$56"
              fontSize="$md"
              fontWeight="$normal"
              placeholder="Type a message here..."
            />
          </Input>
        </HStack>
        <HStack alignItems="center" gap="$2">
          <Pressable>
            <Icon
              sx={{ '.dark_theme': { color: '$background700' } }}
              color="$background700"
              w="$4"
              h="$4"
              as={ImagePlus}
            />
          </Pressable>
          <Pressable>
            <Icon
              sx={{ '.dark_theme': { color: '$background700' } }}
              color="$background700"
              w="$4"
              h="$4"
              as={Paperclip}
            />
          </Pressable>
          <Pressable>
            <Icon
              sx={{ '.dark_theme': { color: '$background700' } }}
              color="$background700"
              w="$4"
              h="$4"
              as={Camera}
            />
          </Pressable>
          <Pressable>
            <Icon
              color="$background200"
              w="$4"
              h="$4"
              bg="$primary400"
              p="$2"
              borderRadius="$lg"
              as={Mic}
            />
          </Pressable>
        </HStack>
      </HStack>
    );
  };

  const ChatTopBar = () => {
    return (
      <HStack
        paddingHorizontal="$4"
        paddingVertical="$4"
        gap="$4"
        justifyContent="space-between"
      >
        <HStack>
          <Box sx={{ '@sm': { display: 'flex' }, '@md': { display: 'none' } }}>
            <Pressable onPress={handleBackToInbox}>
              <Icon as={ArrowLeft} />
            </Pressable>
          </Box>
          <VStack>
            <Heading
              sx={{ '.dark_theme': { color: '$text900' } }}
              color="$text900"
              fontSize="$lg"
              fontWeight="$bold"
            >
              {selectedChat ? selectedChat.name : ''}
            </Heading>
            <HStack alignItems="center" space="xs">
              <Image
                sx={{
                  '.dark_theme': { display: 'none' },
                  '.light_theme': { display: 'flex' },
                }}
                source={require('../assets/Dot_light.png')}
                w="$2"
                h="$2"
                alt=""
              />
              <Image
                sx={{
                  '.dark_theme': { display: 'flex' },
                  '.light_theme': { display: 'none' },
                }}
                source={require('../assets/Dot_dark.png')}
                w="$2"
                h="$2"
                alt=""
              />
              <Text size="sm">Online</Text>
            </HStack>
          </VStack>
        </HStack>
        <HStack alignItems="center" gap="$4">
          <Pressable>
            <Icon
              sx={{ '.dark_theme': { color: '$background800' } }}
              color="$background800"
              w="$4.5"
              h="$4.5"
              as={Phone}
            />
          </Pressable>
          <Pressable>
            <Icon
              sx={{ '.dark_theme': { color: '$background800' } }}
              color="$background800"
              w="$4.5"
              h="$4.5"
              as={Video}
            />
          </Pressable>

          <Menu
            placement={'bottom right'}
            disabledKeys={['Theme']}
            trigger={({ ...triggerProps }) => {
              return (
                <Pressable bg="transparent" {...triggerProps}>
                  <Icon color="$background800" as={MoreVertical} />
                </Pressable>
              );
            }}
            onSelectionChange={(key) => handleMenuClick(key)}
          >
            <MenuItem key="Profile" textValue="Profile">
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
    );
  };

  const SearchBar = () => {
    return (
      <Input
        m="$4"
        sx={{ '.dark_theme': { borderColor: '$border300' } }}
        borderRadius="$lg"
        borderColor="$border300"
        style={{
          shadowColor: '#262626',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        }}
        mt="$5"
      >
        <InputSlot pl="$3">
          <InputIcon
            sx={{ '.dark_theme': { color: '$background700' } }}
            color="$background700"
            as={SearchIcon}
          />
        </InputSlot>
        <InputField placeholderTextColor="$text400" placeholder="Search..." />
      </Input>
    );
  };
  const Sidebar = () => {
    const icons = [
      { icon: Home, label: 'Home' },
      { icon: CircleDollarSign, label: 'Dollar' },
      { icon: CalendarDays, label: 'Calendar' },
      { icon: MessageCircle, label: 'Messages' },
      { icon: User, label: 'User' },
      { icon: Settings, label: 'Settings' },
      { icon: BadgeHelp, label: 'Help' },
      { icon: LogOut, label: 'Logout' },
    ];

    const defaultActiveIcon = 'Messages';
    const [activeIcon, setActiveIcon] = useState(defaultActiveIcon);
    const messagesBadgeCount = 3; // Set your badge count here

    const handleIconPress = (label: React.SetStateAction<string>) => {
      setActiveIcon(label);
      // Handle icon press logic if needed
    };

    return (
      <VStack
        paddingVertical="$6"
        paddingHorizontal="$4"
        alignItems="flex-start"
        gap="$6"
        // sx={{
        //   '@md': {
        //     display: 'flex',
        //     paddingVertical: '$6',
        //     paddingHorizontal: '$4',
        //     alignItems: 'flex-start',
        //     gap: '$6',
        //   },
        // }}
        // display="none"
      >
        {icons.map(({ icon: IconComponent, label }) => (
          <Pressable
            key={label}
            onPress={() => handleIconPress(label)}
            style={{
              backgroundColor:
                activeIcon === label ? '$primary500' : 'transparent',
              borderRadius: 6,
              padding: 2,
              position: 'relative', // Make the position relative
            }}
          >
            <Icon
              as={IconComponent}
              w="$6"
              h="$6"
              p="$2"
              bg={activeIcon === label ? '$primary400' : 'transparent'}
              color={activeIcon === label ? '$background200' : '$background800'}
              borderRadius="$lg"
            />
            {label === 'Messages' && (
              <Badge
                h="$4"
                w="$4"
                bg="$background0"
                borderRadius="$full"
                position="absolute"
                top={4}
                right={4}
                zIndex={1}
                variant="solid"
                alignItems="center" // Center the text
                justifyContent="center" // Center the text
              >
                <BadgeText
                  fontSize="$2xs"
                  color="$text950"
                  // color={activeIcon === label ? '$text950' : '$white'}
                >
                  {messagesBadgeCount}
                </BadgeText>
              </Badge>
            )}
          </Pressable>
        ))}
      </VStack>
    );
  };
  const Profile = () => {
    return (
      <VStack
        sx={{
          '@lg': {
            display: 'flex',
            // flex: 1,
            gap: '$5',
          },
        }}
        display="none"
      >
        <VStack
          width="auto"
          p="$4"
          alignItems="center"
          borderTopRightRadius="$lg"
          bg="$background50"
        >
          <Avatar w="$16" h="$16" mb="$2">
            <AvatarImage source={require('../assets/Avatar9.png')} />
          </Avatar>

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
          >
            +91 1234567890
          </Text>
          <HStack alignSelf="center" space="3xl" mt="$2">
            <VStack space="sm" alignItems="center">
              <Pressable>
                <Icon
                  sx={{ '.dark_theme': { color: '$background800' } }}
                  color="$background800"
                  w="$4.5"
                  h="$4.5"
                  as={Phone}
                />
              </Pressable>
              <Text
                sx={{ '.dark_theme': { color: '$text700' } }}
                color="$text700"
                fontSize="$xs"
                fontWeight="$normal"
              >
                Voice call
              </Text>
            </VStack>
            <VStack space="sm" alignItems="center">
              <Pressable>
                <Icon
                  sx={{ '.dark_theme': { color: '$background800' } }}
                  color="$background800"
                  w="$4.5"
                  h="$4.5"
                  as={Video}
                />
              </Pressable>
              <Text
                sx={{ '.dark_theme': { color: '$text700' } }}
                color="$text700"
                fontSize="$xs"
                fontWeight="$normal"
              >
                Video call
              </Text>
            </VStack>
            <VStack space="sm" alignItems="center">
              <Pressable>
                <Icon
                  sx={{ '.dark_theme': { color: '$background800' } }}
                  color="$background800"
                  w="$4.5"
                  h="$4.5"
                  as={Phone}
                />
              </Pressable>
              <Text
                sx={{ '.dark_theme': { color: '$text700' } }}
                color="$text700"
                fontSize="$xs"
                fontWeight="$normal"
              >
                Search
              </Text>
            </VStack>
          </HStack>
        </VStack>

        <VStack pl="$4.5" gap="$3">
          <Text
            sx={{ '.dark_theme': { color: '$text900' } }}
            color="$text900"
            fontSize="$md"
            fontWeight="$medium"
          >
            Media, links , docs
          </Text>
          <HStack gap="$0.5">
            <Image
              size="md"
              source={require('../assets/Image.png')}
              resizeMode="contain"
              style={{ flex: 1 }}
              alt=""
            />
            <Image
              size="md"
              source={require('../assets/Image.png')}
              resizeMode="contain"
              style={{ flex: 1 }}
              alt=""
            />
            <Image
              size="md"
              source={require('../assets/Image.png')}
              resizeMode="contain"
              style={{ flex: 1 }}
              alt=""
            />
            <Image
              size="md"
              source={require('../assets/Image.png')}
              resizeMode="contain"
              style={{ flex: 1 }}
              alt=""
            />
          </HStack>
        </VStack>

        <VStack space="md" paddingHorizontal="$6">
          <Text
            sx={{ '.dark_theme': { color: '$text900' } }}
            fontSize="$md"
            color="$text900"
            fontWeight="$bold"
          >
            Notification Settings
          </Text>
          <VStack space="md">
            <HStack justifyContent="space-between">
              <HStack gap="$3">
                <Icon as={Star} />
                <Text>Starred Messages</Text>
              </HStack>
              <Text
                sx={{ '.dark_theme': { color: '$text400' } }}
                color="$text400"
                fontSize="$2xs"
              >
                123
              </Text>
            </HStack>
            <HStack justifyContent="space-between">
              <HStack gap="$3">
                <Icon as={BellOff} />
                <Text>Mute Notifications</Text>
              </HStack>

              <Switch w="$10" h="$5" isDisabled={false} />
            </HStack>
            <HStack justifyContent="space-between">
              <HStack gap="$3">
                <Icon as={Lock} />
                <Text>Chat lock</Text>
              </HStack>

              <Switch defaultValue={true} w="$10" h="$5" isDisabled={false} />
            </HStack>
            <HStack justifyContent="space-between">
              <HStack gap="$3">
                <Icon as={ImagePlus} />
                <Text>Media Visibility</Text>
              </HStack>

              <Switch defaultValue={true} w="$10" h="$5" isDisabled={false} />
            </HStack>
          </VStack>
        </VStack>

        <VStack paddingVertical="$1.5" mb="$6" paddingHorizontal="$6" gap="$3">
          <Text fontSize="$md" fontWeight="$bold">
            7 groups in common
          </Text>

          <VStack>
            <HStack alignItems="center" space="md" paddingVertical="$2">
              <Avatar bgColor="$primary500" size="md" borderRadius="$full">
                <AvatarFallbackText color="$text0">B A</AvatarFallbackText>
              </Avatar>

              <VStack>
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

            <HStack alignItems="center" space="md" paddingVertical="$2">
              <Avatar bgColor="$primary500" size="md" borderRadius="$full">
                <AvatarFallbackText color="$text0">T P</AvatarFallbackText>
              </Avatar>

              <VStack>
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
      </VStack>
    );
  };

  return (
    <>
      <HStack
        maxHeight={720}
        w="$full"
        borderWidth={1}
        flex={1}
        borderRadius="$lg"
        sx={{ '.dark_theme': { borderColor: '$border200' } }}
        borderColor="$border200"
      >
        <VStack
          sx={{ '@base': { display: 'none' }, '@md': { display: 'flex' } }}
        >
          <Box
            w="$11"
            h="$11"
            m="$4"
            // p="$4"
            sx={{ '.dark_theme': { borderColor: '$border200', bg: '$white' } }}
            borderColor="$border200"
            borderRadius="$lg"
            borderWidth="$1"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              w="$5"
              h="$5"
              source={require('../assets/gluestack-logo.png')}
              alt=""
            />
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
          position="absolute" // Make sure the divider is positioned relative
        />
        <Divider
          sx={{ '@base': { display: 'none' }, '@md': { display: 'flex' } }}
          orientation="vertical"
          bg="$background200"
          h="auto"
          $dark-bg="$emerald400"
          position="relative" // Make sure the divider is positioned relative
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
            // right="-$1"
            zIndex={2} // Set a higher zIndex for the icon
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
          sx={{
            '@md': {
              w: '$1/4',
              flex: 'none',
              display: 'none',
            },
            '@base': {
              flex: 1,
              display: 'flex',
            },
          }}
        >
          {showChatList ? (
            <>
              <ChatTopBar />
            </>
          ) : (
            <>
              {showProfile ? (
                <Profile />
              ) : (
                <>
                  <SearchBar />
                  <Inbox chatData={chatData} onSelect={handleChatSelect} />
                </>
              )}
            </>
          )}
          <ScrollView>
            {showChatList && <ChatList selectedChat={selectedChat} />}
          </ScrollView>
        </VStack>
        <Divider
          sx={{ '@base': { display: 'none' }, '@md': { display: 'flex' } }}
          orientation="vertical"
          bg="$background200"
          h="auto"
          $dark-bg="$emerald400"
        />
        <VStack
          sx={{
            '@md': {
              display: 'flex',
              flex: 1,
            },
          }}
          display="none"
          w="$2/5"
        >
          <ChatTopBar />
          <ScrollView
            showsVerticalScrollIndicator={true}
            bounces={false}
            style={{ flex: 1, flexGrow: 1 }}
          >
            <ChatList selectedChat={selectedChat} />
          </ScrollView>

          <TypeMessage />
        </VStack>

        <Divider
          sx={{ '@base': { display: 'none' }, '@md': { display: 'flex' } }}
          orientation="vertical"
          bg="$background200"
          h="auto"
          position="relative" // Make sure the divider is positioned relative
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
        <Profile />
      </HStack>
    </>
  );
};

export default Chats;
