import React from 'react';
import {
  Text,
  Box,
  VStack,
  Divider,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
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
} from '@gluestack-ui-new/themed';
import {
  FileIcon,
  CloudIcon,
  GoogleIcon,
  Twittericon,
  GithubIcon,
} from './Icons';
import { settingOptions } from './constants';

const BlogCard = () => {
  return (
    <Box
      padding="$5"
      borderRadius="$xl"
      borderColor="$border200"
      borderWidth="$1"
      width="$full"
      hardShadow="5"
    >
      <Box w="auto" h={256} backgroundColor="$background100"></Box>
      <VStack mt="$4" width="$full">
        <Text fontSize="$sm" color="$text700">
          May 15, 2023
        </Text>
        <Text mt="$2" fontWeight="$bold" color="$text900">
          The Power of Positive Thinking
        </Text>
        <Text mt="$2.5" fontSize="$sm" color="$text700" lineHeight="$md">
          Discover how the power of positive thinking can transform your life,
          boost your confidence, and help you overcome challenges. Explore
          practical tips and techniques to cultivate a positive mindset for
          greater happiness and success.
        </Text>
        <HStack mt="$6" space="lg" alignItems="center">
          <Avatar size="md">
            <AvatarFallbackText>John Smith</AvatarFallbackText>
            <AvatarImage source={require('./avatar-image.png')} />
          </Avatar>
          <VStack>
            <Text fontWeight="$bold" color="$text900">
              John Smith
            </Text>
            <Text fontSize="$sm" color="$text700">
              Motivational Speaker
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

const ProfileCard = () => {
  return (
    <VStack
      flex={1}
      p="$6"
      alignItems="center"
      borderRadius="$xl"
      borderWidth="$1"
      borderColor="$border200"
      hardShadow="5"
      $md-width="$3/5"
      $lg-width="$full"
      $xl-width={360}
      maxHeight={320}
    >
      <Avatar bgColor="$black" size="lg">
        <AvatarFallbackText>John Smith</AvatarFallbackText>
        <AvatarImage source={require('./avatar-image.png')} />
      </Avatar>
      <VStack alignItems="center" mt="$3" width="$full">
        <Text fontSize="$lg" color="$text900" fontWeight="$bold">
          John Smith
        </Text>
        <Text mt="$0.5" fontSize="$sm" color="$text700" fontWeight="$normal">
          john@example.com
        </Text>
      </VStack>
      <Text
        fontSize="$sm"
        mt="$4"
        color="$text700"
        textAlign="center"
        lineHeight="$sm"
      >
        Pushing the boundaries of reality with XR design wizardry ✨🚀
        #XRDesigner
      </Text>
      <HStack
        mt="$7"
        space="md"
        alignItems="center"
        width="$full"
        justifyContent="center"
      >
        <VStack alignItems="center" space="xs">
          <Text fontSize="$sm" color="$text900" fontWeight="$bold">
            32
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
          bg="$trueGray300"
          w="$px"
          orientation="vertical"
        />
        <VStack alignItems="center" space="xs">
          <Text fontSize="$sm" color="$text900" fontWeight="$bold">
            8,396
          </Text>
          <Text fontSize="$sm" color="$text900" fontWeight="$normal">
            followers
          </Text>
        </VStack>
        <Divider
          mx="$2.5"
          h="$10"
          bg="$trueGray300"
          w="$px"
          orientation="vertical"
        />
        <VStack alignItems="center" space="xs">
          <Text fontSize="$sm" color="$text900" fontWeight="$bold">
            720
          </Text>
          <Text fontSize="$sm" color="$text900" fontWeight="$normal">
            following
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

const FormInputcard = () => {
  return (
    <VStack
      padding="$5"
      borderRadius="$lg"
      borderColor="$border200"
      borderWidth="$1"
      space="2xl"
      hardShadow="5"
    >
      <VStack>
        <Text fontSize="$lg" fontWeight="bold" color="$text900">
          Share gluestack UI with friends
        </Text>
        <Text mt="$2.5" fontSize="$sm" color="$text700">
          Email friends who have never tried glueStack UI
        </Text>
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
    </VStack>
  );
};

const SettingsCard = () => {
  return (
    <Box
      padding="$6"
      borderRadius="$xl"
      borderColor="$border200"
      borderWidth="$1"
      w="$full"
      hardShadow="5"
    >
      <Text fontSize="$lg" fontWeight="$bold" color="$text900">
        Notification Settings
      </Text>
      <Text mt="$1.5" fontSize="$sm" color="$text700">
        Receive notifications about Gluestack UI updates.
      </Text>
      <VStack mt="$6" space="xl">
        {settingOptions.map((option: any, index: number) => (
          <HStack key={index} space="xl">
            <Box
              padding="$3"
              borderRadius="$xl"
              backgroundColor="$background50"
              alignSelf="center"
            >
              {option.Icon && <option.Icon />}
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
              <Switch alignSelf="center" defaultValue={option.isCheck} />
            </HStack>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

const FileUploadCard = () => {
  return (
    <VStack
      padding="$6"
      borderRadius="$xl"
      borderColor="$border200"
      borderWidth="$1"
      hardShadow="5"
    >
      <VStack>
        <Text fontSize="$lg" fontWeight="$bold" color="$text900">
          Upload Your Files
        </Text>
        <Text mt="$1.5" fontSize="$sm" color="$text700">
          JPG, PNG, PDF, MP4, GIFs supported
        </Text>
      </VStack>
      <VStack
        mt="$5"
        px="$20"
        py="$6"
        alignItems="center"
        borderRadius="$xl"
        borderStyle="dashed"
        borderWidth="$1"
        borderColor="$border300"
      >
        <Pressable>
          <Box alignItems="center">
            <CloudIcon />
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
      <VStack mt="$6">
        <Text fontSize="$sm" fontWeight="$bold" color="$text900">
          Uploading 1 file
        </Text>
        <HStack mt="$3.5" justifyContent="space-between" alignItems="center">
          <Box padding="$3">
            <FileIcon />
          </Box>
          <VStack w="$4/5">
            <HStack justifyContent="space-between">
              <HStack>
                <Text fontSize="$sm" color="$text900">
                  Document_1.gif
                </Text>
                <Text fontSize="$sm" color="$text500">
                  {''} (200mb)
                </Text>
              </HStack>
              <Text fontSize="$xs" color="$text500">
                25s left
              </Text>
            </HStack>
            <Progress value={55} h="$1" mt="$1">
              <ProgressFilledTrack h="$1" />
            </Progress>
          </VStack>
          <Pressable>
            <Icon as={CloseIcon} w="$5" h="$5" color="$background600" />
          </Pressable>
        </HStack>
      </VStack>
    </VStack>
  );
};

const LoginCard = () => {
  return (
    <VStack
      padding="$9"
      borderRadius="$xl"
      borderColor="$border200"
      borderWidth="$1"
      hardShadow="5"
      space="4xl"
      $md-width="$2/5"
      $lg-width="$full"
    >
      <VStack space="xs">
        <Text fontSize="$2xl" fontWeight="$bold" color="$text900">
          Login to your account
        </Text>
        <HStack alignItems="center">
          <Text
            fontSize="$sm"
            fontWeight="$light"
            lineHeight="$md"
            color="$text700"
          >
            Don’t have an account?
          </Text>
          <Text fontSize="$sm" ml="$1.5">
            {''}Sign up
          </Text>
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
        <HStack justifyContent="space-between">
          <Checkbox value="" size="sm">
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Remember me</CheckboxLabel>
          </Checkbox>
          <Text fontSize="$xs" fontWeight="$medium" color="$text700">
            Forgot Password?
          </Text>
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
      <Button size="sm">
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
    </VStack>
  );
};

const Cards: any = ({ w = '100%', h = '100%', ...props }: any) => {
  return (
    <Box {...props} bg="$background0" p={'$6'} h={h} w={w}>
      <VStack flex={1} $lg-flexDirection="row" space="2xl">
        <VStack $base-width="$full" $lg-width="$2/3" space="2xl">
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
          <Box
            w="$full"
            p="$5"
            borderRadius="$lg"
            borderWidth="$1"
            borderColor="$border200"
            justifyContent="space-between"
            alignItems="center"
            $base-flexDirection="column"
            $sm-flexDirection="row"
            hardShadow="5"
          >
            <Box>
              <Text fontSize="$lg" color="$text900" fontWeight="$bold">
                Updates Available
              </Text>
              <Text mt="$1.5" color="$text700">
                A new version is available. Please upgrade for the best
                experience.
              </Text>
            </Box>
            <HStack
              space="sm"
              $base-flexDirection="column"
              $sm-flexDirection="row"
              $base-width="$full"
              $sm-width="auto"
              $base-mt="$3"
              $sm-mt="$0"
            >
              <Button size="sm" variant="outline">
                <ButtonText>Skip</ButtonText>
              </Button>
              <Button size="sm">
                <ButtonText>Download</ButtonText>
              </Button>
            </HStack>
          </Box>
        </VStack>
        <VStack
          flex={1}
          $base-width="$full"
          $lg-width="$1/4"
          $md-flexDirection="row"
          $lg-flexDirection="column"
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
