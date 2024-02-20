import React from 'react';
import {
  Avatar,
  AvatarImage,
  Box,
  HStack,
  ScrollView,
  Text,
  Image,
  Icon,
  AvatarGroup,
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
} from '@gluestack-ui-new/themed';
import { useController } from 'react-hook-form';
import Sidebar from '../components/Sidebar';
import {
  flyoutItems,
  footerTags,
  menuItems,
  postType,
  posts,
} from './constants';
import { UploadCloud } from 'lucide-react-native';
import {
  Bookmark,
  Heart,
  Send,
  MessageCircle,
  Smile,
  Menu as MenuIcon,
  PlusSquare,
  User,
  Home,
  MoreHorizontal,
  X as CloseIcon,
} from 'lucide-react-native';

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
  modalProps,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  ref: any;
  children: React.ReactNode;
  modalProps?: any;
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
      <ModalContent>
        <ModalBody {...modalProps}>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

const PostCard = ({ data }: { data: postType }) => {
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
        <Pressable>
          <Icon as={MoreHorizontal} w="$6" h="$6" />
        </Pressable>
      </UserCard>
      <Box borderRadius="$xs" overflow="hidden">
        <Image source={data.image} w="auto" h="$96" />
      </Box>
      <VStack w="$full" space="sm">
        <HStack justifyContent="space-between">
          <HStack>
            <Pressable>
              <Icon as={Heart} w="$6" h="$6" p="$1.5" />
            </Pressable>
            <Pressable>
              <Icon as={MessageCircle} w="$6" h="$6" p="$1.5" />
            </Pressable>
            <Pressable>
              <Icon as={Send} w="$6" h="$6" p="$1.5" />
            </Pressable>
          </HStack>
          <Pressable>
            <Icon as={Bookmark} w="$6" h="$6" p="$1.5" />
          </Pressable>
        </HStack>
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
        >
          <HStack width="$full" alignItems="center">
            <InputField
              type="text"
              fontSize="$sm"
              placeholder="Add a comment"
              sx={{
                ':focus': {
                  borderBottomWidth: '$0',
                  bg: '$background0',
                },
              }}
            />
            <Icon as={Smile} color="$text900" />
          </HStack>
        </CustomInput>
      </VStack>
    </Box>
  );
};

const SuggestionsSection = ({ data }: { data: postType }) => {
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
      <Button size="sm" action="primary" borderRadius="$full" variant="outline">
        <ButtonText>Follow</ButtonText>
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

const FlyoutMenu = ({ menuItems }: any) => {
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
        >
          <Icon as={item.icon} size="sm" mr="$2" />
          <MenuItemLabel size="sm">{item.value}</MenuItemLabel>
        </MenuItem>
      ))}
    </Menu>
  );
};

const TopNavigation = () => {
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
      <FlyoutMenu menuItems={flyoutItems} />
      <Pressable>
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
      modalProps={{
        borderRadius: '$xl',
        p: '$6',
      }}
    >
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
              <Text mt="$1.5" fontSize="$sm" lineHeight="$md" color="$text700">
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
          <InputField fontSize="$sm" type="text" placeholder="Add a caption" />
        </CustomInput>
        <VStack
          $md-flexDirection="row"
          w="$full"
          space="sm"
          mt="$4"
          justifyContent="flex-end"
        >
          <Button
            size="sm"
            action="positive"
            onPress={() => setShowCreatePost(false)}
          >
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
    </CustomModal>
  );
};

const StoryModal = ({
  showStory,
  setShowStory,
  ref,
  storyMedia,
}: {
  showStory: boolean;
  setShowStory: React.Dispatch<React.SetStateAction<boolean>>;
  ref: any;
  storyMedia: string;
}) => {
  return (
    <CustomModal
      showModal={showStory}
      setShowModal={setShowStory}
      ref={ref}
      modalProps={{
        borderRadius: '$none',
        p: '$0',
      }}
    >
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

      <Box
        //@ts-ignore
        h="95vh"
        position="relative"
      >
        <Image source={storyMedia} w="auto" h="$full" />
      </Box>
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

const Feed = () => {
  const [view, setView] = React.useState<any>('profile');
  const [showStory, setShowStory] = React.useState(false);
  const [showCreatePost, setShowCreatePost] = React.useState(false);
  const [storyMedia, setStoryMedia] = React.useState<any>(null);
  const ref = React.useRef(null);
  const onSelected = (item: typeof view) => {
    if (item.key === 'create') {
      setShowCreatePost(true);
    }
    setView(item.key);
  };
  return (
    <Box w="$full" bg="$background0">
      <TopNavigation />
      <StoryModal
        showStory={showStory}
        setShowStory={setShowStory}
        ref={ref}
        storyMedia={storyMedia}
      />
      <CreatePostModal
        showCreatePost={showCreatePost}
        setShowCreatePost={setShowCreatePost}
        ref={ref}
      />
      {/* main content */}
      <HStack
        space="xl"
        $xl-maxWidth="$5/6"
        w="$full"
        $lg-px="$4"
        $xl-px="$0"
        mx="auto"
      >
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
            <Heading size="2xl">Gluegram</Heading>
          </Box>
          <Sidebar
            // @ts-ignore
            sidebarItems={menuItems}
            onSelected={onSelected}
            isNested
            itemProps={{
              p: '$2.5',
            }}
          />
        </Box>
        <ScrollView
          // @ts-ignore
          h="100vh"
          $base-px="$4"
          $xl-px="$9"
          $md-pt="$4"
        >
          {/* stories */}
          <HStack space="xs" py="$4" mb="$2" overflow="scroll">
            {posts.map((_, index) => (
              <Pressable
                key={index}
                pl="$2"
                onPress={() => {
                  setStoryMedia(_.image);
                  setShowStory(true);
                }}
              >
                <Avatar
                  key={index}
                  size="lg"
                  bgColor="$amber600"
                  borderRadius="$full"
                >
                  <AvatarImage source={_.profileImage} />
                </Avatar>
              </Pressable>
            ))}
          </HStack>
          {/* feed cards */}
          <VStack
            $base-width="$full"
            $md-width="$3/4"
            $lg-width="$full"
            mx="auto"
          >
            {posts.map((post: postType, index: number) => (
              <PostCard key={index} data={post} />
            ))}
          </VStack>
        </ScrollView>
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
              borderRadius: '$full',
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
            <Text mb="$2.5" fontSize="$lg" color="$text900" fontWeight="$bold">
              You might know
            </Text>
            {posts.map((post: postType, index: number) => {
              if (index < 3) {
                return <SuggestionsSection data={post} key={index} />;
              }
            })}
          </Box>
          <GetPremiumCard />
          <FooterFold />
        </Box>
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
      >
        <Pressable>
          <Icon as={Home} w="$6" h="$6" p="$1.5" />
        </Pressable>
        <Pressable>
          <Icon as={SearchIcon} w="$6" h="$6" p="$2" />
        </Pressable>
        <Pressable onPress={() => setShowCreatePost(true)}>
          <Icon as={PlusSquare} w="$6" h="$6" p="$2" />
        </Pressable>
        <Pressable>
          <Icon as={User} w="$6" h="$6" p="$2" />
        </Pressable>
      </HStack>
    </Box>
  );
};

export default Feed;
