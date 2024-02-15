import {
  FigmaIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from 'lucide-react-native';

export const animationValues = [
  {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: {
      duration: 300,
      delay: 400,
      type: 'timing',
    },
    icon: GithubIcon,
  },
  {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: {
      duration: 300,
      delay: 300,
      type: 'timing',
    },
    icon: TwitchIcon,
  },
  {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: {
      duration: 300,
      delay: 200,
      type: 'timing',
    },
    icon: TwitterIcon,
  },
  {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: {
      duration: 300,
      delay: 100,
      type: 'timing',
    },
    icon: FigmaIcon,
  },
];
