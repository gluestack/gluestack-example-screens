import type { ComponentMeta } from '@storybook/react-native';
import restaurant from './restaurant';
const restaurantMeta: ComponentMeta<typeof restaurant> = {
  title: 'example-screens/restaurant',
  component: restaurant,
};

export default restaurantMeta;
export { restaurant };
