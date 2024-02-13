import React, { useState } from 'react';
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
} from '@gluestack-ui-new/themed';
import { PlusCircle } from 'lucide-react-native';
import Sidebar from '../components/Sidebar';
import { sidebarItems } from './constants';

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
      { label: 'Preferences...' },
      { label: 'Hide Music...' },
      { label: 'Hide Others...' },
      { label: 'Quit Music' },
    ],
  },
  {
    label: 'File',
    key: 'file',
    menuItems: [
      { label: 'New' },
      { label: 'Open Stream URL... ' },
      { label: 'Close Window' },
      { label: 'Library' },
      { label: 'Import...' },
      { label: 'Burn Playlist to Disc...', disabled: true },
      { label: 'Show in Finder' },
      { label: 'Convert' },
      { label: 'Page Setup...' },
      { label: 'Print...', disabled: true },
    ],
  },
  {
    label: 'Edit',
    key: 'edit',
    menuItems: [
      { label: 'Undo', disabled: true },
      { label: 'Redo', disabled: true },
      { label: 'Cut', disabled: true },
      { label: 'Copy', disabled: true },
      { label: 'Paste', disabled: true },
      { label: 'Select All' },
      { label: 'Deselect All', disabled: true },
      { label: 'Smart Dictation...' },
      { label: 'Emoji & Symbols' },
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
    zIndex={1}
    opacity={disabled ? 0.5 : 1}
  >
    <Text p="$2" style={{ fontWeight: label === 'Music' ? 'bold' : 'normal' }}>
      {label}
    </Text>
  </Pressable>
);
const Music = () => {
  const [activeTab, setActiveTab] = useState('music');

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
                          overflow="hidden" // Ensure the image stays within its container
                        >
                          <Image
                            w="100%"
                            h="100%"
                            source={image}
                            transform={[{ scale: props.hovered ? 1.1 : 1 }]} // Adjust the scale factor as needed
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
                          overflow="hidden" // Ensure the image stays within its container
                        >
                          <Image
                            w="100%"
                            h="100%"
                            borderRadius="$md"
                            source={image}
                            transform={[{ scale: props.hovered ? 1.05 : 1 }]} // Adjust the scale factor as needed
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

  return (
    <VStack
      bg="$transparent"
      sx={{
        '.dark_theme': { borderColor: '$border200' },
        '@md': { borderWidth: 1, borderRadius: '$lg' },
        '@sm': { borderWidth: 0 },
      }}
      overflow="hidden"
      borderColor="$border200"
      alignSelf="flex-start"
      h="$full"
      w="$full"
    >
      <VStack w="$full" h="$full">
        <HStack
          w="$full"
          h="$10"
          flexDirection="row"
          borderBottomWidth="$1"
          borderBottomColor="$border200"
          sx={{ '@md': { display: 'flex' }, '@base': { display: 'none' } }}
        >
          {navTabs.map(({ label, key, menuItems }) => (
            <Menu
              // ml="$4"
              zIndex={1}
              borderWidth={1}
              key={key}
              placement="bottom left"
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
                <MenuItem key={index} textValue={menuItem.label}>
                  <MenuItemLabel size="sm">{menuItem.label}</MenuItemLabel>
                </MenuItem>
              ))}
            </Menu>
          ))}
        </HStack>
        <HStack w="$full">
          <Box paddingVertical="$6" paddingHorizontal="$2" $md-w="$1/5">
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
            borderColor="$border200"
            gap="$6"
            flex={1}
            zIndex={-99}
            sx={{
              '@lg': { borderLeftWidth: 1 },
              '@md': { borderLeftWidth: 0, p: '$6' },
              '@base': { p: '$0' },
            }}
          >
            {/* Added flex: 1 */}
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
            {renderListenNow()}
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Music;
