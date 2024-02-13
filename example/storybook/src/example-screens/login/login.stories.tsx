import type { ComponentMeta } from '@storybook/react-native';
import Login from './login';
const CardsMeta: ComponentMeta<typeof Login> = {
  title: 'example-screens/Login',
  component: Login,
};

export default CardsMeta;
export { Login };
