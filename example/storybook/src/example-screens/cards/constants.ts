import { CircleCrossIcon, MailIcon, TextIcon } from './Icons';

export const settingOptions = [
  {
    title: 'Email',
    description: 'Receive email updates on comments you followed',
    Icon: MailIcon,
    isCheck: true,
  },
  {
    title: 'Text Messages',
    description: 'Receive updates by SMS',
    Icon: TextIcon,
    isCheck: true,
  },
  {
    title: 'Automatically Delete items',
    description: 'Delete activities older than 3 months ',
    Icon: CircleCrossIcon,
    isCheck: false,
  },
];
