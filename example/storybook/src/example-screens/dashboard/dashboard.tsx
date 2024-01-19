import {
  Text,
  Box,
  VStack,
  HStack,
  Divider,
  AvatarImage,
  Avatar,
  AvatarFallbackText,
  Pressable,
  Input,
  InputField,
  Center,
} from '@gluestack-ui-new/themed';
import React from 'react';

interface CommentCardProps {
  avatarSrc: string;
  userName: string;
  comment: string;
}

const comments = [
  {
    userName: 'John Smith',
    comment: 'Loved the animation! Can you link the tutorial? 👀',
    profileImage: '/assets/avatar-icon.png',
  },
  {
    userName: 'Mila Dann',
    comment: 'This looks great! Have been following you from a long time 🤩',
    profileImage: '/assets/avatar-icon.png',
  },
  {
    userName: 'Mila Dann',
    comment: 'Woah! loved the transition 💯',
    profileImage: '/assets/avatar-icon.png',
  },
  {
    userName: 'Ruth Joseph',
    comment: 'Woah! Would love to try this out 🤯',
    profileImage: '/assets/avatar-icon.png',
  },
  {
    userName: 'Mila Dann',
    comment: 'Woah! loved the transition 💯',
    profileImage: '/assets/avatar-icon.png',
  },
  {
    userName: 'Ruth Joseph',
    comment: 'Woah! Would love to try this out 🤯',
    profileImage: '/assets/avatar-icon.png',
  },
];

const CommentCard = ({ avatarSrc, userName, comment }: CommentCardProps) => {
  return (
    <VStack
      justifyContent="flex-start"
      minWidth="$64"
      maxWidth="$72"
      space="sm"
    >
      <HStack space="md">
        <Box borderRadius="$full">
          <Avatar bgColor="$black" size="sm">
            <AvatarFallbackText>{userName}</AvatarFallbackText>
            <AvatarImage source={avatarSrc} />
          </Avatar>
        </Box>
        <VStack>
          <Text fontSize="$sm" fontWeight="$bold" color="$text900">
            {userName}
          </Text>
          <Text fontSize="$sm" fontWeight="$normal" color="$text700">
            Follower
          </Text>
        </VStack>
      </HStack>
      <Text fontSize="$sm" fontWeight="$normal" color="$text700">
        {comment}
      </Text>
    </VStack>
  );
};

