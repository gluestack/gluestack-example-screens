import React from 'react';
import {
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  HStack,
  Pressable,
  Text,
  VStack,
} from '@/components/nativewind';

import {
  PlusCircle,
  // Command,
  // ArrowBigUp,
  // Mic2,
  // Globe,
} from 'lucide-react-native';

// const navTabs = [
//   {
//     label: 'Music',
//     key: 'music',
//     menuItems: [
//       { label: 'About Music' },
//       { label: 'Preferences...', menuIcon: [{ icon: Command }], iconText: ',' },
//       { label: 'Hide Music...', menuIcon: [{ icon: Command }], iconText: 'H' },
//       {
//         label: 'Hide Others...',
//         menuIcon: [{ icon: ArrowBigUp }, { icon: Command }],
//         iconText: 'H',
//       },
//       { label: 'Quit Music', menuIcon: [{ icon: Command }], iconText: 'Q' },
//     ],
//   },
//   {
//     label: 'File',
//     key: 'file',
//     menuItems: [
//       { label: 'New' },
//       {
//         label: 'Open Stream URL... ',
//         menuIcon: [{ icon: Command }],
//         iconText: 'U',
//       },
//       { label: 'Close Window', menuIcon: [{ icon: Command }], iconText: 'W' },
//       { label: 'Library' },
//       { label: 'Import...', menuIcon: [{ icon: Command }], iconText: 'O' },
//       { label: 'Burn Playlist to Disc...', disabled: true },
//       {
//         label: 'Show in Finder',
//         menuIcon: [{ icon: ArrowBigUp }, { icon: Command }],
//         iconText: 'R',
//       },
//       { label: 'Convert' },
//       { label: 'Page Setup...' },
//       {
//         label: 'Print...',
//         disabled: true,
//         menuIcon: [{ icon: Command }],
//         iconText: 'P',
//       },
//     ],
//   },
//   {
//     label: 'Edit',
//     key: 'edit',
//     menuItems: [
//       {
//         label: 'Undo',
//         disabled: true,
//         menuIcon: [{ icon: Command }],
//         iconText: 'Z',
//       },
//       {
//         label: 'Redo',
//         disabled: true,
//         menuIcon: [{ icon: ArrowBigUp }, { icon: Command }],
//         iconText: 'Z',
//       },
//       {
//         label: 'Cut',
//         disabled: true,
//         menuIcon: [{ icon: Command }],
//         iconText: 'X',
//       },
//       {
//         label: 'Copy',
//         disabled: true,
//         menuIcon: [{ icon: Command }],
//         iconText: 'C',
//       },
//       {
//         label: 'Paste',
//         disabled: true,
//         menuIcon: [{ icon: Command }],
//         iconText: 'V',
//       },
//       { label: 'Select All', menuIcon: [{ icon: Command }], iconText: 'A' },
//       {
//         label: 'Deselect All',
//         disabled: true,
//         menuIcon: [{ icon: ArrowBigUp }, { icon: Command }],
//         iconText: 'A',
//       },
//       { label: 'Smart Dictation...', menuIcon: [{ icon: Mic2 }] },
//       { label: 'Emoji & Symbols', menuIcon: [{ icon: Globe }] },
//     ],
//   },
//   {
//     label: 'View',
//     key: 'view',
//     menuItems: [
//       { label: 'Show Playing Next' },
//       { label: 'Show Lyrics' },
//       { label: 'Show Status Bar', disabled: true },
//       { label: 'Hide Sidebar' },
//       { label: 'Enter Full Screen', disabled: true },
//     ],
//   },
//   {
//     label: 'Account',
//     key: 'account',
//     menuItems: [
//       { label: 'Switch Account' },
//       { label: 'Andy' },
//       { label: 'Benoit' },
//       { label: 'Luis' },
//       { label: 'Manage Family...' },
//       { label: 'Add Account...' },
//     ],
//   },
// ];
const tabs = [
  { label: 'Music', key: 'music' },
  { label: 'Podcasts', key: 'podcasts' },
  { label: 'Live', key: 'live', disabled: true },
];
const Tab = ({ label, isActive, onPress, disabled }) => (
  <Pressable
    className="justify-center items-center mx-2 m-1 rounded-md"
    onPress={disabled ? undefined : onPress}
    bg={isActive ? '$background0' : 'transparent'}
    opacity={disabled ? 0.5 : 1}
  >
    <Text
      className="p-2"
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
  return (
    <Box className="w-full h-lvh overflow-hidden">
      <VStack
        className="bg-background-0  md:border md:rounded-lg border-border-200 self-start h-full w-full flex-col"
        bg="$background0"
        sx={{
          '@sm': { borderWidth: 0 },
        }}
      >
        <HStack
          className="w-full border-b border-border-200"
          sx={{ '@md': { display: 'flex' }, '@base': { display: 'none' } }}
        >
          {/* {navTabs.map(({ label, key, menuItems }) => (
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
                    <Text className="text-xs" size="xs">{menuItem.iconText}</Text>
                  </HStack>
                </MenuItem>
              ))}
            </Menu>
          ))} */}
        </HStack>
        <HStack className="flex-1 w-full">
          <Box className="md:mt-6 md:mb-6 md:mx-2 md:my-2 md:w-1/5">
            {/* <Sidebar
              sidebarItems={sidebarItems}
              isNested
              FabSidebarProps={{
                w: '$12',
                h: '$12',
              }}
            /> */}
          </Box>

          <VStack
            className="gap-6 flex-1 -z-99 p-6 border-border-200"
            sx={{
              '@base': { p: '$4', borderLeftWidth: 0 },
              '@md': { p: '$6', borderLeftWidth: 1 },
            }}
          >
            <HStack className="md:justify-between sm:justify:center">
              <HStack className="bg:background-100 rounded-md">
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
                className="gap-1 md-flex sm-hidden"
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                sx={{
                  '@md': { display: 'flex' },
                  '@base': { display: 'none' },
                }}
              >
                <ButtonIcon as={PlusCircle} />
                <ButtonText className="font-medium text-sm">
                  Add music
                </ButtonText>
              </Button>
            </HStack>
            {/* <ScrollView>{renderListenNow()}</ScrollView> */}
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Music;
