import {
  Avatar,
  AvatarImage,
  Box,
  Button,
  ButtonSpinner,
  ButtonText,
  HStack,
  Heading,
  Pressable,
  Text,
  VStack,
} from '@/components/nativewind';
import React, { useRef, useState } from 'react';
import {
  menuItems,
  postItems,
} from '../../../src/example-screens/feed/constants';
import { useMediaQuery } from '@gluestack-ui-new/themed';
import UserCard from '../components/UserCard';
import UserCardAvatar from '../components/UserCardAvatar';
import UserCardStack from '../components/UserCardStack';
type ViewType =
  | 'settings'
  | 'home'
  | 'messages'
  | 'create'
  | 'notifications'
  | 'profile';

export type commentType = {
  id: number;
  name: string;
  comment: string;
};
export type postType = {
  name: string;
  bio: string;
  profileImage: string;
  caption: string;
  likedBy: string;
  image: string;
  key: number;
  postLiked?: boolean;
  followStatus?: boolean;
  postSaved?: boolean;
  comments?: Array<commentType>;
  following?: number;
  followers?: number;
};

export const flyoutItems = [
  {
    key: 'settings',
    value: 'Settings',
    // icon: Settings,
  },

  {
    key: 'signOut',
    value: 'Sign Out',
    // icon: LogOut,
  },
];
const TopNavigation = ({
  onSignOut,
  openMessages,
  setView,
}: {
  onSignOut: () => void;
  openMessages: () => void;
  setView: React.Dispatch<React.SetStateAction<ViewType>>;
}) => {
  return (
    <HStack
      className="md-hidden border-b border-border-200 bg-background-0 justify-between py-2.5 px-4"
      sx={{
        _web: {
          position: 'sticky',
          top: 0,
          zIndex: 100,
        },
      }}
    >
      <FlyoutMenu
        menuItems={flyoutItems}
        onSignOut={onSignOut}
        setView={setView}
      />
      <Pressable onPress={openMessages}>
        {/* <Icon as={MessageCircle} w="$6" h="$6" /> */}
      </Pressable>
    </HStack>
  );
};
const FlyoutMenu = ({}: // menuItems,
// onSignOut,
// setView,
{
  menuItems: any;
  onSignOut: () => void;
  setView: React.Dispatch<React.SetStateAction<ViewType>>;
}) => {
  // const onClickHandler = (item: any) => {
  //   if (item.key === 'signOut') {
  //     onSignOut();
  //   }
  //   if (item.key === 'settings') {
  //     setView('settings');
  //   }
  // };
  return (
    <></>
    // <Menu
    //   placement="top"
    //   trigger={({ ...triggerProps }) => (
    //     <Pressable {...triggerProps}>
    //       <Icon as={MenuIcon} w="$6" h="$6" />
    //     </Pressable>
    //   )}
    // >
    //   {menuItems.map((item: any) => (
    //     <MenuItem
    //       backgroundColor="$background0"
    //       key={item.key}
    //       textValue={item.key}
    //       onPress={() => onClickHandler(item)}
    //     >
    //       <Icon as={item.icon} size="sm" mr="$2" />
    //       <MenuItemLabel size="sm">{item.value}</MenuItemLabel>
    //     </MenuItem>
    //   ))}
    // </Menu>
  );
};

