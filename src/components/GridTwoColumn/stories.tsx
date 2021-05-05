import { Meta, Story } from '@storybook/react/types-6-0';
import { GridTwoColum, GridTwoColumProps } from '.';

import mock from './mock';

export default {
  title: 'GridTwoColum',
  component: GridTwoColum,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;
export const Template: Story<GridTwoColumProps> = (args) => {
  return (
    <div>
      <GridTwoColum {...args} />
    </div>
  );
};
