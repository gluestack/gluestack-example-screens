import {
  Box,
  Text,
  VStack,
  Divider,
  // InputField,
  Icon,
  Button,
  HStack,
  // CircleIcon,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckIcon,
  Switch,
  Pressable,
  // Fab,
  // FabIcon,
  // FormControl,
  // FormControlLabel,
  // FormControlLabelText,
  // InputSlot,
  // Input,
  Tooltip,
  TooltipContent,
  TooltipText,
} from '@/components/nativewind';
import React from 'react';
import {
  displaySidebarItems,
  emailNotifications,
  emails,
  fonts,
  languages,
  // notifications,
} from './constants';
import { useController, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  accountViewValidationSchema,
  accountViewValidationType,
  appearanceViewValidationSchema,
  appearanceViewValidationType,
  profileViewValidationSchema,
  profileViewValidationType,
} from './validation';
import PropTypes from 'prop-types';
import { AnimatedView } from '@gluestack-style/animation-resolver';
import { styled, useMediaQuery } from '@gluestack-ui-new/themed';

export type ViewType =
  | 'profile'
  | 'account'
  | 'appearance'
  | 'notifications'
  | 'display';

const AnimatedBox = styled(AnimatedView, {
  ':initial': {
    opacity: 0,
  },
  ':animate': {
    opacity: 1,
  },
  ':exit': {
    opacity: 0,
  },
});

const SkeletonCircle = ({ size, ...props }) => {
  return (
    <AnimatedBox
      className="rounded-full bg-background-100"
      w={size}
      h={size}
      {...props}
    />
  );
};

const SkeletonBox = ({ width, height, ...props }) => {
  return (
    <AnimatedBox
      className="bg-background-100 rounded-3xl"
      w={width}
      h={height}
      {...props}
    />
  );
};

SkeletonCircle.propTypes = {
  size: PropTypes.string.isRequired,
};

SkeletonBox.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

// const CustomInput = ({
//   label,
//   icon,
//   children,
//   formControlProps,
//   inputProps,
//   validatorProps,
// }: {
//   label?: string;
//   icon?: any;
//   children: any;
//   formControlProps?: any;
//   inputProps?: any;
//   validatorProps?: any;
// }) => {
//   let childrenWithProps;
//   if (validatorProps) {
//     /* eslint-disable */
//     const {
//       field: { onChange, onBlur, value },
//       fieldState: { error, isTouched },
//     } = useController({
//       ...validatorProps,
//     });
//     childrenWithProps = React.cloneElement(children, {
//       onBlur: onBlur,
//       value: value,
//       onChangeText: (text: string) => {
//         onChange(text);
//         if (isTouched && validatorProps?.trigger) {
//           validatorProps.trigger(validatorProps?.name);
//         }
//       },
//     });
//     return (
//       <FormControl size="sm" {...formControlProps}>
//         {label && (
//           <FormControlLabel className="mb-2">
//             <FormControlLabelText className="text-sm">
//               {label}
//             </FormControlLabelText>
//           </FormControlLabel>
//         )}
//         {icon ? (
//           <Input className="rounded-lg" hardShadow="5" {...inputProps}>
//             <InputSlot className="pl-3">{icon}</InputSlot>
//             {validatorProps ? childrenWithProps : children}
//           </Input>
//         ) : (
//           <Input {...inputProps}>
//             {validatorProps ? childrenWithProps : children}
//           </Input>
//         )}
//         {validatorProps?.trigger && (
//           <Text
//             className="text-sm mt-1"
//             color={error ? '$error600' : 'transparent'}
//             fontFamily="$body"
//           >
//             {error ? error.message : ''}
//           </Text>
//         )}
//       </FormControl>
//     );
//   }
//   return (
//     <FormControl size="sm" {...formControlProps}>
//       {label && (
//         <FormControlLabel className="mb-2">
//           <FormControlLabelText className="text-sm">
//             {label}
//           </FormControlLabelText>
//         </FormControlLabel>
//       )}
//       {icon ? (
//         <Input className="rounded-lg" hardShadow="5" {...inputProps}>
//           <InputSlot className="pl-3">{icon}</InputSlot>
//           {children}
//         </Input>
//       ) : (
//         <Input {...inputProps}>{children}</Input>
//       )}
//     </FormControl>
//   );
// };

