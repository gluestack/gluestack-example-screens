import React from 'react';
import {
  Box,
  Heading,
  VStack,
  Text,
  InputField,
  Button,
  ButtonText,
  Divider,
  HStack,
  ButtonIcon,
  Pressable,
  Image,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  InputSlot,
  Input,
} from '@gluestack-ui-new/themed';
import { GithubIcon } from './Icons';
import { loginValidationSchema, loginValidationType } from './validations';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useController } from 'react-hook-form';

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

const Login = () => {
  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<loginValidationType>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
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
    <Box
      w="$full"
      //@ts-ignore
      h="100vh"
      backgroundColor="$background0"
      borderRadius="$xl"
      borderWidth="$1"
      borderColor="$border200"
      $lg-borderRadius="$lg"
      flexDirection="row"
      overflow="hidden"
      $base-p="$0"
      $xs-p="$0"
    >
      <Box
        width="$1/2"
        h="$full"
        backgroundColor="$background950"
        $base-display="none"
        $lg-display="flex"
      >
        <Image
          source={require('../assets/login_image.png')}
          resizeMode="cover"
          w="$full"
          h="$full"
        />
        <Text
          position="absolute"
          bottom={0}
          p="$9"
          color="white"
          fontSize="$lg"
        >
          gluestack is a powerful suite of universal components, tools and a
          styling library built for React Native, Next.js, Expo, and React.
        </Text>
      </Box>
      <Box $base-width="$full" $lg-width="$1/2" justifyContent="center">
        {/* login button at the top */}
        <Pressable position="absolute" right={30} top={24}>
          {/* @ts-ignore */}
          {({ hovered }) => {
            return (
              <Text
                p="$3"
                fontSize="$sm"
                color="$text900"
                borderRadius="$md"
                backgroundColor={hovered ? '$background100' : 'none'}
                flexBasis={1}
              >
                Login
              </Text>
            );
          }}
        </Pressable>
        <Box $base-p="$6" $sm-p="$8">
          <VStack
            $base-maxWidth="$full"
            $md-maxWidth="$1/2"
            $lg-maxWidth="$3/4"
            $xl-maxWidth="$3/5"
            mx="auto"
          >
            <Heading
              size="xl"
              color="$text900"
              fontWeight="$semibold"
              textAlign="center"
            >
              Create an account
            </Heading>
            <Text mt="$2" color="$text700" fontSize="$sm" textAlign="center">
              Enter your email below to create your account
            </Text>
            <VStack mt="$6" w="$full" space="3xl">
              <VStack space="md">
                <CustomInput
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
                </CustomInput>
                <Button
                  size="sm"
                  borderRadius="$md"
                  isDisabled={Object.keys(errors).length ? true : false}
                  onPress={() => {
                    handleSubmit(onSubmit, onError)();
                  }}
                >
                  <ButtonText fontWeight="$normal">
                    Sign In with Email
                  </ButtonText>
                </Button>
              </VStack>
              <HStack alignItems="center">
                <Divider
                  h="$px"
                  flex={1}
                  bg="$border200"
                  orientation="horizontal"
                ></Divider>
                <Text
                  fontSize="$xs"
                  fontWeight="$light"
                  color="$text600"
                  px="$2"
                >
                  OR CONTINUE WITH
                </Text>
                <Divider
                  h="$px"
                  flex={1}
                  bg="$border200"
                  orientation="horizontal"
                ></Divider>
              </HStack>
              <Button
                size="sm"
                action="secondary"
                borderRadius="$md"
                variant="outline"
              >
                <ButtonIcon as={GithubIcon} h="$4" w="$4" mr="$1" />
                <ButtonText>GitHub</ButtonText>
              </Button>
            </VStack>
            <Text
              mt="$6"
              $xs-px="$8"
              fontSize="$xs"
              color="$text700"
              fontWeight="$light"
              textAlign="center"
            >
              By clicking continue, you agree to our Terms of Service and
              Privacy Policy
            </Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
