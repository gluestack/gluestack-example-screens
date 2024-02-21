import React from 'react';
import {
  Box,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  Icon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  ChevronDownIcon,
  VStack,
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
  Switch,
  Menu,
  MenuItem,
  MenuItemLabel,
  Pressable,
  Tooltip,
  TooltipContent,
  TooltipText,
  useMediaQuery,
  TextareaInput,
  Textarea,
  Button,
  Fab,
  FabIcon,
  MenuIcon,
  AvatarImage,
  AvatarGroup,
  ButtonText,
  ButtonIcon,
  styled,
} from '@gluestack-ui-new/themed';

import {
  AnimatePresence,
  AnimatedPressable,
} from '@gluestack-style/animation-resolver';
import { currentUser, emails, postItems, postType } from './constants';
import { useController, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  commentValidationSchema,
  commentValidationType,
  profileViewValidationSchema,
  profileViewValidationType,
} from './validations';
import {
  AlertCircle,
  ArrowLeft,
  Ban,
  BellOff,
  Camera,
  CheckCheck,
  ChevronDown,
  ImagePlus,
  Mic,
  MoreVertical,
  Paperclip,
  Phone,
  SmilePlus,
  Star,
  UserCircle,
  Video,
  Lock,
  Bookmark,
  Heart,
  Send,
  MoreHorizontal,
  MessageCircle,
  Settings as SettingsIcon,
  Link as LinkIcon,
  Bell,
  XCircle,
} from 'lucide-react-native';
import { DotIcon } from './icons';
import UserCard from '../components/UserCard';
import UserCardAvatar from '../components/UserCardAvatar';
import UserCardStack from '../components/UserCardStack';
import CustomInput from '../components/CustomInput';

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

interface SidebarItemProps {
  key: string;
  value: string;
}
interface NestedSidebarItemProps extends SidebarItemProps {
  key: string;
  value: string;
  icon: any;
}
interface SidebarProps {
  sidebarItems: Array<SidebarItemProps>;
  itemProps?: any;
  onSelected: (item: SidebarItemProps) => void;
  isNested?: boolean;
  FabSidebarProps?: any;
}
export const Sidebar = ({
  sidebarItems,
  itemProps,
  onSelected,
  isNested = false,
  FabSidebarProps,
}: SidebarProps) => {
  const [selected, setSelected] = React.useState<SidebarItemProps>(
    sidebarItems[0]
  );
  const handlePress = (itemInput: SidebarItemProps) => {
    setSelected(itemInput);
    onSelected(itemInput);
  };
  const handleViewChange = (selected: any) => {
    const itemInput = {
      key: selected,
      value: selected,
    };
    onSelected(itemInput);
  };
  const [isMobileScreen] = useMediaQuery({ maxWidth: 760 });
  if (isMobileScreen) {
    return (
      <FabSidebar
        onViewChange={handleViewChange}
        sidebarData={sidebarItems}
        isNested={isNested}
        {...FabSidebarProps}
      />
    );
  }
  return (
    <ScrollView w="$full" h="$full">
      <VStack w="$full" h="$full" space={isNested ? '3xl' : 'sm'} flexGrow={1}>
        {!isNested ? (
          <>
            {sidebarItems.map((item) => (
              <Pressable
                w="$full"
                p="$2"
                $active-bg="$background100"
                key={item.key}
                onPress={() => handlePress(item)}
                bg={item.key === selected.key ? '$background100' : ''}
                borderRadius="$md"
                {...itemProps}
              >
                {/* @ts-ignore */}
                {({ hovered }) => (
                  <Text
                    color="$primary950"
                    fontSize="$md"
                    px="$4"
                    fontFamily="$body"
                    underline={hovered}
                  >
                    {item.value}
                  </Text>
                )}
              </Pressable>
            ))}
          </>
        ) : (
          <>
            {sidebarItems.map((item: any) => (
              <VStack>
                <Text
                  color="$primary950"
                  $lg-fontSize="$lg"
                  $md-fontSize="$md"
                  fontWeight="$bold"
                  mx="$4"
                  fontFamily="$heading"
                >
                  {item?.heading}
                </Text>
                <VStack
                  w="$full"
                  flexGrow={1}
                  space="sm"
                  key={item?.heading}
                  mt="$2"
                >
                  {item?.subItems?.map((item: NestedSidebarItemProps) => (
                    <Pressable
                      w="$full"
                      p="$2"
                      $active-bg="$background100"
                      $hover-bg="$background100"
                      key={item.key}
                      onPress={() => handlePress(item)}
                      bg={item.key === selected.key ? '$background100' : ''}
                      borderRadius="$md"
                      {...itemProps}
                    >
                      <HStack alignItems="center" space="sm" ml="$1.5">
                        {item?.icon && <Icon as={item.icon} />}
                        <Text
                          color="$primary950"
                          $md-fontSize="$sm"
                          $lg-fontSize="$md"
                          fontFamily="$body"
                        >
                          {item.value}
                        </Text>
                      </HStack>
                    </Pressable>
                  ))}
                </VStack>
              </VStack>
            ))}
          </>
        )}
      </VStack>
    </ScrollView>
  );
};

