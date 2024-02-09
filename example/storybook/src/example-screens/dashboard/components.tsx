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
  useToken,
  Menu,
  MenuItem,
  MenuItemLabel,
  TooltipContent,
  Tooltip,
  TooltipText,
} from '@gluestack-ui-new/themed';
import React from 'react';
import {
  BadgeHelpIcon,
  CalendarDaysIcon,
  EyeIcon,
  InstagramIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  LucideMessageCircle,
  MegaphoneIcon,
  MenuIcon,
  MoreVerticalIcon,
  TwitterIcon,
  UserIcon,
  UsersIcon,
  YoutubeIcon,
  CircleDollarSignIcon,
  SettingsIcon,
} from 'lucide-react-native';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  PointElement,
  LineElement,
  Filler,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
  Title,
  Filler,
  Legend,
  ArcElement
);
import { analytics } from './constants';
import UserCard from '../components/UserCard';
import Card from '../components/Card';

interface CommentCardProps {
  userName: string;
  comment: string;
}

interface SidebarItemProps {
  tooltipText: string;
  icon: React.JSX.Element;
  itemProps: any;
}

export type ViewType =
  | 'home'
  | 'notifications'
  | 'calendar'
  | 'currency'
  | 'profile'
  | 'settings'
  | 'help'
  | 'exit';

export const SidebarItem = ({
  icon,
  tooltipText,
  itemProps,
}: SidebarItemProps) => {
  return (
    <Tooltip
      placement="right"
      trigger={(triggerProps) => {
        return (
          <Pressable
            p="$2"
            $focus-bg="$background800"
            borderRadius="$xl"
            {...triggerProps}
            {...itemProps}
          >
            {icon}
          </Pressable>
        );
      }}
    >
      <TooltipContent>
        <TooltipText>{tooltipText}</TooltipText>
      </TooltipContent>
    </Tooltip>
  );
};

