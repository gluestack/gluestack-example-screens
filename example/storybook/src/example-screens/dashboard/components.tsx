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
  MessageCircleIcon,
  useToken,
} from '@gluestack-ui-new/themed';
import React from 'react';
import {
  FacebookIconSVG,
  InstagramIconSVG,
  OptionsIconSVG,
  PeopleIconSVG,
  TwitterIconSVG,
  ViewIconSVG,
  YoutubeIconSVG,
} from './icons';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement
);
import { analytics } from './constants';

interface CommentCardProps {
  userName: string;
  comment: string;
}

const CommentCard = ({ userName, comment }: CommentCardProps) => {
  return (
    <VStack justifyContent="flex-start" minWidth="$64" space="sm" mx="$1">
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
      borderColor="$border200"
      borderRadius="$md"
      borderWidth="$1"
      hardShadow="5"
      $md-minWidth="$1/4"
      $base-minWidth="$full"
      flexGrow={1}
    >
      <HStack alignItems="flex-start" justifyContent="space-between">
        <VStack space="xs" mr="$8">
          <Text
            fontSize="$sm"
            fontWeight="$medium"
            color="$text900"
            fontFamily="$heading"
          >
            Weekly {title}
          </Text>
          <Text
            fontSize="$2xl"
            fontWeight="$bold"
            color="$text900"
            fontFamily="$heading"
          >
            {totalValue}
          </Text>
          <Text
            fontSize="$xs"
            fontWeight="$normal"
            color="$text700"
            fontFamily="$body"
          >
            {subtitleValue} from last week
          </Text>
        </VStack>
        <Box p="$2" bg="$background50" borderRadius="$lg">
          {title === 'Views' ? (
            <ViewIconSVG />
          ) : title === 'Followers' ? (
            <PeopleIconSVG />
          ) : (
            <MessageCircleIcon />
          )}
        </Box>
      </HStack>
    </VStack>
  );
};

const BarChart = () => {
  const color = useToken('colors', 'black');
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
    scales: {
      y: {
        display: true,
        position: 'right',
      },
    },
  };
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [770, 99, 880, 222, 3334, 771, 11],
        backgroundColor: color,
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

