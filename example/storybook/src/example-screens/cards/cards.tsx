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
} from '@gluestack-ui-new/themed';
import {
  TextIcon,
  MailIcon,
  CircleCrossIcon,
  FileIcon,
  CloudIcon,
} from './Icons';

const settingOptions = [
  {
    title: 'Email',
    description: 'Receive email updates on comments you followed',
    Icon: MailIcon,
    isCheck: true,
  },
  {
    title: 'Text Messages',
    description: 'Receive updates by SMS',
    Icon: TextIcon,
    isCheck: true,
  },
  {
    title: 'Automatically Delete items',
    description: 'Delete activities older than 3 months ',
    Icon: CircleCrossIcon,
    isCheck: false,
  },
];

const Cards: any = ({
  // bg = 'red500',
  w = '100%',
  h = '100%',
  ...props
}: any) => {
  return (
    <Box {...props} h={h} w={w}>
      <Box
        $md-padding="$6"
        width="$full"
        $base-flexDirection="column"
        $lg-flexDirection="row"
        justifyContent="space-between"
      >
        <VStack $base-width="$full" $lg-width="$3/4" space="2xl">
          <Box
            $base-flexDirection="column"
            $sm-flexDirection="row"
            justifyContent="space-between"
          >
            <VStack $base-width="$full" $md-width="$2/5" space="2xl">
              <Box
                padding="$5"
                borderRadius="$xl"
                borderColor="$border200"
                borderWidth="$1"
                width="$full"
              >
                <Box w="auto" h={256} backgroundColor="$background100"></Box>
                <VStack mt="$4" width="$full">
                  <Text fontSize="$sm" color="$text700">
                    May 15, 2023
                  </Text>
                  <Text mt="$2" fontWeight="$bold" color="$text900">
                    The Power of Positive Thinking
                  </Text>
                  <Text
                    mt="$2.5"
                    fontSize="$sm"
                    color="$text700"
                    lineHeight="$md"
                  >
                    Discover how the power of positive thinking can transform
                    your life, boost your confidence, and help you overcome
                    challenges. Explore practical tips and techniques to
                    cultivate a positive mindset for greater happiness and
                    success.
                  </Text>
                  <HStack mt="$6" space="md" alignItems="center">
                    <Avatar size="md">
                      <AvatarFallbackText>John Smith</AvatarFallbackText>
                      <AvatarImage source={'./avatar-image.png'} />
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
              <VStack
                padding="$5"
                borderRadius="$lg"
                borderColor="$border200"
                borderWidth="$1"
                space="2xl"
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
                  <FormControl size="md" width="$3/4">
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
            </VStack>
            <VStack
              $base-width="$full"
              $md-width="58%"
              space="2xl"
              $base-mt="$6"
              $md-mt="$0"
            >
              <Box
                padding="$6"
                borderRadius="$xl"
                borderColor="$border200"
                borderWidth="$1"
                w="$full"
              >
                <Text fontSize="$lg" fontWeight="$bold" color="$text900">
                  Notification Settings
                </Text>
                <Text mt="$1.5" fontSize="$sm" color="$text700">
                  Receive notifications about Gluestack UI updates.
                </Text>
                <VStack mt="$6" space="lg">
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
                        justifyContent="space-between"
                        $base-width="$3/4"
                        $md-width="$5/6"
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
                        <Switch
                          alignSelf="center"
                          defaultValue={option.isCheck}
                        />
                      </HStack>
                    </HStack>
                  ))}
                </VStack>
              </Box>
              <VStack
                padding="$6"
                borderRadius="$xl"
                borderColor="$border200"
                borderWidth="$1"
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
                  space="sm"
                >
                  <Box alignItems="center">
                    <CloudIcon />
                    <Text fontSize="$sm" lineHeight="$md" color="$text700">
                      Drag & drop your file here
                    </Text>
                  </Box>
                  <Text>or</Text>
                  <Badge
                    size="md"
                    variant="solid"
                    borderRadius="$xs"
                    action="muted"
                    px="$3"
                    py="$0.5"
                  >
                    <BadgeText>Browse Files</BadgeText>
                  </Badge>
                </VStack>
                <VStack mt="$6">
                  <Text fontSize="$sm" fontWeight="$bold" color="$text900">
                    Uploading 1 file
                  </Text>
                  <HStack
                    mt="$3.5"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box padding="$3">
                      <FileIcon />
                    </Box>
                    <VStack w="$4/5">
                      <HStack justifyContent="space-between">
                        <Text fontSize="$sm" color="$text900">
                          Document_1.gif (200mb)
                        </Text>
                        <Text fontSize="$xs" color="$text500">
                          25s left
                        </Text>
                      </HStack>
                      <Progress value={55} h="$1" mt="$1">
                        <ProgressFilledTrack h="$1" />
                      </Progress>
                    </VStack>
                    <Icon as={CloseIcon} w="$5" h="$5" color="$background600" />
                  </HStack>
                </VStack>
              </VStack>
            </VStack>
          </Box>
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
              space="md"
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
          $base-width="$full"
          $lg-width="$1/4"
          $base-mt="$3"
          $lg-mt="$0"
          $base-ml="$0"
          $lg-ml="$6"
        >
          <VStack
            alignItems="center"
            borderRadius="$xl"
            borderWidth="$1"
            borderColor="$border200"
            p="$6"
          >
            <Avatar bgColor="$black" size="lg">
              <AvatarFallbackText>John Smith</AvatarFallbackText>
              <AvatarImage source={'./avatar-image.png'} />
            </Avatar>
            <VStack alignItems="center" mt="$3" space="xs" width="$full">
              <Text fontSize="$lg" color="$text900" fontWeight="$bold">
                John Smith
              </Text>
              <Text fontSize="$sm" color="$text700" fontWeight="$normal">
                john@example.com
              </Text>
            </VStack>
            <Text fontSize="$sm" mt="$4" color="$text700" textAlign="center">
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
                bg="$background300"
                w="$0.5"
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
                bg="$background300"
                w="$0.5"
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
        </VStack>
      </Box>
    </Box>
  );
};

export default Cards;

export { Text, Box };