const StoryModal = ({}: // showStory,
// setShowStory,
// ref,
// storyMedia,
// setStoryMedia,
{
  showStory: boolean;
  setShowStory: React.Dispatch<React.SetStateAction<boolean>>;
  ref: any;
  storyMedia: postType;
  setStoryMedia: React.Dispatch<React.SetStateAction<any>>;
}) => {
  // const swipeLeft = () => {
  //   if (storyMedia?.key > 0) {
  //     setStoryMedia(postItems[storyMedia?.key - 1]);
  //   }
  // };
  // const swipeRight = () => {
  //   if (storyMedia.key < postItems.length - 1) {
  //     setStoryMedia(postItems[storyMedia?.key + 1]);
  //   }
  // };
  return (
    <></>
    // <CustomModal showModal={showStory} setShowModal={setShowStory} ref={ref}>
    //   <ModalBody borderRadius="$none" p="$0">
    //     <Pressable
    //       sx={{
    //         position: 'absolute',
    //         right: 0,
    //         zIndex: 1000,
    //       }}
    //       onPress={() => setShowStory(false)}
    //     >
    //       <Icon as={CloseIcon} w="$6" h="$6" p="$2" color="white" />
    //     </Pressable>

    //     <Pressable
    //       position="absolute"
    //       zIndex={1000}
    //       left={0}
    //       bottom="$1/2"
    //       onPress={swipeLeft}
    //       display={storyMedia?.key === 0 ? 'none' : 'flex'}
    //     >
    //       <Icon as={ChevronLeft} w="$8" h="$8" p="$2" color="white" />
    //     </Pressable>

    //     <Pressable
    //       position="absolute"
    //       zIndex={1000}
    //       right={0}
    //       bottom="$1/2"
    //       onPress={swipeRight}
    //       display={storyMedia?.key === postItems.length - 1 ? 'none' : 'flex'}
    //     >
    //       <Icon as={ChevronRight} w="$8" h="$8" p="$2" color="white" />
    //     </Pressable>
    //     <Box
    //       //@ts-ignore
    //       h="95vh"
    //       position="relative"
    //     >
    //       <Image source={storyMedia?.image} w="auto" h="$full" />
    //     </Box>
    //   </ModalBody>
    // </CustomModal>
  );
};
// const CustomModal = ({
//   showModal,
//   setShowModal,
//   ref,
//   children,
// }: {
//   showModal: boolean;
//   setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
//   ref: any;
//   children: React.ReactNode;
// }) => {
//   return (
//     <></>
//     // <Modal
//     //   isOpen={showModal}
//     //   onClose={() => {
//     //     setShowModal(false);
//     //   }}
//     //   finalFocusRef={ref}
//     // >
//     //   <ModalBackdrop />
//     //   <ModalContent>{children}</ModalContent>
//     // </Modal>
//   );
// };

const CreatePostModal = ({}: // showCreatePost,
// setShowCreatePost,
// ref,
{
  showCreatePost: boolean;
  setShowCreatePost: React.Dispatch<React.SetStateAction<boolean>>;
  ref: any;
}) => {
  return (
    <></>
    // <CustomModal
    //   showModal={showCreatePost}
    //   setShowModal={setShowCreatePost}
    //   ref={ref}
    // >
    //   <ModalBody borderRadius="$xl" p="$6">
    //     <Box h="$80">
    //       <VStack
    //         flex={1}
    //         py="$6"
    //         alignItems="center"
    //         borderRadius="$xl"
    //         borderStyle="dashed"
    //         borderWidth="$1"
    //         borderColor="$border300"
    //         justifyContent="center"
    //         backgroundColor="$background0"
    //       >
    //         <Pressable>
    //           <Box alignItems="center">
    //             <Icon as={UploadCloud} h="$16" w="$16" />
    //             <Text
    //               mt="$1.5"
    //               fontSize="$sm"
    //               lineHeight="$md"
    //               color="$text700"
    //             >
    //               Drag & drop your file here
    //             </Text>
    //           </Box>
    //         </Pressable>
    //         <Text mt="$1.5">or</Text>
    //         <Pressable>
    //           <Badge
    //             size="md"
    //             variant="solid"
    //             borderRadius="$xs"
    //             action="muted"
    //             px="$3"
    //             py="$0.5"
    //             mt="$1.5"
    //           >
    //             <BadgeText>Browse Files</BadgeText>
    //           </Badge>
    //         </Pressable>
    //       </VStack>
    //       <CustomInput
    //         inputProps={{
    //           backgroundColor: '$background0',
    //           mt: '$4',
    //         }}
    //       >
    //         <InputField
    //           fontSize="$sm"
    //           type="text"
    //           placeholder="Add a caption"
    //         />
    //       </CustomInput>
    //       <VStack
    //         $md-flexDirection="row"
    //         w="$full"
    //         space="sm"
    //         mt="$4"
    //         justifyContent="flex-end"
    //       >
    //         <Button size="sm" onPress={() => setShowCreatePost(false)}>
    //           <ButtonText>Create Post</ButtonText>
    //         </Button>
    //         <Button
    //           size="sm"
    //           variant="outline"
    //           action="secondary"
    //           onPress={() => setShowCreatePost(false)}
    //         >
    //           <ButtonText>Cancel</ButtonText>
    //         </Button>
    //       </VStack>
    //     </Box>
    //   </ModalBody>
    // </CustomModal>
  );
};
const SharePostModal = ({}: // showModal,
// setShowModal,
// ref,
{
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  ref: any;
}) => {
  return (
    <></>
    // <CustomModal showModal={showModal} setShowModal={setShowModal} ref={ref}>
    //   <ModalHeader>
    //     <Heading flex={1} textAlign="center" size="md" mb="$2">
    //       Share
    //     </Heading>
    //     <ModalCloseButton position="absolute" right={0} top={8}>
    //       <Icon as={CloseIcon} />
    //     </ModalCloseButton>
    //   </ModalHeader>
    //   <ModalBody
    //     borderTopWidth="$1"
    //     borderBottomWidth="$1"
    //     borderColor="$border200"
    //     p="$0"
    //   >
    //     <CustomInput
    //       inputProps={{
    //         w: '$full',
    //         borderWidth: 0,
    //         sx: {
    //           _web: {
    //             boxShadow: 'none',
    //             borderBottomWidth: '$1',
    //             borderColor: '$border200',
    //             px: '$4',
    //           },
    //         },
    //       }}
    //     >
    //       <HStack alignItems="center" w="$full">
    //         <Text fontWeight="$semibold" color="$text900">
    //           To:
    //         </Text>
    //         <InputField type="text" placeholder="Search..." />
    //       </HStack>
    //     </CustomInput>
    //     {postItems.map((post: postType, index: number) => {
    //       if (index < 3)
    //         return (
    //           <UserCard space="md" alignItems="center" py="$2" px="$4">
    //             <UserCardAvatar
    //               name={post.name}
    //               src={post.profileImage}
    //               h="$9"
    //               w="$9"
    //             />
    //             <UserCardStack>
    //               <Text fontSize="$sm" fontWeight="$bold" color="$text900">
    //                 {post.name}
    //               </Text>
    //               <Text fontSize="$xs" color="$text700">
    //                 {post.bio}
    //               </Text>
    //             </UserCardStack>
    //           </UserCard>
    //         );
    //     })}
    //   </ModalBody>
    //   <ModalFooter>
    //     <Button w="$full" size="sm" action="primary">
    //       <ButtonText>send</ButtonText>
    //     </Button>
    //   </ModalFooter>
    // </CustomModal>
  );
};

