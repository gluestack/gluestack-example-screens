import React from 'react';
import {
  Avatar,
  AvatarImage,
  Box,
  HStack,
  Text,
  Image,
  Icon,
  VStack,
  InputField,
  Pressable,
  Button,
  ButtonText,
  SearchIcon,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  InputSlot,
  Input,
  AvatarFallbackText,
  Menu,
  MenuItem,
  MenuItemLabel,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  BadgeText,
  Badge,
  Heading,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
} from '@gluestack-ui-new/themed';
import {
  flyoutItems,
  footerTags,
  menuItems,
  postType,
  postItems,
} from './constants';
import {
  MessageCircle,
  Menu as MenuIcon,
  PlusSquare,
  User,
  Home,
  X as CloseIcon,
  MoreVertical,
  UploadCloud,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react-native';
import { useController } from 'react-hook-form';
import {
  ChatView,
  SettingsView,
  Sidebar,
  HomeView,
  ProfileView,
} from './components';

type ViewType =
  | 'settings'
  | 'home'
  | 'messages'
  | 'create'
  | 'notifications'
  | 'profile';

const UserCard = ({ children, direction = 'row', ...props }: any) => {
  return direction === 'row' ? (
    <HStack w="$full" alignItems="center" space="md" {...props}>
      {children}
    </HStack>
  ) : (
    <VStack w="$full" alignItems="center" {...props}>
      {children}
    </VStack>
  );
};

const UserCardAvatar = ({ name, src, ...props }: any) => {
  return (
    <Avatar {...props}>
      <AvatarFallbackText>{name}</AvatarFallbackText>
      <AvatarImage source={src} />
    </Avatar>
  );
};

const UserCardStack = ({ children, ...props }: any) => {
  return (
    <VStack flex={1} {...props}>
      {children}
    </VStack>
  );
};

const CustomInput = ({
  label,
  icon,
  children,
  formControlProps,
  inputProps,
  validatorProps,
}: {
  label?: string;
  icon?: any;
  children: any;
  formControlProps?: any;
  inputProps?: any;
  validatorProps?: any;
}) => {
  let childrenWithProps;
  if (validatorProps) {
    /* eslint-disable */
    const {
      field: { onChange, onBlur, value },
      fieldState: { error, isTouched },
    } = useController({
      ...validatorProps,
    });
    childrenWithProps = React.cloneElement(children, {
      onBlur: onBlur,
      value: value,
      onChangeText: (text: string) => {
        onChange(text);
        if (isTouched && validatorProps?.trigger) {
          validatorProps.trigger(validatorProps?.name);
        }
      },
    });
    return (
      <FormControl size="sm" {...formControlProps}>
        {label && (
          <FormControlLabel mb="$2">
            <FormControlLabelText fontSize="$sm">{label}</FormControlLabelText>
          </FormControlLabel>
        )}
        {icon ? (
          <Input borderRadius="$lg" hardShadow="5" {...inputProps}>
            <InputSlot pl="$3">{icon}</InputSlot>
            {validatorProps ? childrenWithProps : children}
          </Input>
        ) : (
          <Input {...inputProps}>
            {validatorProps ? childrenWithProps : children}
          </Input>
        )}
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
      </FormControl>
    );
  }
  return (
    <FormControl size="sm" {...formControlProps}>
      {label && (
        <FormControlLabel mb="$2">
          <FormControlLabelText fontSize="$sm">{label}</FormControlLabelText>
        </FormControlLabel>
      )}
      {icon ? (
        <Input borderRadius="$lg" hardShadow="5" {...inputProps}>
          <InputSlot pl="$3">{icon}</InputSlot>
          {children}
        </Input>
      ) : (
        <Input {...inputProps}>{children}</Input>
      )}
    </FormControl>
  );
};

const Card = ({ children, ...props }: any) => {
  return (
    <VStack
      $base-p="$4"
      $xs-p="$6"
      borderRadius="$xl"
      borderWidth="$1"
      borderColor="$border200"
      hardShadow="5"
      backgroundColor="$background0"
      {...props}
    >
      {children}
    </VStack>
  );
};

const CustomModal = ({
  showModal,
  setShowModal,
  ref,
  children,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  ref: any;
  children: React.ReactNode;
}) => {
  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false);
      }}
      finalFocusRef={ref}
    >
      <ModalBackdrop />
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
};

