import React from 'react';
import {
  Button,
  ButtonIcon,
  ButtonText,
  Divider,
  HStack,
  Heading,
  Image,
  MenuItem,
  MenuItemLabel,
  Pressable,
  ScrollView,
  Text,
  VStack,
  Menu,
  Box,
  Icon,
  useMediaQuery,
  Fab,
  FabIcon,
  MenuIcon,
} from '@gluestack-ui-new/themed';
import {
  PlusCircle,
  Command,
  ArrowBigUp,
  Mic2,
  Globe,
} from 'lucide-react-native';
import { sidebarItems } from './constants';

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
const Sidebar = ({
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
                $hover-bg="$background100"
                key={item.key}
                onPress={() => handlePress(item)}
                bg={item.key === selected.key ? '$background100' : ''}
                borderRadius="$md"
                {...itemProps}
              >
                <HStack>
                  <Text
                    color="$primary950"
                    fontSize="$md"
                    px="$4"
                    fontFamily="$body"
                  >
                    {item.value}
                  </Text>
                </HStack>
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
                          $lg-fontSize="$md"
                          $md-fontSize="$sm"
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

const tabs = [
  { label: 'Music', key: 'music' },
  { label: 'Podcasts', key: 'podcasts' },
  { label: 'Live', key: 'live', disabled: true },
];
const navTabs = [
  {
    label: 'Music',
    key: 'music',
    menuItems: [
      { label: 'About Music' },
      { label: 'Preferences...', menuIcon: [{ icon: Command }], iconText: ',' },
      { label: 'Hide Music...', menuIcon: [{ icon: Command }], iconText: 'H' },
      {
        label: 'Hide Others...',
        menuIcon: [{ icon: ArrowBigUp }, { icon: Command }],
        iconText: 'H',
      },
      { label: 'Quit Music', menuIcon: [{ icon: Command }], iconText: 'Q' },
    ],
  },
  {
    label: 'File',
    key: 'file',
    menuItems: [
      { label: 'New' },
      {
        label: 'Open Stream URL... ',
        menuIcon: [{ icon: Command }],
        iconText: 'U',
      },
      { label: 'Close Window', menuIcon: [{ icon: Command }], iconText: 'W' },
      { label: 'Library' },
      { label: 'Import...', menuIcon: [{ icon: Command }], iconText: 'O' },
      { label: 'Burn Playlist to Disc...', disabled: true },
      {
        label: 'Show in Finder',
        menuIcon: [{ icon: ArrowBigUp }, { icon: Command }],
        iconText: 'R',
      },
      { label: 'Convert' },
      { label: 'Page Setup...' },
      {
        label: 'Print...',
        disabled: true,
        menuIcon: [{ icon: Command }],
        iconText: 'P',
      },
    ],
  },
  {
    label: 'Edit',
    key: 'edit',
    menuItems: [
      {
        label: 'Undo',
        disabled: true,
        menuIcon: [{ icon: Command }],
        iconText: 'Z',
      },
      {
        label: 'Redo',
        disabled: true,
        menuIcon: [{ icon: ArrowBigUp }, { icon: Command }],
        iconText: 'Z',
      },
      {
        label: 'Cut',
        disabled: true,
        menuIcon: [{ icon: Command }],
        iconText: 'X',
      },
      {
        label: 'Copy',
        disabled: true,
        menuIcon: [{ icon: Command }],
        iconText: 'C',
      },
      {
        label: 'Paste',
        disabled: true,
        menuIcon: [{ icon: Command }],
        iconText: 'V',
      },
      { label: 'Select All', menuIcon: [{ icon: Command }], iconText: 'A' },
      {
        label: 'Deselect All',
        disabled: true,
        menuIcon: [{ icon: ArrowBigUp }, { icon: Command }],
        iconText: 'A',
      },
      { label: 'Smart Dictation...', menuIcon: [{ icon: Mic2 }] },
      { label: 'Emoji & Symbols', menuIcon: [{ icon: Globe }] },
    ],
  },
  {
    label: 'View',
    key: 'view',
    menuItems: [
      { label: 'Show Playing Next' },
      { label: 'Show Lyrics' },
      { label: 'Show Status Bar', disabled: true },
      { label: 'Hide Sidebar' },
      { label: 'Enter Full Screen', disabled: true },
    ],
  },
  {
    label: 'Account',
    key: 'account',
    menuItems: [
      { label: 'Switch Account' },
      { label: 'Andy' },
      { label: 'Benoit' },
      { label: 'Luis' },
      { label: 'Manage Family...' },
      { label: 'Add Account...' },
    ],
  },
];

const images = [
  require('../assets/music1.png'),
  require('../assets/music2.png'),
  require('../assets/music3.png'),
  require('../assets/music4.png'),
];

const titles = [
  'React Rendezvous',
  'Async Awakenings',
  'The Art of Reusability',
  'Stateful Symphony',
];

const artists = ['Ethan Byte', 'Nina Netcode', 'Lena Logic', 'Beth Binary'];

const personalPlaylists = [
  require('../assets/music5.png'),
  require('../assets/music6.png'),
  require('../assets/music1.png'),
  require('../assets/music8.png'),
  require('../assets/music2.png'),
  require('../assets/music4.png'),
];

const personalTitles = [
  'Thinking Components',
  'Functional Fury',
  'React Rendezvous',
  'Stateful Symphony',
  'Async Awakenings',
  'The Art of Reusability',
];

const personalArtists = [
  'Lena Logic',
  'Beth Binary',
  'Ethan Byte',
  'Beth Binary',
  'Nina Netcode',
  'Lena Logic',
];

const Tab = ({ label, isActive, onPress, disabled }) => (
  <Pressable
    justifyContent="center"
    alignItems="center"
    marginHorizontal="$2"
    onPress={disabled ? undefined : onPress}
    bg={isActive ? '$background0' : 'transparent'}
    m="$1"
    borderRadius="$md"
    opacity={disabled ? 0.5 : 1}
  >
    <Text
      p="$2"
      sx={{ '@base': { fontSize: '$sm' }, '@md': { fontSize: '$md' } }}
      style={{ fontWeight: label === 'Music' ? 'bold' : 'normal' }}
    >
      {label}
    </Text>
  </Pressable>
);
const Music = () => {
  const [activeTab, setActiveTab] = React.useState('music');

  const handleTabPress = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const renderListenNow = () => {
    if (activeTab === 'music') {
      return (
        <>
          <VStack gap="$3">
            <Heading>Listen Now</Heading>
            <Text>Top picks for you. Updated daily.</Text>
            <Divider />
            <ScrollView horizontal={true}>
              <HStack mb="$4" gap="$4">
                {images.map((image, index) => (
                  <Pressable key={index}>
                    {(props: any) => (
                      <VStack gap="$2">
                        <Box
                          w="$64"
                          h="$80"
                          borderRadius="$md"
                          overflow="hidden"
                        >
                          <Image
                            w="100%"
                            h="100%"
                            source={image}
                            style={{
                              transform: [{ scale: props.hovered ? 1.05 : 1 }],
                              transition: 'transform 0.3s ease-in-out',
                            }}
                          />
                        </Box>
                        <Text fontSize="$md">{titles[index]}</Text>
                        <Text fontSize="$sm">{artists[index]}</Text>
                      </VStack>
                    )}
                  </Pressable>
                ))}
              </HStack>
            </ScrollView>
          </VStack>
          <VStack gap="$3">
            <Heading>Made for You</Heading>
            <Text>Your personal playlists. Updated daily.</Text>
            <Divider />
            <ScrollView horizontal={true}>
              <HStack mb="$4" gap="$4">
                {personalPlaylists.map((image, index) => (
                  <Pressable key={index}>
                    {(props: any) => (
                      <VStack gap="$2">
                        <Box
                          w="$40"
                          h="$40"
                          borderRadius="$md"
                          overflow="hidden"
                        >
                          <Image
                            w="100%"
                            h="100%"
                            borderRadius="$md"
                            source={image}
                            style={{
                              transform: [{ scale: props.hovered ? 1.05 : 1 }],
                              transition: 'transform 0.3s ease-in-out',
                            }}
                            alt="Explore"
                          />
                        </Box>
                        <Text fontSize="$md">{personalTitles[index]}</Text>
                        <Text fontSize="$sm">{personalArtists[index]}</Text>
                      </VStack>
                    )}
                  </Pressable>
                ))}
              </HStack>
            </ScrollView>
          </VStack>
        </>
      );
    } else if (activeTab === 'podcasts') {
      return (
        <VStack gap="$3">
          <Heading>Recommended Podcasts</Heading>
          <Text>Your favorite podcasts. Updated daily.</Text>
          <Divider />
          <VStack
            borderWidth={1}
            borderStyle="dashed"
            borderRadius="$md"
            justifyContent="center"
            alignItems="center"
            gap="$4"
            h="$96"
            borderColor="$border200"
            p="$4"
          >
            <Image w="$10" h="$10" source={require('../assets/podcasts.svg')} />
            <Text textAlign="center" fontWeight="$semibold">
              No episodes added
            </Text>
            <Text textAlign="center" color="$text800">
              You have not added any podcasts. Add one below.
            </Text>
            <Button>
              <ButtonText
                textAlign="center"
                fontWeight="$medium"
                fontSize="$sm"
              >
                Add Podcast
              </ButtonText>
            </Button>
          </VStack>
        </VStack>
      );
    }
  };

  const [selectedKeys, setSelectedKeys] = React.useState({});

  // Function to handle selection change for a specific tab
  const handleSelectionChange = (tabKey, keys) => {
    setSelectedKeys((prevState) => ({
      ...prevState,
      [tabKey]: keys,
    }));
  };

  return (
    <Box w="$full" h="100vh" overflow="hidden">
      <VStack
        bg="$background0"
        sx={{
          '.dark_theme': { borderColor: '$border200' },
          '@md': { borderWidth: 1, borderRadius: '$lg' },
          '@sm': { borderWidth: 0 },
        }}
        borderColor="$border200"
        alignSelf="flex-start"
        h="$full"
        w="$full"
        flexDirection="column" // Ensure content stacks vertically
      >
        <HStack
          w="$full"
          borderBottomWidth="$1"
          borderBottomColor="$border200"
          sx={{ '@md': { display: 'flex' }, '@base': { display: 'none' } }}
        >
          {navTabs.map(({ label, key, menuItems }) => (
            <Menu
              disabledKeys={menuItems
                .filter((item) => item.disabled)
                .map((item) => item.label)}
              borderWidth={1}
              key={key}
              placement="bottom left"
              selectionMode="single"
              selectedKeys={selectedKeys[key] || []} // Use selected keys for this tab
              onSelectionChange={(keys) => handleSelectionChange(key, keys)}
              closeOnSelect={true}
              trigger={({ ...triggerProps }) => {
                return (
                  <Button
                    sx={{ ':hover': { bg: '$background100' } }}
                    bg="transparent"
                    {...triggerProps}
                  >
                    <ButtonText
                      fontWeight={label === 'Music' ? 'bold' : '$normal'}
                      color="$background950"
                      fontSize="$md"
                    >
                      {label}
                    </ButtonText>
                  </Button>
                );
              }}
            >
              {menuItems.map((menuItem, index) => (
                <MenuItem
                  justifyContent="space-between"
                  key={index}
                  textValue={menuItem.label}
                >
                  <MenuItemLabel size="sm">{menuItem.label}</MenuItemLabel>
                  <HStack>
                    {menuItem.menuIcon &&
                      menuItem.menuIcon.map((icon, iconIndex) => (
                        <Icon size="xs" as={icon.icon} key={iconIndex} />
                      ))}
                    <Text size="xs">{menuItem.iconText}</Text>
                  </HStack>
                </MenuItem>
              ))}
            </Menu>
          ))}
        </HStack>
        <HStack flex={1} w="$full">
          <Box
            // marginVertical="$6"
            // paddingHorizontal="$2"
            $md-mt="$6"
            $md-mb="$6"
            $md-mx="$2"
            $md-my="$2"
            $md-w="$1/5"
          >
            <Sidebar
              sidebarItems={sidebarItems}
              isNested
              FabSidebarProps={{
                w: '$12',
                h: '$12',
              }}
            />
          </Box>

          <VStack
            gap="$6"
            flex={1}
            zIndex={-99}
            p="$6"
            sx={{
              '@base': { p: '$4', borderLeftWidth: 0 },
              '@md': { p: '$6', borderLeftWidth: 1 },
            }}
            borderColor="$border200"
          >
            <HStack
              sx={{
                '@md': { justifyContent: 'space-between' },
                '@base': { justifyContent: 'center' },
              }}
            >
              <HStack bg="$background100" borderRadius="$md">
                {tabs.map(({ label, key, disabled }) => (
                  <Tab
                    key={key}
                    isActive={activeTab === key}
                    label={label}
                    onPress={() => handleTabPress(key)}
                    disabled={disabled}
                  />
                ))}
              </HStack>
              <Button
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                gap="$1"
                sx={{
                  '@md': { display: 'flex' },
                  '@base': { display: 'none' },
                }}
              >
                <ButtonIcon as={PlusCircle} />
                <ButtonText fontWeight="$medium" fontSize="$sm">
                  Add music
                </ButtonText>
              </Button>
            </HStack>
            <ScrollView>{renderListenNow()}</ScrollView>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Music;