const NotificationsModal = ({}: // showModal,
// setShowModal,
// ref,
{
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  ref: any;
}) => {
  return (
    <></>
    // <CustomModal showModal={showModal} setShowModal={setShowModal} ref={ref}>
    //   <ModalHeader>
    //     <Heading
    //       flex={1}
    //       fontWeight="$semibold"
    //       textAlign="center"
    //       size="md"
    //       mb="$2"
    //     >
    //       Notifications
    //     </Heading>
    //     <ModalCloseButton position="absolute" right={0} top={8}>
    //       <Icon as={CloseIcon} />
    //     </ModalCloseButton>
    //   </ModalHeader>
    //   <ModalBody
    //     borderTopWidth="$1"
    //     borderBottomWidth="$1"
    //     borderColor="$border200"
    //     p="$0"
    //   >
    //     <VStack w="$full">
    //       {postItems.map((post: postType, index: number) => {
    //         if (index < 5)
    //           return (
    //             <UserCard
    //               space="md"
    //               alignItems="center"
    //               py="$2"
    //               px="$4"
    //               w="$full"
    //             >
    //               <UserCardAvatar
    //                 name={post.name}
    //                 src={post.profileImage}
    //                 h="$9"
    //                 w="$9"
    //               />
    //               <UserCardStack>
    //                 <Text fontSize="$sm" color="$text900">
    //                   {post.name} Liked your post
    //                 </Text>
    //               </UserCardStack>
    //               <Pressable>
    //                 <Icon as={MoreVertical} w="$6" h="$6" />
    //               </Pressable>
    //             </UserCard>
    //           );
    //       })}
    //       <Pressable
    //         borderTopWidth="$1"
    //         borderBottomWidth="$1"
    //         borderColor="$border200"
    //       >
    //         <Text textAlign="center" color="$text900" py="$2">
    //           see more
    //         </Text>
    //       </Pressable>
    //     </VStack>
    //   </ModalBody>
    // </CustomModal>
  );
};
const SignOutModal = ({}: // showModal,
// setShowModal,
// ref,
{
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  ref: any;
}) => {
  return (
    <></>
    // <CustomModal showModal={showModal} setShowModal={setShowModal} ref={ref}>
    //   <ModalHeader>
    //     <Heading
    //       flex={1}
    //       fontWeight="$semibold"
    //       textAlign="center"
    //       size="md"
    //       mb="$2"
    //     >
    //       Confirm Signout
    //     </Heading>
    //     <ModalCloseButton position="absolute" right={0} top={8}>
    //       <Icon as={CloseIcon} />
    //     </ModalCloseButton>
    //   </ModalHeader>
    //   <ModalBody borderTopWidth="$1" borderColor="$border200" p="$0">
    //     <HStack>
    //       <VStack w="$full">
    //         <Text fontSize="$sm" color="$text900" py="$2" px="$4">
    //           Are you sure you want to sign out?
    //         </Text>
    //       </VStack>
    //       <HStack></HStack>
    //     </HStack>
    //   </ModalBody>
    //   <ModalFooter>
    //     <Button size="sm" action="primary" onPress={() => setShowModal(false)}>
    //       <ButtonText>Sign Out</ButtonText>
    //     </Button>
    //     <Button
    //       ml="$2"
    //       size="sm"
    //       variant="outline"
    //       action="secondary"
    //       onPress={() => setShowModal(false)}
    //     >
    //       <ButtonText>Cancel</ButtonText>
    //     </Button>
    //   </ModalFooter>
    // </CustomModal>
  );
};