const SuggestionsSection = ({
  data,
  onFollow,
}: {
  data: postType;
  onFollow: () => void;
}) => {
  return (
    <UserCard space="md" alignItems="center" py="$2">
      <UserCardAvatar name={data.name} src={data.profileImage} h="$9" w="$9" />
      <UserCardStack>
        <Text fontSize="$sm" fontWeight="$bold" color="$text900">
          {data.name}
        </Text>
        <Text fontSize="$xs" color="$text700">
          {data.bio}
        </Text>
      </UserCardStack>
      <Button
        size="sm"
        action="primary"
        borderRadius="$full"
        variant="outline"
        onPress={onFollow}
      >
        <ButtonText>{data.followStatus ? 'Unfollow' : 'Follow'}</ButtonText>
      </Button>
    </UserCard>
  );
};

const GetPremiumCard = () => {
  return (
    <Card $xs-p="$4" $lg-p="$6" mt="$4" hardShadow="0" space="md">
      <Text fontSize="$lg" color="$text900" fontWeight="$bold">
        Subscribe to Premium
      </Text>
      <Text fontSize="$sm" color="$text700">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </Text>
      <Button borderRadius="$xl" size="sm" flexGrow={0}>
        <ButtonText>Subscribe</ButtonText>
      </Button>
    </Card>
  );
};

const FlyoutMenu = ({
  menuItems,
  onSignOut,
  setView,
}: {
  menuItems: any;
  onSignOut: () => void;
  setView: React.Dispatch<React.SetStateAction<ViewType>>;
}) => {
  const onClickHandler = (item: any) => {
    if (item.key === 'signOut') {
      onSignOut();
    }
    if (item.key === 'settings') {
      setView('settings');
    }
  };
  return (
    <Menu
      placement="top"
      trigger={({ ...triggerProps }) => (
        <Pressable {...triggerProps}>
          <Icon as={MenuIcon} w="$6" h="$6" />
        </Pressable>
      )}
    >
      {menuItems.map((item: any) => (
        <MenuItem
          backgroundColor="$background0"
          key={item.key}
          textValue={item.key}
          onPress={() => onClickHandler(item)}
        >
          <Icon as={item.icon} size="sm" mr="$2" />
          <MenuItemLabel size="sm">{item.value}</MenuItemLabel>
        </MenuItem>
      ))}
    </Menu>
  );
};

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
      $md-display="none"
      borderBottomWidth="$1"
      borderColor="$border200"
      backgroundColor="$background0"
      justifyContent="space-between"
      py="$2.5"
      px="$4"
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
        <Icon as={MessageCircle} w="$6" h="$6" />
      </Pressable>
    </HStack>
  );
};

