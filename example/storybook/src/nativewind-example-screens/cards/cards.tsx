import React from 'react';
import {
  VStack,
  Box,
  Heading,
  Text,
  HStack,
  Button,
  ButtonText,
  ButtonIcon,
  Pressable,
  Divider,
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  Badge,
  BadgeText,
  Progress,
  ProgressFilledTrack,
  Switch,
} from '@/components/nativewind';
import UserCard from '../../example-screens/components/UserCard';
import UserCardAvatar from '../../example-screens/components/UserCardAvatar';
import UserCardStack from '../../example-screens/components/UserCardStack';
import Card from './components/Card';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  inviteValidationSchema,
  inviteValidationType,
  loginValidationSchema,
  loginValidationType,
} from '../../example-screens/cards/validation';
import CustomInput from './components/CustomInput';
import {
  Icon,
  InputField,
  Tooltip,
  TooltipContent,
  TooltipText,
} from '@gluestack-ui/themed';
import Stats from '../../example-screens/components/Stats';
import StatsItems from '../../example-screens/components/StatsItems';
import StatsDivider from '../../example-screens/components/StatsDivider';
import { settingOptions } from '../../example-screens/cards/constants';

const BlogCard = () => {
  return (
    <Card className="sm:mb-4 lg:mb-6 ">
      <Box className="h-64 w-auto bg-background-50 rounded-lg"></Box>
      <VStack className="mt-4 w-full">
        <Heading className="text-xs font-normal text-text-700">
          May 15, 2023
        </Heading>
        <Heading className="text-sm mt-2 font-bold text-text-900">
          The Power of Positive Thinking
        </Heading>
        <Text className="mt-2.5 text-sm text-text-700">
          Discover how the power of positive thinking can transform your life,
          boost your confidence, and help you overcome challenges. Explore
          practical tips and techniques to cultivate a positive mindset for
          greater happiness and success.
        </Text>
        <UserCard className="mt-6" space="md" alignItems="center">
          <UserCardAvatar
            name="John Smith"
            src={require('../../../assets/avatar-icon.png')}
            size="md"
          />
          <UserCardStack>
            <Text className="font-bold text-text900">John Smith</Text>
            <Text className="text-sm text-text700">Motivational Speaker</Text>
          </UserCardStack>
        </UserCard>
      </VStack>
    </Card>
  );
};
const FormInputcard = () => {
  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<inviteValidationType>({
    mode: 'onBlur',
    defaultValues: {
      inviteEmail: '',
    },
    resolver: zodResolver(inviteValidationSchema),
  });
  /* eslint-disable */
  const onSubmit = (data: inviteValidationType) => {
    // console.log(data, 'form submission data');
  };
  const onError = (error: any) => {
    // console.log(error, 'form submission errors');
  };
  return (
    <Card space="2xl">
      <VStack>
        <Heading className="text-md font-bold text-text-900" lineHeight="$md">
          Share gluestack UI with friends
        </Heading>
        <Heading
          className="mt-2.5 text-xs font-normal text-text-700"
          lineHeight="$sm"
        >
          Email friends who have never tried glueStack UI
        </Heading>
      </VStack>
      <HStack
        className="justify-between"
        space="xs"
        $base-flexDirection="column"
        $lg-flexDirection="row"
      >
        <CustomInput
          label={'Send an invite'}
          formControlProps={{
            flex: 1,
          }}
          validatorProps={{
            control: control,
            trigger: trigger,
            name: 'inviteEmail',
          }}
        >
          <InputField type="text" placeholder="abc@example.com" />
        </CustomInput>
        <Button
          size="md"
          $lg-my="$6"
          isDisabled={Object.keys(errors).length ? true : false}
          onPress={() => {
            handleSubmit(onSubmit, onError)();
          }}
        >
          <ButtonText>Send</ButtonText>
        </Button>
      </HStack>
    </Card>
  );
};
const LoginCard = () => {
  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<loginValidationType>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginValidationSchema),
  });
  /* eslint-disable */
  const onSubmit = (data: loginValidationType) => {
    // console.log(data, 'form submission data');
  };
  const onError = (error: any) => {
    // console.log(error, 'form submission errors');
  };
  return (
    <Card
      className="md:w-1/2 xl:w-full md:mr-4 lg:mr-6 xl-mr-0"
      space="4xl"
      $base-mb="$4"
    >
      <VStack space="xs">
        <Heading
          className="text-xl font-bold text-text-900"
          fontFamily="$heading"
        >
          Login to your account
        </Heading>
        <HStack alignItems="center">
          <Heading
            className="text-xs font-light text-text-700"
            lineHeight="$md"
          >
            Don’t have an account?
          </Heading>
          <Pressable>
            <Heading className="text-xs text-text-700 font-medium ml-1.5">
              {''}Sign up
            </Heading>
          </Pressable>
        </HStack>
      </VStack>
      <VStack space="md">
        <CustomInput
          label={'Email'}
          validatorProps={{
            control: control,
            trigger: trigger,
            name: 'email',
          }}
        >
          <InputField type="text" placeholder="abc@example.com" />
        </CustomInput>
        <CustomInput
          label={'Password'}
          validatorProps={{
            control: control,
            trigger: trigger,
            name: 'password',
          }}
        >
          <InputField type="password" placeholder="Enter password" />
        </CustomInput>
        <HStack justifyContent="space-between" alignItems="center">
          <Checkbox value="" size="sm">
            <CheckboxIndicator mr="$2">
              {/* <CheckboxIcon as={CheckIcon} /> */}
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
      <Button
        size="sm"
        borderRadius="$md"
        isDisabled={Object.keys(errors).length ? true : false}
        onPress={() => {
          handleSubmit(onSubmit, onError)();
        }}
      >
        <ButtonText>Login</ButtonText>
      </Button>
      <HStack
        alignItems="center"
        justifyContent="center"
        alignSelf="stretch"
        space="sm"
      >
        <Divider
          className="h-px flex-1 bg-red-200"
          orientation="horizontal"
        ></Divider>
        <Text className="text-xs font-light text-text-600">
          OR CONTINUE WITH
        </Text>
        <Divider
          h="$px"
          flex={1}
          bg="$border200"
          orientation="horizontal"
        ></Divider>
      </HStack>
      <HStack space="md">
        <Button flex={1} size="md" variant="outline" action="secondary">
          <ButtonIcon>{/* <Icon as={GoogleIcon} /> */}</ButtonIcon>
        </Button>
        <Button flex={1} size="md" variant="outline" action="secondary">
          <ButtonIcon>{/* <Icon as={Twittericon} /> */}</ButtonIcon>
        </Button>
        <Button flex={1} size="md" variant="outline" action="secondary">
          <ButtonIcon>{/* <Icon as={GithubIcon} /> */}</ButtonIcon>
        </Button>
      </HStack>
    </Card>
  );
};
const ProfileCard = () => {
  return (
    <Card
      flex={1}
      alignItems="center"
      $xl-width="$full"
      justifyContent="center"
      $base-height="$80"
      $xl-height="$full"
    >
      <UserCard direction="column">
        <UserCardAvatar
          name="John Smith"
          src={require('../../../assets/avatar-icon.png')}
          size="lg"
        />
        <UserCardStack mt="$3" alignItems="center">
          <Text className="text-lg text-text-900 font-bold">John Smith</Text>
          <Text className="mt-0.5 text-sm text-text-700 font-normal">
            john@example.com
          </Text>
        </UserCardStack>
      </UserCard>
      <Text
        className="text-sm mt-4 text-text-700"
        textAlign="center"
        lineHeight="$sm"
        $base-maxWidth="$5/6"
      >
        Pushing the boundaries of reality with XR design wizardry ✨🚀
        #XRDesigner
      </Text>
      <Stats mt="$7">
        <StatsItems>
          <Text className="text-sm text-text-900 font-bold">32</Text>
          <Text
            className="text-xs text-text-900 font-normal"
            fontFamily="$body"
          >
            posts
          </Text>
        </StatsItems>
        <StatsDivider h="$10" />
        <StatsItems>
          <Text className="text-sm text-text-900 font-bold">8,396</Text>
          <Text className="text-xs text-text-900 font-normal">followers</Text>
        </StatsItems>
        <StatsDivider h="$10" />
        <StatsItems>
          <Text className="text-sm text-text-900 font-bold">720</Text>
          <Text className="text-xs text-text-900 font-normal">following</Text>
        </StatsItems>
      </Stats>
    </Card>
  );
};
const SettingsCard = () => {
  return (
    <Card className="md:mb-4 lg:mb-6" $base-mb="$4">
      <Heading className="text-md font-bold text-text-900">
        Notification Settings
      </Heading>
      <Heading className="mt-1.5 text-xs font-normal text-text-700">
        Receive notifications about Gluestack UI updates.
      </Heading>
      <VStack className="mt-6" space="xl">
        {settingOptions.map((option: any, index: number) => (
          <HStack space="xl" key={index}>
            <Box
              className="rounded-xl bg-background-50"
              padding="$3"
              alignSelf="center"
              $base-display="none"
              $sm-display="flex"
            >
              {option.Icon && <Icon as={option.Icon} size="xl" />}
            </Box>
            <HStack
              className="flex-1 justify-between border-border-200 mb-0.5 pb-2"
              borderBottomWidth={
                settingOptions.length - 1 === index ? '$0' : '$1'
              }
            >
              <VStack maxWidth="$5/6">
                <Text
                  className="text-sm font-bold text-text-900"
                  lineHeight="$md"
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
    <Card flex={1}>
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
        $md-py="$20"
        $lg-py="$11"
        alignItems="center"
        borderRadius="$xl"
        borderStyle="dashed"
        borderWidth="$1"
        borderColor="$border300"
        justifyContent="center"
      >
        <Pressable>
          <Box alignItems="center">
            {/* <Icon as={UploadCloud} h="$16" w="$16" /> */}
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
      <VStack $base-mt="$6" $md-mt="$5" $lg-mt="$6" $lg-mb="$0">
        <Heading size="xs" fontWeight="$bold" color="$text900">
          Uploading 1 file
        </Heading>
        <HStack mt="$3" justifyContent="space-between" alignItems="center">
          <Box $base-padding="$1" $xs-padding="$3">
            {/* <Icon as={FileIcon} size="xl" /> */}
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
                  {/* <Icon as={CloseIcon} w="$5" h="$5" color="$background600" /> */}
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
const Cards: any = ({ ...props }: any) => {
  return (
    <Box
      {...props}
      className="bg-background-0 sm:p-4 md:p-5 lg:p-6 w-full h-screen "
    >
      <VStack class="flex-1 flex xl:flex-row...">
        <VStack className="sm:w-full xl:w-2/3 lg:mr-6 sm:mb-4 lg:mb-6 xl:mb-0">
          <VStack className="md:flex-row">
            <VStack className="sm:w-full md:w-2/5 md:mr-4 lg:mr-6 sm:mb-4 md:mb-0">
              <BlogCard />
              <FormInputcard />
            </VStack>
            <VStack flex={1} $base-width="$full" $md-width="$3/5">
              <SettingsCard />
              <FileUploadCard />
            </VStack>
          </VStack>
          <Card
            className="sm:mt-4 lg:mt-6 w-full justify-between"
            $base-mt="$4"
            alignItems="center"
            $base-flexDirection="column"
            $sm-flexDirection="row"
          >
            <Box>
              <Heading className="text-md text-text-900 font-bold">
                Updates Available
              </Heading>
              <Heading className="text-xs mt-1.5 text-text-700 font-normal">
                A new version is available. Please upgrade for the best
                experience.
              </Heading>
            </Box>
            <HStack
              className="ml-3 justify-end md:mt-0"
              space="md"
              $base-width="$full"
              $base-mt="$6"
              $sm-width="auto"
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
          className="flex-1 md:flex-row"
          $base-width="$full"
          $md-flexDirection="row"
          $xl-flexDirection="column"
        >
          <LoginCard />
          <ProfileCard />
        </VStack>
      </VStack>
    </Box>
  );
};
export default Cards;
