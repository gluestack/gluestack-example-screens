import React from 'react';
import {
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  Divider,
  HStack,
  Heading,
  Image,
  Pressable,
  Text,
  VStack,
} from '@/components/nativewind';
import { useMediaQuery } from '@gluestack-ui-new/themed';
import {
  PlusCircle,
  // Command,
  // ArrowBigUp,
  // Mic2,
  // Globe,
} from 'lucide-react-native';
import { sidebarItems } from '../../example-screens/music/constants';

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

// const FabSidebar = ({
//   onViewChange,
//   sidebarData,
//   isNested,
//   ...props
// }: {
//   sidebarData: any;
//   onViewChange: (view: SidebarItemProps) => void;
//   isNested: boolean;
// }) => {
//   const [selected, setSelected] = React.useState(new Set([]));
//   const [isOpen, setIsOpen] = React.useState<boolean>(false);
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
//       onSelectionChange={(keys: any) => {
//         setSelected(keys);
//         onViewChange(keys?.currentKey);
//         setIsOpen(false);
//       }}
//       maxHeight="$64"
//       overflow="scroll"
//       trigger={({ ...triggerProps }) => {
//         return (
//           <Fab
//             size="md"
//             placement="bottom right"
//             isHovered={false}
//             isDisabled={false}
//             isPressed={false}
//             renderInPortal={true}
//             position="fixed"
//             zIndex={999}
//             minWidth="$10"
//             minHeight="$10"
//             {...triggerProps}
//             {...props}
//           >
//             <FabIcon as={MenuIcon} />
//           </Fab>
//         );
//       }}
//     >
//       {!isNested
//         ? sidebarData.map((item: SidebarItemProps) => (
//             <MenuItem key={item.key} textValue={item.value}>
//               <MenuItemLabel size="sm" ml="$2">
//                 {item.value}
//               </MenuItemLabel>
//             </MenuItem>
//           ))
//         : sidebarData.map((sidebarItem: any) => {
//             return sidebarItem.subItems.map((item: NestedSidebarItemProps) => (
//               <MenuItem key={item.key} textValue={item.value}>
//                 {item?.icon && <Icon as={item.icon} />}
//                 <MenuItemLabel size="sm" ml="$2">
//                   {item.value}
//                 </MenuItemLabel>
//               </MenuItem>
//             ));
//           })}
//     </Menu>
//   );
// };

