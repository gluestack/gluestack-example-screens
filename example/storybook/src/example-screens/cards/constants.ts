import { Mail, Type, XCircle } from 'lucide-react-native';

export const settingOptions = [
  {
    title: 'Email',
    description: 'Receive email updates on comments you followed',
    Icon: Mail,
    isCheck: true,
  },
  {
    title: 'Text Messages',
    description: 'Receive updates by SMS',
    Icon: Type,
    isCheck: true,
  },
  {
    title: 'Automatically Delete items',
    description: 'Delete activities older than 3 months ',
    Icon: XCircle,
    isCheck: false,
  },
];
