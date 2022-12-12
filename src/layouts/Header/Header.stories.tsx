import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header, IHeader } from './Header';

export default {
  title: 'layouts/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Base = Template.bind({});

Base.args = {} as IHeader;
