import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'utils/Button',
    component: Button,
    args: {
        label: 'ボタンのテキスト',
    },
};

type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
    args: {
        mode: 'primary',
    },
};

export const SecondaryButton: Story = {
    args: {
        mode: 'secondary',
    },
};

export default meta;
