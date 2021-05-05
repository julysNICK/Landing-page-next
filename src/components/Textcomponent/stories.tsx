import { Meta, Story } from '@storybook/react/types-6-0';
import { Textcomponent, TextcomponentProps } from '.';

export default {
  title: 'Textcomponent',
  component: Textcomponent,
  args: {
    children: `Lorem ipsum dolor sit amet
    consectetur, adipisicing
     elit. Magni maxime porro tenetur dicta ad, nulla illum fuga laudantium nisi illo culpa deleniti doloremque, sed harum! Tempo
    ra excepturi expedita error impedit!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<TextcomponentProps> = (args) => {
  return (
    <div>
      <Textcomponent {...args} />
    </div>
  );
};
