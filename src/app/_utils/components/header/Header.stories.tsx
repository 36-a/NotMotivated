import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
    title: 'utils/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
    },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
