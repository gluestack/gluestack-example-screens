import {
  PlayCircle,
  LayoutGrid,
  Radio,
  ListMusic,
  Music2,
  User,
  Mic2,
  Library,
} from 'lucide-react-native';

export const sidebarItems = [
  {
    heading: 'Discover',
    subItems: [
      {
        key: 'Listen Now',
        value: 'Listen Now',
        icon: PlayCircle,
      },
      {
        key: 'Browse',
        value: 'Browse',
        icon: LayoutGrid,
      },
      {
        key: 'Radio',
        value: 'Radio',
        icon: Radio,
      },
    ],
  },
  {
    heading: 'Library',
    subItems: [
      {
        key: 'Playlists',
        value: 'Playlists',
        icon: ListMusic,
      },
      {
        key: 'Songs',
        value: 'Songs',
        icon: Music2,
      },
      {
        key: 'Made for You',
        value: 'Made for You',
        icon: User,
      },
      {
        key: 'Artists',
        value: 'Artists',
        icon: Mic2,
      },
      {
        key: 'Albums',
        value: 'Albums',
        icon: Library,
      },
    ],
  },
  {
    heading: 'Playlists',
    subItems: [
      {
        key: 'Recently Added',
        value: 'Recently Added',
        icon: ListMusic,
      },
      {
        key: 'Recently Played',
        value: 'Recently Played',
        icon: ListMusic,
      },
      {
        key: 'Top Songs',
        value: 'Top Songs',
        icon: ListMusic,
      },
      {
        key: 'Top Albums',
        value: 'Top Albums',
        icon: ListMusic,
      },
      {
        key: 'Top Artists',
        value: 'Top Artists',
        icon: ListMusic,
      },
      {
        key: 'Logic Discography',
        value: 'Logic Discography',
        icon: ListMusic,
      },
      {
        key: 'BedTime Beats',
        value: 'BedTime Beats',
        icon: ListMusic,
      },
      {
        key: 'Feeling Happy',
        value: 'Feeling Happy',
        icon: ListMusic,
      },
      {
        key: 'I miss Y2K Pop',
        value: 'I miss Y2K Pop',
        icon: ListMusic,
      },
      {
        key: 'Runtober',
        value: 'Runtober',
        icon: ListMusic,
      },
      {
        key: 'Mellow Days',
        value: 'Mellow Days',
        icon: ListMusic,
      },
      {
        key: 'Eminem Essentials',
        value: 'Eminem Essentials',
        icon: ListMusic,
      },
    ],
  },
];
