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
  Heading,
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
        <HStack mt="$6" space="lg" alignItems="center">
          <Avatar size="md">
            <AvatarFallbackText>John Smith</AvatarFallbackText>
            <AvatarImage source={require('../assets/avatar-icon.png')} />
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
      $xl-width="$full"
      maxHeight="$80"
    >
      <Avatar bgColor="$black" size="lg">
        <AvatarFallbackText>John Smith</AvatarFallbackText>
        <AvatarImage source={require('../assets/avatar-icon.png')} />
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
        $base-maxWidth="$5/6"
      >
        Pushing the boundaries of reality with XR design wizardry ✨🚀
        #XRDesigner
      </Text>
      <HStack mt="$7" alignItems="center" width="$full" justifyContent="center">
        <VStack flex={1} alignItems="center" space="xs">
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
        </VStack>
        <Divider
          mx="$2.5"
          h="$10"
          bg="$trueGray300"
          w="$px"
          orientation="vertical"
        />
        <VStack flex={1} alignItems="center" space="xs">
          <Text fontSize="$sm" color="$text900" fontWeight="$bold">
            8,396
          </Text>
          <Text fontSize="$xs" color="$text900" fontWeight="$normal">
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
        <VStack flex={1} alignItems="center" space="xs">
          <Text fontSize="$sm" color="$text900" fontWeight="$bold">
            720
          </Text>
          <Text fontSize="$xs" color="$text900" fontWeight="$normal">
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
      <Heading size="md" fontWeight="$bold" color="$text900">
        Notification Settings
      </Heading>
      <Heading mt="$1.5" size="xs" fontWeight="$normal" color="$text700">
        Receive notifications about Gluestack UI updates.
      </Heading>
      <VStack mt="$6" space="xl">
        {settingOptions.map((option: any, index: number) => (
          <HStack key={index} space="xl">
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
            <Icon as={CloudIcon} h="$16" w="$16" />
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
          <Box padding="$3">
            <Icon as={FileIcon} size="xl" />
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
      $md-width="$1/2"
      $xl-width="$full"
    >
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
          <Heading size="xs" color="$text700" fontWeight="$medium" ml="$1.5">
            {''}Sign up
          </Heading>
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
          <Pressable>
            <Text fontSize="$xs" fontWeight="$medium" color="$text700">
              Forgot Password?
            </Text>
          </Pressable>
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
    </VStack>
  );
};

const Cards: any = ({ w = '100%', h = '100%', ...props }: any) => {
  return (
    <Box {...props} bg="$background0" p={'$6'} h={h} w={w}>
      <VStack flex={1} $xl-flexDirection="row" space="2xl">
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
              m="$4"
              $base-width="$full"
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
          </Box>
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
