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
export const posts = [
  {
    name: 'John Doe',
    bio: 'Software Engineer',
    profileImage: require('../assets/music8.png'),
    caption: 'Hello World',
    likedBy: 'Michele',
    image: require('../assets/music2.png'),
  },
  {
    name: 'Jared Dunn',
    bio: 'Ranchi',
    profileImage: require('../assets/music6.png'),
    caption: 'Nature',
    likedBy: 'Donald',
    image: require('../assets/music1.png'),
  },
  {
    name: 'Mila Dann',
    bio: 'Hyderabad',
    profileImage: require('../assets/music3.png'),
    caption: '',
    likedBy: 'John',
    image: require('../assets/music3.png'),
  },
  {
    name: 'Richard Loyd',
    bio: 'Bangalore',
    profileImage: require('../assets/music1.png'),
    caption: 'Hello World',
    likedBy: 'Ben',
    image: require('../assets/music4.png'),
  },
  {
    name: 'Ben',
    bio: 'Mumbai',
    profileImage: require('../assets/music8.png'),
    caption: 'Hello World',
    likedBy: 'Mike',
    image: require('../assets/music5.png'),
  },
  {
    name: 'Michele',
    bio: 'Delhi',
    profileImage: require('../assets/music2.png'),
    caption: 'Hello World',
    likedBy: 'John',
    image: require('../assets/music6.png'),
  },
  {
    name: 'Mike',
    bio: 'Chennai',
    profileImage: require('../assets/music3.png'),
    caption: 'Hello World',
    likedBy: '',
    image: require('../assets/music7.png'),
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
