import {
  Heart,
  MessageCircle,
  PlusSquare,
  User,
  LogOut,
  Info,
  Settings,
} from 'lucide-react-native';

export type postType = {
  name: string;
  bio: string;
  profileImage: string;
  caption: string;
  likedBy: string;
  image: string;
  key: number;
  postLiked?: boolean;
  followStatus?: boolean;
  postSaved?: boolean;
};

export const menuItems = [
  {
    heading: '',
    subItems: [
      {
        key: 'account',
        value: 'Account',
        icon: User,
      },
      {
        key: 'messages',
        value: 'Messages',
        icon: MessageCircle,
      },
      {
        key: 'notifications',
        value: 'Notifications',
        icon: Heart,
      },
      {
        key: 'create',
        value: 'Create',
        icon: PlusSquare,
      },
      {
        key: 'settings',
        value: 'Settings',
        icon: Settings,
      },

      {
        key: 'about',
        value: 'About',
        icon: Info,
      },
      {
        key: 'signOut',
        value: 'Sign Out',
        icon: LogOut,
      },
    ],
  },
];

export const flyoutItems = [
  {
    key: 'settings',
    value: 'Settings',
    icon: Settings,
  },

  {
    key: 'signOut',
    value: 'Sign Out',
    icon: LogOut,
  },
];

export const postItems = [
  {
    key: 0,
    name: 'John Doe',
    bio: '@johndoe',
    profileImage: require('../assets/music8.png'),
    caption: 'Hello World',
    likedBy: 'Michele',
    image: require('../assets/music2.png'),
  },
  {
    key: 1,
    name: 'Jared Dunn',
    bio: '@jareddunn',
    profileImage: require('../assets/music6.png'),
    caption: 'Nature',
    likedBy: 'Donald',
    image: require('../assets/music1.png'),
  },
  {
    key: 2,
    name: 'Mila Dann',
    bio: '@miladann',
    profileImage: require('../assets/music3.png'),
    caption: '',
    likedBy: 'John',
    image: require('../assets/music3.png'),
  },
  {
    key: 3,
    name: 'Mike',
    bio: '@mike',
    profileImage: require('../assets/music3.png'),
    caption: 'Hello World',
    likedBy: '',
    image: require('../assets/music7.png'),
  },
  {
    key: 4,
    name: 'Richard Loyd',
    bio: '@richardloyd',
    profileImage: require('../assets/music1.png'),
    caption: 'Hello World',
    likedBy: 'Ben',
    image: require('../assets/music4.png'),
  },
  {
    key: 5,
    name: 'Ben',
    bio: '@ben',
    profileImage: require('../assets/music8.png'),
    caption: 'Hello World',
    likedBy: 'Mike',
    image: require('../assets/music5.png'),
  },
  {
    key: 6,
    name: 'Michele',
    bio: '@michele',
    profileImage: require('../assets/music2.png'),
    caption: 'Hello World',
    likedBy: 'John',
    image: require('../assets/music6.png'),
  },
];

export const footerTags = [
  'Privacy Policy',
  'Terms of Service',
  'Cookie Policy',
  'Ads info',
  'API',
  'Jobs',
  'Language',
  'Locations',
  'More',
];

export const suggestions = [];

export const sidebarItems = [
  {
    key: 'profile',
    value: 'Profile',
  },
  {
    key: 'account',
    value: 'Account',
  },
  {
    key: 'appearance',
    value: 'Appearance',
  },
  {
    key: 'notifications',
    value: 'Notifications',
  },
  {
    key: 'display',
    value: 'Display',
  },
];
export const fonts = [
  {
    label: 'Inter',
    value: 'inter',
  },
  {
    label: 'Monospace',
    value: 'monospace',
  },
  {
    label: 'System',
    value: 'system',
  },
];
export const languages = [
  {
    label: 'English',
    value: 'english',
  },
  {
    label: 'Chinese',
    value: 'chinese',
  },
  {
    label: 'Russian',
    value: 'russian',
  },
];
export const emails = [
  {
    label: 'm@example.com',
    value: 'm@example.com',
  },
  {
    label: 'm@google.com',
    value: 'm@google.com',
  },
  {
    label: 'm@support.com',
    value: 'm@support.com',
  },
];
export const emailNotifications = [
  {
    title: 'Communication emails',
    subTitle: 'Receive emails about your account activity.',
  },
  {
    title: 'Marketing emails',
    subTitle: 'Receive emails about new products, features, and more.',
  },
  {
    title: 'Social emails',
    subTitle: 'Receive emails for friend requests, follows, and more.',
  },
  {
    title: 'Security emails',
    subTitle: 'Receive emails about your account activity and security.',
  },
];
export const notifications = [
  'All new messages',
  'Direct messages and mentions',
  'Nothing',
];
export const displaySidebarItems = [
  'Recents',
  'Home',
  'Applications',
  'Desktop',
  'Downloads',
  'Documents',
];
export const dummyUsernames = [
  'test',
  'test1',
  'test2',
  'test3',
  'gluestack',
  'gluestack1',
  'gluestack2',
  'gluestack3',
  'user3',
  'user2',
  'user1',
  'user',
  'username',
  'username1',
  'username2',
  'username3',
  'developer',
];