const FabSidebar = ({
  onViewChange,
  sidebarData,
  isNested,
  ...props
}: {
  sidebarData: any;
  onViewChange: (view: SidebarItemProps) => void;
  isNested: boolean;
}) => {
  const [selected, setSelected] = React.useState(new Set([]));
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <Menu
      placement="top left"
      selectionMode="single"
      borderWidth={1}
      selectedKeys={selected}
      closeOnSelect={true}
      isOpen={isOpen}
      onPointerLeave={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      onSelectionChange={(keys: any) => {
        setSelected(keys);
        onViewChange(keys?.currentKey);
        setIsOpen(false);
      }}
      maxHeight="$64"
      overflow="scroll"
      trigger={({ ...triggerProps }) => {
        return (
          <Fab
            size="md"
            placement="bottom right"
            isHovered={false}
            isDisabled={false}
            isPressed={false}
            renderInPortal={true}
            position="fixed"
            zIndex={999}
            minWidth="$10"
            minHeight="$10"
            {...triggerProps}
            {...props}
          >
            <FabIcon as={MenuIcon} />
          </Fab>
        );
      }}
    >
      {!isNested
        ? sidebarData.map((item: SidebarItemProps) => (
            <MenuItem key={item.key} textValue={item.value}>
              <MenuItemLabel size="sm" ml="$2">
                {item.value}
              </MenuItemLabel>
            </MenuItem>
          ))
        : sidebarData.map((sidebarItem: any) => {
            return sidebarItem.subItems.map((item: NestedSidebarItemProps) => (
              <MenuItem key={item.key} textValue={item.value}>
                {item?.icon && <Icon as={item.icon} />}
                <MenuItemLabel size="sm" ml="$2">
                  {item.value}
                </MenuItemLabel>
              </MenuItem>
            ));
          })}
    </Menu>
  );
};

