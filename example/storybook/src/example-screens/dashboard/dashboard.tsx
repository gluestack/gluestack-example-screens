import {
  Text,
  Box,
  VStack,
  HStack,
  Divider,
  AvatarImage,
  Avatar,
  AvatarFallbackText,
  Pressable,
  Input,
  InputField,
  Center,
  ScrollView,
  MessageCircleIcon,
} from '@gluestack-ui-new/themed';
import React from 'react';
import {
  ArrowRightSVG,
  BellIconSVG,
  CalenderIconSVG,
  CatergoriesIconSVG,
  CurrencyIconSVG,
  ExitIconSVG,
  FacebookIconSVG,
  HelpIconSVG,
  InstagramIconSVG,
  NotificationsIconSVG,
  OptionsIconSVG,
  PeopleIconSVG,
  ProfileIconSVG,
  SearchIconSVG,
  SettingsIconSVG,
  TwitterIconSVG,
  ViewIconSVG,
  YoutubeIconSVG,
} from './icons';
import { analytics, comments } from './constants';

interface CommentCardProps {
  userName: string;
  comment: string;
}

const CommentCard = ({ userName, comment }: CommentCardProps) => {
  return (
    <VStack
      justifyContent="flex-start"
      minWidth="$64"
      maxWidth="$72"
      space="sm"
    >
      <HStack space="md">
        <Box borderRadius="$full">
          <Avatar bgColor="$black" size="sm">
            <AvatarFallbackText>{userName}</AvatarFallbackText>
            <AvatarImage source={require('/assets/avatar-icon.png')} />
          </Avatar>
        </Box>
        <VStack>
          <Text fontSize="$sm" fontWeight="$bold" color="$text900">
            {userName}
          </Text>
          <Text fontSize="$sm" fontWeight="$normal" color="$text700">
            Follower
          </Text>
        </VStack>
      </HStack>
      <Text fontSize="$sm" fontWeight="$normal" color="$text700">
        {comment}
      </Text>
    </VStack>
  );
};