const AreaChart = () => {
  const borderColor = useToken('colors', 'black');
  const backgroundColor = useToken('colors', 'black');
  const aboveFillColor = useToken('colors', 'background300');
  const belowFillColor = useToken('colors', 'white');

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
  };
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [998, 995, 600, 500, 880, 222, 334],
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        fill: {
          target: 'origin',
          above: aboveFillColor,
          below: belowFillColor,
        },
        elements: {
          line: {
            tension: 0.6,
          },
        },
      },
    ],
  };
  return <Line options={options} data={data} />;
};
const PieChart = () => {
  const color1 = useToken('colors', 'primary400');
  const color2 = useToken('colors', 'primary200');
  const color3 = useToken('colors', 'primary50');
  const color4 = useToken('colors', 'primary0');

  const data = {
    responsive: true,
    labels: [],
    datasets: [
      {
        label: '# of Audience',
        data: [12, 19, 3, 5],
        backgroundColor: [color1, color2, color3, color4],
        borderColor: [color1, color2, color3, color4],
        borderWidth: 0,
      },
    ],
  };

  return (
    <Doughnut
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
};

const HomeView = () => {
  const [tab, setTab] = React.useState<
    'instagram' | 'youtube' | 'twitter' | 'facebook'
  >('instagram');
  return (
    <Box my="$2" w="$full">
      <HStack
        px="$4"
        space="4xl"
        $base-ml="$0"
        $xl-ml="$11"
        my="$3"
        flexWrap="wrap"
      >
        <Pressable
          p="$1"
          borderBottomWidth="$2"
          borderBottomColor={tab === 'instagram' ? '$primary400' : '$white'}
          opacity={tab === 'instagram' ? '$100' : '$60'}
          onPress={() => setTab('instagram')}
        >
          <HStack space="xs" alignItems="center">
            <InstagramIconSVG />
            <Text fontSize="$md" color="$primary500" fontFamily="$heading">
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
            <Text fontSize="$md" color="$primary500" fontFamily="$heading">
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
            <Text fontSize="$md" color="$primary500" fontFamily="$heading">
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
            <Text fontSize="$md" color="$primary500" fontFamily="$heading">
              Facebook
            </Text>
          </HStack>
        </Pressable>
      </HStack>
      <VStack $base-mx="$2" $sm-mx="$4" alignItems="center">
        <HStack my="$3" space="lg" flexWrap="wrap" w="$full" rowGap="$4">
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
        <HStack
          mx="$4"
          my="$3"
          space="lg"
          flexWrap="wrap"
          $base-justifyContent="center"
          $lg-justifyContent="flex-start"
          $base-maxWidth="$full"
          $base-alignSelf="center"
          w="$full"
        >
          <VStack
            alignItems="flex-start"
            borderColor="$border200"
            borderRadius="$md"
            borderWidth="$1"
            hardShadow="5"
            p="$4"
            space="sm"
            maxHeight="$80"
            $md-flexGrow={1}
            $base-minWidth="$full"
            $md-minWidth="$1/3"
          >
            <HStack justifyContent="space-between" mx="$2" w="$full">
              <Text
                color="$text900"
                fontWeight="$bold"
                $md-fontSize="$lg"
                $base-fontSize="$md"
                fontFamily="$heading"
              >
                Latest Posts
              </Text>
              <Pressable>
                <OptionsIconSVG />
              </Pressable>
            </HStack>
            <Text
              color="$text700"
              fontWeight="$normal"
              fontSize="$sm"
              mx="$2"
              fontFamily="$body"
              numberOfLines={2}
              $base-maxWidth="$56"
              $sm-maxWidth="$80"
            >
              Receive notifications about gluestack ui updates.
            </Text>
            <Box
              $md-minWidth="$80"
              $base-minWidth="$40"
              $base-maxWidth="$56"
              $sm-maxWidth="$full"
              borderRadius="$2xl"
              mx="auto"
            >
              <BarChart />
            </Box>
          </VStack>
          <VStack
            alignItems="flex-start"
            borderColor="$border200"
            borderRadius="$md"
            borderWidth="$1"
            hardShadow="5"
            space="sm"
            py="$4"
            $md-flexGrow={1}
            $base-minWidth="$full"
            $md-minWidth="$1/3"
          >
            <Text
              color="$text900"
              fontWeight="$bold"
              fontSize="$lg"
              my="$2"
              mx="$4"
              fontFamily="$heading"
            >
              Engaged Users
            </Text>
            <Box
              $md-minWidth="$80"
              $base-minWidth="$40"
              $base-maxWidth="$64"
              $sm-maxWidth="$72"
              borderRadius="$2xl"
              mx="auto"
            >
              <AreaChart />
            </Box>
            <VStack alignItems="center" w="$full">
              <Text
                color="$text900"
                fontWeight="$medium"
                $lg-fontSize="$5xl"
                $md-fontSize="$4xl"
                fontFamily="$heading"
              >
                {analytics[tab].engagedUsers.users}
              </Text>
              <Text
                color="$text700"
                fontWeight="$normal"
                fontSize="$xs"
                fontFamily="$body"
              >
                {analytics[tab].engagedUsers.loss
                  ? `-${analytics[tab].engagedUsers.loss}%`
                  : `+${analytics[tab].engagedUsers.growth}%`}{' '}
                from last week
              </Text>
            </VStack>
          </VStack>
        </HStack>
        <HStack
          mx="$4"
          my="$3"
          space="lg"
          flexWrap="wrap"
          $base-justifyContent="center"
          $lg-justifyContent="flex-start"
          $base-maxWidth="$full"
          $base-alignSelf="center"
          w="$full"
        >
          <VStack
            alignItems="flex-start"
            borderColor="$border200"
            borderRadius="$md"
            borderWidth="$1"
            hardShadow="5"
            p="$4"
            space="sm"
            $md-flexGrow={1}
            $base-minWidth="$full"
            $md-minWidth="$1/3"
          >
            <HStack justifyContent="space-between" mx="$2" w="$full">
              <Text
                color="$text900"
                fontWeight="$bold"
                fontSize="$lg"
                fontFamily="$heading"
              >
                Audience Age Split
              </Text>
              <Pressable>
                <OptionsIconSVG />
              </Pressable>
            </HStack>
            <HStack alignItems="center" space="md" alignSelf="center">
              <Box
                h="$56"
                $sm-minWidth="$48"
                $base-maxWidth="$24"
                $sm-maxWidth="$40"
                $lg-maxWidth="$56"
                borderRadius="$3xl"
              >
                <PieChart />
              </Box>
              <VStack
                borderColor="$border200"
                borderRadius="$md"
                borderWidth="$1"
                hardShadow="5"
                p="$4"
                space="md"
              >
                <HStack space="sm">
                  <Box w="$5" h="$5" borderRadius="$full" bg="$primary0" />
                  <Text
                    color="$text900"
                    $sm-fontSize="$sm"
                    $base-fontSize="$xs"
                    fontWeight="$normal"
                    fontFamily="$body"
                  >
                    40-45 yrs
                  </Text>
                </HStack>
                <HStack space="sm">
                  <Box w="$5" h="$5" borderRadius="$full" bg="$primary50" />
                  <Text
                    color="$text900"
                    $sm-fontSize="$sm"
                    $base-fontSize="$xs"
                    fontWeight="$normal"
                    fontFamily="$body"
                  >
                    35-40 yrs
                  </Text>
                </HStack>
                <HStack space="sm">
                  <Box w="$5" h="$5" borderRadius="$full" bg="$primary100" />
                  <Text
                    color="$text900"
                    $sm-fontSize="$sm"
                    $base-fontSize="$xs"
                    fontWeight="$normal"
                    fontFamily="$body"
                  >
                    30-35 yrs
                  </Text>
                </HStack>
                <HStack space="sm">
                  <Box w="$5" h="$5" borderRadius="$full" bg="$primary400" />
                  <Text
                    color="$text900"
                    $sm-fontSize="$sm"
                    $base-fontSize="$xs"
                    fontWeight="$normal"
                    fontFamily="$body"
                  >
                    25-30 yrs
                  </Text>
                </HStack>
              </VStack>
            </HStack>
          </VStack>
          <VStack
            space="3xl"
            alignContent="flex-start"
            $md-flexGrow={1}
            $base-minWidth="$full"
            $md-minWidth="$1/3"
          >
            <VStack
              alignItems="center"
              borderColor="$border200"
              borderRadius="$md"
              borderWidth="$1"
              hardShadow="5"
              $md-p="$4"
              $base-p="$2"
              space="md"
              justifyContent="space-between"
            >
              <VStack space="md" alignSelf="flex-start">
                <Text
                  color="$text900"
                  fontWeight="$bold"
                  $base-fontSize="$md"
                  $md-fontSize="$lg"
                  fontFamily="$heading"
                >
                  Top Locations
                </Text>
                <Text
                  color="$text700"
                  fontWeight="$normal"
                  $base-fontSize="$xs"
                  $md-fontSize="$sm"
                  fontFamily="$body"
                  numberOfLines={2}
                  $base-maxWidth="$56"
                  $sm-maxWidth="$96"
                >
                  Learn the top geographic locations of your new audience
                </Text>
              </VStack>
              <HStack
                $sm-space="2xl"
                $base-space="sm"
                alignItems="center"
                $md-px="$4"
                $base-px="$2"
                mb="$4"
              >
                {[...Array(3)].map((_, index) => (
                  <HStack key={index}>
                    <VStack space="xs">
                      <Text
                        color="$text900"
                        fontWeight="$bold"
                        $base-fontSize="$sm"
                        $md-fontSize="$lg"
                        fontFamily="$heading"
                      >
                        {analytics[tab].topLocations[index].name}
                      </Text>
                      <Text
                        color="$text700"
                        fontWeight="$normal"
                        fontSize="$xs"
                        fontFamily="$body"
                      >
                        {`+${analytics[tab].topLocations[index].growth}%`}
                      </Text>
                    </VStack>
                    {index < 2 && (
                      <Divider
                        orientation="vertical"
                        w="$0.5"
                        h="$10"
                        $md-mx="$8"
                        $base-mx="$2"
                        bgColor="$background200"
                      />
                    )}
                  </HStack>
                ))}
              </HStack>
            </VStack>
            <VStack
              alignItems="center"
              borderColor="$border200"
              borderRadius="$md"
              borderWidth="$1"
              hardShadow="5"
              $md-p="$4"
              $base-p="$2"
              space="md"
            >
              <VStack space="md" alignSelf="flex-start">
                <Text
                  color="$text900"
                  fontWeight="$bold"
                  $base-fontSize="$md"
                  $md-fontSize="$lg"
                  fontFamily="$heading"
                >
                  View Engagements
                </Text>
                <Text
                  color="$text700"
                  fontWeight="$normal"
                  $base-fontSize="$xs"
                  $md-fontSize="$sm"
                  fontFamily="$body"
                  numberOfLines={2}
                  $base-maxWidth="$56"
                  $sm-maxWidth="$96"
                >
                  Learn the top geographic locations of your new audience
                </Text>
              </VStack>
              <HStack
                $sm-space="2xl"
                $base-space="sm"
                alignItems="center"
                $md-px="$4"
                $base-px="$2"
                mb="$4"
                justifyContent="space-between"
              >
                {[...Array(3)].map((_, index) => (
                  <HStack key={index}>
                    <VStack space="xs">
                      <Text
                        color="$text900"
                        fontWeight="$bold"
                        $base-fontSize="$sm"
                        $md-fontSize="$lg"
                        fontFamily="$heading"
                      >
                        {analytics[tab].topEngagements[index].name}
                      </Text>
                      <Text
                        color="$text700"
                        fontWeight="$normal"
                        fontSize="$xs"
                        fontFamily="$body"
                        numberOfLines={2}
                      >
                        {`${analytics[tab].topEngagements[index].growth} views`}
                      </Text>
                    </VStack>
                    {index < 2 && (
                      <Divider
                        orientation="vertical"
                        w="$0.5"
                        h="$10"
                        $md-mx="$8"
                        $base-mx="$2"
                        bgColor="$background200"
                      />
                    )}
                  </HStack>
                ))}
              </HStack>
            </VStack>
          </VStack>
        </HStack>
      </VStack>
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
      <Text
        textAlign="center"
        fontSize="$lg"
        color="$white"
        my="auto"
        fontFamily="$heading"
      >
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
      <Text
        textAlign="center"
        fontSize="$lg"
        color="$white"
        my="auto"
        fontFamily="$heading"
      >
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
      <Text
        textAlign="center"
        fontSize="$lg"
        color="$white"
        my="auto"
        fontFamily="$heading"
      >
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
      <Text
        textAlign="center"
        fontSize="$lg"
        color="$white"
        my="auto"
        fontFamily="$heading"
      >
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
      <Text
        textAlign="center"
        fontSize="$lg"
        color="$white"
        my="auto"
        fontFamily="$heading"
      >
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
      <Text
        textAlign="center"
        fontSize="$lg"
        color="$white"
        my="auto"
        fontFamily="$heading"
      >
        Exit
      </Text>
    </Box>
  );
};

export {
  AnalyticsCard,
  ExitView,
  CalendarView,
  HelpView,
  SettingsView,
  ProfileView,
  CurrencyView,
  HomeView,
  NotificationsView,
  CommentCard,
};
