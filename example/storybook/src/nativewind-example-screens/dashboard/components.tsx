import {
  Text,
  Box,
  VStack,
  HStack,
  Divider,
  Pressable,
  useToken,
  Menu,
  MenuItem,
  MenuItemLabel,
  TooltipContent,
  Tooltip,
  TooltipText,
  Center,
  Fab,
  FabIcon,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@/components/nativewind';
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
  Tooltip as Tooler,
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { analytics } from './constants';

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
  ArcElement,
  Tooler
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
const Card = ({ children, ...props }: any) => {
  return (
    <VStack
      className="rounded-xl border border-outline-200 bg-background-0"
      $base-p="$4"
      $xs-p="$6"
      hardShadow="5"
      {...props}
    >
      {children}
    </VStack>
  );
};
const UserCard = ({ children, direction = 'row', ...props }: any) => {
  return direction === 'row' ? (
    <HStack className="w-full items-center" space="md" {...props}>
      {children}
    </HStack>
  ) : (
    <VStack className="w-full items-center" {...props}>
      {children}
    </VStack>
  );
};
const UserCardAvatar = ({ name, src, ...props }: any) => {
  return (
    <Avatar {...props}>
      <AvatarFallbackText>{name}</AvatarFallbackText>
      <AvatarImage source={src} />
    </Avatar>
  );
};
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
            className="p-2 bg-trueGray-800 rounded-xl"
            $active-bg="$trueGray600"
            $hover-bg="$trueGray700"
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
  const iconSize = useToken('space', '6');
  const iconColor = useToken('colors', 'trueGray400');

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
          <Fab
            size="md"
            placement="bottom right"
            isHovered={false}
            isDisabled={false}
            isPressed={false}
            $base-display="flex"
            $md-display="none"
            renderInPortal={true}
            position="fixed"
            {...triggerProps}
          >
            <FabIcon as={MenuIcon} />
          </Fab>
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

export const ChartOptionsMenu = ({ menuData }: { menuData: Array<string> }) => {
  const [selected, setSelected] = React.useState(new Set([]));
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const iconSize = useToken('space', '6');
  const iconColor = useToken('colors', 'background400');

  return (
    <Menu
      placement="left top"
      selectionMode="single"
      borderWidth={1}
      selectedKeys={selected}
      closeOnSelect={true}
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      /*TYPE ERROR FIX LATER*/
      onSelectionChange={(keys: any) => {
        setSelected(keys);
        setIsOpen(false);
      }}
      onPointerLeave={() => setIsOpen(false)}
      trigger={({ ...triggerProps }) => {
        return (
          <Pressable {...triggerProps}>
            <MoreVerticalIcon
              color={iconColor}
              width={iconSize}
              height={iconSize}
            />
          </Pressable>
        );
      }}
    >
      {menuData.map((item) => (
        <MenuItem key={item} textValue={item}>
          <MenuItemLabel size="sm" ml="$2">
            {item}
          </MenuItemLabel>
        </MenuItem>
      ))}
    </Menu>
  );
};

export const CommentCard = ({ userName, comment }: CommentCardProps) => {
  return (
    <VStack className="min-w-56" space="sm">
      <UserCard
        direction="row"
        className="items-center justify-start"
        space="md"
      >
        <UserCardAvatar
          name={userName}
          src={require('../../../assets/avatar-icon.png')}
          className="h-9 w-9"
        />
        <VStack>
          <Text className="text-sm font-bold text-text-900">{userName}</Text>
          <Text className="text-sm font-normal text-text-700">Follower</Text>
        </VStack>
      </UserCard>
      <Text className="text-sm font-normal text-text-700">{comment}</Text>
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
    <Card $md-minWidth="$1/4" $base-minWidth="$full" className="grow">
      <HStack className="items-start justify-between">
        <VStack className="mr-8" space="xs">
          <Text
            className="text-sm font-medium text-text-900"
            fontFamily="$heading"
          >
            Weekly {title}
          </Text>
          <Text
            className="text-2xl font-bold text-text-900"
            fontFamily="$heading"
          >
            {totalValue}
          </Text>
          <Text
            className="text-xs font-normal text-text-700"
            fontFamily="$body"
          >
            {subtitleValue} from last week
          </Text>
        </VStack>
        <Box className="p-2 bg-background-50 rounded-lg">
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
  const color = useToken('colors', 'primary400');
  const textColor = useToken('colors', 'text400');
  const borderColor = useToken('colors', 'border200');
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
        grid: {
          drawBorder: true,
          color: borderColor,
        },
        ticks: {
          beginAtZero: true,
          color: textColor,
          fontSize: 10,
        },
      },
      x: {
        grid: {
          drawBorder: true,
          color: borderColor,
        },
        ticks: {
          beginAtZero: true,
          color: textColor,
          fontSize: 10,
        },
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
    maintainAspectRatio: false,
    spanGaps: false,
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
        ticks: {
          autoSkip: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
      customCanvasBackgroundColor: {
        color: backgroundColor,
      },
      filler: {
        propagate: false,
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
          target: true,
          boundary: 'start',
          above: aboveFillColor,
          below: belowFillColor,
        },
        elements: {
          line: {
            tension: 0.300306,
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
    <Box className="w-full px-4">
      <HStack $base-overflowX="scroll" $md-overflowX="visible">
        <Pressable
          opacity={tab === 'instagram' ? '$100' : '$60'}
          onPress={() => setTab('instagram')}
          className="min-w-32"
        >
          <HStack
            className="items-center self-center justify-center p-1 border-b-2"
            space="xs"
            borderBottomColor={
              tab === 'instagram' ? '$primary400' : '$background0'
            }
          >
            <InstagramIcon
              color={iconColor}
              height={iconSize}
              width={iconSize}
            />

            <Text className="text-md text-primary-500" fontFamily="$heading">
              Instagram
            </Text>
          </HStack>
        </Pressable>
        <Pressable
          opacity={tab === 'youtube' ? '$100' : '$60'}
          onPress={() => setTab('youtube')}
          className="min-w-32"
        >
          <HStack
            className="items-center self-center justify-center p-1 border-b-2"
            space="xs"
            borderBottomColor={
              tab === 'youtube' ? '$primary400' : '$background0'
            }
          >
            <YoutubeIcon color={iconColor} height={iconSize} width={iconSize} />
            <Text className="text-md text-primary-500" fontFamily="$heading">
              Youtube
            </Text>
          </HStack>
        </Pressable>
        <Pressable
          opacity={tab === 'twitter' ? '$100' : '$60'}
          onPress={() => setTab('twitter')}
          className="min-w-32"
        >
          <HStack
            space="xs"
            className="items-center self-center justify-center border-b-2 p-1"
            borderBottomColor={
              tab === 'twitter' ? '$primary400' : '$background0'
            }
          >
            <TwitterIcon color={iconColor} height={iconSize} width={iconSize} />
            <Text className="text-md text-primary-500" fontFamily="$heading">
              Twitter
            </Text>
          </HStack>
        </Pressable>
      </HStack>
      <VStack className="items-center" $lg-my="$6" $base-my="$4">
        <HStack
          className="w-full flex-wrap"
          $lg-columnGap="$6"
          $base-columnGap="$4"
          $lg-rowGap="$6"
          $base-rowGap="$4"
        >
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
          className="flex-wrap w-full"
          $lg-mt="$6"
          $base-mt="$4"
          $lg-columnGap="$6"
          $base-columnGap="$4"
          $lg-rowGap="$6"
          $base-rowGap="$4"
          $base-justifyContent="center"
          $lg-justifyContent="flex-start"
          $base-maxWidth="$full"
          $base-alignSelf="center"
        >
          <Card
            className="items-start"
            $base-p="$4"
            space="sm"
            $md-flexGrow={1}
            $base-minWidth="$full"
            $md-minWidth="$1/3"
          >
            <HStack className="justify-between w-full">
              <Text
                className="text-text-900 font-bold"
                $md-fontSize="$lg"
                $base-fontSize="$md"
                fontFamily="$heading"
              >
                Latest Posts
              </Text>
              <ChartOptionsMenu
                menuData={['Most Liked', 'Neutral Posts', 'Most Hated']}
              />
            </HStack>
            <Text
              className="text-text-700 font-normal"
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
              className="mx-auto mt-6 min-h-32"
              $md-minWidth="$80"
              $base-minWidth="$40"
              $base-maxWidth="$56"
              $xs-maxWidth="$72"
              $sm-maxWidth="$full"
            >
              <BarChart />
            </Box>
          </Card>
          <Card
            className="items-start"
            space="sm"
            $base-p="$4"
            $md-flexGrow={1}
            $base-minWidth="$full"
            $md-minWidth="$1/3"
          >
            <Text
              className="text-text-900 font-bold"
              $md-fontSize="$lg"
              $base-fontSize="$md"
              fontFamily="$heading"
            >
              Engaged Users
            </Text>
            <Box
              className="mx-auto mt-6 flex flex-row justify-center"
              $md-minWidth="$80"
              $base-minWidth="$40"
              $base-maxWidth="$56"
              $xs-maxWidth="$72"
              $sm-maxWidth="$full"
            >
              <AreaChart />
            </Box>
            <VStack className="items-center w-full mt-3.5">
              <Text
                className="text-text-900 font-medium text-2xl"
                fontFamily="$heading"
              >
                {analytics[tab].engagedUsers.users}
              </Text>
              <Text
                className="text-text-700 font-normal text-xs"
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
          className="flex-wrap w-full"
          $lg-mt="$6"
          $base-mt="$4"
          $lg-columnGap="$6"
          $base-columnGap="$4"
          $lg-rowGap="$6"
          $base-rowGap="$4"
          $base-justifyContent="center"
          $lg-justifyContent="flex-start"
          $base-maxWidth="$full"
          $base-alignSelf="center"
        >
          <Card
            className="items-start"
            $base-p="$4"
            space="sm"
            $md-flexGrow={1}
            $base-minWidth="$full"
            $md-minWidth="$1/3"
          >
            <HStack className="justify-between w-full">
              <VStack space="sm">
                <Text
                  className="text-text-900 font-bold"
                  $md-fontSize="$lg"
                  $base-fontSize="$md"
                  fontFamily="$heading"
                >
                  Audience Age Split
                </Text>
                <Text
                  className="text-text-700 font-normal"
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
              <ChartOptionsMenu
                menuData={[
                  'Most Active',
                  'Most Interacted',
                  'Less Active',
                  'Less Interacted',
                ]}
              />
            </HStack>
            <HStack className="items-center self-center mt-4" space="md">
              <Box
                className="h-56"
                $base-maxWidth="$24"
                $sm-maxWidth="$40"
                $xl-maxWidth="$48"
              >
                <PieChart />
              </Box>
              <VStack
                className="border-outline-200 rounded-md border p-4"
                hardShadow="5"
                space="md"
              >
                <HStack space="sm">
                  <Box
                    className="rounded-full bg-primary-0"
                    $sm-w="$5"
                    $base-w="$3"
                    $md-h="$5"
                    $base-h="$3"
                  />
                  <Text
                    className="text-text-900 font-normal"
                    $sm-fontSize="$sm"
                    $base-fontSize="$xs"
                    fontFamily="$body"
                  >
                    40-45 yrs
                  </Text>
                </HStack>
                <HStack space="sm">
                  <Box
                    className="rounded-full bg-primary-50"
                    $sm-w="$5"
                    $base-w="$3"
                    $md-h="$5"
                    $base-h="$3"
                  />
                  <Text
                    className="text-text-900"
                    $sm-fontSize="$sm"
                    $base-fontSize="$xs"
                    fontWeight="$normal"
                    fontFamily="$body"
                  >
                    35-40 yrs
                  </Text>
                </HStack>
                <HStack space="sm">
                  <Box
                    className="rounded-full bg-primary-100"
                    $sm-w="$5"
                    $base-w="$3"
                    $md-h="$5"
                    $base-h="$3"
                  />
                  <Text
                    className="text-text-900 font-normal"
                    $sm-fontSize="$sm"
                    $base-fontSize="$xs"
                    fontFamily="$body"
                  >
                    30-35 yrs
                  </Text>
                </HStack>
                <HStack space="sm">
                  <Box
                    className="rounded-full bg-primary-400"
                    $sm-w="$5"
                    $base-w="$3"
                    $md-h="$5"
                    $base-h="$3"
                  />
                  <Text
                    className="text-text-900 font-normal"
                    $sm-fontSize="$sm"
                    $base-fontSize="$xs"
                    fontFamily="$body"
                  >
                    25-30 yrs
                  </Text>
                </HStack>
              </VStack>
            </HStack>
          </Card>
          <VStack
            className="content-start"
            $lg-columnGap="$6"
            $base-columnGap="$4"
            $lg-rowGap="$6"
            $base-rowGap="$4"
            $md-flexGrow={1}
            $base-minWidth="$full"
            $md-minWidth="$1/3"
          >
            <Card space="md">
              <VStack className="self-start" space="sm">
                <Text
                  className="text-text-900 font-bold"
                  $base-fontSize="$md"
                  $md-fontSize="$lg"
                  fontFamily="$heading"
                >
                  Top Locations
                </Text>
                <Text
                  className="text-text-700 font-normal"
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
                className="items-center mt-6 w-full"
                $lg-px="$5"
                $md-px="$4"
                $base-px="$2"
              >
                {[...Array(5)].map((_, index) => {
                  if (index % 2 === 0) {
                    return (
                      <VStack className="items-center" space="xs" key={index}>
                        <Text
                          className="text-text-900 font-bold"
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
                          className="text-text-700 font-normal text-xs"
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
                        className="w-0.5 h-10 mx-auto bg-background-200"
                        orientation="vertical"
                      />
                    );
                  }
                })}
              </HStack>
            </Card>
            <Card space="md">
              <VStack className="self-start" space="sm">
                <Text
                  className="text-text-900 font-bold"
                  $base-fontSize="$md"
                  $md-fontSize="$lg"
                  fontFamily="$heading"
                >
                  View Engagements
                </Text>
                <Text
                  className="text-text-700 font-normal"
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
                className="items-center mt-6 w-full"
                $lg-px="$5"
                $md-px="$4"
                $base-px="$2"
              >
                {[...Array(5)].map((_, index) => {
                  if (index % 2 === 0) {
                    return (
                      <VStack className="items-center" space="xs" key={index}>
                        <Text
                          className="text-text-900 font-bold"
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
                          className="text-text-700 font-normal text-xs"
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
                        className="w-0.5 h-10 mx-auto bg-background-200"
                        orientation="vertical"
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
    <Center className="px-4 flex-1">
      <Box className="border rounded-3xl self-center border-outline-200 w-full min-h-96">
        <Text className="text-center text-lg text-background-950 my-auto p-4">
          Notifications
        </Text>
      </Box>
    </Center>
  );
};
export const CalendarView = () => {
  return (
    <Center className="px-4 flex-1">
      <Box className="border rounded-3xl self-center border-outline-200 w-full min-h-96">
        <Text className="text-center text-lg text-background-950 my-auto p-4">
          Calendar
        </Text>
      </Box>
    </Center>
  );
};
export const CurrencyView = () => {
  return (
    <Center className="px-4 flex-1">
      <Box className="border rounded-3xl self-center border-outline-200 w-full min-h-96">
        <Text className="text-center text-lg text-background-950 my-auto p-4">
          Currency
        </Text>
      </Box>
    </Center>
  );
};
export const ProfileView = () => {
  return (
    <Center className="px-4 flex-1">
      <Box className="border rounded-3xl self-center border-outline-200 w-full min-h-96">
        <Text className="text-center text-lg text-background-950 my-auto p-4">
          Profile
        </Text>
      </Box>
    </Center>
  );
};
export const SettingsView = () => {
  return (
    <Center className="px-4 flex-1">
      <Box className="border rounded-3xl self-center border-outline-200 w-full min-h-96">
        <Text className="text-center text-lg text-background-950 my-auto p-4">
          Settings
        </Text>
      </Box>
    </Center>
  );
};
export const HelpView = () => {
  return (
    <Center className="px-4 flex-1">
      <Box className="border rounded-3xl self-center border-outline-200 w-full min-h-96">
        <Text className="text-center text-lg text-background-950 my-auto p-4">
          Help
        </Text>
      </Box>
    </Center>
  );
};
export const ExitView = () => {
  return (
    <Center className="px-4 flex-1">
      <Box className="border-1 rounded-3xl self-center border-outline-200 w-full minh-96">
        <Text className="text-center text-lg text-background-950 my-auto p-4">
          Exit
        </Text>
      </Box>
    </Center>
  );
};