const Card = ({ children, ...props }: any) => {
  return (
    <VStack
      className="rounded-xl border border-border-200 bg-background-0"
      $base-p="$4"
      $xs-p="$6"
      hardShadow="5"
      {...props}
    >
      {children}
    </VStack>
  );
};

const GetPremiumCard = () => {
  return (
    <Card className="mt-4" $xs-p="$4" $lg-p="$6" hardShadow="0" space="md">
      <Text className="text-lg text-text-900 font-bold">
        Subscribe to Premium
      </Text>
      <Text className="text-sm text-text-700">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </Text>
      <Button className="rounded-xl" size="sm" flexGrow={0}>
        <ButtonText>Subscribe</ButtonText>
      </Button>
    </Card>
  );
};
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
export const Sidebar = ({
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
    <VStack
      className="w-full h-full"
      space={isNested ? '3xl' : 'sm'}
      flexGrow={1}
    >
      {!isNested ? (
        <>
          {sidebarItems.map((item) => (
            <Pressable
              className="w-full p-2 rounded-md"
              $active-bg="$background100"
              key={item.key}
              onPress={() => handlePress(item)}
              bg={item.key === selected.key ? '$background100' : ''}
              {...itemProps}
            >
              {/* @ts-ignore */}
              {({ hovered }) => (
                <Text
                  className="text-primary-950 text-md px-4"
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
                className="text-primary-950 font-bold mx-4"
                $lg-fontSize="$lg"
                $md-fontSize="$md"
                fontFamily="$heading"
              >
                {item?.heading}
              </Text>
              <VStack
                className="w-full mt-2"
                flexGrow={1}
                space="sm"
                key={item?.heading}
              >
                {item?.subItems?.map((item: NestedSidebarItemProps) => (
                  <Pressable
                    className="w-full p-2 rounded-md"
                    $active-bg="$background100"
                    $hover-bg="$background100"
                    key={item.key}
                    onPress={() => handlePress(item)}
                    bg={item.key === selected.key ? '$background100' : ''}
                    {...itemProps}
                  >
                    <HStack className="items-center ml-1.5" space="sm">
                      {/* {item?.icon && <Icon as={item.icon} />} */}
                      <Text
                        className="text-primary-950"
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
    // </ScrollView>
  );
};

const SuggestionsSection = ({
  data,
  onFollow,
  followLoading,
}: {
  data: postType;
  onFollow: () => void;
  followLoading: {
    loading: boolean;
    key: string | null;
  };
}) => {
  return (
    <UserCard className="items-center py-2" space="md">
      <UserCardAvatar
        name={data.name}
        src={data.profileImage}
        className="h-9 w-9"
      />
      <UserCardStack>
        <Text className="text-sm font-bold text-text-900">{data.name}</Text>
        <Text className="text-xs text-text-700">{data.bio}</Text>
      </UserCardStack>
      <Button
        className="w-24 rounded-full"
        size="sm"
        action="primary"
        variant="outline"
        onPress={onFollow}
        disabled={followLoading.key === data.name && followLoading.loading}
      >
        {followLoading.key === data.name && followLoading.loading ? (
          <ButtonSpinner className="mr-1" />
        ) : (
          <ButtonText>{data.followStatus ? 'Unfollow' : 'Follow'}</ButtonText>
        )}
      </Button>
    </UserCard>
  );
};

export const footerTags = [
  'Privacy Policy',
  'Terms of Service',
  'Cookie Policy',
  'Ads info',
  'API',
  'Jobs',
  'Language',
  'Locations',
  'More',
];
const FooterFold = () => {
  return (
    <VStack className="mt-4 px-2" space="md">
      <HStack space="sm" flexWrap="wrap">
        {footerTags.map((tag, index) => (
          <Text className="text-xs text-text-400" key={index}>
            {tag}
          </Text>
        ))}
      </HStack>
      <Text fontSize="$xs" color="$text400">
        2024 GLUEGRAM FROM GEEKYANTS
      </Text>
    </VStack>
  );
};
export const HomeView = ({
  posts,
  setStoryMedia,
  setShowStory,
}: // setShowSharePost,
// onLike,
// onPostSave,
// setPosts,
{
  posts: postType[];
  setStoryMedia: React.Dispatch<React.SetStateAction<any>>;
  setShowStory: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSharePost: React.Dispatch<React.SetStateAction<boolean>>;
  onLike: (username: string) => void;
  onPostSave: (username: string) => void;
  setPosts: React.Dispatch<React.SetStateAction<postType[]>>;
}) => {
  return (
    <>
      {/* <ScrollView
      // @ts-ignore
      h="100vh"
      $base-px="$4"
      $xl-px="$9"
      $md-pt="$4"
    > */}
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
        {/* {posts.map(
          (post: postType, index: number) => (
          <></>
          // <PostCard
          //   key={index}
          //   data={post}
          //   onLike={() => onLike(post.name)}
          //   onPostSave={() => onPostSave(post.name)}
          //   onShare={() => setShowSharePost(true)}
          //   setPosts={setPosts}
          // />
        ))} */}
      </VStack>
    </>
    // </ScrollView>
  );
};
const Feed = () => {
  const [showSignoutModal, setShowSignoutModal] = useState(false);
  const [view, setView] = useState<ViewType>('home');
  const [showStory, setShowStory] = useState(false);
  const [storyMedia, setStoryMedia] = useState<any>(null);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showSharePost, setShowSharePost] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [posts, setPosts] = useState<postType[]>(postItems);

  // const [followLoading, setFollowLoading] = React.useState({
  //   loading: false,
  //   key: null as string | null,
  // });

  const ref = useRef(null);

  const onSignOut = () => {
    setShowSignoutModal(true);
  };
  const onFollow = (username: string) => {
    const result = posts.map((post) => {
      if (post.name === username) {
        const newFollowStatus = !post.followStatus;
        return { ...post, followStatus: newFollowStatus };
      }
      return post;
    });
    setPosts(result);
    setFollowLoading({
      loading: true,
      key: username,
    });
    setTimeout(() => {
      setFollowLoading({
        loading: false,
        key: null,
      });
    }, 400);
  };
  const openMessages = () => {
    setView('messages');
  };
  const viewRenderer = (viewInput: ViewType) => {
    switch (viewInput) {
      case 'messages':
      // return <ChatView />;
      case 'settings':
      // return <SettingsView />;
      case 'profile':
      // return <ProfileView />;
      case 'home':
        return (
          <HomeView
            posts={posts}
            setStoryMedia={setStoryMedia}
            setShowStory={setShowStory}
            setShowSharePost={setShowSharePost}
            onLike={(username: string) => onLike(username)}
            onPostSave={(username: string) => onPostSave(username)}
            setPosts={setPosts}
          />
        );
      default:
        return (
          <HomeView
            posts={posts}
            setStoryMedia={setStoryMedia}
            setShowStory={setShowStory}
            setShowSharePost={setShowSharePost}
            onLike={(username: string) => onLike(username)}
            onPostSave={(username: string) => onPostSave(username)}
            setPosts={setPosts}
          />
        );
    }
  };
  const onSelected = (item: any) => {
    if (item.key === 'create') {
      setShowCreatePost(true);
    }
    if (item.key === 'notifications') {
      setShowNotifications(true);
    }
    if (item.key === 'signOut') {
      setShowSignoutModal(true);
    }
    if (item.key === 'messages') {
      setView('messages');
    }
    if (item.key === 'settings') {
      setView('settings');
    }
    if (item.key === 'home') {
      setView('home');
    }
    if (item.key === 'profile') {
      setView('profile');
    }
  };

  return (
    <Box className="w-full bg-background-0">
      <TopNavigation
        onSignOut={onSignOut}
        openMessages={openMessages}
        setView={setView}
      />
      <StoryModal
        showStory={showStory}
        setShowStory={setShowStory}
        ref={ref}
        storyMedia={storyMedia}
        setStoryMedia={setStoryMedia}
      />
      <CreatePostModal
        showCreatePost={showCreatePost}
        setShowCreatePost={setShowCreatePost}
        ref={ref}
      />
      <SharePostModal
        showModal={showSharePost}
        setShowModal={setShowSharePost}
        ref={ref}
      />
      <NotificationsModal
        showModal={showNotifications}
        setShowModal={setShowNotifications}
        ref={ref}
      />
      <SignOutModal
        showModal={showSignoutModal}
        setShowModal={setShowSignoutModal}
        ref={ref}
      />

      {/* main content */}
      <HStack
        className="w-full mx-auto"
        $xl-maxWidth="$5/6"
        $lg-px="$4"
        $xl-px="$0"
      >
        <Box
          className="border-r border-border-200 pr-6 pt-4"
          $base-display="none"
          $md-display="flex"
          $base-width="$1/4"
          $lg-width="$1/6"
          sx={{
            _web: {
              position: 'sticky',
            },
          }}
        >
          <Box className="h-16 mb-4 items-center justify-center">
            <Pressable onPress={() => setView('home')}>
              <Heading size="2xl">Gluegram</Heading>
            </Pressable>
          </Box>
          <Sidebar
            // @ts-ignore
            sidebarItems={menuItems}
            onSelected={onSelected}
            isNested
            itemProps={{
              p: '$2.5',
              bg: '$background0',
            }}
          />
        </Box>

        {viewRenderer(view)}

        {view === 'home' && (
          <Box
            className="p-4 border-l border-border-200"
            $base-display="none"
            $lg-display="flex"
            $sm-w="$1/2"
            $md-w="$2/6"
          >
            {/* <CustomInput
              inputProps={{
                hardShadow: '0',
                my: '$4',
                borderWidth: '$px',
                sx: {
                  _web: {
                    boxShadow: 'none',
                  },
                },
              }}
              icon={<Icon m="$2.5" as={SearchIcon} />}
            >
              <InputField type="text" placeholder="Search" />
            </CustomInput> */}
            <Box
              className="rounded-xl border border-border-200"
              $base-p="$4"
              $lg-p="$6"
            >
              <Text className="mb-2.5 text-lg text-text-900 font-bold">
                You might know
              </Text>
              {posts.map((post: postType, index: number) => {
                if (index < 3) {
                  return (
                    <SuggestionsSection
                      key={index}
                      data={post}
                      onFollow={() => onFollow(post.name)}
                      followLoading={{
                        loading: false,
                        key: null,
                      }}
                    />
                  );
                }
              })}
            </Box>
            <GetPremiumCard />
            <FooterFold />
          </Box>
        )}
      </HStack>
      {/* bottom navigation */}
      <HStack
        className="py-1.5 bottom-0 bg-background-0 w-full border-border-200 justify-around border-t z-1000"
        sx={{
          _web: {
            position: 'fixed',
          },
        }}
        $md-display="none"
      >
        <Pressable onPress={() => setView('home')}>
          {/* <Icon as={Home} className="w-6 h-6 p-1.5" /> */}
        </Pressable>
        <Pressable>
          {/* <Icon as={SearchIcon} className="w-6 h-6 p-2" /> */}
        </Pressable>
        <Pressable onPress={() => setShowCreatePost(true)}>
          {/* <Icon as={PlusSquare} className="w-6 h-6 p-2" /> */}
        </Pressable>
        <Pressable onPress={() => setView('profile')}>
          {/* <Icon as={User} className="w-6 h-6 p-2" /> */}
        </Pressable>
      </HStack>
    </Box>
  );
};

export default Feed;