const CustomCheck = ({
  variant,
  label,
  value,
}: {
  variant: 'radio' | 'checkbox';
  label?: string;
  value: string;
}) => {
  return (
    <HStack alignItems="center">
      {variant === 'radio' ? (
        <></>
      ) : (
        // <Radio value={value} size="sm" isInvalid={false} isDisabled={false}>
        //   <RadioIndicator className="mr-2">
        //     <RadioIcon as={CircleIcon} strokeWidth={1} />
        //   </RadioIndicator>
        //   {label && (
        //     <RadioLabel className="text-primary-950 text-sm">
        //       {label}
        //     </RadioLabel>
        //   )}
        // </Radio>
        <Checkbox size="sm" isInvalid={false} isDisabled={false} value={value}>
          <CheckboxIndicator className="mr-2">
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          {label && (
            <CheckboxLabel className="text-primary-950 text-sm">
              {label}
            </CheckboxLabel>
          )}
        </Checkbox>
      )}
    </HStack>
  );
};

const SwitchRow = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <HStack className="items-center justify-between p-4 w-full border bprder-outline-200 rounded-md">
      <VStack className="items-start max-w-4/6" space="xs">
        <Text
          className="text-primary-950 font-normal"
          $md-fontSize="$md"
          $base-fontSize="$xs"
          fontFamily="$heading"
          numberOfLines={2}
        >
          {title}
        </Text>
        <Text
          className="text-primary-200 font-normal"
          $md-fontSize="$xs"
          $base-fontSize="$2xs"
          fontFamily="$body"
          numberOfLines={3}
        >
          {subTitle}
        </Text>
      </VStack>
      <Tooltip
        placement="top"
        trigger={(triggerProps) => {
          return <Switch $md-size="md" $base-size="sm" {...triggerProps} />;
        }}
      >
        <TooltipContent>
          <TooltipText $md-size="sm" $lg-size="md" $base-size="xs">
            Toggle to {subTitle}
          </TooltipText>
        </TooltipContent>
      </Tooltip>
    </HStack>
  );
};

