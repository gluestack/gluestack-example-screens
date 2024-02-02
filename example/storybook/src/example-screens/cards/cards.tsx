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
} from '@gluestack-ui-new/themed';
import { FileIcon, GoogleIcon, Twittericon, GithubIcon } from './Icons';
import { settingOptions } from './constants';
import { UploadCloud } from 'lucide-react-native';
import Card from '../components/Card';
import UserCard from '../components/UserCard';
import UserCardAvatar from '../components/UserCardAvatar';
import UserCardStack from '../components/UserCardStack';
import Stats from '../components/Stats';
import StatsItems from '../components/StatsItems';
import StatsDivider from '../components/StatsDivider';

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
                <TooltipContent backgroundColor="$background600">
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
    <Box
      {...props}
      bg="$background0"
      $base-p="$4"
      $md-p="$5"
      $lg-p="$6"
      h={h}
      w={w}
    >
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