export const MiniNavbarMenu = ({
  onViewChange,
}: {
  onViewChange: (view: ViewType) => void;
}) => {
  const [selected, setSelected] = React.useState(new Set([]));
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const miniNavbarIconColor = useToken('colors', 'white');
  const iconSize = useToken('space', '6');
  const iconColor = useToken('colors', 'background600');

  return (
    <Menu
      placement="bottom"
      selectionMode="single"
      selectedKeys={selected}
      closeOnSelect={true}
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      /*TYPE ERROR FIX LATER*/
      onSelectionChange={(keys: any) => {
        setSelected(keys);
        if (keys?.currentKey === 'Dashboard') {
          onViewChange('home');
        } else if (keys?.currentKey === 'Announcements') {
          onViewChange('notifications');
        } else if (keys?.currentKey === 'Calendar') {
          onViewChange('calendar');
        } else if (keys?.currentKey === 'Revenue') {
          onViewChange('currency');
        } else if (keys?.currentKey === 'Profile') {
          onViewChange('profile');
        } else if (keys?.currentKey === 'Help') {
          onViewChange('help');
        } else if (keys?.currentKey === 'Settings') {
          onViewChange('settings');
        } else if (keys?.currentKey === 'Logout') {
          onViewChange('exit');
        }
        setIsOpen(false);
      }}
      trigger={({ ...triggerProps }) => {
        return (
          <Pressable p="$2" {...triggerProps}>
            <MenuIcon
              color={miniNavbarIconColor}
              width={iconSize}
              height={iconSize}
            />
          </Pressable>
        );
      }}
    >
      <MenuItem key="Dashboard" textValue="Dashboard">
        <LayoutDashboardIcon
          color={iconColor}
          width={iconSize}
          height={iconSize}
        />
        <MenuItemLabel size="sm" ml="$2">
          Dashboard
        </MenuItemLabel>
      </MenuItem>
      <MenuItem key="Announcements" textValue="Announcements">
        <MegaphoneIcon color={iconColor} width={iconSize} height={iconSize} />
        <MenuItemLabel size="sm" ml="$2">
          Announcements
        </MenuItemLabel>
      </MenuItem>
      <MenuItem key="Calendar" textValue="Calendar">
        <CalendarDaysIcon
          color={iconColor}
          width={iconSize}
          height={iconSize}
        />
        <MenuItemLabel size="sm" ml="$2">
          Calendar
        </MenuItemLabel>
      </MenuItem>
      <MenuItem key="Revenue" textValue="Revenue">
        <CircleDollarSignIcon
          color={iconColor}
          width={iconSize}
          height={iconSize}
        />
        <MenuItemLabel size="sm" ml="$2">
          Revenue
        </MenuItemLabel>
      </MenuItem>
      <MenuItem key="Profile" textValue="Profile">
        <UserIcon color={iconColor} width={iconSize} height={iconSize} />
        <MenuItemLabel size="sm" ml="$2">
          Profile
        </MenuItemLabel>
      </MenuItem>
      <MenuItem key="Settings" textValue="Settings">
        <SettingsIcon color={iconColor} width={iconSize} height={iconSize} />
        <MenuItemLabel size="sm" ml="$2">
          Settings
        </MenuItemLabel>
      </MenuItem>
      <MenuItem key="Help" textValue="Help">
        <BadgeHelpIcon color={iconColor} width={iconSize} height={iconSize} />
        <MenuItemLabel size="sm" ml="$2">
          Help
        </MenuItemLabel>
      </MenuItem>
      <MenuItem key="Logout" textValue="Logout">
        <LogOutIcon color={iconColor} width={iconSize} height={iconSize} />
        <MenuItemLabel size="sm" ml="$2">
          Logout
        </MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};

export const CommentCard = ({ userName, comment }: CommentCardProps) => {
  return (
    <VStack justifyContent="flex-start" minWidth="$56" space="sm" mx="$1">
      <UserCard
        direction="row"
        alignItems="center"
        space="md"
        justifyContent="flex-start"
      >
        <Box borderRadius="$full">
          <Avatar bgColor="$black" size="sm">
            <AvatarFallbackText>{userName}</AvatarFallbackText>
            <AvatarImage source={require('../assets/avatar-icon.png')} />
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
      </UserCard>
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
  const iconColor = useToken('colors', 'primary500');
  const iconSize = useToken('space', '4.5');
  return (
    <Card
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
            <EyeIcon color={iconColor} width={iconSize} height={iconSize} />
          ) : title === 'Followers' ? (
            <UsersIcon color={iconColor} width={iconSize} height={iconSize} />
          ) : (
            <LucideMessageCircle
              color={iconColor}
              width={iconSize}
              height={iconSize}
            />
          )}
        </Box>
      </HStack>
    </Card>
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
        position: 'right' as const,
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

export const HomeView = () => {
  const [tab, setTab] = React.useState<
    'instagram' | 'youtube' | 'twitter' | 'facebook'
  >('instagram');
  const iconColor = useToken('colors', 'primary500');
  const iconSize = useToken('space', '4.5');
  return (
    <Box w="$full">
      <HStack
        px="$4"
        space="4xl"
        $base-ml="$0"
        $xl-ml="$6"
        $base-overflowX="scroll"
        $md-overflowX="visible"
      >
        <Pressable
          opacity={tab === 'instagram' ? '$100' : '$60'}
          onPress={() => setTab('instagram')}
        >
          <HStack
            space="xs"
            alignItems="center"
            alignSelf="center"
            p="$1"
            borderBottomWidth="$2"
            borderBottomColor={
              tab === 'instagram' ? '$primary400' : '$background0'
            }
            $base-flexGrow={1}
            $md-flexGrow={0}
          >
            <InstagramIcon
              color={iconColor}
              height={iconSize}
              width={iconSize}
            />

            <Text fontSize="$md" color="$primary500" fontFamily="$heading">
              Instagram
            </Text>
          </HStack>
        </Pressable>
        <Pressable
          opacity={tab === 'youtube' ? '$100' : '$60'}
          onPress={() => setTab('youtube')}
        >
          <HStack
            space="xs"
            alignItems="center"
            alignSelf="center"
            p="$1"
            borderBottomWidth="$2"
            borderBottomColor={
              tab === 'youtube' ? '$primary400' : '$background0'
            }
            $base-flexGrow={1}
            $md-flexGrow={0}
          >
            <YoutubeIcon color={iconColor} height={iconSize} width={iconSize} />
            <Text fontSize="$md" color="$primary500" fontFamily="$heading">
              Youtube
            </Text>
          </HStack>
        </Pressable>
        <Pressable
          opacity={tab === 'twitter' ? '$100' : '$60'}
          onPress={() => setTab('twitter')}
        >
          <HStack
            space="xs"
            alignItems="center"
            alignSelf="center"
            borderBottomWidth="$2"
            borderBottomColor={
              tab === 'twitter' ? '$primary400' : '$background0'
            }
            p="$1"
            $base-flexGrow={1}
            $md-flexGrow={0}
          >
            <TwitterIcon color={iconColor} height={iconSize} width={iconSize} />
            <Text fontSize="$md" color="$primary500" fontFamily="$heading">
              Twitter
            </Text>
          </HStack>
        </Pressable>
      </HStack>
      <VStack $base-mx="$2" $sm-mx="$4" alignItems="center" mt="$4" mb="$6">
        <HStack space="2xl" flexWrap="wrap" w="$full" rowGap="$4">
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
          mt="$6"
          space="lg"
          flexWrap="wrap"
          $base-justifyContent="center"
          $lg-justifyContent="flex-start"
          $base-maxWidth="$full"
          $base-alignSelf="center"
          w="$full"
        >
          <Card
            alignItems="flex-start"
            $base-p="$4"
            space="sm"
            $md-flexGrow={1}
            $base-minWidth="$full"
            $md-minWidth="$1/3"
          >
            <HStack justifyContent="space-between" w="$full">
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
                <MoreVerticalIcon
                  color={iconColor}
                  width={iconSize}
                  height={iconSize}
                />
              </Pressable>
            </HStack>
            <Text
              color="$text700"
              fontWeight="$normal"
              $md-fontSize="$sm"
              $base-fontSize="$xs"
              fontFamily="$body"
              numberOfLines={2}
              $base-maxWidth="$48"
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
              mt="$6"
              minHeight="$32"
            >
              <BarChart />
            </Box>
          </Card>
          <Card
            alignItems="flex-start"
            space="sm"
            $base-p="$4"
            $md-flexGrow={1}
            $base-minWidth="$full"
            $md-minWidth="$1/3"
          >
            <Text
              color="$text900"
              fontWeight="$bold"
              $md-fontSize="$lg"
              $base-fontSize="$md"
              fontFamily="$heading"
            >
              Engaged Users
            </Text>
            <Box
              $md-minWidth="$80"
              $base-minWidth="$32"
              $base-maxWidth="$56"
              $xl-maxWidth="$96"
              $sm-maxWidth="$72"
              borderRadius="$2xl"
              mx="auto"
              mt="$6"
              $lg-maxHeight="$24"
              $xl-maxHeight="$40"
              display="flex"
              flexDirection="row"
              justifyContent="center"
            >
              <AreaChart />
            </Box>
            <VStack alignItems="center" w="$full" mt="$3.5">
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
          </Card>
        </HStack>
        <HStack
          mx="$4"
          mt="$6"
          space="lg"
          flexWrap="wrap"
          $base-justifyContent="center"
          $lg-justifyContent="flex-start"
          $base-maxWidth="$full"
          $base-alignSelf="center"
          w="$full"
        >
          <Card
            alignItems="flex-start"
            $base-p="$4"
            space="sm"
            $md-flexGrow={1}
            $base-minWidth="$full"
            $md-minWidth="$1/3"
          >
            <HStack justifyContent="space-between" w="$full">
              <VStack space="sm">
                <Text
                  color="$text900"
                  fontWeight="$bold"
                  $md-fontSize="$lg"
                  $base-fontSize="$md"
                  fontFamily="$heading"
                >
                  Audience Age Split
                </Text>
                <Text
                  color="$text700"
                  fontWeight="$normal"
                  $md-fontSize="$sm"
                  $base-fontSize="$xs"
                  fontFamily="$body"
                  numberOfLines={2}
                  $base-maxWidth="$48"
                  $sm-maxWidth="$80"
                >
                  Quick insights into the demographic composition.
                </Text>
              </VStack>
              <Pressable>
                <MoreVerticalIcon
                  color={iconColor}
                  width={iconSize}
                  height={iconSize}
                />
              </Pressable>
            </HStack>
            <HStack alignItems="center" space="md" alignSelf="center" mt="$4">
              <Box
                h="$56"
                $sm-minWidth="$36"
                $base-maxWidth="$24"
                $sm-maxWidth="$40"
                $xl-maxWidth="$56"
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
          </Card>
          <VStack
            space="3xl"
            alignContent="flex-start"
            $md-flexGrow={1}
            $base-minWidth="$full"
            $md-minWidth="$1/3"
          >
            <Card
              alignItems="center"
              $base-p="$4"
              space="md"
              justifyContent="space-between"
            >
              <VStack space="sm" alignSelf="flex-start">
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
                alignItems="center"
                $lg-px="$5"
                $md-px="$4"
                $base-px="$2"
                mt="$6"
                w="$full"
              >
                {[...Array(5)].map((_, index) => {
                  if (index % 2 === 0) {
                    return (
                      <VStack space="xs" key={index} alignItems="center">
                        <Text
                          color="$text900"
                          fontWeight="$bold"
                          $base-fontSize="$sm"
                          $md-fontSize="$lg"
                          fontFamily="$heading"
                        >
                          {
                            analytics[tab].topLocations[index ? index / 2 : 0]
                              .name
                          }
                        </Text>
                        <Text
                          color="$text700"
                          fontWeight="$normal"
                          fontSize="$xs"
                          fontFamily="$body"
                        >
                          {`+${
                            analytics[tab].topLocations[index ? index / 2 : 0]
                              .growth
                          }%`}
                        </Text>
                      </VStack>
                    );
                  } else {
                    return (
                      <Divider
                        orientation="vertical"
                        w="$0.5"
                        h="$10"
                        mx="auto"
                        bgColor="$background200"
                      />
                    );
                  }
                })}
              </HStack>
            </Card>
            <Card alignItems="center" $base-p="$4" space="md">
              <VStack space="sm" alignSelf="flex-start">
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
                alignItems="center"
                $lg-px="$5"
                $md-px="$4"
                $base-px="$2"
                mt="$6"
                w="$full"
              >
                {[...Array(5)].map((_, index) => {
                  if (index % 2 === 0) {
                    return (
                      <VStack space="xs" key={index} alignItems="center">
                        <Text
                          color="$text900"
                          fontWeight="$bold"
                          $base-fontSize="$sm"
                          $md-fontSize="$lg"
                          fontFamily="$heading"
                        >
                          {
                            analytics[tab].topEngagements[
                              index > 0 ? index / 2 : 0
                            ].name
                          }
                        </Text>
                        <Text
                          color="$text700"
                          fontWeight="$normal"
                          fontSize="$xs"
                          fontFamily="$body"
                          numberOfLines={2}
                        >
                          {`${
                            analytics[tab].topEngagements[
                              index > 0 ? index / 2 : 0
                            ].growth
                          } views`}
                        </Text>
                      </VStack>
                    );
                  } else {
                    return (
                      <Divider
                        orientation="vertical"
                        w="$0.5"
                        h="$10"
                        mx="auto"
                        bgColor="$background200"
                      />
                    );
                  }
                })}
              </HStack>
            </Card>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};
export const NotificationsView = () => {
  return (
    <Box
      bg="red"
      $md-minWidth="$96"
      $base-minWidth="$64"
      minHeight="$72"
      borderRadius="$3xl"
      maxWidth="$1/2"
      alignSelf="center"
      my="$6"
    >
      <Text textAlign="center" fontSize="$lg" color="$white" my="auto">
        Notifications
      </Text>
    </Box>
  );
};
export const CalendarView = () => {
  return (
    <Box
      bg="blue"
      $md-minWidth="$96"
      $base-minWidth="$64"
      minHeight="$72"
      borderRadius="$3xl"
      maxWidth="$1/2"
      alignSelf="center"
      my="$6"
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
export const CurrencyView = () => {
  return (
    <Box
      bg="black"
      $md-minWidth="$96"
      $base-minWidth="$64"
      minHeight="$72"
      borderRadius="$3xl"
      maxWidth="$1/2"
      alignSelf="center"
      my="$6"
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
export const ProfileView = () => {
  return (
    <Box
      bg="$amber600"
      $md-minWidth="$96"
      $base-minWidth="$64"
      minHeight="$72"
      borderRadius="$3xl"
      maxWidth="$1/2"
      alignSelf="center"
      my="$6"
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
export const SettingsView = () => {
  return (
    <Box
      bg="$violet400"
      $md-minWidth="$96"
      $base-minWidth="$64"
      minHeight="$72"
      borderRadius="$3xl"
      maxWidth="$1/2"
      alignSelf="center"
      my="$6"
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
export const HelpView = () => {
  return (
    <Box
      bg="$green400"
      $md-minWidth="$96"
      $base-minWidth="$64"
      minHeight="$72"
      borderRadius="$3xl"
      maxWidth="$1/2"
      alignSelf="center"
      my="$6"
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
export const ExitView = () => {
  return (
    <Box
      bg="$tertiary600"
      $md-minWidth="$96"
      $base-minWidth="$64"
      minHeight="$72"
      borderRadius="$3xl"
      maxWidth="$1/2"
      alignSelf="center"
      my="$6"
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
