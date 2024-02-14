import {
  FigmaIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from 'lucide-react-native';

export const subAnimations = [
  {
    initial: { opacity: 0, scale: 0, y: 50 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0, y: 50 },
    transition: {
      duration: 1000,
      type: 'spring',
    },
    icon: GithubIcon,
  },
  {
    initial: { opacity: 0, scale: 0, y: 40 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0, y: 40 },
    transition: {
      duration: 800,
      type: 'spring',
    },
    icon: TwitchIcon,
  },
  {
    initial: { opacity: 0, scale: 0, y: 30 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0, y: 30 },
    transition: {
      duration: 600,
      type: 'spring',
    },
    icon: TwitterIcon,
  },
  {
    initial: { opacity: 0, scale: 0, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0, y: 20 },
    transition: {
      duration: 400,
      type: 'spring',
    },
    icon: FigmaIcon,
  },
];
