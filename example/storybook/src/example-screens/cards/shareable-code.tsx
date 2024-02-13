import React from 'react';
import {
  Text,
  Box,
  VStack,
  Divider,
  HStack,
  Button,
  ButtonText,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Progress,
  ProgressFilledTrack,
  BadgeText,
  Badge,
  Icon,
  CloseIcon,
  Switch,
  ButtonIcon,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckIcon,
  Pressable,
  Heading,
  Tooltip,
  TooltipContent,
  TooltipText,
  createIcon,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@gluestack-ui-new/themed';
import { UploadCloud, Mail, Type, XCircle } from 'lucide-react-native';
import { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

export const settingOptions = [
  {
    title: 'Email',
    description: 'Receive email updates on comments you followed',
    Icon: Mail,
    isCheck: true,
  },
  {
    title: 'Text Messages',
    description: 'Receive updates by SMS',
    Icon: Type,
    isCheck: true,
  },
  {
    title: 'Automatically Delete items',
    description: 'Delete activities older than 3 months ',
    Icon: XCircle,
    isCheck: false,
  },
];

export const GoogleIcon = createIcon({
  viewBox: '0 0 16 16',
  path: (
    <>
      <G id="Group">
        <G id="Group_2">
          <Path
            id="Vector"
            d="M15.6875 6.53112H15.0834V6.5H8.33337V9.5H12.572C11.9536 11.2464 10.292 12.5 8.33337 12.5C5.84825 12.5 3.83337 10.4851 3.83337 8C3.83337 5.51487 5.84825 3.5 8.33337 3.5C9.4805 3.5 10.5241 3.93275 11.3187 4.63962L13.4401 2.51825C12.1006 1.26987 10.3089 0.5 8.33337 0.5C4.1915 0.5 0.833374 3.85812 0.833374 8C0.833374 12.1419 4.1915 15.5 8.33337 15.5C12.4752 15.5 15.8334 12.1419 15.8334 8C15.8334 7.49712 15.7816 7.00625 15.6875 6.53112Z"
            fill="currentColor"
          />
          <Path
            id="Vector_2"
            d="M1.69812 4.50912L4.16225 6.31625C4.829 4.6655 6.44375 3.5 8.33337 3.5C9.4805 3.5 10.5241 3.93275 11.3187 4.63962L13.4401 2.51825C12.1006 1.26987 10.3089 0.5 8.33337 0.5C5.45262 0.5 2.95437 2.12637 1.69812 4.50912Z"
            fill="currentColor"
          />
          <Path
            id="Vector_3"
            d="M8.33349 15.4993C10.2707 15.4993 12.031 14.7579 13.3619 13.5523L11.0406 11.588C10.2876 12.1584 9.35162 12.4993 8.33349 12.4993C6.38274 12.4993 4.72637 11.2554 4.10237 9.51953L1.65662 11.4039C2.89787 13.8328 5.41862 15.4993 8.33349 15.4993Z"
            fill="currentColor"
          />
          <Path
            id="Vector_4"
            d="M15.6875 6.53113H15.0834V6.5H8.33337V9.5H12.572C12.275 10.3389 11.7354 11.0622 11.0394 11.5891L11.0405 11.5884L13.3617 13.5526C13.1975 13.7019 15.8334 11.75 15.8334 8C15.8334 7.49713 15.7816 7.00625 15.6875 6.53113Z"
            fill="currentColor"
          />
        </G>
      </G>
    </>
  ),
});

export const Twittericon = createIcon({
  viewBox: '0 0 18 18',
  path: (
    <>
      <G id="Twitter - Original">
        <Path
          id="Vector"
          d="M5.66064 16.313C12.4531 16.313 16.1683 10.6855 16.1683 5.80533C16.1683 5.64549 16.1683 5.48637 16.1575 5.32797C16.8803 4.80519 17.5042 4.15788 18 3.41637C17.326 3.71517 16.611 3.91104 15.8789 3.99741C16.6499 3.53593 17.2269 2.81 17.5025 1.95477C16.7776 2.38498 15.9845 2.68814 15.1574 2.85117C14.6006 2.2591 13.8642 1.86705 13.0621 1.73568C12.2601 1.60431 11.4371 1.74095 10.7205 2.12446C10.0039 2.50796 9.43367 3.11695 9.09806 3.85718C8.76245 4.59741 8.68016 5.42762 8.86392 6.21933C7.39567 6.14568 5.95932 5.7641 4.64809 5.09937C3.33686 4.43464 2.18007 3.50161 1.2528 2.36085C0.780546 3.17385 0.635904 4.13627 0.848325 5.05217C1.06075 5.96806 1.61426 6.76856 2.39616 7.29069C1.80842 7.27347 1.23349 7.11491 0.72 6.82845V6.87525C0.720233 7.72789 1.01539 8.5542 1.5554 9.21402C2.09542 9.87385 2.84705 10.3266 3.6828 10.4954C3.13911 10.6437 2.56866 10.6654 2.01528 10.5588C2.25136 11.2925 2.71082 11.9341 3.32943 12.394C3.94804 12.8538 4.69487 13.1088 5.46552 13.1234C4.69983 13.7253 3.82299 14.1703 2.88516 14.4329C1.94733 14.6956 0.966911 14.7707 0 14.6541C1.68887 15.7379 3.65394 16.3128 5.66064 16.3101"
          fill="currentColor"
        />
      </G>
    </>
  ),
});

export const GithubIcon = createIcon({
  viewBox: '0 0 20 20',
  path: (
    <>
      <G clip-path="url(#clip0_2317_572)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.66698 0.375C7.5304 0.376109 5.46388 1.13284 3.83693 2.50989C2.20998 3.88694 1.12871 5.79451 0.786437 7.8915C0.444168 9.98849 0.863224 12.1382 1.96868 13.9561C3.07414 15.7741 4.79391 17.1418 6.82048 17.8147C7.26757 17.8977 7.43598 17.6206 7.43598 17.385C7.43598 17.1494 7.42703 16.4663 7.42405 15.7194C4.92032 16.2603 4.39127 14.6629 4.39127 14.6629C3.98292 13.6256 3.39276 13.3529 3.39276 13.3529C2.57606 12.7987 3.45386 12.8091 3.45386 12.8091C4.35848 12.8728 4.8339 13.7323 4.8339 13.7323C5.63568 15.1 6.9397 14.7044 7.45237 14.4732C7.53284 13.8938 7.76683 13.4996 8.02465 13.2759C6.02465 13.0506 3.92331 12.283 3.92331 8.85407C3.91091 7.96478 4.2428 7.10479 4.85029 6.45201C4.75789 6.22677 4.44939 5.31692 4.93821 4.08107C4.93821 4.08107 5.69381 3.84102 7.41363 4.99833C8.88878 4.59722 10.4452 4.59722 11.9203 4.99833C13.6387 3.84102 14.3928 4.08107 14.3928 4.08107C14.8831 5.31396 14.5746 6.22381 14.4822 6.45201C15.0916 7.10489 15.4242 7.96639 15.4106 8.85703C15.4106 12.2934 13.3048 13.0506 11.3018 13.2714C11.6238 13.55 11.9114 14.0938 11.9114 14.9296C11.9114 16.1269 11.901 17.0901 11.901 17.385C11.901 17.6236 12.0634 17.9022 12.5194 17.8147C14.5462 17.1417 16.2662 15.7738 17.3716 13.9555C18.4771 12.1372 18.8959 9.98722 18.5532 7.89004C18.2106 5.79285 17.1288 3.88527 15.5013 2.50845C13.8738 1.13164 11.8068 0.375406 9.66995 0.375H9.66698Z"
          fill="currentColor"
        />
        <Path
          d="M4.07504 13.224C4.05567 13.2685 3.98414 13.2818 3.92601 13.2507C3.86789 13.2196 3.82468 13.1618 3.84554 13.1158C3.8664 13.0699 3.93645 13.058 3.99457 13.0892C4.05269 13.1203 4.0974 13.1795 4.07504 13.224Z"
          fill="currentColor"
        />
        <Path
          d="M4.44017 13.6285C4.40931 13.644 4.374 13.6483 4.34028 13.6407C4.30657 13.6332 4.27656 13.6142 4.25537 13.587C4.19725 13.5248 4.18532 13.4389 4.23003 13.4003C4.27474 13.3618 4.35522 13.3796 4.41335 13.4418C4.47147 13.5041 4.48488 13.59 4.44017 13.6285Z"
          fill="currentColor"
        />
        <Path
          d="M4.7949 14.1427C4.73976 14.1813 4.64586 14.1427 4.5937 14.0657C4.57928 14.0519 4.56781 14.0353 4.55998 14.017C4.55214 13.9986 4.5481 13.9789 4.5481 13.959C4.5481 13.9391 4.55214 13.9194 4.55998 13.901C4.56781 13.8827 4.57928 13.8661 4.5937 13.8523C4.64885 13.8153 4.74274 13.8523 4.7949 13.9279C4.84706 14.0034 4.84855 14.1042 4.7949 14.1427Z"
          fill="currentColor"
        />
        <Path
          d="M5.27633 14.6406C5.22715 14.6954 5.12731 14.6806 5.04534 14.6065C4.96337 14.5324 4.94399 14.4317 4.99317 14.3783C5.04235 14.325 5.1422 14.3398 5.22715 14.4124C5.3121 14.485 5.3285 14.5873 5.27633 14.6406Z"
          fill="currentColor"
        />
        <Path
          d="M5.95138 14.9311C5.92902 15.0007 5.82768 15.0318 5.72634 15.0022C5.625 14.9726 5.55793 14.8896 5.57731 14.8185C5.59668 14.7473 5.69952 14.7147 5.80235 14.7473C5.90518 14.7799 5.97075 14.8585 5.95138 14.9311Z"
          fill="currentColor"
        />
        <Path
          d="M6.68762 14.9814C6.68762 15.0541 6.60417 15.1163 6.49687 15.1178C6.38956 15.1193 6.30164 15.06 6.30164 14.9874C6.30164 14.9148 6.38509 14.8525 6.49239 14.851C6.59969 14.8496 6.68762 14.9074 6.68762 14.9814Z"
          fill="currentColor"
        />
        <Path
          d="M7.37317 14.8673C7.38658 14.94 7.31207 15.0155 7.20476 15.0333C7.09746 15.0511 7.00357 15.0081 6.99016 14.937C6.97675 14.8659 7.05424 14.7888 7.15856 14.7695C7.26289 14.7503 7.35976 14.7947 7.37317 14.8673Z"
          fill="currentColor"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2317_572">
          <Rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0.666748)"
          />
        </ClipPath>
      </Defs>
    </>
  ),
});

export const FileIcon = createIcon({
  viewBox: '0 0 24 24',
  path: (
    <>
      <Path
        d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2ZM11.333 17.772C10.8975 17.9161 10.4426 17.993 9.984 18C9.247 18 8.713 17.814 8.34 17.454C7.969 17.106 7.765 16.579 7.771 15.985C7.777 14.641 8.754 13.874 10.08 13.874C10.601 13.874 11.004 13.977 11.201 14.072L11.01 14.803C10.788 14.707 10.512 14.629 10.069 14.629C9.307 14.629 8.731 15.061 8.731 15.937C8.731 16.77 9.253 17.262 10.002 17.262C10.212 17.262 10.38 17.238 10.452 17.201V16.355H9.828V15.642H11.333V17.772ZM12.967 17.958H12.049V13.916H12.967V17.958ZM16.229 14.666H14.676V15.589H16.127V16.333H14.676V17.958H13.758V13.916H16.229V14.666ZM14 9H13V4L18 9H14Z"
        fill="currentColor"
      />
    </>
  ),
});

const Card = ({ children, ...props }: any) => {
  return (
    <VStack
      $base-p="$5"
      $xs-p="$6"
      borderRadius="$xl"
      borderWidth="$1"
      borderColor="$border200"
      hardShadow="5"
      {...props}
    >
      {children}
    </VStack>
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

const StatsDivider = ({ ...props }: any) => {
  return (
    <Divider
      w="$px"
      mx="$2.5"
      bg="$trueGray300"
      orientation="vertical"
      {...props}
    />
  );
};

const StatsItems = ({ children, ...props }: any) => {
  return (
    <VStack flex={1} alignItems="center" space="xs" {...props}>
      {children}
    </VStack>
  );
};

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
      <AvatarFallbackText>{name.charAt(0)}</AvatarFallbackText>
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

const BlogCard = () => {
  return (
    <Card>
      <Box w="auto" h="$64" backgroundColor="$background50"></Box>
      <VStack mt="$4" width="$full">
        <Heading size="xs" fontWeight="$normal" color="$text700">
          May 15, 2023
        </Heading>
        <Heading size="sm" mt="$2" fontWeight="$bold" color="$text900">
          The Power of Positive Thinking
        </Heading>
        <Text mt="$2.5" fontSize="$sm" color="$text700" lineHeight="$md">
          Discover how the power of positive thinking can transform your life,
          boost your confidence, and help you overcome challenges. Explore
          practical tips and techniques to cultivate a positive mindset for
          greater happiness and success.
        </Text>
        <UserCard mt="$6" space="md" alignItems="center">
          <UserCardAvatar
            name="John Smith"
            src={require('../assets/avatar-icon.png')}
            size="md"
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
      </VStack>
    </Card>
  );
};

const ProfileCard = () => {
  return (
    <Card flex={1} alignItems="center" $xl-width="$full" maxHeight="$80">
      <UserCard direction="column">
        <UserCardAvatar
          name="John Smith"
          src={require('../assets/avatar-icon.png')}
          size="lg"
        />
        <UserCardStack mt="$3" alignItems="center">
          <Text fontSize="$lg" color="$text900" fontWeight="$bold">
            John Smith
          </Text>
          <Text mt="$0.5" fontSize="$sm" color="$text700" fontWeight="$normal">
            john@example.com
          </Text>
        </UserCardStack>
      </UserCard>
      <Text
        fontSize="$sm"
        mt="$4"
        color="$text700"
        textAlign="center"
        lineHeight="$sm"
        $base-maxWidth="$5/6"
      >
        Pushing the boundaries of reality with XR design wizardry ✨🚀
        #XRDesigner
      </Text>
      <Stats mt="$7">
        <StatsItems>
          <Text fontSize="$sm" color="$text900" fontWeight="$bold">
            32
          </Text>
          <Text
            fontFamily="$body"
            fontSize="$xs"
            color="$text900"
            fontWeight="$normal"
          >
            posts
          </Text>
        </StatsItems>
        <StatsDivider h="$10" />
        <StatsItems>
          <Text fontSize="$sm" color="$text900" fontWeight="$bold">
            8,396
          </Text>
          <Text fontSize="$xs" color="$text900" fontWeight="$normal">
            followers
          </Text>
        </StatsItems>
        <StatsDivider h="$10" />
        <StatsItems>
          <Text fontSize="$sm" color="$text900" fontWeight="$bold">
            720
          </Text>
          <Text fontSize="$xs" color="$text900" fontWeight="$normal">
            following
          </Text>
        </StatsItems>
      </Stats>
    </Card>
  );
};

const FormInputcard = () => {
  return (
    <Card space="2xl">
      <VStack>
        <Heading size="md" fontWeight="bold" lineHeight="$md" color="$text900">
          Share gluestack UI with friends
        </Heading>
        <Heading
          mt="$2.5"
          size="xs"
          fontWeight="$normal"
          lineHeight="$sm"
          color="$text700"
        >
          Email friends who have never tried glueStack UI
        </Heading>
      </VStack>
      <HStack justifyContent="space-between" space="sm">
        <FormControl size="md" flex={1}>
          <FormControlLabel mb="$2">
            <FormControlLabelText fontSize="$sm">
              Send an invite
            </FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField type="text" placeholder="abc@example.com" />
          </Input>
        </FormControl>
        <Button size="md" alignSelf="flex-end">
          <ButtonText>Send</ButtonText>
        </Button>
      </HStack>
    </Card>
  );
};

const SettingsCard = () => {
  return (
    <Card>
      <Heading size="md" fontWeight="$bold" color="$text900">
        Notification Settings
      </Heading>
      <Heading mt="$1.5" size="xs" fontWeight="$normal" color="$text700">
        Receive notifications about Gluestack UI updates.
      </Heading>
      <VStack mt="$6" space="xl">
        {settingOptions.map((option: any, index: number) => (
          <HStack space="xl" key={index}>
            <Box
              padding="$3"
              borderRadius="$xl"
              backgroundColor="$background50"
              alignSelf="center"
            >
              {option.Icon && <Icon as={option.Icon} size="xl" />}
            </Box>
            <HStack
              flex={1}
              justifyContent="space-between"
              borderColor="$border200"
              borderBottomWidth={
                settingOptions.length - 1 === index ? '$0' : '$1'
              }
              mb="$0.5"
              pb="$2"
            >
              <VStack maxWidth="$5/6">
                <Text
                  fontSize="$sm"
                  fontWeight="$bold"
                  lineHeight="$md"
                  color="$text900"
                >
                  {option.title}
                </Text>
                <Text
                  fontSize="$sm"
                  fontWeight="$light"
                  color="$text700"
                  pb="$1.5"
                >
                  {option.description}
                </Text>
              </VStack>
              <Tooltip
                placement="bottom"
                trigger={(triggerProps) => {
                  return (
                    <Switch
                      {...triggerProps}
                      alignSelf="center"
                      defaultValue={option.isCheck}
                    />
                  );
                }}
              >
                <TooltipContent>
                  <TooltipText textAlign="center" fontSize="$xs" maxWidth="$48">
                    Click to switch your notification preferences.
                  </TooltipText>
                </TooltipContent>
              </Tooltip>
            </HStack>
          </HStack>
        ))}
      </VStack>
    </Card>
  );
};

const FileUploadCard = () => {
  return (
    <Card>
      <VStack>
        <Heading size="md" fontWeight="$bold" color="$text900">
          Upload Your Files
        </Heading>
        <Heading mt="$1.5" size="xs" fontWeight="$normal" color="$text700">
          JPG, PNG, PDF, MP4, GIFs supported
        </Heading>
      </VStack>
      <VStack
        $base-mt="$5"
        $md-mt="$12"
        $lg-mt="$5"
        py="$6"
        alignItems="center"
        borderRadius="$xl"
        borderStyle="dashed"
        borderWidth="$1"
        borderColor="$border300"
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
      <VStack $base-mt="$6" $md-mt="$8" $lg-mt="$6" $md-mb="$8" $lg-mb="$0">
        <Heading size="xs" fontWeight="$bold" color="$text900">
          Uploading 1 file
        </Heading>
        <HStack mt="$3.5" justifyContent="space-between" alignItems="center">
          <Box $base-padding="$1" $xs-padding="$3">
            <Icon as={FileIcon} size="xl" />
          </Box>
          <VStack w="$4/5">
            <HStack justifyContent="space-between">
              <HStack>
                <Text $base-fontSize="$xs" $xs-fontSize="$sm" color="$text900">
                  Document_1.gif
                </Text>
                <Text $base-fontSize="$xs" $xs-fontSize="$sm" color="$text500">
                  {''} (200mb)
                </Text>
              </HStack>
              <Text alignSelf="center" fontSize="$xs" color="$text500">
                25s left
              </Text>
            </HStack>
            <Progress value={55} h="$1" mt="$1">
              <ProgressFilledTrack h="$1" />
            </Progress>
          </VStack>
          <Tooltip
            placement="bottom"
            trigger={(triggerProps) => {
              return (
                <Pressable {...triggerProps} ml="$1">
                  <Icon as={CloseIcon} w="$5" h="$5" color="$background600" />
                </Pressable>
              );
            }}
          >
            <TooltipContent>
              <TooltipText textAlign="center" fontSize="$xs" maxWidth="$48">
                Click to cancel upload
              </TooltipText>
            </TooltipContent>
          </Tooltip>
        </HStack>
      </VStack>
    </Card>
  );
};

const LoginCard = () => {
  return (
    <Card space="4xl" $md-width="$1/2" $xl-width="$full">
      <VStack space="xs">
        <Heading
          size="xl"
          fontWeight="$bold"
          color="$text900"
          fontFamily="$heading"
        >
          Login to your account
        </Heading>
        <HStack alignItems="center">
          <Heading
            size="xs"
            fontWeight="$light"
            lineHeight="$md"
            color="$text700"
          >
            Don’t have an account?
          </Heading>
          <Pressable>
            <Heading size="xs" color="$text700" fontWeight="$medium" ml="$1.5">
              {''}Sign up
            </Heading>
          </Pressable>
        </HStack>
      </VStack>
      <VStack space="xl">
        <FormControl size="sm">
          <FormControlLabel mb="$2">
            <FormControlLabelText fontSize="$sm">Email</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField type="text" placeholder="abc@example.com" />
          </Input>
        </FormControl>
        <FormControl size="sm">
          <FormControlLabel mb="$2">
            <FormControlLabelText fontSize="$sm">Password</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField type="password" placeholder="Enter password" />
          </Input>
        </FormControl>
        <HStack justifyContent="space-between" alignItems="center">
          <Checkbox value="" size="sm">
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Remember me</CheckboxLabel>
          </Checkbox>
          <Tooltip
            placement="bottom"
            trigger={(triggerProps) => {
              return (
                <Pressable {...triggerProps}>
                  <Text fontSize="$xs" fontWeight="$medium" color="$text700">
                    Forgot Password?
                  </Text>
                </Pressable>
              );
            }}
          >
            <TooltipContent>
              <TooltipText textAlign="center" fontSize="$xs" maxWidth="$48">
                Trouble logging in? Use this link to reset your password.
              </TooltipText>
            </TooltipContent>
          </Tooltip>
        </HStack>
      </VStack>
      <HStack
        alignItems="center"
        justifyContent="center"
        alignSelf="stretch"
        space="sm"
      >
        <Divider
          h="$px"
          flex={1}
          bg="$border200"
          orientation="horizontal"
        ></Divider>
        <Text fontSize="$xs" fontWeight="$light" color="$text600">
          OR CONTINUE WITH
        </Text>
        <Divider
          h="$px"
          flex={1}
          bg="$border200"
          orientation="horizontal"
        ></Divider>
      </HStack>
      <Button size="sm" borderRadius="$md">
        <ButtonText>Login</ButtonText>
      </Button>
      <HStack space="md">
        <Button flex={1} size="md" variant="outline">
          <ButtonIcon>
            <Icon as={GoogleIcon} />
          </ButtonIcon>
        </Button>
        <Button flex={1} size="md" variant="outline">
          <ButtonIcon>
            <Icon as={Twittericon} />
          </ButtonIcon>
        </Button>
        <Button flex={1} size="md" variant="outline">
          <ButtonIcon>
            <Icon as={GithubIcon} />
          </ButtonIcon>
        </Button>
      </HStack>
    </Card>
  );
};

const Cards: any = ({ w = '100%', h = '100%', ...props }: any) => {
  return (
    <Box {...props} bg="$background0" p="$1" h={h} w={w}>
      <VStack
        flex={1}
        $xl-flexDirection="row"
        space="2xl"
        maxWidth={1440}
        mx="auto"
      >
        <VStack $base-width="$full" $xl-width="$2/3" space="2xl">
          <VStack $sm-flexDirection="row" space="2xl">
            <VStack $base-width="$full" $md-width="$2/5" space="2xl">
              <BlogCard />
              <FormInputcard />
            </VStack>
            <VStack flex={1} $base-width="$full" $md-width="$3/5" space="2xl">
              <SettingsCard />
              <FileUploadCard />
            </VStack>
          </VStack>
          <Card
            w="$full"
            justifyContent="space-between"
            alignItems="center"
            $base-flexDirection="column"
            $sm-flexDirection="row"
          >
            <Box>
              <Heading size="md" color="$text900" fontWeight="$bold">
                Updates Available
              </Heading>
              <Heading
                size="xs"
                mt="$1.5"
                color="$text700"
                fontWeight="$normal"
              >
                A new version is available. Please upgrade for the best
                experience.
              </Heading>
            </Box>
            <HStack
              space="md"
              $base-width="$full"
              $base-mt="$3"
              $md-mt="$0"
              ml="$3"
              $sm-width="auto"
              justifyContent="flex-end"
            >
              <Button
                size="sm"
                variant="outline"
                action="secondary"
                borderRadius="$md"
              >
                <ButtonText>Skip</ButtonText>
              </Button>
              <Button size="sm" borderRadius="$md">
                <ButtonText>Download</ButtonText>
              </Button>
            </HStack>
          </Card>
        </VStack>
        <VStack
          flex={1}
          $base-width="$full"
          $md-flexDirection="row"
          $xl-flexDirection="column"
          space="2xl"
        >
          <LoginCard />
          <ProfileCard />
        </VStack>
      </VStack>
    </Box>
  );
};

export default Cards;

export { Text, Box };
