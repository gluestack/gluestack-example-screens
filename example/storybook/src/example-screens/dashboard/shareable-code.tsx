import {
  Input,
  InputField,
  HStack,
  VStack,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Text,
  Box,
  Divider,
  Pressable,
  useToken,
  Menu,
  MenuItem,
  MenuItemLabel,
  TooltipContent,
  TooltipText,
  Tooltip,
} from '@gluestack-ui-new/themed';
import {
  ArrowRight,
  BellIcon,
  Search,
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
import React from 'react';
import {
  Chart as ChartJS,
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
ChartJS.register(
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

interface CommentCardProps {
  userName: string;
  comment: string;
}

interface SidebarItemProps {
  tooltipText: string;
  icon: React.JSX.Element;
  itemProps: any;
}

const SidebarItem = ({ icon, tooltipText, itemProps }: SidebarItemProps) => {
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

const UserCardStack = ({ children, ...props }: any) => {
  return (
    <VStack flex={1} {...props}>
      {children}
    </VStack>
  );
};

const UserCardAvatar = ({ name, src, ...props }: any) => {
  return (
    <Avatar {...props}>
      <AvatarFallbackText>{name.charAt(0)}</AvatarFallbackText>
      <AvatarImage source={src} />
    </Avatar>
  );
};

const UserCard = ({ children, direction = 'row', ...props }: any) => {
  return direction === 'row' ? (
    <HStack w="$full" alignItems="center" space="md" {...props}>
      {children}
    </HStack>
  ) : (
    <VStack w="$full" alignItems="center" {...props}>
      {children}
    </VStack>
  );
};

const Card = ({ children, ...props }: any) => {
  return (
    <VStack
      $base-p="$5"
      $xs-p="$6"
      borderRadius="$xl"
      borderWidth="$1"
      borderColor="$border200"
      hardShadow="5"
      {...props}
    >
      {children}
    </VStack>
  );
};

const MiniNavbarMenu = ({
  onViewChange,
}: {
  onViewChange: (view: string) => void;
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
      onSelectionChange={(keys) => {
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

const CommentCard = ({ userName, comment }: CommentCardProps) => {
  return (
    <VStack justifyContent="flex-start" minWidth="$64" space="sm" mx="$1">
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

const NotificationsView = () => {
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

const CalendarView = () => {
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

const CurrencyView = () => {
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

const ProfileView = () => {
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

const SettingsView = () => {
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

const HelpView = () => {
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

const ExitView = () => {
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

const comments = [
  {
    userName: 'John Smith',
    comment: 'Loved the animation! Can you link the tutorial? 👀',
    profileImage: '../assets/avatar-icon.png',
  },
  {
    userName: 'Mila Dann',
    comment: 'This looks great! Have been following you from a long time 🤩',
    profileImage: '../assets/avatar-icon.png',
  },
  {
    userName: 'Mila Dann',
    comment: 'Woah! loved the transition 💯',
    profileImage: '../assets/avatar-icon.png',
  },
  {
    userName: 'Ruth Joseph',
    comment: 'Woah! Would love to try this out 🤯',
    profileImage: '../assets/avatar-icon.png',
  },
  {
    userName: 'Mila Dann',
    comment: 'Woah! loved the transition 💯',
    profileImage: '../assets/avatar-icon.png',
  },
];

const analytics = {
  instagram: {
    weeklyViews: {
      views: 100000,
      growth: 0,
      loss: '1.5',
    },
    weeklyFollowers: {
      views: 15790,
      growth: '11.5',
      loss: 0,
    },
    weeklyComments: {
      views: 62809,
      growth: '0.5',
      loss: 0,
    },
    engagedUsers: {
      users: 12200,
      growth: '1.5',
      loss: 0,
    },
    totalVisits: 90279,
    topLocations: [
      {
        name: 'Canada',
        growth: '10.5',
      },
      {
        name: 'US',
        growth: '8.2',
      },
      {
        name: 'India',
        growth: '6.5',
      },
    ],
    topEngagements: [
      {
        name: 'Videos',
        growth: '7688',
      },
      {
        name: 'Corousel',
        growth: '122',
      },
      {
        name: 'Pictures',
        growth: '6923',
      },
    ],
  },
  youtube: {
    weeklyViews: {
      views: 900000,
      growth: 0,
      loss: '3.5',
    },
    weeklyFollowers: {
      views: 45790,
      growth: '1.5',
      loss: 0,
    },
    weeklyComments: {
      views: 682809,
      growth: '1.5',
      loss: 0,
    },
    engagedUsers: {
      users: 92200,
      growth: '6.5',
      loss: 0,
    },
    totalVisits: 90279,
    topLocations: [
      {
        name: 'India',
        growth: '12.5',
      },
      {
        name: 'UK',
        growth: '4.2',
      },
      {
        name: 'Canada',
        growth: '1.5',
      },
    ],
    topEngagements: [
      {
        name: 'Videos',
        growth: '8888',
      },
      {
        name: 'Corousel',
        growth: '4122',
      },
      {
        name: 'Pictures',
        growth: '6723',
      },
    ],
  },
  twitter: {
    weeklyViews: {
      views: 300000,
      growth: 0,
      loss: '9.5',
    },
    weeklyFollowers: {
      views: 725790,
      growth: '8.1',
      loss: 0,
    },
    weeklyComments: {
      views: 82809,
      growth: '3.5',
      loss: 0,
    },
    engagedUsers: {
      users: 492200,
      growth: '7.5',
      loss: 0,
    },
    totalVisits: 190279,
    topLocations: [
      {
        name: 'Europe',
        growth: '10.5',
      },
      {
        name: 'Russia',
        growth: '6.1',
      },
      {
        name: 'India',
        growth: '3.5',
      },
    ],
    topEngagements: [
      {
        name: 'Videos',
        growth: '9988',
      },
      {
        name: 'Corousel',
        growth: '4822',
      },
      {
        name: 'Pictures',
        growth: '6723',
      },
    ],
  },
  facebook: {
    weeklyViews: {
      views: 600000,
      growth: 0,
      loss: '9.5',
    },
    weeklyFollowers: {
      views: 745790,
      growth: '8.5',
      loss: 0,
    },
    weeklyComments: {
      views: 8682809,
      growth: '5.5',
      loss: 0,
    },
    engagedUsers: {
      users: 192200,
      growth: '3.5',
      loss: 0,
    },
    totalVisits: 7690279,
    topLocations: [
      {
        name: 'China',
        growth: '10.5',
      },
      {
        name: 'India',
        growth: '8.2',
      },
      {
        name: 'Germany',
        growth: '3.5',
      },
    ],
    topEngagements: [
      {
        name: 'Videos',
        growth: '8898',
      },
      {
        name: 'Corousel',
        growth: '4822',
      },
      {
        name: 'Pictures',
        growth: '6923',
      },
    ],
  },
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

const Dashboard: any = ({ w = '100%', ...props }: any) => {
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
  const iconColor = useToken('colors', 'background200');
  const searchIconColor = useToken('colors', 'background500');
  const bellIconColor = useToken('colors', 'background600');
  const arrowIconColor = useToken('colors', 'background800');
  const miniNavbarIconColor = useToken('colors', 'white');
  const iconSize = useToken('space', '6');
  const arrowIconSize = useToken('space', '3');
  const searchIconSize = useToken('space', '3.5');

  const handleViewChange = (viewInput: typeof view) => {
    setView(viewInput);
  };

  return (
    <Box
      {...props}
      w={w}
      borderWidth="$1"
      borderColor="$border200"
      borderRadius="$lg"
      display="flex"
      $base-flexDirection="column"
      $md-flexDirection="row"
      bg="$background0"
    >
      <HStack
        bg="$background950"
        justifyContent="space-between"
        alignItems="center"
        $base-display="flex"
        $md-display="none"
        p="$2"
        mb="$2"
        sx={{
          _web: {
            position: 'sticky',
            top: 0,
            zIndex: 99,
          },
        }}
      >
        <Pressable p="$2">
          <MiniNavbarMenu
            onViewChange={(view: string) => handleViewChange(view)}
          />
        </Pressable>
        <Pressable p="$2">
          <Search
            color={miniNavbarIconColor}
            width={iconSize}
            height={iconSize}
          />
        </Pressable>
      </HStack>
      <VStack
        alignItems="center"
        mb="$10"
        ml="$6"
        justifyContent="space-between"
        $base-display="none"
        $md-display="flex"
        h="$full"
        top={45}
        sx={{
          _web: {
            position: 'sticky',
          },
        }}
      >
        <VStack
          alignItems="center"
          $md-p="$4"
          $base-p="$2"
          bg="$background950"
          space="lg"
          borderRadius="$3xl"
        >
          <SidebarItem
            tooltipText="Dashboard"
            itemProps={{
              bg: view === 'home' ? '$background800' : '$background950',
              onPress: () => handleViewChange('home'),
            }}
            icon={
              <LayoutDashboardIcon
                color={iconColor}
                width={iconSize}
                height={iconSize}
              />
            }
          />
          <SidebarItem
            tooltipText="Announcements"
            itemProps={{
              bg:
                view === 'notifications' ? '$background800' : '$background950',
              onPress: () => handleViewChange('notifications'),
            }}
            icon={
              <MegaphoneIcon
                color={iconColor}
                width={iconSize}
                height={iconSize}
              />
            }
          />
          <SidebarItem
            tooltipText="Calendar"
            itemProps={{
              bg: view === 'calendar' ? '$background800' : '$background950',
              onPress: () => handleViewChange('calendar'),
            }}
            icon={
              <CalendarDaysIcon
                color={iconColor}
                width={iconSize}
                height={iconSize}
              />
            }
          />
          <SidebarItem
            tooltipText="Currency"
            itemProps={{
              bg: view === 'currency' ? '$background800' : '$background950',
              onPress: () => handleViewChange('currency'),
            }}
            icon={
              <CircleDollarSignIcon
                color={iconColor}
                width={iconSize}
                height={iconSize}
              />
            }
          />
          <Divider
            bg="$background600"
            h="$0.5"
            orientation="horizontal"
            w="$full"
            my="$10"
          />
          <SidebarItem
            tooltipText="Profile"
            itemProps={{
              bg: view === 'profile' ? '$background800' : '$background950',
              onPress: () => handleViewChange('profile'),
            }}
            icon={
              <UserIcon color={iconColor} width={iconSize} height={iconSize} />
            }
          />
          <SidebarItem
            tooltipText="Settings"
            itemProps={{
              bg: view === 'settings' ? '$background800' : '$background950',
              onPress: () => handleViewChange('settings'),
            }}
            icon={
              <SettingsIcon
                color={iconColor}
                width={iconSize}
                height={iconSize}
              />
            }
          />
          <SidebarItem
            tooltipText="Help"
            itemProps={{
              bg: view === 'help' ? '$background800' : '$background950',
              onPress: () => handleViewChange('help'),
            }}
            icon={
              <BadgeHelpIcon
                color={iconColor}
                width={iconSize}
                height={iconSize}
              />
            }
          />
        </VStack>
        <VStack
          alignItems="center"
          $md-p="$4"
          $base-p="$2"
          bg="$background950"
          mt="$24"
          borderRadius="$3xl"
        >
          <SidebarItem
            tooltipText="Exit"
            itemProps={{
              bg: view === 'exit' ? '$background800' : '$background950',
              onPress: () => handleViewChange('exit'),
            }}
            icon={
              <LogOutIcon
                color={iconColor}
                width={iconSize}
                height={iconSize}
              />
            }
          />
        </VStack>
      </VStack>
      <Box
        display="flex"
        $base-flexDirection="column"
        $lg-flexDirection="row"
        flex={1}
      >
        <Box
          $xl-width="$4/6"
          $lg-width="$3/5"
          $base-width="$full"
          borderLeftWidth="$0"
          $md-borderRightWidth="$1"
          $base-borderRightWidth="$0"
          borderColor="$border200"
        >
          <VStack>
            <HStack
              $md-pt="$6"
              $lg-px="$2"
              $xl-px="$6"
              $sm-px="$4"
              $sm-pt="$4"
              $base-pt="$2"
              $base-px="$2"
              justifyContent="space-between"
              alignItems="center"
            >
              <VStack space="xs">
                <Text
                  $xl-fontSize="$3xl"
                  $md-fontSize="$xl"
                  $base-fontSize="$lg"
                  color="$text900"
                  fontWeight="$bold"
                  fontFamily="$heading"
                >
                  Good morning, John
                </Text>
                <Text
                  $md-fontSize="$sm"
                  $base-fontSize="$xs"
                  color="$text700"
                  fontWeight="$normal"
                  fontFamily="$body"
                >
                  Let’s take a look at your social presence
                </Text>
              </VStack>
              <HStack
                h="$10"
                alignItems="center"
                space="sm"
                $xl-minWidth="$1/3"
                $xl-justifyContent="flex-end"
                $base-justifyContent="center"
              >
                <HStack
                  $md-borderWidth="$1"
                  borderColor="$border300"
                  borderRadius="$lg"
                  alignItems="center"
                  space="sm"
                  $base-px="$0"
                  $md-px="$4"
                  $xl-flex={0.95}
                  $md-flex={0.8}
                  $base-flex={0.5}
                  $base-borderWidth="$0"
                  $base-display="none"
                  $md-display="flex"
                >
                  <Search
                    color={searchIconColor}
                    width={searchIconSize}
                    height={searchIconSize}
                  />
                  <Input
                    borderWidth="$0"
                    sx={{
                      _web: {
                        boxShadow: 'none',
                      },
                    }}
                    flex={0.95}
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
                <Tooltip
                  placement="top"
                  trigger={(triggerProps) => {
                    return (
                      <Pressable
                        bg="$background100"
                        borderRadius="$lg"
                        $base-p="$0.5"
                        $sm-p="$2"
                        {...triggerProps}
                      >
                        <BellIcon
                          color={bellIconColor}
                          width={iconSize}
                          height={iconSize}
                        />
                      </Pressable>
                    );
                  }}
                >
                  <TooltipContent>
                    <TooltipText>Notifications</TooltipText>
                  </TooltipContent>
                </Tooltip>
              </HStack>
            </HStack>
            <Box mt="$11">{viewRenderer(view)}</Box>
          </VStack>
        </Box>
        <Box $xl-width="$2/6" $lg-width="$2/5" $base-width="$full">
          <VStack flexGrow={1}>
            <Card
              bg="$background50"
              $base-flexGrow={1}
              $lg-flexGrow={0}
              $xs-py="$4.5"
              $xs-px="$3"
              $base-py="$3.5"
              $base-px="$2"
              $base-my="$3"
              $base-mx="$2"
              $md-mx="$4"
              $lg-mx="$3"
            >
              <UserCard direction="column">
                <UserCardAvatar
                  name="John Smith"
                  src={require('../assets/avatar-icon.png')}
                  bgColor="$black"
                  size="lg"
                />
                <UserCardStack mt="$3" alignItems="center" width="$full">
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
                    mt="$0.5"
                  >
                    john@example.com
                  </Text>
                  <Text
                    fontFamily="$body"
                    fontSize="$sm"
                    color="$text700"
                    fontWeight="$normal"
                    textAlign="center"
                    width="$full"
                    mt="$2.5"
                  >
                    Pushing the boundaries of reality with XR design wizardry
                    ✨🚀 #XRDesigner
                  </Text>
                </UserCardStack>
                <HStack
                  $base-space="xs"
                  $sm-space="md"
                  alignItems="center"
                  mt="$8"
                  mb="$2"
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
              </UserCard>
            </Card>
            <Box
              display="flex"
              flexDirection="column"
              mt="$2"
              $md-p="$6"
              $base-p="$4"
            >
              <VStack $sm-minWidth="$72" $base-minWidth="$56" space="xl">
                {comments.map((comment) => (
                  <VStack justifyContent="center" space="lg">
                    <CommentCard
                      comment={comment.comment}
                      userName={comment.userName}
                      key={comment.userName}
                    />
                    <Divider
                      orientation="horizontal"
                      bg="$background200"
                      h="$0.5"
                    />
                  </VStack>
                ))}
              </VStack>
              <Pressable mt="$20">
                <HStack
                  space="sm"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Text
                    fontWeight="$semibold"
                    fontSize="$xs"
                    color="$secondary600"
                    fontFamily="$body"
                  >
                    See All Activity
                  </Text>
                  <ArrowRight
                    color={arrowIconColor}
                    width={arrowIconSize}
                    height={arrowIconSize}
                  />
                </HStack>
              </Pressable>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
