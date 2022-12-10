import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderElement, IHeaderElementProps } from './HeaderElement';
import { mockHeaderElementActiveProps, mockHeaderElementInactiveProps } from './HeaderElement.mocks';

export default {
  title: 'layouts/Components/HeaderElement',
  component: HeaderElement,
  argTypes: {},
} as ComponentMeta<typeof HeaderElement>;

const Template: ComponentStory<typeof HeaderElement> = (args) => <HeaderElement {...args} />;

export const Active = Template.bind({});

Active.args = {
  ...mockHeaderElementActiveProps,
} as IHeaderElementProps;

export const Inactive = Template.bind({});

Inactive.args = {
  ...mockHeaderElementInactiveProps,
} as IHeaderElementProps;