const CreatePostModal = ({
  showCreatePost,
  setShowCreatePost,
  ref,
}: {
  showCreatePost: boolean;
  setShowCreatePost: React.Dispatch<React.SetStateAction<boolean>>;
  ref: any;
}) => {
  return (
    <CustomModal
      showModal={showCreatePost}
      setShowModal={setShowCreatePost}
      ref={ref}
    >
      <ModalBody borderRadius="$xl" p="$6">
        <Box h="$80">
          <VStack
            flex={1}
            py="$6"
            alignItems="center"
            borderRadius="$xl"
            borderStyle="dashed"
            borderWidth="$1"
            borderColor="$border300"
            justifyContent="center"
            backgroundColor="$background0"
          >
            <Pressable>
              <Box alignItems="center">
                <Icon as={UploadCloud} h="$16" w="$16" />
                <Text
                  mt="$1.5"
                  fontSize="$sm"
                  lineHeight="$md"
                  color="$text700"
                >
                  Drag & drop your file here
                </Text>
              </Box>
            </Pressable>
            <Text mt="$1.5">or</Text>
            <Pressable>
              <Badge
                size="md"
                variant="solid"
                borderRadius="$xs"
                action="muted"
                px="$3"
                py="$0.5"
                mt="$1.5"
              >
                <BadgeText>Browse Files</BadgeText>
              </Badge>
            </Pressable>
          </VStack>
          <CustomInput
            inputProps={{
              backgroundColor: '$background0',
              mt: '$4',
            }}
          >
            <InputField
              fontSize="$sm"
              type="text"
              placeholder="Add a caption"
            />
          </CustomInput>
          <VStack
            $md-flexDirection="row"
            w="$full"
            space="sm"
            mt="$4"
            justifyContent="flex-end"
          >
            <Button size="sm" onPress={() => setShowCreatePost(false)}>
              <ButtonText>Create Post</ButtonText>
            </Button>
            <Button
              size="sm"
              variant="outline"
              action="secondary"
              onPress={() => setShowCreatePost(false)}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
          </VStack>
        </Box>
      </ModalBody>
    </CustomModal>
  );
};