const Stats = ({ children, ...props }: any) => {
  return (
    <HStack
      width="$full"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      {children}
    </HStack>
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
  selectedChat,
}: {
  avatarSource: string;
  name: string;
  message: string;
  badgeCount?: number;
  index: number;
  selectedChat: selectedChatType;
  onSelect: (arg0: {
    name: string;
    message: string;
    avatarSource: string;
  }) => void;
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

const Inbox = ({
  chatData,
  onSelect,
  selectedChat,
}: {
  chatData: chatDataType[];
  selectedChat: selectedChatType;
  onSelect: (arg0: {
    name: string;
    message: string;
    avatarSource: string;
  }) => void;
}) => {
  return (
    <VStack
      sx={{ '@md': { paddingVertical: '$6' } }}
      $base-paddingVertical="$4"
      paddingHorizontal="$3"
      gap="$5"
    >
      <VStack gap="$1" width="100%">
        {chatData.map((chat: chatDataType, index: number) => (
          <ChatItem
            key={index}
            {...chat}
            index={index}
            onSelect={onSelect}
            selectedChat={selectedChat}
          />
        ))}
      </VStack>
    </VStack>
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
      messagesLeft: ['Hey Ben, what are you up to?', 'I’ll be there in 2 mins'],
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
  const [isSmallScreen] = useMediaQuery({ maxWidth: 480 }); // Define your breakpoint for small screens
  const placeholderText = isSmallScreen
    ? 'Type here...'
    : 'Type a message here...';
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

const ChatTopBar = ({
  handleBackToInbox,
  handleShowProfile,
  selectedChat,
}: {
  handleBackToInbox: () => void;
  handleShowProfile: () => void;
  selectedChat: selectedChatType;
}) => {
  return (
    <Pressable>
      <HStack
        sx={{
          '@base': { bg: '$background100' },
          '@lg': { bg: 'transparent' },
        }}
        p="$4"
        justifyContent="space-between"
      >
        <HStack alignItems="center" gap="$4">
          <Box sx={{ '@sm': { display: 'flex' }, '@lg': { display: 'none' } }}>
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

const Profile = ({
  handleBackToChatList,
  selectedChat,
}: {
  handleBackToChatList: () => void;
  selectedChat: selectedChatType;
}) => {
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
          <IconWithTooltip icon={SearchIcon} label="Search" tooltip="Search" />
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

const ChatsContent = ({
  showChatList,
  showProfile,
  handleChatSelect,
  selectedChat,
  handleBackToInbox,
  handleShowProfile,
  handleBackToChatList,
}: {
  showChatList: boolean;
  showProfile: boolean;
  handleChatSelect: (arg0: {
    name: string;
    message: string;
    avatarSource: string;
  }) => void;
  selectedChat: selectedChatType;
  handleBackToInbox: () => void;
  handleShowProfile: () => void;
  handleBackToChatList: () => void;
}) => {
  return (
    <>
      {showProfile ? (
        <ScrollView>
          <Profile
            handleBackToChatList={handleBackToChatList}
            selectedChat={selectedChat}
          />
        </ScrollView>
      ) : (
        <>
          {showChatList ? (
            <VStack h="$full" justifyContent="space-between">
              <ChatTopBar
                handleBackToInbox={handleBackToInbox}
                handleShowProfile={handleShowProfile}
                selectedChat={selectedChat}
              />
              <ScrollView>
                <ChatList selectedChat={selectedChat} />
              </ScrollView>
              <TypeMessage />
            </VStack>
          ) : (
            <>
              <SearchBar />
              <Inbox
                chatData={chatData}
                onSelect={handleChatSelect}
                selectedChat={selectedChat}
              />
            </>
          )}
        </>
      )}
    </>
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

const CustomSelect = ({
  inputPlaceholder,
  label,
  selectionData,
  validatorProps,
  defaultValue,
}: {
  inputPlaceholder: string;
  label: string;
  validatorProps: any;
  selectionData: Array<{ label: string; value: string }>;
  defaultValue?: string;
}) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error, isTouched },
  } = useController({
    ...validatorProps,
  });

  return (
    <VStack w="$full">
      <Text
        fontFamily="$heading"
        color="$primary950"
        fontWeight="$normal"
        mb="$3"
        $base-fontSize="$xs"
        $md-fontSize="$sm"
      >
        {label}
      </Text>
      <Select
        w="$full"
        onClose={onBlur}
        //@ts-ignore
        value={value}
        onValueChange={(text: string) => {
          onChange(text);
          if (isTouched && validatorProps?.trigger) {
            validatorProps.trigger(validatorProps?.name);
          }
        }}
        defaultValue={defaultValue ?? ''}
      >
        <SelectTrigger variant="outline" size="sm">
          <SelectInput placeholder={inputPlaceholder} />
          {/* @ts-ignore */}
          <SelectIcon mr="$3">
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {selectionData.map((item: { label: string; value: string }) => (
              <SelectItem
                label={item.label}
                value={item.value}
                key={item.value}
              />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
      {validatorProps?.trigger && (
        <Text
          color={error ? '$error600' : 'transparent'}
          fontSize="$sm"
          fontFamily="$body"
          mt="$1"
        >
          {error ? error.message : ''}
        </Text>
      )}
    </VStack>
  );
};

const PostCard = ({
  data,
  onLike,
  onPostSave,
  onShare,
  setPosts,
}: {
  data: postType;
  onLike: () => void;
  onPostSave: () => void;
  onShare: () => void;
  setPosts: React.Dispatch<React.SetStateAction<postType[]>>;
}) => {
  const { control, trigger, handleSubmit } = useForm<commentValidationType>({
    mode: 'onSubmit',
    defaultValues: {
      comment: '',
    },
    resolver: zodResolver(commentValidationSchema),
  });
  const AnimatedIcon = styled(AnimatedPressable);
  const textInputRef = React.useRef(null);

  const focusTextInput = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  /* eslint-disable */
  const onSubmit = (formData: commentValidationType) => {
    setPosts((prev) => {
      return prev.map((post) => {
        if (post.key === data.key) {
          return {
            ...post,
            comments: [
              ...(post?.comments || []),
              {
                id: Math.random(),
                name: 'You',
                comment: formData.comment,
              },
            ],
          };
        }
        return post;
      });
    });
  };
  const onError = (error: any) => {
    // console.log(error, 'form submission errors');
  };

  const postCardMenu = [
    {
      key: 'Report',
      value: 'Report',
      icon: AlertCircle,
    },
    {
      key: 'CopyLink',
      value: 'Copy Link',
      icon: LinkIcon,
    },
    {
      key: 'TurnOnPostNotifications',
      value: 'Turn On Post Notifications',
      icon: Bell,
    },
    {
      key: 'Mute',
      value: 'Mute',
      icon: BellOff,
    },
    {
      key: 'Unfollow',
      value: 'Unfollow',
      icon: XCircle,
    },
  ];
  return (
    <Box mb="$4" pb="$2" borderBottomWidth="$1" borderColor="$border200">
      <UserCard space="md" alignItems="center" pb="$3">
        <UserCardAvatar
          name={data.name}
          src={data.profileImage}
          h="$8"
          w="$8"
        />
        <UserCardStack>
          <Text fontSize="$sm" fontWeight="$bold" color="$text900">
            {data.name}
          </Text>
        </UserCardStack>
        <Menu
          placement="top"
          trigger={({ ...triggerProps }) => (
            <Pressable {...triggerProps}>
              <Icon as={MoreHorizontal} w="$6" h="$6" />
            </Pressable>
          )}
        >
          {postCardMenu.map((item: any) => (
            <MenuItem
              backgroundColor="$background0"
              key={item.key}
              textValue={item.key}
            >
              <Icon as={item.icon} size="sm" mr="$2" />
              <MenuItemLabel size="sm">{item.value}</MenuItemLabel>
            </MenuItem>
          ))}
        </Menu>
      </UserCard>
      <Box borderRadius="$xs" overflow="hidden">
        <Image source={data.image} w="auto" h="$96" />
      </Box>
      <VStack w="$full" space="sm">
        <AnimatePresence>
          <HStack justifyContent="space-between">
            <HStack>
              <AnimatedIcon
                exit={{
                  scale: 1,
                }}
                sx={{
                  ':initial': {
                    scale: data.postLiked ? 1.4 : 1,
                  },
                  ':animate': {
                    scale: 1,
                  },
                  ':transition': {
                    // @ts-ignore
                    duration: 300,
                    type: 'spring',
                    ease: 'ease-out',
                  },
                }}
                onPress={onLike}
              >
                <Icon
                  as={Heart}
                  color={data.postLiked ? '$red600' : ''}
                  fill={data.postLiked ? '$red600' : 'transparent'}
                  w="$6"
                  h="$6"
                  p="$2"
                />
              </AnimatedIcon>

              <Pressable onPress={focusTextInput}>
                <Icon as={MessageCircle} w="$6" h="$6" p="$2" />
              </Pressable>
              <Pressable onPress={onShare}>
                <Icon as={Send} w="$6" h="$6" p="$2" />
              </Pressable>
            </HStack>
            <AnimatedIcon
              exit={{
                scale: 1,
              }}
              sx={{
                ':initial': {
                  scale: data.postSaved ? 1.2 : 1,
                },
                ':animate': {
                  scale: 1,
                },
                ':transition': {
                  // @ts-ignore
                  duration: 400,
                  type: 'spring',
                  ease: 'ease-out',
                },
              }}
              onPress={onPostSave}
            >
              <Icon
                as={Bookmark}
                w="$6"
                h="$6"
                p="$2"
                fill={data.postSaved ? 'currentColor' : 'transparent'}
              />
            </AnimatedIcon>
          </HStack>
        </AnimatePresence>

        <HStack space="sm" px="$4" alignItems="center">
          <AvatarGroup>
            <Avatar h="$6" w="$6">
              <AvatarImage source={require('../assets/music5.png')} />
            </Avatar>
            <Avatar h="$6" w="$6">
              <AvatarImage source={require('../assets/music4.png')} />
            </Avatar>
          </AvatarGroup>
          <Text fontSize="$sm" fontWeight="$semibold" color="$text900">
            Liked by {data.likedBy} and others
          </Text>
        </HStack>
        <HStack alignItems="center" space="xs">
          <Text fontSize="$sm" fontWeight="$semibold" color="$text900">
            {data.name}
          </Text>
          <Text fontSize="$sm" color="$text900">
            {data.caption}
          </Text>
        </HStack>
        <CustomInput
          inputProps={{
            variant: 'underlined',
            borderBottomWidth: '$0',
          }}
          validatorProps={{
            control: control,
            trigger: trigger,
            name: 'comment',
          }}
        >
          <InputField
            ref={textInputRef}
            type="text"
            fontSize="$sm"
            placeholder="Add a comment"
            sx={{
              ':focus': {
                borderBottomWidth: '$0',
                bg: '$background0',
              },
            }}
            onKeyPress={(event) => {
              if (event.key === 'Enter') handleSubmit(onSubmit, onError)();
            }}
          />
        </CustomInput>
        <VStack w="$full" space="sm">
          {data?.comments?.map((comment, index) => (
            <HStack key={index}>
              <Text fontSize="$sm" color="$text900" fontWeight="$semibold">
                {comment?.name ? comment.name + ' ' : ''}
              </Text>
              <Text fontSize="$sm" color="$text700">
                {comment?.comment ? comment.comment : ''}
              </Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export const ChatView = () => {
  const [selectedChat, setSelectedChat] = React.useState({
    name: 'Richard Lyod',
    message: '',
    avatarSource: require('../assets/Avatar3.png'),
  });
  const [showChatList, setShowChatList] = React.useState(false);
  const [showProfile, setShowProfile] = React.useState(false);

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
  };

  const handleBackToInbox = () => {
    setShowChatList(false);
    setShowProfile(false);
  };
  const handleBackToChatList = () => {
    setShowChatList(true);
    setShowProfile(false);
  };
  const handleShowProfile = () => {
    setShowChatList(false);
    setShowProfile(true);
  };
  return (
    <Box
      //@ts-ignore
      h="98vh"
      w="$full"
    >
      <HStack
        bg="$background0"
        w="$full"
        flex={1}
        borderColor="$border200"
        alignSelf="center"
      >
        <Divider
          sx={{ '@base': { display: 'none' }, '@lg': { display: 'flex' } }}
          orientation="horizontal"
          bg="$background200"
          w="$full"
          transform="translateY(-50%)"
          top="$18"
          position="absolute"
        />
        <VStack
          sx={{
            '@lg': {
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
            <Inbox
              chatData={chatData}
              onSelect={handleChatSelect}
              selectedChat={selectedChat}
            />
          </ScrollView>
        </VStack>
        <VStack
          //@ts-ignore

          sx={{
            '@base': {
              flex: 1,
              display: 'flex',
              height: '84vh',
            },
            '@lg': {
              display: 'none',
            },
            '@md': {
              height: '98vh',
            },
          }}
        >
          <ChatsContent
            showChatList={showChatList}
            showProfile={showProfile}
            handleChatSelect={handleChatSelect}
            selectedChat={selectedChat}
            handleBackToInbox={handleBackToInbox}
            handleShowProfile={handleShowProfile}
            handleBackToChatList={handleBackToChatList}
          />
        </VStack>

        <Divider
          sx={{ '@base': { display: 'none' }, '@lg': { display: 'flex' } }}
          orientation="vertical"
          bg="$background200"
          h="auto"
        />
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
          <ChatTopBar
            handleBackToInbox={handleBackToInbox}
            handleShowProfile={handleShowProfile}
            selectedChat={selectedChat}
          />
          <ScrollView>
            <ChatList selectedChat={selectedChat} />
          </ScrollView>
          <TypeMessage />
        </VStack>
      </HStack>
    </Box>
  );
};

export const SettingsView = () => {
  const [urlArray, setUrlArray] = React.useState<Array<string>>([
    'https://gluestack.com',
    'https://gluestack.com/twitter',
  ]);
  const [bioValue, setBioValue] = React.useState<string>('');
  const { control, trigger, handleSubmit } = useForm<profileViewValidationType>(
    {
      mode: 'onBlur',
      defaultValues: {
        username: '',
        email: '',
        urls: ['https://gluestack.com', 'https://gluestack.com/twitter'],
      },
      resolver: zodResolver(profileViewValidationSchema),
    }
  );
  /* eslint-disable */
  const onSubmit = (data: profileViewValidationType) => {
    // console.log(data, 'form submission data');
  };
  const onError = (error: any) => {
    // console.log(error, 'form submission errors');
  };
  const handleAddUrl = () => {
    setUrlArray([...urlArray, '']);
  };

  return (
    <ScrollView
      // @ts-ignore
      h="100vh"
      $md-pt="$4"
      px="$2"
      pb="$12"
    >
      <VStack flex={1} alignItems="flex-start" py="$8">
        <Box w="$full" $base-maxWidth="$6/6" $lg-maxWidth="$4/6" px="$4">
          <VStack w="$full" alignItems="flex-start" space="sm">
            <Text
              $base-fontSize="$md"
              $md-fontSize="$lg"
              fontFamily="$heading"
              color="$primary950"
              fontWeight="$bold"
            >
              Profile
            </Text>
            <Text
              $base-fontSize="$xs"
              $md-fontSize="$sm"
              fontFamily="$body"
              color="$primary200"
              fontWeight="$normal"
            >
              This is how other will see you on site
            </Text>
            <Divider w="$full" mt="$5" bg="$background200" h="$px" />
            <VStack mt="$5" w="$full">
              <CustomInput
                label={'Username'}
                formControlProps={{
                  w: '$full',
                }}
                inputProps={{
                  mt: '$1',
                }}
                validatorProps={{
                  control: control,
                  trigger: trigger,
                  name: 'username',
                }}
              >
                <InputField
                  type="text"
                  placeholder="gluestack@username"
                  size="sm"
                />
              </CustomInput>
              <Text
                $base-fontSize="$2xs"
                $md-fontSize="$xs"
                fontFamily="$body"
                color="$primary200"
                fontWeight="$normal"
                numberOfLines={2}
                mt="$2"
              >
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </Text>
            </VStack>
            <VStack mt="$5" w="$full">
              <CustomSelect
                inputPlaceholder="Select a verified email to display"
                label="Email"
                selectionData={emails}
                validatorProps={{
                  control: control,
                  trigger: trigger,
                  name: 'email',
                }}
              />
              <Text
                $base-fontSize="$2xs"
                $md-fontSize="$xs"
                fontFamily="$body"
                color="$primary200"
                fontWeight="$normal"
                numberOfLines={2}
                mt="$2"
              >
                You can manage verified email addresses in your email settings.
              </Text>
            </VStack>
            <VStack mt="$5" w="$full">
              <Text
                $base-fontSize="$xs"
                $md-fontSize="$sm"
                fontFamily="$heading"
                color="$primary700"
                fontWeight="$normal"
              >
                Bio
              </Text>
              <Textarea
                size="sm"
                isReadOnly={false}
                isInvalid={false}
                isDisabled={false}
                h="$16"
                w="$full"
                mt="$2"
              >
                <TextareaInput
                  placeholder="Tell us a little bit of your self"
                  maxLength={256}
                  value={bioValue}
                  onChangeText={(text: string) => setBioValue(text)}
                />
              </Textarea>
              <Text
                w="$full"
                textAlign="right"
                $base-fontSize="$3xs"
                $md-fontSize="$2xs"
                fontFamily="$body"
                color={
                  bioValue?.replace(/<(.*?)>/g, '').length === 256
                    ? '$error600'
                    : '$primary200'
                }
                fontWeight="$normal"
                mt="$1"
              >
                {bioValue?.replace(/<(.*?)>/g, '').length || '0'}/256
              </Text>
              <Text
                $base-fontSize="$2xs"
                $md-fontSize="$xs"
                fontFamily="$body"
                color="$primary200"
                fontWeight="$normal"
                numberOfLines={2}
                mt="$2"
              >
                You can @mention other users and organizations to link to them.
              </Text>
            </VStack>
            <VStack mt="$5" w="$full">
              <Text
                $base-fontSize="$xs"
                $md-fontSize="$sm"
                fontFamily="$heading"
                color="$primary700"
                fontWeight="$normal"
              >
                URLs
              </Text>
              <Text
                $base-fontSize="$2xs"
                $md-fontSize="$xs"
                fontFamily="$body"
                color="$primary200"
                fontWeight="$normal"
                numberOfLines={2}
                mt="$2"
              >
                Add links to your website, blog, or social media profiles.
              </Text>
              <VStack space="md" mt="$2">
                {urlArray.map((url, index) => (
                  <CustomInput
                    key={index}
                    validatorProps={{
                      control: control,
                      trigger: trigger,
                      name: `urls.${index}`,
                    }}
                  >
                    <InputField
                      type="text"
                      placeholder=""
                      value={url}
                      size="sm"
                    />
                  </CustomInput>
                ))}
              </VStack>
              <Button
                variant="outline"
                size="sm"
                mt="$2"
                w="$18"
                borderColor="$border200"
                $md-p="$2"
                $base-p="$1"
                onPress={handleAddUrl}
              >
                <Text
                  $base-fontSize="$2xs"
                  $md-fontSize="$xs"
                  fontFamily="$heading"
                  color="$primary700"
                  fontWeight="$semibold"
                >
                  Add Url
                </Text>
              </Button>
            </VStack>
            <Button
              variant="solid"
              size="lg"
              mt="$4"
              borderRadius="$md"
              p="$3"
              onPress={() => {
                handleSubmit(onSubmit, onError)();
              }}
            >
              <Text
                $base-fontSize="$xs"
                $md-fontSize="$sm"
                fontFamily="$heading"
                color="$background0"
                fontWeight="$normal"
              >
                Update Profile
              </Text>
            </Button>
          </VStack>
        </Box>
      </VStack>
    </ScrollView>
  );
};

export const HomeView = ({
  posts,
  setStoryMedia,
  setShowStory,
  setShowSharePost,
  onLike,
  onPostSave,
  setPosts,
}: {
  posts: postType[];
  setStoryMedia: React.Dispatch<React.SetStateAction<any>>;
  setShowStory: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSharePost: React.Dispatch<React.SetStateAction<boolean>>;
  onLike: (username: string) => void;
  onPostSave: (username: string) => void;
  setPosts: React.Dispatch<React.SetStateAction<postType[]>>;
}) => {
  return (
    <ScrollView
      // @ts-ignore
      h="100vh"
      $base-px="$4"
      $xl-px="$9"
      $md-pt="$4"
    >
      {/* stories */}
      <HStack space="sm" py="$4" mb="$2" overflow="scroll">
        {posts.map((_, index) => (
          <Pressable
            key={index}
            onPress={() => {
              setStoryMedia(_);
              setShowStory(true);
            }}
            p="$0.5"
            borderRadius="$full"
            borderWidth="$2"
            borderColor="$violet400"
            style={{
              borderColor: 'linear-gradient(to right, red, purple)',
            }}
          >
            <Avatar key={index} size="lg">
              <AvatarImage source={_.profileImage} />
            </Avatar>
          </Pressable>
        ))}
      </HStack>
      {/* feed cards */}
      <VStack $base-width="$full" $md-width="$3/4" $lg-width="$full" mx="auto">
        {posts.map((post: postType, index: number) => (
          <PostCard
            key={index}
            data={post}
            onLike={() => onLike(post.name)}
            onPostSave={() => onPostSave(post.name)}
            onShare={() => setShowSharePost(true)}
            setPosts={setPosts}
          />
        ))}
      </VStack>
    </ScrollView>
  );
};

export const ProfileView = () => {
  const [activeTab, setActiveTab] = React.useState('Posts');
  const profileTabs = ['Posts', 'Saved', 'Tagged'];
  return (
    <ScrollView
      //@ts-ignore
      h="100vh"
    >
      <Box
        flex={1}
        mt="$8"
        $base-px="$4"
        $lg-px="$0"
        $lg-maxWidth="$5/6"
        w="$full"
        mx="auto"
      >
        <UserCard alignItems="flex-start" $md-px="$8" space="xl">
          <UserCardAvatar
            name={currentUser.name}
            src={currentUser.profileImage}
            size="2xl"
          />
          <UserCardStack mt="$4">
            <Text fontSize="$xl" fontWeight="$bold" color="$text900">
              {currentUser.name}
            </Text>
            <Text fontSize="$lg" fontWeight="$normal">
              {currentUser.bio}
            </Text>
            <HStack space="md" mt="$2">
              <Text fontSize="$sm" color="$text700">
                {currentUser?.followers} followers
              </Text>
              <Text fontSize="$sm" color="$text700">
                {currentUser?.following} following
              </Text>
            </HStack>
          </UserCardStack>

          <Button
            size="sm"
            borderRadius="$full"
            variant="outline"
            mt="$4"
            action="primary"
            $base-display="none"
            $md-display="flex"
          >
            <ButtonIcon as={SettingsIcon} />
            <ButtonText ml="$2">Edit Profile</ButtonText>
          </Button>
        </UserCard>
        <Box borderBottomWidth="$1" borderColor="$border200">
          {/* tabs section */}
          <HStack
            mt="$8"
            space="4xl"
            w="$full"
            alignItems="center"
            justifyContent="center"
          >
            {profileTabs.map((tab, index) => (
              <VStack key={index}>
                <Pressable
                  key={tab}
                  onPress={() => {
                    setActiveTab(tab);
                  }}
                  disabled={tab !== 'Posts' ? true : false}
                >
                  <Text mb="$1.5">{tab}</Text>
                </Pressable>
                <Divider
                  backgroundColor={
                    activeTab === tab ? '$border600' : 'transparent'
                  }
                  h="$0.5"
                />
              </VStack>
            ))}
          </HStack>
        </Box>
        <Box>
          {profileTabs.map((tab, index) => (
            <HStack
              key={index}
              my="$6"
              w="$full"
              display={activeTab === tab ? 'flex' : 'none'}
              flexWrap="wrap"
              space="xs"
            >
              {postItems.map((_, index) => (
                <Pressable
                  key={index}
                  $base-w="$full"
                  $md-w="48%"
                  $lg-w="32%"
                  h="$64"
                >
                  {(props: any) => (
                    <Box w="$full" h="$full" overflow="hidden">
                      <Image
                        source={_.image}
                        w="$full"
                        h="$full"
                        alt=""
                        style={{
                          transform: [{ scale: props.hovered ? 1.05 : 1 }],
                          // @ts-ignore
                          transition: 'transform 0.3s ease-in-out',
                        }}
                      />
                    </Box>
                  )}
                </Pressable>
              ))}
            </HStack>
          ))}
        </Box>
      </Box>
    </ScrollView>
  );
};
