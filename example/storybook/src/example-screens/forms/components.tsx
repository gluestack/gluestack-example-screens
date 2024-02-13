import {
  Box,
  Text,
  VStack,
  Divider,
  InputField,
  Select,
  SelectTrigger,
  Icon,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  SelectInput,
  ChevronDownIcon,
  Textarea,
  TextareaInput,
  Button,
  HStack,
  RadioGroup,
  Radio,
  RadioIcon,
  RadioLabel,
  CircleIcon,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckIcon,
  Switch,
  Pressable,
  useMediaQuery,
  ScrollView,
  Fab,
  Menu,
  MenuItem,
  MenuItemLabel,
  FabIcon,
  MenuIcon,
} from '@gluestack-ui/themed';
import React from 'react';
import CustomInput from '../components/CustomInput';
import { RadioIndicator } from '@gluestack-ui/themed';
import {
  displaySidebarItems,
  emailNotifications,
  emails,
  fonts,
  languages,
  notifications,
} from './constants';
import { SkeletonBox, SkeletonCircle } from '../components/SkeletonComponent';

export type ViewType =
  | 'profile'
  | 'account'
  | 'appearance'
  | 'notifications'
  | 'display';

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
        <Radio value={value} size="sm" isInvalid={false} isDisabled={false}>
          <RadioIndicator mr="$2">
            <RadioIcon as={CircleIcon} strokeWidth={1} />
          </RadioIndicator>
          {label && (
            <RadioLabel color="$primary950" fontSize="$sm">
              {label}
            </RadioLabel>
          )}
        </Radio>
      ) : (
        <Checkbox size="sm" isInvalid={false} isDisabled={false} value={value}>
          <CheckboxIndicator mr="$2">
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          {label && (
            <CheckboxLabel color="$primary950" fontSize="$sm">
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
    <HStack
      alignItems="center"
      justifyContent="space-between"
      p="$4"
      width="$full"
      borderWidth="$1"
      borderColor="$border200"
      borderRadius="$md"
    >
      <VStack alignItems="flex-start" space="xs" maxWidth="$4/6">
        <Text
          $md-fontSize="$md"
          $base-fontSize="$xs"
          fontFamily="$heading"
          color="$primary950"
          fontWeight="$normal"
          numberOfLines={2}
        >
          {title}
        </Text>
        <Text
          $md-fontSize="$xs"
          $base-fontSize="$2xs"
          fontFamily="$body"
          color="$primary200"
          fontWeight="$normal"
          numberOfLines={3}
        >
          {subTitle}
        </Text>
      </VStack>
      <Switch $md-size="md" $base-size="sm" />
    </HStack>
  );
};

const CustomSelect = ({
  inputPlaceholder,
  label,
  selectionData,
}: {
  inputPlaceholder: string;
  label: string;
  selectionData: Array<{ label: string; value: string }>;
}) => {
  return (
    <VStack w="$full">
      <Text
        fontFamily="$heading"
        color="$primary950"
        fontWeight="$normal"
        mb="$3"
        $base-fontSize="$xs"
        $md-fontSize="$sm"
      >
        {label}
      </Text>
      <Select w="$full">
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
      </Select>
    </VStack>
  );
};
export const ProfileView = () => {
  const [urlArray, setUrlArray] = React.useState<Array<string>>([
    'https://gluestack.com',
    'https://gluestack.com/twitter',
  ]);
  const handleAddUrl = () => {
    setUrlArray((prev) => {
      return [...prev, ''];
    });
  };
  return (
    <VStack flex={1} alignItems="flex-start">
      <Box w="$full" $base-maxWidth="$6/6" $lg-maxWidth="$4/6" px="$4">
        <VStack w="$full" alignItems="flex-start" space="sm">
          <Text
            $base-fontSize="$md"
            $md-fontSize="$lg"
            fontFamily="$heading"
            color="$primary950"
            fontWeight="$bold"
          >
            Profile
          </Text>
          <Text
            $base-fontSize="$xs"
            $md-fontSize="$sm"
            fontFamily="$body"
            color="$primary200"
            fontWeight="$normal"
          >
            This is how other will see you on site
          </Text>
          <Divider w="$full" mt="$5" bg="$background200" h="$px" />
          <VStack mt="$5" w="$full">
            <CustomInput
              label={'Username'}
              formControlProps={{
                w: '$full',
              }}
              inputProps={{
                mt: '$1',
              }}
            >
              <InputField type="text" placeholder="gluestack" size="sm" />
            </CustomInput>
            <Text
              $base-fontSize="$2xs"
              $md-fontSize="$xs"
              fontFamily="$body"
              color="$primary200"
              fontWeight="$normal"
              numberOfLines={2}
              mt="$2"
            >
              This is your public display name. It can be your real name or a
              pseudonym. You can only change this once every 30 days.
            </Text>
          </VStack>
          <VStack mt="$5" w="$full">
            <CustomSelect
              inputPlaceholder="Select a verified email to display"
              label="Email"
              selectionData={emails}
            />
            <Text
              $base-fontSize="$2xs"
              $md-fontSize="$xs"
              fontFamily="$body"
              color="$primary200"
              fontWeight="$normal"
              numberOfLines={2}
              mt="$2"
            >
              You can manage verified email addresses in your email settings.
            </Text>
          </VStack>
          <VStack mt="$5" w="$full">
            <Text
              $base-fontSize="$xs"
              $md-fontSize="$sm"
              fontFamily="$heading"
              color="$primary700"
              fontWeight="$normal"
            >
              Bio
            </Text>
            <Textarea
              size="sm"
              isReadOnly={false}
              isInvalid={false}
              isDisabled={false}
              h="$16"
              w="$full"
              mt="$2"
            >
              <TextareaInput placeholder="Tell us a little bit of your self" />
            </Textarea>
            <Text
              $base-fontSize="$2xs"
              $md-fontSize="$xs"
              fontFamily="$body"
              color="$primary200"
              fontWeight="$normal"
              numberOfLines={2}
              mt="$2"
            >
              You can @mention other users and organizations to link to them.
            </Text>
          </VStack>
          <VStack mt="$5" w="$full">
            <Text
              $base-fontSize="$xs"
              $md-fontSize="$sm"
              fontFamily="$heading"
              color="$primary700"
              fontWeight="$normal"
            >
              URLs
            </Text>
            <Text
              $base-fontSize="$2xs"
              $md-fontSize="$xs"
              fontFamily="$body"
              color="$primary200"
              fontWeight="$normal"
              numberOfLines={2}
              mt="$2"
            >
              Add links to your website, blog, or social media profiles.
            </Text>
            <VStack space="md" mt="$2">
              {urlArray.map((url, index) => (
                <CustomInput key={index}>
                  <InputField
                    type="text"
                    placeholder=""
                    value={url}
                    size="sm"
                  />
                </CustomInput>
              ))}
            </VStack>
            <Button
              variant="outline"
              size="sm"
              mt="$2"
              w="$18"
              borderColor="$border200"
              $md-p="$2"
              $base-p="$1"
              onPress={handleAddUrl}
            >
              <Text
                $base-fontSize="$2xs"
                $md-fontSize="$xs"
                fontFamily="$heading"
                color="$primary700"
                fontWeight="$semibold"
              >
                Add Url
              </Text>
            </Button>
          </VStack>
          <Button variant="solid" size="lg" mt="$4" borderRadius="$md" p="$3">
            <Text
              $base-fontSize="$xs"
              $md-fontSize="$sm"
              fontFamily="$heading"
              color="$background0"
              fontWeight="$normal"
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
  return (
    <VStack flex={1} alignItems="flex-start">
      <Box w="$full" $base-maxWidth="$6/6" $lg-maxWidth="$4/6" px="$4">
        <VStack w="$full" alignItems="flex-start" space="sm">
          <Text
            $base-fontSize="$md"
            $md-fontSize="$lg"
            fontFamily="$heading"
            color="$primary950"
            fontWeight="$bold"
          >
            Account
          </Text>
          <Text
            $base-fontSize="$xs"
            $md-fontSize="$sm"
            fontFamily="$body"
            color="$primary200"
            fontWeight="$normal"
          >
            Update your account settings. Set your preferred language and
            timezone
          </Text>
          <Divider w="$full" mt="$5" bg="$background200" h="$px" />
          <VStack mt="$5" w="$full">
            <CustomInput
              label={'Name'}
              formControlProps={{
                w: '$full',
              }}
              inputProps={{
                mt: '$1',
              }}
            >
              <InputField type="text" placeholder="Your name" size="sm" />
            </CustomInput>
            <Text
              $base-fontSize="$2xs"
              $md-fontSize="$xs"
              fontFamily="$body"
              color="$primary200"
              fontWeight="$normal"
              numberOfLines={2}
              mt="$2"
            >
              This is the name that will be displayed on your profile and in
              emails.
            </Text>
          </VStack>
          <VStack mt="$5" w="$full">
            <CustomSelect
              inputPlaceholder="Select language"
              label="Language"
              selectionData={languages}
            />
            <Text
              $base-fontSize="$2xs"
              $md-fontSize="$xs"
              fontFamily="$body"
              color="$primary200"
              fontWeight="$normal"
              numberOfLines={2}
              mt="$2"
            >
              This is the language that will be used in the dashboard.
            </Text>
          </VStack>

          <Button variant="solid" size="lg" mt="$4" borderRadius="$md" p="$3">
            <Text
              $base-fontSize="$xs"
              $md-fontSize="$sm"
              fontFamily="$heading"
              color="$background0"
              fontWeight="$normal"
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
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  return (
    <VStack flex={1} alignItems="flex-start">
      <Box w="$full" $base-maxWidth="$6/6" $lg-maxWidth="$4/6" px="$4">
        <VStack w="$full" alignItems="flex-start" space="sm">
          <Text
            $base-fontSize="$md"
            $md-fontSize="$lg"
            fontFamily="$heading"
            color="$primary950"
            fontWeight="$bold"
          >
            Appearance
          </Text>
          <Text
            $base-fontSize="$xs"
            $md-fontSize="$sm"
            fontFamily="$body"
            color="$primary200"
            fontWeight="$normal"
          >
            Customize the appearance of the app. Automatically switch between
            day and night themes.
          </Text>
          <Divider w="$full" mt="$5" bg="$background200" h="$px" />
          <VStack mt="$5" w="$full">
            <CustomSelect
              inputPlaceholder="Select Font"
              label="Font"
              selectionData={fonts}
            />
            <Text
              $base-fontSize="$2xs"
              $md-fontSize="$xs"
              fontFamily="$body"
              color="$primary200"
              fontWeight="$normal"
              numberOfLines={2}
              mt="$2"
            >
              Set the font you want to use in the dashboard.
            </Text>
          </VStack>
          <VStack w="$full" alignItems="flex-start" space="sm" mt="$7">
            <Text
              $base-fontSize="$xs"
              $md-fontSize="$sm"
              fontFamily="$heading"
              color="$primary950"
              fontWeight="$normal"
            >
              Theme
            </Text>
            <Text
              $base-fontSize="$2xs"
              $md-fontSize="$xs"
              fontFamily="$body"
              color="$primary200"
              fontWeight="$normal"
            >
              Select the theme for the dashboard.
            </Text>
            <HStack
              alignItems="center"
              $md-width="$4/5"
              $lg-width="$3/5"
              $base-width="$full"
              space="lg"
              justifyContent="flex-start"
              mt="$3"
            >
              <VStack flexGrow={1} space="sm">
                <Pressable
                  flexGrow={1}
                  onPress={() => setTheme('light')}
                  display="flex"
                  flexDirection="column"
                  bg="$background0"
                  p="$1"
                  borderRadius="$md"
                  borderWidth="$2"
                  borderColor={theme === 'light' ? '$primary950' : '$primary0'}
                >
                  <VStack
                    borderRadius="$md"
                    $base-gap="$1"
                    $md-gap="$2"
                    $md-p="$2"
                    $base-p="$1"
                    w="$full"
                    bg="$background100"
                  >
                    <VStack
                      bg="$white"
                      $md-p="$2"
                      $base-p="$1"
                      borderRadius="$md"
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
                      bg="$white"
                      $md-p="$2"
                      $base-p="$1"
                      borderRadius="$md"
                      $base-gap="$1"
                      $md-gap="$2"
                      alignItems="center"
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
                      bg="$white"
                      $md-p="$2"
                      $base-p="$1"
                      borderRadius="$md"
                      $base-gap="$1"
                      $md-gap="$2"
                      alignItems="center"
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
                  $base-fontSize="$xs"
                  $md-fontSize="$sm"
                  fontFamily="$heading"
                  color="$primary950"
                  fontWeight="$normal"
                  textAlign="center"
                >
                  Light
                </Text>
              </VStack>
              <VStack flexGrow={1} space="sm">
                <Pressable
                  flexGrow={1}
                  onPress={() => setTheme('dark')}
                  display="flex"
                  flexDirection="column"
                  p="$1"
                  bg="$background0"
                  borderRadius="$md"
                  borderWidth="$2"
                  borderColor={theme === 'dark' ? '$primary950' : '$primary0'}
                >
                  <VStack
                    borderRadius="$md"
                    $base-gap="$1"
                    $md-gap="$2"
                    $md-p="$2"
                    $base-p="$1"
                    w="$full"
                    bg="$trueGray800"
                  >
                    <VStack
                      bg="$trueGray700"
                      $md-p="$2"
                      $base-p="$1"
                      borderRadius="$md"
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
                      bg="$trueGray700"
                      $md-p="$2"
                      $base-p="$1"
                      borderRadius="$md"
                      $base-gap="$1"
                      $md-gap="$2"
                      alignItems="center"
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
                      bg="$trueGray700"
                      $md-p="$2"
                      $base-p="$1"
                      borderRadius="$md"
                      $base-gap="$1"
                      $md-gap="$2"
                      alignItems="center"
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
                  $base-fontSize="$xs"
                  $md-fontSize="$sm"
                  fontFamily="$heading"
                  color="$primary950"
                  fontWeight="$normal"
                  textAlign="center"
                >
                  Dark
                </Text>
              </VStack>
            </HStack>
          </VStack>
          <Button variant="solid" size="lg" mt="$4" borderRadius="$md" p="$3">
            <Text
              $base-fontSize="$xs"
              $md-fontSize="$sm"
              fontFamily="$heading"
              color="$background0"
              fontWeight="$normal"
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
  return (
    <VStack flex={1} alignItems="flex-start">
      <Box w="$full" $base-maxWidth="$6/6" $lg-maxWidth="$4/6" px="$4">
        <VStack w="$full" alignItems="flex-start" space="sm">
          <Text
            $base-fontSize="$md"
            $md-fontSize="$lg"
            fontFamily="$heading"
            color="$primary950"
            fontWeight="$bold"
          >
            Notifications
          </Text>
          <Text
            $base-fontSize="$xs"
            $md-fontSize="$sm"
            fontFamily="$body"
            color="$primary200"
            fontWeight="$normal"
          >
            Configure how you receive notifications.
          </Text>
          <Divider w="$full" mt="$5" bg="$background200" h="$px" />
          <Text
            $base-fontSize="$xs"
            $md-fontSize="$sm"
            fontFamily="$body"
            color="$primary950"
            fontWeight="$normal"
            mt="$5"
          >
            Notify me about...
          </Text>
          <RadioGroup>
            <VStack mt="$3" alignItems="flex-start" space="md">
              {notifications.map((iterator) => (
                <CustomCheck
                  label={iterator}
                  key={iterator}
                  variant="radio"
                  value={iterator}
                />
              ))}
            </VStack>
          </RadioGroup>
          <Text
            $base-fontSize="$md"
            $md-fontSize="$lg"
            fontFamily="$heading"
            color="$primary950"
            fontWeight="$bold"
            mt="$5"
          >
            Email Notifications
          </Text>
          <VStack width="$full" space="lg" mt="$3">
            {emailNotifications.map((iterator) => (
              <SwitchRow
                subTitle={iterator.subTitle}
                title={iterator.title}
                key={iterator.title}
              />
            ))}
          </VStack>
          <HStack alignItems="flex-start" mt="$5" space="xs">
            <CustomCheck variant="checkbox" value={'mobile-settings'} />
            <VStack alignItems="flex-start" space="xs" maxWidth="$5/6">
              <Text
                $base-fontSize="$xs"
                $md-fontSize="$sm"
                fontFamily="$body"
                color="$primary950"
                fontWeight="$normal"
              >
                Use different settings for my mobile devices
              </Text>
              <Text
                $base-fontSize="$2xs"
                $md-fontSize="$xs"
                fontFamily="$body"
                color="$primary200"
                fontWeight="$normal"
                numberOfLines={3}
              >
                You can manage your mobile notifications in the mobile settings
                page.
              </Text>
            </VStack>
          </HStack>
          <Button variant="solid" size="lg" mt="$4" borderRadius="$md" p="$3">
            <Text
              $base-fontSize="$xs"
              $md-fontSize="$sm"
              fontFamily="$heading"
              color="$background0"
              fontWeight="$normal"
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
    <VStack flex={1} alignItems="flex-start">
      <Box w="$full" $base-maxWidth="$6/6" $lg-maxWidth="$4/6" px="$4">
        <VStack w="$full" alignItems="flex-start" space="sm">
          <Text
            $base-fontSize="$md"
            $md-fontSize="$lg"
            fontFamily="$heading"
            color="$primary950"
            fontWeight="$bold"
          >
            Display
          </Text>
          <Text
            $base-fontSize="$xs"
            $md-fontSize="$sm"
            fontFamily="$body"
            color="$primary200"
            fontWeight="$normal"
          >
            Turn items on or off to control what's displayed in the app.
          </Text>
          <Divider w="$full" mt="$5" bg="$background200" h="$px" />
          <VStack mt="$5" space="sm">
            <Text
              $base-fontSize="$md"
              $md-fontSize="$lg"
              fontFamily="$heading"
              color="$primary950"
              fontWeight="$bold"
            >
              Sidebar
            </Text>
            <Text
              $base-fontSize="$xs"
              $md-fontSize="$sm"
              fontFamily="$body"
              color="$primary200"
              fontWeight="$normal"
            >
              Select the items you want to display in the sidebar.
            </Text>
          </VStack>
          <VStack mt="$3" space="sm">
            {displaySidebarItems.map((iterator) => (
              <CustomCheck
                value={iterator}
                variant="checkbox"
                label={iterator}
                key={iterator}
              />
            ))}
          </VStack>
          <Button variant="solid" size="lg" mt="$4" borderRadius="$md" p="$3">
            <Text
              $base-fontSize="$xs"
              $md-fontSize="$sm"
              fontFamily="$heading"
              color="$background0"
              fontWeight="$normal"
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
}
export const Sidebar = ({
  sidebarItems,
  itemProps,
  onSelected,
  isNested = false,
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
      />
    );
  }
  return (
    <ScrollView w="$full" h="$full">
      <VStack w="$full" h="$full" space={isNested ? '3xl' : 'sm'} flexGrow={1}>
        {!isNested ? (
          <>
            {sidebarItems.map((item) => (
              <Pressable
                w="$full"
                p="$2"
                $active-bg="$background100"
                $hover-bg="$background100"
                key={item.key}
                onPress={() => handlePress(item)}
                bg={item.key === selected.key ? '$background100' : ''}
                borderRadius="$md"
                {...itemProps}
              >
                <HStack>
                  <Text
                    color="$primary950"
                    fontSize="$md"
                    px="$4"
                    fontFamily="$body"
                  >
                    {item.value}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </>
        ) : (
          <>
            {sidebarItems.map((item: any) => (
              <VStack>
                <Text
                  color="$primary950"
                  fontSize="$lg"
                  fontWeight="$bold"
                  mx="$4"
                  fontFamily="$heading"
                >
                  {item?.heading}
                </Text>
                <VStack
                  w="$full"
                  flexGrow={1}
                  space="sm"
                  key={item?.heading}
                  mt="$2"
                >
                  {item?.subItems?.map((item: NestedSidebarItemProps) => (
                    <Pressable
                      w="$full"
                      p="$2"
                      $active-bg="$background100"
                      $hover-bg="$background100"
                      key={item.key}
                      onPress={() => handlePress(item)}
                      bg={item.key === selected.key ? '$background100' : ''}
                      borderRadius="$md"
                      {...itemProps}
                    >
                      <HStack alignItems="center" space="sm" ml="$1.5">
                        {item?.icon && <Icon as={item.icon} />}
                        <Text
                          color="$primary950"
                          fontSize="$md"
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
    </ScrollView>
  );
};

const FabSidebar = ({
  onViewChange,
  sidebarData,
  isNested,
}: {
  sidebarData: any;
  isNested: boolean;
  onViewChange: (view: SidebarItemProps) => void;
}) => {
  const [selected, setSelected] = React.useState(new Set([]));
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <Menu
      placement="top left"
      selectionMode="single"
      borderWidth={1}
      selectedKeys={selected}
      closeOnSelect={true}
      isOpen={isOpen}
      onPointerLeave={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      onSelectionChange={(keys: any) => {
        setSelected(keys);
        onViewChange(keys?.currentKey);
        setIsOpen(false);
      }}
      trigger={({ ...triggerProps }) => {
        return (
          <Fab
            size="md"
            placement="bottom right"
            isHovered={false}
            isDisabled={false}
            isPressed={false}
            renderInPortal={true}
            position="fixed"
            zIndex={999}
            {...triggerProps}
          >
            <FabIcon as={MenuIcon} />
          </Fab>
        );
      }}
    >
      {!isNested ? (
        <>
          {sidebarData.map((item: SidebarItemProps) => (
            <MenuItem key={item.key} textValue={item.value}>
              <MenuItemLabel size="sm" ml="$2">
                {item.value}
              </MenuItemLabel>
            </MenuItem>
          ))}
        </>
      ) : (
        <>
          {sidebarData.map((sidebarItem: any) => {
            sidebarItem.subItems.map((item: NestedSidebarItemProps) => (
              <MenuItem key={item.key} textValue={item.value}>
                {item?.icon && <Icon as={item.icon} />}
                <MenuItemLabel size="sm" ml="$2">
                  {item.value}
                </MenuItemLabel>
              </MenuItem>
            ));
          })}
        </>
      )}
    </Menu>
  );
};
