import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from './Loading';

const meta: Meta<typeof Loading> = {
    title: 'utils/Loading',
    component: Loading,
};

type Story = StoryObj<typeof Loading>;

export const Default: Story = {};

export default meta;
