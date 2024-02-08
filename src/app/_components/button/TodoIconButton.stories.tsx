import type { Meta, StoryObj } from '@storybook/react';
import { TodoIconButton } from './TodoIconButton';

const meta: Meta<typeof TodoIconButton> = {
    title: 'Home/TodoIconButton',
    component: TodoIconButton,
    argTypes: {
        onClick: {
            control: false,
        },
    },
};

type Story = StoryObj<typeof TodoIconButton>;

export const Default: Story = {};

export default meta;
