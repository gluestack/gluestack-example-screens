import {
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  Divider,
  HStack,
  Heading,
  Image,
  Pressable,
  Text,
  VStack,
} from '@/components/nativewind';
import React from 'react';
import { GithubIcon } from '../../example-screens/login/Icons';

const login = () => {
  return (
    <Box
      className="w-full h-lvh bg-background-0 rounded-xl border border-border-200 flex-row lg:rounded-lg overflow-hidden p-0"
      //@ts-ignore
    >
      <Box className="w-1/2 h-full bg-background-950 lg:flex hidden">
        <Image
          className="w-full h-full"
          source={require('../../example-screens/assets/login_image.png')}
          resizeMode="cover"
        />
        <Text className="absolute bottom-0 p-9 text-white text-lg">
          gluestack is a powerful suite of universal components, tools and a
          styling library built for React Native, Next.js, Expo, and React.
        </Text>
      </Box>

      <Box className="w-full justify-center lg:w-1/2">
        {/* login button at the top */}
        <Pressable className="absolute right-[30] top-[24]">
          {/* @ts-ignore */}
          {({ hovered }) => {
            return (
              <Text
                className="p-3 text-sm text-typography-900 rounded-md hover:bg-background-100"
                flexBasis={1}
                backgroundColor={hovered ? '$background100' : 'none'}
              >
                Login
              </Text>
            );
          }}
        </Pressable>
        <Box className="sm:p-8 p-6">
          <VStack className="mx-auto md:max-w-1/2 lg:max-w-3/4 xl:max-w-3/5 max-w-full">
            <Heading
              className="text-typography-900 font-semibold text-center"
              size="xl"
            >
              Create an account
            </Heading>
            <Text className="mt-2 text-typography-700 text-sm text-center">
              Enter your email below to create your account
            </Text>
            <VStack className="mt-6 w-full" space="3xl">
              <VStack space="md">
                {/* <CustomInput
                  inputProps={{
                    borderRadius: '$md',
                  }}
                  validatorProps={{
                    control: control,
                    trigger: trigger,
                    name: 'email',
                  }}
                >
                  <InputField type="text" placeholder="name@example.com" />
                </CustomInput> */}
                <Button
                  className="rounded-md"
                  size="sm"
                  // isDisabled={Object.keys(errors).length ? true : false}
                  // onPress={() => {
                  //   handleSubmit(onSubmit, onError)();
                  // }}
                >
                  <ButtonText className="font-normal">
                    Sign In with Email
                  </ButtonText>
                </Button>
              </VStack>
              <HStack className="items-center">
                <Divider
                  className="h-px flex-1 bg-border-200"
                  orientation="horizontal"
                ></Divider>
                <Text className="text-xs font-light text-typography-600 px-2">
                  OR CONTINUE WITH
                </Text>
                <Divider
                  className="h-px flex-1 bg-border-200"
                  orientation="horizontal"
                ></Divider>
              </HStack>
              <Button
                className="rounded-md"
                size="sm"
                action="secondary"
                variant="outline"
              >
                <ButtonIcon className="h-4 w-4 mr-1" as={GithubIcon} />
                <ButtonText>GitHub</ButtonText>
              </Button>
            </VStack>
            <Text className="mt-6 text-xs text-typography-700 font-light text-center sm:px-8">
              By clicking continue, you agree to our Terms of Service and
              Privacy Policy
            </Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default login;