const Sidebar = ({
  sidebarItems,
  itemProps,
  onSelected,
  isNested = false,
}: // FabSidebarProps,
SidebarProps) => {
  const [selected, setSelected] = React.useState<SidebarItemProps>(
    sidebarItems[0]
  );
  const handlePress = (itemInput: SidebarItemProps) => {
    setSelected(itemInput);
    onSelected(itemInput);
  };
  // const handleViewChange = (selected: any) => {
  //   const itemInput = {
  //     key: selected,
  //     value: selected,
  //   };
  //   onSelected(itemInput);
  // };
  const [isMobileScreen] = useMediaQuery({ maxWidth: 760 });
  if (isMobileScreen) {
    return (
      <></>
      // <FabSidebar
      //   onViewChange={handleViewChange}
      //   sidebarData={sidebarItems}
      //   isNested={isNested}
      //   {...FabSidebarProps}
      // />
    );
  }
  return (
    // <ScrollView w="$full" h="$full">
    <VStack className="w-full h-full grow" space={isNested ? '3xl' : 'sm'}>
      {!isNested ? (
        <>
          {sidebarItems.map((item) => (
            <Pressable
              className="w-full p-2 rounded-md active:bg-background-100 hover:bg-background-100"
              key={item.key}
              onPress={() => handlePress(item)}
              bg={item.key === selected.key ? '$background100' : ''}
              {...itemProps}
            >
              <HStack>
                <Text
                  className="text-primary-950 text-md px-4"
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
                className="text-primary-950 font-bold mx-4 lg:text-lg md:text-md"
                fontFamily="$heading"
              >
                {item?.heading}
              </Text>
              <VStack
                className="w-full mt-2 grow"
                space="sm"
                key={item?.heading}
              >
                {item?.subItems?.map((item: NestedSidebarItemProps) => (
                  <Pressable
                    className="w-full p-2 rounded-md active:bg-background-100 hover:bg-background-100"
                    key={item.key}
                    onPress={() => handlePress(item)}
                    bg={item.key === selected.key ? '$background100' : ''}
                    {...itemProps}
                  >
                    <HStack className="items-center ml-1.5" space="sm">
                      {/* {item?.icon && <Icon as={item.icon} />} */}
                      <Text
                        className="text-primary-950 lg:text-md md:text-sm"
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
    // </ScrollView>
  );
};
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
      className="p-2 md:text-md text-sm"
      style={{ fontWeight: label === 'Music' ? 'bold' : 'normal' }}
    >
      {label}
    </Text>
  </Pressable>
);

const images = [
  require('../../example-screens/assets/music1.png'),
  require('../../example-screens/assets/music2.png'),
  require('../../example-screens/assets/music3.png'),
  require('../../example-screens/assets/music4.png'),
];

const personalPlaylists = [
  require('../../example-screens/assets/music5.png'),
  require('../../example-screens/assets/music6.png'),
  require('../../example-screens/assets/music1.png'),
  require('../../example-screens/assets/music8.png'),
  require('../../example-screens/assets/music2.png'),
  require('../../example-screens/assets/music4.png'),
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
const titles = [
  'React Rendezvous',
  'Async Awakenings',
  'The Art of Reusability',
  'Stateful Symphony',
];
const artists = ['Ethan Byte', 'Nina Netcode', 'Lena Logic', 'Beth Binary'];
const Music = () => {
  const [activeTab, setActiveTab] = React.useState('music');
  const handleTabPress = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const renderListenNow = () => {
    if (activeTab === 'music') {
      return (
        <>
          <VStack className="gap-3">
            <Heading>Listen Now</Heading>
            <Text>Top picks for you. Updated daily.</Text>
            <Divider />
            {/* <ScrollView horizontal={true}> */}
            <HStack className="mb-4 gap-4">
              {images.map((image, index) => (
                <Pressable key={index}>
                  {(props: any) => (
                    <VStack className="gap-2">
                      <Box className="w-64 h-80 rounded-md overflow-hidden">
                        <Image
                          className="w-full h-full"
                          source={image}
                          style={{
                            transform: [{ scale: props.hovered ? 1.05 : 1 }],
                            transition: 'transform 0.3s ease-in-out',
                          }}
                        />
                      </Box>
                      <Text className="text-md">{titles[index]}</Text>
                      <Text className="text-sm">{artists[index]}</Text>
                    </VStack>
                  )}
                </Pressable>
              ))}
            </HStack>
            {/* </ScrollView> */}
          </VStack>
          <VStack className="gap-3">
            <Heading>Made for You</Heading>
            <Text>Your personal playlists. Updated daily.</Text>
            <Divider />
            {/* <ScrollView horizontal={true}> */}
            <HStack className="mb-4 gap-4">
              {personalPlaylists.map((image, index) => (
                <Pressable key={index}>
                  {(props: any) => (
                    <VStack className="gap-2">
                      <Box className="w-40 h-40 rounded-md overflow-hidden">
                        <Image
                          className="w-full h-full rounded-md"
                          source={image}
                          style={{
                            transform: [{ scale: props.hovered ? 1.05 : 1 }],
                            transition: 'transform 0.3s ease-in-out',
                          }}
                          alt="Explore"
                        />
                      </Box>
                      <Text className="text-md">{personalTitles[index]}</Text>
                      <Text className="text-sm">{personalArtists[index]}</Text>
                    </VStack>
                  )}
                </Pressable>
              ))}
            </HStack>
            {/* </ScrollView> */}
          </VStack>
        </>
      );
    } else if (activeTab === 'podcasts') {
      return (
        <VStack className="gap-3">
          <Heading>Recommended Podcasts</Heading>
          <Text>Your favorite podcasts. Updated daily.</Text>
          <Divider />
          <VStack className="border outline-dashed rounded-md justify-center items-center gap-4 h-96 border-border-200 p-4">
            <Image
              className="w-10 h-10"
              source={require('../../example-screens/assets/podcasts.svg')}
            />
            <Text className="text-center font-semibold">No episodes added</Text>
            <Text className="text-center text-text-800">
              You have not added any podcasts. Add one below.
            </Text>
            <Button>
              <ButtonText className="text-center font-medium text-sm">
                Add Podcast
              </ButtonText>
            </Button>
          </VStack>
        </VStack>
      );
    }
  };
  return (
    <Box className="w-full h-lvh overflow-hidden">
      <VStack className="bg-background-0  md:border md:rounded-lg border-border-200 self-start h-full w-full flex-col sm:border-0">
        <HStack className="w-full border-b border-border-200 md:flex hidden">
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
            <Sidebar
              sidebarItems={sidebarItems}
              isNested
              FabSidebarProps={{
                w: '$12',
                h: '$12',
              }}
            />
          </Box>

          <VStack className="gap-6 flex-1 -z-99 p-6 border-border-200 md:p-6 md:border-l p-4 border-l-0">
            <HStack className="md:justify-between sm:justify:center">
              <HStack className="bg-background-100 rounded-md">
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
                className="gap-1 md-flex sm-hidden md:flex hidden"
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
              >
                <ButtonIcon as={PlusCircle} />
                <ButtonText className="font-medium text-sm">
                  Add music
                </ButtonText>
              </Button>
            </HStack>
            {/* <ScrollView> */}
            {renderListenNow()}
            {/* </ScrollView>  */}
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Music;