const CustomSelect = ({
  // inputPlaceholder,
  label,
  // selectionData,
  validatorProps,
}: // defaultValue,
{
  inputPlaceholder: string;
  label: string;
  validatorProps: any;
  selectionData: Array<{ label: string; value: string }>;
  defaultValue?: string;
}) => {
  const {
    // field: { onChange, onBlur, value },
    fieldState: {
      error,
      // isTouched
    },
  } = useController({
    ...validatorProps,
  });

  return (
    <VStack className="w-full">
      <Text
        className="text-primary-950 font-normal mb-3"
        fontFamily="$heading"
        $base-fontSize="$xs"
        $md-fontSize="$sm"
      >
        {label}
      </Text>
      {/* <Select
        className="w-full"
        onClose={onBlur}
        value={value}
        onValueChange={(text: string) => {
          onChange(text);
          if (isTouched && validatorProps?.trigger) {
            validatorProps.trigger(validatorProps?.name);
          }
        }}
        defaultValue={defaultValue ?? ''}
      >
        <SelectTrigger variant="outline" size="sm">
          <SelectInput placeholder={inputPlaceholder} />
          <SelectIcon mr="$3">
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {selectionData.map((item: { label: string; value: string }) => (
              <SelectItem
                label={item.label}
                value={item.value}
                key={item.value}
              />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select> */}
      {validatorProps?.trigger && (
        <Text
          className="text-sm mt-1"
          color={error ? '$error600' : 'transparent'}
          fontFamily="$body"
        >
          {error ? error.message : ''}
        </Text>
      )}
    </VStack>
  );
};
export const ProfileView = () => {
  const [urlArray, setUrlArray] = React.useState<Array<string>>([
    'https://gluestack.com',
    'https://gluestack.com/twitter',
  ]);
  const [bioValue, _setBioValue] = React.useState<string>('');
  const { control, trigger, handleSubmit } = useForm<profileViewValidationType>(
    {
      mode: 'onBlur',
      defaultValues: {
        username: '',
        email: '',
        urls: ['https://gluestack.com', 'https://gluestack.com/twitter'],
      },
      resolver: zodResolver(profileViewValidationSchema),
    }
  );
  /* eslint-disable */
  const onSubmit = (data: profileViewValidationType) => {
    // console.log(data, 'form submission data');
  };
  const onError = (error: any) => {
    // console.log(error, 'form submission errors');
  };
  const handleAddUrl = () => {
    setUrlArray([...urlArray, '']);
  };

  return (
    <VStack className="flex-1 items-start">
      <Box className="w-full px-4" $base-maxWidth="$6/6" $lg-maxWidth="$4/6">
        <VStack className="w-full items-start" space="sm">
          <Text
            className="text-primary-950 font-bold"
            $base-fontSize="$md"
            $md-fontSize="$lg"
            fontFamily="$heading"
          >
            Profile
          </Text>
          <Text
            className="text-primary-200 font-normal"
            $base-fontSize="$xs"
            $md-fontSize="$sm"
            fontFamily="$body"
          >
            This is how other will see you on site
          </Text>
          <Divider className="w-full mt-5 bg-background-200 h-px" />
          <VStack className="mt-5 w-full">
            {/* <CustomInput
              label={'Username'}
              formControlProps={{
                w: '$full',
              }}
              inputProps={{
                mt: '$1',
              }}
              validatorProps={{
                control: control,
                trigger: trigger,
                name: 'username',
              }}
            >
              <InputField
                type="text"
                placeholder="gluestack@username"
                size="sm"
              />
            </CustomInput> */}
            <Text
              $base-fontSize="$2xs"
              $md-fontSize="$xs"
              fontFamily="$body"
              numberOfLines={2}
              className="mt-2 font-normal text-primary-200"
            >
              This is your public display name. It can be your real name or a
              pseudonym. You can only change this once every 30 days.
            </Text>
          </VStack>
          <VStack className="mt-5 w-full">
            <CustomSelect
              inputPlaceholder="Select a verified email to display"
              label="Email"
              selectionData={emails}
              validatorProps={{
                control: control,
                trigger: trigger,
                name: 'email',
              }}
            />
            <Text
              className="mt-2 font-normal text-primary-200"
              $base-fontSize="$2xs"
              $md-fontSize="$xs"
              fontFamily="$body"
              numberOfLines={2}
            >
              You can manage verified email addresses in your email settings.
            </Text>
          </VStack>
          <VStack className="mt-5 w-full">
            <Text
              className="text-primary-700 font-normal"
              $base-fontSize="$xs"
              $md-fontSize="$sm"
              fontFamily="$heading"
            >
              Bio
            </Text>
            {/* <Textarea
              className="h-16 w-full mt-2"
              size="sm"
              isReadOnly={false}
              isInvalid={false}
              isDisabled={false}
            >
              <TextareaInput
                placeholder="Tell us a little bit of your self"
                maxLength={256}
                value={bioValue}
                onChangeText={(text: string) => setBioValue(text)}
              />
            </Textarea> */}
            <Text
              className="w-full text-right font-normal mt-1"
              $base-fontSize="$3xs"
              $md-fontSize="$2xs"
              fontFamily="$body"
              color={
                bioValue?.replace(/<(.*?)>/g, '').length === 256
                  ? '$error600'
                  : '$primary200'
              }
            >
              {bioValue?.replace(/<(.*?)>/g, '').length || '0'}/256
            </Text>
            <Text
              className="text-primary-200 font-normal mt-2"
              $base-fontSize="$2xs"
              $md-fontSize="$xs"
              fontFamily="$body"
              numberOfLines={2}
            >
              You can @mention other users and organizations to link to them.
            </Text>
          </VStack>
          <VStack className="mt-5 w-full">
            <Text
              className="text-primary-700 font-normal"
              $base-fontSize="$xs"
              $md-fontSize="$sm"
              fontFamily="$heading"
            >
              URLs
            </Text>
            <Text
              className="text-primary-200 font-normal mt-2"
              $base-fontSize="$2xs"
              $md-fontSize="$xs"
              fontFamily="$body"
              numberOfLines={2}
            >
              Add links to your website, blog, or social media profiles.
            </Text>
            <VStack className="mt-2" space="md">
              {/* {urlArray.map((url, index) => (
                <CustomInput
                  key={index}
                  validatorProps={{
                    control: control,
                    trigger: trigger,
                    name: `urls.${index}`,
                  }}
                >
                  <InputField
                    type="text"
                    placeholder=""
                    value={url}
                    size="sm"
                  />
                </CustomInput>
              ))} */}
            </VStack>
            <Button
              className="mt-2 w-18 border-outline-200"
              variant="outline"
              size="sm"
              $md-p="$2"
              $base-p="$1"
              onPress={handleAddUrl}
            >
              <Text
                className="text-primary-700 font-semibold"
                $base-fontSize="$2xs"
                $md-fontSize="$xs"
                fontFamily="$heading"
              >
                Add Url
              </Text>
            </Button>
          </VStack>
          <Button
            className="mt-4 rounded-md p-3"
            variant="solid"
            size="lg"
            onPress={() => {
              handleSubmit(onSubmit, onError)();
            }}
          >
            <Text
              $base-fontSize="$xs"
              $md-fontSize="$sm"
              fontFamily="$heading"
              className="font-normal text-background-0"
            >
              Update Profile
            </Text>
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};
export const AccountView = () => {
  const { control, trigger, handleSubmit } = useForm<accountViewValidationType>(
    {
      mode: 'onBlur',
      defaultValues: {
        name: '',
        language: 'english',
      },
      resolver: zodResolver(accountViewValidationSchema),
    }
  );
  /* eslint-disable */
  const onSubmit = (data: profileViewValidationType) => {
    // console.log(data, 'form submission data');
  };
  const onError = (error: any) => {
    // console.log(error, 'form submission errors');
  };
  return (
    <VStack className="flex-1 items-start">
      <Box className="w-full px-4" $base-maxWidth="$6/6" $lg-maxWidth="$4/6">
        <VStack className="w-full items-start" space="sm">
          <Text
            className="text-primary-950 font-bold"
            $base-fontSize="$md"
            $md-fontSize="$lg"
            fontFamily="$heading"
          >
            Account
          </Text>
          <Text
            className="text-primary-200 font-normal"
            $base-fontSize="$xs"
            $md-fontSize="$sm"
            fontFamily="$body"
          >
            Update your account settings. Set your preferred language and
            timezone
          </Text>
          <Divider className="w-full mt-5 bg-background-200 h-px" />
          <VStack className="mt-5 w-full">
            {/* <CustomInput
              label={'Name'}
              formControlProps={{
                w: '$full',
              }}
              inputProps={{
                mt: '$1',
              }}
              validatorProps={{
                control: control,
                trigger: trigger,
                name: 'name',
              }}
            >
              <InputField type="text" placeholder="Your name" size="sm" />
            </CustomInput> */}
            <Text
              className="text-primary-200 font-normal mt-2"
              $base-fontSize="$2xs"
              $md-fontSize="$xs"
              fontFamily="$body"
              numberOfLines={2}
            >
              This is the name that will be displayed on your profile and in
              emails.
            </Text>
          </VStack>
          <VStack className="mt-5 w-full">
            <CustomSelect
              inputPlaceholder="Select language"
              label="Language"
              selectionData={languages}
              validatorProps={{
                control: control,
                trigger: trigger,
                name: 'language',
              }}
              defaultValue={languages[0].label}
            />
            <Text
              className="text-primary-200 font-normal mt-2"
              $base-fontSize="$2xs"
              $md-fontSize="$xs"
              fontFamily="$body"
              numberOfLines={2}
            >
              This is the language that will be used in the dashboard.
            </Text>
          </VStack>
          <Button
            className="mt-4 p-3 rounded-md"
            variant="solid"
            size="lg"
            onPress={() => {
              handleSubmit(onSubmit, onError)();
            }}
          >
            <Text
              className="text-background-0 font-normal"
              $base-fontSize="$xs"
              $md-fontSize="$sm"
              fontFamily="$heading"
            >
              Update account
            </Text>
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};
export const AppearanceView = () => {
  const { control, trigger, handleSubmit } =
    useForm<appearanceViewValidationType>({
      mode: 'onBlur',
      defaultValues: {
        font: 'inter',
      },
      resolver: zodResolver(appearanceViewValidationSchema),
    });
  /* eslint-disable */
  const onSubmit = (data: profileViewValidationType) => {
    // console.log(data, 'form submission data');
  };
  const onError = (error: any) => {
    // console.log(error, 'form submission errors');
  };
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  return (
    <VStack className="flex-1 items-start">
      <Box className="w-full px-4" $base-maxWidth="$6/6" $lg-maxWidth="$4/6">
        <VStack className="w-full items-start" space="sm">
          <Text
            className="text-primary-950 font-bold"
            $base-fontSize="$md"
            $md-fontSize="$lg"
            fontFamily="$heading"
          >
            Appearance
          </Text>
          <Text
            className="text-primary-200 font-normal"
            $base-fontSize="$xs"
            $md-fontSize="$sm"
            fontFamily="$body"
          >
            Customize the appearance of the app. Automatically switch between
            day and night themes.
          </Text>
          <Divider className="w-full mt-5 bg-background-200 h-px" />
          <VStack className="mt-5 w-full">
            <CustomSelect
              inputPlaceholder="Select Font"
              label="Font"
              selectionData={fonts}
              validatorProps={{
                control: control,
                trigger: trigger,
                name: 'font',
              }}
              defaultValue={fonts[0].label}
            />
            <Text
              className="text-primary-200 font-normal mt-2"
              $base-fontSize="$2xs"
              $md-fontSize="$xs"
              fontFamily="$body"
              numberOfLines={2}
            >
              Set the font you want to use in the dashboard.
            </Text>
          </VStack>
          <VStack className="w-full items-start mt-7" space="sm">
            <Text
              className="text-primary-950 font-normal"
              $base-fontSize="$xs"
              $md-fontSize="$sm"
              fontFamily="$heading"
            >
              Theme
            </Text>
            <Text
              $base-fontSize="$2xs"
              $md-fontSize="$xs"
              fontFamily="$body"
              className="text-primary-200 font-normal"
            >
              Select the theme for the dashboard.
            </Text>
            <HStack
              className="items-center justify-start-mt-3"
              $md-width="$4/5"
              $lg-width="$3/5"
              $base-width="$full"
              space="lg"
            >
              <VStack className="grow" space="sm">
                <Pressable
                  className="grow bg-background-0 p-1 rounded-md border-2"
                  onPress={() => setTheme('light')}
                  display="flex"
                  flexDirection="column"
                  borderColor={theme === 'light' ? '$primary950' : '$primary0'}
                >
                  <VStack
                    className="rounded-md w-full bg-background-100"
                    $base-gap="$1"
                    $md-gap="$2"
                    $md-p="$2"
                    $base-p="$1"
                  >
                    <VStack
                      className="bg-white rounded-md"
                      $md-p="$2"
                      $base-p="$1"
                      $base-gap="$1"
                      $md-gap="$2"
                    >
                      <SkeletonBox
                        width="$3/5"
                        height="$3"
                        $md-height="$3"
                        $base-height="$2"
                      />
                      <SkeletonBox
                        width="$3/5"
                        height="$3"
                        $md-height="$3"
                        $base-height="$2"
                      />
                    </VStack>
                    <HStack
                      className="bg-white rounded-md items-center"
                      $md-p="$2"
                      $base-p="$1"
                      $base-gap="$1"
                      $md-gap="$2"
                    >
                      <SkeletonCircle
                        size="$6"
                        $md-w="$6"
                        $md-h="$6"
                        $base-w="$3"
                        $base-h="$3"
                      />
                      <SkeletonBox
                        width="$3/5"
                        height="$3"
                        $base-h="$2"
                        $md-h="$3"
                      />
                    </HStack>
                    <HStack
                      className="bg-white rounded-md items-center"
                      $md-p="$2"
                      $base-p="$1"
                      $base-gap="$1"
                      $md-gap="$2"
                    >
                      <SkeletonCircle
                        size="$6"
                        $md-w="$6"
                        $md-h="$6"
                        $base-w="$3"
                        $base-h="$3"
                      />
                      <SkeletonBox
                        width="$3/5"
                        height="$3"
                        $md-h="$3"
                        $base-h="$2"
                      />
                    </HStack>
                  </VStack>
                </Pressable>
                <Text
                  className="text-primary-950 font-normal text-center"
                  $base-fontSize="$xs"
                  $md-fontSize="$sm"
                  fontFamily="$heading"
                >
                  Light
                </Text>
              </VStack>
              <VStack className="grow" space="sm">
                <Pressable
                  className="grow p-1 bg-background-0 rounded-md border-2 flex flex-col"
                  onPress={() => setTheme('dark')}
                  borderColor={theme === 'dark' ? '$primary950' : '$primary0'}
                >
                  <VStack
                    className="rounded-md w-full bg-trueGray-800"
                    borderRadius="$md"
                    $base-gap="$1"
                    $md-gap="$2"
                    $md-p="$2"
                    $base-p="$1"
                    w="$full"
                  >
                    <VStack
                      className="bg-trueGray-700 rounded-md"
                      $md-p="$2"
                      $base-p="$1"
                      $base-gap="$1"
                      $md-gap="$2"
                    >
                      <SkeletonBox
                        width="$3/5"
                        height="$3"
                        $md-height="$3"
                        $base-height="$2"
                        bg="$trueGray500"
                      />
                      <SkeletonBox
                        width="$3/5"
                        height="$3"
                        $md-height="$3"
                        $base-height="$2"
                        bg="$trueGray500"
                      />
                    </VStack>
                    <HStack
                      className="bg-trueGray-700 rounded-md items-center"
                      $md-p="$2"
                      $base-p="$1"
                      $base-gap="$1"
                      $md-gap="$2"
                    >
                      <SkeletonCircle
                        size="$6"
                        $md-w="$6"
                        $md-h="$6"
                        $base-w="$3"
                        $base-h="$3"
                        bg="$trueGray500"
                      />
                      <SkeletonBox
                        width="$3/5"
                        height="$3"
                        $base-h="$2"
                        $md-h="$3"
                        bg="$trueGray500"
                      />
                    </HStack>
                    <HStack
                      className="bg-trueGray-700 rounded-md items-center"
                      $md-p="$2"
                      $base-p="$1"
                      $base-gap="$1"
                      $md-gap="$2"
                    >
                      <SkeletonCircle
                        size="$6"
                        $md-w="$6"
                        $md-h="$6"
                        $base-w="$3"
                        $base-h="$3"
                        bg="$trueGray500"
                      />
                      <SkeletonBox
                        width="$3/5"
                        height="$3"
                        $md-h="$3"
                        $base-h="$2"
                        bg="$trueGray500"
                      />
                    </HStack>
                  </VStack>
                </Pressable>
                <Text
                  className="text-primary-950 font-normal text-center"
                  $base-fontSize="$xs"
                  $md-fontSize="$sm"
                  fontFamily="$heading"
                >
                  Dark
                </Text>
              </VStack>
            </HStack>
          </VStack>
          <Button
            className="mt-4 rounded-md p-3 mt-4"
            variant="solid"
            size="lg"
            onPress={() => {
              handleSubmit(onSubmit, onError)();
            }}
          >
            <Text
              className="text-background-0 font-normal"
              $base-fontSize="$xs"
              $md-fontSize="$sm"
              fontFamily="$heading"
            >
              Update preferences
            </Text>
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};
export const NotificationsView = () => {
  const [notificationType, setNotificationType] = React.useState<string>('');
  const [errorMsg, setErrorMsg] = React.useState<string>('');
  const onNotificationTypeChange = (value: any) => {
    if (value?.length) {
      setNotificationType(value);
      setErrorMsg('');
    }
  };
  const onSubmit = () => {
    if (notificationType === '') {
      setErrorMsg('You need to select a notification type.');
    } else {
      setErrorMsg('');
    }
  };
  return (
    <VStack className="flex-1 items-start">
      <Box className="w-full px-4" $base-maxWidth="$6/6" $lg-maxWidth="$4/6">
        <VStack className="w-full items-start" space="sm">
          <Text
            className="text-primary-950 font-bold"
            $base-fontSize="$md"
            $md-fontSize="$lg"
            fontFamily="$heading"
          >
            Notifications
          </Text>
          <Text
            className="text-primary-200 font-normal"
            $base-fontSize="$xs"
            $md-fontSize="$sm"
            fontFamily="$body"
          >
            Configure how you receive notifications.
          </Text>
          <Divider className="w-full mt-5 bg-background-200 h-px" />
          <Text
            className="text-primary-950 font-normal mt-5"
            $base-fontSize="$xs"
            $md-fontSize="$sm"
            fontFamily="$body"
          >
            Notify me about...
          </Text>
          <VStack>
            {/* <RadioGroup
              onChange={(value: any) => onNotificationTypeChange(value)}
              value={notificationType}
            >
              <VStack className="mt-3 items-start" space="md">
                {notifications.map((iterator) => (
                  <CustomCheck
                    label={iterator}
                    key={iterator}
                    variant="radio"
                    value={iterator}
                  />
                ))}
              </VStack>
            </RadioGroup> */}
            <Text
              className="mt-1"
              color={errorMsg?.length ? '$error600' : 'transparent'}
              fontSize="$sm"
              fontFamily="$body"
            >
              {errorMsg?.length ? errorMsg : ''}
            </Text>
          </VStack>
          <Text
            className="mt-5 font-bold text-primary-950"
            $base-fontSize="$md"
            $md-fontSize="$lg"
            fontFamily="$heading"
          >
            Email Notifications
          </Text>
          <VStack className="w-full mt-3" space="lg">
            {emailNotifications.map((iterator) => (
              <SwitchRow
                subTitle={iterator.subTitle}
                title={iterator.title}
                key={iterator.title}
              />
            ))}
          </VStack>
          <HStack className="items-start mt-5" space="xs">
            <CustomCheck variant="checkbox" value={'mobile-settings'} />
            <VStack className="items-start max-w-5/6" space="xs">
              <Text
                className="text-primary-950 font-normal"
                $base-fontSize="$xs"
                $md-fontSize="$sm"
                fontFamily="$body"
              >
                Use different settings for my mobile devices
              </Text>
              <Text
                className="text-primary-200 font-normal"
                $base-fontSize="$2xs"
                $md-fontSize="$xs"
                fontFamily="$body"
                numberOfLines={3}
              >
                You can manage your mobile notifications in the mobile settings
                page.
              </Text>
            </VStack>
          </HStack>
          <Button
            className="mt-4 rounded-md p-3"
            variant="solid"
            size="lg"
            onPress={onSubmit}
          >
            <Text
              className="text-background-0 font-normal"
              $base-fontSize="$xs"
              $md-fontSize="$sm"
              fontFamily="$heading"
            >
              Update notifications
            </Text>
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};
export const DisplayView = () => {
  return (
    <VStack className="flex-1 items-start">
      <Box className="w-full px-4" $base-maxWidth="$6/6" $lg-maxWidth="$4/6">
        <VStack className="w-full items-start" space="sm">
          <Text
            className="text-primary-950 font-bold"
            $base-fontSize="$md"
            $md-fontSize="$lg"
            fontFamily="$heading"
          >
            Display
          </Text>
          <Text
            className="text-primary-200 font-normal"
            $base-fontSize="$xs"
            $md-fontSize="$sm"
            fontFamily="$body"
          >
            Turn items on or off to control what's displayed in the app.
          </Text>
          <Divider className="w-full mt-5 bg-background-200 h-px" />
          <VStack className="mt-5" space="sm">
            <Text
              className="text-primary-950 font-bold"
              $base-fontSize="$md"
              $md-fontSize="$lg"
              fontFamily="$heading"
            >
              Sidebar
            </Text>
            <Text
              className="text-primary-200 font-normal"
              $base-fontSize="$xs"
              $md-fontSize="$sm"
              fontFamily="$body"
            >
              Select the items you want to display in the sidebar.
            </Text>
          </VStack>
          <VStack className="mt-3" space="sm">
            {displaySidebarItems.map((iterator) => (
              <CustomCheck
                value={iterator}
                variant="checkbox"
                label={iterator}
                key={iterator}
              />
            ))}
          </VStack>
          <Button className="mt-4 rounded-md p-3" variant="solid" size="lg">
            <Text
              className="text-background-0 font-normal"
              $base-fontSize="$xs"
              $md-fontSize="$sm"
              fontFamily="$heading"
            >
              Update display
            </Text>
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};

interface SidebarItemProps {
  key: string;
  value: string;
}
interface NestedSidebarItemProps extends SidebarItemProps {
  key: string;
  value: string;
  icon: any;
}
interface SidebarProps {
  sidebarItems: Array<SidebarItemProps>;
  itemProps?: any;
  onSelected: (item: SidebarItemProps) => void;
  isNested?: boolean;
  FabSidebarProps?: any;
}
export const Sidebar = ({
  sidebarItems,
  itemProps,
  onSelected,
  isNested = false,
  FabSidebarProps,
}: SidebarProps) => {
  const [selected, setSelected] = React.useState<SidebarItemProps>(
    sidebarItems[0]
  );
  const handlePress = (itemInput: SidebarItemProps) => {
    setSelected(itemInput);
    onSelected(itemInput);
  };
  const handleViewChange = (selected: any) => {
    const itemInput = {
      key: selected,
      value: selected,
    };
    onSelected(itemInput);
  };
  const [isMobileScreen] = useMediaQuery({ maxWidth: 760 });
  if (isMobileScreen) {
    return (
      <FabSidebar
        onViewChange={handleViewChange}
        sidebarData={sidebarItems}
        isNested={isNested}
        {...FabSidebarProps}
      />
    );
  }
  return (
    // <ScrollView className="w-full h-full">
    <VStack className="w-full h-full grow" space={isNested ? '3xl' : 'sm'}>
      {!isNested ? (
        <>
          {sidebarItems.map((item) => (
            <Pressable
              className="p-2 w-full rounded-md"
              $active-bg="$background100"
              key={item.key}
              onPress={() => handlePress(item)}
              bg={item.key === selected.key ? '$background100' : ''}
              {...itemProps}
            >
              {({ hovered }) => (
                <Text
                  className="text-primary-950 px-4"
                  fontSize="$md"
                  fontFamily="$body"
                  underline={hovered}
                >
                  {item.value}
                </Text>
              )}
            </Pressable>
          ))}
        </>
      ) : (
        <>
          {sidebarItems.map((item: any) => (
            <VStack>
              <Text
                className="text-primary-950 mx-4"
                $lg-fontSize="$lg"
                $md-fontSize="$md"
                fontWeight="$bold"
                fontFamily="$heading"
              >
                {item?.heading}
              </Text>
              <VStack
                className="w-full grow mt-2"
                space="sm"
                key={item?.heading}
              >
                {item?.subItems?.map((item: NestedSidebarItemProps) => (
                  <Pressable
                    className="w-full p-2 rounded-md"
                    $active-bg="$background100"
                    $hover-bg="$background100"
                    key={item.key}
                    onPress={() => handlePress(item)}
                    bg={item.key === selected.key ? '$background100' : ''}
                    {...itemProps}
                  >
                    <HStack className="items-center ml-1.5" space="sm">
                      {item?.icon && <Icon as={item.icon} />}
                      <Text
                        className="text-primary-950"
                        $lg-fontSize="$md"
                        $md-fontSize="$sm"
                        fontFamily="$body"
                      >
                        {item.value}
                      </Text>
                    </HStack>
                  </Pressable>
                ))}
              </VStack>
            </VStack>
          ))}
        </>
      )}
    </VStack>
    // </ScrollView>
  );
};

const FabSidebar = ({
  onViewChange,
  sidebarData,
  isNested,
  ...props
}: {
  sidebarData: any;
  onViewChange: (view: SidebarItemProps) => void;
  isNested: boolean;
}) => {
  const [selected, setSelected] = React.useState(new Set([]));
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <></>
    // <Menu
    //   placement="top left"
    //   selectionMode="single"
    //   borderWidth={1}
    //   selectedKeys={selected}
    //   closeOnSelect={true}
    //   isOpen={isOpen}
    //   onPointerLeave={() => setIsOpen(false)}
    //   onOpen={() => setIsOpen(true)}
    //   onSelectionChange={(keys: any) => {
    //     setSelected(keys);
    //     onViewChange(keys?.currentKey);
    //     setIsOpen(false);
    //   }}
    //   maxHeight="$64"
    //   overflow="scroll"
    //   trigger={({ ...triggerProps }) => {
    //     return (
    //       <Fab
    //         size="md"
    //         placement="bottom right"
    //         isHovered={false}
    //         isDisabled={false}
    //         isPressed={false}
    //         renderInPortal={true}
    //         position="fixed"
    //         zIndex={999}
    //         minWidth="$10"
    //         minHeight="$10"
    //         {...triggerProps}
    //         {...props}
    //       >
    //         <FabIcon as={MenuIcon} />
    //       </Fab>
    //     );
    //   }}
    // >
    //   {!isNested
    //     ? sidebarData.map((item: SidebarItemProps) => (
    //         <MenuItem key={item.key} textValue={item.value}>
    //           <MenuItemLabel size="sm" ml="$2">
    //             {item.value}
    //           </MenuItemLabel>
    //         </MenuItem>
    //       ))
    //     : sidebarData.map((sidebarItem: any) => {
    //         return sidebarItem.subItems.map((item: NestedSidebarItemProps) => (
    //           <MenuItem key={item.key} textValue={item.value}>
    //             {item?.icon && <Icon as={item.icon} />}
    //             <MenuItemLabel size="sm" ml="$2">
    //               {item.value}
    //             </MenuItemLabel>
    //           </MenuItem>
    //         ));
    //       })}
    // </Menu>
  );
};