const StoryModal = ({
  showStory,
  setShowStory,
  ref,
  storyMedia,
  setStoryMedia,
}: {
  showStory: boolean;
  setShowStory: React.Dispatch<React.SetStateAction<boolean>>;
  ref: any;
  storyMedia: postType;
  setStoryMedia: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const swipeLeft = () => {
    if (storyMedia?.key > 0) {
      setStoryMedia(postItems[storyMedia?.key - 1]);
    }
  };
  const swipeRight = () => {
    if (storyMedia.key < postItems.length - 1) {
      setStoryMedia(postItems[storyMedia?.key + 1]);
    }
  };
  return (
    <CustomModal showModal={showStory} setShowModal={setShowStory} ref={ref}>
      <ModalBody borderRadius="$none" p="$0">
        <Pressable
          sx={{
            position: 'absolute',
            right: 0,
            zIndex: 1000,
          }}
          onPress={() => setShowStory(false)}
        >
          <Icon as={CloseIcon} w="$6" h="$6" p="$2" color="white" />
        </Pressable>

        <Pressable
          position="absolute"
          zIndex={1000}
          left={0}
          bottom="$1/2"
          onPress={swipeLeft}
          display={storyMedia?.key === 0 ? 'none' : 'flex'}
        >
          <Icon as={ChevronLeft} w="$8" h="$8" p="$2" color="white" />
        </Pressable>

        <Pressable
          position="absolute"
          zIndex={1000}
          right={0}
          bottom="$1/2"
          onPress={swipeRight}
          display={storyMedia?.key === postItems.length - 1 ? 'none' : 'flex'}
        >
          <Icon as={ChevronRight} w="$8" h="$8" p="$2" color="white" />
        </Pressable>
        <Box
          //@ts-ignore
          h="95vh"
          position="relative"
        >
          <Image source={storyMedia?.image} w="auto" h="$full" />
        </Box>
      </ModalBody>
    </CustomModal>
  );
};

const SharePostModal = ({
  showModal,
  setShowModal,
  ref,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  ref: any;
}) => {
  return (
    <CustomModal showModal={showModal} setShowModal={setShowModal} ref={ref}>
      <ModalHeader>
        <Heading flex={1} textAlign="center" size="md" mb="$2">
          Share
        </Heading>
        <ModalCloseButton position="absolute" right={0} top={8}>
          <Icon as={CloseIcon} />
        </ModalCloseButton>
      </ModalHeader>
      <ModalBody
        borderTopWidth="$1"
        borderBottomWidth="$1"
        borderColor="$border200"
        p="$0"
      >
        <CustomInput
          inputProps={{
            w: '$full',
            borderWidth: 0,
            sx: {
              _web: {
                boxShadow: 'none',
                borderBottomWidth: '$1',
                borderColor: '$border200',
                px: '$4',
              },
            },
          }}
        >
          <HStack alignItems="center" w="$full">
            <Text fontWeight="$semibold" color="$text900">
              To:
            </Text>
            <InputField type="text" placeholder="Search..." />
          </HStack>
        </CustomInput>
        {postItems.map((post: postType, index: number) => {
          if (index < 3)
            return (
              <UserCard space="md" alignItems="center" py="$2" px="$4">
                <UserCardAvatar
                  name={post.name}
                  src={post.profileImage}
                  h="$9"
                  w="$9"
                />
                <UserCardStack>
                  <Text fontSize="$sm" fontWeight="$bold" color="$text900">
                    {post.name}
                  </Text>
                  <Text fontSize="$xs" color="$text700">
                    {post.bio}
                  </Text>
                </UserCardStack>
              </UserCard>
            );
        })}
      </ModalBody>
      <ModalFooter>
        <Button w="$full" size="sm" action="primary">
          <ButtonText>send</ButtonText>
        </Button>
      </ModalFooter>
    </CustomModal>
  );
};

const NotificationsModal = ({
  showModal,
  setShowModal,
  ref,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  ref: any;
}) => {
  return (
    <CustomModal showModal={showModal} setShowModal={setShowModal} ref={ref}>
      <ModalHeader>
        <Heading
          flex={1}
          fontWeight="$semibold"
          textAlign="center"
          size="md"
          mb="$2"
        >
          Notifications
        </Heading>
        <ModalCloseButton position="absolute" right={0} top={8}>
          <Icon as={CloseIcon} />
        </ModalCloseButton>
      </ModalHeader>
      <ModalBody
        borderTopWidth="$1"
        borderBottomWidth="$1"
        borderColor="$border200"
        p="$0"
      >
        <VStack w="$full">
          {postItems.map((post: postType, index: number) => {
            if (index < 5)
              return (
                <UserCard
                  space="md"
                  alignItems="center"
                  py="$2"
                  px="$4"
                  w="$full"
                >
                  <UserCardAvatar
                    name={post.name}
                    src={post.profileImage}
                    h="$9"
                    w="$9"
                  />
                  <UserCardStack>
                    <Text fontSize="$sm" color="$text900">
                      {post.name} Liked your post
                    </Text>
                  </UserCardStack>
                  <Pressable>
                    <Icon as={MoreVertical} w="$6" h="$6" />
                  </Pressable>
                </UserCard>
              );
          })}
          <Pressable
            borderTopWidth="$1"
            borderBottomWidth="$1"
            borderColor="$border200"
          >
            <Text textAlign="center" color="$text900" py="$2">
              see more
            </Text>
          </Pressable>
        </VStack>
      </ModalBody>
    </CustomModal>
  );
};

const FooterFold = () => {
  return (
    <VStack mt="$4" px="$2" space="md">
      <HStack space="sm" flexWrap="wrap">
        {footerTags.map((tag, index) => (
          <Text key={index} fontSize="$xs" color="$text400">
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

const SignOutModal = ({
  showModal,
  setShowModal,
  ref,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  ref: any;
}) => {
  return (
    <CustomModal showModal={showModal} setShowModal={setShowModal} ref={ref}>
      <ModalHeader>
        <Heading
          flex={1}
          fontWeight="$semibold"
          textAlign="center"
          size="md"
          mb="$2"
        >
          Confirm Signout
        </Heading>
        <ModalCloseButton position="absolute" right={0} top={8}>
          <Icon as={CloseIcon} />
        </ModalCloseButton>
      </ModalHeader>
      <ModalBody borderTopWidth="$1" borderColor="$border200" p="$0">
        <HStack>
          <VStack w="$full">
            <Text fontSize="$sm" color="$text900" py="$2" px="$4">
              Are you sure you want to sign out?
            </Text>
          </VStack>
          <HStack></HStack>
        </HStack>
      </ModalBody>
      <ModalFooter>
        <Button size="sm" action="primary" onPress={() => setShowModal(false)}>
          <ButtonText>Sign Out</ButtonText>
        </Button>
        <Button
          ml="$2"
          size="sm"
          variant="outline"
          action="secondary"
          onPress={() => setShowModal(false)}
        >
          <ButtonText>Cancel</ButtonText>
        </Button>
      </ModalFooter>
    </CustomModal>
  );
};

const Feed = () => {
  const [view, setView] = React.useState<ViewType>('home');
  const [showStory, setShowStory] = React.useState(false);
  const [showCreatePost, setShowCreatePost] = React.useState(false);
  const [showSharePost, setShowSharePost] = React.useState(false);
  const [showNotifications, setShowNotifications] = React.useState(false);
  const [showSignoutModal, setShowSignoutModal] = React.useState(false);
  const [storyMedia, setStoryMedia] = React.useState<any>(null);
  const [posts, setPosts] = React.useState<postType[]>(postItems);
  const ref = React.useRef(null);

  const viewRenderer = (viewInput: ViewType) => {
    switch (viewInput) {
      case 'messages':
        return <ChatView />;
      case 'settings':
        return <SettingsView />;
      case 'profile':
        return <ProfileView />;
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
  };
  const onLike = (username: string) => {
    const result = posts.map((post) => {
      if (post.name === username) {
        const newLikedBy = !post.postLiked;
        return { ...post, postLiked: newLikedBy };
      }
      return post;
    });
    setPosts(result);
  };
  const onPostSave = (username: string) => {
    const result = posts.map((post) => {
      if (post.name === username) {
        const newLikedBy = !post.postSaved;
        return { ...post, postSaved: newLikedBy };
      }
      return post;
    });
    setPosts(result);
  };

  const openMessages = () => {
    setView('messages');
  };

  return (
    <Box w="$full" bg="$background0">
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
      <HStack $xl-maxWidth="$5/6" w="$full" $lg-px="$4" $xl-px="$0" mx="auto">
        <Box
          $base-display="none"
          $md-display="flex"
          $base-width="$1/4"
          $lg-width="$1/6"
          borderRightWidth="$1"
          borderColor="$border200"
          pr="$6"
          pt="$4"
          sx={{
            _web: {
              position: 'sticky',
            },
          }}
        >
          <Box h="$16" mb="$4" alignItems="center" justifyContent="center">
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
            $base-display="none"
            $lg-display="flex"
            $sm-w="$1/2"
            $md-w="$2/6"
            p="$4"
            borderLeftWidth="$1"
            borderColor="$border200"
          >
            <CustomInput
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
            </CustomInput>
            <Box
              borderRadius="$xl"
              borderWidth="$1"
              borderColor="$border200"
              $base-p="$4"
              $lg-p="$6"
            >
              <Text
                mb="$2.5"
                fontSize="$lg"
                color="$text900"
                fontWeight="$bold"
              >
                You might know
              </Text>
              {posts.map((post: postType, index: number) => {
                if (index < 3) {
                  return (
                    <SuggestionsSection
                      key={index}
                      data={post}
                      onFollow={() => onFollow(post.name)}
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
        py="$1.5"
        sx={{
          _web: {
            position: 'fixed',
          },
        }}
        bottom={0}
        $md-display="none"
        backgroundColor="$background0"
        w="$full"
        borderTopWidth="$1"
        borderColor="$border200"
        justifyContent="space-around"
        zIndex={1000}
      >
        <Pressable onPress={() => setView('home')}>
          <Icon as={Home} w="$6" h="$6" p="$1.5" />
        </Pressable>
        <Pressable>
          <Icon as={SearchIcon} w="$6" h="$6" p="$2" />
        </Pressable>
        <Pressable onPress={() => setShowCreatePost(true)}>
          <Icon as={PlusSquare} w="$6" h="$6" p="$2" />
        </Pressable>
        <Pressable onPress={() => setView('profile')}>
          <Icon as={User} w="$6" h="$6" p="$2" />
        </Pressable>
      </HStack>
    </Box>
  );
};

export default Feed;
