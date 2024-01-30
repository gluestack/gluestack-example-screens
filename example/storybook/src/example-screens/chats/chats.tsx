import React, { useState } from 'react';
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
} from '@gluestack-ui-new/themed';
import {
  BadgeHelp,
  CalendarDays,
  CircleDollarSign,
  GripVertical,
  Home,
  LogOut,
  MessageCircle,
  MoreVertical,
  Settings,
  User,
} from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';

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
    >
      {icons.map(({ icon: IconComponent, label }) => (
        <TouchableOpacity
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
            bg={activeIcon === label ? 'black' : 'white'}
            color={activeIcon === label ? 'white' : '$text'}
            borderRadius="$lg"
          />
          {label === 'Messages' && (
            <Badge
              h="$4"
              w="$4"
              bg={activeIcon === label ? 'white' : 'black'}
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
                color={activeIcon === label ? 'black' : 'white'}
              >
                {messagesBadgeCount}
              </BadgeText>
            </Badge>
          )}
        </TouchableOpacity>
      ))}
    </VStack>
  );
};
const ChatItem = ({ avatarSource, name, message, badgeCount, index }) => (
  <HStack paddingHorizontal="$6" space="xl">
    <Avatar>
      <AvatarFallbackText>{name.charAt(0)}</AvatarFallbackText>
      <AvatarImage source={avatarSource} />
    </Avatar>
    <VStack flex={1} ml="$2">
      <HStack justifyContent="space-between" flex={1}>
        <Heading size="sm">{name}</Heading>
        <Text fontSize="$xs" fontWeight="$normal">
          12m
        </Text>
      </HStack>
      <HStack justifyContent="space-between">
        <Text size="sm" numberOfLines={1} ellipsizeMode="tail">
          {message}
        </Text>
        {index < 3 && (
          <Badge
            h="$4"
            w="$4"
            bg="black"
            borderRadius="$full"
            position="absolute"
            top={4}
            right={4}
            zIndex={1}
            variant="solid"
            alignItems="center"
            justifyContent="center"
          >
            <BadgeText fontSize="$2xs" color="white">
              {badgeCount}
            </BadgeText>
          </Badge>
        )}
      </HStack>
    </VStack>
  </HStack>
);

const Inbox = () => {
  const chatData = [
    {
      avatarSource: require('../../../assets/Avatar1.png'),
      name: 'Mila Dann',
      message: 'These are really cool 💯',
      badgeCount: 1,
    },
    {
      avatarSource: require('../../../assets/Avatar2.png'),
      name: 'Jared Dunn',
      message: 'Typing...',
      badgeCount: 1,
    },
    {
      avatarSource: require('../../../assets/Avatar3.png'),
      name: 'Richard Lyod',
      message: 'Do you want to catch u...',
      badgeCount: 4,
    },
    {
      avatarSource: require('../../../assets/Avatar4.png'),
      name: 'Mike',
      message: 'wohoooooo 🔥',
    },
    {
      avatarSource: require('../../../assets/Avatar5.png'),
      name: 'Ben',
      message: 'I’ll be there in 2 mins',
    },
    {
      avatarSource: require('../../../assets/Avatar1.png'),
      name: 'John',
      message: 'Done ✅',
    },

    {
      avatarSource: require('../../../assets/Avatar6.png'),
      name: 'Taylor',
      message: 'Okay',
    },
    {
      avatarSource: require('../../../assets/Avatar7.png'),
      name: 'Batch 2024',
      message: 'Steve typing...',
    },
    {
      avatarSource: require('../../../assets/Avatar8.png'),
      name: 'Michele',
      message: 'I can’t wait to hear about...',
    },
  ];

  return (
    <VStack w="$80" ml="$6" mr="$6" mt="$5" mb="$5" gap="$5">
      <Input mt="$5">
        <InputSlot pl="$3">
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField placeholder="Search..." />
      </Input>

      <VStack space="2xl">
        {chatData.map((chat, index) => (
          <ChatItem key={index} {...chat} index={index} />
        ))}
      </VStack>
    </VStack>
  );
};

const ChatMessage = ({ message, isRight }) => (
  <VStack
    borderRadius="$lg"
    px="$4"
    py="$4"
    gap="$2.5"
    w={isRight ? '$1/2' : 'auto'}
    bg={isRight ? '$background700' : '$background200'}
    marginBottom="$2.5"
    alignSelf={isRight ? 'flex-end' : 'flex-start'} // Align to the right if isRight is true
  >
    <Text
      fontSize="$sm"
      fontWeight="$normal"
      color={isRight ? '$text0' : '$text700'}
      paddingVertical="$1"
      paddingHorizontal="$2"
    >
      {message}
    </Text>
  </VStack>
);

const ChatList = () => {
  const commonMessage =
    'Hey! Haha, no epic news, just wanted to check if you are around. We are going to Starbucks. Wanted to check if you would like to join.';

  const messagesLeft = [
    'Hey! Sorry I missed your call',
    'Your number seems to be not reachable',
    "What's the scoop?",
    commonMessage,
    'just ideas for next time',
    "I'll be there in 2 mins ⏰",
  ];

  return (
    <Box m="$6">
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        {messagesLeft.map((message, index) => (
          <ChatMessage
            key={index}
            message={message}
            isRight={message === commonMessage}
          />
        ))}
      </ScrollView>
    </Box>
  );
};

const Chats = () => (
  <HStack
    bg="$background0"
    w="$full"
    borderWidth={1}
    flex={1}
    borderRadius="$lg"
    borderColor="$border200"
  >
    <VStack>
      <Box
        ml="$4"
        mr="$2"
        mt="$3"
        mb="$3"
        p="$4"
        borderColor="$border200"
        borderRadius="$lg"
        borderWidth="$1"
        alignItems="center"
      >
        <Image
          w="$5"
          h="$4.5"
          source={require('../../../assets/gluestack-logo.svg')}
        />
      </Box>

      <Sidebar />
    </VStack>

    <Divider
      orientation="horizontal"
      bg="$background200"
      w="$full"
      transform="translateY(-50%)"
      top="10%"
      position="absolute" // Make sure the divider is positioned relative
    />
    <Divider
      orientation="vertical"
      bg="$background200"
      h="auto"
      $dark-bg="$emerald400"
      position="relative" // Make sure the divider is positioned relative
    >
      <Icon
        bg="$background100"
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
      />
    </Divider>

    <VStack>
      <HStack p="$6" justifyContent="space-between">
        <Text fontWeight="$medium" fontSize="$xl">
          Inbox
        </Text>
        <Icon as={MoreVertical} />
      </HStack>
      <Inbox />
    </VStack>

    <Divider
      orientation="vertical"
      bg="$background200"
      h="auto"
      $dark-bg="$emerald400"
    />
    <VStack w="$1/2" gap="$4.5">
      <HStack paddingHorizontal="$6" paddingVertical="$4" gap="$4">
        <Avatar>
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage source={require('../../../assets/Avatar3.png')} />
        </Avatar>
        <VStack>
          <Heading fontSize="$lg" fontWeight="$bold">
            Richard Lyod
          </Heading>
          <HStack alignItems="center" space="xs">
            <Image source={require('../../../assets/Dot.svg')} w="$2" h="$2" />
            <Text size="sm">Online</Text>
          </HStack>
        </VStack>
      </HStack>
      <ChatList />
    </VStack>

    <Divider
      orientation="vertical"
      bg="$background200"
      h="auto"
      $dark-bg="$emerald400"
      position="relative" // Make sure the divider is positioned relative
    >
      <Icon
        bg="$background100"
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
      />
    </Divider>
  </HStack>
);

export default Chats;
