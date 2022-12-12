import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderElement, IHeaderElement } from './HeaderElement';
import { mockHeaderElementActiveProps, mockHeaderElementInactiveProps } from './HeaderElement.mocks';

export default {
  title: 'layouts/Header/HeaderElement',
  component: HeaderElement,
  argTypes: {},
} as ComponentMeta<typeof HeaderElement>;

const Template: ComponentStory<typeof HeaderElement> = (args) => <HeaderElement {...args} />;

export const Active = Template.bind({});

Active.args = {
  ...mockHeaderElementActiveProps,
} as IHeaderElement;

export const Inactive = Template.bind({});

Inactive.args = {
  ...mockHeaderElementInactiveProps,
} as IHeaderElement;
