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
} from '@gluestack-ui-new/themed';
import UserCard from '../components/UserCard';
import UserCardAvatar from '../components/UserCardAvatar';
import UserCardStack from '../components/UserCardStack';
import Sidebar from '../components/Sidebar';
import CustomInput from '../components/CustomInput';
import { menuItems } from './constants';
import {
  Bookmark,
  Heart,
  Send,
  MessageCircle,
  Smile,
} from 'lucide-react-native';
import Card from '../components/Card';

const PostCard = () => {
  return (
    <Box mb="$4" pb="$5" borderBottomWidth="$1" borderColor="$border200">
      <UserCard space="md" alignItems="center" pb="$3">
        <UserCardAvatar
          name="John Smith"
          src={require('../assets/avatar-icon.png')}
          size="sm"
        />
        <UserCardStack>
          <Text fontWeight="$bold" color="$text900">
            John Smith
          </Text>
          <Text fontSize="$sm" color="$text700">
            Motivational Speaker
          </Text>
        </UserCardStack>
      </UserCard>
      <Image source={require('../assets/music6.png')} w="auto" h="$96" />
      <VStack w="$full" space="sm">
        <HStack justifyContent="space-between">
          <HStack>
            <Pressable>
              <Icon as={Heart} w="$6" h="$6" p="$2" />
            </Pressable>
            <Pressable>
              <Icon as={MessageCircle} w="$6" h="$6" p="$2" />
            </Pressable>
            <Pressable>
              <Icon as={Send} w="$6" h="$6" p="$2" />
            </Pressable>
          </HStack>
          <Pressable>
            <Icon as={Bookmark} w="$6" h="$6" p="$2" />
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
            Liked by reactNative and others
          </Text>
        </HStack>
        <HStack alignItems="center" space="xs">
          <Text fontSize="$sm" fontWeight="$semibold" color="$text900">
            John Smith
          </Text>
          <Text fontSize="$sm" color="$text900">
            caption is here!!
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

const SuggestionsSection = () => {
  return (
    <UserCard
      space="md"
      alignItems="center"
      py="$2"
      sx={{
        ':hover': {
          bg: '$background100',
        },
      }}
    >
      <UserCardAvatar
        name="John Smith"
        src={require('../assets/avatar-icon.png')}
        h="$9"
        w="$9"
      />
      <UserCardStack>
        <Text fontSize="$sm" fontWeight="$bold" color="$text900">
          John Smith
        </Text>
        <Text fontSize="$xs" color="$text700">
          Motivational Speaker
        </Text>
      </UserCardStack>
      <Pressable>
        <Text color="$darkBlue500">Follow</Text>
      </Pressable>
    </UserCard>
  );
};

const GetPremiumCard = () => {
  return (
    <Card mt="$4" hardShadow="0" space="md">
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

const Feed = () => {
  const [view, setView] = React.useState<any>('profile');
  const onSelected = (item: typeof view) => {
    setView(item.key);
  };
  return (
    <Box w="$full" bg="$background0">
      <HStack w="$full" space="xl" maxWidth="$5/6" mx="auto">
        <Box
          w="$1/6"
          pt="$4"
          sx={{
            _web: {
              position: 'sticky',
            },
          }}
        >
          <Sidebar sidebarItems={menuItems} onSelected={onSelected} />
        </Box>
        <ScrollView
          // @ts-ignore
          h="100vh"
          w="$3/6"
          borderRightWidth="$1"
          borderLeftWidth="$1"
          borderColor="$border200"
          sx={{
            _web: {
              '::-webkit-scrollbar': {
                display: 'none',
              },
            },
          }}
        >
          {/* stories */}
          <HStack space="sm" py="$4" mb="$6" overflow="scroll">
            {[...Array(20)].map((_, index) => (
              <Box pl="$2">
                <Avatar
                  key={index}
                  bgColor="$amber600"
                  size="lg"
                  borderRadius="$full"
                >
                  <AvatarImage source={require('../assets/music6.png')} />
                </Avatar>
              </Box>
            ))}
          </HStack>
          {/* feed cards */}
          <VStack px="$9">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </VStack>
        </ScrollView>
        <Box w="$2/6">
          <CustomInput
            inputProps={{
              borderRadius: '$full',
              hardhadow: '0',
              m: '$4',
            }}
            icon={<Icon m="$2.5" as={SearchIcon} />}
          >
            <InputField
              type="text"
              placeholder="Search"
              sx={{
                _web: {
                  ':focus': {
                    borderWidth: '$0',
                  },
                },
              }}
            />
          </CustomInput>
          <Box $base-p="$4" $xs-p="$6">
            <Text mb="$2.5" color="$text900" fontWeight="$semibold">
              You might know
            </Text>
            <SuggestionsSection />
            <SuggestionsSection />
            <SuggestionsSection />
          </Box>
          <GetPremiumCard />
        </Box>
      </HStack>
    </Box>
  );
};

export default Feed;