const AnalyticsCard = ({
  title,
  totalValue,
  subtitleValue,
}: {
  title: string;
  totalValue: number;
  subtitleValue: string;
}) => {
  return (
    <VStack
      p="$6"
      space="xs"
      borderColor="$border200"
      borderRadius="$md"
      borderWidth="$1"
      hardShadow="5"
    >
      <HStack justifyContent="space-between" alignItems="flex-start">
        <Text fontSize="$sm" fontWeight="$medium" color="$text900">
          Weekly {title}
        </Text>
        <Box p="$2" ml="$20" bg="$background50" borderRadius="$lg">
          {title === 'Views' ? (
            <ViewIconSVG />
          ) : title === 'Followers' ? (
            <PeopleIconSVG />
          ) : (
            <MessageCircleIcon />
          )}
        </Box>
      </HStack>
      <Text fontSize="$2xl" fontWeight="$bold" color="$text900">
        {totalValue}
      </Text>
      <Text fontSize="$xs" fontWeight="$normal" color="$text700">
        {subtitleValue} from last week
      </Text>
    </VStack>
  );
};
const HomeView = () => {
  const [tab, setTab] = React.useState<
    'instagram' | 'youtube' | 'twitter' | 'facebook'
  >('instagram');
  return (
    <Box>
      <HStack px="$4" space="4xl" ml="$11" mt="$4" overflow="scroll">
        <Pressable
          p="$1"
          borderBottomWidth="$2"
          borderBottomColor={tab === 'instagram' ? '$primary400' : '$white'}
          opacity={tab === 'instagram' ? '$100' : '$60'}
          onPress={() => setTab('instagram')}
        >
          <HStack space="xs" alignItems="center">
            <InstagramIconSVG />
            <Text fontSize="$md" color="$primary500">
              Instagram
            </Text>
          </HStack>
        </Pressable>
        <Pressable
          p="$1"
          borderBottomWidth="$2"
          borderBottomColor={tab === 'youtube' ? '$primary400' : '$white'}
          opacity={tab === 'youtube' ? '$100' : '$60'}
          onPress={() => setTab('youtube')}
        >
          <HStack space="xs" alignItems="center">
            <YoutubeIconSVG />
            <Text fontSize="$md" color="$primary500">
              Youtube
            </Text>
          </HStack>
        </Pressable>
        <Pressable
          p="$1"
          borderBottomWidth="$2"
          borderBottomColor={tab === 'twitter' ? '$primary400' : '$white'}
          opacity={tab === 'twitter' ? '$100' : '$60'}
          onPress={() => setTab('twitter')}
        >
          <HStack space="xs" alignItems="center">
            <TwitterIconSVG />
            <Text fontSize="$md" color="$primary500">
              Twitter
            </Text>
          </HStack>
        </Pressable>
        <Pressable
          p="$1"
          borderBottomWidth="$2"
          borderBottomColor={tab === 'facebook' ? '$primary400' : '$white'}
          opacity={tab === 'facebook' ? '$100' : '$60'}
          onPress={() => setTab('facebook')}
        >
          <HStack space="xs" alignItems="center">
            <FacebookIconSVG />
            <Text fontSize="$md" color="$primary500">
              Facebook
            </Text>
          </HStack>
        </Pressable>
      </HStack>
      <HStack m="$4" space="2xl" overflow="scroll">
        <AnalyticsCard
          title="Views"
          totalValue={analytics[tab].weeklyViews.views}
          subtitleValue={
            analytics[tab].weeklyViews.loss
              ? `-${analytics[tab].weeklyViews.loss}%`
              : `+${analytics[tab].weeklyViews.growth}%`
          }
        />
        <AnalyticsCard
          title="Followers"
          totalValue={analytics[tab].weeklyFollowers.views}
          subtitleValue={
            analytics[tab].weeklyFollowers.loss
              ? `-${analytics[tab].weeklyFollowers.loss}%`
              : `+${analytics[tab].weeklyFollowers.growth}%`
          }
        />
        <AnalyticsCard
          title="Comments"
          totalValue={analytics[tab].weeklyComments.views}
          subtitleValue={
            analytics[tab].weeklyComments.loss
              ? `-${analytics[tab].weeklyComments.loss}%`
              : `+${analytics[tab].weeklyComments.growth}%`
          }
        />
      </HStack>
      <HStack space="2xl" m="$4" overflow="scroll">
        <VStack
          alignItems="flex-start"
          borderColor="$border200"
          borderRadius="$md"
          borderWidth="$1"
          hardShadow="5"
          p="$4"
          space="sm"
        >
          <HStack justifyContent="space-between" mx="$2">
            <Text color="$text900" fontWeight="$bold" fontSize="$lg">
              Latest Posts
            </Text>
            <Box ml="$72">
              <OptionsIconSVG />
            </Box>
          </HStack>
          <Text color="$text700" fontWeight="$normal" fontSize="$sm" mx="$2">
            Receive notifications about gluestack ui updates.
          </Text>
          <Box bg="$black" minWidth="$96" h="$56" borderRadius="$2xl"></Box>
        </VStack>
        <VStack
          alignItems="flex-start"
          borderColor="$border200"
          borderRadius="$md"
          borderWidth="$1"
          hardShadow="5"
          p="$4"
          space="sm"
        >
          <Box bg="$black" minWidth="$64" h="$64" borderRadius="$3xl"></Box>
          <VStack alignItems="center" w="$full">
            <Text color="$text900" fontWeight="$medium" fontSize="$5xl">
              {analytics[tab].engagedUsers.users}
            </Text>
            <Text color="$text700" fontWeight="$normal" fontSize="$xs">
              {analytics[tab].engagedUsers.loss
                ? `-${analytics[tab].engagedUsers.loss}%`
                : `+${analytics[tab].engagedUsers.growth}%`}{' '}
              from last week
            </Text>
          </VStack>
        </VStack>
      </HStack>
      <HStack space="2xl" m="$4" overflow="scroll">
        <VStack
          alignItems="flex-start"
          borderColor="$border200"
          borderRadius="$md"
          borderWidth="$1"
          hardShadow="5"
          p="$4"
          space="sm"
        >
          <HStack justifyContent="space-between">
            <Text color="$text900" fontWeight="$bold" fontSize="$lg">
              Audience Age Split
            </Text>
            <Box ml="$24">
              <OptionsIconSVG />
            </Box>
          </HStack>
          <Box bg="$black" minWidth="$72" h="$48" borderRadius="$3xl"></Box>
        </VStack>
        <VStack space="3xl">
          <HStack
            borderColor="$border200"
            borderRadius="$md"
            borderWidth="$1"
            hardShadow="5"
            p="$4"
            space="sm"
            alignItems="center"
            bg="$background100"
            maxWidth="$40"
          >
            <Text color="$text900" fontWeight="$bold" fontSize="$2xl">
              {analytics[tab].totalVisits}
            </Text>
            <Text color="$text900" fontWeight="$normal" fontSize="$2xs">
              Visits
            </Text>
          </HStack>
          <VStack
            alignItems="flex-start"
            borderColor="$border200"
            borderRadius="$md"
            borderWidth="$1"
            hardShadow="5"
            p="$4"
            space="md"
          >
            <Text color="$text900" fontWeight="$bold" fontSize="$lg">
              Top Locations
            </Text>
            <Text color="$text700" fontWeight="$normal" fontSize="$sm">
              Learn the top geographic locations of your new audience
            </Text>
            <HStack space="2xl" alignItems="center" px="$4" my="$4">
              {[...Array(3)].map((_, index) => (
                <HStack key={index}>
                  <VStack space="xs">
                    <Text color="$text900" fontWeight="$bold" fontSize="$lg">
                      {analytics[tab].topLocations[index].name}
                    </Text>
                    <Text color="$text700" fontWeight="$normal" fontSize="$xs">
                      {analytics[tab].topLocations[index].growth
                        ? `-${analytics[tab].topLocations[index].growth}%`
                        : `+${analytics[tab].topLocations[index].growth}%`}
                    </Text>
                  </VStack>
                  {index < 2 && (
                    <Divider
                      orientation="vertical"
                      w="$0.5"
                      h="$10"
                      mx="$8"
                      bgColor="$background200"
                    />
                  )}
                </HStack>
              ))}
            </HStack>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
};
const NotificationsView = () => {
  return (
    <Box
      bg="red"
      minWidth="$96"
      minHeight="$72"
      borderRadius="$3xl"
      maxWidth="$1/2"
      alignSelf="center"
    >
      <Text textAlign="center" fontSize="$lg" color="$white" my="auto">
        Notifications
      </Text>
    </Box>
  );
};
const CalendarView = () => {
  return (
    <Box
      bg="blue"
      minWidth="$96"
      minHeight="$72"
      borderRadius="$3xl"
      maxWidth="$1/2"
      alignSelf="center"
    >
      <Text textAlign="center" fontSize="$lg" color="$white" my="auto">
        Calendar
      </Text>
    </Box>
  );
};
const CurrencyView = () => {
  return (
    <Box
      bg="black"
      minWidth="$96"
      minHeight="$72"
      borderRadius="$3xl"
      maxWidth="$1/2"
      alignSelf="center"
    >
      <Text textAlign="center" fontSize="$lg" color="$white" my="auto">
        Currency
      </Text>
    </Box>
  );
};
const ProfileView = () => {
  return (
    <Box
      bg="$amber600"
      minWidth="$96"
      minHeight="$72"
      borderRadius="$3xl"
      maxWidth="$1/2"
      alignSelf="center"
    >
      <Text textAlign="center" fontSize="$lg" color="$white" my="auto">
        Profile
      </Text>
    </Box>
  );
};
const SettingsView = () => {
  return (
    <Box
      bg="$violet400"
      minWidth="$96"
      minHeight="$72"
      borderRadius="$3xl"
      maxWidth="$1/2"
      alignSelf="center"
    >
      <Text textAlign="center" fontSize="$lg" color="$white" my="auto">
        Settings
      </Text>
    </Box>
  );
};
const HelpView = () => {
  return (
    <Box
      bg="$green400"
      minWidth="$96"
      minHeight="$72"
      borderRadius="$3xl"
      maxWidth="$1/2"
      alignSelf="center"
    >
      <Text textAlign="center" fontSize="$lg" color="$white" my="auto">
        Help
      </Text>
    </Box>
  );
};
const ExitView = () => {
  return (
    <Box
      bg="$tertiary600"
      minWidth="$96"
      minHeight="$72"
      borderRadius="$3xl"
      maxWidth="$1/2"
      alignSelf="center"
    >
      <Text textAlign="center" fontSize="$lg" color="$white" my="auto">
        Exit
      </Text>
    </Box>
  );
};

const viewRenderer = (view: string) => {
  switch (view) {
    case 'home':
      return <HomeView />;
    case 'notifications':
      return <NotificationsView />;
    case 'calendar':
      return <CalendarView />;
    case 'currency':
      return <CurrencyView />;
    case 'profile':
      return <ProfileView />;
    case 'settings':
      return <SettingsView />;
    case 'help':
      return <HelpView />;
    case 'exit':
      return <ExitView />;
    default:
      return <HomeView />;
  }
};

const Dashboard: any = ({
  // bg = 'red500',
  w = '100%',
  h = '100%',
  ...props
}: any) => {
  const [view, setView] = React.useState<
    | 'home'
    | 'notifications'
    | 'calendar'
    | 'currency'
    | 'profile'
    | 'settings'
    | 'help'
    | 'exit'
  >('home');
  const handleViewChange = (viewInput: typeof view) => {
    setView(viewInput);
  };
  return (
    <Box
      {...props}
      h={h}
      w={w}
      justifyContent="center"
      alignItems="center"
      borderWidth="$1"
      borderColor="$border200"
      borderRadius="$lg"
      px="$2"
    >
      <Box
        display="flex"
        h="$full"
        w="$full"
        $base-flexDirection="column"
        $lg-flexDirection="row"
      >
        <Box
          $xl-width="$4/6"
          $lg-width="$3/5"
          $base-width="$full"
          borderLeftWidth="$0"
          borderRightWidth="$1"
          borderColor="$border200"
          p="$2"
        >
          <Box width="$full">
            <HStack p="$4" justifyContent="space-between" alignItems="center">
              <VStack space="xs">
                <Text
                  $md-fontSize="$3xl"
                  $base-fontSize="$lg"
                  color="$text900"
                  fontWeight="$bold"
                >
                  Good morning, John
                </Text>
                <Text
                  $md-fontSize="$sm"
                  $base-fontSize="$xs"
                  color="$text700"
                  fontWeight="$normal"
                >
                  Let’s take a look at your social presence
                </Text>
              </VStack>
              <HStack
                h="$10"
                alignItems="center"
                space="sm"
                width="$1/3"
                justifyContent="flex-end"
              >
                <HStack
                  $md-borderWidth="$1"
                  borderColor="$border300"
                  borderRadius="$lg"
                  alignItems="center"
                  space="sm"
                  $base-px="$0"
                  $md-px="$4"
                  $md-flex={0.95}
                  $base-flex={0.5}
                  $base-borderWidth="$0"
                >
                  <SearchIconSVG />
                  <Input
                    borderWidth="$0"
                    sx={{
                      _web: {
                        boxShadow: 'none',
                      },
                    }}
                    w="$full"
                    $base-display="none"
                    $md-display="flex"
                  >
                    <InputField
                      placeholder="Search.."
                      fontSize="$sm"
                      color="$text400"
                    />
                  </Input>
                </HStack>
                <Center bg="$background100" borderRadius="$lg">
                  <Box p="$2">
                    <BellIconSVG />
                  </Box>
                </Center>
              </HStack>
            </HStack>
            <HStack>
              <VStack
                alignItems="center"
                justifyContent="space-between"
                space="3xl"
                maxHeight="$4/5"
              >
                <VStack
                  alignItems="center"
                  p="$4"
                  bg="$background950"
                  space="lg"
                  borderRadius="$3xl"
                >
                  <Pressable
                    p="$2"
                    $focus-bg="$background800"
                    borderRadius="$xl"
                    bg={view === 'home' ? '$background800' : '$background950'}
                    onPress={() => handleViewChange('home')}
                  >
                    <CatergoriesIconSVG />
                  </Pressable>
                  <Pressable
                    p="$2"
                    $focus-bg="$background800"
                    borderRadius="$xl"
                    bg={
                      view === 'notifications'
                        ? '$background800'
                        : '$background950'
                    }
                    onPress={() => handleViewChange('notifications')}
                  >
                    <NotificationsIconSVG />
                  </Pressable>
                  <Pressable
                    p="$2"
                    $focus-bg="$background800"
                    borderRadius="$xl"
                    bg={
                      view === 'calendar' ? '$background800' : '$background950'
                    }
                    onPress={() => handleViewChange('calendar')}
                  >
                    <CalenderIconSVG />
                  </Pressable>
                  <Pressable
                    p="$2"
                    $focus-bg="$background800"
                    borderRadius="$xl"
                    bg={
                      view === 'currency' ? '$background800' : '$background950'
                    }
                    onPress={() => handleViewChange('currency')}
                  >
                    <CurrencyIconSVG />
                  </Pressable>
                  <Divider
                    bg="$background600"
                    h="$0.5"
                    orientation="horizontal"
                    w="$full"
                    my="$10"
                  />
                  <Pressable
                    p="$2"
                    $focus-bg="$background800"
                    borderRadius="$xl"
                    bg={
                      view === 'profile' ? '$background800' : '$background950'
                    }
                    onPress={() => handleViewChange('profile')}
                  >
                    <ProfileIconSVG />
                  </Pressable>
                  <Pressable
                    p="$2"
                    $focus-bg="$background800"
                    borderRadius="$xl"
                    bg={
                      view === 'settings' ? '$background800' : '$background950'
                    }
                    onPress={() => handleViewChange('settings')}
                  >
                    <SettingsIconSVG />
                  </Pressable>
                  <Pressable
                    p="$2"
                    $focus-bg="$background800"
                    borderRadius="$xl"
                    bg={view === 'help' ? '$background800' : '$background950'}
                    onPress={() => handleViewChange('help')}
                  >
                    <HelpIconSVG />
                  </Pressable>
                </VStack>
                <VStack
                  alignItems="center"
                  p="$4"
                  bg="$background950"
                  space="lg"
                  borderRadius="$3xl"
                  mb="$4"
                >
                  <Pressable
                    p="$2"
                    $focus-bg="$background800"
                    borderRadius="$xl"
                    bg={view === 'exit' ? '$background800' : '$background950'}
                    onPress={() => handleViewChange('exit')}
                  >
                    <ExitIconSVG />
                  </Pressable>
                </VStack>
              </VStack>
              <ScrollView maxHeight="$5/6">
                <Box maxHeight="$full">{viewRenderer(view)}</Box>
              </ScrollView>
            </HStack>
          </Box>
        </Box>
        <Box $xl-width="$2/6" $lg-width="$2/5" $base-width="$full" p="$2">
          <VStack space="2xl" alignItems="center">
            <VStack
              bg="$background50"
              alignItems="center"
              minWidth="$72"
              maxWidth="$80"
              space="md"
              p="$3"
              borderRadius="$xl"
            >
              <Box borderRadius="$full">
                <Avatar bgColor="$black" size="lg">
                  <AvatarFallbackText>John Smith</AvatarFallbackText>
                  <AvatarImage source={require('/assets/avatar-icon.png')} />
                </Avatar>
              </Box>
              <VStack alignItems="center" space="xs" width="$full">
                <Text
                  fontFamily="$heading"
                  fontSize="$lg"
                  color="$text900"
                  fontWeight="$bold"
                >
                  John Smith
                </Text>
                <Text
                  fontFamily="$body"
                  fontSize="$sm"
                  color="$text700"
                  fontWeight="$normal"
                >
                  john@example.com
                </Text>
              </VStack>
              <Text
                fontFamily="$body"
                fontSize="$sm"
                color="$text700"
                fontWeight="$normal"
                textAlign="center"
                width="$full"
              >
                Pushing the boundaries of reality with XR design wizardry ✨🚀
                #XRDesigner
              </Text>
              <HStack
                space="md"
                alignItems="center"
                my="$2"
                width="$full"
                justifyContent="center"
              >
                <VStack alignItems="center" space="sm">
                  <Text
                    fontFamily="$heading"
                    fontSize="$sm"
                    color="$text900"
                    fontWeight="$bold"
                  >
                    232
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
                  bg="$background400"
                  w="$0.5"
                  orientation="vertical"
                />
                <VStack alignItems="center" space="sm">
                  <Text
                    fontFamily="$heading"
                    fontSize="$sm"
                    color="$text900"
                    fontWeight="$bold"
                  >
                    108.3k
                  </Text>
                  <Text
                    fontFamily="$body"
                    fontSize="$sm"
                    color="$text900"
                    fontWeight="$normal"
                  >
                    followers
                  </Text>
                </VStack>
                <Divider
                  mx="$2.5"
                  h="$10"
                  bg="$background400"
                  w="$0.5"
                  orientation="vertical"
                />
                <VStack alignItems="center" space="sm">
                  <Text
                    fontFamily="$heading"
                    fontSize="$sm"
                    color="$text900"
                    fontWeight="$bold"
                  >
                    40
                  </Text>
                  <Text
                    fontFamily="$body"
                    fontSize="$sm"
                    color="$text900"
                    fontWeight="$normal"
                  >
                    following
                  </Text>
                </VStack>
              </HStack>
            </VStack>
            <Box p="$3">
              <ScrollView>
                <VStack maxHeight="$96" minWidth="$72" maxWidth="$96">
                  {comments.map((comment) => (
                    <VStack justifyContent="center">
                      <CommentCard
                        comment={comment.comment}
                        userName={comment.userName}
                        key={comment.userName}
                      />
                      <Divider
                        orientation="horizontal"
                        my="$2"
                        bg="$background200"
                        h="$0.5"
                        w="$72"
                      />
                    </VStack>
                  ))}
                </VStack>
              </ScrollView>
            </Box>
            <HStack justifyContent="flex-end" w="$80" mt="$16" mb="$10">
              <Pressable>
                <HStack justifyContent="flex-end" space="sm">
                  <Text
                    fontWeight="$semibold"
                    fontSize="$xs"
                    color="$secondary600"
                  >
                    See All Activity
                  </Text>
                  <ArrowRightSVG />
                </HStack>
              </Pressable>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

export { Text, Box };