const ArrowRightSVG = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 6C2 5.72386 2.22386 5.5 2.5 5.5H9.5C9.77614 5.5 10 5.72386 10 6C10 6.27614 9.77614 6.5 9.5 6.5H2.5C2.22386 6.5 2 6.27614 2 6Z"
        fill="#414040"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.64645 2.14645C5.84171 1.95118 6.15829 1.95118 6.35355 2.14645L9.85355 5.64645C10.0488 5.84171 10.0488 6.15829 9.85355 6.35355L6.35355 9.85355C6.15829 10.0488 5.84171 10.0488 5.64645 9.85355C5.45118 9.65829 5.45118 9.34171 5.64645 9.14645L8.79289 6L5.64645 2.85355C5.45118 2.65829 5.45118 2.34171 5.64645 2.14645Z"
        fill="#414040"
      />
    </svg>
  );
};
const SearchIconSVG = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.1665 6.91699C1.1665 4.0175 3.51701 1.66699 6.4165 1.66699C9.31601 1.66699 11.6665 4.0175 11.6665 6.91699C11.6665 9.8165 9.31601 12.167 6.4165 12.167C3.51701 12.167 1.1665 9.8165 1.1665 6.91699ZM6.4165 2.83366C4.16134 2.83366 2.33317 4.66183 2.33317 6.91699C2.33317 9.17217 4.16134 11.0003 6.4165 11.0003C8.67168 11.0003 10.4998 9.17217 10.4998 6.91699C10.4998 4.66183 8.67168 2.83366 6.4165 2.83366Z"
        fill="#8E8E8E"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.29976 9.80074C9.52757 9.57293 9.89691 9.57293 10.1247 9.80074L12.6622 12.3382C12.89 12.566 12.89 12.9354 12.6622 13.1632C12.4344 13.391 12.0651 13.391 11.8373 13.1632L9.29976 10.6257C9.07195 10.3979 9.07195 10.0285 9.29976 9.80074Z"
        fill="#8E8E8E"
      />
    </svg>
  );
};
const BellIconSVG = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 8.5C18 6.9087 17.3679 5.38258 16.2426 4.25736C15.1174 3.13214 13.5913 2.5 12 2.5C10.4087 2.5 8.88258 3.13214 7.75736 4.25736C6.63214 5.38258 6 6.9087 6 8.5C6 15.5 3 17.5 3 17.5H21C21 17.5 18 15.5 18 8.5Z"
        stroke="#747474"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.73 21.5C13.5542 21.8031 13.3018 22.0547 12.9982 22.2295C12.6946 22.4044 12.3504 22.4965 12 22.4965C11.6496 22.4965 11.3054 22.4044 11.0018 22.2295C10.6982 22.0547 10.4458 21.8031 10.27 21.5"
        stroke="#747474"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const Dashboard: any = ({
  // bg = 'red500',
  w = '100%',
  h = '100%',
  ...props
}: any) => {
  return (
    <Box
      {...props}
      h={h}
      w={w}
      justifyContent="center"
      alignItems="center"
      borderWidth="$1"
      borderColor="$border200"
      borderRadius="$lg"
      px="$2"
    >
      <Box
        display="flex"
        h="$full"
        w="$full"
        $base-flexDirection="column"
        $lg-flexDirection="row"
      >
        <Box
          $xl-width="$4/6"
          $lg-width="$3/5"
          $base-width="$full"
          borderLeftWidth="$0"
          borderRightWidth="$1"
          borderColor="$border200"
          p="$2"
        >
          <Box width="$full">
            <HStack p="$4" justifyContent="space-between" alignItems="center">
              <VStack space="xs">
                <Text
                  $md-fontSize="$3xl"
                  $base-fontSize="$lg"
                  color="$text900"
                  fontWeight="$bold"
                >
                  Good morning, John
                </Text>
                <Text
                  $md-fontSize="$sm"
                  $base-fontSize="$xs"
                  color="$text700"
                  fontWeight="$normal"
                >
                  Let’s take a look at your social presence
                </Text>
              </VStack>
              <HStack
                h="$10"
                alignItems="center"
                space="sm"
                width="$1/3"
                justifyContent="flex-end"
              >
                <HStack
                  $md-borderWidth="$1"
                  borderColor="$border300"
                  borderRadius="$lg"
                  alignItems="center"
                  space="sm"
                  $base-px="$0"
                  $md-px="$4"
                  $md-flex={0.95}
                  $base-flex={0.5}
                  $base-borderWidth="$0"
                >
                  <SearchIconSVG />
                  {/* !bug need to use boxShadow : none for web input to remove the outline around input  */}
                  <Input
                    borderWidth="$0"
                    sx={{
                      _web: {
                        boxShadow: 'none',
                      },
                    }}
                    w="$full"
                    $base-display="none"
                    $md-display="flex"
                  >
                    <InputField
                      placeholder="Search.."
                      fontSize="$sm"
                      color="$text400"
                    />
                  </Input>
                </HStack>
                <Center bg="$background100" borderRadius="$lg">
                  <Box p="$2">
                    <BellIconSVG />
                  </Box>
                </Center>
              </HStack>
            </HStack>
          </Box>
        </Box>
        <Box $xl-width="$2/6" $lg-width="$2/5" $base-width="$full" p="$2">
          <VStack space="2xl" alignItems="center">
            <VStack
              bg="$background50"
              alignItems="center"
              minWidth="$72"
              maxWidth="$80"
              space="md"
              p="$3"
              borderRadius="$xl"
            >
              <Box borderRadius="$full">
                <Avatar bgColor="$black" size="lg">
                  <AvatarFallbackText>John Smith</AvatarFallbackText>
                  <AvatarImage source={'/assets/avatar-icon.png'} />
                </Avatar>
              </Box>
              <VStack alignItems="center" space="xs" width="$full">
                <Text
                  fontFamily="$heading"
                  fontSize="$lg"
                  color="$text900"
                  fontWeight="$bold"
                >
                  John Smith
                </Text>
                <Text
                  fontFamily="$body"
                  fontSize="$sm"
                  color="$text700"
                  fontWeight="$normal"
                >
                  john@example.com
                </Text>
              </VStack>
              <Text
                fontFamily="$body"
                fontSize="$sm"
                color="$text700"
                fontWeight="$normal"
                textAlign="center"
                width="$full"
              >
                Pushing the boundaries of reality with XR design wizardry ✨🚀
                #XRDesigner
              </Text>
              <HStack
                space="md"
                alignItems="center"
                my="$2"
                width="$full"
                justifyContent="center"
              >
                <VStack alignItems="center" space="sm">
                  <Text
                    fontFamily="$heading"
                    fontSize="$sm"
                    color="$text900"
                    fontWeight="$bold"
                  >
                    232
                  </Text>
                  <Text
                    fontFamily="$body"
                    fontSize="$sm"
                    color="$text900"
                    fontWeight="$normal"
                  >
                    posts
                  </Text>
                </VStack>
                <Divider
                  mx="$2.5"
                  h="$10"
                  bg="$background400"
                  w="$0.5"
                  orientation="vertical"
                />
                <VStack alignItems="center" space="sm">
                  <Text
                    fontFamily="$heading"
                    fontSize="$sm"
                    color="$text900"
                    fontWeight="$bold"
                  >
                    108.3k
                  </Text>
                  <Text
                    fontFamily="$body"
                    fontSize="$sm"
                    color="$text900"
                    fontWeight="$normal"
                  >
                    followers
                  </Text>
                </VStack>
                <Divider
                  mx="$2.5"
                  h="$10"
                  bg="$background400"
                  w="$0.5"
                  orientation="vertical"
                />
                <VStack alignItems="center" space="sm">
                  <Text
                    fontFamily="$heading"
                    fontSize="$sm"
                    color="$text900"
                    fontWeight="$bold"
                  >
                    40
                  </Text>
                  <Text
                    fontFamily="$body"
                    fontSize="$sm"
                    color="$text900"
                    fontWeight="$normal"
                  >
                    following
                  </Text>
                </VStack>
              </HStack>
            </VStack>
            <Box p="$3">
              <VStack
                justifyContent="center"
                maxHeight="$96"
                minWidth="$72"
                maxWidth="$96"
                overflow="scroll"
              >
                {/* ! bug : when added overflow to scroll first element of list is omitted because of space issue, cause used box with min height  */}
                <Box minHeight="$48"></Box>
                {comments.map((comment) => (
                  <VStack justifyContent="center">
                    <CommentCard
                      avatarSrc={comment.profileImage}
                      comment={comment.comment}
                      userName={comment.userName}
                      key={comment.userName}
                    />
                    <Divider
                      orientation="horizontal"
                      my="$2"
                      bg="$background200"
                      h="$0.5"
                      w="$72"
                    />
                  </VStack>
                ))}
              </VStack>
            </Box>
            <HStack justifyContent="flex-end" w="$80" mt="$16" mb="$10">
              <Pressable>
                <HStack justifyContent="flex-end" space="sm">
                  <Text
                    fontWeight="$semibold"
                    fontSize="$xs"
                    color="$secondary600"
                  >
                    See All Activity
                  </Text>
                  <ArrowRightSVG />
                </HStack>
              </Pressable>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

export { Text, Box };
