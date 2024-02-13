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
} from '@gluestack-ui-new/themed';
import Card from '../components/Card';
import CustomInput from '../components/CustomInput';

const Login = () => {
  return (
    <Card w="$full" flexDirection="row">
      <Box width="$1/2" h="$full"></Box>
      <Box width="$1/2">
        <VStack width="$3/4" mx="auto">
          <VStack alignItems="center" w="$full">
            <Heading>Create an account</Heading>
            <Text>Enter your email below to create your account</Text>
            <CustomInput formControlProps={{ w: '$full' }}>
              <InputField type="text" placeholder="name@example.com" />
            </CustomInput>
            <Button w="$full">
              <ButtonText>Sign In with Email</ButtonText>
            </Button>
          </VStack>
          <HStack alignItems="center">
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
        </VStack>
      </Box>
    </Card>
  );
};

export default Login;
